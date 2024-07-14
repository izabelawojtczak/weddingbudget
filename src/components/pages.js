import React from 'react';
import '../styles/about.css';
import '../styles/contact.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <h2>About Us</h2>
      <p>Information about us...</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Contact information...</p>
    </section>
  );
}

function MainContent() {
  return (
    <div>
      <AboutUs />
      <Contact />
    </div>
  );
}

export default MainContent;
