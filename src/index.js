// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // createRoot 사용

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);