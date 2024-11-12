import { useNavigate } from 'react-router-dom';
import '../../assets/css/enter.css'

function Enter () {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate('/join');
  };

  const goToLoginPage = () => {
    navigate('/login');
  };
  const gotoJoinPage = () => {
    navigate('/Join');
  };

  return (
    <div className='enter_wrap container'>
      <span className='logo' />
      <span className='santa' />

      <button className='start' onClick={goToJoin}>크리스마또 시작하기</button>

      <div className='section'>
        <p className='notice'>이미 아이디가 있으신가요?</p>
        <p className='login' onClick={goToLoginPage}>로그인하기</p>
      </div>
    </div>
  );
}

export default Enter;