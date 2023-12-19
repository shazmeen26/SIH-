import React from 'react';
import './about.scss';
import  image from './drugs.png';

function About() {
  return (
    <section className="About">
      <div className="main1">
        <img src={image} alt="" />
        <div className="About-text">
          <h2 id="section2">About App</h2>
          <p>
          Our Nasha Mukti (De-addiction) Database is a comprehensive resource center dedicated to providing information, support, and guidance to individuals seeking help for overcoming substance abuse and addiction. We offer a wide range of resources, including rehabilitation centers, support groups, counseling services, helplines, and educational materials, aimed at assisting individuals on their journey to recovery.
          </p>
          
        </div>
      </div>
     
    </section>
  );
}

export default About;