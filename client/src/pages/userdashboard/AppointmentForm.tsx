import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
}

function User_register() {
  const [phone, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [Doctors, setDoctors] = useState<Doctor[]>([]); // Use Doctor interface
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8000/alldoctors');
      console.log('Response from server:', response.data);
  
      // Assuming response.data.admins is an array of doctors
      const mappedDoctors = response.data.admins.map((doctor) => ({
        id: doctor._id,
        name: doctor.doctor_name,
      }));
  
      setDoctors(mappedDoctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
    try {
      const response = await axios.post('http://localhost:8000/Appointment', {
        phone,
        address,
        doctor: selectedDoctor,
        date,
      });

      if (response.data === 'exists') {
        setError(`alredy booked a appointment from ${phone}`);
      } else if (response.data === 'notexists') {
        alert(`Successfully registered from ${phone}`);
        setSubmitted(true);
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    }
  }, [submitted]);

  const containerStyles = {
    maxWidth: '700px',
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    maxHeight: '800px',
    height: 'auto',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
    flexDirection: 'column',
    margin: '10px auto',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#000',
    margin: '5px 0',
  };

  const labelStyles = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#fff',
  };

  const registrationLabelStyles = {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const nameEmailContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const nameInputStyles = {
    flex: '1 1 calc(48% - 5px)',
    marginBottom: '10px',
  };

  const dateTimeContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const dateInputStyles = {
    flex: '1 1 calc(45% - 10px)',
    marginBottom: '10px',
  };

  const selectStyles = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#000',
    margin: '5px 0',
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
            <div style={selectStyles}>
              <label style={labelStyles}>
                Doctor:
                <select
  required
  onChange={(e) => setSelectedDoctor(e.target.value)}
>
  <option disabled hidden>
    Select Doctor
  </option>
  {Doctors.length > 0 ? (
    Doctors.map((doctor) => (
      <option key={doctor.id} value={doctor.name}>
        {doctor.name}
      </option>
    ))
  ) : (
    <option value="" disabled>
      Loading Doctors...
    </option>
  )}
</select> 
              </label>
            </div>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button  type="submit" style={submitButtonStyles}>
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
