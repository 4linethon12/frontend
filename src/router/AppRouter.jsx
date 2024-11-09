 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import StartPage from '../pages/StartPage';
import Mainpage from '../pages/manittoo/Mainpage';
import MakeGroup from '../pages/manittoo/MakeGroupPage';
import MakeMission from '../pages/manittoo/MakeMissionPage';
import GroupCOmplete from '../pages/Group/GroupCompletePage'
import JoinGroup from '../pages/Group/JoinGroupPage';
import BeforeMatching from '../pages/matching/BeforeMatching_captin';
import ProcessMatching from '../pages/matching/ProcessMatching';
import CompleteMatching from '../pages/matching/CompleteMatching';
import FinalOpenPage from '../pages/manittoo/FinalOpenPage';
function AppRouter() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MainPage" element={<Mainpage />} />
        <Route path="/MakeGroup" element={<MakeGroup />} />
        <Route path="/MakeMission" element={<MakeMission />} />
        <Route path="/GroupCOmplete" element={<GroupCOmplete />} />
        <Route path="/JoinGroupPage" element={<JoinGroup />} />
        <Route path="/BeforeMatching" element={<BeforeMatching />} />
        <Route path="/ProcessMatching" element={<ProcessMatching />} />
        <Route path="/CompleteMatching" element={<CompleteMatching />} />
        <Route path="/CompleteMatching" element={<CompleteMatching />} />
        <Route path="/FinalOpenPage" element={<FinalOpenPage />} />
        
      </Routes>
    </Router>
  );
}

export default AppRouter;