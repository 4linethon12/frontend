import React from 'react'
import Character from './js/result'
import togle from '../../assets/img/test/togle.svg'

const TestResult = ({ characterKey }) => {

  const selectedCharacter = Character[characterKey];

  return (
    <div className='result_wrap'>
      <h1 className='character'>{selectedCharacter.title}</h1>

      <span className='character_pic'>
        {/* 캐릭터 이미지 로직 */}
      </span>

      <div className='detail'>
        <div className='container1'>
          <img src={togle} />
          <p>{selectedCharacter.descnature}</p>
        </div>
        <div className='container1'>
          <img src={togle}/>
          <p>{selectedCharacter.desc}</p>
        </div>
      </div>

      <span className='line' />

      <div className='result_bottom'>
        <div className='chemi_character1'>
          <p className='result_text'>따뜻한 케미</p>
          <span className='chemi_character_pic'>
            {/* 캐릭터 이미지 로직 */}
          </span>
          <p className='result_text'>{selectedCharacter.select}</p>
        </div>

        <div className='chemi_character2'>
          <p className='result_text'>차가운 케미</p>
          <span className='chemi_character_pic'>
            {/* 캐릭터 이미지 로직 */}
          </span>
          <p className='result_text'>{selectedCharacter.type}</p>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
