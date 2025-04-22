// src/pages/About.jsx
import '../styles/about.css';
import profilePic from '../assets/pfp.png'; // Replace with your actual image name

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Francesca Parodi" className="about-image" />

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Francesca Parodi, a student at the University of Central Florida majoring in Web and Social Platforms. I’m passionate about combining creativity with functionality through website design, and I’m especially interested in the world of UX/UI.
          </p>
          <p>
            I enjoy bringing designs to life through clean, responsive code and am constantly working to improve my skills in front-end development and user experience. My goal is to create intuitive, beautiful interfaces that make people’s lives easier.
          </p>

          <div className="about-subsection">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js & Git/GitHub</li>
              <li>Responsive Design</li>
              <li>UX/UI Fundamentals</li>
            </ul>
          </div>

          <div className="about-subsection">
            <h3>Interests</h3>
            <ul>
              <li>Website Design & Branding</li>
              <li>User Experience Research</li>
              <li>Creative Projects & Visual Design</li>
              <li>Learning new web technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
