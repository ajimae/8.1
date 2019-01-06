import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import reducer from '../../src/redux/reducers/activityReducer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Reducers test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle LOAD_ACTIVITY_SUCCESS', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const action = {
      type: 'LOAD_ACTIVITY_SUCCESS',
      data: store.data
    };
    const expectedAction = {
      data: store.error
    };
    expect(reducer({}, action)).toEqual(expectedAction);
  });
  it('should handle LOAD_ACTIVITY_FAILURE', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const action = {
      type: 'LOAD_ACTIVITY_FAILURE',
      error: store.error
    };
    const expectedAction = {
      data: store.error
    };
    expect(reducer({}, action)).toEqual(expectedAction);
  });
});
