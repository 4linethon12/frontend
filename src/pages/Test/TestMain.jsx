import React from 'react'
import AllText from './js/text'

const TestMain = () => {
  return (
    <div className='test_wrap'>
        <div className='single_cancel'><img src={cancel} /></div>
        <div className='prograss_bar'></div>
        <div className='question'>
            <p>{AllText.question}</p>
        </div>

        <div className='test_box'>
            <button className='choice_btn'>{AllText.choice}</button>
        </div>

        <button>다음</button>
    </div>
  )
}

export default TestMain