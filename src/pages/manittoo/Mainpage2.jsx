import { useNavigate } from 'react-router-dom';
import * as styles from '../../style/ManittoPage/Mainpagestyle2';
import StyledContainer from '../../component/manittoo/Container';
import CountdownBadge from '../../component/manittoo/RedButton';
import LogoImage from '/images/mainpage/ShiningLogo.png'; 
import BallImage from '/images/mainpage/Christmas Snow Globe.png'; 
import RightImage from '/images/mainpage/chevron-right.png'; 
import Santaman from '/images/santa.png'; 
// import SantaLogo from '/images/마니또.png'; 
 import Santgairl from '/images/santa3.png'; 
 import axios from 'axios';
 import Gift from '/images/mainpage/Gift.png'; 
// import { useSelector } from 'react-redux'; // Redux에서 데이터 가져오기
import { useEffect, useState } from 'react';

const Mainpage2 = () => {
  const navigate = useNavigate();

   
  const [nickname, setNickname] = useState('');
  // const [mission, setMission] = useState(null); // 미션 데이터 상태
  // const [groupName, setGroupName] = useState(null);  
  // const [loading, setLoading] = useState(true); // 로딩 상태
  // const [manitoNickname, setManitoNickname] = useState(''); 
  
  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  
    const fetchGroupData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('토큰이 없습니다.');
        navigate('/LoginPage'); // 로그인 페이지로 이동
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
  
        console.log('API 응답 데이터:', groupData);
  
        if (!Array.isArray(groupData) || groupData.length === 0) {
          console.warn('그룹 데이터가 없습니다.');
          navigate('/Mainpage0'); // 그룹 생성 전으로 이동
          return;
        }
  
        const group = groupData[0];
        localStorage.setItem('groupName', group.name);
        localStorage.setItem('groupId', group.id);
  
        const myParticipant = group.participants.find(
          (participant) => participant.user.nickname === storedNickname
        );
  
        if (myParticipant) {
          const myId = myParticipant.user.id;
          console.log('내 ID:', myId);
  
          const giverMatch = group.matches.find((match) => match.giver === myId);
  
          // 마니또 매칭 확인 로직 추가
          if (giverMatch) {
            const giverMatchId = giverMatch.id;
            const receiverId = giverMatch.receiver;
            localStorage.setItem('giverMatchId', giverMatchId);
  
            const receiverParticipant = group.participants.find(
              (participant) => participant.user.id === receiverId
            );
  
            if (receiverParticipant) {
              const receiverNickname = receiverParticipant.user.nickname;
              localStorage.setItem('ManitoNickname', receiverNickname);
            }
  
            // 마니또 매칭이 완료된 경우
            navigate('/Mainpage3');
            return;
          } else {
            // 그룹은 생성되었으나 매칭이 안 된 경우
            navigate('/Mainpage');
            return;
          }
        } else {
          // 그룹에 참가하지 않은 경우
          console.warn('그룹에 참가하지 않은 사용자입니다.');
          navigate('/Mainpage0');
          return;
        }
  
        // 해커톤 당일 로직 추가
        // const today = new Date();
        // const hackathonDate = new Date('2024-11-16');
        // if (today.toDateString() === hackathonDate.toDateString()) {
        //   navigate('/Mainpage3'); // 해커톤 당일
        //   return;
        // }
  
      } catch (error) {
        console.error('API 요청 실패:', error);
        navigate('/error'); // 에러 페이지로 이동
      }
    };
  
    fetchGroupData();
  }, [navigate]);


  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleNavigateTree = () => {
    navigate('/TreeManito');
  }; 

  const GroupCompletePage = () => {
    navigate('/GroupCompletePage');
  }; 

  // const WriteHintPages = () => {
  //    navigate('/WriteHintPages')
  // };

  const goToTest = () => {
    navigate('/teststart')
 };

 const togglePopup = () => {
  setIsPopupVisible(!isPopupVisible); 
  // 팝업을 닫을 때 localStorage에 값 설정
  if (isPopupVisible) {
    localStorage.setItem('tutorialSeen', 'true');
  }
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
            <styles.Text>산타가 보는 나는 어떤 성격일까?!{"\n"}궁금하다면 클릭! 🎄✨</styles.Text>
            <styles.RightImage src={RightImage} alt='RightImage' />
          </styles.RowContainer>
        </styles.Container>

        <styles.RowContainer>
          <styles.TitleText3>마니또 트리를 시작해보세요!</styles.TitleText3>
          <styles.MiniContainer onClick={togglePopup}>
            <styles.MiniText>🎁  튜토리얼</styles.MiniText>  
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
        <styles.TitleText3>{nickname ? `${nickname} 산타의 마니또` : '산타의 마니또'}</styles.TitleText3>
        <CountdownBadge />
      </styles.RowContainer2>

      {/* DragScrollContainer 안에 미션 텍스트 렌더링 */}
      <styles.DragScrollContainer>
        
        
          {/* <styles.RowContainer4>
            <styles.LogoImage src={SantaLogo} alt="santaLogo" />
            <styles.RowContainerText> 마니또 닉네임: {manitoNickname || '로딩 중...'}</styles.RowContainerText>
          </styles.RowContainer4> */}
          
          {/* <styles.BadgeContainer3>
          <styles.RowContainerText3>
            MISSION
          </styles.RowContainerText3>

          <styles.RowContainerText2>
          
          {loading ? (
          <styles.Text>로딩 중...</styles.Text>
        ) : mission ? (
          <styles.Text>{mission}</styles.Text>
        ) : (
          <styles.Text>미션 데이터를 가져올 수 없습니다.</styles.Text>
        )}
          </styles.RowContainerText2>
          </styles.BadgeContainer3> */}
         
        

      
        <styles.Item3 onClick={GroupCompletePage}>
         <styles.BadgeContainer4>
          <styles.BadgeText4>
              매칭완료

          </styles.BadgeText4>
          </styles.BadgeContainer4>
          <styles.EmptyContaine2 >
          <styles.Image2 src={Gift} ></styles.Image2>
          <styles.RowContainerText5>매칭된 마니또를 확인해보세요!</styles.RowContainerText5>
          </styles.EmptyContaine2>
         
   
          
        </styles.Item3>
        
        
        {/* 필요한 만큼 Item 추가 */}
      </styles.DragScrollContainer>
    </styles.MainBackground>
  );
};

export default Mainpage2;
 