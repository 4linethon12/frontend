import React, { useState } from 'react';

const Join = () => {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('이모지, 특수문자를 사용할 수 없어요.');
  const [charCount, setCharCount] = useState(0);

  // 닉네임 입력을 처리하는 함수
  const handleChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setCharCount(value.length);

    // 닉네임에 이모지나 특수문자가 포함되었는지 체크
    if (/[^a-zA-Z0-9]/.test(value)) {
      setMessage('이모지, 특수문자를 사용할 수 없어요.');
    } else if (value.length > 8) {
      setMessage('8자 이하로 입력해주세요.');
    } else if (value.length > 0) {
      setMessage('사용 가능한 닉네임이에요');
    } else {
      setMessage('이모지, 특수문자를 사용할 수 없어요.');
    }
  };

  return (
    <div className="join_wrap">
      <h1>반가워요! 어떻게 불러드리면 될까요?</h1>
      <p>닉네임</p>
      <input
        type="text"
        className="id"
        placeholder="닉네임"
        value={nickname}
        onChange={handleChange}
      />
      <p>{message}</p>
      <p>({charCount}/8)</p>
    </div>
  );
};

export default Join;
