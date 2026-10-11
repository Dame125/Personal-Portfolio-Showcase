import React, { useEffect } from 'react';
import './Proekt4.css'; // Ја користиме истата CSS класа за зачувување на стилот

function Proekt8({ onBack }) {
  // Скрол фикс - кога се отвора проектот да биде на самиот врв
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: 'JavaScript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: 'Firebase', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ];

  const highlights = [
    { title: 'CIVIC PLATFORM', desc: 'Municipal Issue Reporting' },
    { title: 'BACKEND', desc: 'Firebase Authentication & DB' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://vodopadi.netlify.app/' },
    { title: 'DATA HANDLING', desc: 'Dynamic Form Submissions' },
    { title: 'FULL STACK LOGIC', desc: 'Async JS & CRUD Operations' }
  ];

  const features = [
    {
      title: 'Firebase Backend Integration',
      desc: 'Implemented secure user authentication and connected Firebase services for real-time data storage and fetching of reported issues.'
    },
    {
      title: 'Dynamic Form & Data Handling',
      desc: 'Built interactive JavaScript forms to capture user inputs and dynamically render updated report statuses directly in the browser.'
    },
    {
      title: 'Responsive UI/UX',
      desc: 'Styled a clean, user-friendly interface using HTML and CSS, ensuring full responsiveness across mobile and desktop devices.'
    },
    {
      title: 'Full-Stack Logic & Problem Solving',
      desc: 'Mastered core asynchronous JavaScript concepts, state management, and basic database CRUD operations through real-world implementation.'
    }
  ];

  return (
    <div className="proekt4-container">
      <div className="proekt4-wrapper">
        {/* Копче за враќање */}
        <button 
          className="back-btn" 
          onClick={onBack || (() => window.history.back())}
        >
          ← Back to Home
        </button>

        {/* Hero Header */}
        <header className="hero-section">
          <p className="sub-header">Full-Stack Civic Web Application</p>
          <h1 className="main-title">VODOPADI</h1>
          <p className="tagline">Municipal Issue Reporter Built with JS & Firebase</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A community-driven web application designed for citizens to report local infrastructure issues and municipal damages after logging in, enabling quick tracking and response from local authorities.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              This project was built to digitize public services and streamline civic engagement. The core goal was to create an intuitive platform where authenticated users can easily report urban issues (such as road damage or public utility problems), giving municipal services an organized dashboard to log and address issues efficiently.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Key Features & What I Learned</h2>
            <ul className="features-list">
              {features.map((item, index) => (
                <li key={index} className="feature-item">
                  <strong className="yellow-text">{item.title}: </strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Десна страна - Highlights */}
          <div className="highlights-container">
            {highlights.map((item, index) => 
              item.link && item.link !== '#' ? (
                <a 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="highlight-box featured"
                >
                  <strong className="highlight-title">{item.title} ↗</strong>
                  <span className="highlight-desc">{item.desc}</span>
                </a>
              ) : (
                <div key={index} className={`highlight-box ${item.featured ? 'featured' : ''}`}>
                  <strong className="highlight-title">{item.title}</strong>
                  <span className="highlight-desc">{item.desc}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Долна секција за Технологии */}
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proekt8;