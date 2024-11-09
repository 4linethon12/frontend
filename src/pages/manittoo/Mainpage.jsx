// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/MainPagestyle';
import StyledContainer from '../../component/manittoo/Container';

const Mainpage = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  // 페이지 이동 함수
  const handleNavigate = () => {
    navigate('/MakeGroup');
  };
  const handleNavigate2 = () => {
    navigate2('/JoinGroupPage');
  };

  return (
    <styles.MainBackground>
      <styles.EmptyContainer>
        <styles.RowContainer>
          <styles.TitleText2>Chrismato</styles.TitleText2>
          <styles.TitleText>나의 모니또 트리보러가기</styles.TitleText>
        </styles.RowContainer>

        {/* 클릭 시 다른 페이지로 이동 */}
        <StyledContainer 
          width="320px" 
          height="70px" 
          text1="친구가 보는 나는 어떤 산타일까?!" 
          text2="궁금하다면 클릭!" 
          margin="20px 0" 
          onClick={() => handleNavigate('/MakeGroup')}  
        />

        <styles.TitleText margin="1rem 0">마니또 트리를 시작해보세요!</styles.TitleText>

        <styles.RowContainer>
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 만들기" 
            text2="마니또 그룹을 만들어요!" 
            onClick={() => handleNavigate('/JoinGroupPage')} // 클릭 시 '/create-group'로 이동
          />
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 입장하기" 
            text2="초대받은 그룹에 입장해요!" 
            onClick={() => handleNavigate2('/join-group')} // 클릭 시 '/join-group'로 이동
          />
        </styles.RowContainer>
      </styles.EmptyContainer>

      <styles.Divider />
      <styles.TitleText>고승범의 마니또</styles.TitleText>

      <StyledContainer 
        width="320px" 
        height="140px" 
        text2="아직 매칭된 마니또가 없어요!" 
      />
    </styles.MainBackground>
  );
};

export default Mainpage;