import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson.css'; // Reusing shared CSS for consistency

function EmotionalIntelligence() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Emotional Intelligence?",
      text: "Emotional intelligence is the ability to understand your emotions, manage them, and respect others' feelings."
    },
    {
      id: 2,
      title: "Why is Emotional Intelligence Important?",
      points: [
        "reduces stress",
        "helps solve conflicts",
        "builds healthy friendships",
        "improves confidence",
        "helps in teamwork",
        "makes communication better"
      ]
    },
    {
      id: 3,
      title: "How to Improve Emotional Intelligence?",
      points: [
        "practice mindfulness",
        "recognize your emotions",
        "understand how others feel",
        "control anger",
        "show empathy",
        "listen without judging"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "A student with good EQ stays calm during an argument and finds a peaceful solution."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Emotional Intelligence</h1>
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
          <p className="lesson-quote">   "Emotional intelligence is the key to personal and professional success."</p>
          <span className="quote-author">— Daniel Goleman</span>
        </div>

        <div className="footer-action">
          
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/emotional-intelligence')}>Practice MCQs</button>
        </div>
      </div>
    </div>
  );
}

export default EmotionalIntelligence;