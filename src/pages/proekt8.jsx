import React, { useEffect } from 'react';
import './Proekt4.css'; // Ја користиме истата CSS класа за зачувување на стилот

function Proekt8({ onBack }) {
  // Скрол фикс - кога се отвора проектот да биде на самиот врв
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: 'HTML5', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: 'CSS3', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ];

  const highlights = [
    { title: 'STARTING POINT', desc: 'First Web Project' },
    { title: 'STRUCTURE', desc: 'Semantic HTML5 Markup' },
    { title: 'DEMO', desc: 'Live Netlify Preview', featured: true, link: 'https://tamaro.netlify.app/' },
    { title: 'STYLING', desc: 'Custom CSS3 Layouts' },
    { title: 'FUNDAMENTALS', desc: 'Pure Frontend Logic' }
  ];

  const features = [
    {
      title: 'Semantic Structure',
      desc: 'Built using clean, readable, and semantic HTML5 elements for optimal content organization.'
    },
    {
      title: 'Custom Styling',
      desc: 'Designed completely from scratch using CSS3 to control typography, colors, spacing, and visual presentation.'
    },
    {
      title: 'Layout Techniques',
      desc: 'Practical application of layout positioning concepts to build a coherent and structured visual interface.'
    },
    {
      title: 'Fundamentals First',
      desc: 'Focus on core web technologies before transitioning into JavaScript and modern frontend frameworks.'
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
          <p className="sub-header">First Portfolio Project | Web Development Foundations</p>
          <h1 className="main-title">TAMARO</h1>
          <p className="tagline">Foundational Web Project Built with HTML5 & CSS3</p>
        </header>

        {/* Главна мрежа */}
        <div className="content-grid">
          {/* Лева страна - Текст */}
          <div className="main-card">
            <h2 className="section-title">Short Summary</h2>
            <p className="summary-text">
              A foundational web development project created to master core frontend principles, semantic HTML structuring, and responsive CSS layout techniques.
            </p>

            <h2 className="section-title" style={{ marginTop: '30px' }}>Project Overview</h2>
            <p className="description-text">
              Tamaro represents the starting point of my journey into web development. The primary goal of this project was to establish a solid grasp of web design fundamentals without relying on external frameworks or libraries. It served as a hands-on playground to practice structured markup, page hierarchy, and custom styling rules.
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