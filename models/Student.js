const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: String,
  phone: String,
  nationalId: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  shift: {
    type: String,
    enum: ['صباحي', 'مسائي'],
    default: 'صباحي'
  },
  stage: {
    type: Number,
    default: 1
  },
  totalFee: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  documents: [{
    documentName: String,
    provided: Boolean,
    expiryDate: Date
  }],
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', studentSchema);
