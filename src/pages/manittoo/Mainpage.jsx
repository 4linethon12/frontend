// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/MainPagestyle';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/ShiningLogo.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
import Santgairl from '/images/santa3.png';
import PopupImage from '../../assets/img/enter/tutorial.svg';
import CloseIcon from '../../assets/img/join/x.svg';

const Mainpage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  // 페이지 이동 함수
  const handleNavigate = () => {
    navigate('/MakeGroup');
  };

  const handleNavigate2 = () => {
    navigate('/JoinGroupPage');
  };

  const handleNavigateTree = () => {
    navigate('/TreeManito');
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible); 
    // 팝업을 닫을 때 localStorage에 값 설정
    if (isPopupVisible) {
      localStorage.setItem('tutorialSeen', 'true');
    }
  };

  useEffect(() => {
    // 페이지 최초 로드 시 localStorage에 저장된 튜토리얼 표시 여부 확인
    const tutorialSeen = localStorage.getItem('tutorialSeen');
    if (!tutorialSeen) {
      setIsPopupVisible(true);
    }
  }, []);

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const goToTest = () => {
    navigate('/teststart')
 };

  return (
    <styles.MainBackground>
      <styles.EmptyContainer>
        <styles.RowContainer>
 
        <styles.CenteredImage src={LogoImage} alt="LogoImage" />
           
        <styles.TitleText onClick={handleNavigateTree} style={{ cursor: 'pointer' }}>{nickname ? `${nickname} 트리보러가기` : ' 트리보러가기'}</styles.TitleText>
 
        </styles.RowContainer>

        <styles.Container onClick={goToTest}>
          <styles.RowContainer>
            <styles.LeftImage src={BallImage} alt="BallImage" />
            <styles.Text>산타가 보는 나는 어떤 성격일까?!{"\n"}궁금하다면 클릭! 🎄✨</styles.Text>
            <styles.RightImage src={RightImage} alt="RightImage" />
          </styles.RowContainer>
        </styles.Container>
        
        <styles.RowContainer>
 
        <styles.TitleText3>마니또 트리를 시작해보세요!</styles.TitleText3>
        <styles.MiniContainer>
        <styles.MiniText>🎁 튜토리얼</styles.MiniText>  
        </styles.MiniContainer>
 
        </styles.RowContainer>
        
        {/* 팝업 */}
        {isPopupVisible && (
            <styles.PopupContainer>
              <styles.PopupImage src={PopupImage} alt="Popup Tutorial" />
              <styles.CloseIcon src={CloseIcon} alt="Close Popup" onClick={togglePopup} />
            </styles.PopupContainer>
        )}
        
        <styles.RowContainer>
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 만들기" 
            text2={["마니또 그룹을", "만들어요!"]} 
            imageSrc={Santgairl}
            onClick={() => handleNavigate('/MakeGroup')}
          />
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 입장하기" 
            text2={["초대받은", "그룹에 입장해요!"]}
            imageSrc={Santaman}
            onClick={() => handleNavigate2('/JoinGroupPage')}
          />
        </styles.RowContainer>
      </styles.EmptyContainer>

      <styles.Divider />
      <styles.RowContainer2>
        <styles.TitleText3>{nickname ? `${nickname} 산타의 마니또` : '산타의 마니또'}</styles.TitleText3>
        <CountdownBadge />
      </styles.RowContainer2>

      <styles.BottomContainer>
        <styles.Image2 src={Santaman} alt="SantaImage" />
        <styles.BadgeContainer>
          <styles.BadgeText>마니또 매칭 대기중이에요!</styles.BadgeText>
        </styles.BadgeContainer>
      </styles.BottomContainer>
    </styles.MainBackground>
  );
};

export default Mainpage;