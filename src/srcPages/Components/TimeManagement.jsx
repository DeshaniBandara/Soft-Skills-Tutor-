import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; 

function TimeManagement() {
  const navigate = useNavigate();

  const activities = [
    { id: 1, title: "Create a Daily Plan", text: "Write a simple plan for the day." },
    { id: 2, title: "3-Task Priority List", text: "Choose top three tasks for today." },
    { id: 3, title: "Timer Activity", text: "Complete a small task within 2 minutes." },
    { id: 4, title: "Time Guessing Challenge", text: "Guess how long an activity takes." },
    { id: 5, title: "Avoid Distraction Exercise", text: "Work for 3 minutes without checking phone." },
    { id: 6, title: "Mini Timetable", text: "Create a schedule for study time." },
    { id: 7, title: "Breakdown Method", text: "Break a big task into small steps." },
    { id: 8, title: "Finish First Activity", text: "Identify the first important task." },
    { id: 9, title: "Deadline Game", text: "Set a deadline for a small activity." },
    { id: 10, title: "Time Audit", text: "List what you did in the last hour." },
    { id: 11, title: "Focus 5 Challenge", text: "Focus on something for 5 minutes straight." },
    { id: 12, title: "To-Do List Creation", text: "Make a list of 5 tasks." },
    { id: 13, title: "Stop Procrastination Task", text: "Do one thing you have been delaying." },
    { id: 14, title: "Reward Yourself Activity", text: "Complete a small task and reward yourself." },
    { id: 15, title: "Morning Routine Plan", text: "Plan a 10-step morning routine." }
  ];

  return (
    <div className="activity-view-container">
      {/* Used style={{padding: '30px 20px'}} to fix height without new classes */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Time Management</h1>
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

export default TimeManagement;