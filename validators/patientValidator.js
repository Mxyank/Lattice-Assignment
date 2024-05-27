const { body } = require('express-validator');

const patientValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('address').isLength({ min: 10 }).withMessage('Address should be at least 10 characters'),
    body('email').isEmail().withMessage('Email should be valid'),
    body('phoneNumber').isLength({ min: 10 }).withMessage('Phone number should be at least 10 digits'),
    body('password').isLength({ min: 8, max: 15 }).matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/).withMessage('Password should contain one upper character, one lower character, and a number. Max length 15 and min length 8'),
  ];
};

module.exports = { patientValidationRules };
