import React, { useState } from 'react';
import axios from 'axios';

function Doctor_register() {
  const [name, setName] = useState('');
  const [number, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[doctor_id, setDoctor_Id]= useState("")
  const[dob , setDob]= useState("")
  const[experience,setExperience]=useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
    try {
      const response = await axios.post('http://localhost:8000/doctorr', {
        name,
        number,
        email,
        password,
        doctor_id,
        dob,
        experience

        
      });

      if (response.data == 'exists') {
        alert(`Already submitted form`);
      } else if (response.data == 'notexists') {
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
        <h2 style={registrationLabelStyles}>Doctor Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={nameEmailContainerStyles}>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                 Name:
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  required
                  placeholder=" Name"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Contact:
                <input
                  type="tel"
                  onChange={(e) => setContact(e.target.value)}
                  id="number"
                  name="number"
                  required
                  placeholder="Contact Number"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Email:
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  id="email"
                  style={inputStyles}
                />
              </label>
            </div>
            
          </div>
          <div style={nameInputStyles}>
              <label style={labelStyles}>
                Doctor id:
                <input
                  type="number"
                  name="doctor_id"
                  onChange={(e) => setDoctor_Id(e.target.value)}
                  required
                  placeholder="Employee  id "
                  id="doctor_id"
                  style={inputStyles}
                />
              </label>
            </div>
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Password:
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  style={inputStyles}
                />
              </label>
            </div>
       

 
            <div style={nameInputStyles}>
              <label style={labelStyles}>
                Years of experience: 
                <input
                  type="number"
                  name="experiene"
                  onChange={(e) => setExperience(e.target.value)}
                  required
                  placeholder="Employee  id "
                  id="doctor_id"
                  style={inputStyles}
                />
              </label>
            </div>

            <div style={nameInputStyles}>
              <label style={labelStyles}>
                DOB: 
                <input
                  type="date"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                  required
                  placeholder="Employee  id "
                  id="doctor_id"
                  style={inputStyles}
                />
              </label>
            </div>

          

          <button type="submit" onClick={handleSubmit} style={submitButtonStyles}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Doctor_register;
