// eslint-disable-next-line no-unused-vars
import React from 'react';

import * as style from '../../style/MatchingPage/CompleteMatching';
import Button from '../../component/manittoo/Button';

const GroupCompletePage = () => {
  const handleClick = () => {
    // 버튼 클릭 시 수행할 동작을 정의하세요
    console.log('마니또 랜덤 매칭하기 버튼이 클릭되었습니다.');
  };

  return (
    <style.MainBackground>
      <style.StyledDiv>🎄</style.StyledDiv>
      <style.TitleText>황민영 산타의 마니또는..!</style.TitleText>

      <style.Container marginTop="1rem">
        <style.ContainerImage src="public/images/마니또.png" alt="산타이미지" />
        <style.ContainerText>임수빈</style.ContainerText>
        <style.TitleText2>MISSION | 마니또 칭찬해주기</style.TitleText2>
       
      </style.Container>
      <Button onClick={handleClick} marginTop="60%">
          확인
        </Button>
    </style.MainBackground>
  );
};

export default GroupCompletePage;