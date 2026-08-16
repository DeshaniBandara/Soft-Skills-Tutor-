import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson.css';

function CommunicationSkills() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Communication?",
      text: "Communication is the ability to express ideas clearly, listen actively, and share information in a way that others understand. It involves speaking, listening, body language, tone, clarity, eye contact, and confidence."
    },
    {
      id: 2,
      title: "Why is Communication Important?",
      points: [
        "Helps build strong relationships",
        "Reduces misunderstandings",
        "Boosts confidence",
        "Helps in interviews",
        "Improves teamwork",
        "Key skill for leadership",
        "Helps express emotions properly"
      ]
    },
    {
      id: 3,
      title: "How to Improve Communication",
      points: [
        "Practice speaking daily",
        "Record your voice or video",
        "Use simple, clear words",
        "Maintain eye contact",
        "Listen without interrupting",
        "Reduce filler words ('umm', 'ahh')",
        "Practice deep breathing to control fear"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "A student who can explain ideas confidently is more likely to win competitions, succeed in group projects, and shine in presentations."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Communication Skills</h1>
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
          <p className="lesson-quote">"Communication works for those who work at it."</p>
          <span className="quote-author">— John Powell</span>
        </div>

        <div className="footer-action">
          
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/communication-skills')}>Practice MCQs</button>
        </div>
      </div>
    </div>
  );
}

export default CommunicationSkills;