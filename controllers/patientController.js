const Patient = require('../models/patient');
const Psychiatrist = require('../models/psychiatrist');
const { validationResult } = require('express-validator');

const registerPatient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, address, email, phoneNumber, password, psychiatristId } = req.body;
  const photo = req.file.path;

  try {
    const patient = new Patient({ name, address, email, phoneNumber, password, photo, psychiatristId });
    await patient.save();

    // Add patient to psychiatrist's patients list
    await Psychiatrist.findByIdAndUpdate(psychiatristId, { $push: { patients: patient._id } });

    res.status(201).json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { registerPatient };
