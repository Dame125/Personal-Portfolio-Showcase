import React, { useEffect } from 'react';
import './Proekt4.css'; // Со истиот CSS фајл што го користиш за сите проекти

function Proekt2({ onBack }) {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    
  const technologies = [
    { name: 'JavaScript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: 'Firebase', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ];

  const highlights = [
    { title: 'MAPPING', desc: 'Interactive Route API' },
    { title: 'DATABASE', desc: 'Firebase Realtime Storage' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://veloquest.netlify.app/' },
    { title: 'FITNESS', desc: 'Distance & Calorie Math' },
    { title: 'VANILLA JS', desc: 'Core DOM & State Logic' }
  ];

  const features = [
    {
      title: 'Interactive Route Mapping',
      desc: 'Integrated dynamic map functionality to allow users to pin locations, trace paths, and calculate total route distances directly in the browser.'
    },
    {
      title: 'Activity & Health Tracking',
      desc: 'Built input and calculation utilities for users to log completed rides, tracking key fitness metrics like distance traveled and estimated calories burned.'
    },
    {
      title: 'Independent Problem Solving',
      desc: 'Single-handedly managed the entire project lifecycle—from feature design and UI styling to logic implementation—without template guides or coursework assistance.'
    },
    {
      title: 'Vanilla JavaScript Logic & Firebase Integration',
      desc: 'Leveraged core JavaScript concepts for state management, DOM manipulation, and dynamic data rendering, paired with Firebase for persistent user data.'
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
          <p className="sub-header">Independent Personal Project | Fitness Dashboard</p>
          <h1 className="main-title">VELOQUEST</h1>
          <p className="tagline">Personal Cycling Route Tracker & Fitness Analytics App</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A personal fitness and route-tracking web application built to monitor cycling metrics, track distance and calorie burn, and interactively map out cycling routes.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              Driven by a personal passion for cycling, VeloQuest was independently conceptualized and built from scratch outside of academy coursework. The goal was to create a functional web app that serves as a personal dashboard for cyclists, allowing users to track performance data and visualize custom routes using interactive map integrations directly in the browser.
            </p>
            <p className="description-text">
              The project utilizes pure JavaScript logic for state management and UI interactions, combined with Firebase to securely log user performance data across sessions.
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
              item.link ? (
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
                <div key={index} className="highlight-box">
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

export default Proekt2;