import React, { useEffect } from 'react';
import './Proekt4.css'; // Ја користиме истата CSS класа за зачувување на стилот

function Proekt6({ onBack }) {
  // Скрол фикс - кога се отвора проектот да биде на самиот врв
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
    { title: 'EVENT', desc: 'Hackathon Project' },
    { title: 'AUTH', desc: 'Firebase Authentication' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://votopforma.netlify.app/' },
    { title: 'DATABASE', desc: 'Firestore Realtime DB' },
    { title: 'TIMELINE', desc: '4-Hour Backend Sprint' }
  ];

  const features = [
    {
      title: 'Rapid Backend Integration',
      desc: 'Successfully implemented Firebase Authentication and Firestore Cloud Database within a strict 4-hour development sprint.'
    },
    {
      title: 'Appointment Scheduling System',
      desc: 'Built logic to display daily workout schedules and allow users to reserve specific time slots.'
    },
    {
      title: 'Authentication & User Management',
      desc: 'Configured secure user sign-in/sign-up flows using Firebase Auth to keep track of individual user bookings.'
    },
    {
      title: 'High-Pressure Execution',
      desc: 'Demonstrated agile problem-solving, rapid prototyping, and efficient teamwork under intense hackathon time constraints.'
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
          <p className="sub-header">Hackathon Project | Fitness Booking App</p>
          <h1 className="main-title">VO TOP FORMA</h1>
          <p className="tagline">Fitness Appointment Booking Platform Powered by Firebase</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A time-sensitive hackathon project built as a fitness appointment booking app, featuring user authentication and real-time database management using Firebase.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              Developed during a fast-paced hackathon, this application was engineered to streamline booking gym sessions and fitness classes. Working within a tight 4-hour deadline for the backend development, the primary focus was establishing a scalable integration with Firebase to handle user profiles, dynamic schedule rendering, and appointment reservations.
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

export default Proekt6;