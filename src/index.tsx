import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import MainPage from './components/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './utils/store';

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
