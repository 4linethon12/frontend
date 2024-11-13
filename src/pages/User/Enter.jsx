import { useNavigate } from 'react-router-dom';
import '../../assets/css/enter.css';
import video from '../../assets/img/enter/backvideo.mp4'

function Enter() {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate('/join');
  };

  const goToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
    <div className="video-background">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
      </video>
        <div className="content">
          <div className="enter_wrap container">
            <div className='backcolor' />
            <span className="logo" />
            <span className="santa" />

            <button className="start" onClick={goToJoin}>크리스마또 시작하기</button>

          <div className="section">
            <p className="notice">이미 아이디가 있으신가요?</p>
            <p className="login" onClick={goToLoginPage}>로그인하기</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Enter;
