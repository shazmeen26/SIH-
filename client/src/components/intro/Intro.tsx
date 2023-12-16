import React, { useEffect } from "react";
import backgroundImage from './rehab.jpg'; // Adjust the path accordingly
import Navbar from '../../components/navbar/UserNavbar';

const Intro = () => {
  useEffect(() => {
    // Dynamically import Bootstrap styles
    import("bootstrap/dist/css/bootstrap.min.css");
    // Dynamically import Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '24px',
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const contentStyle = {
    textAlign: 'center',
    maxWidth: '600px', // Adjust the maxWidth as needed
    margin: '0 auto',  // Center the content
    zIndex: 1, // Ensure the content is above the overlay
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    padding: '10px 20px',
    color: '#fff',
    fontSize: '18px',
    marginTop: '20px',
    cursor: 'pointer',
  };

  const paragraphStyle = {
    fontSize: '16px', // Adjust the font size as needed
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={imageOverlayStyle}></div>
        <div style={contentStyle}>
          <h1>Welcome to the Centralised Nasha Mukti Database for India!</h1>
          <p style={paragraphStyle}>
            Our mission is to provide a centralized platform to address the
            issues related to substance abuse and addiction in India. We aim to
            connect individuals with the right resources and support for
            rehabilitation.
          </p>
          <button style={buttonStyle}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
