const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, minlength: 10 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phoneNumber: { type: String, required: true, minlength: 10 },
  password: { type: String, required: true, minlength: 8, maxlength: 15, match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/ },
  photo: { type: String, required: true },
  psychiatristId: { type: mongoose.Schema.Types.ObjectId, ref: 'Psychiatrist', required: true },
});

module.exports = mongoose.model('Patient', PatientSchema);
