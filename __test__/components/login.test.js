import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../../src/components/container/Login';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login Component Test', () => {
  it('should return true if component exists', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <Login />
    </Provider>);
    expect(wrapper.find('.box').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });
  it('should simulate a click event', async () => {
    const initialState = {};
    const store = mockStore(initialState);

    const props = {
      login: () => ({
        type: 'USER_LOGIN_FAILURE'
      }),
      history: {
        push: jest.fn()
      }
    };

    const wrapper = mount(<Provider store={store}>
      <Login {...props} />
    </Provider>);
    wrapper.find('.button').simulate('click');

    const changeEvent = {
      target: {
        id: 1,
        value: 'x'
      }
    };
    wrapper.find('input').first().simulate('change', changeEvent);
    const submitEvent = {
      preventDefault: jest.fn()
    };

    const shallowWrapper = shallow(<Login store={store} {...props} />);

    const instance = shallowWrapper.dive().instance();
    await instance.handleSubmit(submitEvent);
  });
});
describe('<Login /> shallow rendering tests', () => {
  const initialState = {};
  const store = mockStore(initialState);

  it('matches the snapshot', () => {
    const tree = shallow(<Login store={store} />);
    expect(tree).toMatchSnapshot();
  });
});
