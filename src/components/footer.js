// src/components/Footer.jsx
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/francesca-parodi-4172ab2a3/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/francescapar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:fr560599@ucf.edu">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="footer-text">© 2025 Francesca Parodi</p>
    </footer>
  );
}
