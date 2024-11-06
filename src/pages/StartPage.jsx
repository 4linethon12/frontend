import { useNavigate } from 'react-router-dom';
import { StartContainer } from '../assets/styles/pages/StartPagestyles';


function StartPage() {

    const navigate = useNavigate();

    const goToLoginPage = () => {
      navigate('/login');
    };
    return (
        <StartContainer>
          <h1>크리스마또  페이지</h1>
          <button onClick={goToLoginPage}>로그인 하러가기</button>

        </StartContainer>
      );
  }
  
  export default StartPage;