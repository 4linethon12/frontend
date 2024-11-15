// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as style from '../../style/TreePage/WriteHintstyle';
import hintImage from '/public/images/santa.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import chervon from '/images/Mission/x.png';

const WriteHintPages = () => {
  const [hintMessage, setHintMessage] = useState(''); // 힌트 메시지 상태
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태
  const token = localStorage.getItem('token'); // JWT 토큰 가져오기
  const navigate = useNavigate();
  const giverMatchId = localStorage.getItem('giverMatchId'); // 로컬스토리지에서 giverMatchId 가져오기

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

  const handleClick = async () => {
    if (hintMessage.trim().length === 0) return; // 힌트가 없으면 종료

    try {
      const matchId = Number(giverMatchId); // giverMatchId를 숫자로 변환
      const requestBody = {
        match: matchId,
        hint: hintMessage.trim(),
        letter: 'string', // 빈 레터
      };

      console.log('보낸 데이터:', requestBody); // 보낸 데이터 출력

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        'http://43.201.50.47:8000/api/messages/messages/',
        requestBody,
        { headers }
      );
      navigate('/BeforeTree'); // 성공 시 다음 페이지로 이동
      console.log('응답:', response.data);
      
    } catch (error) {
      console.error('에러 발생:', error);
      if (error.response) {
        console.error('응답 에러 데이터:', error.response.data);
      }
    }
  };

  return (
    <style.MainContainer>
      <style.highContainer>
        <style.RightImage
          src={chervon}
          alt="chervon"
          onClick={() => navigate('/BeforeTree')}
        ></style.RightImage>
      </style.highContainer>
      <style.StyledDiv>💌</style.StyledDiv>
      <style.TitleText>마니또에게</style.TitleText>
      <style.TitleText>힌트메세지를 남겨주세요.</style.TitleText>
      <style.WrapperContainer>
        <style.ContainerImage src={hintImage} alt="Hint Image" />

        <style.Container>
          {!isFocused && !hintMessage && (
            <style.HintText>
              마니또를 유추할 수 있는 힌트를 <br />
              작성해보세요!
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
      <style.StyledButton
        isActive={hintMessage.trim().length > 0}
        onClick={handleClick}
      >
        힌트 등록하기
      </style.StyledButton>
    </style.MainContainer>
  );
};

export default WriteHintPages;
