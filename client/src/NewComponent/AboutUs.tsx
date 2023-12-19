// Import necessary modules and components
import React from 'react';
import './AboutUs.scss'; // Import the corresponding CSS file for styling

// AboutUs component
const AboutUs: React.FC = () => {
  return (
     <div className="about-us-container">
       <div className="about-us">
      <h1>About Us</h1>
    </div>
      <section className="introduction-section">
        <h2>Welcome to NashaMukti </h2>
        <p>
          At Nashamukti, we are on a mission to provide comprehensive and integrated
          support for individuals seeking recovery from addiction. Our platform serves as a
          centralized hub, bringing together cutting-edge technology and compassionate care to
          empower individuals on their journey to lasting recovery.

        </p>
      </section>

      <section className="mission-vision-section">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing comprehensive support and resources for individuals on
            their journey to recovery from addiction. Our mission is to foster a community that
            empowers individuals to reclaim their lives.
          </p>
        </div>
        

        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To create a world where every individual struggling with addiction has access to
            compassionate care, personalized treatment, and a supportive community that inspires
            lasting recovery.
          </p>
        </div>
      </section>

        <section className="visuals-section">
        {/* Insert engaging visuals here, such as images, infographics, or videos */}
        <div className="visuals-container">
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-yH1mVBuNtH2GxFUlb3sy9BJnQ-lNYPmSOQ&usqp=CAU" alt="Our Team" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvcKKa07wVJP-kJT_wc_tn7bBYxuLloS0lw&usqp=CAU" alt="Support" />
          {/* Add more visuals as needed */}
        </div> 
      </section>
    </div>
  );
};

export default AboutUs;
