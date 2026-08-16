import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson'; // Reusing the same CSS for consistency

function TeamworkLesson() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Teamwork?",
      text: "Teamwork is the ability to work together with others to achieve a common goal. It includes cooperation, respect, sharing ideas, and supporting others."
    },
    {
      id: 2,
      title: "Why is Teamwork Important?",
      points: [
        "Helps complete tasks faster",
        "Improves learning",
        "Encourages creative ideas",
        "Builds leadership",
        "Helps in school projects and careers"
      ]
    },
    {
      id: 3,
      title: "How to Improve Teamwork",
      points: [
        "Listen to teammates",
        "Share responsibilities",
        "Appreciate others' ideas",
        "Stay positive",
        "Avoid blaming",
        "Help teammates who struggle"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "In group assignments, teams with good collaboration finish faster, have fewer conflicts, and produce better results."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Teamwork & Collaboration</h1>
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
          <p className="lesson-quote">"If you want to go fast, go alone. If you want to go far, go together."</p>
          <span className="quote-author">— African Proverb</span>
        </div>

        <div className="footer-action">
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/teamwork-collaboration')}>
            Practice MCQs
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamworkLesson;