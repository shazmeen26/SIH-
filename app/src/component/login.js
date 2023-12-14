
import axios from "axios";
import  "./login.css"
import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

localStorage.setItem("login" , "Login")  
localStorage.setItem("email", "null")

export default function Login(){
  const navigate = useNavigate();
 
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  
  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
      name,  
      email,
        password
      });

      if (response.data === "exists") {
        alert(`welcome ${name}`)
        navigate('/'); 
        localStorage.setItem('name',JSON.stringify(name))
        localStorage.setItem('email',JSON.stringify(email))
        localStorage.setItem("login" , "Account")        
              
         
      } else if (response.data === "notexists") {
        alert("Your account doesn't exist");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  }
  

    const [sname,setSname]=useState('')
  const [semail,setSemail]=useState('')
  const [spassword,setSpassword]=useState('')
  
  
  async function submit2(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
         sname,
         semail,
         spassword,
      });
      if (res.data === "exists") {
        alert("Your account already exists");

      } 
      else if (res.data === "invalidname") {
        alert("invalid name");
      }
      else if (res.data === "invalidpassword") {
        alert("password must be minimum 5 characters");
      }
      else if (res.data === "invalidemail") {
        alert(" enter a valid email id");
      }
      
      
      else if (res.data === "notexists") {
        alert("Account created successfully");

        const token = res.headers['set-cookie']; // Adjust this according to your response
        Cookies.set('token', token, { expires: 7 }); // Set the token as a cookie

      }
    } catch (error) {
      alert("Error creating account");
      console.error(error);
    }
  }

  
  //for account page details 
  
    

    return(
        
   <div id="lb">

    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img  id="limage" src="https://knowledgemission.kerala.gov.in/img/official-login.jpg" alt="" />
          <div className="text">
           
          </div>
        </div>
        <div className="back">

          <div className="text">
            
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
              <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e)=>{setName(e.target.value)}}
                  name="name" id="name" type="text" placeholder="Enter your username" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e)=>{setEmail(e.target.value)}}
                  name="email" id="email" type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input  onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="text">Forgot password?</div>
                <div className="button input-box">
                  <input onClick={submit} type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form method="post" action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>

                  <input 
                  autoComplete="off" 
                  name="sname" 
                  id="sname" 
                  type="text" 
                  placeholder="Enter your username"
                  onChange={(e)=>{setSname(e.target.value)}}
                  
                  required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>

                  <input autoComplete="off" 
                  name="semail" 
                  id="semail"   
                  type="text" 
                  placeholder="Enter your email"
                  onChange={(e)=>{setSemail(e.target.value)}}
                
                  required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>

                  <input 
                  autoComplete="off" 
                  name="spassword" 
                  id="spassword" 
                  type="password" 
                  placeholder="Enter your password" 
                  onChange={(e)=>{setSpassword(e.target.value)}}
                 
                 
                  required />
                </div>
                <div className="button input-box">
                  <input onClick={submit2}  autoComplete="off" type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
