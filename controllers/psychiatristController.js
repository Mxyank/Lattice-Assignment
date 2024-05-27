const Hospital = require('../models/hospital');
const Psychiatrist = require('../models/psychiatrist');
const Patient = require('../models/patient');

const getPsychiatristsByHospital = async (req, res) => {
  const { hospitalId } = req.body;

  try {
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ msg: 'Hospital not found' });
    }

    const psychiatrists = await Psychiatrist.find({ hospitalId }).populate('patients');
    const psychiatristDetails = psychiatrists.map(psych => ({
      id: psych._id,
      name: psych.name,
      patientsCount: psych.patients.length,
    }));

    const response = {
      hospitalName: hospital.name,
      totalPsychiatristCount: psychiatrists.length,
      totalPatientsCount: psychiatrists.reduce((acc, curr) => acc + curr.patients.length, 0),
      psychiatristDetails,
    };

    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getPsychiatristsByHospital };
