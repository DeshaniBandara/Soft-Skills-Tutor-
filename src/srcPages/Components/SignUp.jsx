import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Added Eye and EyeOff
import { supabase } from "./supabaseClient";
import './SignUp.css';
import logo from "../../assets/logo.png";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for toggle

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Success! Please check your email for a verification link.");
      navigate('/signin');
    }
    setLoading(false);
  };

  return (
    <div className="signup-page-container">
      <button className="back-button" onClick={() => navigate('/signin')}>
        ← Go Back
      </button>

      <div className="signup-card">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h2>Create Account</h2>
        <p className="signup-subtitle">Join us today!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label><User size={16} /> Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          </div>

          <div className="input-field">
            <label><Mail size={16} /> Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-field">
            <label><Lock size={16} /> Password</label>
            <div style={{ position: 'relative' }}> {/* Wrapper for icon positioning */}
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                style={{ width: '100%', paddingRight: '40px' }} // Space for the eye icon
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

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Processing..." : "Create Account"}
          </button>
        </form>

        <div className="signup-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;