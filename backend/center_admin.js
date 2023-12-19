const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("Admin register schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  center_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  admin_id: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

