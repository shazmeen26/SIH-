const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("employee register schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})

const employee_register = new mongoose.Schema({

   name:{
    type:String,
    require:true,
   },

   number:{
    type:Number,
   require:true,}

   ,
    Center_name:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    },
    employee_Id:{
        type:String,
        require:true
    }


})
const employee = mongoose.model("employee_register", employee_register)
module.exports=employee