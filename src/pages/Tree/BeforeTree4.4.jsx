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

  // 힌트에 사용할 이미지와 스타일 컴포넌트 맵핑
  const hintImages = [hintImage1, hintImage2, hintImage3, hintImage4];
  const hintStyles = [
    style.CenteredImage2,
    style.CenteredImage3,
    style.CenteredImage4,
    style.CenteredImage5,
  ];

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
            // 힌트 스타일과 이미지를 동적으로 렌더링
            const HintStyle = hintStyles[index];
            if (!HintStyle) return null; // 스타일이 정의되지 않은 경우 렌더링하지 않음

            return (
              <HintStyle key={hint.id}>
                 <style.HintText>{`${index + 1}번째 힌트`}</style.HintText> {/* 힌트 텍스트 추가 */}
                <style.hint_1 
                  src={hintImages[index]} // ID 순서대로 이미지를 맵핑
                  alt={`Hint ${index + 1}`}
                />
              </HintStyle>
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