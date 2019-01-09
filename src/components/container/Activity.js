import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import ActivityView from '../view/activity';
import { activity } from '../../redux/actionCreators/activity';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {}
    };
    this.showQuestion = this.showQuestion.bind(this);
  }

  async componentWillMount() {
    const activities = await this.props.activity();
    this.setState({
      activity: activities
    });
  }

  showQuestion(id) {
    localStorage.setItem('id', id);
    this.props.history.push('/view', { prev: 'activity' });
  }

  render() {
    let allQuestion;
    if (typeof this.state.activity !== 'undefined'
          && typeof this.state.activity.data !== 'undefined') {
      const { Questions } = this.state.activity.data;
      allQuestion = Questions;
    }


    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <h1>Top Question</h1>
          {allQuestion && allQuestion
            .map((question, index) => (<ActivityView key={index}
              question={question}
              showQuestion={this.showQuestion}
            />))}
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  activity: PropType.func,
  history: PropType.object,
};

const mapStateToProps = (state) => {
  return {
    activityProps: state.activity
  };
};

const mapDispatchToProps = {
  activity: () => activity()
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
