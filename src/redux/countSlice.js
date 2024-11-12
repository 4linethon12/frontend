// src/redux/countSlice.js
import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;
export default countSlice.reducer;