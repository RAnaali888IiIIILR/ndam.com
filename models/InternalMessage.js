const mongoose = require('mongoose');

const internalMessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['عادي', 'عالي'],
    default: 'عادي'
  },
  isRead: {
    type: Boolean,
    default: false
  },
  isAuto: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('InternalMessage', internalMessageSchema);
