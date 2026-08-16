import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import headerImg from "../../assets/ExploreLesson.png"; 
import logo from "../../assets/logo.png"; // 🔴 Fix update import logo from "../../assets/logo.png"; error
import "./ExploreLessons.css";

function ExploreLessons() {
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

  // Helper function to turn "Leadership Skills" into "/leadership-skills"
  const getPath = (name) => `/${name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;

  return (
    <div className="explore-page-wrapper">
      <nav className="explore-top-nav">
        <button onClick={() => navigate('/dashboard')} className="back-link">
          <ArrowLeft size={18} /> Back to Dashboard
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
            <h2>Explore Soft Skills</h2>
            <p>
              We provide you with the right tools to help you interact confidently 
              in the real world. Choose the skill you want to learn today.
            </p>
          </div>
        </aside>

        <section className="explore-list-container">
          <div className="list-header">
             <h1>Course Modules</h1>
          </div>
          <div className="lessons-stack">
            {lessons.map((lesson, idx) => (
              <button 
                key={idx} 
                className="lesson-item-row"
                onClick={() => navigate(getPath(lesson))} // Now correctly triggers navigation
              >
                <span className="lesson-text">{lesson}</span>
                <div className="lesson-icon-wrap">
                  <ChevronRight size={20} />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExploreLessons;
