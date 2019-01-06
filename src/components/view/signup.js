import React from 'react';
import '../../static/styles/form.scss';
import PropType from 'prop-types';

const Signup = (props) => {
  const {
    signup, onChange
  } = props;
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Signup</h3>
            <p className="subtitle has-text-grey">Please signup to proceed.</p>
            <div className="box">
              <form className="submitForm" onSubmit={signup}>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="text"
                      placeholder="Full name"
                      id="name"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input"
                      type="password"
                      placeholder="Confirm Password"
                      id="confirmPass"
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <button
                  className="button is-block is-info is-large is-fullwidth"
                >
                  Signup
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Login</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Signup.propTypes = {
  onChange: PropType.func,
  signup: PropType.func
};

export default Signup;
