// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import * as style from '../../style/TreePage/TreeMinatostyle';
import treeImage from '/images/Tree.png'; 
import LogoImage from '/images/mainpage/Sub.png'; 

const TreeManito = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState(''); // 그룹 이름 상태
  const [nickname, setNickname] = useState(''); // 유저 닉네임 상태

  const handleNavigateMain = () => {
    navigate('/Mainpage2');
  }; 
  useEffect(() => {
    // 로컬 스토리지에서 그룹 이름과 닉네임 가져오기
    const storedGroupName = localStorage.getItem('groupName') || '그룹 이름 없음';
    const storedNickname = localStorage.getItem('nickname') || '닉네임 없음';

    setGroupName(storedGroupName); // 그룹 이름 설정
    setNickname(storedNickname); // 닉네임 설정
  }, []);

  return (
    <style.MainContainer>
      <style.EmptyContainer>
        <style.RowContainer1>
          <style.CenteredImage2 src={LogoImage} alt="LogoImage" />
          <style.TitleText onClick={handleNavigateMain} style={{ cursor: 'pointer' }}>메인으로 돌아가기</style.TitleText>
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
      <style.CenteredImage src={treeImage} alt="Tree Image" />
    </style.MainContainer>
  );
};

export default TreeManito;