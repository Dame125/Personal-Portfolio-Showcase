import React, { useEffect } from 'react';
import './Proekt4.css';

function Proekt3({ onBack }) {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    
  const technologies = [
    { name: 'JavaScript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ];

  const highlights = [
    { title: 'AWARDS', desc: 'Top 6 National Finalist' },
    { title: 'COMPETITION', desc: 'National Web Contest' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://oemucc.netlify.app/' },
    { title: 'TEAMWORK', desc: 'Collaborative Build' },
    { title: 'FRONTEND', desc: 'Semantic HTML & CSS' }
  ];

  const features = [
    {
      title: 'Award-Winning Performance',
      desc: 'Designed and optimized under competition criteria, earning recognition among the top 6 national web projects in North Macedonia.'
    },
    {
      title: 'Collaborative Development',
      desc: 'Co-developed in a team environment, practicing code integration, structured UI planning, and effective communication.'
    },
    {
      title: 'Modern Frontend Architecture',
      desc: 'Developed with clean semantic HTML5, custom CSS styling, and interactive JavaScript functionality for seamless user navigation.'
    },
    {
      title: 'Full-Stack Foundations',
      desc: 'Gained practical experience structuring dynamic frontend workflows and planning responsive UI layouts for competitive presentation.'
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
          <p className="sub-header">National Competition Project | Award-Winning Web App</p>
          <h1 className="main-title">OEUMC OHRID</h1>
          <p className="tagline">Top 6 National Web Competition Finalist</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              An award-winning collaborative web application created for a national competition, ranking among the top 6 best projects in North Macedonia.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              This project was developed as a competitive entry for a national web development contest, where it achieved 6th place nationwide out of the top 10 finalists. Built collaboratively in a two-person team, the application focused on delivering a polished user interface and clean functional layout.
            </p>
            <p className="description-text">
              The live hosted demo focuses on the frontend execution, showcasing clean layout structure, responsive components, and fluid user interactions using core web standards.
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

export default Proekt3;