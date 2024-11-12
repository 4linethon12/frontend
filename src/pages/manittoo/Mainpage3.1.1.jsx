 
import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/Mainpagestyle2';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/Sub.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
import Santgairl from '/images/santa3.png'; 

const Mainpage2 = () => {
  const navigate = useNavigate();
 

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleNavigateTree = () => {
    navigate('/TreeManito');
  }; 

  return (
    <styles.MainBackground>
      <styles.EmptyContainer>
        <styles.RowContainer>
          <styles.CenteredImage src={LogoImage} alt="LogoImage" />
          <styles.TitleText onClick={handleNavigateTree} style={{ cursor: 'pointer' }}>
            나의 모니또 트리보러가기
          </styles.TitleText>
        </styles.RowContainer>

        <styles.Container>
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
            text2={["초대받은", "그룹에 입장해요!" ]}
            imageSrc={Santaman}
            onClick={() => handleNavigate('/JoinGroupPage')} 
          />
        </styles.RowContainer>
      </styles.EmptyContainer>

      <styles.Divider />

      <styles.RowContainer2>
        <styles.TitleText3>고승범 산타의 마니또</styles.TitleText3>
        <CountdownBadge />
      </styles.RowContainer2>

      
      <styles.DragScrollContainer>
      <styles.Item>Content 1</styles.Item>
      <styles.Item>Content 2</styles.Item>
      <styles.Item>Content 3</styles.Item>
      <styles.Item>Content 3</styles.Item>
      {/* 필요한 만큼 Item 추가 */}
    </styles.DragScrollContainer>
    </styles.MainBackground>
  );
};

export default Mainpage2;