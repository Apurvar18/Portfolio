// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate or just say hello, feel free to reach out to me!</p>
      <ul>
        <li>Email: apurvarajput1812@gmail.com</li>
        <li>Phone: +1(647)-802-8642</li>
        <li>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/Apurvar18" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </section>
  );
}

export default Contact;
