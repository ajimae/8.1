import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import reducer from '../../src/redux/reducers/loginReducer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Reducers test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle USER_LOGIN_SUCCESS', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const action = {
      type: 'USER_LOGIN_SUCCESS',
      data: store.data
    };
    const expectedAction = {
      data: store.error
    };
    expect(reducer({}, action)).toEqual(expectedAction);
  });
  it('should handle USER_LOGIN_FAILURE', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const action = {
      type: 'USER_LOGIN_FAILURE',
      error: store.error
    };
    const expectedAction = {
      data: store.error
    };
    expect(reducer({}, action)).toEqual(expectedAction);
  });
});
