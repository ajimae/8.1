import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes/Routes';

const store = configureStore();
window.store = store;

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>
), document.querySelector('#app'));
