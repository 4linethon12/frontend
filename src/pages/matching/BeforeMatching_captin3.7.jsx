import { useEffect, useState } from 'react';
import * as style from '../../style/MatchingPage/BeforMatching';
import FriendContainer from '../../component/manittoo/FriendContainer';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/manittoo/Button';
import axios from 'axios';
import chervon from '/images/Mission/x.png';

const BeforeMatching = () => {
  const [participants, setParticipants] = useState([]); // 참가자 목록 상태
  const [groupName, setGroupName] = useState(''); // 그룹 이름 상태
  const [groupId, setGroupId] = useState(null); // 그룹 ID 상태
  // const [matchId, setMatchId] = useState(null); // 매칭 ID 상태
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // JWT 토큰 가져오기

  // 그룹 데이터 가져오기
  const fetchGroupData = async () => {
    try {
      const response = await axios.get(
        `http://43.201.50.47:8000/api/groups/user/groups/`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더 설정
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('서버 응답:', response.data);

      const groupData = response.data[0]; // 첫 번째 그룹 데이터 사용
      setGroupName(groupData.name); // 그룹 이름 설정
      setGroupId(groupData.id); // 그룹 ID 설정
      setParticipants(groupData.participants); // 참가자 목록 설정

      // 첫 번째 매칭 ID를 matchId로 설정 (참여한 매칭 중 첫 번째 ID 사용)
      // if (groupData.matches.length > 0) {
      //   setMatchId(groupData.matches[0].id); // 첫 번째 매칭 ID를 설정
      // }
    } catch (error) {
      console.error('그룹 데이터 가져오기 실패:', error);
    }
  };

  // 마니또 랜덤 매칭 요청
  const handleCreateMatches = async () => {
    if (!groupId) {
      alert('그룹 ID가 없습니다.');
      return;
    }

    try {
      const response = await axios.post(
        `http://43.201.50.47:8000/api/groups/${groupId}/create-matches/`, // groupId를 경로에 사용
        {}, // 요청 데이터가 필요 없는 경우 빈 객체 전달
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더 설정
            'Content-Type': 'application/json', // JSON 형식 헤더
          },
        }
      );

      console.log('매칭 생성 성공:', response.data);
      alert('마니또 랜덤 매칭이 완료되었습니다!');
      navigate('/ProcessMatching'); // 성공 시 이동
    } catch (error) {
      console.error('매칭 생성 실패:', error);
      alert('매칭 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    fetchGroupData(); // 컴포넌트 마운트 시 그룹 데이터 가져오기
  }, []);

  return (
    <style.MainBackground>
      <style.highContainer>
        <style.RightImage src={chervon} alt="chervon"
         onClick={() => navigate('/MainPage')} 
        
        ></style.RightImage>
        </style.highContainer>
      
      <style.EmptyContainer>
        <style.SmallContainer>
          <style.SmallText>그룹</style.SmallText>
          <style.TitleText>{groupName || '그룹 이름 없음'}</style.TitleText>
          <style.Divider />
        </style.SmallContainer>
        <style.SmallText>입장한 친구들</style.SmallText>
        <style.RowContainer>
          {participants.map((participant) => (
            <FriendContainer
              key={participant.id} // 고유 ID를 key로 사용
              text1={participant.user.nickname} // 닉네임 사용
              margin={5}
            />
          ))}
        </style.RowContainer>
        <Button onClick={handleCreateMatches} marginTop="60%">
          마니또 랜덤 매칭하기
        </Button>
        {/* 매칭 ID를 WriteHintPages로 전달 */}
        
      </style.EmptyContainer>
    </style.MainBackground>
  );
};

export default BeforeMatching;