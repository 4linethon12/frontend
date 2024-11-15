// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as style from '../../style/TreePage/LetterWritestyle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import chervon from '/images/Mission/x.png';
const LetterWrite = () => {
  const [letterMessage, setLetterMessage] = useState(''); // 레터 메시지 상태
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태
  const token = localStorage.getItem('token'); // JWT 토큰 가져오기
  const navigate = useNavigate();
  const giverMatchId = localStorage.getItem('giverMatchId'); // 로컬스토리지에서 giverMatchId 가져오기

   
  const handleInputChange = (event) => {
    setLetterMessage(event.target.value); // 사용자 입력 저장
  };

  const handleInputFocus = () => {
    setIsFocused(true); // 포커스 상태 설정
  };

  const handleInputBlur = () => {
    if (!letterMessage) {
      setIsFocused(false); // 입력이 없으면 힌트 표시
    }
  };

  const handleClick = async () => {
    const matchId = Number(giverMatchId); // giverMatchId를 숫자로 변환

    const requestBody = {
      match: matchId, // 로컬스토리지에서 가져온 manittoGiverId를 match 필드에 사용
      letter: letterMessage.trim(), // 사용자가 입력한 레터 (공백 제거)
      hint: "string", // 기본값 추가
    };
    console.log('POST 요청 데이터:', requestBody);

    try {
      const response = await axios.post(
        `http://43.201.50.47:8000/api/messages/messages/`, // API URL
        requestBody, // 요청 본문
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더
            'Content-Type': 'application/json', // JSON 형식 헤더
          },
        }
      );
      console.log('레터 등록 성공:', response.data);
      alert('레터가 등록되었습니다!');
      navigate('/Letter'); // 성공 시 레터 확인 페이지로 이동
    } catch (error) {
      console.error('레터 등록 실패:', error);
      alert('레터 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <style.MainContainer>
      <style.highContainer>
        <style.RightImage
          src={chervon}
          alt="chervon"
          onClick={() => navigate('/BeforeTree')} // 이전 페이지로 이동
        ></style.RightImage>
      </style.highContainer>
      <style.EmptyContainer>
        <style.StyledDiv>💌</style.StyledDiv>
        <style.TitleText>마니또에게</style.TitleText>
        <style.TitleText>레터 메시지를 남겨주세요.</style.TitleText>
        <style.TitleText2>To.마니또</style.TitleText2>
        <style.Container>
          {!isFocused && !letterMessage && (
            <style.HintText>
              마니또를 위한 레터를 <br />
              작성해보세요!
            </style.HintText>
          )}
          <style.HintInput
            value={letterMessage}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="" // 기본 placeholder 비활성화
          />
        </style.Container>
        <style.StyledButton
          isActive={letterMessage.trim().length > 0}
          onClick={handleClick}
        >
          레터 등록하기
        </style.StyledButton>
      </style.EmptyContainer>
    </style.MainContainer>
  );
};

export default LetterWrite;