import React from 'react';
import './About.css';
import reactLogo from '../../images/react.svg';

export default () => (
  <section id="about" className="about">

    <h1> About  </h1>
    <p>A software developer who&apos;s trying to make it in the world.</p>
    <p>
      I specialize in building applications with
      <span><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a></span>
      but I am always looking for new technologies to use and incorporate in my projects.
    </p>
    <p> The tools that I am currently working with to build my applications consist of: </p>
    <ul>
      <li>
        React/Redux
        <img src={reactLogo} className="logo" alt="logo" />
      </li>
      <li>
        NodeJS
        <i className="fab fa-node"></i>
      </li>
      <li>
        Postgres/MongoDB
        <i className="fas fa-database"></i>
      </li>
    </ul>


  </section>
);
