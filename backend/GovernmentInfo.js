const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("Goverment schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})

// Create a schema for Government Information
const governmentInfoSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  contact_information: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

// Create a model based on the schema
const GovernmentInfo = mongoose.model('GovernmentInfo', governmentInfoSchema);

module.exports=GovernmentInfo