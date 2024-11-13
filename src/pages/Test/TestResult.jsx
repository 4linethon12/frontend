import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Character from './js/result';  // Character 객체 import
import resultTable from './js/resultTable';
import '../../assets/css/test.css'
import cancel from '../../assets/img/join/x.svg';
import { useNavigate } from 'react-router-dom';


// 이미지 import
import shyRudolf from '../../assets/img/test/shyRudolf.svg';
import proudCat from '../../assets/img/test/proudCat.png';
import kindSanta from '../../assets/img/test/kindSanta.png';
import iceAngel from '../../assets/img/test/iceAngel.png';
import togle from '../../assets/img/test/togle.png';
import TestLoding from './TestLoding';

const TestResult = () => {
  const [isLoading, setIsLoading] = useState(true);  // 로딩 상태 추가
  const location = useLocation();
  const { selectedChoices = [] } = location.state || {};
  console.log(selectedChoices);
  const navigate = useNavigate();

  // 점수 배열에 맞는 결과 찾기
  const matchedResult = resultTable.find(entry => {
    return entry.scoreRange.every((score, index) => score === selectedChoices[index]);
  });

  if (!matchedResult) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  const resultCharacterName = matchedResult.result;
  const resultCharacter = Character[resultCharacterName];
  const { title, descnature, desc, select, type } = resultCharacter;

  let characterImage;
  let chmiImage01;
  let chmiImage02;

  switch (resultCharacterName) {
    case "부끄럼 많은 루돌프":
      characterImage = shyRudolf;
      chmiImage01 = kindSanta;
      chmiImage02 = iceAngel;
      break;
    case "당당한 도둑 고양이":
      characterImage = proudCat;
      chmiImage01 = iceAngel;
      chmiImage02 = shyRudolf;
      break;
    case "인자한 산타 할아버지":
      characterImage = kindSanta;
      chmiImage01 = shyRudolf;
      chmiImage02 = proudCat;
      break;
    case "신비로운 얼음 정령":
      characterImage = iceAngel;
      chmiImage01 = kindSanta;
      chmiImage02 = proudCat;
      break;
    default:
      characterImage = shyRudolf;
      chmiImage01 = kindSanta;
      chmiImage02 = iceAngel;
  }

  // 3초 후에 로딩 상태를 false로 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const goToStart =() => {
    navigate('/teststart');
  }

  return (
    <div className="result_wrap">
      {isLoading && <TestLoding />} 

      <div className='single_cancel' onClick={goToStart}>
        <img src={cancel} alt="Cancel" />
      </div>

      <h1 className="character">{title}</h1>
      <span className="character_pic">
        <img src={characterImage} alt={title} />
      </span>

      <div className="detail">
        <div className="container1">
          <img src={togle} alt="Toggle" className='tog'/>
          <p className='test_detail'>{descnature}</p> {/* 성격 설명 */}
        </div>
        <div className="container1">
          <img src={togle} alt="Toggle" className='tog' />
          <p className='test_detail'>{desc}</p> {/* 추가 설명 */}
        </div>
      </div>

      <span className="line" />

      <div className="result_bottom">
        <div className="chemi_character">
          <p className="result_text">따뜻한 케미</p>
          <span className="chemi_character_pic">
            <img src={chmiImage01} alt="케미" className='chemi' />
          </span>
          <p className='chemi_detail'>{select}</p>
        </div>

        <div className="chemi_character">
          <p className="result_text">차가운 케미</p>
          <span className="chemi_character_pic">
            <img src={chmiImage02} alt="케미" className='chemi' />
          </span>
          <p className='chemi_detail'>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
