import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; 
import EmotionalIntelligence from './EmotionalIntelligence';

function EmotionalIntelligenceAc() {
  const navigate = useNavigate();

  const activities = [
    { id: 1, title: "Emotion Naming", text: "Identify your emotion right now." },
    { id: 2, title: "Deep Breathing", text: "Take 5 deep breaths to calm your mind." },
    { id: 3, title: "Empathy Moment", text: "Write how someone else might feel." },
    { id: 4, title: "Self-Reflection Minute", text: "Think about one reaction you want to improve." },
    { id: 5, title: "Anger Control Activity", text: "Count 1–10 before responding." },
    { id: 6, title: "Gratitude List", text: "Write 3 things you are grateful for." },
    { id: 7, title: "Positive Message", text: "Send a kind message to a friend." },
    { id: 8, title: "Emotion Drawing", text: "Draw your current feeling." },
    { id: 9, title: "Comforting Words Practice", text: "Practice saying supportive phrases." },
    { id: 10, title: "Mindful Listening", text: "Listen to someone for 30 seconds silently." },
    { id: 11, title: "Stress Release", text: "Stretch or relax for one minute." },
    { id: 12, title: "Self-Talk Check", text: "Change one negative thought to a positive one." },
    { id: 13, title: "Emotion Chart", text: "Mark emotions you felt today." },
    { id: 14, title: "Friendship Moment", text: "Say something kind to a classmate." },
    { id: 15, title: "Calm Reaction Role Play", text: "Practice staying calm in a pretend conflict." }
  ];

  return (
    <div className="activity-view-container">
      {/* Used style={{padding: '30px 20px'}} to fix height without new classes */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Emotional Intelligence</h1>
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

export default EmotionalIntelligenceAc;