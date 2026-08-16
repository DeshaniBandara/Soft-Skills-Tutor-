import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; 
import EmotionalIntelligence from './EmotionalIntelligence';
import ConfidenceLesson from './ConfidenceLesson';

function ConfidenceAndSelfManagementAc() {
  const navigate = useNavigate();

  const activities = [
    { id: 1, title: "Daily Affirmation", text: "Say: “I can do this.”" },
    { id: 2, title: "Small Goal Setting", text: "Write one goal for today." },
    { id: 3, title: "Bravery Challenge", text: "Do one thing that scares you a little." },
    { id: 4, title: "Positive Self-Talk", text: "Replace a negative thought with a positive one." },
    { id: 5, title: "Introduce Yourself", text: "Speak for 30 seconds confidently." },
    { id: 6, title: "Practise Good Posture", text: "Stand straight for confidence." },
    { id: 7, title: "Mirror Confidence Test", text: "Smile at yourself for 10 seconds." },
    { id: 8, title: "Do a Task Alone", text: "Complete something without help." },
    { id: 9, title: "Record & Review", text: "Record a 20-second talk." },
    { id: 10, title: "Volunteer First", text: "Raise your hand first in a task." },
    { id: 11, title: "Goal Breakdown", text: "Break your goal into 3 tiny steps." },
    { id: 12, title: "Confidence Rating", text: "Rate your confidence today (1–10)." },
    { id: 13, title: "Success Memory Moment", text: "Remember one thing you did well." },
    { id: 14, title: "Skill Practice", text: "Practice a skill for 3 minutes." },
    { id: 15, title: "Calmness Breath", text: "Use calm breathing before speaking." }

  ];

  return (
    <div className="activity-view-container">
      {/* Used style={{padding: '30px 20px'}} to fix height without new classes */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Confidence and Self-ManagementAc</h1>
          <p>Practical Guidance Activities</p>
        </div>
      </header>

      <div className="activity-grid-layout">
        {activities.map((act) => (
          <div key={act.id} className="activity-card-modern">
            <div className="card-header-row">
              <span className="activity-id-badge">{act.id}</span>
            </div>
            <div className="card-content-area">
              <h3>{act.title}</h3>
              <p>{act.text}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfidenceAndSelfManagementAc;