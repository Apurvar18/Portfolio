// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="job">
        <h3>Software Engineer - Steepgraph Private Limited</h3>
        <p>Pune, India (Sep 2022 – Jul 2024)</p>
        <ul>
          <li>
            Developed CATIA/DELMIA 3D Experience wizards using CAA, EKL, and C/C++, optimizing
            workflows and aligning client requirements with agile decision-making strategies.
          </li>
          <li>
            Collaborated with cross-functional teams to analyze requirements and craft tailored solutions,
            improving client satisfaction through effective problem-solving.
          </li>
          <li>
            Engineered automated validation solutions for CATIA geometry and design models, ensuring
            accuracy and adherence to client specifications.
          </li>
          <li>
            Demonstrated strong verbal and written communication skills by presenting data-driven
            insights to stakeholders, ensuring clarity and understanding.
          </li>
          <li>
            Applied creative thinking to identify innovative solutions for data extraction and reporting
            challenges, enhancing team efficiency and delivering high-quality results.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Data Processing Specialist - Nielsen IQ</h3>
        <p>Vadodara, India (Aug 2021 – Aug 2022)</p>
        <ul>
          <li>
            Developed automated tools using Python (NumPy, Pandas, OpenCV) to enhance data
            processing efficiency.
          </li>
          <li>
            Executed comprehensive database checks and data quality validations for high-profile clients,
            improving accuracy by 25%.
          </li>
          <li>
            Designed interactive dashboards using Power BI and Tableau to visualize database insights,
            improving decision-making and reporting.
          </li>
          <li>
            Implemented rigorous testing frameworks using Selenium and PyTest, ensuring reliability and
            compliance with data quality standards.
          </li>
          <li>
            Utilized Microsoft Excel for advanced data analysis, including pivot tables, v-look-up, and
            other Excel functions for effective reporting and data manipulation.
          </li>
        </ul>
      </div>
      
    </section>
  );
}

export default Experience;
