import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/answer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'POST_ANSWER_SUCCESS';
    const actualAction = await actions.answerSuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'POST_ANSWER_FAILURE';
    const actualAction = actions.answerFailure(expectedAction.error);
    expect(actualAction).toEqual(expectedAction);
  });
});

describe('Should dispatch the right action', () => {
  afterEach(() => {
    expectedAction = {};
  });
  it('should dispatch a success action', () => {
    const mock = new MockAdapter(Axios);
    const data = 3;

    const mockData = { answer: 'POST_ANSWER_SUCCESS' };

    mock.onPost()
      .reply(201, mockData);

    const expectedActions = [{
      type: 'POST_ANSWER_SUCCESS',
      user: mockData
    }];

    const store = mockStore({});

    return store.dispatch(actions.answer(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);
    const error = mock.id;

    const mockData = 'POST_ANSWER_FAILURE';

    mock.onPost(`https://ajimae.herokuapp.com/api/v1/questions/${5}/answers`)
      .reply(404, mockData);

    const expectedActions = [{
      type: 'POST_ANSWER_FAILURE',
      error
    }];

    const store = mockStore({});

    return store.dispatch(actions.answer()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
