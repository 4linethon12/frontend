import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/Mainpagestyle3';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/ShiningLogo.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
import SantaLogo from '/images/마니또.png'; 
 import Santgairl from '/images/santa3.png'; 
//  import Gift from '/images/mainpage/Gift.png'; 
 import axios from 'axios';
// import { useSelector } from 'react-redux'; // Redux에서 데이터 가져오기
import { useEffect, useState } from 'react';

const Mainpage3 = () => {
  const navigate = useNavigate();

   
  const [nickname, setNickname] = useState('');
  const [mission, setMission] = useState(null); // 미션 데이터 상태
  const [groupName, setGroupName] = useState(null); 
  
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  
    const fetchGroupData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('토큰이 없습니다.');
        return;
      }
  
      try {
        const response = await axios.get(
          'http://43.201.50.47:8000/api/groups/user/groups',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        const groupData = response.data;
  
        // 응답 데이터 구조 확인
        console.log('API 응답 데이터:', groupData);
  
        // 응답 데이터가 배열일 경우 처리
        if (Array.isArray(groupData) && groupData.length > 0) {
          const firstGroup = groupData[0]; // 첫 번째 그룹 데이터 가져오기
          setMission(firstGroup.mission); // 미션 저장
          setGroupName(firstGroup.name); // 그룹 이름 저장
          localStorage.setItem('groupId', firstGroup.id); // 그룹의 ID를 로컬스토리지에 저장
  
          console.log('첫 번째 그룹 데이터:', firstGroup);
          console.log('groupId:', firstGroup.id); // 저장된 ID를 콘솔에 출력
        } else {
          console.warn('그룹 데이터가 비어 있습니다.');
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchGroupData();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleNavigateTree = () => {
    navigate('/TreeManito');
  }; 
  const handleNavigate2 = () => {
    navigate('/JoinGroupPage');
  };

  // const BeforeMatching = () => {
  //   navigate('/BeforeMatching');
  // }; 

  const WriteHintPages = () => {
     navigate('/WriteHintPages')
  };

  const goToTest = () => {
    navigate('/teststart')
 };

//  const togglePopup = () => {
//   setIsPopupVisible(!isPopupVisible); 
//   // 팝업을 닫을 때 localStorage에 값 설정
//   if (isPopupVisible) {
//     localStorage.setItem('tutorialSeen', 'true');
//   }
// };

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
        {/* {isPopupVisible && (
            <styles.PopupContainer>
              <styles.PopupImage src={PopupImage} alt="Popup Tutorial" />
              <styles.CloseIcon src={CloseIcon} alt="Close Popup" onClick={togglePopup} />
            </styles.PopupContainer>
        )} */}
        
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

      {/* DragScrollContainer 안에 미션 텍스트 렌더링 */}
      <styles.DragScrollContainer>
        <styles.Item2  onClick={WriteHintPages} >   
        
          <styles.RowContainer4>
            <styles.LogoImage src={SantaLogo} alt="santaLogo" />
            <styles.RowContainerText>  {nickname ? `${nickname}` : ''}</styles.RowContainerText>
          </styles.RowContainer4>

          <styles.RowContainer5>
          <styles.RowContainerText2>{groupName ? `${groupName}팀` : '팀 이름을 가져올 수 없습니다.'}</styles.RowContainerText2>
          <styles.BadgeContainer3>
          
          <styles.RowContainerText3>
            MISSION
          </styles.RowContainerText3>
            <styles.Divider2></styles.Divider2>
          <styles.RowContainerText0>
          
          {loading ? (
          <styles.Text>로딩 중...</styles.Text>
        ) : mission ? (
          <styles.Text>{mission}</styles.Text>
        ) : (
          <styles.Text>미션 데이터를 가져올 수 없습니다.</styles.Text>
        )}
          </styles.RowContainerText0>
          
          </styles.BadgeContainer3>
          </styles.RowContainer5>
          </styles.Item2> {/* mission 데이터가 없다면 기본 메시지 표시 */}


        
{/* 

        <styles.Item3 onClick={BeforeMatching}>
         <styles.BadgeContainer4>
          <styles.BadgeText4>
              매칭완료

          </styles.BadgeText4>
          </styles.BadgeContainer4>
          <styles.EmptyContaine2 >
          <styles.Image2 src={Gift} ></styles.Image2>
          <styles.RowContainerText5>매칭된 마니또를 확인해보세요!</styles.RowContainerText5>
          </styles.EmptyContaine2>
         
   
          
        </styles.Item3> */}
        
        {/* 필요한 만큼 Item 추가 */}
      </styles.DragScrollContainer>
    </styles.MainBackground>
  );
};

export default Mainpage3;
 
 