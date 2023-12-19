const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("Appiontment  schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})
const appiontment_schema = new mongoose.Schema({
 
 
  phone: {
    type: Number,
    required: true,
  },
 
  address: {
    type: String,
    required: true,
  },
  date:{
    type:String,
    require:true
  },
  doctor:{
    type:String,
    require:true,
  }
});

const Appiontment= mongoose.model("Appiontment", appiontment_schema);

module.exports = Appiontment;