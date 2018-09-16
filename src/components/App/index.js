import React, { Component } from 'react';
import './App.css';
import Home from '../Home';
import Navbar from '../Navbar';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
