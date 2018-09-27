import React from 'react';
import './Project.css';
import pic1 from '../../images/bg2.jpg';
import pic2 from '../../images/Reacto.png';
import pic3 from '../../images/MFP1.png';

export default () => (
  <section id="projects" className="projects">
    <h1
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      Projects
    </h1>
    <div className="gallery">
      <div
        className="card"
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="title">
          No Project Yet
          <span> Built using React/Redux </span>
        </div>
        <a className="github" href="https://github.com/jzheng16/" target="_blank" rel="noopener noreferrer"> View Github </a>
        <img className="project_picture" id="project1" src={pic1} alt="Project 1" />
      </div>
      <div
        className="card"
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="title">
          REACTO deFacto
          <span> Built using React/Redux </span>
        </div>
        <a className="github" href="https://github.com/jmpressman/REACTO-platform" target="_blank" rel="noopener noreferrer"> View Github </a>
        <img className="project_picture" id="project2" src={pic2} alt="Project 2" />
      </div>
      <div
        className="card"
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="title">
          MyFitnessPal Clone
          <span> Built using React/Redux </span>
        </div>
        <a className="github" href="https://github.com/jzheng16/MFP-clone" target="_blank" rel="noopener noreferrer"> View Github </a>
        <img className="project_picture" id="project3" src={pic3} alt="Project 3" />
      </div>
    </div>
  </section>

);
