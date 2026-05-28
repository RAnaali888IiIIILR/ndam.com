# 🏛️ نظام جامعة الأهلية المتكامل

University Integrated Management System - NDAM

## 📋 المتطلبات

- Node.js >= 14.0.0
- MongoDB >= 4.0
- npm أو yarn

## 🚀 التثبيت والتشغيل

### 1. استنسخ المستودع
```bash
git clone https://github.com/RAnaali888IiIIILR/ndam.com.git
cd ndam.com
```

### 2. ثبت المكتبات
```bash
npm install
```

### 3. أنشئ ملف `.env`
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ndam
CORS_ORIGIN=http://localhost:3000,http://localhost:5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
```

### 4. تأكد من تشغيل MongoDB
```bash
mongod
```

### 5. شغّل الخادم
```bash
npm start
# أو للتطوير
npm run dev
```

### 6. افتح الموقع
الرابط: **http://localhost:5000**

## 🔐 بيانات الدخول الافتراضية

| اسم المستخدم | كلمة المرور | الدور |
|---|---|---|
| admin | admin123 | مدير النظام |
| registrar | reg2026 | مدير تسجيل |
| finance | fin2026 | مدير مالية |
| college_dentistry | col2026 | كلية طب الأسنان |

## 📁 هيكل المشروع

```
ndam.com/
├── config/
│   └── database.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Student.js
│   ├── Payment.js
│   ├── OfficialLetter.js
│   ├── InternalMessage.js
│   ├── College.js
│   ├── Department.js
│   └── AuditLog.js
├── routes/
│   ├── auth.js
│   ├── students.js
│   ├── payments.js
│   ├── letters.js
│   ├── messages.js
│   ├── reports.js
│   └── admin.js
├── index.html
├── index.js
├── package.json
├── .env
└── README.md
```

## 🌐 المسارات الرئيسية

- `GET /api/health` - التحقق من حالة الخادم
- `POST /api/auth/login` - تسجيل الدخول
- `GET /api/students` - قائمة الطلاب
- `POST /api/students` - إضافة طالب جديد
- `GET /api/payments` - قائمة الدفعات
- `POST /api/payments` - إضافة دفعة جديدة
- `GET /api/letters` - قائمة الأرشيف
- `POST /api/letters` - أرشفة كتاب جديد

## 👤 الأدوار المتاحة

- **مدير النظام** - صلاحيات كاملة
- **مدير التسجيل** - إدارة الطلاب والأرشيف
- **مدير المالية** - إدارة الدفعات والتقارير
- **رئيس قسم** - إدارة قسمه الخاص
- **حاسبة** - إدخال الدفعات فقط
- **كلية** - مشاهدة البيانات فقط

## 📞 الدعم والمساعدة

في حالة واجهت مشكلة:
1. تأكد من تشغيل MongoDB
2. تحقق من ملف .env
3. شغّل `npm install` مجدداً
4. اعرض سجلات الأخطاء في الـ console

---
**آخر تحديث**: 2026-05-28
