// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Francesca Parodi</div>
      <ul className="navbar-links">
        <li><Link to="my-portfolio-1/">Home</Link></li>
        <li><Link to="my-portfolio-1/about">About</Link></li>
        <li><Link to="my-portfolio-1/projects">Projects</Link></li>
        <li><Link to="my-portfolio-1/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}


