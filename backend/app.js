const express= require("express")
const register = require("./register_collection")
const login = require("./login_collection")
const cors =require("cors")
const app = express();
const jwt = require('jsonwebtoken')
const employee = require("./employee_register")
const RehabilitationCenter = require("./RehabilitationCenter")
const Government = require("./GovernmentInfo")
const DoctorInfo = require("./DoctorInfo")
const Admin= require("./center_admin")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    // Define your root route logic here
    res.json("Welcome to the backend server ");
  });
  
app.post("/Register",async(req,res)=>{
    const{    Firstname,
        Secondname,
        
        Age,
        Aadhar,
        Number,
        Address,
        City,
        Pincode
        ,Gender,
        Substance,
        email,
        password,
        date} =req.body;

        const data = {
            firstname:Firstname,
            secondname:Secondname,
            
            Age:Age,
            Aadhar:Aadhar,
            Number:Number,
            Address:Address,
            City:City,
            Pincode:Pincode
            ,Gender:Gender,
            Substance:Substance,
            email:email,
            
            
            Date: new Date()
          };
          const data2 = {
            email:email,
            password:password,
            logintype:"user"
          }

        try{
            const check = await login.findOne({email:email})
            if (check){
                res.json("exists")
                }
                
            else{
                await register.insertMany([data])
                await login.insertMany([data2])
                res.json("notexists")

            }
        }
            catch (e){
                res.json("servererror")
            }
        
})  



//employee register
app.post("/employee_Register",async(req,res)=>{
  const{   name,
            email,
            employee_Id,
            center_name,
            number,
            password,

      date} =req.body;

      const data = {
        name:name,
        email:email,
        employee_Id:employee_Id,
        center_name:center_name,
        number:number,
          Date: new Date()
        };
        const data2 = {
          email:email,
          password:password,
          logintype:"employee"
        }

      try{
          const check = await employee.findOne({employee_Id:employee_Id})
          if (check){
              res.json("exists")
              }
              
          else{
              await employee.insertMany([data])
              await login.insertMany([data2])
              res.json("notexists")

          }
      }
          catch (e){
              res.json("servererror")
          }
      
})  

// admin register connected

app.post("/admin_Register",async(req,res)=>{
  const{   name,
            email,
            admin_id,
            center_name,
            number,
            password,

      date} =req.body;

      const data = {
        name:name,
        email:email,
        admin_id:admin_id,
        center_name:center_name,
        number:number,
          Date: new Date()
        };
        const data2 = {
          email:email,
          password:password,
          logintype:"Admin"
        }

      try{
          const check = await Admin.findOne({admin_id:admin_id})
          if (check){
              res.json("exists")
              }
              
          else{
              await Admin.insertMany([data])
              await login.insertMany([data2])
              res.json("notexists")

          }
      }
          catch (e){
              res.json("servererror")
          }
      
})  



/// login and signup

app.post("/login",  async (req, res) => {
    const { email, password } = req.body;
    try {
      const check = await login.findOne({ email, password });

   
      if (check) {
        res.json("exists");
      } else {
        res.json("notexists");
      }
    } catch (e) {
      res.json("servererror");
    }
  });
  
  app.post("/signup", async (req, res) => {

    
    const { sname, semail, spassword ,date} = req.body;
  
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(semail)) {
      return res.json("invalidemail");
    }
  
    if (!/^[a-zA-Z0-9\s]*$/.test(sname) || sname.trim().length === 0) {
      return res.json("invalidname");
    }
    
    
    if (spassword.length < 5) {
      return res.json("invalidpassword");
    }
    
  
    const data = {
      name: sname,
      email: semail,
      password: spassword,
      logintype:logintype,
      date: new Date(),
      

    };
     
    try {
      let token
      const check = await login.findOne({ email: semail });
       
      if (check) {
        return res.json("exists");
      } else {
        const newUser = new login(data);
        const token = await newUser.generateAuthToken(); // Correct token generation
        console.log(token); // Log the generated token

  
        await newUser.save(); // Save the new user
        res.cookie("jwttoken",token,{
          expires:new Date(Date.now()+25892000000),
          httpOnly:true,
          secure:true, sameSite:'None'
          
         

        } )
        console.log( " token saved Sucessfull")

        return res.json( "notexists"); // Respond with token and message
      }
        
   
      
    } catch (e) {
      res.json("server error");
      
    }
  });
  

app.listen(8000,()=>{
    console.log("Server listening at port 8000")
})


