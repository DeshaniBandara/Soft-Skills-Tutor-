import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Helper function to handle scrolling or navigating
  const handleScroll = (e, id) => {
    e.preventDefault(); // ✅ Added this to prevent page reload (keeps the old look & feel)

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
        {/* ✅ Reverted back to <a> tags to keep original font and styling */}
        <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a></li>
        
        <li><Link to="/guidance" className="nav-link">Guidance</Link></li>
        <li><Link to="/download" className="nav-link">Download</Link></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a></li>

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