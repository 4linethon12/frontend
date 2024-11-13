// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import * as style from '../../style/TreePage/WriteHintstyle';
import hintImage from '/public/images/santa.png';

const WriteHintPages = () => {
  const [hintMessage, setHintMessage] = useState(''); // 힌트 메시지 상태
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태

  const handleInputChange = (event) => {
    setHintMessage(event.target.value); // 사용자 입력 저장
  };

  const handleInputFocus = () => {
    setIsFocused(true); // 포커스 상태 설정
  };

  const handleInputBlur = () => {
    if (!hintMessage) {
      setIsFocused(false); // 입력이 없으면 힌트 표시
    }
  };

  const handleClick = () => {
    console.log('힌트 메시지:', hintMessage);
    alert('힌트가 등록되었습니다!');
  };

  return (
    <style.MainContainer>
      <style.StyledDiv>💌</style.StyledDiv>
      <style.TitleText>마니또에게</style.TitleText>
      <style.TitleText>힌트메세지를 남겨주세요.</style.TitleText>
      <style.WrapperContainer>
        <style.ContainerImage src={hintImage} alt="Hint Image" />

        <style.Container>
          {!isFocused && !hintMessage && (
            <style.HintText>
                마니또를 유추할 수 있는 힌트를{"\n"}작성해보세요!
              </style.HintText>
          )}
          <style.HintInput
            value={hintMessage}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="" // 기본 placeholder 비활성화
          />
        </style.Container>
      </style.WrapperContainer>
      <style.StyledButton onClick={handleClick}>
        힌트 등록하기
      </style.StyledButton>
    </style.MainContainer>
  );
};

export default WriteHintPages;