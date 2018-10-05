import React, { Component } from 'react';
import './Navbar.css';
import Menu from 'react-burger-menu/lib/menus/slide';
import resume from '../../images/Zheng_Joey_Resume.pdf';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: { background: '#373a47' },

  bmCross: { background: '#bdc3c7' },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em',
    fontSize: '1.15em'
  },

  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em 1em 0 0'
  },

  bmOverlay: { background: 'rgba(0, 0, 0, 0.3)' }
};

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, menuOpen: false };
    this.updateWidth = this.updateWidth.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }


  closeMenu() {
    this.setState({ menuOpen: false });
  }


  render() {
    const { width, menuOpen } = this.state;
    console.log('what is width?', width);
    console.log('Open? ', menuOpen);

    return (
      <div className="container-nav">
        {width < 630
          ? (
            <nav id="nav">
              <Menu
                noOverlay
                // customCrossIcon={<img src={closeMenu} alt="Close Menu" />}
                isOpen={menuOpen}
                styles={styles}

              >
                <a onClick={this.closeMenu} href="#top"> Home </a>
                <a onClick={this.closeMenu} href="#about"> About </a>
                <a onClick={this.closeMenu} href="#projects"> Projects </a>
                <a onClick={this.closeMenu} href="#contact"> Contact </a>
                <a onClick={this.closeMenu} href={resume} target="_blank" rel="noopener noreferrer">  Resume </a>

              </Menu>
            </nav>
          )
          : (
            <nav id="nav">
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
          )
        }
      </div>

    );
  }
}
