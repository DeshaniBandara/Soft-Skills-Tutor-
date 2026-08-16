import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson.css'; // Reuse your updated CSS

function TimeManagementLesson() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Time Management?",
      text: "Time management means planning your time to complete tasks efficiently."
    },
    {
      id: 2,
      title: "Why is Time Management Important?",
      points: [
        "reduces stress",
        "helps complete schoolwork on time",
        "makes room for hobbies",
        "improves discipline",
        "prevents last-minute pressure"
      ]
    },
    {
      id: 3,
      title: "How to Improve Time Management",
      points: [
        "use a planner",
        "create to-do lists",
        "set deadlines",
        "avoid procrastination",
        "break tasks into steps",
        "remove distractions (mobile/social media)"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "Students who plan their study time usually get better grades and sleep better without stress."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Time Management</h1>
      </header>

      <div className="lesson-stepper-body">
        <div className="stepper-line"></div>
        {sections.map((sec) => (
          <div key={sec.id} className="step-row">
            <div className="step-number">{sec.id}</div>
            <div className="step-info">
              <h3>{sec.title}</h3>
              {sec.text && <p>{sec.text}</p>}
              {sec.points && (
                <ul className="step-list">
                  {sec.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
        <div className="lesson-quote-container">
          <p className="lesson-quote">"Time is what we want most, but what we use worst."</p>
          <span className="quote-author">— William Penn</span>
        </div>
        <div className="footer-action">
          
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/time-management')}>
  Practice MCQs
</button>
        </div>
        
        
      </div>
    </div>
  );
}

export default TimeManagementLesson;