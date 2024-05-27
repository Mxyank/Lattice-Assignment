const express = require('express');
const multer = require('multer');
const { registerPatient } = require('../controllers/patientController');
const { getPsychiatristsByHospital } = require('../controllers/psychiatristController');
const { patientValidationRules } = require('../validators/patientValidator');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/register-patient', upload.single('photo'), patientValidationRules(), registerPatient);
router.post('/psychiatrists-by-hospital', getPsychiatristsByHospital);

module.exports = router;
