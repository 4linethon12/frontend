 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import StartPage from '../pages/StartPage';
import Mainpage from '../pages/manittoo/Mainpage';

function AppRouter() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MainPage" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;