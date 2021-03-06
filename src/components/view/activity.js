/* eslint-disable react/jsx-no-bind */
import React from 'react';
import '../../static/styles/activity.scss';
import PropType from 'prop-types';

const Activity = (props) => {
  const { question, showQuestion } = props;
  return (
    <article className="post">
      <h4><a onClick={() => showQuestion(question.id)} className="is-link">{question.title}</a></h4>
      <div className="media">
        <div className="media-content">
          <div className="content is-pulled-right">
            <p>
              <a href="#">@{question.respondent}</a> posted 34 minutes ago &nbsp;
              <span className="tag is-primary">{question.votes} Votes</span>
              &nbsp;&nbsp;
              <span className="tag is-info">{question.views} Views</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

Activity.propTypes = {
  question: PropType.object,
  showQuestion: PropType.func
};

export default Activity;
