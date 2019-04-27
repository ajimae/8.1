import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

import { login } from '../../redux/actionCreators/login';
import { ToastContainer, notifier } from '../../utilities/notifier';

import LoginView from '../view/login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    const acxn = await this.props.login(this.state);
    if (acxn.type === 'USER_LOGIN_FAILURE') {
      return notifier(acxn.error.error, 'success');
    }
    notifier('Login successful', 'success');
    return setTimeout(() => {
      window.location.href = '/activity';
    }, 5000);
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <LoginView
          login={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    loginProps: state.login
  };
};

const mapDispatchToProps = {
  login: data => login(data)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
