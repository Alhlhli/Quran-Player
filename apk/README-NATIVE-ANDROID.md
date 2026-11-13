# تطبيق المصحف المرتل للأندرويد — نسخة أندرويد أصلية 100% (`Pure Native Java APK`)

تمت إعادة هندسة هذا المشروع بالكامل بلغة **Java Android Native SDK** بدون أي ملفات `HTML` أو `CSS` أو `JavaScript` وبدون `WebView`:
- **واجهة أندرويد أصلية بالكامل (`MainActivity.java` + `ThemeManager.java`):** مبنية بمكونات أندرويد الأصلية (`LinearLayout`, `ScrollView`, `Spinner`, `SeekBar`, `SpannableStringBuilder`, `AlertDialog`, `ImageView`) وتتكيف تلقائياً مع الهواتف (تبويبان: المشغل | المصحف) والأجهزة اللوحية والشاشات العريضة (شاشة منقسمة جنباً إلى جنب).
- **محرك صوتي أصلي (`android.media.MediaPlayer`):** يدعم التحكم بالسرعة (`PlaybackParams`)، التكرار، مؤقت النوم، إشعارات النظام، وأزرار الريموت في الشاشات الذكية (`Android TV`).
- **محرك عرض الـ 15 سطراً وخطوط التجويد الثنائية (`Typeface` + `patchCpalDarkTable`):** يقرأ مصفوفة `qcf_data.json` الأصلية ويحمّل خطوط الصفحات (`Typeface.createFromFile`) مع تعديل جدول `CPAL` الثنائي في الجافا لعكس اللون الأسود إلى أبيض في الثيمات الغامقة.
