import React, { useState } from 'react';

const Password = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
  const [charCount, setCharCount] = useState(0);

  // 비밀번호 입력을 처리하는 함수
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setCharCount(value.length);

    // 비밀번호 조건: 8~16자, 영문, 숫자, 특수문자 포함
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;

    if (passwordRegex.test(value)) {
      setMessage('사용 가능한 비밀번호에요');
    } else if (value.length >= 8 && value.length <= 16) {
      setMessage('영문, 숫자, 특수문자를 모두 포함해주세요.');
    } else {
      setMessage('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
    }
  };

  return (
    <div className="password_wrap">
      <h1>안전한 비밀번호를 입력해주세요</h1>
      <p>비밀번호</p>
      <input
        type="password"
        className="pw"
        placeholder="8~16자리 영문, 숫자, 특수문자를 입력해주세요."
        value={password}
        onChange={handleChange}
      />
      <p>{message}</p>
      <p>({charCount}/16)</p>
    </div>
  );
};

export default Password;
