const crypto = require('crypto');

// دالة لإخفاء عنوان IP الحساس
const maskIPAddress = (ip) => {
  if (!ip) return 'UNKNOWN';
  
  // إذا كان localhost، أعد "LOCAL"
  if (ip === '127.0.0.1' || ip === 'localhost' || ip === '::1') {
    return 'LOCAL';
  }
  
  // قسم عنوان IP وأخف آخر جزأين
  if (ip.includes(':')) {
    // IPv6
    const parts = ip.split(':');
    return parts.slice(0, 3).join(':') + ':****';
  } else {
    // IPv4
    const parts = ip.split('.');
    if (parts.length === 4) {
      return parts[0] + '.' + parts[1] + '.**.***';
    }
  }
  
  return 'UNKNOWN';
};

// دالة لإنشاء بصمة آمنة لعنوان IP (بدلاً من تسجيل IP الكامل)
const hashIPAddress = (ip) => {
  if (!ip) return null;
  
  return crypto
    .createHash('sha256')
    .update(ip + process.env.JWT_SECRET || 'default_secret')
    .digest('hex')
    .substring(0, 16);
};

module.exports = {
  maskIPAddress,
  hashIPAddress
};
