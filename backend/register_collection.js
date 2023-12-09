const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("register schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})

const newSchema = new mongoose.Schema({

    Firstname:{
        type:String,
        require:true ,

    },

    Secondname:{
        type:String,
        require:true,
    },
    DOB:{
        type:String,
        require:true
    },

    Age:{
        type:Number,
        require:true
    },
    Adhar:{
        type:Number,
        require:true
    },
    Number:{
        type:Number,
        require:true
    },
    Address:{
        type:String,
        require:true,
    },
    City:{
        type:String,
        require:true,
    },
    Pincode:{
        type:Number,
        require:true,
    },
    Gender:{
        type:String,
        require:true,
    },
    Alcohol:{
        type:String,
        require:true,
    },
    Tabaco:{
        type:String,
        require:true,
    },
    Other:{
        type:String,
        require:true,
    },
    Druggs:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true
    }
})
const register = mongoose.model("register", newSchema)
module.exports=register