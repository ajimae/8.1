import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/redux/actionCreators/signup';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let expectedAction = {};

describe('Should create the right actions', () => {
  beforeEach(() => {
    expectedAction = {};
  });
  it('Create a success action', async () => {
    expectedAction.type = 'USER_SIGNUP_SUCCESS';
    expectedAction.user = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '123',
      username: 'meeky',
      confirmPass: '123'
    };
    const actualAction = await actions.signupsuccess(expectedAction.user);
    expect(actualAction).toEqual(expectedAction);
  });
  it('Create a failure action', () => {
    expectedAction.type = 'USER_SIGNUP_FAILURE';
    expectedAction.error = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '123',
      username: 'meeky'
    };
    const actualAction = actions.signupfailure(expectedAction.error);
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
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '123',
      username: 'meeky',
      confirmPass: '123'
    };

    const mockData = {
      type: 'USER_SIGNUP_SUCCESS'
    };

    mock.onPost('https://ajimae.herokuapp.com/api/v1/auth/signup')
      .reply(201, mockData);

    const expectedActions = [{
      type: 'USER_SIGNUP_SUCCESS',
      user: {
        type: mockData.type
      }
    }];

    const store = mockStore({ data: {} });

    return store.dispatch(actions.signup(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failure action', () => {
    const mock = new MockAdapter(Axios);

    const data = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '123',
      username: 'meeky'
    };

    const error = 'Failed with status 400';
    const mockData = error;


    mock.onPost()
      .reply(400, mockData);

    const expectedActions = [{
      type: 'USER_SIGNUP_FAILURE',
      error
    }];

    const store = mockStore({ data: {} });
    return store.dispatch(actions.signup(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
