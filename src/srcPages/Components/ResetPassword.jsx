import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, CheckCircle } from 'lucide-react'; 
import { supabase } from './supabaseClient';
import './ResetPassword.css';
import logo from "../../assets/logo.png";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://soft-skills-tutor.vercel.app/update-password', // ✅ Vercel URL
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      setIsSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="reset-page-container">
      <button className="back-button" onClick={() => navigate('/signin')}>
          ← Go Back
      </button>

      <div className="reset-card">
        <div className="logo-container">
          <img src={logo} alt="SoftSkillsTutor Logo" className="auth-logo" />
        </div>
        
        {isSent ? (
          <div className="success-state">
            <CheckCircle size={60} color="#22c55e" style={{ marginBottom: '1rem' }} />
            <h2>Check your email</h2>
            <p>We've sent a password reset link to <strong>{email}</strong>.</p>
            <button className="reset-btn" onClick={() => setIsSent(false)}>
              Try another email
            </button>
          </div>
        ) : (
          <>
            <h2>Reset Password</h2>
            <p className="reset-subtitle">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form className="reset-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="reset-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </>
        )}

        <div className="reset-footer">
          Remember your password? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
