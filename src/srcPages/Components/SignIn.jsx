import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { supabase } from "./supabaseClient";
import "./SignIn.css";
import logo from "../../assets/logo.png";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://soft-skills-tutor.vercel.app/Soft-Skills-Tutor-/dashboard',
      },
    });
    if (error) alert(error.message);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="signin-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Go Back
      </button>
      <div className="signin-card">
        <img src={logo} alt="SoftSkillsTutor Logo" className="signin-logo" />
        <h2>Sign in to SoftSkillsTutor</h2>

        <button className="google-btn" onClick={handleGoogleSignIn} type="button">
          <span className="google-icon">G</span>
          Continue with Google
        </button>
        
        <div className="or-divider">
          <span className="line"></span>
          <span className="or-text">or</span>
          <span className="line"></span>
        </div>

        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label><Mail size={14} /> Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        
          <div className="input-group">
            <label><Lock size={14}/> Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', paddingRight: '40px' }}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <Link to="/reset-password">Reset password</Link>
        <p className="signup">
          No account? <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: '#5c7cfa', fontWeight: 'bold' }}>Create one</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
