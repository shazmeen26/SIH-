import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function User_register() {
 
  const [Number, setNumber] = useState('');
  const [Address, setAddress] = useState('');
 
  const [Doctor, setTDoctor] = useState('');
  
  const [Date, setTDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
    try {
      const response = await axios.post('http://localhost:8000/register', {
      
        
      
        Number,
        Address,
        
        Doctor,
        
      });

      if (response.data === 'exists') {
        setError('User with this email already exists.');
      } else if (response.data === 'notexists') {
        alert('Successfully registered');
        setSubmitted(true);
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      // Redirect to the user dashboard after successful registration
      // You may replace "/user-dashboard" with the actual path for your user dashboard
      setTimeout(() => {
        setSubmitted(false); // Reset the submitted state after redirecting
      }, 2000); // Set a delay to display the success message before redirecting
    }
  }, [submitted]);

  const containerStyles = {
    maxWidth: '700px', // Adjusted maximum width
    width: '90%', // Adjusted width for smaller screens
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    maxHeight: '800px', // Increased height of the box
    height: 'auto',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
    flexDirection: 'column',
    margin: '10px auto', // Center the form on the page
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#000',
    margin: '5px 0', // Added margin between placeholders
  };

  const labelStyles = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#fff', // Set label color to white
  };

  const registrationLabelStyles = {
    color: '#fff',
    fontSize: '24px', // Font size increased
    marginBottom: '20px', // Margin increased for better spacing
  };

  const nameEmailContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    justifyContent: 'space-between',
  };

  const nameInputStyles = {
    flex: '1 1 calc(48% - 5px)', // Adjusted flex for smaller screens and reduced margin
    marginBottom: '10px', // Added margin for better spacing on smaller screens
  };

  const dateTimeContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    justifyContent: 'space-between',
  };

  const dateInputStyles = {
    flex: '1 1 calc(45% - 10px)', // Adjusted flex for smaller screens
    marginBottom: '10px', // Added margin for better spacing on smaller screens
  };

  const genderInputStyles = {
    flex: '1 1 calc(45% - 10px)', // Adjusted flex for smaller screens
    marginBottom: '10px', // Added margin for better spacing on smaller screens
  };

  const timeInputStyles = {
    flex: '1 1 calc(50% - 10px)', // Adjusted flex for smaller screens
    marginBottom: '10px', // Added margin for better spacing on smaller screens
  };

  const selectStyles = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#000', // Set text color to black
    margin: '5px 0', // Added margin between placeholders
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '18px',
  };

  const submitButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div style={{ backgroundColor: '#2a3447', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={containerStyles}>
        <h2 style={registrationLabelStyles}>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={nameEmailContainerStyles}>
            
            
            
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Phone Number:
                <input
                  type="tel"
                  id="Number"
                  name="Number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  placeholder="Phone Number"
                  style={inputStyles}
                />
              </label>
            </div>
          </div>

          <div style={nameInputStyles}>
            <label style={labelStyles}>
              Address:
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                required
                id="Address"
                name="Address"
                placeholder="Address"
                style={inputStyles}
              />
            </label>
          </div>

          

          

          <div style={dateTimeContainerStyles}>
            <div style={dateInputStyles}>
              <label style={labelStyles}>
                Date:
                <input
                  type="date"
                  id="Date"
                  name="Date"
                  onChange={(e) => setDate(e.target.value)}
                  required
                  placeholder="Date"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={genderInputStyles}>
              <label style={labelStyles}>
                Doctor:
                <select
                  required
                  style={selectStyles}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled hidden>
                    Select Doctor
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={submitButtonStyles}>
            Book Appointment
          </button>
        </form>
        {submitted && <p style={{ color: 'green' }}>Redirecting to the user dashboard...</p>}
        {submitted && <Navigate to="/user_dashboard" />}
      </div>
    </div>
  );
}

export default User_register;
