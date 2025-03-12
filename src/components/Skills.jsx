// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          Programming: 
          <div className="skill-box">C++</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">R</div>
        </li>
        <li>
          Big Data:
          <div className="skill-box">Apache Hadoop</div>
          <div className="skill-box">Apache Spark</div>
          <div className="skill-box">Apache Hive</div>
        </li>
        <li>
          Database:
          <div className="skill-box">MongoDB</div>
          <div className="skill-box">SQL</div>
          <div className="skill-box">MySQL</div>
          <div className="skill-box">NoSQL</div>
        </li>
        <li>
          Data Analysis:
          <div className="skill-box">NumPy</div>
          <div className="skill-box">Pandas</div>
          <div className="skill-box">Matplotlib</div>
          <div className="skill-box">Seaborn</div>
        </li>
        <li>
          Cloud:
          <div className="skill-box">Azure</div>
        </li>
        <li>
          Version Control:
          <div className="skill-box">Git</div>
          <div className="skill-box">GitLab</div>
          <div className="skill-box">GitHub</div>
        </li>
        <li>
          Automation:
          <div className="skill-box">Apache Airflow</div>
          <div className="skill-box">Docker</div>
          <div className="skill-box">CI/CD</div>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
