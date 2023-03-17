const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const StudentModel = require('../models/Form');

// Create a new student
router.post(
  '/students',
  fetchUser,
  [
    check('name', 'Please enter a valid name').isLength({ min: 1 }),
    check('rollno', 'Please enter a valid roll number').isLength({ min: 1 }),
    check('gender', 'Please select a valid gender').isIn(['Male', 'Female', 'Other']),
    check('age', 'Please enter a valid age').isInt({ min: 1 }),
    check('branch', 'Please enter a valid branch').isLength({ min: 1 })
  ],
  async (req, res) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return a response with a status code of 400 (Bad Request) and the errors array
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the fields from the request body
    const { name, rollno, gender, age, branch } = req.body;

    try {
      // Create a new student object with the extracted fields
      const student = new StudentModel({
        name,
        rollno,
        gender,
        age,
        branch,
        user: req.user.id
      });

      // Save the student object to the database
      const savedStudent = await student.save();

      // Return a response with a status code of 201 (Created) and the saved student object
      return res.status(201).json(savedStudent);
    } catch (err) {
      // Return a response with a status code of 500 (Internal Server Error) and an error message
      console.error(err.message);
     return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
