// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Travel Itinerary (Jan 2025 - Mar 2025)</h3>
        <p>A Next.js web app that generates personalized travel itineraries for Canada-only destinations.</p>
        <a href="https://github.com/Apurvar18/Travel-Itinerary" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project">
        <h3>EduExplorer (Sep 2024 - Nov 2024)</h3>
        <p>A Java Swing-based app that aggregates course information from multiple educational platforms.</p>
        <a href="https://github.com/Apurvar18/EduExplorer" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
