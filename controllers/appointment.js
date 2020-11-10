const appointRouter = require('express').Router();
const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

appointRouter.post('/create-appointment', async (request, response) => {

  const doctorId = request.body.doctorId;
  const patientId = request.body.patientId;
  const appointmentDate = request.body.appointmentDate;

  try {
    const patient = await Patient.findOne({ id: patientId });
    const doctor = await Doctor.findOne({ id: doctorId });

    const appointmentObj = {
      doctorId,
      patientId,
      appointmentDate,
      canceled: false,
      past: false
    }

    const newAppointment = new Appointment(appointmentObj);
    const savedAppointment = await newAppointment.save()

    /** */
    patient.appointments.push(savedAppointment._id);
    doctor.appointments.push(savedAppointment._id);
    /** */

    /** */
    Patient.update(
      { id: patientId },
      { $push: { appointments: savedAppointment._id } },
      done
    );

    Doctor.update(
      { id: doctorId },
      { $push: { appointments: savedAppointment._id } },
      done
    );
    /** */
    response.sendStatus(201).sendStatus({
      message: "Appointment created successfully"
    });
  } catch (exception) {
    response.sendStatus(402).send({
      message: "Saving appointment failed"
    })
  }






})