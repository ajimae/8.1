import React from 'react';

const Home = () => {
  return (
    <div className="hero-body is-info hero is-fullheight">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3 weight">
          <h2 className="title is-3 is-mt-5">
            Welcome to StackOverFlowLite
          </h2>
          <div>
            <a href="/signup" className="button is rounded is-primary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
