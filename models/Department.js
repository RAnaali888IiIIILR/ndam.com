const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  departmentId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  annualFee: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  description: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Department', departmentSchema);
