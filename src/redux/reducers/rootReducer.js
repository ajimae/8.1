import { combineReducers } from 'redux';
import signup from './signupReducer';
import activity from './activityReducer';
import login from './loginReducer';
import question from './questionReducer';
import answer from './answerReducer';

export default combineReducers({
  login,
  signup,
  answer,
  question,
  activity
});
