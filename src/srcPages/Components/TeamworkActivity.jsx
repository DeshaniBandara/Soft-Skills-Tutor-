import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; 

function TeamworkActivity() {
  const navigate = useNavigate();

  const activities = [
    { id: 1, title: "Pair Discussion", text: "Two students discuss a topic and agree on one conclusion." },
    { id: 2, title: "Idea Sharing Circle", text: "Share one idea each in a group." },
    { id: 3, title: "Build a Story Together", text: "Each teammate adds one sentence." },
    { id: 4, title: "Role Assignment Game", text: "Assign roles (leader, writer, timekeeper)." },
    { id: 5, title: "Group Puzzle Solving", text: "Solve a simple task together." },
    { id: 6, title: "Team Values List", text: "Teams list 5 values for working together." },
    { id: 7, title: "Group Drawing", text: "Everyone contributes to one picture." },
    { id: 8, title: "Team Cheer Activity", text: "Create a short positive team phrase." },
    { id: 9, title: "Pass-the-Message", text: "Share a message around a circle to test listening." },
    { id: 10, title: "Team Decision Activity", text: "Group decides best solution for a scenario." },
    { id: 11, title: "Pick the Best Idea", text: "List many ideas; choose one together." },
    { id: 12, title: "Appreciation Round", text: "Members say one positive thing about another." },
    { id: 13, title: "Complete a Task Together", text: "Work together on a simple class activity." },
    { id: 14, title: "Group Planning", text: "Plan an event or classroom activity." },
    { id: 15, title: "Silent Communication Game", text: "Teams must complete a task without talking." }
  ];

  return (
    <div className="activity-view-container">
      {/* Used style={{padding: '30px 20px'}} to fix height without new classes */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Teamwork & Collaboration</h1>
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

export default TeamworkActivity;