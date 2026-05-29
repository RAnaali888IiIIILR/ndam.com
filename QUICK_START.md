# دليل سريع للتشغيل المحلي

## 📋 المتطلبات المثبتة
- Node.js v18.x
- MongoDB 4.0+

## 🚀 خطوات التشغيل السريعة

### 1. استنسخ المشروع
```bash
git clone https://github.com/RAnaali888IiIIILR/ndam.com.git
cd ndam.com
```

### 2. ثبت المكتبات
```bash
npm install
```

### 3. تأكد من تشغيل MongoDB
```bash
# على ويندوز - افتح PowerShell كـ Admin
Start-Service MongoDB

# أو شغّل mongod في terminal منفصل
mongod
```

### 4. شغّل الخادم
```bash
npm start
```

### 5. افتح المتصفح
```
http://localhost:5000
```

## 🔐 بيانات الدخول
- **Username:** admin
- **Password:** admin123
- **Role:** مدير النظام

## ⚙️ متغيرات البيئة المستخدمة

ملف `.env` يجب أن يحتوي على:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ndam
CORS_ORIGIN=http://localhost:3000,http://localhost:5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

## 🆘 حل المشاكل

### MongoDB لا يعمل
```bash
# على ويندوز
Start-Service MongoDB

# على Mac
brew services start mongodb-community

# على Linux
sudo systemctl start mongod
```

### Port مستخدم
غيّر في `.env`:
```env
PORT=5001
```

### حذف والإعادة
```bash
rm -r node_modules package-lock.json
npm install
npm start
```

---
**تم إنشاء النظام بنجاح! ابدأ بالتطوير 🎉**
