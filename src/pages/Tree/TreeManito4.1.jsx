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

const getHintPosition = (index) => {
  const positions = [
    { top: '50%', left: '40%' },
    { top: '65%', left: '50%' },
    { top: '50%', left: '65%' },
    { top: '70%', left: '25%' },
    { top: '75%', left: '60%' },
  ];
  return positions[index] || { top: '50%', left: '50%' };
};

const DynamicHintImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.0);
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
`;

const TreeManito = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [nickname, setNickname] = useState('');
  const [hints, setHints] = useState([]);
  const token = localStorage.getItem('token');
  const groupId = localStorage.getItem('groupId');

  const handleNavigateMain = () => {
    if (hints.length >= 5) {
      navigate('/FinalOpenPage');
    } else {
      navigate('/Mainpage2');
    }
  };

  useEffect(() => {
    const storedGroupName = localStorage.getItem('groupName') || '그룹 이름 없음';
    const storedNickname = localStorage.getItem('nickname') || '닉네임 없음';

    setGroupName(storedGroupName);
    setNickname(storedNickname);

    const fetchHints = async () => {
      try {
        if (!token || !groupId) {
          console.error('토큰 또는 그룹 ID가 없습니다.');
          return;
        }

        const response = await axios.get(
          `http://43.201.50.47:8000/api/messages/messages/for-receiver/${groupId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const sortedHints = response.data.sort((a, b) => a.id - b.id);
        console.log('정렬된 힌트 데이터:', sortedHints);
        setHints(sortedHints);
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
          const position = getHintPosition(index);
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
