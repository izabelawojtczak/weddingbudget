import React from 'react';
import '../styles/aboutus.css'; 

const logo = require('../assets/team-dynamics.jpg');

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>Welcome to Wedding Budget Planner, your trusted companion in navigating the financial intricacies of planning the perfect wedding. We understand that organizing a wedding can be both an exciting and overwhelming experience. Our mission is to simplify the financial aspect of your wedding planning, allowing you to focus on the joy and excitement of your special day.</p>
          <p>We are committed to helping you achieve a beautiful wedding without financial stress. Our platform is built with the latest technology to provide a secure, reliable, and user-friendly experience. We continually update our features based on user feedback to ensure that our tool meets the evolving needs of modern couples.</p>
          <p>Our team is dedicated to making your wedding planning process as smooth and enjoyable as possible. With Wedding Budget Planner, you can rest assured that your wedding finances are in good hands.</p>
        </div>
        <img src={logo} alt="team" className="about-image" />
      </div>
    </section>
  );
}

export default AboutUs;
