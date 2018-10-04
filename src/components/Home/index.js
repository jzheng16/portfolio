import React from 'react';
import './Home.css';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Navbar from '../Navbar/HamburgerNav';

export default () => (
  <div className="home">
    <header>
      <section id="header" className="header-content">
        <div className="header-title"> Hi my name is Joey, I&apos;m a software engineer </div>

        <a className="navigate-to-about" href="#about">
          <div className="button-link">
            View my work
            <i className="fa fa-arrow-right"></i>
          </div>
        </a>

      </section>
    </header>
    <Navbar />
    <About />
    <Projects />
    <Contact />

  </div>
);
