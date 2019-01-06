import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/activity';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'LOAD_ACTIVITY_SUCCESS';
    const actualAction = await actions.activitySuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'LOAD_ACTIVITY_FAILURE';
    const actualAction = actions.activityFailure(expectedAction.error);
    expect(actualAction).toEqual(expectedAction);
  });
});

describe('Should dispatch the right action', () => {
  afterEach(() => {
    expectedAction = {};
  });
  it('should dispatch a success action', () => {
    const mock = new MockAdapter(Axios);
    const data = 'LOAD_ACTIVITY_SUCCESS';

    const mockData = 'LOAD_ACTIVITY_SUCCESS';

    mock.onGet('https://ajimae.herokuapp.com/api/v1/questions')
      .reply(201, mockData);

    const expectedActions = [{
      type: 'LOAD_ACTIVITY_SUCCESS',
      data
    }];

    const store = mockStore({});

    return store.dispatch(actions.activity()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);
    const error = 'LOAD_ACTIVITY_FAILURE';

    const mockData = 'LOAD_ACTIVITY_FAILURE';

    mock.onGet('https://ajimae.herokuapp.com/api/v1/questions')
      .reply(404, mockData);

    const expectedActions = [{
      type: 'LOAD_ACTIVITY_FAILURE',
      error
    }];

    const store = mockStore({});

    return store.dispatch(actions.activity()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
