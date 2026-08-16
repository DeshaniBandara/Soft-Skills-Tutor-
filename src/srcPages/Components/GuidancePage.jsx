import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogIn, BookOpen, PlayCircle, Cpu, BarChart3, Download } from 'lucide-react';
import logo from "../../assets/logo.png"; 
import "./GuidancePage.css";

const GuidancePage = () => {
  const navigate = useNavigate();

  const steps = [
    { title: "Secure Authentication", icon: <LogIn />, desc: "Log in via Google for a personalized experience. Your progress is saved automatically." },
    { title: "Knowledge Base", icon: <BookOpen />, desc: "Explore theoretical lessons and master the fundamentals of professional communication." },
    { title: "Interactive Practice", icon: <PlayCircle />, desc: "Engage in guided activities designed to put your skills to the test in real-time." },
    { title: "AI Analysis", icon: <Cpu />, desc: "Upload your practice videos. Our advanced AI evaluates your tone, pace, and clarity." },
    { title: "Progress Insights", icon: <BarChart3 />, desc: "Track your growth with detailed dashboards and performance history over time." },
    { title: "Resource Library", icon: <Download />, desc: "Access a curated collection of soft-skill books and articles at your fingertips." }
  ];

  return (
    <div className="explore-page-wrapper">
      {/* Exact Nav Structure from your other pages */}
      <nav className="explore-top-nav">
        <button onClick={() => navigate('/')} className="back-link">
          <ArrowLeft size={20} /> Go Back
        </button>
        <div className="explore-brand">
          <img src={logo} alt="Logo" className="nav-logo-img" />
          <h1 className="nav-title">SoftSkills<span>Tutor</span></h1>
        </div>
      </nav>

      <div className="gui-main-content">
        <header className="gui-hero-section">
          <span className="gui-status-badge">User Manual</span>
          <h2>Master the Platform</h2>
          <p>Follow these steps to maximize your learning experience with our AI-powered tutor.</p>
        </header>

        <div className="gui-steps-container">
          {steps.map((step, index) => (
            <div key={index} className="gui-step-item">
              <div className="gui-step-visual">
                <div className="gui-icon-holder">{step.icon}</div>
                {index !== steps.length - 1 && <div className="gui-step-line"></div>}
              </div>
              <div className="gui-step-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="gui-step-number-bg">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidancePage;