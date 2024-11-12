import React from 'react'

const TestStart = () => {
  return (
    <div className='test_wrap'>
        <div className='single_cancel'><img src={cancel} /></div>
        <p className='top_text'>친구 산타가 알려 준</p>
        <p className='testext'>선물 포장지 속</p>
        <p className='testext'>당신의 진짜 모습은?</p>
        <span className='snowball' />

        <button className='open'>선물 상자 열어보기</button>
        <button className='share'>선물 상자 공유하기</button>
    </div>
  )
}

export default TestStart