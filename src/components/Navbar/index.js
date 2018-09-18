import React from 'react';
import './Navbar.css';
import resume from '../../images/Zheng_Joey_Resume.pdf';

export default props => (
  <nav>
    <ul className="nav-list">

      <li className="nav-item">
        <a href="#top"> Home </a>
      </li>
      <li className="nav-item"><a href="#about"> About </a></li>
      <li className="nav-item"><a href="#projects"> Projects </a></li>
      <li className="nav-item"><a href="#contact"> Contact </a></li>
      <li className="nav-item"><a href={resume} target="_blank" rel="noopener noreferrer">  Resume </a></li>
    </ul>
  </nav>
);
