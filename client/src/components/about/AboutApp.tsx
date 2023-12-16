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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus necessitatibus, doloremque excepturi numquam nobis laborum voluptates vero soluta fugit? Beatae, rem sit veniam dolor qui nobis libero atque deleniti, ab tempore illum a. Libero, ullam? Cumque cupiditate sed quam.
          </p>
          
        </div>
      </div>
     
    </section>
  );
}

export default About;