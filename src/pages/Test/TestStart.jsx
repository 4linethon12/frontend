import React from 'react'
import { useNavigate } from 'react-router-dom';
import snowball from '../../assets/img/test/snowball.svg'
import cancel from '../../assets/img/join/x.svg'
import '../../assets/css/test.css'

const TestStart = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/MainPage');
  };
  
  const goToTestMain = () => {
    navigate('/testing');
  };

  return (
    <div className='test_start_wrap'>
        <div className='single_cancel' onClick={goToMainPage}><img src={cancel} alt='취소'/></div>

        <p className='top_text'>친구 산타가 알려 준</p>
        <p className='testext'>선물 포장지 속<br />당신의 진짜 모습은?</p>
        <img src={snowball} className='snowball' alt='snowball' />

        <button className='open' onClick={goToTestMain}>선물 상자 열어보기</button>
    </div>
  )
}

export default TestStart