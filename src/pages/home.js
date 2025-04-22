import '../styles/home.css';

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
          <a href="/projects">
            <button className="home-button projects-button">View Projects</button>
          </a>
          <a href="/contact">
            <button className="home-button contact-button">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}
