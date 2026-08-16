import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>

      <p>
        SoftSkillsTutor is an interactive learning platform designed to help young learners build essential soft skills for 
school, work, and life. With the power of AI, students can practice communication, teamwork, leadership, problem
solving, confidence, and creativity through structured lessons and engaging activities.

Record your responses, upload videos, complete tasks, take quizzes, and receive instant AI-generated feedback 
crafted just for you. Watch your progress improve as the system motivates you after each step.

Whether you’re learning at home or guided by a teacher, SoftSkillsTutor supports you with a personalized, hands-on 
learning experience, making growth both meaningful and enjoyable.</p>


<br></br>

<p>We are offering,</p>
      <div className="about-features">
        <div className="feature-card">
          <h4>AI-guided feedback</h4>
          <p>Personalized feedback after every activity.</p>
        </div>

        <div className="feature-card">
          <h4>Interactive practice</h4>
          <p>Real-life tasks and scenarios.</p>
        </div>

        <div className="feature-card">
          <h4>Video self-reflection</h4>
          <p>Record, watch, and improve confidently.</p>
        </div>

        <div className="feature-card">
          <h4>Safe, supportive learning environment</h4>
          <p>A safe and friendly virtual space to help you grow and improve.</p>
        </div>
      </div>
    <div class="feature-desc">
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          To make soft skills education engaging, accessible, and effective
          through AI-powered learning.
        </p>
      </div>

      <div className="vision">
        <h3>Our Vision</h3>
        <p>
          To create a global learning space where every child can discover their 
          trengths, express themselves freely, and develop the soft skills required to 
          succeed in life.
        </p>
      </div>

      <div className="values">
        <h3>Our Values</h3>
        <ul>
            <li><p >Growth – Everyone can improve with the right tools.</p></li> 
            <li><p>Confidence – We believe in building courage through practice.</p></li>
            <li><p>Creativity – Learning should be engaging, fun, and inspiring.</p></li>
            <li><p>Safety – Students learn in a protected, comfortable environment.</p></li>
            <li><p>Support – Teachers and technology work together for the best results.</p></li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default About;
