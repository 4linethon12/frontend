import React, { useState } from 'react';
import '../../assets/css/join.css';
import cancel from '../../assets/img/join/x.svg';
import { useNavigate } from 'react-router-dom';
import IconCheck from '../../assets/img/join/circlecheck.svg';
import IconX from '../../assets/img/join/circlex.svg';

const Join = () => {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('이모지, 특수문자를 사용할 수 없어요.');
  const [charCount, setCharCount] = useState(0);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  // 닉네임 입력을 처리하는 함수
  const handleChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setCharCount(value.length);

    // 닉네임에 이모지나 특수문자가 포함되었는지 체크
    if (/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/.test(value)) {
      setMessage('이모지, 특수문자를 사용할 수 없어요.');
      setIsValid(false);
    } else if (value.length > 8) {
      setMessage('8자 이하로 입력해주세요.');
      setIsValid(false);
    } else if (value.length > 0) {
      setMessage('사용 가능한 닉네임이에요');
      setIsValid(true);
    } else {
      setMessage('이모지, 특수문자를 사용할 수 없어요.');
      setIsValid(false);
    }
  };

  const goToEnterPage = () => {
    navigate('/enter');
  };

  const goToPassword = () => {
    navigate('/password', { state: { nickname } });
  };

  return (
    <div className="join_wrap">
      <div className="single_can" onClick={goToEnterPage}>
        <img src={cancel} alt="취소" />
      </div>

      <div className="join_header">
        <p className="hi">반가워요! <br /> 어떻게 불러드리면 될까요?</p>

        <p className="join_text">닉네임</p>
        <div className="input_area" style={{ position: 'relative' }}>
          <input
            type="text"
            className="id"
            placeholder="닉네임"
            value={nickname}
            onChange={handleChange}
          />
          {/* 유효성 아이콘 조건부 렌더링 */}
          {nickname.length > 0 && (
            <img
              src={isValid ? IconCheck : IconX}
              alt="유효성 아이콘"
              style={{ position: 'absolute', right: '11px', top: '37px', transform: 'translateY(-50%)' }}
            />
          )}`
        </div>
        <div className="alert">
          <p className="join_alert">{message}</p>
          <p className="join_alert">({charCount}/8)</p>
        </div>
      </div>

      <button
        className="next_button"
        style={{
          backgroundColor: nickname ? '#8F1426CC' : '#CFD3D5', // 버튼 배경
          color: nickname ? '#DCDCDC' : '#B2AEAE', // 버튼 글자
          cursor: nickname ? 'pointer' : 'not-allowed', // 입력이 없으면 클릭 비활성화
        }}
        onClick={goToPassword}
        disabled={!nickname} // 닉네임이 없으면 버튼 비활성화
      >
        다음
      </button>
    </div>
  );
};

export default Join;