import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DemoComponent from '../../src/components/container/DemoComponent';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Demo component', () => {
  it('Show Demo Page', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <DemoComponent />
    </Provider>);
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.find('.title').text()).toBe('Demo Page');
  });
  it('Show Active Page', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <DemoComponent />
    </Provider>);
    wrapper.find('.button').simulate('click');
    expect(wrapper.find('.title').text()).toBe('Active Page');
  });
});
