import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
          
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450944!2d144.9630576153186!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b930e377af3b!2sFlinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1605617073797!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
