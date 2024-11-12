// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import groupReducer from './groupSlice';

const store = configureStore({
  reducer: {
    group: groupReducer, // group 슬라이스 추가
  },
});

export default store;