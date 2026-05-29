# 📖 دليل تشغيل النظام محلياً للمبتدئين

## ✅ الخطوة الأولى: تثبيت البرامج المطلوبة

### 1️⃣ تثبيت Node.js
1. اذهب إلى: https://nodejs.org/
2. حمّل النسخة **LTS** (الطويلة الأجل)
3. ثبّت البرنامج واتبع التعليمات
4. تحقق من التثبيت بفتح موجه الأوامر وكتب:
```bash
node --version
npm --version
```

---

### 2️⃣ تثبيت MongoDB
1. اذهب إلى: https://www.mongodb.com/try/download/community
2. حمّل MongoDB Community Edition
3. ثبّت البرنامج
4. **مهم**: اختر "Install MongoDB as a Service" أثناء التثبيت

---

## ✅ الخطوة الثانية: تحضير المشروع

### 1️⃣ استنسخ المستودع
افتح موجه الأوامر (Command Prompt أو PowerShell) وكتب:

```bash
git clone https://github.com/RAnaali888IiIIILR/ndam.com.git
cd ndam.com
```

إذا لم يكن لديك Git، حمله من: https://git-scm.com/

---

### 2️⃣ ثبت المكتبات
```bash
npm install
```
⏳ سيستغرق هذا دقائق قليلة...

---

## ✅ الخطوة الثالثة: تشغيل MongoDB

**على ويندوز:**
1. اذهب إلى: Start Menu → Services
2. ابحث عن "MongoDB"
3. تأكد من أنه "Running" (يعمل)

أو افتح PowerShell كـ Admin وكتب:
```bash
Start-Service MongoDB
```

**على Mac/Linux:**
```bash
brew services start mongodb-community
# أو
mongod
```

---

## ✅ الخطوة الرابعة: شغّل النظام

افتح موجه الأوامر في مجلد المشروع وكتب:

```bash
npm start
```

### ستراى هذا الإخراج إذا نجح:
```
╔════════════════════════════════════════════════════════════╗
║  🏛️  جامعة الأهلية - نظام متكامل                         ║
║  📱 University Integrated Management System                ║
║  ✅ الخادم يعمل بنجاح!                                    ║
╚════════════════════════════════════════════════════════════╝
📍 الرابط الأساسي: http://localhost:5000
🔌 API الأساسي: http://localhost:5000/api
🏥 فحص الخادم: http://localhost:5000/api/health
```

---

## ✅ الخطوة الخامسة: افتح النظام في المتصفح

انسخ الرابط التالي والصقه في متصفحك:

```
http://localhost:5000
```

---

## 🔐 تسجيل الدخول كمدير نظام

**اسم المستخدم:** `admin`  
**كلمة المرور:** `admin123`

---

## 🛠️ حل المشاكل الشائعة

### ❌ المشكلة: "MongoDB is not running"
**الحل:**
- على ويندوز: تأكد من تشغيل خدمة MongoDB من Services
- على Mac: جرّب `brew services start mongodb-community`
- على Linux: جرّب `sudo systemctl start mongod`

### ❌ المشكلة: "Port 5000 is already in use"
**الحل:**
غيّر رقم الميناء في ملف `.env`:
```
PORT=5001
```

### ❌ المشكلة: "npm command not found"
**الحل:**
- أعد تثبيت Node.js
- أغلق موجه الأوامر وافتحه من جديد

### ❌ المشكلة: الموقع فارغ أو به أخطاء
**الحل:**
1. افتح F12 (أدوات المطور)
2. اذهب إلى Console وشاهد الأخطاء
3. انسخ رسالة الخطأ واطلب مساعدة

---

## 📝 الأوامر المهمة

```bash
# تشغيل النظام
npm start

# تشغيل للتطوير مع تحديث تلقائي
npm run dev

# إيقاف النظام
Ctrl + C (في موجه الأوامر)

# تثبيت مكتبة جديدة
npm install package-name
```

---

## 📞 إذا لم ينجح معك

1. **تأكد من:** Node.js مثبت ✅ MongoDB يعمل ✅ أنت في المجلد الصحيح ✅
2. **جرّب:**
   ```bash
   npm install
   npm start
   ```
3. **اطلب المساعدة** مع صورة من رسالة الخطأ الكاملة

---

**النظام جاهز الآن! 🎉**
