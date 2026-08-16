import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; // This must contain the same styles used for CommActivity
import ProblemSolving from './ProblemSolving';

function ProblemSolvingAc() {
  const navigate = useNavigate();

  const activities = [
   { id: 1, title: "Identify the Problem", text: "Read a short scenario and identify the problem." },
    { id: 2, title: "Find 2 Solutions", text: "Think of two ways to solve a small issue." },
    { id: 3, title: "Decision-Making Card", text: "Choose the better choice in a situation." },
    { id: 4, title: "Puzzle Solving", text: "Solve a small riddle or puzzle." },
    { id: 5, title: "Pros & Cons Chart", text: "List good and bad points of a solution." },
    { id: 6, title: "5 Whys Activity", text: "Ask “why?” five times to find root cause." },
    { id: 7, title: "Creative Solution Drawing", text: "Draw any creative solution." },
    { id: 8, title: "Predict the Outcome", text: "Say what will happen if a bad decision is made." },
    { id: 9, title: "Fix the Mistake", text: "Write how to correct a common error." },
    { id: 10, title: "Scenario Challenge", text: "Read a situation and give the best solution." },
    { id: 11, title: "Alternative Thinking", text: "Think of 3 different solutions." },
    { id: 12, title: "Calm Thinking Time", text: "Think silently for one minute." },
    { id: 13, title: "What-If Challenge", text: "Respond to a what-if situation." },
    { id: 14, title: "Improve the Idea", text: "Take an idea and make it better." },
    { id: 15, title: "Problem Sorting", text: "Identify if the problem is big or small." }


  ];

  return (
    <div className="activity-view-container">
      {/* Same header class as CommActivity to get the deep blue background */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Problem-Solving and Critical Thinking</h1>
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

export default ProblemSolvingAc;