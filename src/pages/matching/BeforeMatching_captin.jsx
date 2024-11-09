// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as style from '../../style/MatchingPage/BeforMatching';
import FriendContainer from '../../component/manittoo/FriendContainer';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/manittoo/Button';


const BeforeMatching = () => {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/ProcessMatching'); // 버튼 클릭 시 /MakeMission 경로로 이동
      };
    
  return (
    <style.MainBackground>
      <style.EmptyContainer>
        <style.SmallContainer>
          <style.SmallText>그룹</style.SmallText>
          <style.TitleText>동대멋사</style.TitleText>
          <style.Divider />
        </style.SmallContainer>
        <style.SmallText>입장한 친구들</style.SmallText>
        <style.RowContainer>
          <FriendContainer text1="황민영" margin={5} />
          <FriendContainer text1="김철수" margin={5} />
          <FriendContainer text1="이영희" margin={5} />
        </style.RowContainer>
        <style.RowContainer>
          <FriendContainer text1="박민수" margin={5} />
          <FriendContainer text1="최수지" margin={5} />
        </style.RowContainer>
        <Button onClick={handleClick}marginTop="60%" >마니또 랜덤 매칭하기</Button>
      </style.EmptyContainer>
    </style.MainBackground>
  );
};

export default BeforeMatching;
