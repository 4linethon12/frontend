import React from 'react'
import present from '../../assets/img/test/present.svg'
import '../../assets/css/test.css'

const TestLoding = () => {

  return (
    <div className='test_wrap'>
        <div className='loaing_img'>
            <h1 className='loading_text'>산타가 선물 상자를 <br/>꺼내고 있어요!</h1>
        </div>
        
        <img src={present} alt="선물"/>

        <p className='wait'>조금만 기다리면 선물 상자가 도착해요!</p>
    </div>
  )
}

export default TestLoding
