import React from 'react'; // React import 추가
import { useNavigate } from 'react-router-dom';
import * as style from '../../style/MatchingPage/ProcessMatching';

const ProcessMatching = () => {
  const navigate = useNavigate();

  // useEffect로 3초 후 페이지 이동
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Mainpage2'); // 3초 후 /CompleteMatching 페이지로 이동
    }, 3000); // 3000ms = 3초

    // 컴포넌트 언마운트 시 타이머를 클리어
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <style.MainContainer>
      <style.EmptyContainer>
        <style.TitleText>산타의 비밀 친구를</style.TitleText>
        <style.TitleText>찾고 있어요!</style.TitleText>
        <img src="/images/Logo1.png" alt="배경 이미지" />
        <style.TitleText2>조금만 기다리면 비밀 친구가 매칭돼요!</style.TitleText2>
      </style.EmptyContainer>
    </style.MainContainer>
  );
}

export default ProcessMatching;