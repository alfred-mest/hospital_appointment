const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
  id: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  weight: {
    type: Number
  },
  sex: {
    enum: ['Male', 'Female']
  },
  phoneNumber: {
    type: String
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'appointment'
    }
  ]

})

module.exports = mongoose.model('Patient', patientSchema)