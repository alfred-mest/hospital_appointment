const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
  id: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
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

module.exports = mongoose.model('Doctor', doctorSchema)