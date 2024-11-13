 
import React, { useState } from 'react';
import '../../assets/css/join.css'
import back from '../../assets/img/join/left.svg'
import cancel from '../../assets/img/join/x.svg'
import { useNavigate } from 'react-router-dom';
 

const Join = () => {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('이모지, 특수문자를 사용할 수 없어요.');
  const [charCount, setCharCount] = useState(0);
  const navigate = useNavigate();

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

  const goToEnterPage = () => {
    navigate('/enter');
  };
  
  const goTOPassword = () => {
    navigate('/password')
  }

  return (
    <div className="join_wrap">
        <div className='single_can' onClick={goToEnterPage}><img src={cancel} /></div>

      <div className='join_header'>
        <p className='hi'>반가워요! <br/> 어떻게 불러드리면 될까요?</p>
        
        <p className='join_text'>닉네임</p>
      <input
        type="text"
        className="id"
        placeholder="닉네임"
        value={nickname}
        onChange={handleChange}
      />
      <div className='alert'>
        <p className='join_alert'>{message}</p>
        <p className='join_alert'>({charCount}/8)</p>
      </div>
      </div>

      <button className='next_button'
      style={{
        backgroundColor: nickname ? '#8F1426CC' : '#CFD3D5', // 버튼 배경
        color: nickname ? 'DCDCDC' : '#B2AEAE', // 버튼 글자
        cursor: nickname ? 'pointer' : 'not-allowed', // 입력이 없으면 클릭 비활성화
      }}
      onClick={goTOPassword}
      >다음</button>
    </div>
  );
};

export default Join;
