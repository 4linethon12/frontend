// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as style from '../../style/TreePage/BeforeTreestyled';
import treeImage from '/images/Tree.png'; 
import Button from '../../component/manittoo/Button';
import chervon from '/images/Mission/x.png';
import hintImage1 from '/images/treegift/1.png';
import hintImage2 from '/images/treegift/2.png';
import hintImage3 from '/images/treegift/3.png';
import hintImage4 from '/images/treegift/4.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BeforeTree = () => {
  const navigate = useNavigate();
  const [hints, setHints] = useState([]); // 힌트 데이터를 저장하는 상태
  const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기

  useEffect(() => {
    const fetchHints = async () => {
      try {
        const response = await axios.get(
          `http://43.201.50.47:8000/api/messages/messages/for-giver`, // API URL
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization 헤더
              'Content-Type': 'application/json', // JSON 형식 헤더
            },
          }
        );
        console.log('힌트 데이터:', response.data);
        setHints(response.data); // 힌트 데이터를 상태에 저장
      } catch (error) {
        console.error('힌트 조회 실패:', error);
      }
    };

    fetchHints();
  }, [token]);

  const handleClick = () => {
    navigate('/TreeManito'); // 버튼 클릭 시 TreeManito로 이동
  };

  // 힌트에 사용할 이미지와 텍스트 맵핑
  const hintImages = [hintImage1, hintImage2, hintImage3, hintImage4];
  const hintTexts = ['1st 힌트', '2nd 힌트', '3rd 힌트', 'Last 힌트'];

  return (
    <style.MainContainer>
      <style.highContainer>
        <style.RightImage 
          src={chervon} 
          alt="chervon"
          onClick={() => navigate('/TreeManito')}
        />
      </style.highContainer>
      <style.EmptyContainer>
        <style.RowContainer2>
          <style.TitleText3>황민영</style.TitleText3>
          <style.TitleText4>산타의 마니또 트리</style.TitleText4>
        </style.RowContainer2>
        <style.TreeContainer>
          <style.CenteredImage src={treeImage} alt="Tree Image" />
          {hints.map((hint, index) => {
            // ID 순서에 맞는 스타일 적용
            const HintStyle = style[`hint_${index + 1}`];
            if (!HintStyle) {
              console.error(`style.hint_${index + 1}가 정의되지 않았습니다.`);
              return null; // 정의되지 않은 경우 렌더링하지 않음
            }
            return (
              <style.HintContainer
                key={hint.id}
                top={`${20 + index * 15}%`} // 각 힌트 위치 동적 설정
                left={`${30 + index * 10}%`}
              >
                  <style.TitleText4>{hintTexts[index]}</style.TitleText4>
                <HintStyle
                  src={hintImages[index]} // ID 순서대로 이미지를 맵핑
                  alt={`Hint ${index + 1}`}
                />
              
              </style.HintContainer>
            );
          })}
        </style.TreeContainer>
        <Button onClick={handleClick} marginTop="40%">
          확인
        </Button>
      </style.EmptyContainer>
    </style.MainContainer>
  );
};

export default BeforeTree;