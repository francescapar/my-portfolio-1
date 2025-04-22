import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="home-highlight">Francesca Parodi</span>
        </h1>
        <p className="home-description">
          I'm a Digital Media student at UCF focused on Web & Interactive Media. I love designing clean, user-friendly websites and exploring UX/UI design to create meaningful digital experiences.
        </p>
        <div className="home-buttons">
            <Link to="/projects">
                <button className="home-button projects-button">View Projects</button>
            </Link>
            <Link to="/contact">
                <button className="home-button contact-button">Contact Me</button>
            </Link>
        </div>
      </div>
    </section>
  );
}
