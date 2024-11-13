// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import back from '../../assets/img/join/left.svg'
import cancel from '../../assets/img/join/x.svg'
import { useNavigate } from 'react-router-dom';

const Password = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
  const [charCount, setCharCount] = useState(0);
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
    } else if (value.length >= 8 && value.length <= 16) {
      setMessage('영문, 숫자, 특수문자를 모두 포함해주세요.');
    } else {
      setMessage('8~16자리 영문, 숫자, 특수문자를 입력해주세요.');
    }
  };

  const goToEnterPage = () => {
    navigate('/enter');
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  const goToDone = () => {
    navigate('/done');
  };

  return (
    <div className="join_wrap">
        <div className='top'>
            <div className='back' onClick={handleBackClick}><img src={back} /></div>
            <div className='cancel' onClick={goToEnterPage}><img src={cancel} /></div>
        </div>
      <div className='join_header_re'>
        <p className='hi'>안전한 비밀번호를 <br/> 입력해 주세요.</p>
        <p className='join_text'>비밀번호</p>
        <input
        type="password"
        className="pw"
        placeholder="8~16자리 영문, 숫자, 특수문자"
        value={password}
        onChange={handleChange}
      />
      <div className='alert'>
        <p className='join_alert'>{message}</p>
        <p className='join_alert'>({charCount}/16)</p>
      </div>
      </div>

      <button className='next_button'
      style={{
        backgroundColor: password ? '#8F1426CC' : '#CFD3D5', // 버튼 배경
        color: password ? 'DCDCDC' : '#B2AEAE', // 버튼 글자
        cursor: password ? 'pointer' : 'not-allowed', // 입력이 없으면 클릭 비활성화
      }}

      onClick={goToDone}
      >다음</button>
    </div>
  );
};

export default Password;
