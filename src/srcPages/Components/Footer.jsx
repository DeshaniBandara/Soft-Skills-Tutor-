import "./Footer.css";
import { Mail, Globe, MapPin, Phone, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3>SoftSkillsTutor</h3>
          <p>
            SoftSkillsTutor is an AI-powered platform that helps students develop essential soft skills such as 
            communication, teamwork, leadership, and emotional intelligence through interactive lessons and real-time feedback.
          </p>
        </div>

        <div className="footer-box">
          <h3>Links</h3>
          <ul>
            {/* ✅ Changed <a> to <button> */}
            <li><button type="button" className="footer-link-btn" onClick={() => handleScroll("home")}>Home</button></li>
            <li><button type="button" className="footer-link-btn" onClick={() => handleScroll("about")}>About Us</button></li>
            <li><Link to="/download" className="nav-link">Download Resources</Link></li>
            <li><Link to="/signin">Login</Link></li>
            <li><button type="button" className="footer-link-btn" onClick={() => handleScroll("contact")}>Contact</button></li>
          </ul>

          <div className="footer-policy">
            <a 
              href="https://szqeakrhaxxpnfclgfep.supabase.co/storage/v1/object/public/resources/Terms_Of_Use.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Terms of Use
            </a><br />
            <a 
              href="https://szqeakrhaxxpnfclgfep.supabase.co/storage/v1/object/public/resources/Privacy Policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Privacy Policy
            </a>
            <br />
            <a 
              href="https://szqeakrhaxxpnfclgfep.supabase.co/storage/v1/object/public/resources/Cookie-policies.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Cookies Policy
            </a>
          </div>
        </div>
        
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p><Mail size={18} className="contact-icon" /> support@softskillhub.com</p>
          <p><Globe size={18} className="contact-icon" /> www.softskillhub.com</p>
          <p><MapPin size={18} className="contact-icon" /> Sri Lanka</p>
          <p><Phone size={18} className="contact-icon" /> +94 71 XXX XXXX</p>
        </div>

        <div className="footer-icons">
          <span><Instagram size={20} /></span>
          <span><Facebook size={20} /></span>
          <span><Linkedin size={20} /></span>
          <span><Youtube size={20} /></span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SoftSkillsTutor by Deshani Bandara. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;