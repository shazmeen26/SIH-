import React from 'react';
import './ContactUs.scss';


const ContactUs: React.FC = () => {
  return (
    <div className="contact-us">
      <div className="sidebar-left">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Address: New Delhi</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +91 945124532</p>
        </div>
      </div>
      <div className="main-content">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or feedback!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" rows={5}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="sidebar-right">
        <div className="contact-number">
          <h3>Contact Number</h3>
          <p>+91 945124532</p>
        </div>
      </div>
    </div>
  );
};




export default ContactUs;
