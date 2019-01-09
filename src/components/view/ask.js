import React from 'react';
import PropType from 'prop-types';

const Ask = (props) => {
  const {
    onChange,
    onSubmit,
    title,
    question,
  } = props;
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Post Your Question</h3>
            <div className="box">
              <form onSubmit={onSubmit}>
                <input type="text"
                  className="input"
                  placeholder="Enter title here"
                  id="title"
                  required
                  value={title}
                  onChange={onChange}
                />
                <br />
                <br />
                <textarea
                  className="textarea"
                  placeholder="Type in your question"
                  rows="10"
                  required
                  id="question"
                  onChange={onChange}
                  value={question}
                />
                <br />
                <button className="button is-block is-info is-large is-fullwidth">Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Ask.propTypes = {
  login: PropType.func,
  onChange: PropType.func,
  onSubmit: PropType.func
};

export default Ask;
