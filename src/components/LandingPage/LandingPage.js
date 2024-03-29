import React from 'react';
import './LandingPage.css';


export default () => (
  <section id="home" className="section">
    <div className="main-content home-main-content">
      <div className="portrait"></div>
      <h2>Hi, I&apos;m Joey</h2>
      <h3>I am a software engineer currently working at RIA In a Box</h3>
      <div className="about-description">
        <p>
          <span>I also maintain </span>
          <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">G&G Webstore</a>
          <span> and freelance tutor in my spare time.</span>
        </p>
      </div>
    </div>
    {/* <a className="navigate-to-about" href="#about">
          <div className="button-link">
            View my work
            <i className="fa fa-arrow-right"></i>
          </div>
        </a> */}

  </section>
);
