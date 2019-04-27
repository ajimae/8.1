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

  async onSubmit() {
    if (isLoggedIn()) {
      const { id } = this.state.questions.data.Question[0];
      const data = {
        id,
        answer: this.state.answer
      };
      const postedAnswer = await this.props.answer(data);
      const questions = await this.props.question(id);
      this.setState({
        questions,
        answer: postedAnswer
      });
      this.setState({
        answer: ''
      });
      return notifier('Answer posted successfully', 'success');
    }
    return notifier('Please login to post answer', 'success');
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Reactions
          questionProps={this.state.questions}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          answers={this.state.answer}
        />
      </div>
    );
  }
}

Reaction.propTypes = {
  answer: PropType.func,
  history: PropType.object,
  question: PropType.func,
};

const mapStateToProps = (state) => {
  return {
    ...state,
    answerProps: state.answer,
    questionProps: state.question
  };
};

const mapDispatchToProps = {
  question: id => question(id),
  answer: data => answer(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Reaction);
