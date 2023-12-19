import React from 'react';
import { Link } from 'react-router-dom';
import "./appointmentbooking.scss"

const AppointmentBooking = () => {
  return (
    <div className="appointment-booking-container">
      <header className="appointment-header">
        <h1>Book an Appointment</h1>
        <p>Fill out the form below to schedule your appointment</p>
      </header>

      <Link to="/appointment_form" className="appointment-form-button">
        Book Now
      </Link>
    </div>
  );
};

export default AppointmentBooking;
