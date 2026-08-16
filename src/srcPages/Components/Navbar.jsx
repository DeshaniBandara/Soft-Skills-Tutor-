import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/${id}`;
    } else {
      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="SoftSkills Tutor Logo" className="navbar-logo" />
          <span className="navbar-title">SoftSkills Tutor</span>
        </Link>
      </div>

      <ul className="navbar-links">
        {/* ✅ Changed <a> to <button> for internal navigation */}
        <li>
          <button 
            type="button" 
            className="nav-link-btn" 
            onClick={() => handleScroll("#home")}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            type="button" 
            className="nav-link-btn" 
            onClick={() => handleScroll("#about")}
          >
            About
          </button>
        </li>
        
        <li><Link to="/guidance" className="nav-link">Guidance</Link></li>
        <li><Link to="/download" className="nav-link">Download</Link></li>
        
        <li>
          <button 
            type="button" 
            className="nav-link-btn" 
            onClick={() => handleScroll("#contact")}
          >
            Contact
          </button>
        </li>

        <li>
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;