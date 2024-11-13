import React, { useState } from 'react';
import back from '../../assets/img/join/left.svg';
import cancel from '../../assets/img/join/x.svg';
import { useNavigate } from 'react-router-dom';
import Eye from '../../assets/img/join/eye.svg';  // 비밀번호를 보여주는 아이콘
import Noneye from '../../assets/img/join/noneeye.svg';  // 비밀번호를 숨기는 아이콘
import IconCheck from '../../assets/img/join/circlecheck.svg';  // 비밀번호 유효할 때 보여줄 아이콘
import IconX from '../../assets/img/join/circlex.svg';  // 비밀번호 유효하지 않을 때 보여줄 아이콘

const Password = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
  const [charCount, setCharCount] = useState(0);
  const [pwType, setPwType] = useState({
    type: "password",  // 기본값은 비밀번호 숨김
    visible: false,    // 비밀번호 숨김 상태
  });
  const [isValid, setIsValid] = useState(false); // 비밀번호 유효성 여부
  const [isFocused, setIsFocused] = useState(false); // 입력 중인지 여부
  const navigate = useNavigate();

  // 비밀번호 입력을 처리하는 함수
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setCharCount(value.length);

    // 비밀번호 조건: 8~16자, 영문, 숫자, 특수문자 포함
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;

    if (passwordRegex.test(value)) {
      setMessage('사용 가능한 비밀번호에요');
      setIsValid(true); // 비밀번호가 유효함
    } else if (value.length >= 1 && value.length <= 16) {
      setMessage('영문, 숫자, 특수문자를 모두 포함해주세요.');
      setIsValid(false); // 비밀번호가 유효하지 않음
    } else {
      setMessage('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
      setIsValid(false); // 비밀번호가 유효하지 않음
    }
  };

  // 눈 아이콘 클릭 시 비밀번호 표시/숨김 처리
  const handlePwState = () => {
    setPwType((prevState) => ({
      type: prevState.visible ? "password" : "text", // 비밀번호를 text로 설정하면 보이고 password면 숨김
      visible: !prevState.visible,
    }));
  };

  // 뒤로 가기
  const handleBackClick = () => {
    navigate(-1);
  };

  // 완료 페이지로 이동
  const goToDone = () => {
    navigate('/done');
  };

  // 입력 시작 시 포커스 상태 변경
  const handleFocus = () => {
    setIsFocused(true);  // 키보드가 올라오면 isFocused를 true로 설정
  };

  // 입력 종료 시 포커스 상태 변경
  const handleBlur = () => {
    setIsFocused(false); // 키보드가 내려가면 isFocused를 false로 설정
  };

  return (
    <div className="join_wrap">
      <div className="top">
        <div className="back" onClick={handleBackClick}><img src={back} alt="뒤로가기" /></div>
        <div className="cancel" onClick={() => navigate('/enter')}><img src={cancel} alt="취소" /></div>
      </div>

      <div className="join_header_re">
        <p className="hi">안전한 비밀번호를 <br /> 입력해 주세요.</p>
        <p className="join_text">비밀번호</p>
        <div className="input_area">
          <input
            type={pwType.type}
            className="pw"
            placeholder="8~16자리 영문, 숫자, 특수문자"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}  // 입력 중 상태 감지
            onBlur={handleBlur}
          />

          {/* 입력 중일 때만 비밀번호 표시/숨김 아이콘 보이게 */}
          {isFocused && (
            <span onClick={handlePwState} className="eye"> {/* 클릭 시 비밀번호 표시/숨김 */}
              {password && !pwType.visible ? (
                <img src={Eye} alt="비밀번호 숨김" />
              ) : password ? (
                <img src={Noneye} alt="비밀번호 보기" />
              ) : null}
            </span>
          )}

          {/* 비밀번호 유효성에 따라 아이콘 변경 */}
          {!isFocused && (
            <span className="eye"> {/* 입력 중이지 않을 때 아이콘 표시 */}
              {isValid ? (
                <img src={IconCheck} alt="비밀번호 유효" />
              ) : (
                <img src={IconX} alt="비밀번호 유효하지 않음" />
              )}
            </span>
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
          backgroundColor: password ? '#8F1426CC' : '#CFD3D5', // 버튼 배경
          color: password ? '#DCDCDC' : '#B2AEAE', // 버튼 글자
          cursor: password ? 'pointer' : 'not-allowed', // 입력이 없으면 클릭 비활성화
        }}
        onClick={goToDone}
        disabled={!password} // 비밀번호가 없으면 버튼 비활성화
      >
        다음
      </button>
    </div>
  );
};

export default Password;
