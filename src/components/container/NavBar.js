import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBarView from '../view/navBar';

class ConnectedNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: undefined,
    };
  }

  render() {
    return (
      <NavBarView key={this.key} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
});

const NavBar = connect(mapStateToProps)(ConnectedNavBar);
export default NavBar;
