import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GuidedActivity.css'; // This must contain the same styles used for CommActivity

function CommActivity() {
  const navigate = useNavigate();

  const activities = [
   { id: 1, title: "One-Minute Talk", text: "Pick a random topic and speak for 1 minute." },
    { id: 2, title: "Mirror Speaking Practice", text: "Speak while watching your expressions." },
    { id: 3, title: "Describe an Object", text: "Describe any object around you in 30 seconds." },
    { id: 4, title: "Voice Tone Practice", text: "Say the same sentence in three different tones." },
    { id: 5, title: "Active Listening Test", text: "Listen to a short clip and write down key points." },
    { id: 6, title: "Pictures to Words", text: "Explain what is happening in a picture." },
    { id: 7, title: "Introduce Yourself Challenge", text: "Give a simple introduction with eye contact." },
    { id: 8, title: "Tell a Story in 5 Sentences", text: "Short storytelling to build clarity." },
    { id: 9, title: "Emotion Expression", text: "Read a sentence showing different emotions." },
    { id: 10, title: "Paraphrasing Activity", text: "Restate someone else's message in your own words." },
    { id: 11, title: "Yes/No Question Game", text: "Ask 5 questions to gather information." },
    { id: 12, title: "Explain Steps", text: "Explain how to make tea or do a daily task." },
    { id: 13, title: "Speech Recording", text: "Record a 30-second talk and review your tone." },
    { id: 14, title: "Word Limitation", text: "Explain something in only 20 words." },
    { id: 15, title: "Communication Role Play", text: "Act as a teacher or shopkeeper and speak politely." }
  ];

  return (
    <div className="activity-view-container">
      {/* Same header class as CommActivity to get the deep blue background */}
      <header className="activity-header-blue">
        <button onClick={() => navigate('/guided-activities')} className="act-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="header-text-wrap">
          <h1>Communication Skills</h1>
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

export default CommActivity;