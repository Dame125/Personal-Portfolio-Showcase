import React, { useEffect } from 'react';
import './Proekt4.css';

function Proekt5({ onBack }) {
  // Скрол фикс - кога се отвора проектот да биде на самиот врв
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const technologies = [
    { name: 'React.js', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ];

  const highlights = [
    { title: 'FRAMEWORK', desc: 'React.js Application' },
    { title: 'ARCHITECTURE', desc: 'Modular Components & State' },
    { title: 'DEMO', desc: 'Live Portfolio Preview', featured: true, link: '#' }, // Стави го твојот линк тука
    { title: 'NAVIGATION', desc: 'Automated Scroll Reset' },
    { title: 'GITHUB', desc: 'Source Code Repository', link: '#' } // Стави го GitHub линкот тука
  ];

  const features = [
    {
      title: 'React State & Conditional Rendering',
      desc: 'Architected a dynamic flow that toggles between individual project views using React hooks.'
    },
    {
      title: 'Scroll Restoration',
      desc: 'Resolved viewport state issues by implementing automated scroll reset (window.scrollTo) on component view changes.'
    },
    {
      title: 'Modular Component Structure',
      desc: 'Organized each project into cleanly separated React components.'
    },
    {
      title: 'Comprehensive Showcase Design',
      desc: 'Optimized layout for fast evaluation, featuring direct GitHub repository links, live demos, and project details.'
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
          <p className="sub-header">Personal Project | React Showcase</p>
          <h1 className="main-title">PERSONAL REACT PORTFOLIO</h1>
          <p className="tagline">Central Interactive Showcase Built Entirely in React.js</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A central React.js showcase application built to dynamically manage and display 8 distinct projects through React components and state handling.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              This application serves as my primary digital portfolio for academic, personal, and professional evaluation, engineered entirely in React.js. It uses conditional rendering and state management to transition seamlessly between projects without page reloads.
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

export default Proekt5;