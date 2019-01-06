import { combineReducers } from 'redux';
import signup from './signupReducer';
import activity from './activityReducer';

export default combineReducers({
  signup,
  activity
});
