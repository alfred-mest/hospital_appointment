const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
  dateTime: {
    type: Date
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  canceled: {
    type: Boolean
  },
  past: {
    type: Boolean
  }

})

module.exports = mongoose.model('appointment', appointmentSchema)