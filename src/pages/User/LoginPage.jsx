import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css'

function LoginPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/HomePage');
  };

  return (
    <div className='login_wrap'>
      <span className='logo' />
      <div className='nickname'>
        <p>닉네임</p>
        <div>
          <input
              type='text'
              className='id' 
              placeholder='닉네임'
              />
        </div>
      </div>
    <div className='password'>
        <p>비밀번호</p>
        <div>
            <input
                type='password'
                className='pw'
                placeholder='비밀번호'
            />  
        </div>
    </div>
    <button className='login' onClick={goToHomePage}>로그인</button>
    </div>
  );
}

export default LoginPage;