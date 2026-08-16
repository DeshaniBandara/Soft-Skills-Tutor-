import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; // This must contain the same styles used for CommActivity

function LeadershipActivities() {
  const navigate = useNavigate();

  const activities = [
   { id: 1, title: "Lead the Discussion", text: "One student leads a small conversation." },
    { id: 2, title: "Decision-Making Scenario", text: "Choose the best option from a situation" },
    { id: 3, title: "Motivation Message", text: "Create one motivational sentence for others." },
    { id: 4, title: "Set a Group Goal", text: "Choose a shared goal with teammates." },
    { id: 5, title: "Solve a Conflict Role Play", text: "Practice resolving a disagreement." },
    { id: 6, title: "Give Clear Instructions", text: "Direct someone to perform a simple task." },
    { id: 7, title: "Mini Presentation", text: "Present an idea confidently." },
    { id: 8, title: "Help a Peer", text: "Assist someone in completing their task." },
    { id: 9, title: "Organize a Small Activity", text: "Lead a 5-minute activity." },
    { id: 10, title: "Encouragement Test", text: "Say positive feedback to friends." },
    { id: 11, title: "Leadership Reflection", text: "Write 3 qualities of a good leader." },
    { id: 12, title: "Courage Challenge", text: "Volunteer to answer or speak." },
    { id: 13, title: "Team Motivation Game", text: "Inspire your group with a short speech." },
    { id: 14, title: "Take Responsibility Task", text: "Lead a simple class duty for a day." },
    { id: 15, title: "Leader of the Day", text: "Take turns leading small tasks." }

  ];

  return (
    <div className="activity-view-container">
      {/* Same header class as CommActivity to get the deep blue background */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Leadership Skills</h1>
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

export default LeadershipActivities;