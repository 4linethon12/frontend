// src/redux/groupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    groupName: '', // 초기 상태
  },
  reducers: {
    setGroupName: (state, action) => {
      state.groupName = action.payload;
    },
  },
});

export const { setGroupName } = groupSlice.actions; // 액션 생성 함수 내보내기
export default groupSlice.reducer;