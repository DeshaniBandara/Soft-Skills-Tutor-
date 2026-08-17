import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./srcPages/Components/LandingPage";
import SignIn from "./srcPages/Components/SignIn.jsx";
import SignUp from "./srcPages/Components/SignUp.jsx";
import ResetPassword from "./srcPages/Components/ResetPassword.jsx";
import UpdatePassword from "./srcPages/Components/UpdatePassword.jsx";
import Dashboard from "./srcPages/Components/Dashboard.jsx";
import ExploreLessons from "./srcPages/Components/ExploreLessons";
import GuidedActivities from "./srcPages/Components/GuidedActivities.jsx";
import CommunicationSkillsLesson from "./srcPages/Components/CommunicationSkillsLesson";
import TeamworkLesson from "./srcPages/Components/TeamworkLesson";
import TimeManagementLesson from "./srcPages/Components/TimeManagemenLessont.jsx";
import LeadershipSkills from './srcPages/Components/LeadershipSkills'; 
import EmotionalIntelligence from './srcPages/Components/EmotionalIntelligence';
import ProblemSolving from './srcPages/Components/ProblemSolving';
import ConfidenceLesson from './srcPages/Components/ConfidenceLesson'; 
import CommActivity from './srcPages/Components/CommActivity';
import TeamworkActivity from './srcPages/Components/TeamworkActivity';
import LeadershipActivities from './srcPages/Components/LeadershipActivities.jsx';
import TimeManagement from './srcPages/Components/TimeManagement.jsx';
import EmotionalIntelligenceAc from './srcPages/Components/EmotionalIntelligenceAc.jsx';
import ProblemSolvingAc from './srcPages/Components/ProblemSolvingAc.jsx';
import ConfidenceAndSelfManagementAc from './srcPages/Components/ConfidenceAndSelfManagementAc.jsx';
import QuizCommunicationComponent from './srcPages/Components/QuizCommunicationComponent.jsx';
import QuizTeamworkComponent from './srcPages/Components/QuizTeamworkComponent.jsx';
import QuizLeadershipComponent from './srcPages/Components/QuizLeadershipComponent.jsx';
import QuizTimeManagementComponent from './srcPages/Components/QuizTimeManagementComponent';
import QuizEmotionalIntelligenceComponent from './srcPages/Components/QuizEmotionalIntelligenceComponent.jsx';
import QuizProblemSolvingComponent from './srcPages/Components/QuizProblemSolvingComponent';
import QuizConfidenceComponent from './srcPages/Components/QuizConfidenceComponent';
import VideoUploadPage from './srcPages/Components/VideoUploadPage';
import DownloadPage from './srcPages/Components/DownloadPage';
import GuidancePage from './srcPages/Components/GuidancePage.jsx';
import ChatBot from './srcPages/Components/ChatBot';

import "./App.css";

function App() {
  return (
    // ✅ No basename needed - app serves from root
    <Router>
      <ChatBot />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore-lessons" element={<ExploreLessons />} />
        <Route path="/guided-activities" element={<GuidedActivities />} />
        <Route path="/communication-skills" element={<CommunicationSkillsLesson />} />
        <Route path="/teamwork-collaboration" element={<TeamworkLesson />} />
        <Route path="/time-management" element={<TimeManagementLesson />} />
        <Route path="/leadership-skills" element={<LeadershipSkills />} />
        <Route path="/emotional-intelligence" element={<EmotionalIntelligence />} />
        <Route path="/problem-solving-critical-thinking" element={<ProblemSolving />} />
        <Route path="/confidence-self-management" element={<ConfidenceLesson />} />
        <Route path="/activity/communication-skills" element={<CommActivity />} />
        <Route path="/activity/teamwork-collaboration" element={<TeamworkActivity />} />
        <Route path="/activity/leadership-skills" element={<LeadershipActivities/>} />
        <Route path="/activity/time-management" element={<TimeManagement/>} />
        <Route path="/activity/emotional-intelligence" element={<EmotionalIntelligenceAc/>} />
        <Route path="/activity/problem-solving-critical-thinking" element={<ProblemSolvingAc/>} />
        <Route path="/activity/confidence-self-management" element={<ConfidenceAndSelfManagementAc/>} />
        <Route path="/quiz/communication-skills" element={<QuizCommunicationComponent />} />
        <Route path="/quiz/teamwork-collaboration" element={<QuizTeamworkComponent />} />
        <Route path="/quiz/leadership-skills" element={<QuizLeadershipComponent />} />
        <Route path="/quiz/time-management" element={<QuizTimeManagementComponent />} />
        <Route path="/quiz/emotional-intelligence" element={<QuizEmotionalIntelligenceComponent />} />
        <Route path="/quiz/problem-solving-critical-thinking" element={<QuizProblemSolvingComponent />} />
        <Route path="/quiz/confidence-self-management" element={<QuizConfidenceComponent />} />
        <Route path="/ai-skill-feedback" element={<VideoUploadPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/guidance" element={<GuidancePage />} />
      </Routes>
    </Router>
  );
}

export default App;