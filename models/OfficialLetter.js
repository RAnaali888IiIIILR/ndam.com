const mongoose = require('mongoose');

const officialLetterSchema = new mongoose.Schema({
  letterId: {
    type: String,
    unique: true
  },
  letterNumber: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  source: String,
  destination: String,
  dateIssued: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  category: String,
  summary: String,
  status: {
    type: String,
    enum: ['active', 'expired'],
    default: 'active'
  },
  archivedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('OfficialLetter', officialLetterSchema);
