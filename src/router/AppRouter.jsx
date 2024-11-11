import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/User/LoginPage';
import Enter from '../pages/User/Enter';
import Password from '../pages/Join/Password';
import Join from '../pages/Join/Join';
import JoinDone from '../pages/Join/JoinDone';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/password" element={<Password />} />
        <Route path="/done" element={<JoinDone />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;