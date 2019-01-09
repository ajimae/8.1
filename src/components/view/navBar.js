import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../static/styles/navbar.scss';
import isLoggedIn from '../../utilities/isLoggedIn';

const NavBar = () => {
  const show = isLoggedIn() ? (
    <NavLink className="nav-item" to="/ask">
      Ask a question
    </NavLink>
  ) : (
    <NavLink className="nav-item" to="/login">
        Login
    </NavLink>
  );

  return (
    <div className="container is-fluid">
      <nav className="nav">
        <div className="nav-left">
          <Link className="nav-item" to="/">
            <spn className="title is-4">Stackoverflowlite</spn>
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="nav-toggle">
          <span />
          <span />
          <span />
        </label>
        <input type="checkbox" id="menu-toggle" className="is-hidden" />
        <div className="nav-right nav-menu">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/activity">
            Activity
          </NavLink>
          {show}
          {isLoggedIn() ? (
            <NavLink className="nav-item" to="/profile">
              Profile
            </NavLink>
          ) : (null)}
          {isLoggedIn() ? (
            <NavLink className="nav-item" to="/logout">
              Logout
            </NavLink>
          ) : (null)}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
