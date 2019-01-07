import React from 'react';
import '../../static/styles/activity.scss';

const Activity = (props) => {
  const { question } = props;
  return (
    <article className="post">
      <h4><a className="is-link">{question.title}</a></h4>
      <div className="media">
        <div className="media-content">
          <div className="content is-pulled-right">
            <p>
              <a href="#">@{question.respondent}</a> posted 34 minutes ago &nbsp;
              <span className="tag is-primary">3 Votes</span>
              &nbsp;&nbsp;
              <span className="tag is-info">{question.views} Views</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Activity;
