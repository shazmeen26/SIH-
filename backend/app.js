const express= require("express")
const register = require("./register_collection")
const login = require("./login_collection")
const cors =require("cors")
const app = express();
const jwt = require('jsonwebtoken')

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
        DOB,
        Age,
        Adhar,
        Number,
        Address,
        City,
        Pincode
        ,Gender,
        Alcohol, 
        Tabaco,
        Druggs, 
        Other,
        date} =req.body;

        const data = {
            firstname:Firstname,
            secondname:Secondname,
            DOB:DOB,
            Age:Age,
            Adhar:Adhar,
            Number:Number,
            Address:Address,
            City:City,
            Pincode:Pincode
            ,Gender:Gender,
            Alcohol:Alcohol, 
            Tabaco:Tabaco,
            Druggs:Druggs, 
            Other:Other,
            
            Date: new Date()
          };

        try{
            const check = await register.findOne({Adhar:Adhar})
            if (check){
                res.json("exists")
                }
            else{
                await register.insertMany([data])
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
        
        return res.json( "notexists"); // Respond with token and message
      }
        
   
      
    } catch (e) {
      res.json("server error");
      
    }
  });
  

app.listen(8000,()=>{
    console.log("Server listening at port 8000")
})