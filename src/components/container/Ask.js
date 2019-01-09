import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AskView from '../view/ask';
import isLoggedIn from '../../utilities/isLoggedIn';
import { ask } from '../../redux/actionCreators/ask';
import { ToastContainer, notifier } from '../../utilities/notifier';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      question: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    if (isLoggedIn()) {
      if (this.state.title === '' && this.state.question === '') {
        notifier('All fields are required', 'success');
      }
      const response = await this.props.ask(this.state);
      if (response.type === 'POST_QUESTION_SUCCESS') {
        this.setState({
          title: '',
          question: ''
        });
        return notifier('Question Posted Successfully', 'success');
      }
    } else {
      this.setState({
        title: '',
        question: ''
      });
      return notifier('Please login to post answer', 'success');
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <AskView
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          title={this.state.title}
          question={this.state.question}
        />
      </div>

    );
  }
}

Ask.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    askProps: state.ask
  };
};

const mapDispatchToProps = {
  ask: data => ask(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
