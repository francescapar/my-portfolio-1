import '../styles/contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Reach out below!</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-socials">
          <h2>Connect with me</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/francesca-parodi-4172ab2a3/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/francescapar" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" />
            </a>
            <a href="https://twitter.com/francescap59170" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
