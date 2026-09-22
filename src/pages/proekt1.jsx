import React, { useEffect } from 'react';
import './Proekt4.css';

function Proekt1({ onBack }) {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const technologies = [
  { name: 'JavaScript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
];

  const highlights = [
    { title: 'GAME LOOP', desc: 'Native JS Mechanics' },
    { title: 'CANVAS', desc: '2D Graphics Rendering' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://dameeee.netlify.app/' },
    { title: 'LOGIC', desc: 'Auto-Targeting Math' },
    { title: 'CONCEPT', desc: 'Vitaminka Pitch' }
  ];

  const features = [
    {
      title: 'Automated Shooting & Targeting Logic',
      desc: 'Programmed mathematical calculations to track enemy positions and trigger automatic projectile firing.'
    },
    {
      title: 'Dynamic Enemy Spawning',
      desc: 'Implemented logic that continuously spawns new waves of opponents upon defeating existing enemies to keep gameplay continuous.'
    },
    {
      title: 'Core Game Loop & State Management',
      desc: 'Managed real-time game states (player movement, shooting speed, hit detection, and score tracking) using clean JavaScript.'
    },
    {
      title: 'Branded Concept Execution',
      desc: 'Successfully presented and pitch-developed the concept to academy mentors, fulfilling client-oriented functional requirements.'
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
        ← Назад кон почетна
      </button>

      {/* Hero Header */}
      <header className="hero-section">
        <p className="sub-header">Tech Academy Concept | Branded Project</p>
        <h1 className="main-title">DAME (VITAMINKA GAME CONCEPT)</h1>
        <p className="tagline">Browser-based 2D Action & Survival Mini-Game</p>
      </header>

      {/* Главна мрежа */}
      <div className="content-grid">
        {/* Лева страна - Текст */}
        <div className="main-card">
          <h2 className="section-title">Short Summary</h2>
          <p className="summary-text">
            An interactive browser-based 2D action game featuring automated combat logic, dynamic enemy spawning, and custom game mechanics, developed as a branded concept for Vitaminka.
          </p>

          <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
          <p className="description-text">
            This project was conceptualized and developed as a branded mini-game for Vitaminka during my tech academy studies. The gameplay centers around an action-packed survival mechanic where the player controls a hero character (represented by a spherical avatar) that automatically aims and fires at oncoming enemies.
          </p>
          <p className="description-text">
            The core challenge was implementing game loops and collision logic using native JavaScript without reliance on heavy game engines.
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

export default Proekt1;