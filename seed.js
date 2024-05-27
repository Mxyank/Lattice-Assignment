const mongoose = require('mongoose');
const Hospital = require('./models/hospital');
const connectDB = require('./config/db');

const seedHospitals = async () => {
  await connectDB();

  const hospitals = [
    { name: 'Apollo Hospitals' },
    { name: 'Jawaharlal Nehru Medical College and Hospital' },
    { name: 'Indira Gandhi Institute of Medical Sciences (IGIMS)' },
    { name: 'AIIMS - All India Institute Of Medical Science' },
  ];

  try {
    await Hospital.deleteMany(); // Clear existing hospitals
    await Hospital.insertMany(hospitals);
    console.log('Hospitals seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedHospitals();
