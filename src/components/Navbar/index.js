import React, { Component } from 'react';
import stickybits from 'stickybits';
import './Navbar.css';
import resume from '../../images/Zheng_Joey_Resume.pdf';

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({});
  }

  // TODO: Anything below 630px will render hamburger menu


  render() {
    stickybits('#some-stickybit-nav');
    return (
      <nav id="some-stickybit-nav">
        <ul className="nav-list sticky">

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
  }
}
