import React, { useState } from 'react';
import axios from 'axios';

function Admin_register() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [center_name, setCenter_name] = useState('');
  const [admin_id, setAdmin_Id] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
    try {
      const response = await axios.post('http://localhost:8000/admin_Register', {
        name,
        number,
        email,
        password,
        center_name,
        admin_id
        
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
        <h2 style={registrationLabelStyles}>Center Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={nameEmailContainerStyles}>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Admin Name:
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  id="Admin_name"
                  name="Adminname"
                  required
                  placeholder="Admin Name"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Number:
                <input
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                  id="Admin_number"
                  name="Adminnumber"
                  required
                  placeholder="Admin Number"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Email:
                <input
                  type="email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  id="Email"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Password:
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  style={inputStyles}
                />
              </label>
            </div>
          </div>

         

          <div style={nameEmailContainerStyles}>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Center Name:
                <input
                  type="text"
                  id="Center"
                  name="Center"
                  onChange={(e) => setCenter_name(e.target.value)}
                  required
                  placeholder="Center Name"
                  style={inputStyles}
                />
              </label>
            </div>

            
            

            
         
          </div>


          <div style={nameInputStyles}>
              <label style={labelStyles}>
                Admin:
                <input
                  type="admin_Id"
                  name="admin_Id"
                  onChange={(e) => setAdmin_Id(e.target.value)}
                  required
                  placeholder="Admin id"
                  id="Email"
                  style={inputStyles}
                />
              </label>
            </div>

          

          <button type="submit" onClick={handleSubmit}  style={submitButtonStyles}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_register;
