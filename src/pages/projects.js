import '../styles/projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';


export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
     
        <div className="project-card">
        <img src={project1} alt="Project 1" />
          <h3>AR Pokémon Training Mode</h3>
          <p> A proposal for an interactive augmented reality feature in Pokémon Go that brings training to life using voice commands, real-world obstacles, and dynamic mini-games.</p>
          <a href="https://www.figma.com/proto/I64HUmQYI0Cc2UUQyk3YHj/Pokemon-Go-AR-Prototype?node-id=1-2&p=f&t=1YucznuiUWksKvu4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
        <img src={project2} alt="Project 2" />
          <h3>Grandma's Kitchen VR</h3>
          <p>A heartwarming VR cooking simulator that teaches cultural recipes through storytelling and hands-on experiences guided by an AI grandma character.</p>
          <a href="https://www.figma.com/proto/Zk0XKvUeSZS8Rqr0Ii4aeb/Grandma-s-Cooking-VR?node-id=1-2&t=aGH3SUQOjXLlS53c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
        <img src={project3} alt="Project 3" />
          <h3>Music Learning App</h3>
          <p>A creative application that bridges the gap between music theory and instrument practice, designed to make learning music more engaging and accessible. </p>
          <a href="https://www.figma.com/proto/wl1ozi3xKP6zTSkyfzWOaY/Tune-Camp-Prototype?node-id=153-148&t=aGH3SUQOjXLlS53c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=153%3A148&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
