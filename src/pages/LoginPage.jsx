 
import { useNavigate } from 'react-router-dom';
import { LoginBackground } from '../assets/styles/pages/LoginPagestyle';


function LoginPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/HomePage');
  };

  return (
    <LoginBackground>
      <h1>로그인 페이지</h1>
      <button onClick={goToHomePage}>홈페이지로 이동</button>
    </LoginBackground>
  );
}

export default LoginPage;