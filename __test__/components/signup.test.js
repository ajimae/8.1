import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signup from '../../src/components/container/Signup';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pagination Test', () => {
  it('should return true if component exists', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <Signup />
    </Provider>);
    expect(wrapper.find('.box').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });
  it('should simulate a click event', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <Signup />
    </Provider>);
    wrapper.find('.button').simulate('click');
  });
});
describe('<Signup /> shallow rendering tests', () => {
  const mockLoginFn = jest.fn();
  let wrapper;

  const initialState = {};
  const store = mockStore(initialState);

  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <Signup onSubmit={mockLoginFn} />
    </Provider>);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Signup store={store} />);
    expect(tree).toMatchSnapshot();
  });
});
