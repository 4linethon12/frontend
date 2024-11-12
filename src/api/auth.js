
// src/api/auth.js
import axios from 'axios';

export const login = async (nickname, password) => {
  try {
    const response = await axios.post('http://43.201.50.47:8000/api/users/login/', {
      nickname,
      password,
    });
    const token = response.data.access?.token;
    if (token) {
      localStorage.setItem('token', token); // access 토큰을 localStorage에 저장
    } else {
      console.error('Access 토큰이 응답에 없습니다.');
    }
    
    return token;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};