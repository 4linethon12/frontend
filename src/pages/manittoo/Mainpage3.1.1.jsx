import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/Mainpagestyle2';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/Sub.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
import SantaLogo from '/images/마니또.png'; 
 import Santgairl from '/images/santa3.png'; 
// import { useSelector } from 'react-redux'; // Redux에서 데이터 가져오기
import { useEffect, useState } from 'react';

const Mainpage2 = () => {
  const navigate = useNavigate();

  // Redux에서 미션 가져오기
  // const mission = useSelector((state) => state.user.mission);

  // 로컬스토리지에서 nickname 가져오기
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleNavigateTree = () => {
    navigate('/TreeManito');
  }; 

  const BeforeMatching = () => {
    navigate('/BeforeMatching');
  }; 

  const WriteHintPages = () => {
     navigate('/WriteHintPages')
  };

  const goToTest = () => {
    navigate('/teststart')
 };

  
  return (
    <styles.MainBackground>
      <styles.EmptyContainer>
        <styles.RowContainer>
          <styles.CenteredImage src={LogoImage} alt="LogoImage" />
          <styles.TitleText onClick={handleNavigateTree} style={{ cursor: 'pointer' }}>
          {nickname ? `${nickname}` : ''} 트리보러가기
          </styles.TitleText>
        </styles.RowContainer>

        <styles.Container onClick={goToTest}>
          <styles.RowContainer>
            <styles.LeftImage src={BallImage} alt="BallImage" />
            <styles.Text>친구가 보는 나는 어떤 산타일까?!{"\n"}궁금하다면 클릭! 🎄✨</styles.Text>
            <styles.RightImage src={RightImage} alt='RightImage' />
          </styles.RowContainer>
        </styles.Container>

        <styles.RowContainer>
          <styles.TitleText3>마니또 트리를 시작해보세요!</styles.TitleText3>
          <styles.MiniContainer>
            <styles.MiniText>🎁튜토리얼</styles.MiniText>  
          </styles.MiniContainer>
        </styles.RowContainer>

        <styles.RowContainer2>
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
            text2={["초대받은", "그룹에 입장해요!" ]}
            imageSrc={Santaman}
            onClick={() => handleNavigate('/JoinGroupPage')} 
          />
        </styles.RowContainer2>
      </styles.EmptyContainer>

      <styles.Divider />

      <styles.RowContainer2>
        <styles.TitleText3>{nickname ? `${nickname} 산타의 마니또` : '산타의 마니또'}</styles.TitleText3>
        <CountdownBadge />
      </styles.RowContainer2>

      {/* DragScrollContainer 안에 미션 텍스트 렌더링 */}
      <styles.DragScrollContainer>
        <styles.Item2  onClick={WriteHintPages} > 

          <styles.RowContainer>
            <styles.LogoImage src={SantaLogo} alt="santaLogo" />
            <styles.RowContainerText>  {nickname ? `${nickname}` : ''}</styles.RowContainerText>
          </styles.RowContainer>

          <styles.BadgeContainer3></styles.BadgeContainer3>
          <styles.RowContainerText2> 그룹12팀</styles.RowContainerText2>
          </styles.Item2> {/* mission 데이터가 없다면 기본 메시지 표시 */}


        <styles.Item2 onClick={BeforeMatching}>
        <styles.SantaImage src={Santaman} alt="BallImage" />
          <styles.BadgeContainer2 >
         
            <styles.BadgeText2  >
              매칭대기중
            </styles.BadgeText2>
          </styles.BadgeContainer2>
        </styles.Item2>
        
        {/* 필요한 만큼 Item 추가 */}
      </styles.DragScrollContainer>
    </styles.MainBackground>
  );
};

export default Mainpage2;