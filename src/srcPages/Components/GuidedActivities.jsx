import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import headerImg from "../../assets/GuidedActivities.png"; 
import logo from "../../assets/logo.png"; // 🔴 Fix update import logo from "../../assets/logo.png"; error
import "./GuidedActivities.css";

function GuidedActivities() {
  const navigate = useNavigate();

  const lessons = [
    "Communication Skills",
    "Teamwork & Collaboration",
    "Leadership Skills",
    "Time Management",
    "Emotional Intelligence",
    "Problem-Solving & Critical Thinking",
    "Confidence & Self-Management"
  ];

  return (
    <div className="explore-page-wrapper">
      <nav className="explore-top-nav">
        <button onClick={() => navigate('/dashboard')} className="back-link">
          <ArrowLeft size={18} />  Back to Dashboard
        </button>
        <div className="explore-brand">
          <img src={logo} alt="Logo" className="nav-logo-img" />
          <h1 className="nav-title">SoftSkills<span>Tutor</span></h1>
        </div>
      </nav>

      <div className="explore-main-grid">
        <aside className="explore-sidebar">
          <div className="explore-image-container">
            <img src={headerImg} alt="Learning Illustration" />
          </div>
          <div className="explore-intro">
            <h2>Choose your path today,</h2>
            <p>Small steps every day build great strength.</p>
          </div>
        </aside>

        <section className="explore-list-container">
          <div className="list-header">
            <h1>Guided Activity Module</h1>
          </div>
          <div className="lessons-stack">
            {lessons.map((lesson, idx) => {
              const path = `/activity/${lesson.toLowerCase()
                .replace(/ & /g, '-')
                .replace(/ - /g, '-')
                .replace(/\s+/g, '-')
                .replace(/[()]/g, '')}`;

              return (
                <button 
                  key={idx} 
                  className="lesson-item-row"
                  onClick={() => navigate(path)}
                >
                  <span className="lesson-text">{lesson}</span>
                  <div className="lesson-icon-wrap">
                    <ChevronRight size={20} />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default GuidedActivities;
