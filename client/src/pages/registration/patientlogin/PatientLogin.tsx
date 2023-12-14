import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../registration/addiction.webp';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here and handle errors
    // Assuming login is successful, you can redirect to the dashboard page
    if (username === 'aryaan2903' && password === '1234') {
      // Replace 'yourUsername' and 'yourPassword' with your actual validation logic
      // Redirect to the dashboard page
      navigate('/');
    } else {
      // Handle login errors and set the error state if necessary
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <div className="loginbox">
        <style>
          {`
            * {
              margin: 0;
              padding: 0px;
              font-family: sans-serif;
            }

            body {
              height: 100vh;
              width: 100%;
              background-repeat: no-repeat;
              /* Use the background-image property with the URL of your image */
              background-image: url(${backgroundImage});
              background-size: cover;
              background-position: center;
            }

            .avatar {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              position: absolute;
              top: -50px;
              left: calc(50% - 50px);
            }

            .loginbox {
              max-width: 600px;
              width: 90%;
              height: auto;
              border-radius: 25px;
              background: rgba(0, 0, 0, 0.4);
              color: white;
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              box-sizing: border-box;
              padding: 50px 30px;
            }

            h1 {
              margin: 0;
              padding: 0 0 20px;
              text-align: center;
              font-size: 32px;
              color: white;
            }

            .loginbox p {
              margin: 10px;
              padding: 0;
              font-weight: bold;
              font-size: 22px;
              color: rgb(94, 78, 78);
            }

            .loginbox input {
              width: 100%;
              margin-top: 10px;
            }
            .loginbox input[type="text"],
            .loginbox input[type="password"] {
              border: none;
              border-bottom: 1px solid rgb(17, 15, 15);
              background: white;
              outline: none;
              height: 40px;
              color: black;
              font-size: 20px;
              margin-top: 10px;
              margin-left: 10px;
              /* Additional styling for the square box */
              padding: 25px 10px;
              box-sizing: border-box;
              display: block;
              width: calc(100% - 20px); /* Adjust the width as needed */
            }

            .loginbox input[type="submit"] {
              margin-top: 30px;
              border: none;
              outline: none;
              height: 40px;
              background: #2463d8;;
              color: #fff;
              font-size: 18px;
              box-sizing: border-box;
              width: calc(90% - 20px)
              margin:  40px 10px 20px 10px;
            }

            .loginbox input[type="submit"]:hover {
              cursor: pointer;
              background: #ffc107;
              color: #000;
            }

            .loginbox a {
              display: block;
              text-decoration: none;
              font-size: 22px;
              line-height: 20px;
              color: golden;
              margin-top: 20px;
              text-align: center;
            }

            .loginbox a:hover {
              color: #ffc107;
              color: black;
            }

            .create a {
              text-decoration: none;
              font-size: 22px;
              line-height: 20px;
              color: golden;
              margin-top: 20px;
              text-align: center;
            }

            @media (max-width: 768px) {
              body {
                background-size: cover;
                background-position: top;
              }
            }

            @media (max-width: 576px) {
              body {
                background-size: cover;
                background-position: center;
              }
            }
          `}
        </style>

        <h1>Patient Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" /><br /><br />
          <div className='create'>
            <Link to="/patient_register">Don't have an Account? Create One</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
