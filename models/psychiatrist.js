const mongoose = require('mongoose');

const PsychiatristSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
});

module.exports = mongoose.model('Psychiatrist', PsychiatristSchema);
