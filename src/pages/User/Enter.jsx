import { useNavigate } from 'react-router-dom';
import '../../assets/css/enter.css'

function Enter () {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div className='enter_wrap container'>
      <span className='logo' />
      <span className='santa' />
      <button className='start' onClick={goToHomePage}>서비스 이름 시작하기</button>
      <div className='section'>
        <p className='notice'>이미 아이디가 있으신가요?</p>
        <p className='login' onClick={goToLoginPage}>로그인하기</p>
      </div>
    </div>
  );
}

export default Enter;