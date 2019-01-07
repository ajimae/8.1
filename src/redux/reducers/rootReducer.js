import { combineReducers } from 'redux';
import signup from './signupReducer';
import activity from './activityReducer';
import login from './loginReducer';

export default combineReducers({
  login,
  signup,
  activity
});
