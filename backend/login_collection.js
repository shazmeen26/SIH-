const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("mongodb collection login connected")

})
.catch(()=>{
    console.log('failed')
})

const newSchema= new mongoose.Schema({
   
    email:{
        type:String,
        require:true,
        unique:true,
        
        
    },
    password:{
        type:String,
        require:true
        
    },
    name:{
        type:String,
        require:true
        
    },
    date:{
        type:String,
        require:true
        
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
    })
    


    //jason web token generation
     newSchema.methods.generateAuthToken = async function(){
        try{
            let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
            this.tokens = this.tokens.concat({token:token})
            await this.save()
            return token
        }catch (err){
            console.log(err)
        }
     }



    const login = mongoose.model("login", newSchema)
    module.exports=login