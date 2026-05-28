const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
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

module.exports = mongoose.model('College', collegeSchema);
