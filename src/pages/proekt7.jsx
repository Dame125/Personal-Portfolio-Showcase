import React, { useEffect } from 'react';
import './Proekt4.css'; // Ја користиме истата CSS класа за зачувување на стилот

function Proekt7({ onBack }) {
  // Скрол фикс - кога се отвора проектот да биде на самиот врв
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: 'React.js', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: 'Firebase', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ];

  const highlights = [
    { title: 'MILESTONE', desc: 'Final Academy Project' },
    { title: 'AUTH', desc: 'Firebase OAuth Sign-In' },
    { title: 'DEMO', desc: 'Live App Preview', featured: true, link: 'https://zavrsenproekt.netlify.app/' }, // Стави го твојот линк тука
    { title: 'DATABASE', desc: 'Firestore Cloud CRUD' },
    { title: 'STACK', desc: 'React.js & Firebase' }
  ];

  const features = [
    {
      title: 'React Component Architecture',
      desc: 'Built with modular, reusable React components, leveraging functional hooks for state and lifecycle management.'
    },
    {
      title: 'Full CRUD Functionality',
      desc: 'Developed end-to-end user workflows enabling real-time document creation, editing, updating, and deletion with persistent cloud syncing.'
    },
    {
      title: 'Relational Data Management',
      desc: 'Structured interconnected Firestore collections to maintain data integrity and smooth updates across dependent views.'
    },
    {
      title: 'Google Authentication Integration',
      desc: 'Implemented secure OAuth sign-in with Firebase Auth for personalized user accounts and dynamic authorization rules.'
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
          <p className="sub-header">Capstone Academy Project | Full-Stack React & Firebase</p>
          <h1 className="main-title">FINAL ACADEMY PROJECT</h1>
          <p className="tagline">Modern React Application Powered by Firebase Cloud Architecture</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A full-stack modern React application powered by Firebase, featuring user authentication and comprehensive CRUD operations for interconnected data entities.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              Created as the capstone final project for my web development academy, this application serves as a comprehensive showcase of modern frontend development using React.js and cloud architecture with Firebase. The platform enables authenticated users to manage dynamic datasets with seamless create, read, update, and delete (CRUD) capabilities, ensuring full data consistency across all user interactions.
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

export default Proekt7;