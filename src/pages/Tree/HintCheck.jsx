// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가
import * as style from '../../style/TreePage/HintCheck';
import hintImage from '/public/images/santa.png';
import chervon from '/images/Mission/x.png';

const HintCheck = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 데이터 수신
  const { hintText, hintIndex } = location.state || {}; // state에서 hintText와 hintIndex 추출

  return (
    <style.MainContainer>
      {/* 상단 네비게이션 */}
      <style.highContainer>
        <style.RightImage
          src={chervon}
          alt="chervon"
          onClick={() => navigate('/TreeManito')} // 트리로 돌아가기
        />
      </style.highContainer>

      {/* 힌트 정보 */}
      <style.StyledDiv>💌</style.StyledDiv>
      <style.TitleText>마니또가 남긴</style.TitleText>
      <style.TitleText>{hintIndex}번째 힌트 메세지에요</style.TitleText>

      <style.WrapperContainer>
        {/* 힌트 이미지 */}
        <style.ContainerImage src={hintImage} alt="Hint Image" />

        {/* 힌트 텍스트 */}
        <style.Container>
          <style.HintText>{hintText || '힌트가 없습니다.'}</style.HintText>
        </style.Container>
      </style.WrapperContainer>
    </style.MainContainer>
  );
};

export default HintCheck;