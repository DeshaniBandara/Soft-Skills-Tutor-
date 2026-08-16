import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff } from 'lucide-react';
import { supabase } from "./supabaseClient"; // Adjusted path to match your structure
import "./SignIn.css";
import logo from "../../assets/logo.png";  // 🔴 Fix update import logo from "../../assets/logo.png"; error

function UpdatePassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true); // Added to show a "checking" state

  useEffect(() => {
    // Listen for the recovery event specifically
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setVerifying(false);
      } else if (event === "SIGNED_IN") {
        setVerifying(false);
      } else if (!session && !verifying) {
        // If no session after checking, they shouldn't be here
        alert("Session expired. Please request a new reset link.");
        navigate('/signin');
      }
    });

    // Fallback check
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setVerifying(false);
      } else {
        // Give it a moment to parse the URL hash
        setTimeout(() => {
            if (!data.session) setVerifying(false);
        }, 1000);
      }
    };
    checkSession();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Password updated successfully!");
      // Log out to ensure they log back in with the new credentials
      await supabase.auth.signOut();
      navigate('/signin');
    }
    setLoading(false);
  };

  if (verifying) {
    return (
      <div className="signin-container">
        <div className="signin-card">
          <p>Verifying reset link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signin-container">
      <div className="signin-card">
        <img src={logo} alt="Logo" className="signin-logo" />
        <h2>Create New Password</h2>
        <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          Please enter your new password below.
        </p>

        <form onSubmit={handleUpdate}>
          <div className="input-group" style={{ position: 'relative' }}>
            <Lock size={16} className="input-icon" /> 
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="New Password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength="6"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-icon"
              style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', right: '10px', top: '30%' }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="input-group">
            <Lock size={16} className="input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;
