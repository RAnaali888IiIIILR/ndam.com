const express = require('express');
const Student = require('../models/Student');
const { authenticate, authorize } = require('../middleware/auth');
const AuditLog = require('../models/AuditLog');

const router = express.Router();

// Add student
router.post('/', authenticate, authorize('admin', 'registrar', 'dept_head'), async (req, res) => {
  try {
    const { studentId, fullName, email, phone, nationalId, department, shift, totalFee, documents } = req.body;

    const existingStudent = await Student.findOne({ studentId });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: 'الطالب موجود بالفعل' });
    }

    const student = new Student({
      studentId,
      fullName,
      email,
      phone,
      nationalId,
      department,
      shift,
      totalFee,
      documents: documents || []
    });

    await student.save();

    await AuditLog.create({
      user: req.user._id,
      action: 'ADD_STUDENT',
      details: `تسجيل طالب جديد: ${studentId} - ${fullName}`,
      ipAddress: req.ip
    });

    res.status(201).json({
      success: true,
      message: 'تم تسجيل الطالب بنجاح',
      student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'خطأ في الخادم',
      error: error.message
    });
  }
});

// Get all students
router.get('/', authenticate, async (req, res) => {
  try {
    const students = await Student.find().populate('department');
    res.status(200).json({
      success: true,
      count: students.length,
      students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'خطأ في الخادم',
      error: error.message
    });
  }
});

module.exports = router;
