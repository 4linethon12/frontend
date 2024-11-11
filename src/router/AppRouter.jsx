 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Mainpage from '../pages/manittoo/Mainpage3.1';
import MakeGroup from '../pages/manittoo/MakeGroupPage3.2';
import MakeMission from '../pages/manittoo/MakeMissionPage3.3';
import GroupCOmplete from '../pages/Group/GroupCompletePage3.4'
import JoinGroup from '../pages/Group/JoinGroupPage3.6';
import BeforeMatching from '../pages/matching/BeforeMatching_captin3.7';
import ProcessMatching from '../pages/matching/ProcessMatching3.8';
import CompleteMatching from '../pages/matching/CompleteMatching3.9';
import FinalOpenPage from '../pages/manittoo/FinalOpenPage3.10';
import TreeManito from '../pages/Tree/TreeManito4.1';
import Letter from '../pages/Tree/Letter4.3';
import Letterwirte   from '../pages/Tree/Letterwirte';
import BeforeTree from '../pages/Tree/BeforeTree4.4';
import WriteHintPages from '../pages/Tree/WriteHint4.5';

function AppRouter() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Mainpage />} />
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
        <Route path="/TreeManito" element={<TreeManito />} />
        <Route path="/Letter" element={<Letter />} />
        <Route path="/Letterwirte" element={<Letterwirte />} />
        <Route path="/BeforeTree" element={<BeforeTree />} />
        <Route path="/WriteHintPages" element={<WriteHintPages />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;