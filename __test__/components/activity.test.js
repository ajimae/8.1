import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Activity from '../../src/components/container/Activity';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Activity Component Test', () => {
  it('should return true if component exists', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}>
      <Activity />
    </Provider>);
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Top Question');
  });
});
describe('<Activity /> shallow rendering tests', () => {
  const initialState = {};
  const store = mockStore(initialState);

  it('matches the snapshot', () => {
    const tree = shallow(<Activity store={store} />);
    expect(tree).toMatchSnapshot();
  });
});
