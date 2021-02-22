import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage';
import About from '../About/About';
import Projects from '../Projects/Project';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:8000/api/posts');
      const json = await res.json();
      console.log('json?', json);
    };
    getPosts();
  }, []);

  return (
    <div>
      <LandingPage />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
};

export default Home;
