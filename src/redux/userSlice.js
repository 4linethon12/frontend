import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    groupName: '', // 초기 상태 설정
    mission: '', 
    code: '',
    // 다른 초기 상태
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    setGroupName: (state, action) => {
      state.groupName = action.payload; // 그룹 이름 업데이트
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setMission: (state, action) => {
      state.mission = action.payload;
    },
    setCode: (state, action) => { // code 저장 액션 추가
      state.code = action.payload;
    },
  },
});

export const { setGroupName, setNickname, setMission, setCode } = userSlice.actions;

export default userSlice.reducer;