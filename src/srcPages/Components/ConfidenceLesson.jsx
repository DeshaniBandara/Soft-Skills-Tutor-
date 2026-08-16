import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson.css'; // Shared CSS for all modules

function ConfidenceLesson() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Confidence?",
      text: "Confidence is the belief in your own abilities. Self-management means controlling your emotions and behavior."
    },
    {
      id: 2,
      title: "Why is Confidence Important?",
      points: [
        "improves public speaking",
        "makes you brave enough to try new things",
        "helps in interviews",
        "reduces fear and anxiety",
        "makes learning enjoyable"
      ]
    },
    {
      id: 3,
      title: "How to Improve Confidence",
      points: [
        "practice speaking",
        "celebrate small achievements",
        "avoid negative self-talk",
        "set small goals",
        "surround yourself with positive people",
        "learn new skills"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "A shy student becomes more confident after practicing short video speeches daily."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Confidence & Self-Management</h1>
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
          <p className="lesson-quote">"With confidence, you have won before you have started."</p>
          <span className="quote-author">— Marcus Garvey</span>
        </div>

        <div className="footer-action">
          
        <button className="practice-mcq-btn" onClick={() => navigate('/quiz/confidence-self-management')}>
          Practice MCQs
        </button>
        </div>
      </div>
    </div>
  );
}

export default ConfidenceLesson;