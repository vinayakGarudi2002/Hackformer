const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  branch: {
    type: String,
    required: true
  }
});

const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;
