import React from 'react';
import '../styles/contact.css'; // Make sure to create and import the CSS file

function Contact() {
    return (
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>We are here to help you with every step of your wedding budget planning journey. Whether you have questions, need assistance, or just want to share your feedback, our team is ready to assist you. Reach out to us through any of the following channels, and we'll be happy to connect with you. </p>
        <h3>Customer Support</h3>
        <p><span>Email:</span> For any inquiries, support requests, or feedback, feel free to email us at:
        <a href="mailto:support@weddingbudgetplanner.com">support@weddingbudgetplanner.com</a></p>

<p><span>Phone: </span>
Speak directly with our customer support team for immediate assistance:
+1-800-123-4567</p>

<p>Our support team is available from Monday to Friday, 9 AM to 5 PM (EST).</p>
      </section>
    );
  }

export default Contact;