// TreeManito.js
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import * as style from '../../style/TreePage/TreeMinatostyle';
import styled from 'styled-components';
import treeImage from '/images/Tree.png';
import ShiningLogo from '/images/ShiningLogo.png';
import hintImage1 from '/images/treegift/1.png';
import hintImage2 from '/images/treegift/3.png';
import hintImage3 from '/images/treegift/4.png';
import hintImage4 from '/images/treegift/2.png';
import hintImage5 from '/images/treegift/5.png';
import axios from 'axios';

// 동적으로 위치를 설정하는 함수
const getHintPosition = (index) => {
  const positions = [
    { top: '50%', left: '40%' }, // Hint 1
    { top: '65%', left: '50%' }, // Hint 2
    { top: '50%', left: '65%' }, // Hint 3
    { top: '70%', left: '25%' }, // Hint 4
    { top: '75%', left: '60%' }, // Hint 5
  ];
  return positions[index] || { top: '50%', left: '50%' }; // 기본값
};

// 동적으로 위치와 스타일을 적용하는 컴포넌트
const DynamicHintImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.0); /* 테스트용 배경색 */
  position: absolute; /* 부모 기준으로 배치 */
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */
`;

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

  return (
    <style.MainContainer>
      <style.EmptyContainer>
        <style.RowContainer1>
          <style.LogoImage src={ShiningLogo}></style.LogoImage>
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
          const position = getHintPosition(index); // 위치 계산
          return (
            <DynamicHintImage
              key={hint.id}
              top={position.top}
              left={position.left}
              onClick={() =>
                navigate('/HintCheck', {
                  state: { hintText: hint.hint, hintIndex: index + 1 },
                })
              }
            >
              <style.HintText>{`${index + 1}st 힌트`}</style.HintText>
              {index === 0 && <img src={hintImage1} alt="힌트 1" />}
              {index === 1 && <img src={hintImage2} alt="힌트 2" />}
              {index === 2 && <img src={hintImage3} alt="힌트 3" />}
              {index === 3 && <img src={hintImage4} alt="힌트 4" />}
              {index === 4 && <img src={hintImage5} alt="힌트 5" />}
            </DynamicHintImage>
          );
        })}
      </style.TreeContainer>
    </style.MainContainer>
  );
};

export default TreeManito;
