const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    unique: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  receiptNumber: {
    type: String,
    unique: true,
    required: true
  },
  category: {
    type: String,
    enum: ['tuition', 'registration', 'fine', 'other'],
    default: 'tuition'
  },
  method: {
    type: String,
    enum: ['نقدي', 'زين كاش', 'تحويل بنكي', 'شيك'],
    default: 'نقدي'
  },
  notes: String,
  recordedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
