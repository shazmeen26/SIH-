const express= require("express")
const register = require("./register_collection")
const cors =require("cors")
const app = express();

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


app.listen(8000,()=>{
    console.log("Server listening at port 8000")
})