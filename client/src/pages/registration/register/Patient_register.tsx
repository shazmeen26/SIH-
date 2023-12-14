import React, { useState } from 'react';
import axios from 'axios';

function User_register() {
  const [Firstname, setFirstname] = useState('');
  const [Secondname, setSecondname] = useState('');
  const [Age, setAge] = useState('');
  const [Number, setNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [Substance, setSubstance] = useState('');
  const [Aadhar, setAadhar] = useState('');
  const [Gender, setGender] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
    try {
      const response = await axios.post('http://localhost:8000/register', {
        Firstname,
        Secondname,
        Age,
        Aadhar,
        Number,
        Address,
        City,
        Pincode,
        Gender,
        Substance,
      });

      if (response.data === 'exists') {
        alert(`Already submitted form`);
      } else if (response.data === 'notexists') {
        alert('Successfully submitted form');
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  };

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
                First Name:
                <input
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  id="Firstname"
                  name="Firstname"
                  required
                  placeholder="First Name"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Last Name:
                <input
                  type="text"
                  onChange={(e) => setSecondname(e.target.value)}
                  id="Secondname"
                  name="Secondname"
                  required
                  placeholder="Last Name"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Age:
                <input
                  type="number"
                  name="Age"
                  onChange={(e) => setAge(e.target.value)}
                  required
                  placeholder="Age"
                  id="Age"
                  style={inputStyles}
                />
              </label>
            </div>
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

          <div style={nameEmailContainerStyles}>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                City:
                <input
                  type="text"
                  id="City"
                  name="City"
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="City"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Pincode:
                <input
                  type="number"
                  id="Pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  required
                  placeholder="Pincode"
                  style={inputStyles}
                  name="Pincode"
                />
              </label>
            </div>
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
                Gender:
                <select
                  required
                  style={selectStyles}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled hidden>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </div>

          <div style={nameEmailContainerStyles}>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Substance:
                <select
                  required
                  style={selectStyles}
                  onChange={(e) => setSubstance(e.target.value)}
                >
                  <option disabled hidden>
                    Select Substance
                  </option>
                  <option value="alcohol">Alcohol</option>
                  <option value="tobacco">Tobacco</option>
                  <option value="drugs">Drugs</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Aadhar Number:
                <input
                  type="text"
                  name="Aadhar"
                  id="Aadhar"
                  onChange={(e) => setAadhar(e.target.value)}
                  required
                  placeholder="Aadhar Number"
                  style={inputStyles}
                />
              </label>
            </div>
          </div>

          <button type="submit" style={submitButtonStyles}>
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
}

export default User_register;
