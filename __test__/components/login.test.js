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
  it('should simulate a click event', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <Login />
    </Provider>);
    wrapper.find('.button').simulate('click');
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
