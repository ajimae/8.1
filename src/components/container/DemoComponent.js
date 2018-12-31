import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { demoAction } from '../../redux/actionCreators/demoAction';

class App extends Component {
  demoAction = () => {
    this.props.demo();
  }

  render() {
    return (
      <div>
        <center>
          <h1 className="title">Demo Page</h1>
          <pre>
            { JSON.stringify(this.props) }
          </pre>
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
