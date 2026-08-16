import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CommunicationSkillsLesson.css'; // Reusing your shared CSS for consistency

function LeadershipSkills() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Leadership?",
      text: "Leadership is the ability to guide others, make decisions, and inspire people to achieve goals. You don't need a title to be a leader, you need responsibility and mindset."
    },
    {
      id: 2,
      title: "Why is Leadership Important?",
      points: [
        "builds confidence",
        "helps in group activities",
        "encourages responsibility",
        "helps in future careers",
        "improves problem solving"
      ]
    },
    {
      id: 3,
      title: "How to Improve Leadership",
      points: [
        "take responsibility",
        "be honest",
        "help others",
        "make fair decisions",
        "stay calm during problems",
        "encourage everyone"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "A student who volunteers to lead a class project motivates the group and ensures the task is completed on time."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Leadership</h1>
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
          <p className="lesson-quote">"A leader is one who knows the way, goes the way, and shows the way."</p>
          <span className="quote-author">— John C. Maxwell</span>
        </div>

        <div className="footer-action">
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/leadership-skills')}>
            Practice MCQs
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadershipSkills;