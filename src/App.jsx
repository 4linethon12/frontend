// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // store 경로를 확인하세요
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;