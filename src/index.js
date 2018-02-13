import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux-flow/configure-store/';
import App from './app';

const store = configureStore();

console.log(store.getState());

render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('[data-js="app"]'),
);
