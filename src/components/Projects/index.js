import React, { Component } from 'react';
import Modal from 'react-modal';

import './Project.css';
import pic1 from '../../images/bg2.jpg';
import pic2 from '../../images/Reacto.png';
import pic3 from '../../images/MFP1.png';
import Carousel from './Carousel';

Modal.setAppElement('#root');

const ProjectInfo = [
  {
    title: 'QuizNOS',
    tag: 'Quiz App',
    details: 'A quiz app that allows users to test their knowledge in web design with quizzes on HTML, CSS, JavaScript, and more!',
    github: 'https://github.com/jzheng16/quiz',
  },
  {
    title: 'REACTO Platform',
    tag: 'Whiteboard Interview GUI',
    details: `A platform designed for Fullstack Academy's in house whiteboarding process. Instructors can assign interviewer / interviewee pairs, 
    add new whiteboarding problems, and track attendance. Students can view past whiteboarding questions with answers and videos.`,
    github: 'https://github.com/jmpressman/REACTO-platform',
  },
  {
    title: 'MyFitnessClone',
    tag: 'Diet Tracking App',
    details: 'A new take on the famous MyFitnessPal tracking app that lets users to keep track of their diets and achieve their fitness goals.',
    github: 'https://github.com/jzheng16/MFP-clone',
  },


];


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, currentProject: 0 };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(currentProject) {
    this.setState({ showModal: true, currentProject });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  renderModal() {
    const { showModal, currentProject } = this.state;
    if (!showModal) {
      return null;
    }

    return (
      <div>
        <div
          className="carousel-container"
        >
          <Carousel project={ProjectInfo[currentProject]} />
        </div>
        <button id="close-modal" type="button" onClick={this.closeModal}>
          <i className="close-modal-button fas fa-times"></i>
        </button>
      </div>
    );
  }

  render() {
    const { showModal } = this.state;
    return (
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
            <button className="github" type="button" onClick={() => this.showModal(0)}> Learn More</button>

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
            <button className="github" type="button" onClick={() => this.showModal(1)}> Learn More</button>

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
            <button className="github" type="button" onClick={() => this.showModal(2)}> Learn More</button>
            <img className="project_picture" id="project3" src={pic3} alt="Project 3" />
          </div>
        </div>
        <Modal
          isOpen={showModal}
          contentLabel="Project Details"
          shouldCloseOnEsc
          closeTimeoutMS={150}
          className="project-modal"
          overlayClassName="project-overlay"
          shouldReturnFocusAfterClose={false}
          onRequestClose={this.closeModal}
        >
          {this.renderModal()}
        </Modal>
      </section>
    );
  }
}

export default Projects;
