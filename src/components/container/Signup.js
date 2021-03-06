import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

import SignupView from '../view/signup';
import { signup } from '../../redux/actionCreators/signup';
import { ToastContainer, notifier } from '../../utilities/notifier';


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPass: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const acxn = await this.props.signup(this.state);
    if (acxn.type === 'USER_SIGNUP_FAILURE') {
      return notifier(acxn.error.error, 'success');
    }
    notifier('Signup successful', 'success');
    return setTimeout(() => this.props.history.push('/activity', { prev: 'signup' }), 5000);
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <SignupView
          signup={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func,
  signupProps: PropTypes.array,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    signupProps: state.signup
  };
};

const mapDispatchToProps = {
  signup: data => signup(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
