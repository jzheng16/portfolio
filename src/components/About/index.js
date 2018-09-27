import React from 'react';
import './About.css';
import reactLogo from '../../images/react.svg';
import NodeJSLogo from '../../images/Node.js_logo.svg';


export default () => (
  <section id="about" className="about">
    <div className="about-title"> About </div>
    <div className="portrait">
    </div>

    <div className="intro">
      <p>
        A software developer who&apos;s trying to make it in the world. I specialize in building applications with
        <a id="react" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
        but I am always looking for new technologies to use and incorporate in my projects.
      </p>
      <p> The tools that I am currently working with to build my applications consist of: </p>
    </div>

    <div className="about-stack">
      <ul className="ul-about">
        <li className="about-item">
          <img src={reactLogo} className="react-logo" alt="React Logo" />
          React/Redux
        </li>
        <li className="about-item">
          <img src={NodeJSLogo} className="logo" alt="Node Logo" height="70px" />
          NodeJS
        </li>
        <li className="about-item">
          <i className="fas fa-database"></i>
          Postgres/MongoDB
        </li>
      </ul>
    </div>


  </section>
);
