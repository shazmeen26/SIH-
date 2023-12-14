import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../addiction.webp';

function Landing() {
  const navigate = useNavigate();

  // Function to handle the user selection and redirect
  const handleUserSelection = (userType) => {
    // Redirect based on the selected user type
    if (userType === 'patient') {
      navigate('/patient_login');
    } else if (userType === 'admin') {
      navigate('/admin_login');
    }
       else if (userType ==='employee'){
        navigate('/employee_login')
       }     
    else {
      // Handle other user types or show an error message
      console.error('Invalid user type selected');
    }
  };

  return (
    <div className="landing">
      <style>
        {`
          /* Your existing global styles here */

          .landing {
            height: 100vh;
            width: 100%;
            background-repeat: no-repeat;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .selection-box {
            max-width: 400px;
            width: 90%;
            border-radius: 15px;
            background: rgba(0, 0, 0, 0.4);
            color: white;
            padding: 30px;
            box-sizing: border-box;
            text-align: center;
          }

          h1 {
            margin-bottom: 20px;
            font-size: 32px;
            color: white;
          }

          .user-type-button {
            display: block;
            width: 100%;
            margin: 10px 0;
            padding: 15px;
            font-size: 18px;
            color: #fff;
            background: #2463d8;
            border: none;
            
            cursor: pointer;
          }

          .user-type-button:hover {
            background: #ffc107;
            color: #000;
          }
          .create a {
            text-decoration: none;
            font-size: 18px;
            line-height: 20px;
            color: golden;
            margin-top: 20px;
            display: block;
          }

          .create a:hover {
            color: #ffc107;
            color: black;
          }
        `}
      </style>

      <div className="selection-box">
        <h1>Welcome to the Login Portal</h1>
        <button className="user-type-button" onClick={() => handleUserSelection('patient')}>
          Patient Login
        </button>
        <button className="user-type-button" onClick={() => handleUserSelection('admin')}>
          Admin Login
        </button>
        <button className="user-type-button" onClick={() => handleUserSelection('employee')}>
           Government Employee Login
        </button>
        <div className='create'>
            <Link to="/register_landing">Don't have an Account? Create One</Link>
          </div>
      </div>
    </div>
  );
}

export default Landing;
