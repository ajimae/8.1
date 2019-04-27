import React, { Component } from 'react';
import { ToastContainer, notifier } from '../../utilities/notifier';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: ''
    };
  }

  componentWillMount() {
    localStorage.setItem('x-access-token', '');
    notifier('Logging you out...', 'success');
    // setTimeout(() => {
    //   this.props.history.push('/', { prev: 'login' });
    // }, 5000);
    return setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }

  render() {
    return (
      <center>
        <ToastContainer autoClose={3000} />
        <h1 className="title is-3">
        Logout Page</h1>
      </center>
    );
  }
}

export default Logout;
