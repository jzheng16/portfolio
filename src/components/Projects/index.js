import React from 'react';
import './Project.css';
import pic1 from '../../images/bg2.jpg';

export default () => (
  <section id="projects" className="projects">
    <h1> Projects  </h1>
    <div className="gallery">
      <div className="card" id="project1">
        Project 1
        <img className="project_picture" src={pic1} alt="Project 1" />
      </div>
      <div className="card" id="project2">Project 2</div>
      <div className="card" id="project3">Project 3</div>
    </div>
  </section>

);
