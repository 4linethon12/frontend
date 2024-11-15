// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import * as style from '../../style/TreePage/TreeMinatostyle';
import treeImage from '/images/Tree.png';
import LogoImage from '/images/mainpage/Sub.png';
import hintImage1 from '/images/treegift/1.png';
import hintImage2 from '/images/treegift/2.png';
import hintImage3 from '/images/treegift/3.png';
import hintImage4 from '/images/treegift/4.png';
import LetterImage5 from '/images/treegift/5.png'; // 레터 이미지 추가
import axios from 'axios';

const TreeManito = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState(''); // 그룹 이름 상태
  const [nickname, setNickname] = useState(''); // 유저 닉네임 상태
  const [hints, setHints] = useState([]); // 힌트 상태
  const token = localStorage.getItem('token'); // JWT 토큰
  const groupId = localStorage.getItem('groupId'); // 로컬 스토리지에서 그룹 ID 가져오기

  const handleNavigateMain = () => {
    navigate('/Mainpage2');
  };

  useEffect(() => {
    // 로컬 스토리지에서 그룹 이름과 닉네임 가져오기
    const storedGroupName = localStorage.getItem('groupName') || '그룹 이름 없음';
    const storedNickname = localStorage.getItem('nickname') || '닉네임 없음';

    setGroupName(storedGroupName); // 그룹 이름 설정
    setNickname(storedNickname); // 닉네임 설정

    // 힌트 데이터 조회
    const fetchHints = async () => {
      try {
        if (!token || !groupId) {
          console.error('토큰 또는 그룹 ID가 없습니다.');
          return;
        }

        const response = await axios.get(
          `http://43.201.50.47:8000/api/messages/messages/for-receiver/${groupId}/`, // API URL
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization 헤더
              'Content-Type': 'application/json', // JSON 형식 헤더
            },
          }
        );

        // 서버에서 받은 힌트를 ID 기준으로 정렬
        const sortedHints = response.data.sort((a, b) => a.id - b.id);
        console.log('정렬된 힌트 데이터:', sortedHints);
        setHints(sortedHints); // 정렬된 힌트를 상태로 저장
      } catch (error) {
        console.error('힌트 조회 실패:', error);
      }
    };

    fetchHints();
  }, [token, groupId]);

  // 힌트에 사용할 이미지와 텍스트 매핑
  const hintImages = [hintImage1, hintImage2, hintImage3, hintImage4];
  const hintTexts = ['1st 힌트', '2nd 힌트', '3rd 힌트', 'Last 힌트'];

  return (
    <style.MainContainer>
      <style.EmptyContainer>
        <style.RowContainer1>
          <style.CenteredImage2 src={LogoImage} alt="LogoImage" />
          <style.TitleText onClick={handleNavigateMain} style={{ cursor: 'pointer' }}>
            메인으로 돌아가기
          </style.TitleText>
        </style.RowContainer1>
        <style.TitleText5>{groupName}</style.TitleText5>
        <style.RowContainer2>
          <style.TitleText3>{nickname}</style.TitleText3>
          <style.TitleText4>산타의 마니또 트리</style.TitleText4>
        </style.RowContainer2>
        <style.BadgeContainer>
          <style.BadgeText>💌 1일 뒤 마니또의 힌트가 공개돼요!</style.BadgeText>
        </style.BadgeContainer>
      </style.EmptyContainer>
      <style.TreeContainer>
        <style.CenteredImage src={treeImage} alt="Tree Image" />
        {hints.map((hint, index) => {
          if (index >= hintImages.length && index !== 4) {
            console.warn('힌트 이미지 배열보다 많은 힌트가 있습니다. 추가 이미지 필요.');
            return null; // 초과 힌트는 렌더링하지 않음
          }

          if (index === 4) {
            // 5번째 힌트는 레터 처리
            return (
              <style.HintContainer
                key="letter"
                top="70%" // 적절한 위치
                left="50%"
                onClick={() => navigate('/Letter')}
                style={{ cursor: 'pointer' }}
              >
                <img src={LetterImage5} alt="Letter" style={{ width: '50px', height: '50px' }} />
                <style.TitleText4>레터</style.TitleText4>
              </style.HintContainer>
            );
          }

          const HintStyle = style[`hint_${index + 1}`]; // 동적 스타일
          return (
            <style.HintContainer
              key={hint.id}
              top={`${20 + index * 15}%`} // 각 힌트 위치 동적 설정
              left={`${30 + index * 10}%`}
              onClick={() =>
                navigate('/HintCheck', {
                  state: { hintText: hint.hint, hintIndex: index + 1 },
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <HintStyle
                src={hintImages[index]} // ID 순서대로 이미지를 매핑
                alt={`Hint ${index + 1}`}
              />
              <style.TitleText4>{hintTexts[index]}</style.TitleText4>
            </style.HintContainer>
          );
        })}
      </style.TreeContainer>
    </style.MainContainer>
  );
};

export default TreeManito;