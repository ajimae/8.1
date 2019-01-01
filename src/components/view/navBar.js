import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink className="navbar-item" to="/">
                  Home
                </NavLink>
              </p>
              <p className="control">
                <NavLink className="navbar-item" to="/demo">
                  Activity
                </NavLink>
              </p>
              <p className="control">
                <NavLink className="navbar-item" to="/login">
                  Login
                </NavLink>
              </p>
              <div className="control">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Docs
                  </a>
                  <div className="navbar-dropdown is-boxed">
                    <NavLink className="navbar-item" to="/">
                      Overview
                    </NavLink>
                    <NavLink className="navbar-item" to="/">
                      Modifiers
                    </NavLink>
                    <NavLink className="navbar-item" to="/">
                      Columns
                    </NavLink>
                    <NavLink className="navbar-item" to="/">
                      Layout
                    </NavLink>
                    <NavLink className="navbar-item" to="/">
                      Form
                    </NavLink>
                    <hr className="navbar-divider" />
                    <NavLink className="navbar-item" to="/">
                      Elements
                    </NavLink>
                    <NavLink className="navbar-item is-active" to="/">
                      Components
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
