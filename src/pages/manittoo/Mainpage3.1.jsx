// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/MainPagestyle';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/Sub.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
import Santgairl from '/images/santa3.png'; 
import { useEffect, useState } from 'react';


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

  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const handleNavigateTree = () => {
    navigate('/TreeManito'); // Update this path to your desired destination
  };
  return (
    <styles.MainBackground>
      <styles.EmptyContainer>
        <styles.RowContainer>
        <styles.CenteredImage src={LogoImage} alt="LogoImage" />
           
          <styles.TitleText onClick={handleNavigateTree} style={{ cursor: 'pointer' }}>{nickname ? `${nickname}트리 보러가기` : '트리 보러가기'}</styles.TitleText>
        </styles.RowContainer>

         
        <styles.Container>
        <styles.RowContainer>
          <styles.LeftImage src={BallImage} alt="BallImage"></styles.LeftImage>
          <styles.Text>친구가 보는 나는 어떤 산타일까?!{"\n"}궁금하다면 클릭! 🎄✨</styles.Text>
           <styles.RightImage src={RightImage} alt='RightImage'></styles.RightImage>
          </styles.RowContainer>
        </styles.Container>
        <styles.RowContainer>
        <styles.TitleText3>마니또 트리를 시작해보세요!</styles.TitleText3>
        <styles.MiniContainer>
        <styles.MiniText>🎁 튜토리얼</styles.MiniText>  
        </styles.MiniContainer>
        </styles.RowContainer>
        <styles.RowContainer>
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 만들기" 
            text2={["마니또 그룹을", "만들어요!"]} 
            imageSrc={Santgairl}
            onClick={() => handleNavigate('/JoinGroupPage')} // 클릭 시 '/create-group'로 이동
          />
          <StyledContainer 
            width="140px" 
            height="125px" 
            text1="그룹 입장하기" 
            text2={["초대받은", "그룹에 입장해요!" ]}
            imageSrc={Santaman}
            onClick={() => handleNavigate2('/join-group')} // 클릭 시 '/join-group'로 이동
          />
        </styles.RowContainer>
      </styles.EmptyContainer>

      <styles.Divider />
      <styles.RowContainer2>
       <styles.TitleText3>{nickname ? `${nickname} 산타의 마니또` : '산타의 마니또'}</styles.TitleText3>
     < CountdownBadge/>
     
     </styles.RowContainer2>
      <styles.BottomContainer>
        <styles.Image2 src={Santaman} alt='santaImage'></styles.Image2>
        <styles.BadgeContainer>
        <styles.BadgeText>
          아직 매칭된 마니또가 없어요
        </styles.BadgeText>
      </styles.BadgeContainer>
      </styles.BottomContainer>
    </styles.MainBackground>
  );
};

export default Mainpage;