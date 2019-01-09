/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import Reactions from '../view/reaction';
import { question } from '../../redux/actionCreators/question';
import isLoggedIn from '../../utilities/isLoggedIn';
import { answer } from '../../redux/actionCreators/answer';
import { ToastContainer, notifier } from '../../utilities/notifier';

class Reaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      questions: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const id = localStorage.getItem('id');
    const {
      history
    } = this.props;
    if (!id) { history.push('/activity', { prev: 'login' }); }
  }

  async componentWillMount() {
    const id = localStorage.getItem('id');
    const questions = await this.props.question(id);
    this.setState({
      questions
    });
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onSubmit() {
    if (isLoggedIn()) {
      const { id } = this.state.questions.data.Question[0];
      const data = {
        id,
        answer: this.state.answer
      };
      return this.props.answer(data);
    }
    return notifier('Please login to post answer', 'success');
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Reactions
          questionProps={this.state.questions}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

Reaction.protoTypes = {
  answer: PropType.func,
  history: PropType.func,
  question: PropType.func,
};

const mapStateToProps = (state) => {
  return {
    answerProps: state.answer,
    questionProps: state.question
  };
};

const mapDispatchToProps = {
  question: id => question(id),
  answer: data => answer(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Reaction);
