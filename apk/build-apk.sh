#!/usr/bin/env bash
set -e
echo "===================================================================="
echo "  بناء تطبيق المصحف المرتل الشامل (Quran-Player-Universal.apk)"
echo "  متوافق مع جميع الجوالات والتابلت والشاشات (Android 5.0 - 16+)"
echo "===================================================================="
if [ -f "./gradlew" ]; then
    ./gradlew assembleRelease
else
    gradle assembleRelease
fi
cp -f app/build/outputs/apk/release/app-release.apk Quran-Player-Universal.apk
echo "✅ تم إنتاج ملف الـ APK الجاهز للتثبيت بنجاح: Quran-Player-Universal.apk"
