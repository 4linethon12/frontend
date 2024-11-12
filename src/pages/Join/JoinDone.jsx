import React from 'react'
import santa from '../../assets/img/enter/santa.svg'

const JoinDone = () => {

  return (
    <div className='join_warp'>
        <p className='hi'>환영해요👋</p>
        <div className='welcome'>
            <p>이제부터 크리스마또와 함께</p>
            <p>재미있고 특별한 크리스마스 보내요!</p>
        </div>

        <span className='snow'><img src={santa} /></span>
        
        <button className='next_button'>크리스마또 시작하기</button>
        
    </div>
  )
}

export default JoinDone