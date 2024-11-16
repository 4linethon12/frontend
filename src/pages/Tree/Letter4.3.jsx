// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import letterSvg from '/public/images/Letter/편지지.svg';
import * as style from '../../style/TreePage/Letterstyle';
import chervon from '/images/Mission/x.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Letter = () => {
  const navigate = useNavigate();
  const [manitoName, setManitoName] = useState(''); // 마니또 이름 상태
  const [userName, setUserName] = useState(''); // 사용자 이름 상태
  const [letter, setLetter] = useState(''); // 레터 내용 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const token = localStorage.getItem('token'); // JWT 토큰
  const groupId = localStorage.getItem('groupId'); // 로컬스토리지에서 그룹 ID 가져오기

  useEffect(() => {
    const storedUserName = localStorage.getItem('nickname') || '사용자 이름 없음';
    const storedManitoName = localStorage.getItem('ManitoNickname') || '마니또 이름 없음';

    setUserName(storedUserName);
    setManitoName(storedManitoName);

    const fetchLetter = async () => {
      if (!token || !groupId) {
        console.error('필수 데이터가 없습니다. (토큰 또는 그룹 ID)');
        return;
      }

      try {
        const response = await axios.get(
          `http://43.201.50.47:8000/api/messages/messages/for-receiver/${groupId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const letterData = response.data;
        console.log('받은 레터 데이터:', letterData);

        if (Array.isArray(letterData) && letterData.length > 0) {
          setLetter(letterData[0].letter || '레터 내용이 없습니다.');
        } else {
          setLetter('레터 내용이 없습니다.');
        }
      } catch (error) {
        console.error('레터 데이터를 가져오는 중 오류 발생:', error);
        setLetter('레터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 비활성화
      }
    };

    fetchLetter();
  }, [token, groupId]);

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 상태일 때 표시
  }

  return (
    <style.MainContainer>
      <style.ContentContainer>
        <style.highContainer>
          <style.RightImage
            src={chervon}
            alt="chervon"
            onClick={() => navigate('/TreeManito')}
          />
        </style.highContainer>
        <style.TitleText2>Letter from <br/> Manito</style.TitleText2>

        {/* 편지 이미지와 내용 */}
        <style.LetterWrapper>
          <style.ContainerImage src={letterSvg} alt="Letter SVG" />
          <style.LetterText>
            <style.SenderText>To: {manitoName}</style.SenderText>
            <style.LetterBodyText>{letter}</style.LetterBodyText>
            <style.ReceiverText>From: {userName}</style.ReceiverText>
          </style.LetterText>
        </style.LetterWrapper>
      </style.ContentContainer>
    </style.MainContainer>
  );
};

export default Letter;