import React from 'react'

const TestMain = () => {
  return (
    <div className='test_wrap'>
        <div className='single_cancel'><img src={cancel} /></div>
        <div className='prograss_bar'></div>
        <div className='question'>
            <p>친구와 잘 어울리는</p>
            <p>크리스마스 명소는?</p>
        </div>

        <div className='main_test'>
            <span className='first'>🎄반짝이는 조명으로 가득한 숲 속 트리</span>
            <span className='second'>❄️ 끝없이 펼쳐진 설원</span>
            <span className='third'>🎅 캐롤이 울려 퍼지는 크리스마스 마을</span>
        </div>

        <button>다음</button>
    </div>
  )
}

export default TestMain