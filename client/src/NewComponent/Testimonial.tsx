import React from 'react';
import './Testimonial.scss';

const Testimonials: React.FC = () => {
  return (
    <section>
    <div className="testimonials-container">

      <div className="testimonial-slider">
        <div className="testimonial-cards">
          {/* Testimonial cards */}
          <div className="testimonial-card">
            <p className="testimonial-text">
              Testimonial 1 text goes here...
            </p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Testimonial 2 text goes here...
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Testimonial 3 text goes here...
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Testimonial 4 text goes here...
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              Testimonial 5 text goes here...
            </p>
            <p className="testimonial-author">- Jane Smith</p>
          </div>
          {/* Add more testimonials similarly */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
