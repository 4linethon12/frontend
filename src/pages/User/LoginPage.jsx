// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import * as style from '../../style/LoginPagestyle';
import LogoImage from '/images/Login/LoginLogo.png';
import SantaSvg from '/images/Login/SantaImage.png';
import Input from '../../component/manittoo/Input';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleClick = async () => {
    try {
      await login(nickname, password); // nickname과 password를 서버로 전송
      navigate('/Mainpage'); // 로그인 성공 시 메인 페이지로 이동
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요');
    }
  };

  return (
    <style.LoginBackground>
      <style.CenteredImage src={LogoImage} alt="LogoImage" />
      <style.SantaImage src={SantaSvg} alt="SantaImage" />
      <style.EmptyContainer>
        <style.TitleText>닉네임</style.TitleText>
        <Input
          placeholder="닉네임"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <style.TitleText>비밀번호</style.TitleText>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        <style.StyledButton onClick={handleClick}>로그인</style.StyledButton>
      </style.EmptyContainer>
    </style.LoginBackground>
  );
};

export default LoginPage;