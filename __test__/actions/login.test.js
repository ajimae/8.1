import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/login';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'USER_LOGIN_SUCCESS';
    expectedAction.user = {
      email: 'john.doe@gmail.com',
      password: '123'
    };
    const actualAction = await actions.loginSuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'USER_LOGIN_FAILURE';
    expectedAction.error = {
      email: 'john.doe@gmail.com',
      password: '123'
    };
    const actualAction = actions.loginFailure(expectedAction.error);
    expect(actualAction).toEqual(expectedAction);
  });
});

describe('Should dispatch the right action', () => {
  afterEach(() => {
    expectedAction = {};
  });
  it('should dispatch a success action', () => {
    const mock = new MockAdapter(Axios);

    const data = {
      email: 'john.doe@gmail.com',
      password: '123'
    };

    const mockData = {
      type: 'USER_LOGIN_SUCCESS'
    };

    mock.onPost('https://ajimae.herokuapp.com/api/v1/auth/login')
      .reply(201, mockData);

    const expectedActions = [{
      type: 'USER_LOGIN_SUCCESS',
      user: {
        type: mockData.type
      }
    }];

    const store = mockStore({ data: {} });

    return store.dispatch(actions.login(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);

    const data = {
      email: 'john.doe@gmail.com',
      password: '123'
    };

    const error = 'Failed with status 400';
    const mockData = error;


    mock.onPost()
      .reply(400, mockData);

    const expectedActions = [{
      type: 'USER_LOGIN_FAILURE',
      error
    }];

    const store = mockStore({ data: {} });
    return store.dispatch(actions.login(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
