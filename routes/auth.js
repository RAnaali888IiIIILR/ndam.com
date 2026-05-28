const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'بيانات الدخول غير صحيحة' });
    }

    // في الإنتاج استخدم bcrypt
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'بيانات الدخول غير صحيحة' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({
      success: true,
      message: 'تم الدخول بنجاح',
      token,
      user: {
        id: user._id,
        username: user.username,
        fullName: user.fullName,
        role: user.role
      }
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
