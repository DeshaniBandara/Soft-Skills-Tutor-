import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { BookOpen, Activity, Award, LogOut, User, X, Settings, Clock, ChevronRight } from 'lucide-react';
import "./Dashboard.css";
import logo from "../../assets/logo.png";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // ✅ Added loading state

  // --- STATE FOR TRACKING ---
  const [userStats, setUserStats] = useState({
    overall: "0%",
    activities: "0%",
    accuracy: "0%"
  });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const initializeDashboard = async () => {
      setIsCheckingAuth(true);
      await fetchUserData();
      await fetchProgressData();
      await fetchHistory();
      setIsCheckingAuth(false);
    };
    
    initializeDashboard();
  }, []); // ✅ Empty dependency array - runs once on mount

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // ✅ Fixed: Safe email access with fallback
        const email = user.email || '';
        const name = user.user_metadata?.full_name || email.split('@')[0] || 'User';
        setUserName(name);
        setNewDisplayName(name);
      } else {
        navigate('/signin');
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      navigate('/signin');
    }
  };

  // --- FETCH PROGRESS DATA ---
  const fetchProgressData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Replace with actual Supabase queries
      setUserStats({
        overall: "75%", 
        activities: "80%",
        accuracy: "92%"
      });
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  // --- FETCH RECENT HISTORY ---
  const fetchHistory = async () => {
    try {
      // Replace with actual Supabase queries
      const mockHistory = [
        { id: 1, text: "Completed Emotional Intelligence", time: "2h ago" },
        { id: 2, text: "AI Analysis: Speech Clarity improved", time: "Yesterday" }
      ];
      setHistory(mockHistory);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ data: { full_name: newDisplayName } });
      if (!error) {
        setUserName(newDisplayName);
        setIsEditModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setLoading(false);
  };

  // ✅ Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" className="nav-logo-img" />
          <h1 className="nav-title"> SoftSkills<span>Tutor</span></h1>
        </div>
        
        <div className="nav-actions">
          <button onClick={() => setIsEditModalOpen(true)} className="icon-btn-circle">
            <Settings size={20} />
          </button>
          <button onClick={() => supabase.auth.signOut().then(() => navigate('/signin'))} className="logout-pill">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-grid-layout">
        <div className="grid-left">
          <header className="welcome-banner">
            <div className="user-profile-icon"><User size={30} /></div>
            <div>
              <h2>Welcome, {userName}!</h2>
              <p>Ready to level up your skills today?</p>
            </div>
          </header>

          <section className="wide-progress-card">
            <div className="card-header">
              <h3>Learning Progress</h3>
            </div>
            <div className="stats-container">
              {[ 
                { label: "Overall Progress", val: userStats.overall },
                { label: "Activities Completed", val: userStats.activities },
                { label: "Quiz Accuracy", val: userStats.accuracy }
              ].map((item, i) => (
                <div key={i} className="wide-stat-item">
                  <div className="stat-label"><span>{item.label}</span><span>{item.val}</span></div>
                  <div className="wide-bar"><div className="wide-fill" style={{width: item.val}}></div></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid-right">
          <section className="action-section">
            <h3>Quick Actions</h3>
            <div className="action-vertical-list">
              <button className="flat-action-card" onClick={() => navigate('/explore-lessons')}>
                <div className="icon-box"><BookOpen size={22} className="lucide-icon" /></div>
                <span className="action-label">Explore Lessons</span>
                <ChevronRight size={18} className="arrow-icon" />
              </button>

              <button className="flat-action-card" onClick={() => navigate('/guided-activities')}>
                <div className="icon-box"><Activity size={22} className="lucide-icon" /></div>
                <span className="action-label">Guided Activities</span>
                <ChevronRight size={18} className="arrow-icon" />
              </button>

              <button className="flat-action-card" onClick={() => navigate('/ai-skill-feedback')}>
                <div className="icon-box"><Award size={22} className="lucide-icon" /></div>
                <span className="action-label">Get AI Skill Feedback</span>
                <ChevronRight size={18} className="arrow-icon" />
              </button>
            </div>
          </section>

          <section className="activity-feed">
            <div className="section-header">
              <Clock size={18} />
              <h3>Recent History</h3>
            </div>
            <div className="history-list">
              {history.map((item) => (
                <div key={item.id} className="history-item">
                  <p>{item.text}</p>
                  <span className="time-tag">{item.time}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>Update Profile</h3>
              <button onClick={() => setIsEditModalOpen(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleUpdateProfile}>
              <div className="input-group">
                <label>Display Name</label>
                <input type="text" value={newDisplayName} onChange={(e) => setNewDisplayName(e.target.value)} required />
              </div>
              <button type="submit" className="save-btn" disabled={loading}>
                {loading ? "Saving..." : "Update Name"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;