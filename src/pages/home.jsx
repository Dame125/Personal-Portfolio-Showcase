import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import moeLogo from "../Pictures/heroslika.png";
import instaLogo from "../Pictures/slika123.png";
import pozzadina from "../Pictures/pozadina1.png";
import mojaslika from "../Pictures/mojaslika2.png";

import veloquest from "../projectsPictures/veloquest.png";
import oemuc from "../projectsPictures/logo2.png";
import Tamaro from "../projectsPictures/tamaro.png";
import Balon from "../projectsPictures/balon.png";
import Vita from "../projectsPictures/Vitaminka.png"; 
import Topforma from "../projectsPictures/votopforma.png";
import zavrsen from "../projectsPictures/zavrsen proekt.png";



function Home() {
  // 1. Држави (States) за контакт форма и мени
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State за мобилно мени

  // Ref за скролање на проектите ( carousel )
  const scrollRef = useRef(null);

  // 2. Функција за скролање до соодветната секција
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 3. Ракување со мени кликови (со автоматско затворање на мобилното мени)
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Затворање на мобилното мени по клик
  };

  // 4. Форма логика
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Пораката од ${formData.name} е спремна за праќање!`);
    setFormData({ name: "", email: "", message: "" });
  };

  // 5. Ефект за менување позадина на Navbar при скролање
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // 6. Функција за скролање картички лево/десно
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      {/* NAVIGATION */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img
            src={moeLogo}
            alt="DevPortfolio Лого"
            className="navbar-logo-img"
          />
        </div>

        {/* Хамбургер копче (се појавува само на мобилен преку CSS) */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Мобилно и десктоп мени */}
        <div className={`nav-links-center ${isMenuOpen ? "active" : ""}`}>
          <button
            onClick={() => handleNavClick("home")}
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            ABOUT ME
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          >
            SKILLS
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          >
            CONTACTS
          </button>

          {/* Инстаграм икона за мобилен */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="insta-link mobile-only"
          >
            <img src={instaLogo} alt="Instagram" className="insta-icon-img" />
          </a>
        </div>

        {/* Инстаграм икона за десктоп */}
        <div className="nav-links-right desktop-only">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="insta-link"
          >
            <img src={instaLogo} alt="Instagram" className="insta-icon-img" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${pozzadina})` }}
      >
        <h1 className="main-title">Frontend Developer</h1>
        <p className="subtitle">
          <code>&lt; AspiringFullStack /&gt;</code>
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="cta-button"
        >
          Explore My Projects
        </button>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-card">
            <div className="about-content">
              <h2>About Me</h2>
              <div className="title-line"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Frontend Developer specialized in building modern,
                interactive web applications using React. I also work with
                Firebase to integrate real-time databases and user
                authentication, and I am constantly expanding my technical
                skills to grow into a Full-stack developer.
              </p>
            </div>

            <div className="about-image-container">
              <img src={mojaslika} alt="Профилна слика" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title text-4xl font-bold text-center">
          My Skills
        </h2>

        <div className="skills-container">
          {/* 1. Јазици */}
          <div className="skill-card">
            <h3>Languages</h3>
            <ul>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JS"
                />
                <span>JavaScript</span>
              </li>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                />
                <span>Python</span>
              </li>
            </ul>
          </div>

          {/* 2. Фрејмворци */}
          <div className="skill-card">
            <h3>Frameworks</h3>
            <ul>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <span>React.js</span>
              </li>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                />
                <span>Tailwind CSS</span>
              </li>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                />
                <span>Bootstrap</span>
              </li>
            </ul>
          </div>

          {/* 3. Друго */}
          <div className="skill-card">
            <h3>Technologies</h3>
            <ul>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                />
                <span>HTML</span>
              </li>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <span>CSS</span>
              </li>
            </ul>
          </div>

          {/* 4. Алатки */}
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </li>
              <li className="skill-item">
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="Firebase"
                />
                <span>Firebase</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>

        <div className="carousel-wrapper">
          {/* Копче Лево */}
          <button
            className="nav-btn left-btn"
            onClick={() => handleScroll("left")}
          >
            ◀
          </button>

          {/* Редот што ги содржи сите картички */}
          <div className="projects-carousel" ref={scrollRef}>
            {/* КАРТИЧКА 1 */}
            <div className="project-card">
              <img
                src={Vita}
                alt="Портфолио Вебсајт"
                className="project-img"
              />
              <div className="project-info">
                <h3>Vitaminka Game Concept</h3>
                <p>
                  An interactive browser-based 2D action game featuring
                  automated combat logic, dynamic enemy spawning, and custom
                  game mechanics, developed as a branded concept for Vitaminka.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt1" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 2 */}
            <div className="project-card">
              <img
                src={veloquest}
                alt="Python Скрипта"
                className="project-logo-img"
              />
              <div className="project-info">
                <h3>VeloQuest</h3>
                <p>
                  A personal fitness and route-tracking web application built to
                  monitor cycling metrics, track distance and calorie burn, and
                  interactively map out cycling routes.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt2" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 3 */}
            <div className="project-card">
              <img
                src={oemuc}
                alt="Мобилна апликација"
                className="project-logo-img"
              />
              <div className="project-info">
                <h3>ОЕМУЦ "Св.Наум Охридски" - Охрид</h3>
                <p>
                  An award-winning collaborative web application created for a
                  national competition, ranking among the top 6 best projects in
                  North Macedonia.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt3" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 4 */}
            <div className="project-card">
              <img
                src={Balon}
                alt="E-commerce Сајт"
                className="project-img"
              />
              <div className="project-info">
                <h3>Firebase Balloon Shooter App</h3>
                <p>
                  An interactive browser-based balloon-popping game integrated
                  with Google Authentication and real-time database capabilities
                  to persist user high scores.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt4" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 5 */}
            <div className="project-card">
              <img
                src={moeLogo}
                alt="Weather App"
                className="project-logo-img"
              />
              <div className="project-info">
                <h3>Personal Portfolio Showcase</h3>
                <p>
                  A sleek, minimalist developer portfolio designed to showcase a
                  curated collection of frontend and full-stack projects,
                  focusing on responsive design, modern UI elements, and clean
                  presentation.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt5" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 6 */}
            <div className="project-card">
              <img
                src={Topforma}
                alt="Task Manager"
                className="project-img"
              />
              <div className="project-info">
                <h3>Vo Top Forma</h3>
                <p>
                  A time-sensitive hackathon project built as a fitness
                  appointment booking app, featuring user authentication and
                  real-time database management using Firebase.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt6" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 7 */}
            <div className="project-card">
              <img
                src={zavrsen}
                alt="Weather App"
                className="project-img"
              />
              <div className="project-info">
                <h3>Final Academy Project</h3>
                <p>
                  A full-stack modern React application powered by Firebase,
                  featuring user authentication and comprehensive CRUD
                  operations for interconnected data entities.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt7" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href="https://github.com/TVOJOT_USERNAME/TVOJOT_REPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* КАРТИЧКА 8 */}
            <div className="project-card">
              <img
                src={Tamaro}
                alt="Weather App"
                className="project-img"
              />
              <div className="project-info">
                <h3>Tamaro</h3>
                <p>
                  A foundational web development project created to master core
                  frontend principles, semantic HTML structuring, and responsive
                  CSS layout techniques.
                </p>

                <div className="project-buttons">
                  <Link to="/proekt8" className="live-btn">
                    View Details
                  </Link>

                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Копче Десно */}
          <button
            className="nav-btn right-btn"
            onClick={() => handleScroll("right")}
          >
            ▶
          </button>
        </div>

        {/* Точки за индикација */}
        <div className="dots-container">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <button
              key={index}
              type="button"
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                if (scrollRef.current) {
                  const cardWidth = 320;
                  scrollRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="copyright">
          © {new Date().getFullYear()} - Изработено во React
        </p>
      </footer>
    </div>
  );
}

export default Home;
