import React, { useEffect } from 'react';
import './Proekt4.css';

function Proekt4({onBack}) {

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
    { title: 'AUTH', desc: 'Google Sign-In OAuth' },
    { title: 'DATABASE', desc: 'Firebase Firestore' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://firebasees.netlify.app/' }, // Стави го вистинскиот Netlify линк тука
    { title: 'GAMEPLAY', desc: 'Interactive Target Pop' },
    { title: 'SERVERLESS', desc: 'Realtime Data Persistence' }
  ];

  const features = [
    {
      title: 'Google Authentication',
      desc: 'Integrated seamless OAuth sign-in flow using Firebase Auth, enabling users to authenticate quickly with their Google credentials.'
    },
    {
      title: 'Persistent Data Storage',
      desc: 'Configured Firebase Firestore to handle real-time data saving, allowing users to preserve their high scores with a simple button click.'
    },
    {
      title: 'Dynamic Canvas / DOM Gameplay',
      desc: 'Programmed a custom interactive game mechanism where players pop moving targets to earn points in real time.'
    },
    {
      title: 'Backend Integration Skills',
      desc: 'Successfully merged custom client-side JavaScript logic with serverless cloud APIs for score tracking.'
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
          <p className="sub-header">Academy Milestone Project | Full-Stack Integration</p>
          <h1 className="main-title">BALLOON POP GAME</h1>
          <p className="tagline">Interactive Mini-Game with Firebase Cloud Integration</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              An interactive browser-based balloon-popping game integrated with Google Authentication and real-time database capabilities to persist user high scores.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              Developed as an academy milestone assignment, this application was designed to reinforce practical skills with Firebase backend services. The project combines dynamic frontend game interactions with cloud-based features.
            </p>
            <p className="description-text">
              Users can log in effortlessly using their Google accounts and save their current game progress and scores to a persistent cloud database at any point during gameplay.
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

export default Proekt4;