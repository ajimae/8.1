import React from 'react';
import '../../static/styles/reaction.scss';
import moment from 'moment';
import PropType from 'prop-types';

const Reaction = (props) => {
  const {
    questionProps, onChange, onSubmit
  } = props;
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-offset-2">
          <main>
            <div>
              {questionProps.data && <h2 className="title is-4 weight-semibold">
                {questionProps.data.Question[0].title}
              </h2>}
              {questionProps.data && <p className="is-pr-1">{questionProps.data.Question[0].description}</p>}
              <div className="is-pulled-right"><i className="fas fa-info-circle" />
                {questionProps.data && <span>{questionProps.data.Question[0].respondent}</span>}
                {questionProps.data && <span>
                  {moment(questionProps.data.Question[0].posted_at).format('LLL')}
                </span>}
              </div>
              <div>
                <br />
                <br />
                <br />
                <h2 className="title is-4 weight-semibold"><strong>Answers</strong></h2>
                <br />
                {questionProps.data && <div className="is-pr-1">{questionProps.data.Answers.map(answer => (
                  <div key={answer.id}>
                    <div>
                      {answer.answer}
                      <br />
                      <div className="is-pulled-right is-mb-1">
                        <span className="is-font-10">
                          {moment(answer.posted_at).format('LLL')}
                          &nbsp;</span>&nbsp;
                        <a className="tag is-link">{answer.upvote}&nbsp;upvote</a>&nbsp;
                        <span className="tag is-primary">{answer.views}&nbsp;views</span>
                      </div>
                      <hr className="" />
                    </div>
                  </div>
                ))}
                </div>}
                <br />
                <h3>Post answer</h3>
                <br />
                <form onSubmit={onSubmit}>
                  <textarea
                    className="textarea"
                    placeholder="Post your answer"
                    onChange={onChange}
                    id="answer"
                    rows="10"
                  />
                  <br />
                  <div className="action">
                    <a className="button is-rounded" onClick={onSubmit}>Post Answer</a>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </main>
        </div>
        <div className="column is-2">
          <aside>
            <h3 className="title is-4">Related</h3>
            <article className="widget-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse architecto consectetur
                     itaque tenetur excepturi fuga maxime consequatur repellat et.</p>
              <a href="#">
                <em>Show More</em>
              </a>
            </article>
          </aside>
        </div>
      </div>
    </div>

  );
};

Reaction.protoTypes = {
  questionProps: PropType.object
};

export default Reaction;
