import React from 'react';
import './Home.css';

export default props => (
  <div className="home">

    <header>
      <section id="header" className="header-content">
        <h1 className="header-title"> Hi My name is Joey</h1>
      </section>
    </header>

    <section id="about" className="about">
      <div> About </div>
      <p>A software developer who's trying to make it in the world.</p>
    </section>

    <section id="projects" className="projects">
      <div> Projects </div>
      <div className="gallery">
        <div className="card">Project 1</div>
        <div className="card">Project 2</div>
        <div className="card">Project 3</div>
      </div>
    </section>

    <section id="contact" className="contact">
      <h1>Contact</h1>
      <ul>
        <li>
          <a href="https://www.github.com/jzheng16" target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-2x">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>

            </span>
          </a>
        </li>
        <li>
          <span className="fa-stack fa-2x">
            <a href="https://www.linkedin.com/in/joey-zheng16/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
            </a>
          </span>
        </li>
        <li>
          <span className="fa-stack fa-2x">
            <a href="https://www.linkedin.com/in/joey-zheng16/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
            </a>
          </span>
        </li>
      </ul>
    </section>

  </div>
);
