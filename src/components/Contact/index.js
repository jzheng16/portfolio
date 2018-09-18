import React from 'react';
import './Contact.css';

export default () => (
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
);
