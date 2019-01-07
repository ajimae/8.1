import React from 'react';
import '../../static/styles/form.scss';
import PropType from 'prop-types';

const Login = (props) => {
  const {
    login, onChange
  } = props;
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <form onSubmit={login}>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="email"
                      placeholder="Your Email"
                      id="email"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="password"
                      placeholder="Your Password"
                      id="password"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Login</button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropType.func,
  onChange: PropType.func
};

export default Login;
