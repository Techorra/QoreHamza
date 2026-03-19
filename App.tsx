import React, { useState, useEffect } from 'react';
import './App.css';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav">
      <a href="#" className="logo">Hamza<span>Raja</span></a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#offerings" onClick={() => setIsOpen(false)}>Offerings</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1>Hamza Raja</h1>
          <p className="title">Data Specialist & Developer</p>
          <p className="tagline">Crafting digital experiences through data & code</p>
          <div className="hero-btns">
            <a href="#skills" className="btn btn-primary">View Skills</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card hero-card">
            <div className="chart-bars">
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '95%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Offerings Section
const Offerings = () => {
  const services = [
    { icon: 'fa-chart-bar', title: 'Data Analytics', desc: 'Transforming raw numbers into actionable insights. From dashboards to strategy.' },
    { icon: 'fa-database', title: 'Data Engineering', desc: 'Building robust data pipelines and scalable infrastructure for your business.' },
    { icon: 'fa-paint-brush', title: 'Visual Design', desc: 'Creating impactful visuals that grab attention and elevate your brand.' },
    { icon: 'fa-code', title: 'Web Development', desc: 'Building responsive, interactive websites with modern technologies.' },
  ];

  return (
    <section id="offerings" className="offerings">
      <h2 className="section-title">What I Offer</h2>
      <p className="section-subtitle">Services tailored to bring your data vision to life</p>
      
      <div className="cards-grid">
        {services.map((service, index) => (
          <div key={index} className="glass-card">
            <div className="card-icon">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
          <p>I craft digital experiences that blend technical expertise with creative design.</p>
          <p>With expertise in data engineering, analytics, and frontend development, I help businesses make data-driven decisions through powerful visualizations and efficient solutions.</p>
          <p className="signature">Hamza Raja</p>
        </div>
        <div className="about-visual">
          <div className="glass-card circle-card">
            <div className="circles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skills = [
    { name: 'Power BI', level: 'Expert', progress: '95%' },
    { name: 'SQL', level: 'Advanced', progress: '80%' },
    { name: 'Python', level: 'Expert', progress: '90%' },
    { name: 'ETL', level: 'Advanced', progress: '75%' },
    { name: 'Data Visualization', level: 'Expert', progress: '92%' },
    { name: 'Frontend Dev', level: 'Advanced', progress: '78%' },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card skill-card">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.progress }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      
      <div className="contact-wrapper">
        <div className="glass-card contact-info">
          <h3>Let's Connect</h3>
          <p>Have a data challenge or project in mind? Feel free to reach out.</p>
          
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Connect2Hamza.Tech@Gmail.com</span>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Techorra" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/qore-hamza" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <form className="glass-card contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer>
      <p>© 2025 Hamza Raja. All rights reserved.</p>
    </footer>
  );
};

// Scroll to Top Button
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

// Main App Component
const App: React.FC = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="bg-gradient"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <Navbar />
      <Hero />
      <Offerings />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
