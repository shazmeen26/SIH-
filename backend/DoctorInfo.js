
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("Doctor schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})
// Create a schema for Doctor Information
const doctorInfoSchema = new mongoose.Schema({
  doctor_name: {
    type: String,
    required: true
  },
  doctor_number: {
    type: String,
    required: true
  },
  doctor_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    
  },
  doctor_qualification: {
    type: String,
    required: true
  },
  work_center: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const DoctorInfo = mongoose.model('DoctorInfo', doctorInfoSchema);
module.exports=DoctorInfo

