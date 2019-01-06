import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../static/styles/navbar.scss';

const NavBar = () => {
  return (
    <div className="container is-fluid">
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" to="/">
            Stackoverflowlite
          </a>
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
          <NavLink className="nav-item" to="/signup">
            Signup
          </NavLink>
          <NavLink className="nav-item" to="">
            Profile
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
