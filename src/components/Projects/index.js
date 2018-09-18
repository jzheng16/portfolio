import React from 'react';
import './Project.css';
import pic1 from '../../images/bg2.jpg';
import pic2 from '../../images/Reacto.png';
import pic3 from '../../images/MFP.png';

export default () => (
  <section id="projects" className="projects">
    <h1> Projects  </h1>
    <div className="gallery">
      <div className="card1">
        <div className="title"> Nothing Yet </div>
        <img className="project_picture" id="project1" src={pic1} alt="Project 1" />
      </div>
      <div className="card2">
        <div className="title"> REACTO deFacto </div>
        <img className="project_picture" id="project2" src={pic2} alt="Project 2" />
      </div>
      <div className="card3">
        <div className="title"> MyFitnessPal Clone </div>
        <img className="project_picture" id="project3" src={pic3} alt="Project 3" />
      </div>
    </div>
  </section>

);
