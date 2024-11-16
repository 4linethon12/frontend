import React from 'react'
import santa from '../../assets/img/join/santa.png'
import { useNavigate } from 'react-router-dom';


const JoinDone = () => {
  const navigate = useNavigate();
  
  const goToMainPage = () => {
    navigate('/MainPage0');
  };

  return (
    <div className='done_wrap'>
        <p className='hi_re'>환영해요👋</p>
        <p className='welcome'>이제부터 크리스마또와 함께 <br/> 재미있고 특별한 크리스마스 보내요!</p>

        <img src={santa} className='donepic' alt='산타' />
        
        <button className='next_button' onClick={goToMainPage}>크리스마또 시작하기</button>
        
    </div>
  )
}

export default JoinDone