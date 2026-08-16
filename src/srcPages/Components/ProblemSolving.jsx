import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// ✅ Fixed: Added .css extension
import './CommunicationSkillsLesson.css';

function ProblemSolving() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: "What is Problem Solving?",
      text: "Problem-solving means analyzing situations, finding solutions, and thinking creatively in difficult situations."
    },
    {
      id: 2,
      title: "Why is it Important?",
      points: [
        "helps in exams",
        "improves decision making",
        "builds confidence",
        "useful in real-life challenges",
        "makes students independent thinkers"
      ]
    },
    {
      id: 3,
      title: "How to Improve Problem Solving",
      points: [
        "ask questions",
        "break the problem into steps",
        "think of many solutions",
        "evaluate pros and cons",
        "think calmly",
        "learn from mistakes"
      ]
    },
    {
      id: 4,
      title: "Example",
      text: "A student who solves unexpected issues in a group project becomes more respected and trusted."
    }
  ];

  return (
    <div className="lesson-view-container">
      <header className="lesson-banner-blue">
        <button onClick={() => navigate('/explore-lessons')} className="lesson-back-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h1>Problem Solving & Critical Thinking</h1>
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
          <p className="lesson-quote">“It’s not that I’m so smart; it’s just that I stay with problems longer.”</p>
          <span className="quote-author">— Albert Einstein</span>
        </div>

        <div className="footer-action">
          <button className="practice-mcq-btn" onClick={() => navigate('/quiz/problem-solving-critical-thinking')}>Practice MCQs</button>
        </div>
      </div>
    </div>
  );
}

export default ProblemSolving;