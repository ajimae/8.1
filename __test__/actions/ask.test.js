import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/ask';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'POST_QUESTION_SUCCESS';
    const actualAction = await actions.askSuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'POST_QUESTION_FAILURE';
    const actualAction = actions.askFailure(expectedAction.error);
    expect(actualAction).toEqual(expectedAction);
  });
});

describe('Should dispatch the right action', () => {
  afterEach(() => {
    expectedAction = {};
  });
  it('should dispatch a success action', () => {
    const mock = new MockAdapter(Axios);
    const data = 'POST_QUESTION_SUCCESS';

    const mockData = 'POST_QUESTION_SUCCESS';

    mock.onPost('https://ajimae.herokuapp.com/api/v1/questions')
      .reply(200, mockData);

    const expectedActions = [{
      type: 'POST_QUESTION_SUCCESS',
      data
    }];

    const store = mockStore({});

    return store.dispatch(actions.ask(5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);
    // const error = 'POST_QUESTION_FAILURE';

    const mockData = 'POST_QUESTION_FAILURE';

    mock.onPost('https://ajimae.herokuapp.com/api/v1/questions')
      .reply(404, mockData);

    const expectedActions = [{
      type: 'POST_QUESTION_FAILURE',
      error: mock.error
    }];

    const store = mockStore({});

    return store.dispatch(actions.ask()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
