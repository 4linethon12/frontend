import React, { useState } from 'react';
import back from '../../assets/img/join/left.svg';
import cancel from '../../assets/img/join/x.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import Eye from '../../assets/img/join/eye.svg';
import Noneye from '../../assets/img/join/noneeye.svg';
import IconCheck from '../../assets/img/join/circlecheck.svg';
import IconX from '../../assets/img/join/circlex.svg';
import { join } from '../../api/registerauth';


const Password = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
  const [charCount, setCharCount] = useState(0);
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = location.state?.nickname;

  // 비밀번호 입력 처리
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setCharCount(value.length);

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
    if (passwordRegex.test(value)) {
      setMessage('사용 가능한 비밀번호에요');
      setIsValid(true);
    } else if (value.length >= 1 && value.length <= 16) {
      setMessage('영문, 숫자, 특수문자를 모두 포함해주세요.');
      setIsValid(false);
    } else {
      setMessage('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
      setIsValid(false);
    }
  };

  // 아이콘 클릭 시 비밀번호 표시/숨김
  const handlePwState = (e) => {
    e.preventDefault();
    setPwType((prevState) => ({
      type: prevState.visible ? 'password' : 'text',
      visible: !prevState.visible,
    }));
  };

  // 포커스 상태 업데이트
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleRegister = async () => {
    try {
      if (nickname && isValid) {
        await join(nickname, password);
        localStorage.setItem('nickname', nickname);
        navigate('/done');
      }
    } catch (error) {
      alert('회원가입 실패: 아이디 또는 비밀번호를 확인하세요');
    }
  };

  return (
    <div className="join_wrap">
      <div className="top">
        <div className="back" onClick={() => navigate(-1)}><img src={back} alt="뒤로가기" /></div>
        <div className="cancel" onClick={() => navigate('/enter')}><img src={cancel} alt="취소" /></div>
      </div>

      <div className="join_header_re">
        <p className="hi">안전한 비밀번호를 <br /> 입력해 주세요.</p>
        <p className="join_text">비밀번호</p>
        <div className="input_area" style={{ position: 'relative' }}>
          <input
            type={pwType.type}
            className="pw"
            placeholder="8~16자리 영문, 숫자, 특수문자"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {password.length > 0 && ( // 비밀번호 입력이 있을 경우에만 유효성 아이콘 표시
            isFocused ? (
              <span className="eye" onMouseDown={handlePwState} style={{ position: 'absolute', right: '10px', top: '63%', transform: 'translateY(-50%)' }}>
                <img src={pwType.visible ? Noneye : Eye} alt="비밀번호 표시" />
              </span>
            ) : (
              <span className="eye" style={{ position: 'absolute', right: '10px', top: '63%', transform: 'translateY(-50%)' }}>
                <img src={isValid ? IconCheck : IconX} alt="유효성 아이콘" />
              </span>
            )
          )}
        </div>

        <div className="alert">
          <p className="join_alert">{message}</p>
          <p className="join_alert">({charCount}/16)</p>
        </div>
      </div>

      <button
        className="next_button"
        style={{
          backgroundColor: password ? '#8F1426CC' : '#CFD3D5',
          color: password ? '#DCDCDC' : '#B2AEAE',
          cursor: password ? 'pointer' : 'not-allowed',
        }}
        onClick={handleRegister}
        disabled={!password}
      >
        다음
      </button>
    </div>
  );
};

export default Password;
