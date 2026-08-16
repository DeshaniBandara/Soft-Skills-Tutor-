/*import banner from "../../assets/Mask group.png";

function Home() {
  return (
    <div>

        
        <img src={banner} alt="SoftSkillTutor Banner" className="hero-banner" style={{ width: "100%" }} />
        <h1>Welcome to SoftSkills Tutor</h1>;
    </div>
  );
}

export default Home;*/
import banner from "../../assets/Mask group.png";
import Navbar from "./Navbar";
import "./Home.css";
import './Banner.css';

function Home() {
  return (
    <div>
      <Navbar />

      {/* Welcome message before banner */}
      <section id="home"  className="welcome-section">
        <h1>Welcome to SoftSkills Tutor</h1>
        <p>
          A smart learning platform to build confidence, communication,
          creativity, and life-ready skills.
        </p>
      </section>

      {/* Banner */}
      <section className="hero-section">
        <img
          src={banner}
          alt="SoftSkillTutor Banner"
          className="hero-banner"
          
        />

        <div className="hero-text">
          <h1>Unlock Your Potential with</h1>
          <h1>Confidence, Skills,</h1>
          <h1>and Creativity</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;

