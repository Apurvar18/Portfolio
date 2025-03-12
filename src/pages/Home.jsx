// src/pages/Home.jsx
import React from 'react';
import AboutMe from '../components/AboutMe';  // Corrected import path
import Skills from '../components/Skills';    // Corrected import path
import Projects from '../components/Projects'; // Corrected import path
import Contact from '../components/Contact';  // Corrected import path
import Experience from '../components/Experience';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <AboutMe />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
