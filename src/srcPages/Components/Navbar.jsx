import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"; // 🔴 Fix update import logo from "../../assets/logo.png"; error
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Helper function to handle scrolling or navigating
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // If we are not on the home page, go to home page first
      window.location.href = `/${id}`;
    } else {
      // If we ARE on the home page, just scroll smoothly
      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Link the logo back to home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="SoftSkills Tutor Logo" className="navbar-logo" />
          <span className="navbar-title">SoftSkills Tutor</span>
        </Link>
      </div>

      <ul className="navbar-links">
        {/* Use standard Links for page logic or keep anchors if you stay on one page */}
        <li><a href="#home" onClick={() => handleScroll("#home")}>Home</a></li>
        <li><a href="#about" onClick={() => handleScroll("#about")}>About</a></li>
        
        <li><Link to="/guidance" className="nav-link">Guidance</Link></li>
        {/* Replace the <a> tag with <Link> */}
        <li><Link to="/download" className="nav-link">Download</Link></li>
        <li><a href="#contact" onClick={() => handleScroll("#contact")}>Contact</a></li>

        
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
