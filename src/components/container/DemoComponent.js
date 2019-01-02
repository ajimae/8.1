import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { demoAction } from '../../redux/actionCreators/demoAction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Demo Page'
    };
  }

  demoAction = () => {
    this.setState({ title: 'Active Page' });
  }

  render() {
    return (
      <div>
        <center>
          <h1 className="title">{this.state.title}</h1>
          <button className="button" onClick={this.demoAction}>Test redux action</button>
        </center>
      </div>
    );
  }
}


App.propTypes = {
  demo: PropTypes.func
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  demo: () => dispatch(demoAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
