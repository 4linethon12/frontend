// 사용 X 이미지 깨질 경우 사용
import React from 'react'
import santa from '../../assets/img/enter/Logo1.png'
import number1 from '../../assets/img/tutorial/togle1.svg'
import number2 from '../../assets/img/tutorial/togle2.svg'
import number3 from '../../assets/img/tutorial/togle3.svg'
import next  from '../../assets/img/tutorial/nextLevel.svg'
import logo from '../../assets/img/enter/Logo.svg'

const Tutorial = () => {
  return (
    <div className='tutorial_wrap'>
        <img src={logo} className='tutorial_logo' />
        <p>메리 크리스마또! 지금부터 크리스마또를 소개할게요.</p>

        <div className='number_1'>
          <div className='intro'>
            <img src={number1} className='togle'/>
            <p>그룹과 미션을 생성해요!</p>
          </div>
          <div className='detail_box'>
            <image src={santa} />
            <p><span>‘그룹 만들기'</span>를 통해 그룹과 미션을 생성하고,  <br/> 친구들에게 <span>입장 코드</span>를 공유해요!</p>
            <p>생각나는 미션이 없어도 괜찮아요 😇 <br/> 크리스마또가 추천해 드릴게요!</p>
          </div>
        </div>

        <img src={next} />

        <div className='number_2'>
          <div className='intro'>
            <img src={number2} className='togle'/>
            <p>그룹에 입장하고 마니또를 매칭해요!</p>
          </div>
          <div className='detail_box'>
            <image src={santa} />
            <p><span>‘그룹 입장하기'</span>를 통해 그룹을 생성한 산타가 공유해준 <span>입장 코드</span>를 입력해요!</p>
            <p>친구들이 모두 입장하면, 크리스마또가 마니또를 <span>랜덤으로 매칭</span>해 드릴게요!</p>
            <p>매칭된 마니또는 홈 화면에서 확인하실 수 있어요!</p>
          </div>
        </div>

        <img src={next} />

        <div className='number_3'>
          <div className='intro'>
            <img src={number3} className='togle'/>
            <p>마니또의 트리에 힌트와 편지를 보내요!</p>
          </div>
          <div className='detail_box'>
            <image src={santa} />
            <p>이제 매칭된 <span>마니또의 트리</span>에 <span>힌트</span>와 따뜻한 편지를보내요.</p>
            <p>보낸 힌트는 <span>12월 21일</span>부터 하나씩 공개돼요.마니또가 보낸 힌트를 통해 재밌게 추리해봐요 😇 </p>
            <p><span>따뜻한 편지와 마니또는 크리스마스 당일 공개돼요!</span></p>
          </div>
        </div>
        

    </div>
  )
}

export default Tutorial