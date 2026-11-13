@echo off
chcp 65001 >nul
echo ====================================================================
echo   بناء تطبيق المصحف المرتل الشامل (Quran-Player-Universal.apk)
echo   متوافق مع جميع الجوالات والتابلت والشاشات (Android 5.0 - 16+)
echo ====================================================================
if exist gradlew.bat (
    call gradlew.bat assembleRelease
) else (
    gradle assembleRelease
)
if exist "app\build\outputs\apk\release\app-release.apk" (
    copy /Y "app\build\outputs\apk\release\app-release.apk" "Quran-Player-Universal.apk" >nul
    echo.
    echo [تم بنجاح] تم إنتاج ملف الـ APK الجاهز للتثبيت:
    echo Quran-Player-Universal.apk
)
pause
