const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
  .then(() => {
    console.log("Rehabilitation center schema connected");
  })
  .catch((err) => {
    console.error("Failed to connect:", err);
  });

// Create a schema for Rehabilitation Center Information
const rehabilitationCenterSchema = new mongoose.Schema({
  admin_name: {
    type: String,
    required: true
  },
  admin_number: {
    type: String,
    required: true
  },
  admin_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name_of_center: {
    type: String,
    required: true
  },
  capacity_of_patient: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const RehabilitationCenter = mongoose.model('RehabilitationCenter', rehabilitationCenterSchema);

module.exports = RehabilitationCenter;
