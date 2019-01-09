import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/question';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'LOAD_QUESTION_SUCCESS';
    const actualAction = await actions.questionSuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'LOAD_QUESTION_FAILURE';
    const actualAction = actions.questionFailure(expectedAction.error);
    expect(actualAction).toEqual(expectedAction);
  });
});

describe('Should dispatch the right action', () => {
  afterEach(() => {
    expectedAction = {};
  });
  it('should dispatch a success action', () => {
    const mock = new MockAdapter(Axios);
    const data = 'LOAD_QUESTION_SUCCESS';

    const mockData = 'LOAD_QUESTION_SUCCESS';

    mock.onGet(`https://ajimae.herokuapp.com/api/v1/questions/${5}`)
      .reply(200, mockData);

    const expectedActions = [{
      type: 'LOAD_QUESTION_SUCCESS',
      data
    }];

    const store = mockStore({});

    return store.dispatch(actions.question(5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);
    // const error = 'LOAD_QUESTION_FAILURE';

    const mockData = 'LOAD_QUESTION_FAILURE';

    mock.onGet(`https://ajimae.herokuapp.com/api/v1/questions/${5}`)
      .reply(404, mockData);

    const expectedActions = [{
      type: 'LOAD_QUESTION_FAILURE'
    }];

    const store = mockStore({});

    return store.dispatch(actions.question()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
