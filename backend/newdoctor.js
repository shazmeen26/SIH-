const mongoose = require("mongoose");

// Define the Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  doctor_id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  }
});

// Create the Doctor model based on the schema
const Doctor = mongoose.model("Doctor", doctorSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = Doctor;
