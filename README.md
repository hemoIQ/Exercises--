# GymTracker

تطبيق لتتبع التمارين الرياضية مع دعم الوسائط (صور وفيديو) ونظام تحديث تلقائي عبر GitHub.

## المميزات
- إضافة أيام وتمارين مخصصة.
- حفظ البيانات محلياً (Offline First) باستخدام IndexedDB.
- دعم رفع الصور والفيديوهات للتمارين.
- واجهة عصرية ومتحركة.
- تحديثات تلقائية عبر GitHub.

## طريقة التثبيت والتشغيل
1. حمل ملف `app-debug.apk` من قسم Releases في GitHub (أو من Artifacts في Actions).
2. ثبت التطبيق على هاتفك الأندرويد.
3. استمتع بالتمرين!

## التطوير
لتشغيل المشروع محلياً:
```bash
npm install
npm run dev
```

لبناء ملف APK:
يتم البناء تلقائياً عبر GitHub Actions عند رفع أي تغيير على الـ Branch `main`.
يمكنك تحميل الـ APK من تبويب Actions في GitHub.

## إعداد التحديثات
يجب تغيير اسم المستخدم في ملف `src/utils/github.js` إلى اسم حسابك على GitHub ليعمل نظام التحقق من التحديثات بشكل صحيح.
`https://raw.githubusercontent.com/USER_NAME/GymTracker/main/package.json`
