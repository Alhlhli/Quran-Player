      /* =============================================================
         SURAH META: [ayahs, type]
      ============================================================= */
      // نوع السورة: [عدد الآيات, النوع] — 🕋=مكية  🕌=مدنية
      const SMETA_AR = [
        [7, '🕋 مكية'], [286, '🕌 مدنية'], [200, '🕌 مدنية'], [176, '🕌 مدنية'], [120, '🕌 مدنية'],
        [165, '🕋 مكية'], [206, '🕋 مكية'], [75, '🕌 مدنية'], [129, '🕌 مدنية'], [109, '🕋 مكية'],
        [123, '🕋 مكية'], [111, '🕋 مكية'], [43, '🕌 مدنية'], [52, '🕋 مكية'], [99, '🕋 مكية'],
        [128, '🕋 مكية'], [111, '🕋 مكية'], [110, '🕋 مكية'], [98, '🕋 مكية'], [135, '🕋 مكية'],
        [112, '🕋 مكية'], [78, '🕌 مدنية'], [118, '🕋 مكية'], [64, '🕌 مدنية'], [77, '🕋 مكية'],
        [227, '🕋 مكية'], [93, '🕋 مكية'], [88, '🕋 مكية'], [69, '🕋 مكية'], [60, '🕋 مكية'],
        [34, '🕋 مكية'], [30, '🕋 مكية'], [73, '🕌 مدنية'], [54, '🕋 مكية'], [45, '🕋 مكية'],
        [83, '🕋 مكية'], [182, '🕋 مكية'], [88, '🕋 مكية'], [75, '🕋 مكية'], [85, '🕋 مكية'],
        [54, '🕋 مكية'], [53, '🕋 مكية'], [89, '🕋 مكية'], [59, '🕋 مكية'], [37, '🕋 مكية'],
        [35, '🕋 مكية'], [38, '🕌 مدنية'], [29, '🕌 مدنية'], [18, '🕌 مدنية'], [45, '🕋 مكية'],
        [60, '🕋 مكية'], [49, '🕋 مكية'], [62, '🕋 مكية'], [55, '🕋 مكية'], [78, '🕋 مكية'],
        [96, '🕋 مكية'], [29, '🕌 مدنية'], [22, '🕌 مدنية'], [24, '🕌 مدنية'], [13, '🕌 مدنية'],
        [14, '🕌 مدنية'], [11, '🕌 مدنية'], [11, '🕌 مدنية'], [18, '🕌 مدنية'], [12, '🕌 مدنية'],
        [12, '🕌 مدنية'], [30, '🕋 مكية'], [52, '🕋 مكية'], [52, '🕋 مكية'], [44, '🕋 مكية'],
        [28, '🕋 مكية'], [28, '🕋 مكية'], [20, '🕋 مكية'], [56, '🕋 مكية'], [40, '🕋 مكية'],
        [31, '🕌 مدنية'], [50, '🕋 مكية'], [40, '🕋 مكية'], [46, '🕋 مكية'], [42, '🕋 مكية'],
        [29, '🕋 مكية'], [19, '🕋 مكية'], [36, '🕋 مكية'], [25, '🕋 مكية'], [22, '🕋 مكية'],
        [17, '🕋 مكية'], [19, '🕋 مكية'], [26, '🕋 مكية'], [30, '🕋 مكية'], [20, '🕋 مكية'],
        [15, '🕋 مكية'], [21, '🕋 مكية'], [11, '🕋 مكية'], [8, '🕋 مكية'], [8, '🕋 مكية'],
        [19, '🕋 مكية'], [5, '🕋 مكية'], [8, '🕌 مدنية'], [8, '🕌 مدنية'], [11, '🕋 مكية'],
        [11, '🕋 مكية'], [8, '🕋 مكية'], [3, '🕋 مكية'], [9, '🕋 مكية'], [5, '🕋 مكية'],
        [4, '🕋 مكية'], [7, '🕋 مكية'], [3, '🕋 مكية'], [6, '🕌 مدنية'], [3, '🕌 مدنية'],
        [5, '🕋 مكية'], [4, '🕋 مكية'], [5, '🕋 مكية'], [6, '🕋 مكية']
      ];
      const SMETA_EN = [
        [7, '🕋 Meccan'], [286, '🕌 Medinan'], [200, '🕌 Medinan'], [176, '🕌 Medinan'], [120, '🕌 Medinan'],
        [165, '🕋 Meccan'], [206, '🕋 Meccan'], [75, '🕌 Medinan'], [129, '🕌 Medinan'], [109, '🕋 Meccan'],
        [123, '🕋 Meccan'], [111, '🕋 Meccan'], [43, '🕌 Medinan'], [52, '🕋 Meccan'], [99, '🕋 Meccan'],
        [128, '🕋 Meccan'], [111, '🕋 Meccan'], [110, '🕋 Meccan'], [98, '🕋 Meccan'], [135, '🕋 Meccan'],
        [112, '🕋 Meccan'], [78, '🕌 Medinan'], [118, '🕋 Meccan'], [64, '🕌 Medinan'], [77, '🕋 Meccan'],
        [227, '🕋 Meccan'], [93, '🕋 Meccan'], [88, '🕋 Meccan'], [69, '🕋 Meccan'], [60, '🕋 Meccan'],
        [34, '🕋 Meccan'], [30, '🕋 Meccan'], [73, '🕌 Medinan'], [54, '🕋 Meccan'], [45, '🕋 Meccan'],
        [83, '🕋 Meccan'], [182, '🕋 Meccan'], [88, '🕋 Meccan'], [75, '🕋 Meccan'], [85, '🕋 Meccan'],
        [54, '🕋 Meccan'], [53, '🕋 Meccan'], [89, '🕋 Meccan'], [59, '🕋 Meccan'], [37, '🕋 Meccan'],
        [35, '🕋 Meccan'], [38, '🕌 Medinan'], [29, '🕌 Medinan'], [18, '🕌 Medinan'], [45, '🕋 Meccan'],
        [60, '🕋 Meccan'], [49, '🕋 Meccan'], [62, '🕋 Meccan'], [55, '🕋 Meccan'], [78, '🕋 Meccan'],
        [96, '🕋 Meccan'], [29, '🕌 Medinan'], [22, '🕌 Medinan'], [24, '🕌 Medinan'], [13, '🕌 Medinan'],
        [14, '🕌 Medinan'], [11, '🕌 Medinan'], [11, '🕌 Medinan'], [18, '🕌 Medinan'], [12, '🕌 Medinan'],
        [12, '🕌 Medinan'], [30, '🕋 Meccan'], [52, '🕋 Meccan'], [52, '🕋 Meccan'], [44, '🕋 Meccan'],
        [28, '🕋 Meccan'], [28, '🕋 Meccan'], [20, '🕋 Meccan'], [56, '🕋 Meccan'], [40, '🕋 Meccan'],
        [31, '🕌 Medinan'], [50, '🕋 Meccan'], [40, '🕋 Meccan'], [46, '🕋 Meccan'], [42, '🕋 Meccan'],
        [29, '🕋 Meccan'], [19, '🕋 Meccan'], [36, '🕋 Meccan'], [25, '🕋 Meccan'], [22, '🕋 Meccan'],
        [17, '🕋 Meccan'], [19, '🕋 Meccan'], [26, '🕋 Meccan'], [30, '🕋 Meccan'], [20, '🕋 Meccan'],
        [15, '🕋 Meccan'], [21, '🕋 Meccan'], [11, '🕋 Meccan'], [8, '🕋 Meccan'], [8, '🕋 Meccan'],
        [19, '🕋 Meccan'], [5, '🕋 Meccan'], [8, '🕌 Medinan'], [8, '🕌 Medinan'], [11, '🕋 Meccan'],
        [11, '🕋 Meccan'], [8, '🕋 Meccan'], [3, '🕋 Meccan'], [9, '🕋 Meccan'], [5, '🕋 Meccan'],
        [4, '🕋 Meccan'], [7, '🕋 Meccan'], [3, '🕋 Meccan'], [6, '🕌 Medinan'], [3, '🕌 Medinan'],
        [5, '🕋 Meccan'], [4, '🕋 Meccan'], [5, '🕋 Meccan'], [6, '🕋 Meccan']
      ];

      let surahs = [
        { n: 1, name: "الفاتحة" }, { n: 2, name: "البقرة" }, { n: 3, name: "آل عمران" },
        { n: 4, name: "النساء" }, { n: 5, name: "المائدة" }, { n: 6, name: "الأنعام" },
        { n: 7, name: "الأعراف" }, { n: 8, name: "الأنفال" }, { n: 9, name: "التوبة" },
        { n: 10, name: "يونس" }, { n: 11, name: "هود" }, { n: 12, name: "يوسف" },
        { n: 13, name: "الرعد" }, { n: 14, name: "إبراهيم" }, { n: 15, name: "الحجر" },
        { n: 16, name: "النحل" }, { n: 17, name: "الإسراء" }, { n: 18, name: "الكهف" },
        { n: 19, name: "مريم" }, { n: 20, name: "طه" }, { n: 21, name: "الأنبياء" },
        { n: 22, name: "الحج" }, { n: 23, name: "المؤمنون" }, { n: 24, name: "النور" },
        { n: 25, name: "الفرقان" }, { n: 26, name: "الشعراء" }, { n: 27, name: "النمل" },
        { n: 28, name: "القصص" }, { n: 29, name: "العنكبوت" }, { n: 30, name: "الروم" },
        { n: 31, name: "لقمان" }, { n: 32, name: "السجدة" }, { n: 33, name: "الأحزاب" },
        { n: 34, name: "سبأ" }, { n: 35, name: "فاطر" }, { n: 36, name: "يس" },
        { n: 37, name: "الصافات" }, { n: 38, name: "ص" }, { n: 39, name: "الزمر" },
        { n: 40, name: "غافر" }, { n: 41, name: "فصلت" }, { n: 42, name: "الشورى" },
        { n: 43, name: "الزخرف" }, { n: 44, name: "الدخان" }, { n: 45, name: "الجاثية" },
        { n: 46, name: "الأحقاف" }, { n: 47, name: "محمد" }, { n: 48, name: "الفتح" },
        { n: 49, name: "الحجرات" }, { n: 50, name: "ق" }, { n: 51, name: "الذاريات" },
        { n: 52, name: "الطور" }, { n: 53, name: "النجم" }, { n: 54, name: "القمر" },
        { n: 55, name: "الرحمن" }, { n: 56, name: "الواقعة" }, { n: 57, name: "الحديد" },
        { n: 58, name: "المجادلة" }, { n: 59, name: "الحشر" }, { n: 60, name: "الممتحنة" },
        { n: 61, name: "الصف" }, { n: 62, name: "الجمعة" }, { n: 63, name: "المنافقون" },
        { n: 64, name: "التغابن" }, { n: 65, name: "الطلاق" }, { n: 66, name: "التحريم" },
        { n: 67, name: "الملك" }, { n: 68, name: "القلم" }, { n: 69, name: "الحاقة" },
        { n: 70, name: "المعارج" }, { n: 71, name: "نوح" }, { n: 72, name: "الجن" },
        { n: 73, name: "المزمل" }, { n: 74, name: "المدثر" }, { n: 75, name: "القيامة" },
        { n: 76, name: "الإنسان" }, { n: 77, name: "المرسلات" }, { n: 78, name: "النبأ" },
        { n: 79, name: "النازعات" }, { n: 80, name: "عبس" }, { n: 81, name: "التكوير" },
        { n: 82, name: "الانفطار" }, { n: 83, name: "المطففين" }, { n: 84, name: "الانشقاق" },
        { n: 85, name: "البروج" }, { n: 86, name: "الطارق" }, { n: 87, name: "الأعلى" },
        { n: 88, name: "الغاشية" }, { n: 89, name: "الفجر" }, { n: 90, name: "البلد" },
        { n: 91, name: "الشمس" }, { n: 92, name: "الليل" }, { n: 93, name: "الضحى" },
        { n: 94, name: "الشرح" }, { n: 95, name: "التين" }, { n: 96, name: "العلق" },
        { n: 97, name: "القدر" }, { n: 98, name: "البينة" }, { n: 99, name: "الزلزلة" },
        { n: 100, name: "العاديات" }, { n: 101, name: "القارعة" }, { n: 102, name: "التكاثر" },
        { n: 103, name: "العصر" }, { n: 104, name: "الهمزة" }, { n: 105, name: "الفيل" },
        { n: 106, name: "قريش" }, { n: 107, name: "الماعون" }, { n: 108, name: "الكوثر" },
        { n: 109, name: "الكافرون" }, { n: 110, name: "النصر" }, { n: 111, name: "المسد" },
        { n: 112, name: "الإخلاص" }, { n: 113, name: "الفلق" }, { n: 114, name: "الناس" }
      ];

      /* ============ API ============ */
      const API = {
        ar: { s: 'https://www.mp3quran.net/api/v3/suwar?language=ar', r: 'https://www.mp3quran.net/api/v3/reciters?language=ar' },
        en: { s: 'https://www.mp3quran.net/api/v3/suwar?language=eng', r: 'https://www.mp3quran.net/api/v3/reciters?language=eng' }
      };

      /* ============ TRANSLATIONS ============ */
      const T = {
        ar: {
          play: '▶ تشغيل', pause: '⏸ إيقاف',
          repLabel: '🔄 ', repModes: ['٠', '١', '٢', '٣', '∞'],
          statusDef: 'الرجاء اختيار القارئ والمصحف والسورة.',
          readySt: (s, r, m) => `🎧 ${s} — ${r}`,
          dlPfx: '📥 تحميل: ',
          srchPh: '🔍 ابحث...', srchNote: '💡 اكتب حرفاً للتصفية',
          recLbl: 'اختر القارئ:', moshLbl: 'اختر المصحف:', surahLbl: 'اختر السورة:',
          volLbl: '🔊', spdLbl: 'سرعة:', stopLbl: 'إيقاف بعد:',
          stopOpts: {
            none: 'لا يوجد', endSurah: 'انتهاء السورة', endMoshaf: 'انتهاء المصحف',
            '5': '5 دق', '10': '10 دق', '15': '15 دق', '20': '20 دق', '30': '30 دق',
            '45': '45 دق', '60': 'ساعة', '120': 'ساعتان', '180': '3 ساعات',
            '240': '4 ساعات', '300': '5 ساعات', '360': '6 ساعات', '420': '7 ساعات'
          },
          randRec: 'قارئ عشوائي', randSurah: 'سورة عشوائية', favTitle: 'مفضل',
          bmTitle: 'إضافة إشارة', bmHeader: '📌 الإشارات المرجعية',
          statsHeader: '📊 إحصائيات', statCountLbl: 'جلسات', statMinLbl: 'دقيقة',
          notifFin: (n) => `انتهت تلاوة سورة ${n}`, notifTimer: 'انتهى المؤقّت.',
          bmPrompt: 'ملاحظة / رقم آية (اختياري):', bmAdded: '✅ إشارة مرجعية مضافة.',
          favSet: '⭐ تم تعيين المفضل.', favUnset: 'تم إزالة المفضل.',
          dlSurah: '📥 تحميل السورة', hideDl: '🔼 إخفاء',
          recentHeader: '⏱️ آخر ما استمعت إليه',
          ayahsLbl: 'آية', appTitle: 'مشغل القرآن الكريم',
          expLbl: '📤 تصدير', stopTimerLbl: 'ينتهي بعد:',
          shareDlgTitle: 'مشاركة', shareDeepLbl: 'مشاركة التلاوة في التطبيق',
          shareDeepSub: 'يفتح نفس القارئ والسورة والآية مباشرة',
          shareAyahLbl: 'مشاركة نص الآية الحالية',
          shareAyahSub: 'نسخ ومشاركة الآية بالرسم العثماني مع الرابط',
          shareWebLbl: 'مشاركة رابط التطبيق العام',
          shareWebSub: 'يفتح الصفحة الرئيسية لمشغل القرآن الكريم', shareSurahLbl: 'مشاركة ملف الصوت المباشر (MP3)',
          shareSurahSub: 'رابط استماع وتحميل مباشر لملف السورة', shareCancelLbl: 'إلغاء',
          installTitle: 'ثبّت التطبيق', installSub: 'استمع من شاشتك الرئيسية',
          installBtn: 'تثبيت',
          dInstallTitle: 'ثبّت التطبيق على حاسوبك',
          dInstallSub: 'يعمل بدون إنترنت — وصول سريع من سطح المكتب',
          dInstallBtn: '📥 تثبيت',
          rangeFromLbl: 'من:', rangeToLbl: 'إلى:',
          allSurahsTitle: '📚 قائمة السور', allLinksTitle: '📥 روابط تحميل السور',
          cardsBtn: '🃏 بطاقات', linksBtn: '🔗 روابط',
          dlHint: '💡 انقر الرابط لتحميل السورة',
          clearBm: '🗑️ مسح الإشارات', clearStats: '🗑️ مسح الإحصائيات',
          mtabPlayer: '🎵 المشغل', mtabText: '📖 النص',
          projRadio: '📻 راديو القرآن', projDb: '🗄️ قاعدة بيانات القرآن',
          recSearchPh: '🔍 بحث...',
          qcfLoading: n => n ? `⏳ تحميل خطوط المصحف… ${n}` : '⏳ تحميل خطوط المصحف…',
          qcfReady: '🕋 خطوط المصحف جاهزة',
          qcfPartial: '⚠️ تعذّر تحميل بعض الصفحات — عُرضت آياتها بالنص العادي',
          qcfError: '⚠️ تعذّر تحميل خطوط المصحف — عُرض النص العادي',
          tajweedLoading: n => n ? `⏳ تحميل خط التجويد… ${n}` : '⏳ تحميل خط التجويد…',
          tajweedReady: '🎨 خط التجويد جاهز',
          tajweedPartial: '⚠️ تعذّر تحميل بعض صفحات خط التجويد — عُرضت آياتها بالنص العادي',
          tajweedError: '⚠️ تعذّر تحميل خط التجويد — عُرض النص العادي',
          copiedOk: '✅ تم النسخ إلى الحافظة',
          qpTitle: 'القرآن الكريم',
          qpTabText: '📖 النص', qpTabInfo: 'ℹ️ المعلومات', qpTabMushaf: '🖼️ المصحف',
          optUthmani: '🕌 رسم عثماني', optPrint: '📝 نص مطبوع', optSimple: '✏️ نص عادي', optQcf: '🕋 خط المصحف', optTajweed: '🎨 خط التجويد',
          optBlock: '≡ كل آية بسطر', optInline: '⋯ متتاليات',
          qpSearchPh: '🔍 ابحث في السورة (بدون حركات) أو برقم الآية...',
          qpAutoScrollLbl: 'متزامن تقريباً مع التلاوة',
          qpShare: 'مشاركة', qpClear: 'مسح البيانات', qpClose: 'إغلاق', qpSettings: 'الإعدادات', qpSearchToggle: 'بحث في السورة', qpCornerToggle: 'إظهار / إخفاء الأزرار والأدوات',
          qpFontMinus: 'تصغير خط النص', qpFontPlus: 'تكبير خط النص',
          radio: '📻 مشروع القرآن راديو'
        },
        en: {
          play: '▶ Play', pause: '⏸ Pause',
          repLabel: '🔄 ', repModes: ['0', '1', '2', '3', '∞'],
          statusDef: 'Please select a reciter, moshaf and surah.',
          readySt: (s, r, m) => `🎧 ${s} — ${r}`,
          dlPfx: '📥 Download: ',
          srchPh: '🔍 Search...', srchNote: '💡 Type to filter',
          recLbl: 'Select reciter:', moshLbl: 'Select moshaf:', surahLbl: 'Select surah:',
          volLbl: '🔊', spdLbl: 'Speed:', stopLbl: 'Stop after:',
          stopOpts: {
            none: 'None', endSurah: 'End of surah', endMoshaf: 'End of moshaf',
            '5': '5 min', '10': '10 min', '15': '15 min', '20': '20 min', '30': '30 min',
            '45': '45 min', '60': '1 hr', '120': '2 hr', '180': '3 hr',
            '240': '4 hr', '300': '5 hr', '360': '6 hr', '420': '7 hr'
          },
          randRec: 'Random reciter', randSurah: 'Random surah', favTitle: 'Favorite',
          bmTitle: 'Add bookmark', bmHeader: '📌 Bookmarks',
          statsHeader: '📊 Stats', statCountLbl: 'sessions', statMinLbl: 'min',
          notifFin: (n) => `Finished playing ${n}`, notifTimer: 'Timer finished.',
          bmPrompt: 'Note / verse number (optional):', bmAdded: '✅ Bookmark added.',
          favSet: '⭐ Added to favorites.', favUnset: 'Removed from favorites.',
          dlSurah: '📥 Download', hideDl: '🔼 Hide',
          recentHeader: '⏱️ Recently played',
          ayahsLbl: 'verses', appTitle: 'Quran Player',
          expLbl: '📤 Export', stopTimerLbl: 'Stops in:',
          shareDlgTitle: 'Share', shareDeepLbl: 'Share recitation in app',
          shareDeepSub: 'Opens the exact reciter, surah & ayah',
          shareAyahLbl: 'Share current ayah text',
          shareAyahSub: 'Copy or share Uthmani verse text with link',
          shareWebLbl: 'Share general app link',
          shareWebSub: 'Opens Quran Player home page', shareSurahLbl: 'Share direct MP3 audio link',
          shareSurahSub: 'Direct listen / download MP3 file', shareCancelLbl: 'Cancel',
          installTitle: 'Install App', installSub: 'Listen from your home screen',
          installBtn: 'Install',
          dInstallTitle: 'Install App on Desktop',
          dInstallSub: 'Works offline — quick access from your desktop',
          dInstallBtn: '📥 Install',
          rangeFromLbl: 'From:', rangeToLbl: 'To:',
          allSurahsTitle: '📚 Surah List', allLinksTitle: '📥 Surah Download Links',
          cardsBtn: '🃏 Cards', linksBtn: '🔗 Links',
          dlHint: '💡 Click the link to download the surah',
          clearBm: '🗑️ Clear Bookmarks', clearStats: '🗑️ Clear Stats',
          mtabPlayer: '🎵 Player', mtabText: '📖 Text',
          projRadio: '📻 Quran Radio', projDb: '🗄️ Quran Database',
          recSearchPh: '🔍 Search...',
          qcfLoading: n => n ? `⏳ Loading mushaf fonts… ${n}` : '⏳ Loading mushaf fonts…',
          qcfReady: '🕋 Mushaf fonts ready',
          qcfPartial: '⚠️ Some pages failed — those verses shown as plain text',
          qcfError: '⚠️ Mushaf fonts failed to load — plain text shown',
          tajweedLoading: n => n ? `⏳ Loading tajweed font… ${n}` : '⏳ Loading tajweed font…',
          tajweedReady: '🎨 Tajweed font ready',
          tajweedPartial: '⚠️ Some tajweed pages failed to load — plain text shown',
          tajweedError: '⚠️ Tajweed font failed to load — plain text shown',
          copiedOk: '✅ Copied to clipboard',
          qpTitle: 'The Noble Quran',
          qpTabText: '📖 Text', qpTabInfo: 'ℹ️ Info', qpTabMushaf: '🖼️ Mushaf',
          optUthmani: '🕌 Uthmani', optPrint: '📝 Print', optSimple: '✏️ Plain', optQcf: '🕋 Mushaf font', optTajweed: '🎨 Tajweed font',
          optBlock: '≡ One ayah per line', optInline: '⋯ Flowing text',
          qpSearchPh: '🔍 Search in surah (without diacritics) or by ayah number...',
          qpAutoScrollLbl: 'Roughly synced with the recitation',
          qpShare: 'Share', qpClear: 'Clear data', qpClose: 'Close', qpSettings: 'Settings', qpSearchToggle: 'Search in surah', qpCornerToggle: 'Show / hide buttons & tools',
          qpFontMinus: 'Decrease text size', qpFontPlus: 'Increase text size',
          radio: '📻 Quran Radio project'
        }
      };

      /* ============ STATE ============ */
      let lang = 'ar', theme = 'default';
      let reciters = [], rIdx = null, mIdx = null, sIdx = null;
      let repeatMode = 0, repeatCount = 0, autoNext = true;
      let isPlaying = false, isMuted = false, volBefore = 70;
      let stopTimer = null, stopEndTime = null, stopTimerTick = null;
      let favR = null, favM = null;
      let bookmarks = [], stats = { count: 0, times: {}, total: 0 };
      let recent = [];
      let dragging = false;
      let deferredPrompt = null;
      let qcfChipState = '', qcfChipProgress = '';
      let autoPlayOnChange = (localStorage.getItem('autoPlayOnChange') ?? '1') === '1';
      let playReqId = 0;

      function escHTML(str) {
        return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      /* ============ PRECISION AYAH TIMINGS ENGINE ============ */
      const PRECISION_RECITERS = [
        { qid: 4, ar: "أبو بكر الشاطري", en: "Abu Bakr al-Shatri", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 19, ar: "أحمد بن علي العجمي", en: "Ahmed Al-Ajamy", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 13, ar: "سعد الغامدي", en: "Saad Al-Ghamdi", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 10, ar: "سعود الشريم", en: "Sa`ud ash-Shuraym", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 17, ar: "سهل ياسين", en: "Sahl Yasin", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 43, ar: "صلاح البدير", en: "Salah Al-Budair", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 18, ar: "صلاح بو خاطر", en: "Salah Bukhatir", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 2, ar: "عبد الباسط عبد الصمد (مرتل)", en: "AbdulBaset AbdulSamad (Murattal)", m_ar: "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", m_en: "Murattal (Precise Verse Sync 🎯)" },
        { qid: 1, ar: "عبد الباسط عبد الصمد (مجود)", en: "AbdulBaset AbdulSamad (Tajweed)", m_ar: "المصحف المجود (مزامنة دقيقة 🎯)", m_en: "Mujawwad (Precise Verse Sync 🎯)" },
        { qid: 3, ar: "عبد الرحمن السديس", en: "Abdur-Rahman as-Sudais", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 11, ar: "عبد المحسن القاسم", en: "Abdul Muhsin al-Qasim", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 14, ar: "فارس عباد", en: "Fares Abbad", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" },
        { qid: 9, ar: "محمد صديق المنشاوي (مرتل)", en: "Mohamed Siddiq al-Minshawi (Murattal)", m_ar: "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", m_en: "Murattal (Precise Verse Sync 🎯)" },
        { qid: 8, ar: "محمد صديق المنشاوي (مجود)", en: "Mohamed Siddiq al-Minshawi (Tajweed)", m_ar: "المصحف المجود — تلاوة نقية", m_en: "Mujawwad (High Quality)", audioServer: "https://cdn.mp3quran.net/audio/muhammad-minshawi/r2/" },
        { qid: 6, ar: "محمود خليل الحصري (مرتل)", en: "Mahmoud Khalil Al-Husary (Murattal)", m_ar: "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", m_en: "Murattal (Precise Verse Sync 🎯)" },
        { qid: 12, ar: "محمود خليل الحصري (المعلم)", en: "Mahmoud Khalil Al-Husary (Teacher)", m_ar: "المصحف المعلم (مزامنة دقيقة 🎯)", m_en: "Muallim (Precise Verse Sync 🎯)" },
        { qid: 7, ar: "مشاري راشد العفاسي", en: "Mishari Rashid al-`Afasy", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Murattal (Precise Verse Sync 🎯)" },
        { qid: 5, ar: "هاني الرفاعي", en: "Hani ar-Rifai", m_ar: "حفص عن عاصم (مزامنة دقيقة 🎯)", m_en: "Hafs an Asim (Precise Verse Sync 🎯)" }
      ];

      let currentAyahTimestamps = null;
      let precisionAudioUrl = null;
      let pendingResumeAyah = null;
      const timestampsCache = new Map();

      /* بحث ثنائي موحّد للعثور على رقم الآية عند الزمن بالمللي ثانية */
      function findAyahAtMs(curMs) {
        if (!currentAyahTimestamps || !currentAyahTimestamps.length) return null;
        let low = 0, high = currentAyahTimestamps.length - 1;
        while (low <= high) {
          const mid = (low + high) >> 1;
          const seg = currentAyahTimestamps[mid];
          if (curMs >= seg.timestamp_from && curMs < seg.timestamp_to) {
            return parseInt(seg.verse_key.split(':')[1], 10);
          }
          if (curMs < seg.timestamp_from) high = mid - 1;
          else low = mid + 1;
        }
        const last = currentAyahTimestamps[currentAyahTimestamps.length - 1];
        if (curMs >= last.timestamp_from) {
          return parseInt(last.verse_key.split(':')[1], 10);
        }
        return null;
      }

      /* الحصول على رقم الآية الحالية أثناء الاستماع بدقة */
      function getCurrentAyahNumber() {
        if (!audio || (!audio.currentTime && audio.currentTime !== 0)) return null;
        if (audio.currentTime <= 0 && isNaN(audio.duration)) return null;
        const exact = findAyahAtMs(Math.floor((audio.currentTime || 0) * 1000));
        if (exact !== null) return exact;
        if (audio.duration && ayahsData && ayahsData.length) {
          const ratio = Math.min(1, Math.max(0, audio.currentTime / audio.duration));
          return Math.min(ayahsData.length, Math.max(1, Math.floor(ratio * ayahsData.length) + 1));
        }
        return null;
      }

      function getPrecisionReciters(currentLang) {
        const isAr = currentLang !== 'en';
        const allSurahsList = Array.from({ length: 114 }, (_, i) => i + 1).join(',');
        return PRECISION_RECITERS.map(pr => ({
          id: `precision_${pr.qid}`,
          name: (isAr ? pr.ar : pr.en) + ' 🎯',
          cleanName: isAr ? pr.ar : pr.en,
          isPrecision: true,
          precisionQid: pr.qid,
          audioServer: pr.audioServer || null,
          moshaf: [
            {
              id: `m_prec_${pr.qid}`,
              name: isAr ? pr.m_ar : pr.m_en,
              server: pr.audioServer || `https://api.quran.com/api/v4/chapter_recitations/${pr.qid}/`,
              surah_total: 114,
              surah_list: allSurahsList,
              isPrecision: true,
              precisionQid: pr.qid
            }
          ]
        }));
      }

      function mergeReciters(rawList, currentLang) {
        const prec = getPrecisionReciters(currentLang);
        const pure = (rawList || []).filter(r => r && !r.isPrecision && !String(r.id || '').startsWith('precision_'));
        return [...prec, ...pure];
      }

      async function fetchPrecisionAudioData(qid, surahN) {
        const cacheKey = `${qid}_${surahN}`;
        if (timestampsCache.has(cacheKey)) {
          return timestampsCache.get(cacheKey);
        }

        // معالجة خاصة للشيخ المنشاوي مجود (سيرفر صوتي نقي وموثوق من mp3quran)
        if (qid === 8) {
          const sPadded = String(surahN).padStart(3, '0');
          const result = {
            audioUrl: `https://cdn.mp3quran.net/audio/muhammad-minshawi/r2/${sPadded}.mp3`,
            timestamps: []
          };
          timestampsCache.set(cacheKey, result);
          return result;
        }

        try {
          const lsCached = lsJSON('ts_' + cacheKey);
          if (lsCached && lsCached.audioUrl) {
            timestampsCache.set(cacheKey, lsCached);
            return lsCached;
          }
        } catch (e) { }

        try {
          const resp = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${qid}/${surahN}?segments=true`);
          if (!resp.ok) throw new Error('Segments API failed');
          const data = await resp.json();
          const af = data.audio_file;
          if (af && af.audio_url) {
            // تنظيف الرابط وإزالة أي شرطات مكررة //
            const cleanUrl = af.audio_url.replace(/([^:])\/\/+/g, '$1/');
            const result = {
              audioUrl: cleanUrl,
              timestamps: af.timestamps || []
            };
            timestampsCache.set(cacheKey, result);
            try { lsSave('ts_' + cacheKey, JSON.stringify(result)); } catch (e) { }
            return result;
          }
        } catch (err) {
          console.warn('Precision segments fetch fallback:', err);
        }
        return null;
      }

      /* ============ TOASTS (إشعارات شفافة وذكية) ============ */
      let toastTimer = null;
      function showToast(msg, type, duration = 3000) {
        const host = $('toastHost');
        if (!host) { if (statusDiv) statusDiv.textContent = msg; return; }
        host.querySelectorAll('.toast').forEach(t => t.remove());
        const el = document.createElement('div');
        el.className = 'toast' + (type ? ' toast-' + type : '');
        el.setAttribute('role', 'status');
        el.textContent = msg;
        el.title = lang === 'ar' ? 'انقر للإغلاق السريع' : 'Click to dismiss';
        el.onclick = () => {
          clearTimeout(toastTimer);
          el.classList.remove('show');
          setTimeout(() => { try { el.remove(); } catch (e) { } }, 200);
        };
        host.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          el.classList.remove('show');
          setTimeout(() => { try { el.remove(); } catch (e) { } }, 250);
        }, duration);
      }

      /* ============ DOM ============ */
      const $ = id => document.getElementById(id);
      const audio = $('audio');
      const recSel = $('reciter'), moshSel = $('moshaf'), surahSel = $('surah');
      const statusDiv = $('status');
      const playBtn = $('playBtn'), repBtn = $('repeatBtn');
      const prevBtn = $('prevBtn'), nextBtn = $('nextBtn'), muteBtn = $('muteBtn');
      const volCtrl = $('volCtrl'), volVal = $('volVal');
      const speedCtrl = $('speedCtrl'), speedVal = $('speedVal');
      const stopSel = $('stopAfter');
      const stopTimerDisplay = $('stopTimerDisplay');
      const stopTimerClock = $('stopTimerClock');
      const stopTimerLabel = $('stopTimerLabel');
      const stopCancelBtn = $('stopCancelBtn');
      const progTrack = $('progTrack'), progThumb = $('progThumb');
      const tElapsed = $('tElapsed'), tRemaining = $('tRemaining');
      const npCard = $('npCard'), eqWrap = $('eqWrap');
      const npSurah = $('npSurah'), npReciter = $('npReciter'), npBadges = $('npBadges');
      const surahSearch = $('surahSearch'), recSearch = $('reciterSearch');
      const dlBtn = $('dlBtn'); // dlAllBtnCards/dlAllBtnLinks declared below
      const dlSection = $('dlSection'), allSection = $('allSection');
      const dlLink = $('dlLink'), allList = $('allList');
      const bmBtn = $('bmBtn'), bmSection = $('bmSection'), bmList = $('bmList');
      const recentSection = $('recentSection'), recentList = $('recentList');
      const statsSection = $('statsSection');
      const themeBtn = $('themeBtn'), paletteBtn = $('paletteBtn'), palettePanel = $('palettePanel');
      const langBtn = $('langBtn'), shareBtn = $('shareBtn'), infoBtn = $('infoBtn');
      const shortcutsPanel = $('shortcutsPanel');
      const shareOverlay = $('shareOverlay');
      const installBanner = $('installBanner'), installBtn = $('installBtn'), installClose = $('installClose');
      const expBtn = $('expBtn');
      const randRecBtn = $('randRecBtn'), randSurahBtn = $('randSurahBtn'), favBtn = $('favBtn');
      // Quran text panel
      const textViewBtn = $('textViewBtn');
      const appLayout = $('appLayout');
      const quranPanel = $('quranPanel');
      const qpClose = $('qpClose');
      const qpBody = $('qpBody');
      const qpSearchBar = $('qpSearchBar');
      const qpTitle = $('qpTitle');
      const qpMeta = $('qpMeta');
      const qpSearch = $('qpSearch');
      const qpReciterSel = $('qpReciterSel'), qpSurahSel = $('qpSurahSel');
      const qpSearchToggleBtn = $('qpSearchToggleBtn'), qpSettingsBtn = $('qpSettingsBtn');
      const qpCornerToggleBtn = $('qpCornerToggleBtn');
      const qpMobFontMinus = $('qpMobFontMinus'), qpMobFontPlus = $('qpMobFontPlus');
      const qpAutoScroll = $('qpAutoScroll');
      // حالة لوحة النص — تُعلَن هنا، تُعرَّف في قسم QURAN PANEL
      let textPanelOpen = false;
      // Desktop install bar
      const desktopInstallBar = $('desktopInstallBar');
      const dInstallBtn = $('dInstallBtn');
      const dInstallClose = $('dInstallClose');

      /* ============ PWA ============ */
      // المانيفست والأيقونة و Service Worker ملفات حقيقية (manifest.json / icon.svg / sw.js)
      // — التسجيل من blob: URL مرفوض في المتصفحات ولا يعمل.
      (() => {
        if ('serviceWorker' in navigator && location.protocol !== 'file:') {
          navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW:', e));
        }

        // Install prompt
        window.addEventListener('beforeinstallprompt', e => {
          e.preventDefault(); deferredPrompt = e;
          installBanner.classList.add('show'); // mobile bottom banner
          if (desktopInstallBar) desktopInstallBar.classList.add('show'); // desktop bar
        });
        window.addEventListener('appinstalled', () => {
          installBanner.classList.remove('show');
          if (desktopInstallBar) desktopInstallBar.classList.remove('show');
        });
      })();

      /* ============ SPLASH ============ */
      window.addEventListener('load', () => {
        setTimeout(() => {
          $('splash').classList.add('hide');
          setTimeout(() => $('splash').remove(), 500);
        }, 700);
      });

      /* ============ LOAD RECITERS ============ */
      // قراءة JSON من localStorage بأمان
      function lsJSON(k) { try { return JSON.parse(ls(k) || 'null'); } catch (e) { return null; } }

      // تهيئة الواجهة بعد توفر قائمة القراء (من الكاش أو الشبكة)
      function initAfterReciters() {
        buildReciterList();
        updateStopOpts(); // الخيارات أولاً كي تستعيد الإعدادات المحفوظة قيمها
        loadSettings();
        migrateStopDefault(); // الافتراضي «لا يوجد»
        updateRecOpts();
        loadBookmarks(); loadStats(); loadRecent();
        updateFavIcon();
        updateUI();
        if (typeof initTajweedLegend === 'function') initTajweedLegend();
      }

      async function loadReciters() {
        const saved = ls('language'); if (saved === 'en' || saved === 'ar') lang = saved;

        // عرض فوري لقائمة القرّاء المعتمدين أولاً لضمان عدم بقاء القائمة فارغة نهائياً
        reciters = getPrecisionReciters(lang);
        buildReciterList();

        // 1) عرض فوري من الكاش المحلي إن وُجد (stale-while-revalidate)
        const cacheKey = 'recitersCache_' + lang;
        const cached = lsJSON(cacheKey);
        let usedCache = false;
        const cachedList = Array.isArray(cached) ? cached : (cached && Array.isArray(cached.reciters) ? cached.reciters : null);
        if (cachedList && cachedList.length) {
          reciters = mergeReciters(cachedList, lang);
          usedCache = true;
          initAfterReciters();
        }

        // 2) جلب نسخة حديثة من الشبكة وتحديث الكاش
        try {
          const resp = await fetch(API[lang].r);
          const data = await resp.json();
          const fresh = Array.isArray(data.reciters) ? data.reciters : (Array.isArray(data) ? data : (data.data || []));
          if (Array.isArray(fresh) && fresh.length) {
            const mergedFresh = mergeReciters(fresh, lang);
            const freshStr = JSON.stringify(mergedFresh);
            if (!usedCache) {
              reciters = mergedFresh;
              lsSave(cacheKey, freshStr);
              initAfterReciters();
            } else if (freshStr !== JSON.stringify(cached)) {
              lsSave(cacheKey, freshStr);
              // لا نستبدل القائمة أثناء استخدامها — فقط إذا لم يبدأ المستخدم اختياراً
              if (!isPlaying && rIdx === null) { reciters = mergedFresh; buildReciterList(); }
            }
          }
        } catch (e) {
          if (!usedCache) {
            reciters = getPrecisionReciters(lang);
            initAfterReciters();
          }
        }

        await loadSurahNames();
        restoreStopTimer();
        const handledShared = handleHashShortcuts();
        if (!handledShared) setTimeout(() => autoStartSession(), 350);
      }

      function buildReciterList(filterQ = '') {
        const t = T[lang];
        recSel.innerHTML = '';
        const ph = document.createElement('option'); ph.value = ''; ph.textContent = t.recLbl.replace(/[:：]$/, '');
        recSel.appendChild(ph);
        reciters.forEach((r, i) => {
          if (!r || !r.name) return;
          if (filterQ && !r.name.toLowerCase().includes(filterQ.toLowerCase())) return;
          const opt = document.createElement('option'); opt.value = i;
          opt.textContent = (favR === i ? '⭐ ' : '') + r.name;
          recSel.appendChild(opt);
        });
        if (rIdx !== null && rIdx >= 0 && rIdx < reciters.length) {
          recSel.value = rIdx;
        } else {
          recSel.value = '';
          if (rIdx !== null && (rIdx < 0 || rIdx >= reciters.length)) rIdx = null;
        }
        syncMobileSelectors();
      }

      /* مزامنة القوائم المنسدلة المباشرة للقارئ والسورة في شاشة نص الجوال */
      function syncMobileSelectors() {
        if (qpReciterSel && recSel) {
          if (qpReciterSel.options.length !== recSel.options.length) {
            qpReciterSel.innerHTML = recSel.innerHTML;
          } else {
            Array.from(recSel.options).forEach((o, i) => {
              if (qpReciterSel.options[i] && qpReciterSel.options[i].textContent !== o.textContent) {
                qpReciterSel.options[i].textContent = o.textContent;
              }
            });
          }
          qpReciterSel.value = rIdx !== null ? String(rIdx) : '';
        }
        if (qpSurahSel && surahSel) {
          if (qpSurahSel.options.length !== surahSel.options.length) {
            qpSurahSel.innerHTML = surahSel.innerHTML;
          }
          qpSurahSel.value = sIdx !== null ? String(sIdx) : '';
        }
      }

      async function loadSurahNames() {
        // عرض فوري من الكاش ثم تحديث بالخلفية
        const cacheKey = 'suwarCache_' + lang;
        const cached = lsJSON(cacheKey);
        if (Array.isArray(cached) && cached.length) {
          surahs = cached;
          buildSurahList();
          buildRangeSelects();
        }
        try {
          const resp = await fetch(API[lang].s);
          const data = await resp.json();
          const list = data.suwar || data.data || (Array.isArray(data) ? data : null);
          if (list && Array.isArray(list)) {
            const mapped = list.map(it => ({ n: parseInt(it.id || it.number || it.index), name: it.name || it.english_name || it.surah_name || it.native }));
            lsSave(cacheKey, JSON.stringify(mapped));
            surahs = mapped;
            buildSurahList();
            buildRangeSelects(); // مدى السور
          }
        } catch (e) { console.warn('surah names fallback'); }
      }

      /* ============ BUILD LISTS ============ */
      function buildMoshafList() {
        const t = T[lang];
        // نحفظ السورة الحالية لنتابع من مكانها إن وُجدت لدى القارئ الجديد
        const keepSurah = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx].n : null;
        moshSel.innerHTML = `<option value="">${t.moshLbl.replace(/[:：]$/, '')}</option>`;
        surahSel.innerHTML = `<option value="">${t.surahLbl.replace(/[:：]$/, '')}</option>`;

        if (rIdx === null || !reciters[rIdx] || !Array.isArray(reciters[rIdx].moshaf)) {
          mIdx = null; sIdx = null;
          updateStatus();
          return;
        }

        reciters[rIdx].moshaf.forEach((m, i) => {
          const o = document.createElement('option'); o.value = i; o.textContent = m.name; moshSel.appendChild(o);
        });
        mIdx = null; sIdx = null;
        // اختيار تلقائي للمصحف الأول فور اختيار القارئ — يوفّر نقرة ويبدأ الاستماع مباشرة
        if (reciters[rIdx].moshaf.length) {
          const list = reciters[rIdx].moshaf;
          const hasSurah = (mi, n) => {
            try { return (list[mi]?.surah_list || '').split(',').map(Number).includes(n); } catch (e) { return false; }
          };
          let pick = 0;
          // إن لم يحتوِ المصحف الأول السورة الحالية اخترنا مصحفاً يحتويها
          // (يبقى المصحف الأول هو الأصل، ويمنع فقدان موضع الاستماع)
          if (keepSurah !== null && !hasSurah(0, keepSurah)) {
            const alt = list.findIndex((_, i) => hasSurah(i, keepSurah));
            if (alt > 0) pick = alt;
          }
          mIdx = pick; moshSel.value = String(pick);
          if (keepSurah !== null && hasSurah(pick, keepSurah)) {
            const idx = surahs.findIndex(x => x.n === keepSurah);
            if (idx >= 0) sIdx = idx;
          }
          buildSurahList();
        }
        updateStatus();
      }

      function buildSurahList(filterQ = '') {
        const t = T[lang];
        surahSel.innerHTML = `<option value="">${t.surahLbl.replace(/[:：]$/, '')}</option>`;
        if (rIdx !== null && mIdx !== null && reciters[rIdx] && reciters[rIdx].moshaf && reciters[rIdx].moshaf[mIdx]) {
          const m = reciters[rIdx].moshaf[mIdx];
          const avail = (m.surah_list || '').split(',').map(Number);
          avail.forEach(num => {
            const s = surahs.find(x => x.n === num); if (!s) return;
            if (filterQ && !s.name.toLowerCase().includes(filterQ.toLowerCase()) && !String(num).includes(filterQ)) return;
            const o = document.createElement('option'); o.value = surahs.indexOf(s);
            o.textContent = `${s.n}. ${s.name}`; surahSel.appendChild(o);
          });
        }
        if (sIdx !== null && sIdx >= 0 && (!surahs.length || sIdx < surahs.length)) {
          surahSel.value = sIdx;
        } else if (sIdx !== null) {
          sIdx = null;
        }
        if (qpSurahSel) {
          qpSurahSel.innerHTML = surahSel.innerHTML;
          qpSurahSel.value = sIdx !== null ? String(sIdx) : '';
        }
        updateStatus();
      }

      /* ============ AUDIO URL ============ */
      function audioUrl() {
        if (rIdx === null || mIdx === null || sIdx === null) return '';
        const r = reciters[rIdx];
        if (!r) return '';
        if (r.isPrecision && precisionAudioUrl) return precisionAudioUrl;
        if (r.audioServer) {
          return r.audioServer + String(surahs[sIdx].n).padStart(3, '0') + '.mp3';
        }
        const m = r.moshaf && r.moshaf[mIdx];
        if (!m) return '';
        if (m.server && m.server.startsWith('http')) {
          if (m.server.includes('quran.com')) return precisionAudioUrl || '';
          return m.server + String(surahs[sIdx].n).padStart(3, '0') + '.mp3';
        }
        return '';
      }

      /* تحضير بيانات المزامنة والرابط الصوتي مسبقاً عند اختيار قارئ متزامن (حتى قبل ضغط تشغيل) */
      async function prefetchPrecisionCurrent() {
        syncAutoScrollBanner();
        if (rIdx === null || sIdx === null) return;
        const r = reciters[rIdx];
        const s = surahs[sIdx];
        if (!r || !s || !r.isPrecision) {
          currentAyahTimestamps = null;
          syncAutoScrollBanner();
          return;
        }
        if (r.audioServer) {
          precisionAudioUrl = r.audioServer + String(s.n).padStart(3, '0') + '.mp3';
          currentAyahTimestamps = null;
          updateDlLink();
          syncAutoScrollBanner();
          return;
        }
        const pData = await fetchPrecisionAudioData(r.precisionQid, s.n);
        if (rIdx !== null && reciters[rIdx] === r && sIdx !== null && surahs[sIdx] === s && pData && pData.audioUrl) {
          precisionAudioUrl = pData.audioUrl;
          currentAyahTimestamps = pData.timestamps || [];
          updateDlLink();
          syncAutoScrollBanner();
        }
      }

      /* ============ PLAY ============ */
      async function playAudio() {
        if (rIdx === null || mIdx === null || sIdx === null) {
          statusDiv.textContent = T[lang].statusDef;
          return;
        }
        const reqId = ++playReqId;
        const r = reciters[rIdx];
        const s = surahs[sIdx];
        const surahN = s ? s.n : (sIdx + 1);

        const resumeTarget = pendingResumeAyah;
        pendingResumeAyah = null;
        const resumeTargetAyah = (resumeTarget && resumeTarget.surahNum === surahN) ? resumeTarget.ayah : null;

        if (r && r.isPrecision) {
          if (r.audioServer) {
            precisionAudioUrl = r.audioServer + String(surahN).padStart(3, '0') + '.mp3';
            currentAyahTimestamps = null;
            if (audio.src !== precisionAudioUrl) {
              audio.src = precisionAudioUrl;
              audio.load();
            }
            syncAutoScrollBanner();
          } else {
            statusDiv.innerHTML = `<span style="color:var(--primary)">⏳ ${lang === 'ar' ? 'جاري تجهيز التلاوة المتزامنة مع الآيات…' : 'Loading synchronized recitation…'}</span>`;
            const pData = await fetchPrecisionAudioData(r.precisionQid, surahN);
            if (reqId !== playReqId) return; // حارس السباق عند تغيير السورة أو القارئ بسرعة
            if (pData && pData.audioUrl) {
              precisionAudioUrl = pData.audioUrl;
              currentAyahTimestamps = pData.timestamps || [];
              if (audio.src !== pData.audioUrl) {
                audio.src = pData.audioUrl;
                audio.load();
              }
              syncAutoScrollBanner();
              if (autoHighlight && textPanelOpen && ayahsData.length) {
                setTimeout(() => highlightCurrentPosition(), 60);
              }
            } else {
              precisionAudioUrl = null;
              currentAyahTimestamps = null;
              const url = audioUrl();
              if (!url) { statusDiv.textContent = T[lang].statusDef; return; }
              if (audio.src !== url) { audio.src = url; audio.load(); }
              syncAutoScrollBanner();
            }
          }
        } else {
          precisionAudioUrl = null;
          currentAyahTimestamps = null;
          const url = audioUrl();
          if (!url) { statusDiv.textContent = T[lang].statusDef; return; }
          if (audio.src !== url) { audio.src = url; audio.load(); }
          syncAutoScrollBanner();
        }

        // استكمال التلاوة من نفس الآية عند تغيير القارئ أو النقر على آية قبل التشغيل
        if (resumeTargetAyah && resumeTargetAyah > 0) {
          let sought = false;
          const applyAyahSeek = () => {
            if (sought || reqId !== playReqId) return;
            sought = true;
            let targetSec = 0;
            if (currentAyahTimestamps && currentAyahTimestamps.length) {
              const vKey = `${surahN}:${resumeTargetAyah}`;
              const seg = currentAyahTimestamps.find(t => t.verse_key === vKey);
              if (seg && typeof seg.timestamp_from === 'number') {
                targetSec = seg.timestamp_from / 1000;
              }
            } else if (audio.duration && ayahsData && ayahsData.length) {
              targetSec = Math.max(0, ((resumeTargetAyah - 1) / ayahsData.length) * audio.duration);
            }
            if (targetSec >= 0) {
              try {
                audio.currentTime = targetSec;
                highlightCurrentPosition();
                showToast(lang === 'ar' ? `الانتقال إلى الآية ${resumeTargetAyah} ⏱️` : `Jumped to Ayah ${resumeTargetAyah} ⏱️`, 'info');
              } catch (e) { }
            }
          };

          if (audio.readyState >= 1 && audio.duration) {
            applyAyahSeek();
          } else {
            audio.addEventListener('loadedmetadata', applyAyahSeek, { once: true });
            audio.addEventListener('canplay', applyAyahSeek, { once: true });
          }
        }

        const savedSpeed = parseFloat(speedCtrl.value) || 1;
        audio.playbackRate = savedSpeed;
        audio.play().catch(e => console.warn('Audio play error:', e));
        updateDlLink();
        updateNP();
        setupMediaSession();
        updateStatus();
      }

      /* مساعد موحّد لاختيار القارئ والمصحف والسورة مع تحديث الواجهة */
      function selectReciterMoshafSurah(ri, mi, si, shouldPlay = false) {
        if (ri !== null && ri !== undefined && ri >= 0 && ri < reciters.length) {
          recSel.value = ri; rIdx = ri; buildMoshafList();
        }
        const mo = (rIdx !== null && reciters[rIdx] && reciters[rIdx].moshaf) || [];
        if (mi !== null && mi !== undefined && mi >= 0 && mi < mo.length) {
          moshSel.value = mi; mIdx = mi; buildSurahList();
        }
        if (si !== null && si !== undefined && si >= 0 && si < surahs.length) {
          surahSel.value = si;
          sIdx = (surahSel.value === String(si)) ? si : (surahSel.value === '' ? null : parseInt(surahSel.value));
        }
        syncMobileSelectors();
        updateStatus(); updateDlLink(); updateFavIcon(); renderNP(); saveSettings();
        prefetchPrecisionCurrent();
        onSurahChangeForText();
        if (shouldPlay) playAudio();
      }

      /* مطابقة القارئ والمصحف والسورة بالمعرّف الثابت (لتفادي تغير الترتيب عند تبديل اللغة) */
      function resolveSavedIndices(p) {
        if (!p) return { ri: null, mi: null, si: null };
        const num = v => (v === null || v === undefined || v === '') ? null : parseInt(v);
        let ri = null, mi = null, si = null;
        if (p.recId !== undefined && p.recId !== null) {
          const foundR = reciters.findIndex(r => String(r.id) === String(p.recId));
          if (foundR >= 0) ri = foundR;
        }
        if (ri === null) ri = num(p.rIdx);
        if (ri !== null && (isNaN(ri) || ri < 0 || ri >= reciters.length)) ri = null;

        if (ri !== null) {
          const mList = reciters[ri]?.moshaf || [];
          if (p.moshId !== undefined && p.moshId !== null) {
            const foundM = mList.findIndex(m => String(m.id) === String(p.moshId));
            if (foundM >= 0) mi = foundM;
          }
          if (mi === null) mi = num(p.mIdx);
          if (mi !== null && (isNaN(mi) || mi < 0 || mi >= mList.length)) mi = 0;
        }

        if (p.surahNum !== undefined && p.surahNum !== null) {
          const foundS = surahs.findIndex(s => s.n === parseInt(p.surahNum));
          if (foundS >= 0) si = foundS;
        }
        if (si === null) si = num(p.sIdx);
        if (si !== null && (isNaN(si) || si < 0 || si >= surahs.length)) si = null;
        return { ri, mi, si };
      }

      /* استكمال من آخر موضع */
      function resumeLast() {
        const p = lsJSON('lastPos');
        if (!p) return;
        const { ri, mi, si } = resolveSavedIndices(p);
        if (ri !== null && si !== null) {
          selectReciterMoshafSurah(ri, mi, si, true);
          audio.addEventListener('loadeddata', () => {
            audio.currentTime = p.time || 0;
          }, { once: true });
        }
      }

      /* ── استكمال الجلسة تلقائياً عند فتح التطبيق ── */
      let pendingResume = null; // { si, time }
      function autoStartSession() {
        const p = lsJSON('lastPos') || lsJSON('settings');
        let { ri, mi, si } = resolveSavedIndices(p);

        if (ri === null || isNaN(ri) || ri < 0 || ri >= reciters.length) {
          const afasyIdx = reciters.findIndex(r => r.cleanName && (r.cleanName.includes('مشاري') || r.cleanName.includes('Afasy')));
          ri = afasyIdx >= 0 ? afasyIdx : 0;
          mi = 0;
          const isFriday = new Date().getDay() === 5;
          si = isFriday ? 17 : 0;
        }

        if (ri < 0 || ri >= reciters.length) return;
        selectReciterMoshafSurah(ri, mi, si, false);
        const t = p ? (parseFloat(p.time) || 0) : 0;
        if (t > 0 && sIdx !== null) pendingResume = { si: sIdx, time: t };
        openTextPanel();
      }

      /* ============ NOW PLAYING ============ */
      function renderNP() {
        if (rIdx === null || sIdx === null) { npCard.classList.add('hidden'); return; }
        npCard.classList.remove('hidden');
        const s = surahs[sIdx], r = reciters[rIdx];
        npSurah.textContent = s.name; npReciter.textContent = r.name;
        npBadges.innerHTML = '';
        const meta = (lang === 'ar' ? SMETA_AR : SMETA_EN)[sIdx];
        if (meta) {
          const b1 = document.createElement('span'); b1.className = 'badge'; b1.textContent = meta[0] + ' ' + T[lang].ayahsLbl; npBadges.appendChild(b1);
          const b2 = document.createElement('span'); b2.className = 'badge'; b2.textContent = meta[1]; npBadges.appendChild(b2);
        }
        if (r && r.isPrecision) {
          const syncB = document.createElement('span');
          syncB.className = 'badge';
          syncB.textContent = lang === 'ar' ? '🎯 متزامن بالمللي ثانية' : '🎯 Millisecond Sync';
          syncB.style.background = 'linear-gradient(135deg, #059669, #10b981)';
          syncB.style.color = '#ffffff';
          syncB.style.fontWeight = '700';
          npBadges.appendChild(syncB);
        }
        updateFloatingBar(); // تحديث الشريط العائم
      }

      // تُستدعى عند بدء تشغيل فعلي فقط — تحديث البطاقة + إضافة لقائمة "آخر ما استمعت إليه"
      function updateNP() {
        renderNP();
        if (rIdx !== null && sIdx !== null) addRecent(rIdx, mIdx, sIdx);
      }

      /* ============ PROGRESS BAR ============ */
      // شريط التقدم: الجزء المُشغَّل يمتد من اليسار (LTR ثابت داخل prog-ltr-wrap)
      const progElapsed = document.getElementById('progElapsed');
      // حفظ آخر موضع: مخنوق كل 3 ثوانٍ (الكتابة المتزامنة لـ localStorage مكلفة عند كل timeupdate)
      let lastPosSavedAt = 0;
      function saveLastPos(force) {
        if (rIdx === null || sIdx === null) return;
        const now = Date.now();
        if (!force && now - lastPosSavedAt < 3000) return;
        lastPosSavedAt = now;
        let time = audio.currentTime || 0;
        // لا نمحو الموضع المحفوظ إن لم يبدأ تشغيل فعلي بعد (الصوت لم يُحمّل)
        if (!time && (!audio.src || !isFinite(audio.duration) || !audio.duration)) {
          const prev = lsJSON('lastPos');
          if (prev && prev.rIdx === rIdx && prev.sIdx === sIdx && (prev.time || 0) > 0) time = prev.time;
        }
        lsSave('lastPos', JSON.stringify({
          rIdx, mIdx, sIdx,
          recId: reciters[rIdx]?.id ?? null,
          moshId: reciters[rIdx]?.moshaf?.[mIdx]?.id ?? null,
          surahNum: surahs[sIdx]?.n ?? null,
          time
        }));
      }
      window.addEventListener('pagehide', () => saveLastPos(true));
      // الحفظ عند إخفاء التطبيق (تبديل التطبيقات/قفل الشاشة على الجوال)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') saveLastPos(true);
      });
      function updateProg() {
        if (dragging) return;
        const dur = audio.duration || 0, cur = audio.currentTime || 0;
        // تقييد النسبة بين 0 و100 لثبات بصري كامل (LTR)
        const pct = dur > 0 ? Math.max(0, Math.min(100, cur / dur * 100)) : 0;
        // progElapsed = الجزء المُشغَّل (يمتد من اليسار)
        progElapsed.style.width = pct + '%';
        // progThumb = النقطة تتحرك مع الجزء المُشغَّل
        progThumb.style.left = pct + '%';
        tElapsed.textContent = fmtTime(cur);
        tRemaining.textContent = '−' + fmtTime(Math.max(0, dur - cur));
        saveLastPos();
      }

      function seekTo(e) {
        const rect = progTrack.getBoundingClientRect();
        const x = (e.clientX || e.touches?.[0]?.clientX || 0) - rect.left;
        const pct = Math.max(0, Math.min(1, x / rect.width));
        if (audio.duration) {
          audio.currentTime = pct * audio.duration;
          // تحديث فوري للنقطة والشريط أثناء السحب
          progThumb.style.left = (pct * 100) + '%';
        }
      }

      progTrack.addEventListener('mousedown', e => { dragging = true; progTrack.classList.add('dragging'); seekTo(e); });
      progTrack.addEventListener('click', seekTo);
      document.addEventListener('mousemove', e => { if (dragging) seekTo(e); });
      document.addEventListener('mouseup', () => { dragging = false; progTrack.classList.remove('dragging'); });
      progTrack.addEventListener('touchstart', e => { dragging = true; progTrack.classList.add('dragging'); seekTo(e); }, { passive: true });
      document.addEventListener('touchmove', e => { if (dragging) seekTo(e); }, { passive: true });
      document.addEventListener('touchend', () => { dragging = false; progTrack.classList.remove('dragging'); });
      // تحريك شريط التقدّم بلوحة المفاتيح عند التركيز عليه (±5 ثوانٍ)
      // الشريط LTR بصرياً: السهم الأيمن يقدّم، الأيسر يرجّع — بما يطابق اتجاه التعبئة
      progTrack.addEventListener('keydown', e => {
        if (!audio.duration) return;
        let handled = true;
        if (e.key === 'ArrowRight') audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        else if (e.key === 'ArrowLeft') audio.currentTime = Math.max(0, audio.currentTime - 5);
        else if (e.key === 'Home') audio.currentTime = 0;
        else if (e.key === 'End') audio.currentTime = audio.duration;
        else handled = false;
        if (handled) { e.preventDefault(); e.stopPropagation(); updateProg(); }
      });

      /* ============ FORMAT TIME ============ */
      function fmtTime(s) { if (!s || isNaN(s)) return '0:00'; const m = Math.floor(s / 60); return m + ':' + String(Math.floor(s % 60)).padStart(2, '0'); }

      /* ============ VOLUME, MUTE & SPEED CONTROLLERS ============ */
      function setVolume(val, save = true) {
        const v = Math.max(0, Math.min(100, Math.round(Number(val) || 0)));
        audio.volume = v / 100;
        volCtrl.value = v;
        volVal.textContent = String(v);
        if (typeof floatVol !== 'undefined' && floatVol) floatVol.value = v;
        if ($('setVol')) { $('setVol').value = v; $('setVolVal').textContent = String(v); }
        isMuted = v === 0;
        const icon = isMuted ? '🔇' : '🔊';
        muteBtn.textContent = icon;
        if (typeof fbMute !== 'undefined' && fbMute) fbMute.textContent = icon;
        if (save) saveSettings();
      }

      function setSpeed(spdVal, save = true) {
        const spd = Math.max(0.5, Math.min(2, parseFloat(spdVal) || 1));
        audio.playbackRate = spd;
        speedCtrl.value = spd;
        speedVal.textContent = spd + '×';
        if ($('setSpeed')) { $('setSpeed').value = spd; $('setSpeedVal').textContent = spd + '×'; }
        if (save) saveSettings();
      }

      function toggleMute() {
        if (!isMuted) {
          volBefore = (audio.volume * 100) || 70;
          setVolume(0);
        } else {
          setVolume(volBefore || 70);
        }
        updateFloatingBar();
      }

      /* ============ REPEAT ============ */
      function syncRepeatUI() {
        const t = T[lang];
        repBtn.textContent = t.repLabel + t.repModes[repeatMode];
        const fbRep = document.getElementById('fbRepeat');
        if (fbRep) {
          fbRep.innerHTML = `🔄<span class="fb-rep-badge">${t.repModes[repeatMode]}</span>`;
          fbRep.classList.toggle('rep-active', repeatMode > 0);
          const repDesc = (typeof SET_LABELS !== 'undefined' && SET_LABELS[lang]?.reps?.[repeatMode]) || '';
          fbRep.title = (lang === 'ar' ? 'التكرار: ' : 'Repeat: ') + repDesc;
        }
        if ($('setRepeat')) $('setRepeat').value = repeatMode;
      }

      function toggleRepeat() {
        repeatMode = (repeatMode + 1) % 5; repeatCount = 0;
        syncRepeatUI();
        saveSettings();
      }

      /* ============ NAVIGATION ============ */
      function availSurahs() { if (rIdx === null || mIdx === null) return []; return reciters[rIdx].moshaf[mIdx].surah_list.split(',').map(Number); }
      function hasNext() { const av = availSurahs(); const cur = surahs[sIdx]?.n || 0; return av.some(n => n > cur); }
      function hasNextRec() { return rIdx !== null && rIdx < reciters.length - 1; }

      function goNext() {
        const av = availSurahs(), cur = surahs[sIdx]?.n || 0;
        const nx = av.filter(n => n > cur).sort((a, b) => a - b)[0];
        if (!nx) return false;
        const i = surahs.findIndex(s => s.n === nx);
        if (i < 0) return false;
        sIdx = i; surahSel.value = i; syncMobileSelectors(); updateStatus(); updateDlLink(); prefetchPrecisionCurrent(); saveSettings(); return true;
      }
      function goPrev() {
        const av = availSurahs(), cur = surahs[sIdx]?.n || 115;
        const nxArr = av.filter(n => n < cur).sort((a, b) => b - a);
        const px = nxArr[0]; if (!px) return false;
        const i = surahs.findIndex(s => s.n === px);
        if (i < 0) return false;
        sIdx = i; surahSel.value = i; syncMobileSelectors(); updateStatus(); updateDlLink(); prefetchPrecisionCurrent(); saveSettings(); return true;
      }
      function nextReciter() {
        if (!hasNextRec()) return false;
        const curN = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx].n : null;
        rIdx++; recSel.value = rIdx; buildMoshafList();
        if (mIdx === null) return false;
        let target = null;
        if (curN !== null) {
          const idx = surahs.findIndex(s => s.n === curN);
          const vals = Array.from(surahSel.options).map(o => o.value);
          if (idx >= 0 && vals.includes(String(idx))) target = idx;
        }
        if (target === null) {
          const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
          if (!opts.length) return false;
          target = parseInt(opts[0].value);
        }
        surahSel.value = target; sIdx = target;
        syncMobileSelectors(); updateStatus(); updateDlLink(); prefetchPrecisionCurrent(); saveSettings(); return true;
      }

      /* ============ STOP CONDITION ============ */
      // ⚠️ applyStop تُستدعى فقط عند تغيير المستخدم للإعداد — لا تُعاد عند تغيير السورة
      function applyStop() {
        if (stopTimer) { clearTimeout(stopTimer); stopTimer = null; }
        if (stopTimerTick) { clearInterval(stopTimerTick); stopTimerTick = null; }
        stopTimerDisplay.classList.remove('show'); stopEndTime = null;
        autoNext = true;
        const val = stopSel?.value || 'none';
        lsSave('stopAfterVal', val);
        if (val === 'none') { lsSave('stopEndTime', ''); return; }
        if (val === 'endSurah') { autoNext = false; lsSave('stopEndTime', ''); return; }
        if (val === 'endMoshaf') { autoNext = true; lsSave('stopEndTime', ''); return; }
        const mins = parseInt(val);
        if (!isNaN(mins) && mins > 0) {
          stopEndTime = Date.now() + mins * 60 * 1000;
          lsSave('stopEndTime', String(stopEndTime));
          _startStopTick();
        }
      }

      // تشغيل المؤقت الداخلي — يُحسب الوقت المتبقي من stopEndTime
      function _startStopTick() {
        if (!stopEndTime) return;
        // إلغاء أي مؤقتات سابقة — استدعاء متكرر (مثل تبديل اللغة) كان يكدّس مؤقتات مزدوجة
        if (stopTimer) { clearTimeout(stopTimer); stopTimer = null; }
        if (stopTimerTick) { clearInterval(stopTimerTick); stopTimerTick = null; }
        const msLeft = stopEndTime - Date.now();
        if (msLeft <= 0) { cancelStopTimer(); return; }
        stopTimerDisplay.classList.add('show');
        updateStopClock();
        stopTimerTick = setInterval(() => {
          updateStopClock();
          if (Date.now() >= stopEndTime) {
            clearInterval(stopTimerTick); stopTimerTick = null;
            stopTimerDisplay.classList.remove('show');
            lsSave('stopEndTime', '');
          }
        }, 1000);
        stopTimer = setTimeout(() => {
          audio.pause(); isPlaying = false; playBtn.textContent = T[lang].play;
          stopTimerDisplay.classList.remove('show');
          lsSave('stopEndTime', '');
          notify(T[lang].notifTimer, '');
        }, msLeft);
      }

      // استعادة المؤقت عند إعادة التحميل
      function restoreStopTimer() {
        const savedEnd = ls('stopEndTime');
        const savedVal = ls('stopAfterVal') || 'none';
        if (!savedEnd || !savedVal || savedVal === 'none' || savedVal === 'endSurah' || savedVal === 'endMoshaf') return;
        const end = parseInt(savedEnd);
        if (isNaN(end) || Date.now() >= end) { lsSave('stopEndTime', ''); return; }
        stopEndTime = end;
        if (stopSel) stopSel.value = savedVal;
        _startStopTick();
      }

      function updateStopClock() {
        const fbT = document.getElementById('fbTimer');
        if (!stopEndTime) {
          stopTimerDisplay.classList.remove('show');
          if (fbT) fbT.style.display = 'none';
          return;
        }
        const rem = Math.max(0, Math.round((stopEndTime - Date.now()) / 1000));
        const clockStr = Math.floor(rem / 60).toString().padStart(2, '0') + ':' + String(rem % 60).padStart(2, '0');
        stopTimerClock.textContent = clockStr;
        if (stopTimerLabel) stopTimerLabel.textContent = T[lang].stopTimerLbl;
        if (fbT) { fbT.textContent = clockStr; fbT.style.display = 'inline-block'; }
      }
      function cancelStopTimer() {
        if (stopTimer) { clearTimeout(stopTimer); stopTimer = null; }
        if (stopTimerTick) { clearInterval(stopTimerTick); stopTimerTick = null; }
        stopTimerDisplay.classList.remove('show'); stopEndTime = null;
        const fbT = document.getElementById('fbTimer');
        if (fbT) fbT.style.display = 'none';
        lsSave('stopEndTime', '');
        if (stopSel) stopSel.value = 'none';
      }

      /* ============ STATS — شاملة ============ */
      function recStat(idx, dur) {
        if (idx === null) return;
        if (!stats.times[idx]) stats.times[idx] = { c: 0, t: 0 };
        stats.times[idx].c += 1; stats.times[idx].t += dur || 0;
        stats.count += 1; stats.total += dur || 0;
        stats.uniq = Object.keys(stats.times).length;
        // تتبع القراء
        if (rIdx !== null) {
          if (!stats.reciters) stats.reciters = {};
          if (!stats.reciters[rIdx]) stats.reciters[rIdx] = 0;
          stats.reciters[rIdx] += 1;
        }
        // آخر جلسة
        stats.lastDate = Date.now();
        // أطول جلسة
        if (!stats.longestSession || dur > stats.longestSession) stats.longestSession = dur || 0;
        saveStats(); updateStats();
      }
      function saveStats() { lsSave('stats', JSON.stringify(stats)); }
      function loadStats() {
        try {
          const raw = ls('stats');
          stats = raw ? JSON.parse(raw) : { count: 0, times: {}, total: 0, uniq: 0, reciters: {}, lastDate: null, longestSession: 0 };
        } catch (e) { stats = { count: 0, times: {}, total: 0, uniq: 0, reciters: {}, lastDate: null, longestSession: 0 }; }
        // backward compat — ensure all fields exist
        if (!stats.uniq) stats.uniq = Object.keys(stats.times || {}).length;
        if (!stats.reciters) stats.reciters = {};
        if (!stats.lastDate) stats.lastDate = null;
        if (!stats.longestSession) stats.longestSession = 0;
        updateStats();
      }
      function updateStats() {
        const t = T[lang];
        if (!stats.count) { statsSection.style.display = 'none'; return; }
        statsSection.style.display = 'block';
        // صناديق رئيسية
        $('statUniq').textContent = stats.uniq || 0;
        $('statUniqLbl').textContent = lang === 'ar' ? 'سورة مختلفة' : 'Unique Surahs';
        $('statMin').textContent = Math.round((stats.total || 0) / 60);
        $('statMinLbl').textContent = t.statMinLbl;
        $('statCount').textContent = stats.count;
        $('statCountLbl').textContent = t.statCountLbl;
        $('statsHeader').textContent = t.statsHeader;
        expBtn.textContent = t.expLbl;

        // أكثر السور استماعاً (أشرطة)
        const barsWrap = $('statBarsWrap');
        if (barsWrap) {
          const topEntries = Object.entries(stats.times || {}).sort((a, b) => b[1].c - a[1].c).slice(0, 5);
          const maxC = topEntries[0]?.[1]?.c || 1;
          barsWrap.innerHTML = '';
          topEntries.forEach(([idx, data]) => {
            const s = surahs[parseInt(idx)]; if (!s) return;
            const pct = Math.round(data.c / maxC * 100);
            const row = document.createElement('div'); row.className = 'stat-bar-row';
            row.innerHTML = `<div class="stat-bar-label"><span>${s.name}</span><span>${data.c}×</span></div>
        <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%"></div></div>`;
            barsWrap.appendChild(row);
          });
        }

        // صفوف مفصّلة شاملة
        const fullRows = $('statsFullRows');
        if (fullRows) {
          // أوقات الاستماع بالساعات
          const totalSec = stats.total || 0;
          const hours = Math.floor(totalSec / 3600);
          const mins = Math.floor((totalSec % 3600) / 60);
          const secs = Math.floor(totalSec % 60);
          // أكثر قارئ (إن حُفظ)
          let topRecName = '—';
          if (stats.reciters) {
            const topRec = Object.entries(stats.reciters).sort((a, b) => b[1] - a[1])[0];
            if (topRec && reciters[topRec[0]]) topRecName = reciters[topRec[0]].name;
          }
          // أكثر سورة
          let topSurahName = '—';
          if (stats.times) {
            const topS = Object.entries(stats.times).sort((a, b) => b[1].c - a[1].c)[0];
            if (topS && surahs[parseInt(topS[0])]) topSurahName = surahs[parseInt(topS[0])].name;
          }
          const rows = [
            {
              icon: '⏱️', label: lang === 'ar' ? 'إجمالي وقت الاستماع' : 'Total Listening Time',
              val: hours > 0 ? `${hours}h ${mins}m` : `${mins}m ${secs}s`
            },
            { icon: '🎵', label: lang === 'ar' ? 'أكثر سورة استماعاً' : 'Most Listened Surah', val: topSurahName },
            { icon: '🎙️', label: lang === 'ar' ? 'أكثر قارئ استماعاً' : 'Most Listened Reciter', val: topRecName },
            {
              icon: '📅', label: lang === 'ar' ? 'آخر جلسة' : 'Last Session',
              val: stats.lastDate ? new Date(stats.lastDate).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US') : '—'
            },
            {
              icon: '📚', label: lang === 'ar' ? 'أطول جلسة' : 'Longest Session',
              val: stats.longestSession ? Math.round(stats.longestSession / 60) + (lang === 'ar' ? ' دقيقة' : ' min') : '—'
            },
          ];
          fullRows.innerHTML = rows.map(r => `
      <div class="stats-full-row">
        <span class="stats-full-icon">${r.icon}</span>
        <span class="stats-full-label">${r.label}</span>
        <span class="stats-full-val">${r.val}</span>
      </div>`).join('');
        }
      }
      function exportStats() {
        const t = T[lang]; let txt = `=== ${t.statsHeader} ===\n${lang === 'ar' ? 'سور فريدة' : 'Unique surahs'}: ${stats.uniq || 0}\n${t.statMinLbl}: ${Math.round((stats.total || 0) / 60)}\n${t.statCountLbl}: ${stats.count}\n\n`;
        const entries = Object.entries(stats.times).sort((a, b) => b[1].c - a[1].c);
        entries.forEach(([k, v]) => { const s = surahs[k]; if (s) txt += `${s.name}: ${v.c}× — ${Math.round(v.t / 60)}${lang === 'ar' ? 'دق' : 'min'}\n`; });
        const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }));
        a.download = 'quran_stats.txt'; a.click();
      }

      /* ============ RECENT ============ */
      function addRecent(ri, mi, si) {
        recent = recent.filter(e => e.si !== si);
        recent.unshift({
          ri, mi, si,
          recId: reciters[ri]?.id ?? null,
          moshId: reciters[ri]?.moshaf?.[mi]?.id ?? null,
          surahNum: surahs[si]?.n ?? null
        });
        if (recent.length > 5) recent.length = 5;
        lsSave('recent', JSON.stringify(recent)); updateRecent();
      }
      function loadRecent() { try { recent = JSON.parse(ls('recent') || '[]'); } catch (e) { recent = []; } updateRecent(); }
      function updateRecent() {
        const t = T[lang]; $('recentHeader').textContent = t.recentHeader;
        if (!recent.length) { recentSection.style.display = 'none'; return; }
        recentSection.style.display = 'block'; recentList.innerHTML = '';
        recent.forEach(e => {
          const { ri, mi, si } = resolveSavedIndices(e);
          if (si === null || !surahs[si]) return;
          const recName = (ri !== null && reciters[ri]?.name) || '';
          const d = document.createElement('div'); d.className = 'recent-item';
          d.innerHTML = `<span class="rec-icon">🎵</span>
      <div style="min-width:0;flex:1">
        <div style="font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHTML(surahs[si].name)}</div>
        <div style="font-size:11px;color:var(--text-soft);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHTML(recName)}</div>
      </div>`;
          d.onclick = () => selectReciterMoshafSurah(ri, mi, si, true);
          recentList.appendChild(d);
        });
      }

      /* ============ BOOKMARKS ============ */
      function addBm() {
        if (rIdx === null || mIdx === null || sIdx === null) return;
        const note = prompt(T[lang].bmPrompt, '') || '';
        bookmarks.push({
          ri: rIdx, mi: mIdx, si: sIdx,
          recId: reciters[rIdx]?.id ?? null,
          moshId: reciters[rIdx]?.moshaf?.[mIdx]?.id ?? null,
          surahNum: surahs[sIdx]?.n ?? null,
          time: audio.currentTime || 0,
          note: note.trim()
        });
        saveBm(); updateBm(); showToast(T[lang].bmAdded);
      }
      function saveBm() { lsSave('bm', JSON.stringify(bookmarks)); }
      function loadBookmarks() { try { bookmarks = JSON.parse(ls('bm') || '[]'); } catch (e) { bookmarks = []; } updateBm(); }
      function updateBm() {
        $('bmHeader').textContent = T[lang].bmHeader;
        bmSection.style.display = bookmarks.length ? 'block' : 'none'; bmList.innerHTML = '';
        bookmarks.forEach((bm, idx) => {
          const { ri, mi, si } = resolveSavedIndices({
            rIdx: bm.ri ?? bm.reciterIndex,
            mIdx: bm.mi ?? bm.moshafIndex,
            sIdx: bm.si ?? bm.surahIndex,
            recId: bm.recId, moshId: bm.moshId, surahNum: bm.surahNum
          });
          const s = si !== null ? surahs[si] : null;
          const surahName = s ? s.name : '?';
          const recName = (ri !== null && reciters[ri]?.name) || '';
          let subTxt = recName;
          if (bm.note) subTxt += ' — ' + bm.note;
          else if (bm.time) {
            const m = Math.floor(bm.time / 60).toString().padStart(2, '0');
            subTxt += ` (${m}:${String(Math.floor(bm.time % 60)).padStart(2, '0')})`;
          }
          const item = document.createElement('div'); item.className = 'bm-item';
          item.innerHTML = `<div style="flex:1;min-width:0">
      <div style="font-weight:700;font-size:13px">${escHTML(surahName)}</div>
      <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHTML(subTxt)}</div>
    </div>`;
          item.style.cursor = 'pointer';
          item.onclick = () => {
            selectReciterMoshafSurah(ri, mi, si, true);
            audio.addEventListener('loadeddata', () => { audio.currentTime = bm.time || 0; }, { once: true });
          };
          const del = document.createElement('button'); del.className = 'bm-del'; del.textContent = '❌';
          del.onclick = e => { e.stopPropagation(); bookmarks.splice(idx, 1); saveBm(); updateBm(); };
          item.appendChild(del); bmList.appendChild(item);
        });
      }

      /* ============ NOTIFICATIONS ============ */
      function notify(title, body) {
        if (localStorage.getItem('notifEnabled') === '0') return;
        if ('Notification' in window && Notification.permission === 'granted') {
          try { new Notification(title, { body, icon: 'icon.png' }); } catch (e) { }
        }
      }

      /* ============ DOWNLOAD LINK ============ */
      function updateDlLink() {
        const url = audioUrl();
        const t = T[lang];
        if (rIdx !== null && sIdx !== null && surahs[sIdx] && reciters[rIdx]) {
          const s = surahs[sIdx], r = reciters[rIdx];
          dlLink.href = url || '#';
          dlLink.textContent = t.dlPfx + s.name + ' — ' + r.name;
          dlLink.download = `${s.n}_${s.name}.mp3`;
        }
      }
      function showAllSurahs() {
        if (rIdx === null || mIdx === null) return;
        const m = reciters[rIdx].moshaf[mIdx];
        const nums = m.surah_list.split(',').map(Number);
        allList.innerHTML = '';
        const countEl = $('allSurahCount');
        if (countEl) countEl.textContent = nums.length + (lang === 'ar' ? ' سورة' : ' surahs');
        nums.forEach(num => {
          const s = surahs.find(x => x.n === num); if (!s) return;
          const si = surahs.indexOf(s);
          const meta = (lang === 'ar' ? SMETA_AR : SMETA_EN)[si];
          const isActive = sIdx === si;
          const card = document.createElement('div');
          card.className = 'surah-card' + (isActive ? ' active-surah' : '');
          card.title = `${s.name} — ${meta ? meta[0] : ''} — ${meta ? meta[1] : ''}`;
          card.innerHTML = `<span class="sc-num">${s.n}</span><span class="sc-name">${escHTML(s.name)}</span><span class="sc-dl">▶</span>`;
          card.addEventListener('click', () => {
            selectReciterMoshafSurah(rIdx, mIdx, si, true);
            document.querySelectorAll('.surah-card').forEach(c => c.classList.remove('active-surah'));
            card.classList.add('active-surah');
          });
          allList.appendChild(card);
        });
      }

      /* روابط تحميل جميع السور (مع دعم القراء المتزامنين عبر جلب الرابط الصوتي المباشر) */
      function showAllSurahsLinks() {
        if (rIdx === null || mIdx === null) return;
        const r = reciters[rIdx];
        const m = r.moshaf[mIdx];
        const nums = m.surah_list.split(',').map(Number);
        const listEl = $('allLinksList'); if (!listEl) return;
        listEl.innerHTML = '';
        nums.forEach(num => {
          const s = surahs.find(x => x.n === num); if (!s) return;
          const isDynamicPrecision = r.isPrecision && !r.audioServer;
          const directUrl = isDynamicPrecision
            ? '#'
            : ((r.audioServer || m.server) + String(num).padStart(3, '0') + '.mp3');
          const a = document.createElement('a');
          a.href = directUrl;
          if (!isDynamicPrecision) a.target = '_blank';
          a.download = `${num}_${s.name}.mp3`;
          a.style.cssText = `display:flex;align-items:center;gap:8px;padding:9px 12px;
      border-radius:9px;background:var(--badge-bg);border:1.5px solid var(--input-border);
      color:var(--text);text-decoration:none;font-size:13px;font-weight:600;
      transition:border-color 0.15s,background 0.15s;margin-bottom:4px;cursor:pointer`;
          a.innerHTML = `<span style="font-size:15px;color:var(--acc1)">📥</span>
      <span style="flex:1">${num}. ${escHTML(s.name)}</span>
      <span style="font-size:10px;color:var(--text-soft);background:var(--input-bg);
        padding:2px 6px;border-radius:6px;border:1px solid var(--input-border)">MP3</span>`;
          if (isDynamicPrecision) {
            a.addEventListener('click', async e => {
              e.preventDefault();
              showToast(lang === 'ar' ? `⏳ جاري جلب رابط سورة ${s.name}...` : `⏳ Fetching ${s.name} link...`, 'info', 2000);
              const pData = await fetchPrecisionAudioData(r.precisionQid, num);
              if (pData && pData.audioUrl) {
                window.open(pData.audioUrl, '_blank', 'noopener');
              } else {
                showToast(lang === 'ar' ? '⚠️ تعذّر جلب رابط التحميل' : '⚠️ Could not fetch download link', 'warn');
              }
            });
          }
          a.addEventListener('mouseover', () => { a.style.borderColor = 'var(--acc1)'; });
          a.addEventListener('mouseout', () => { a.style.borderColor = 'var(--input-border)'; });
          listEl.appendChild(a);
        });
      }
      function updateFavIcon() { const on = rIdx !== null && favR === rIdx && favM === mIdx; favBtn.classList.toggle('fav-on', on); }
      function updateRecOpts() { Array.from(recSel.options).forEach((o, i) => { if (i === 0) return; const idx = parseInt(o.value); o.textContent = (favR === idx ? '⭐ ' : '') + (reciters[idx]?.name || ''); }); syncMobileSelectors(); }
      function toggleFav() {
        if (rIdx === null || mIdx === null) return;
        const t = T[lang];
        if (favR === rIdx && favM === mIdx) { favR = null; favM = null; showToast(t.favUnset); }
        else { favR = rIdx; favM = mIdx; showToast(t.favSet); }
        updateFavIcon(); updateRecOpts();
        lsSave('favR', JSON.stringify(favR)); lsSave('favM', JSON.stringify(favM));
      }

      /* ============ SHARE ============ */
      function buildDeepLinkUrl(includeAyah = true) {
        const base = location.href.split('#')[0].split('?')[0];
        if (rIdx === null && sIdx === null) return base;
        const params = [];
        if (rIdx !== null && reciters[rIdx]?.id != null) params.push('r=' + encodeURIComponent(reciters[rIdx].id));
        if (rIdx !== null) params.push('ri=' + encodeURIComponent(rIdx));
        if (rIdx !== null && mIdx !== null && reciters[rIdx]?.moshaf?.[mIdx]?.id != null) {
          params.push('m=' + encodeURIComponent(reciters[rIdx].moshaf[mIdx].id));
        }
        if (mIdx !== null) params.push('mi=' + encodeURIComponent(mIdx));
        const sNum = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx].n : loadedSurahNum;
        if (sNum) params.push('s=' + encodeURIComponent(sNum));
        if (includeAyah) {
          const curAyah = getCurrentAyahNumber();
          if (curAyah && curAyah > 1) params.push('a=' + encodeURIComponent(curAyah));
        }
        if (!params.length) return base;
        const q = params.join('&');
        // على بروتوكول http/https نمرر المعاملات في ?search و #hash معاً لضمان عدم حذفها في تطبيقات المراسلة
        return location.protocol === 'file:' ? `${base}#${q}` : `${base}?${q}#${q}`;
      }

      function openShare() { shareOverlay.classList.add('open'); updateShareDlg(); }
      function closeShare() { shareOverlay.classList.remove('open'); }
      function updateShareDlg() {
        const t = T[lang];
        $('shareDlgTitle').textContent = t.shareDlgTitle;
        if ($('shareDeepLbl')) $('shareDeepLbl').textContent = t.shareDeepLbl;
        if ($('shareDeepSub')) $('shareDeepSub').textContent = t.shareDeepSub;
        if ($('shareAyahLbl')) $('shareAyahLbl').textContent = t.shareAyahLbl;
        if ($('shareAyahSub')) $('shareAyahSub').textContent = t.shareAyahSub;
        $('shareWebLbl').textContent = t.shareWebLbl; $('shareWebSub').textContent = t.shareWebSub;
        $('shareSurahLbl').textContent = t.shareSurahLbl; $('shareSurahSub').textContent = t.shareSurahSub;
        $('shareCancel').textContent = t.shareCancelLbl;
      }
      function legacyCopy(s) {
        const tmp = document.createElement('textarea'); tmp.value = s;
        tmp.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
        document.body.appendChild(tmp); tmp.focus(); tmp.select();
        try { document.execCommand('copy'); } catch (e) { }
        document.body.removeChild(tmp);
      }
      function copyTextToClipboard(fullText) {
        const done = () => showToast(T[lang].copiedOk, 'info');
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(fullText).then(done).catch(() => { legacyCopy(fullText); done(); });
        } else {
          legacyCopy(fullText); done();
        }
      }
      async function shareOrCopy({ title, text, url }) {
        const cleanUrl = (url && /^https?:\/\//i.test(url)) ? url : '';
        const fullCopy = [text, url].filter(Boolean).join('\n');
        if (navigator.share) {
          try {
            const payload = { title: title || T[lang].appTitle };
            if (text) payload.text = cleanUrl ? text : fullCopy;
            if (cleanUrl) payload.url = cleanUrl;
            await navigator.share(payload);
            return;
          } catch (err) {
            if (err && err.name === 'AbortError') return;
            // في حال فشل المشاركة الأصلية لأي سبب تقني، ننسخ النص والرابط تلقائياً للحافظة
          }
        }
        copyTextToClipboard(fullCopy || title || location.href.split('#')[0]);
      }
      async function doShare(type) {
        closeShare();
        const s = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx] : (loadedSurahNum ? surahs.find(x => x.n === loadedSurahNum) : null);
        const r = (rIdx !== null && reciters[rIdx]) ? reciters[rIdx] : null;
        const recName = r ? (r.cleanName || r.name) : '';

        if (type === 'website') {
          const url = location.href.split('#')[0];
          const text = lang === 'ar'
            ? '📖 مشغل القرآن الكريم — استمع للقرآن الكريم بأصوات كبار القراء مع المصحف المتزامن'
            : '📖 Quran Player — Listen to the Noble Quran with synchronized Mushaf text';
          await shareOrCopy({ title: T[lang].appTitle, text, url });
          return;
        }

        if (type === 'deeplink') {
          const url = buildDeepLinkUrl(true);
          const curAyah = getCurrentAyahNumber();
          const ayahSuffix = (curAyah && curAyah > 1)
            ? (lang === 'ar' ? ` (الآية ${curAyah})` : ` (Verse ${curAyah})`)
            : '';
          const text = (s && recName)
            ? (lang === 'ar'
              ? `🎧 استمع إلى سورة ${s.name}${ayahSuffix} بصوت القارئ ${recName}`
              : `🎧 Listen to Surah ${s.name}${ayahSuffix} recited by ${recName}`)
            : (lang === 'ar' ? '📖 مشغل القرآن الكريم' : '📖 Quran Player');
          await shareOrCopy({ title: s ? `${s.name} — ${recName}` : T[lang].appTitle, text, url });
          return;
        }

        if (type === 'ayah') {
          const surahNum = s ? s.n : (loadedSurahNum || 1);
          const surahObj = s || surahs.find(x => x.n === surahNum) || { n: surahNum, name: '' };
          let list = ayahsData && ayahsData.length && loadedSurahNum === surahNum ? ayahsData : (surahCache[surahNum] || []);
          if (!list.length) {
            list = await fetchSurahText(surahNum).catch(() => []);
          }
          const ayahNum = getCurrentAyahNumber() || 1;
          const ayahObj = list.find(a => a.numberInSurah === ayahNum) || list[0];
          const verseTxt = ayahObj ? ayahObj.text : '';
          const url = buildDeepLinkUrl(true);
          const text = verseTxt
            ? `﴿ ${verseTxt} ﴾\n[${lang === 'ar' ? 'سورة ' + surahObj.name : 'Surah ' + surahObj.name}: ${ayahObj.numberInSurah}]${recName ? (lang === 'ar' ? ' — بصوت ' + recName : ' — ' + recName) : ''}`
            : (lang === 'ar' ? `سورة ${surahObj.name}` : `Surah ${surahObj.name}`);
          await shareOrCopy({ title: `${surahObj.name} (${ayahNum})`, text, url });
          return;
        }

        // type === 'surah' (رابط ملف الصوت المباشر MP3)
        let url = audioUrl();
        if (!url && rIdx !== null && sIdx !== null && reciters[rIdx]?.isPrecision) {
          const pData = await fetchPrecisionAudioData(reciters[rIdx].precisionQid, surahs[sIdx].n);
          if (pData?.audioUrl) { precisionAudioUrl = pData.audioUrl; url = pData.audioUrl; updateDlLink(); }
        }
        if (!url) url = buildDeepLinkUrl(false);
        const text = (s && recName)
          ? `🎧 ${s.name} — ${recName}`
          : (lang === 'ar' ? '📖 مشغل القرآن الكريم' : '📖 Quran Player');
        await shareOrCopy({ title: T[lang].appTitle, text, url });
      }

      /* ============ MEDIA SESSION ============ */
      function setupMediaSession() {
        if (!('mediaSession' in navigator) || rIdx === null || sIdx === null) return;
        const s = surahs[sIdx], r = reciters[rIdx];
        navigator.mediaSession.metadata = new MediaMetadata({
          title: s.name, artist: r.name, album: T[lang].qpTitle,
          artwork: [
            { src: 'icon.png', sizes: '512x512', type: 'image/png' },
            { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml' }
          ]
        });
        navigator.mediaSession.setActionHandler('play', () => audio.play());
        navigator.mediaSession.setActionHandler('pause', () => audio.pause());
        navigator.mediaSession.setActionHandler('previoustrack', () => { if (goPrev()) playAudio(); });
        navigator.mediaSession.setActionHandler('nexttrack', () => { if (goNext()) playAudio(); });
      }

      /* ============ STATUS ============ */
      function updateStatus() {
        const t = T[lang];
        const s = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx] : null;
        const r = (rIdx !== null && reciters[rIdx]) ? reciters[rIdx] : null;
        const m = (r && mIdx !== null && r.moshaf && r.moshaf[mIdx]) ? r.moshaf[mIdx] : null;

        if (s && r && m) {
          statusDiv.textContent = t.readySt(s.name, r.name, m.name);
        } else if (r && m) {
          statusDiv.textContent = lang === 'ar' ? '✅ جاهز — اختر السورة لبدء الاستماع' : '✅ Ready — pick a surah to start';
        } else if (r) {
          statusDiv.textContent = lang === 'ar' ? '📘 اختر المصحف' : '📘 Choose a moshaf';
        } else {
          statusDiv.textContent = t.statusDef;
        }
      }

      /* ============ THEME ============ */
      function applyTheme(t, fromClick = false) {
        if (fromClick && t === 'default') {
          t = (theme === 'default') ? 'dark' : 'default';
        } else if (fromClick && t === 'gold') {
          t = (theme === 'gold') ? 'gold-dark' : 'gold';
        } else if (fromClick && t === 'emerald') {
          t = (theme === 'emerald') ? 'emerald-dark' : 'emerald';
        }
        ['default', 'dark', 'emerald', 'emerald-dark', 'gold', 'gold-dark', 'beige'].forEach(x => document.body.classList.remove(x));
        if (t === 'gold-dark') {
          document.body.classList.add('dark', 'gold-dark');
        } else if (t === 'emerald-dark') {
          document.body.classList.add('dark', 'emerald-dark');
        } else if (t !== 'default') {
          document.body.classList.add(t);
        }
        const dotKey = (t === 'dark') ? 'default' : ((t === 'gold-dark') ? 'gold' : ((t === 'emerald-dark') ? 'emerald' : t));
        document.querySelectorAll('.t-dot').forEach(d => d.classList.toggle('active', d.dataset.t === dotKey));
        document.querySelectorAll('.set-theme-dot').forEach(d => d.classList.toggle('active', d.dataset.t === dotKey));
        const isDarkTheme = (t === 'dark' || t === 'gold-dark' || t === 'emerald-dark');
        themeBtn.textContent = isDarkTheme ? '☀️' : '🌙';
        theme = t; lsSave('theme', t);
        const col = {
          default: '#667eea',
          dark: '#1a1a2e',
          emerald: '#059669',
          'emerald-dark': '#041610',
          gold: '#d97706',
          'gold-dark': '#18130a',
          beige: '#cbb89d'
        }[t] || '#667eea';
        document.querySelector('meta[name=theme-color]').content = col;
        if (fromClick && (t === 'default' || t === 'dark')) {
          showToast(
            t === 'dark'
              ? (lang === 'ar' ? '🌙 الثيم البنفسجي الغامق' : '🌙 Dark Purple Theme')
              : (lang === 'ar' ? '☀️ الثيم البنفسجي الفاتح' : '☀️ Light Purple Theme'),
            'info',
            1800
          );
        } else if (fromClick && (t === 'gold' || t === 'gold-dark')) {
          showToast(
            t === 'gold-dark'
              ? (lang === 'ar' ? '🌙 الثيم الذهبي الغامق' : '🌙 Dark Gold Theme')
              : (lang === 'ar' ? '☀️ الثيم الذهبي الفاتح' : '☀️ Light Gold Theme'),
            'info',
            1800
          );
        } else if (fromClick && (t === 'emerald' || t === 'emerald-dark')) {
          showToast(
            t === 'emerald-dark'
              ? (lang === 'ar' ? '🌙 الثيم الأخضر الغامق' : '🌙 Dark Emerald Theme')
              : (lang === 'ar' ? '☀️ الثيم الأخضر الفاتح' : '☀️ Light Emerald Theme'),
            'info',
            1800
          );
        }
      }
      function toggleDark() {
        if (theme === 'gold') applyTheme('gold-dark');
        else if (theme === 'gold-dark') applyTheme('gold');
        else if (theme === 'emerald') applyTheme('emerald-dark');
        else if (theme === 'emerald-dark') applyTheme('emerald');
        else applyTheme(theme === 'dark' ? 'default' : 'dark');
      }

      /* ============ SURAH TEXT PANEL LABELS ============ */
      function updateQpLabels() {
        const t = T[lang];
        const set = (id, v) => { const e = $(id); if (e && v != null) e.textContent = v; };
        set('qpTabText', t.qpTabText); set('qpTabInfo', t.qpTabInfo); set('qpTabMushaf', t.qpTabMushaf);
        set('optUthmani', t.optUthmani); set('optPrint', t.optPrint);
        set('optSimple', t.optSimple); set('optQcf', t.optQcf); set('optTajweed', t.optTajweed);
        set('optBlock', t.optBlock); set('optInline', t.optInline);
        set('qpAutoScrollLbl', t.qpAutoScrollLbl);
        const ps = $('qpSearch'); if (ps) ps.placeholder = t.qpSearchPh;
        const setTip = (id, v) => { const e = $(id); if (e && v) e.setAttribute('title', v); };
        setTip('qpShareBtn', t.qpShare); setTip('qpClose', t.qpClose);
        setTip('qpSettingsBtn', t.qpSettings); setTip('qpSearchToggleBtn', t.qpSearchToggle);
        setTip('qpCornerToggleBtn', t.qpCornerToggle);
        setTip('qpMobFontMinus', t.qpFontMinus); setTip('qpMobFontPlus', t.qpFontPlus);
        if (qpReciterSel) qpReciterSel.setAttribute('aria-label', t.recLbl);
        if (qpSurahSel) qpSurahSel.setAttribute('aria-label', t.surahLbl);
        syncMobileSelectors();
        setTip('optUthmani', t.optUthmani); setTip('optPrint', t.optPrint);
        setTip('optSimple', t.optSimple);
        setTip('optQcf', lang === 'ar'
          ? 'خطوط المصحف (QCF) — رسم الآيات بخطوط المصحف المعتمدة'
          : 'Mushaf fonts (QCF) — render ayahs with the official mushaf typeface');
        setTip('optTajweed', lang === 'ar'
          ? 'خط التجويد الملوّن (QCF V4) — أحكام التجويد ملوّنة'
          : 'Colored Tajweed font (QCF V4) — Tajweed rules highlighted in color');
        setTip('optBlock', t.optBlock); setTip('optInline', t.optInline);
        setTip('qpFontMinus', t.qpFontMinus); setTip('qpFontPlus', t.qpFontPlus);
        const qt = $('qpTitle');
        if (qt && !loadedSurahNum) qt.textContent = t.qpTitle;
        if (typeof updateTajweedLegendLabels === 'function') updateTajweedLegendLabels();
      }

      /* ============ LANGUAGE ============ */
      function updateUI() {
        const t = T[lang];
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir); document.body.setAttribute('dir', dir);
        document.documentElement.lang = lang;
        ($('appTitleText') || $('appTitle')).textContent = t.appTitle;
        $('reciterLbl').textContent = t.recLbl; $('moshafLbl').textContent = t.moshLbl; $('surahLbl').textContent = t.surahLbl;
        $('volLbl').textContent = t.volLbl; $('speedLbl').textContent = t.spdLbl; $('stopLbl').textContent = t.stopLbl;
        surahSearch.placeholder = t.srchPh; recSearch.placeholder = t.recSearchPh;
        $('searchNote').textContent = t.srchNote;
        randRecBtn.title = t.randRec; randSurahBtn.title = t.randSurah; favBtn.title = t.favTitle;
        bmBtn.title = t.bmTitle;
        if ($('radioBtn')) { $('radioBtn').title = t.radio; $('radioBtn').setAttribute('aria-label', t.radio); }
        langBtn.textContent = lang === 'ar' ? 'EN' : 'ع';
        syncRepeatUI();
        playBtn.textContent = isPlaying ? t.pause : t.play;
        updateStopOpts();
        updateStatus(); updateDlLink(); updateBm(); updateStats(); updateRecent(); renderNP();
        if (typeof refreshQcfChip === 'function') refreshQcfChip();
        updateQpLabels();
        fillSettingsLabels();
        if (dlBtn) dlBtn.textContent = dlSection.style.display === 'block' ? t.hideDl : t.dlSurah;
        if ($('dlAllBtnCards')) $('dlAllBtnCards').textContent = t.cardsBtn;
        if ($('dlAllBtnLinks')) $('dlAllBtnLinks').textContent = t.linksBtn;
        if ($('dlHint')) $('dlHint').textContent = t.dlHint;
        if ($('allSurahsTitle')) $('allSurahsTitle').textContent = t.allSurahsTitle;
        if ($('allLinksSTitle')) $('allLinksSTitle').textContent = t.allLinksTitle;
        if ($('clearBmBtn')) $('clearBmBtn').textContent = t.clearBm;
        if ($('clearStatsBtn')) $('clearStatsBtn').textContent = t.clearStats;
        if ($('mtabPlayer')) $('mtabPlayer').textContent = t.mtabPlayer;
        if ($('mtabText')) $('mtabText').textContent = t.mtabText;
        if ($('projRadio')) $('projRadio').textContent = t.projRadio;
        if ($('projDb')) $('projDb').textContent = t.projDb;
        if ($('rangeLabel')) $('rangeLabel').textContent = t.rangeFromLbl;
        if ($('rangeToLbl')) $('rangeToLbl').textContent = t.rangeToLbl;
        if ($('dInstallTitle')) $('dInstallTitle').textContent = t.dInstallTitle;
        if ($('dInstallSub')) $('dInstallSub').textContent = t.dInstallSub;
        if ($('dInstallBtn')) $('dInstallBtn').textContent = t.dInstallBtn;
        updateShareDlg();
        $('installTitle').textContent = t.installTitle; $('installSub').textContent = t.installSub;
        $('installBtn').textContent = t.installBtn;
        document.querySelectorAll('.sc-content').forEach(el => { el.style.display = el.dataset.lang === lang ? 'block' : 'none'; });
        if (recSel.options[0]) recSel.options[0].textContent = t.recLbl.replace(/[:：]$/, '');
        if (moshSel.options[0]) moshSel.options[0].textContent = t.moshLbl.replace(/[:：]$/, '');
        if (surahSel.options[0]) surahSel.options[0].textContent = t.surahLbl.replace(/[:：]$/, '');
        speedVal.textContent = parseFloat(speedCtrl.value) + '×';
        if (stopTimerLabel) stopTimerLabel.textContent = t.stopTimerLbl;
        updateNextMenuLabels();
      }
      const STOP_ORDER = ['none', 'endSurah', 'endMoshaf',
        '5', '10', '15', '20', '30', '45', '60', '120', '180', '240', '300', '360', '420'];
      function updateStopOpts() {
        const t = T[lang]; if (!stopSel) return;
        const prev = stopSel.value; stopSel.innerHTML = '';
        STOP_ORDER.forEach(k => {
          if (!t.stopOpts[k]) return;
          const o = document.createElement('option'); o.value = k; o.textContent = t.stopOpts[k]; stopSel.appendChild(o);
        });
        stopSel.value = (prev && t.stopOpts[prev]) ? prev : 'none';
      }
      function migrateStopDefault() {
        if (ls('stopOrderFixed')) return;
        lsSave('stopOrderFixed', '1');
        lsSave('stopAfterVal', 'none');
        lsSave('stopEndTime', '');
        const sv = lsJSON('settings');
        if (sv) { sv.stopAfter = 'none'; lsSave('settings', JSON.stringify(sv)); }
        if (stopSel) stopSel.value = 'none';
      }
      async function toggleLang() {
        const prevSelection = {
          recId: rIdx !== null ? reciters[rIdx]?.id : null,
          moshId: (rIdx !== null && mIdx !== null) ? reciters[rIdx]?.moshaf?.[mIdx]?.id : null,
          surahNum: sIdx !== null ? surahs[sIdx]?.n : null,
          rIdx, mIdx, sIdx
        };
        lang = lang === 'ar' ? 'en' : 'ar';
        lsSave('language', lang);
        await loadReciters();
        const resolved = resolveSavedIndices(prevSelection);
        if (resolved.ri !== null) {
          selectReciterMoshafSurah(resolved.ri, resolved.mi, resolved.si, false);
        }
        updateRecOpts();
        updateUI();
        if (loadedSurahNum) {
          renderTextPane(loadedSurahNum, ayahsData);
          renderInfoPane(loadedSurahNum, infoCache[loadedSurahNum] || null);
        }
        if (typeof fillSettingsLabels === 'function') fillSettingsLabels();
        if (typeof syncSettingsControls === 'function') syncSettingsControls();
      }

      /* ============ SETTINGS ============ */
      function saveSettings() {
        lsSave('settings', JSON.stringify({
          rIdx, mIdx, sIdx,
          recId: rIdx !== null ? (reciters[rIdx]?.id ?? null) : null,
          moshId: (rIdx !== null && mIdx !== null) ? (reciters[rIdx]?.moshaf?.[mIdx]?.id ?? null) : null,
          surahNum: sIdx !== null ? (surahs[sIdx]?.n ?? null) : null,
          vol: volCtrl.value,
          speed: speedCtrl.value,
          repeatMode,
          stopAfter: stopSel?.value
        }));
        saveLastPos(true);
      }
      function loadSettings() {
        try {
          const s = JSON.parse(ls('settings') || 'null'); if (!s) return;
          if (s.vol !== undefined) setVolume(s.vol, false);
          if (s.speed !== undefined) setSpeed(s.speed, false);
          if (s.repeatMode !== undefined) repeatMode = s.repeatMode;
          if (s.stopAfter && stopSel) stopSel.value = s.stopAfter;
          const { ri, mi, si } = resolveSavedIndices(s);
          if (ri !== null) {
            rIdx = ri;
            recSel.value = String(rIdx);
            buildMoshafList();
            if (mi !== null && reciters[rIdx]?.moshaf && mi >= 0 && mi < reciters[rIdx].moshaf.length) {
              mIdx = mi;
              moshSel.value = String(mIdx);
              buildSurahList();
              if (si !== null && si >= 0 && si < surahs.length) {
                sIdx = si;
                surahSel.value = String(sIdx);
                updateStatus();
                updateDlLink();
              }
            }
          } else {
            rIdx = null;
            recSel.value = '';
          }
          favR = JSON.parse(ls('favR') || 'null'); favM = JSON.parse(ls('favM') || 'null');
          const savedTheme = ls('theme') || 'default'; applyTheme(savedTheme);
        } catch (e) { }
        const t = T[lang]; syncRepeatUI();
      }

      /* ============ LOCAL STORAGE HELPERS ============ */
      function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
      function lsSave(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
      function clearData() {
        if (confirm(lang === 'ar' ? 'هل تريد مسح جميع بيانات التطبيق؟\\n(المفضلة، الإعدادات، الإحصائيات)' : 'Clear all app data? (favorites, settings, stats)')) {
          localStorage.clear(); location.reload();
        }
      }

      /* ============ AUDIO EVENTS ============ */
      audio.addEventListener('timeupdate', () => {
        updateProg();
        updateFbProgress();
        // تمرير الآية الحالية عند فتح تبويب النص
        if (textPanelOpen && currentQpTab === 'text' && ayahsData.length) {
          const now = audio.currentTime;
          if (now - lastHighlightTime >= 0.6) { lastHighlightTime = now; highlightCurrentPosition(); }
        }
      });
      audio.addEventListener('loadedmetadata', updateProg);
      audio.addEventListener('play', () => {
        isPlaying = true; playBtn.textContent = T[lang].pause;
        npCard.classList.add('playing'); document.title = '▶ ' + (surahs[sIdx]?.name || '');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
      });
      audio.addEventListener('pause', () => {
        // لا نحدّث الواجهة إذا كان الإيقاف بسبب انتهاء السورة (يعالجه حدث ended)
        // duration قد تكون NaN قبل تحميل البيانات — يجب اعتبارها إيقافاً عادياً
        const dur = audio.duration;
        if (!isFinite(dur) || dur === 0 || audio.currentTime < dur - 0.2) {
          isPlaying = false; playBtn.textContent = T[lang].play;
          npCard.classList.remove('playing');
          document.title = lang === 'ar' ? 'مشغل القرآن الكريم' : 'Quran Player';
          if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
        }
        saveLastPos(true);
      });
      // تطبيق الموضع المحفوظ عند أول تحميل لبيانات الصوت (بدون تشغيل تلقائي)
      audio.addEventListener('loadedmetadata', () => {
        if (!pendingResume) return;
        if (pendingResume.si === sIdx && pendingResume.time > 0 && isFinite(audio.duration)) {
          audio.currentTime = Math.min(pendingResume.time, Math.max(0, audio.duration - 0.5));
        }
        pendingResume = null;
        saveLastPos(true);
      });
      audio.addEventListener('ended', () => {
        npCard.classList.remove('playing');
        document.title = lang === 'ar' ? 'مشغل القرآن الكريم' : 'Quran Player';
        try { recStat(sIdx, audio.duration || 0); } catch (e) { }
        try { if (surahs[sIdx]) notify(T[lang].notifFin(surahs[sIdx].name), ''); } catch (e) { }
        if (repeatMode === 4) { playAudio(); return; }
        if (repeatMode > 0 && repeatCount < repeatMode) { repeatCount++; playAudio(); return; }
        repeatCount = 0;
        const sv = stopSel?.value || 'none';
        if (sv === 'endSurah') { isPlaying = false; playBtn.textContent = T[lang].play; updateFloatingBar(); return; }

        // عند انتهاء سورة الناس (114) ولا يوجد شرط آخر (تكرار أو وضع عشوائي): إظهار تنبيه انتهاء المصحف وإيقاف القراءة
        const curSurahNum = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx].n : 0;
        const isSurahNasOrEnd = (curSurahNum === 114) || !hasNext();
        if (isSurahNasOrEnd && nextMode === 0) {
          audio.pause();
          audio.currentTime = 0;
          isPlaying = false;
          playBtn.textContent = T[lang].play;
          updateFloatingBar();
          const khatmMsg = lang === 'ar'
            ? '🎉 تم بحمد الله انتهاء المصحف الشريف — تم إيقاف القراءة'
            : '🎉 Completed the Noble Mushaf — Playback stopped';
          statusDiv.innerHTML = `<span style="color:var(--acc1);font-weight:700">${khatmMsg}</span>`;
          showToast(khatmMsg, 'ok', 6000);
          try { notify(lang === 'ar' ? 'انتهاء المصحف الشريف' : 'Completed the Noble Mushaf', khatmMsg); } catch (e) { }
          return;
        }

        if (autoNext) {
          if (sv === 'endMoshaf' && !hasNext()) {
            isPlaying = false; playBtn.textContent = T[lang].play; updateFloatingBar();
            return;
          }
          setTimeout(() => { executeNextMode(); }, 400);
        } else { isPlaying = false; playBtn.textContent = T[lang].play; updateFloatingBar(); }
      });
      audio.addEventListener('error', () => { statusDiv.textContent = lang === 'ar' ? '⚠️ خطأ في تحميل الملف الصوتي.' : '⚠️ Audio load error.'; isPlaying = false; playBtn.textContent = T[lang].play; });
      // مؤشر التحميل: يظهر عند انتظار البيانات، ويُخفى عند بدء التشغيل أو التوقف
      audio.addEventListener('waiting', () => { if (isPlaying) playBtn.classList.add('buffering'); });
      ['playing', 'canplay', 'pause', 'ended', 'error'].forEach(ev =>
        audio.addEventListener(ev, () => playBtn.classList.remove('buffering')));

      /* ============ SELECT EVENTS ============ */
      recSel.onchange = function () {
        const curAyah = getCurrentAyahNumber();
        const curSurahNum = (sIdx !== null && surahs[sIdx]) ? surahs[sIdx].n : null;
        if (curAyah && curSurahNum) {
          pendingResumeAyah = { surahNum: curSurahNum, ayah: curAyah };
        }
        rIdx = this.value === '' ? null : parseInt(this.value);
        buildMoshafList();
        saveSettings();
        updateFavIcon();
        renderNP();
        prefetchPrecisionCurrent();
        onSurahChangeForText();
        if (autoPlayOnChange || isPlaying) playAudio();
      };
      moshSel.onchange = function () {
        mIdx = this.value === '' ? null : parseInt(this.value);
        buildSurahList();
        saveSettings();
        updateFavIcon();
        renderNP();
        prefetchPrecisionCurrent();
        onSurahChangeForText();
        if (autoPlayOnChange || isPlaying) playAudio();
      };
      surahSel.onchange = function () {
        pendingResumeAyah = null;
        sIdx = this.value === '' ? null : parseInt(this.value);
        updateStatus();
        updateDlLink();
        saveSettings();
        renderNP();
        prefetchPrecisionCurrent();
        onSurahChangeForText();
        if (autoPlayOnChange || isPlaying) playAudio();
      };
      if (qpReciterSel) qpReciterSel.onchange = function () {
        recSel.value = this.value;
        recSel.onchange();
      };
      if (qpSurahSel) qpSurahSel.onchange = function () {
        surahSel.value = this.value;
        surahSel.onchange();
      };
      if (qpSearchToggleBtn) qpSearchToggleBtn.onclick = () => {
        if (!qpSearchBar) return;
        const isOpen = qpSearchBar.classList.toggle('mobile-open');
        qpSearchToggleBtn.classList.toggle('active-search', isOpen);
        if (isOpen && qpSearch) {
          setTimeout(() => qpSearch.focus(), 50);
        } else if (qpSearch && qpSearch.value) {
          qpSearch.value = '';
          qpSearch.dispatchEvent(new Event('input'));
        }
      };
      surahSearch.oninput = () => buildSurahList(surahSearch.value);
      recSearch.oninput = () => buildReciterList(recSearch.value);
      volCtrl.oninput = function () { setVolume(this.value); };
      speedCtrl.oninput = function () { setSpeed(this.value); };
      stopSel.onchange = () => {
        // المؤقت يبدأ/يُعاد فقط عند تغيير الإعداد يدوياً — لا يُعاد عند تغيير السورة
        applyStop();
      };

      /* ============ EDUCATIONAL INTRO ============ */
      const INTRO_STEPS = {
        ar: [
          { icon: '🎙️', title: 'اختر القارئ والمصحف', desc: 'اختر من بين مئات القراء ومصاحف متعددة الروايات' },
          { icon: '📚', title: 'اختر السورة', desc: 'ابحث عن أي سورة أو اختر عشوائياً بزر 🎲' },
          { icon: '📜', title: 'نص القرآن الكريم', desc: 'زر 📜 يعرض نص السورة بالرسم العثماني مع التمييز التلقائي' },
          { icon: '📌', title: 'الإشارات المرجعية', desc: 'احفظ مواضعك المفضلة وتتبع إحصائيات استماعك' },
          { icon: '📲', title: 'ثبّت التطبيق', desc: 'يعمل بدون إنترنت — وصول سريع من سطح المكتب أو الهاتف' },
          { icon: '⌨️', title: 'اختصارات لوحة المفاتيح', desc: 'Space: تشغيل | ← →: تنقل | T: نص | M: كتم | S: بحث' }
        ],
        en: [
          { icon: '🎙️', title: 'Select Reciter & Moshaf', desc: 'Choose from hundreds of reciters and multiple narrations' },
          { icon: '📚', title: 'Select Surah', desc: 'Search any surah or pick randomly with the 🎲 button' },
          { icon: '📜', title: 'Quran Text', desc: 'The 📜 button shows Uthmani script with auto-highlight while playing' },
          { icon: '📌', title: 'Bookmarks & Stats', desc: 'Save your favorite spots and track your listening statistics' },
          { icon: '📲', title: 'Install the App', desc: 'Works offline — quick access from desktop or phone home screen' },
          { icon: '⌨️', title: 'Keyboard Shortcuts', desc: 'Space: play | ← →: navigate | T: text | M: mute | S: search' }
        ]
      };

      let introLang = 'ar';

      function setIntroLang(l) {
        introLang = l;
        $('introAr').classList.toggle('active', l === 'ar');
        $('introEn').classList.toggle('active', l === 'en');
        const steps = INTRO_STEPS[l];
        const ul = $('introSteps');
        ul.innerHTML = steps.map(s => `<li class="intro-step">
    <div class="intro-step-icon">${s.icon}</div>
    <div class="intro-step-text"><strong>${s.title}</strong><span>${s.desc}</span></div>
  </li>`).join('');
        $('introTitle').textContent = l === 'ar' ? 'مشغل القرآن الكريم' : 'Quran Player';
        $('introSub').textContent = l === 'ar' ? 'م/ عامر الحلحلي' : 'Eng. Amer Al-Halahi';
        $('introStartLbl').textContent = l === 'ar' ? 'ابدأ الاستماع' : 'Start Listening';
      }

      function closeIntro() {
        const ov = $('introOverlay');
        if (ov) {
          ov.style.opacity = '0'; ov.style.transform = 'scale(1.04)'; ov.style.transition = 'all 0.4s';
          setTimeout(() => ov.classList.add('hidden'), 400);
        }
        lsSave('introSeen', '1');
      }

      // Show intro on first visit
      window.addEventListener('load', () => {
        if (!ls('introSeen')) setIntroLang('ar');
        else $('introOverlay')?.classList.add('hidden');
      });

      // التحقق مما إذا كان القارئ الحالي ذا تلاوة متزامنة مع الآيات
      function isCurrentReciterSynced() {
        const r = (rIdx !== null && reciters[rIdx]) ? reciters[rIdx] : null;
        return Boolean((r && r.isPrecision && !r.audioServer) || (currentAyahTimestamps && currentAyahTimestamps.length));
      }

      // إخفاء توضيح "متزامن تقريباً مع التلاوة" عند القراء المتزامنة تلاوتهم
      function syncAutoScrollBanner() {
        if (!qpAutoScroll) return;
        if (isCurrentReciterSynced() || !ayahsData.length || !isPlaying) {
          qpAutoScroll.style.display = 'none';
          return;
        }
        qpAutoScroll.style.display = 'flex';
        const syncLbl = $('qpAutoScrollLbl');
        if (syncLbl) syncLbl.textContent = T[lang].qpAutoScrollLbl;
      }

      // auto-scroll indicator visibility
      audio.addEventListener('play', () => {
        syncAutoScrollBanner();
        if (autoHighlight && textPanelOpen && ayahsData.length) {
          highlightCurrentPosition();
        }
      });
      audio.addEventListener('pause', () => { syncAutoScrollBanner(); });

      /* ============ DESKTOP INSTALL BAR ============ */
      if (dInstallBtn) dInstallBtn.onclick = async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') { desktopInstallBar.classList.remove('show'); installBanner.classList.remove('show'); }
          deferredPrompt = null;
        }
      };
      if (dInstallClose) dInstallClose.onclick = () => desktopInstallBar.classList.remove('show');

      /* ═══════════════════════════════════════════════════
         لوحة القرآن: نص + معلومات + خيارات العرض
      ═══════════════════════════════════════════════════ */

      // ── متغيرات حالة اللوحة ──
      const surahCache = {};      // كاش نصوص السور
      const infoCache = {};       // كاش معلومات السور
      let ayahsData = [];
      let loadedSurahNum = null;
      let qpFontSize = parseInt(ls('qpFontSizeV2')) || 24;
      let scrollLock = false;
      let lastHighlightTime = 0;
      let autoScrollText = (localStorage.getItem('autoScrollText') ?? '1') === '1';
      // تظليل الآية مع القراءة تلقائياً عند القراء المتزامنة أصواتهم (مفعل افتراضياً)
      let autoHighlight = (localStorage.getItem('autoHighlightV2') ?? '1') === '1';
      let mushafLines = (localStorage.getItem('mushafLinesV2') ?? '1') === '1';
      let currentScript = localStorage.getItem('defaultScript') || 'qcf';
      let currentLineMode = ls('lineMode') === 'block' ? 'block' : 'inline';
      let textPageMode = ls('textPageMode') === 'pages' ? 'pages' : 'scroll'; // 'scroll' | 'pages'
      let mushafPageDist = ls('mushafPageDist') === 'surah' ? 'surah' : 'mushaf'; // 'mushaf' | 'surah'
      let textCurrentPageIdx = 0;
      let textSurahPages = [];
      let currentQpTab = 'text';

      /* ── تبويبات اللوحة ── */
      function switchQpTab(tab) {
        currentQpTab = tab;
        document.querySelectorAll('.qp-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.qp-pane').forEach(p => p.classList.remove('active'));
        const tabEl = $('qpTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
        const paneEl = $('qpPane' + tab.charAt(0).toUpperCase() + tab.slice(1));
        if (tabEl) tabEl.classList.add('active');
        if (paneEl) paneEl.classList.add('active');
        if (tab === 'mushaf' && loadedSurahNum) loadMushafView(loadedSurahNum);
      }

      /* ══════════════════════════════════════════════
         محرك خطوط المصحف الموحّد (QCF & Tajweed V4)
      ══════════════════════════════════════════════ */
      const QCF_SCALE = 1.18;
      let qcfData = window.QCF_DATA || null;
      let qcfReadySurah = null;
      let tajweedReadySurah = null;
      const qcfPagesFailed = new Set();
      const tajweedPagesFailed = new Set();

      const qcfFontName = page => 'QCF_P' + String(page).padStart(3, '0');
      const tajweedFontName = page => 'QCF_Tajweed_P' + String(page).padStart(3, '0');

      const FONT_ENGINES = {
        qcf: {
          sources: [
            'https://cdn.jsdelivr.net/gh/m4hmoud-atef/qcf_quran@main/assets/fonts/qcf4/',
            'https://raw.githubusercontent.com/m4hmoud-atef/qcf_quran/main/assets/fonts/qcf4/'
          ],
          fileFn: page => 'QCF4' + String(page).padStart(3, '0') + '_X-Regular.woff',
          nameFn: qcfFontName,
          format: 'woff',
          readySet: new Set(),
          pendingMap: new Map(),
          failedPages: qcfPagesFailed,
          onLoad: null
        },
        tajweed: {
          sources: [
            'https://cdn.jsdelivr.net/gh/YaseenDotDev/quran-qcf-v4@main/',
            'https://raw.githubusercontent.com/YaseenDotDev/quran-qcf-v4/main/'
          ],
          fileFn: page => `p${page}.ttf`,
          nameFn: tajweedFontName,
          format: 'truetype',
          readySet: new Set(),
          pendingMap: new Map(),
          failedPages: tajweedPagesFailed,
          onLoad: (fam, page) => registerTajweedPalette(fam, page)
        }
      };

      // بناء نسخة غامقة من خط التجويد بعكس اللون الأسود في جدول CPAL الثنائي إلى أبيض ناصع (#FFFFFF)
      function buildDarkTajweedFontBuffer(srcBuffer) {
        try {
          const buf = srcBuffer.slice(0);
          const dv = new DataView(buf);
          const numTables = dv.getUint16(4, false);
          let cpalRecOffset = -1;
          let cpalOffset = 0;
          let cpalLength = 0;
          for (let i = 0; i < numTables; i++) {
            const rec = 12 + i * 16;
            if (rec + 16 > buf.byteLength) break;
            const tag = String.fromCharCode(
              dv.getUint8(rec), dv.getUint8(rec + 1), dv.getUint8(rec + 2), dv.getUint8(rec + 3)
            );
            if (tag === 'CPAL') {
              cpalRecOffset = rec;
              cpalOffset = dv.getUint32(rec + 8, false);
              cpalLength = dv.getUint32(rec + 12, false);
              break;
            }
          }
          const overriddenIndices = [];
          if (cpalOffset > 0 && cpalLength >= 12) {
            const numColorRecords = dv.getUint16(cpalOffset + 6, false);
            const colorRecordsOffset = dv.getUint32(cpalOffset + 8, false);
            const absRecordsStart = cpalOffset + colorRecordsOffset;
            for (let c = 0; c < numColorRecords; c++) {
              const pos = absRecordsStart + c * 4;
              if (pos + 3 >= buf.byteLength) break;
              const b = dv.getUint8(pos);
              const g = dv.getUint8(pos + 1);
              const r = dv.getUint8(pos + 2);
              const a = dv.getUint8(pos + 3);
              // أي لون أسود أو داكن جداً في لوحة ألوان الخط هو لون الحروف الأساسية -> يُعكس إلى أبيض ناصع
              if (a > 0 && r < 65 && g < 65 && b < 65) {
                dv.setUint8(pos, 255);     // Blue
                dv.setUint8(pos + 1, 255); // Green
                dv.setUint8(pos + 2, 255); // Red
                overriddenIndices.push(c);
              }
            }
            if (cpalRecOffset >= 0) {
              let sum = 0;
              const end = cpalOffset + cpalLength;
              for (let p = cpalOffset; p < end; p += 4) {
                if (p + 4 <= buf.byteLength) {
                  sum = (sum + dv.getUint32(p, false)) >>> 0;
                }
              }
              dv.setUint32(cpalRecOffset + 4, sum, false);
            }
          }
          return { darkBuffer: buf, overriddenIndices: overriddenIndices.length ? overriddenIndices : [0] };
        } catch (e) {
          return { darkBuffer: null, overriddenIndices: [0] };
        }
      }

      function registerTajweedPalette(fam, page, overriddenIndices = [0]) {
        let styleEl = document.getElementById('tajweedPalettes');
        if (!styleEl) {
          styleEl = document.createElement('style');
          styleEl.id = 'tajweedPalettes';
          document.head.appendChild(styleEl);
        }
        const ruleId = `--tajweed-dark-${String(page).padStart(3, '0')}`;
        if (!styleEl.textContent.includes(ruleId)) {
          const ovStr = (overriddenIndices && overriddenIndices.length ? overriddenIndices : [0])
            .map(idx => `${idx} #ffffff`).join(', ');
          styleEl.textContent += `\n@font-palette-values ${ruleId} { font-family: '${fam}'; base-palette: 0; override-colors: ${ovStr}; }`;
        }
      }

      function loadQcfText() {
        if (window.QCF_DATA) qcfData = window.QCF_DATA;
        return qcfData ? Promise.resolve(qcfData) : Promise.reject(new Error('QCF_DATA unavailable'));
      }

      function ensurePageFont(mode, page) {
        const cfg = FONT_ENGINES[mode];
        const fam = cfg.nameFn(page);
        if (cfg.readySet.has(fam)) return Promise.resolve(fam);
        if (cfg.pendingMap.has(fam)) return cfg.pendingMap.get(fam);
        const p = (async () => {
          let lastErr = null;
          for (const base of cfg.sources) {
            const url = base + cfg.fileFn(page);
            for (let attempt = 0; attempt < 2; attempt++) {
              try {
                if (mode === 'tajweed') {
                  const resp = await fetch(url);
                  if (!resp.ok) throw new Error('HTTP ' + resp.status);
                  const rawBuf = await resp.arrayBuffer();
                  const ffLight = new FontFace(fam, rawBuf.slice(0));
                  await ffLight.load();
                  document.fonts.add(ffLight);

                  const { darkBuffer, overriddenIndices } = buildDarkTajweedFontBuffer(rawBuf);
                  if (darkBuffer) {
                    const ffDark = new FontFace(fam + '_Dark', darkBuffer);
                    await ffDark.load();
                    document.fonts.add(ffDark);
                  }
                  registerTajweedPalette(fam, page, overriddenIndices);
                  cfg.readySet.add(fam);
                  return fam;
                } else {
                  const ff = new FontFace(fam, `url("${url}") format("${cfg.format}")`);
                  await ff.load();
                  document.fonts.add(ff);
                  if (cfg.onLoad) cfg.onLoad(fam, page);
                  cfg.readySet.add(fam);
                  return fam;
                }
              } catch (e) {
                lastErr = e;
                await new Promise(r => setTimeout(r, 250 * (attempt + 1)));
              }
            }
          }
          throw lastErr || new Error(mode + ' font load failed');
        })();
        cfg.pendingMap.set(fam, p);
        p.catch(() => cfg.pendingMap.delete(fam));
        return p;
      }

      async function loadPageFontsBatch(mode, pages, onProgress) {
        let cursor = 0, done = 0;
        const failed = [];
        const workers = Array.from({ length: Math.min(4, pages.length) }, async () => {
          while (cursor < pages.length) {
            const pg = pages[cursor++];
            try { await ensurePageFont(mode, pg); } catch (e) { failed.push(pg); }
            done++;
            if (onProgress) onProgress(done, pages.length);
          }
        });
        await Promise.all(workers);
        return failed;
      }

      function qcfPageFor(surahNum, verse) {
        const e = qcfData && qcfData[String(surahNum)];
        if (!e || !e.p || !e.p.length) return 1;
        for (let i = 0; i < e.p.length; i++) {
          const r = e.p[i];
          if (verse >= r[0] && verse <= r[1]) return r[2];
        }
        return e.p[0][2];
      }
      function qcfSurahPages(surahNum) {
        const e = qcfData && qcfData[String(surahNum)];
        if (!e || !e.p) return [];
        return Array.from(new Set(e.p.map(r => r[2])));
      }

      /* استخراج جميع مقاطع السور المشتركة في صفحة مصحفية واحدة (مرتبة حسب ترتيب المصحف) */
      function getSurahSegmentsOnPage(pageNum) {
        if (!qcfData) return [];
        const segs = [];
        for (let sn = 1; sn <= 114; sn++) {
          const entry = qcfData[String(sn)];
          if (!entry || !entry.p) continue;
          entry.p.forEach(([startAy, endAy, pg]) => {
            if (pg === pageNum) segs.push({ surahNum: sn, startAy, endAy, pageNum: pg });
          });
        }
        return segs;
      }

      /* جلب نصوص السور المجاورة المشتركة في نفس الصفحة عند تفعيل توزيع المصحف */
      async function ensureSharedPageSurahsText(surahNum) {
        if (mushafPageDist !== 'mushaf' || !qcfData) return;
        const pages = qcfSurahPages(surahNum);
        const neighborSet = new Set();
        pages.forEach(pg => {
          getSurahSegmentsOnPage(pg).forEach(seg => {
            if (seg.surahNum !== surahNum && !surahCache[seg.surahNum]) neighborSet.add(seg.surahNum);
          });
        });
        if (!neighborSet.size) return;
        await Promise.all(Array.from(neighborSet).map(sn => fetchSurahText(sn).catch(() => [])));
      }

      function setQcfChip(state, progress) {
        qcfChipState = state || '';
        qcfChipProgress = progress || '';
        refreshQcfChip();
      }

      function refreshQcfChip() {
        const chip = $('qpQcfChip'); if (!chip) return;
        const t = T[lang];
        const state = qcfChipState;
        chip.className = 'qp-qcf-chip ' + state;
        const isTajweed = currentScript === 'tajweed';
        const loadingTxt = isTajweed ? t.tajweedLoading : t.qcfLoading;
        const readyTxt = isTajweed ? t.tajweedReady : t.qcfReady;
        const partialTxt = isTajweed ? t.tajweedPartial : t.qcfPartial;
        const errorTxt = isTajweed ? t.tajweedError : t.qcfError;
        chip.textContent = state === 'loading'
          ? (typeof loadingTxt === 'function' ? loadingTxt(qcfChipProgress) : loadingTxt)
          : state === 'ready' ? readyTxt
            : state === 'partial' ? partialTxt
              : state === 'error' ? errorTxt : '';
        chip.style.display = ((currentScript === 'qcf' || currentScript === 'tajweed') && state) ? 'inline-flex' : 'none';
      }

      async function preparePageFontMode(mode, surahNum) {
        if (!surahNum || currentScript !== mode) return;
        const cfg = FONT_ENGINES[mode];
        const isTajweed = mode === 'tajweed';
        const readySurah = isTajweed ? tajweedReadySurah : qcfReadySurah;
        if (readySurah === surahNum) { setQcfChip(cfg.failedPages.size ? 'partial' : 'ready'); return; }
        cfg.failedPages.clear();
        setQcfChip('loading', '…');
        try {
          await loadQcfText();
          const pages = qcfSurahPages(surahNum);
          if (!pages.length) throw new Error('no page mapping');
          const failed = await loadPageFontsBatch(mode, pages, (done, total) => {
            if (loadedSurahNum === surahNum && currentScript === mode)
              setQcfChip('loading', done + '/' + total);
          });
          if (loadedSurahNum !== surahNum || currentScript !== mode) return;
          failed.forEach(p => cfg.failedPages.add(p));
          if (failed.length === pages.length) throw new Error('all page fonts failed');
          if (isTajweed) tajweedReadySurah = surahNum;
          else qcfReadySurah = surahNum;
          setQcfChip(failed.length ? 'partial' : 'ready');
          if (failed.length) showToast(isTajweed ? T[lang].tajweedPartial : T[lang].qcfPartial, 'warn');
          reRenderText();
        } catch (e) {
          if (loadedSurahNum !== surahNum) return;
          if (isTajweed) tajweedReadySurah = null;
          else qcfReadySurah = null;
          setQcfChip('error');
          showToast(isTajweed ? T[lang].tajweedError : T[lang].qcfError, 'warn');
          console.warn(mode + ' font:', e);
        }
      }

      function prepareQcf(surahNum) { return preparePageFontMode('qcf', surahNum); }
      function prepareTajweed(surahNum) { return preparePageFontMode('tajweed', surahNum); }

      /* ══════════════════════════════════════════════
         دليل أحكام التجويد الملوّن (Tajweed Rules Legend)
         - عرض مقتضب ومفصل لأحكام التجويد بألوانها المضبوطة
         - قابل للطي والإظهار مع حفظ تفضيل المستخدم
      ══════════════════════════════════════════════ */
      const TJ_LABELS = {
        ar: {
          sakin: 'الحرف الساكن',
          ghunnah: 'غُنّة / إخفاء',
          qalqalah: 'قلقلة',
          tafkheem: 'تفخيم',
          maddTabee: 'مدّ طبيعي',
          maddMunfasil: 'مدّ منفصل',
          maddMuttasil: 'مدّ متّصل',
          maddLazim: 'مدّ لازم',
          sakinTitle: 'الحرف الساكن', sakinDesc: 'حرف لا يُنطق في الوصل (همزة وصل، لام شمسية)',
          ghunnahTitle: 'غُنّة / إخفاء', ghunnahDesc: 'صوت الغنّة عند الإدغام والإخفاء والإقلاب',
          qalqalahTitle: 'قلقلة', qalqalahDesc: 'اضطراب صوت الحرف عند سكونه (ق ط ب ج د)',
          tafkheemTitle: 'تفخيم الصوت', tafkheemDesc: 'تفخيم لام لفظ الجلالة ونحوها',
          maddTabeeTitle: 'مدّ طبيعي', maddTabeeDesc: 'حركتان',
          maddMunfasilTitle: 'مدّ جائز منفصل', maddMunfasilDesc: '٢ أو ٤ أو ٥ حركات',
          maddMuttasilTitle: 'مدّ واجب متّصل', maddMuttasilDesc: '٤ أو ٥ حركات',
          maddLazimTitle: 'مدّ لازم', maddLazimDesc: '٦ حركات',
          hideBtn: '^ إخفاء', showBtn: '⌄ دليل الأحكام'
        },
        en: {
          sakin: 'Silent Letter',
          ghunnah: 'Ghunnah / Ikhfa',
          qalqalah: 'Qalqalah',
          tafkheem: 'Tafkheem',
          maddTabee: 'Natural Madd',
          maddMunfasil: 'Separated Madd',
          maddMuttasil: 'Connected Madd',
          maddLazim: 'Necessary Madd',
          sakinTitle: 'Silent Letter', sakinDesc: 'Not pronounced in connected speech (Wasl / Solar Lam)',
          ghunnahTitle: 'Ghunnah / Ikhfa', ghunnahDesc: 'Nasalization sound during Idgham, Ikhfa & Iqlab',
          qalqalahTitle: 'Qalqalah', qalqalahDesc: 'Echoing sound of quiescent letters (ق ط ب ج د)',
          tafkheemTitle: 'Tafkheem (Heavy)', tafkheemDesc: 'Heavy pronunciation of Lam in Allah & similar',
          maddTabeeTitle: 'Natural Madd', maddTabeeDesc: '2 vowel counts (Harakah)',
          maddMunfasilTitle: 'Permissible Separated Madd', maddMunfasilDesc: '2, 4 or 5 vowel counts',
          maddMuttasilTitle: 'Obligatory Connected Madd', maddMuttasilDesc: '4 or 5 vowel counts',
          maddLazimTitle: 'Necessary Madd', maddLazimDesc: '6 vowel counts',
          hideBtn: '^ Hide', showBtn: '⌄ Rules Guide'
        }
      };

      function updateTajweedLegendLabels() {
        const L = TJ_LABELS[lang] || TJ_LABELS.ar;
        const leg = $('tajweedLegend');
        if (!leg) return;
        leg.querySelectorAll('[data-k]').forEach(el => {
          const k = el.dataset.k;
          if (L[k]) el.textContent = L[k];
        });
        const isCollapsed = leg.classList.contains('collapsed');
        const btn = $('tjToggleBtn');
        if (btn) btn.textContent = isCollapsed ? L.showBtn : L.hideBtn;
      }

      let tajweedLegendTimer = null;

      function scheduleTajweedLegendAutoHide() {
        const leg = $('tajweedLegend');
        if (!leg) return;
        clearTimeout(tajweedLegendTimer);
        if (currentScript !== 'tajweed') {
          leg.style.display = 'none';
          return;
        }
        leg.style.display = 'block';
        leg.classList.remove('collapsed');
        updateTajweedLegendLabels();
        // إخفاء دليل الأحكام تلقائياً بعد 3 ثوانٍ
        tajweedLegendTimer = setTimeout(() => {
          if (leg && currentScript === 'tajweed') {
            leg.style.display = 'none';
          }
        }, 3000);
      }

      function initTajweedLegend() {
        const leg = $('tajweedLegend');
        const bar = $('tjLegendBar');
        const btn = $('tjToggleBtn');
        if (!leg || !bar || !btn) return;

        updateTajweedLegendLabels();

        const hideNow = () => {
          clearTimeout(tajweedLegendTimer);
          leg.style.display = 'none';
        };

        bar.onclick = hideNow;
        btn.onclick = e => { e.stopPropagation(); hideNow(); };
      }

      /* ── خيارات النص ── */
      function setScript(mode) {
        currentScript = mode;
        document.querySelectorAll('#optUthmani,#optPrint,#optSimple,#optQcf,#optTajweed').forEach(b => b.classList.remove('active'));
        const ids = { uthmani: 'optUthmani', print: 'optPrint', simple: 'optSimple', qcf: 'optQcf', tajweed: 'optTajweed' };
        $(ids[mode])?.classList.add('active');
        if (mode !== 'qcf' && mode !== 'tajweed') setQcfChip('');

        // إظهار دليل أحكام التجويد عند اختيار خط التجويد ثم إخفاؤه تلقائياً بعد 3 ثوانٍ
        if (mode === 'tajweed') {
          initTajweedLegend();
          scheduleTajweedLegendAutoHide();
        } else {
          clearTimeout(tajweedLegendTimer);
          const leg = $('tajweedLegend');
          if (leg) leg.style.display = 'none';
        }

        if (loadedSurahNum) {
          if (mode === 'qcf') {
            if (qcfReadySurah === loadedSurahNum) { setQcfChip(qcfPagesFailed.size ? 'partial' : 'ready'); reRenderText(); }
            else prepareQcf(loadedSurahNum);
          } else if (mode === 'tajweed') {
            if (tajweedReadySurah === loadedSurahNum) { setQcfChip(tajweedPagesFailed.size ? 'partial' : 'ready'); reRenderText(); }
            else prepareTajweed(loadedSurahNum);
          } else {
            reRenderText();
          }
        }
      }
      function setLineMode(mode) {
        currentLineMode = mode;
        lsSave('lineMode', mode);
        document.querySelectorAll('#optBlock,#optInline').forEach(b => b.classList.remove('active'));
        $(mode === 'block' ? 'optBlock' : 'optInline')?.classList.add('active');
        if (loadedSurahNum) reRenderText();
      }

      function setPageMode(mode) {
        textPageMode = (mode === 'pages') ? 'pages' : 'scroll';
        lsSave('textPageMode', textPageMode);
        document.querySelectorAll('#setPageModeSeg button').forEach(b =>
          b.classList.toggle('active', b.dataset.pm === textPageMode));
        if (loadedSurahNum) reRenderText();
      }

      function setPageDist(mode) {
        mushafPageDist = (mode === 'surah') ? 'surah' : 'mushaf';
        lsSave('mushafPageDist', mushafPageDist);
        document.querySelectorAll('#setPageDistSeg button').forEach(b =>
          b.classList.toggle('active', b.dataset.pd === mushafPageDist));
        if (loadedSurahNum) {
          if (mushafPageDist === 'mushaf') ensureSharedPageSurahsText(loadedSurahNum).then(() => reRenderText());
          else reRenderText();
        }
      }

      function showTextPage(idx, animDir = '') {
        const container = $('qpBody');
        const navEl = $('qpTextPageNav');
        if (!container) return;
        const pageEls = Array.from(container.querySelectorAll('.qp-text-page'));
        if (textPageMode !== 'pages' || !pageEls.length) {
          if (navEl) navEl.style.display = 'none';
          return;
        }
        textCurrentPageIdx = Math.max(0, Math.min(idx, pageEls.length - 1));
        pageEls.forEach((pEl, i) => {
          const isAct = (i === textCurrentPageIdx);
          pEl.classList.toggle('active', isAct);
          if (isAct && animDir) {
            pEl.classList.remove('page-flip-next', 'page-flip-prev');
            void pEl.offsetWidth;
            pEl.classList.add(animDir === 'next' ? 'page-flip-next' : 'page-flip-prev');
          }
        });
        container.scrollTop = 0;

        if (navEl) {
          navEl.style.display = 'flex';
          const pageNum = pageEls[textCurrentPageIdx]?.dataset.page || (textCurrentPageIdx + 1);
          const lbl = $('qpTextPageLabel');
          if (lbl) {
            lbl.textContent = `${lang === 'ar' ? 'صفحة' : 'Page'} ${lang === 'ar' ? toArDigits(pageNum) : pageNum} (${textCurrentPageIdx + 1}/${pageEls.length})`;
          }
          const prevB = $('qpTextPrev');
          const nextB = $('qpTextNext');
          if (prevB) {
            prevB.disabled = (textCurrentPageIdx === 0);
            prevB.onclick = () => showTextPage(textCurrentPageIdx - 1, 'prev');
          }
          if (nextB) {
            nextB.disabled = (textCurrentPageIdx === pageEls.length - 1);
            nextB.onclick = () => showTextPage(textCurrentPageIdx + 1, 'next');
          }
        }
        requestAnimationFrame(calibrateMushafLines);
      }
      function reRenderText() {
        if (!ayahsData.length) return;
        const bodyEl = $('qpBody'); if (!bodyEl) return;
        const wrap = bodyEl.querySelector('#qpTextWrap');
        if (wrap) wrap.remove();
        const div = document.createElement('div');
        div.id = 'qpTextWrap';
        div.innerHTML = renderAyahsHTML(loadedSurahNum, ayahsData);
        bodyEl.prepend(div);
        wireAyahClicks(loadedSurahNum, ayahsData);
        showTextPage(textCurrentPageIdx);
        requestAnimationFrame(calibrateMushafLines);
        setTimeout(() => highlightCurrentPosition(), 200);
      }

      /* ── تبويب الجوال ── */
      const mobileTabBar = document.getElementById('mobileTabBar');
      function setMobileTab(tab) {
        const isMobile = window.innerWidth <= 767;
        if (!isMobile) return;
        // استخدام open/close الموحّدتين كي تُحدَّث حالة textPanelOpen
        // (كان التبويب يفتح اللوحة بصرياً دون تفعيل مزامنة التمييز مع التلاوة)
        if (tab === 'text') openTextPanel();
        else closeTextPanel();
      }
      function checkMobileTabBar() {
        if (!mobileTabBar) return;
        mobileTabBar.style.display = window.innerWidth <= 767 ? 'flex' : 'none';
      }
      window.addEventListener('resize', checkMobileTabBar);
      checkMobileTabBar();

      /* إدارة زر الركن لإظهار أو إخفاء بقية الأزرار والأشرطة والمشغل المصغر */
      let qpBarsCollapsed = (localStorage.getItem('qpBarsCollapsed') ?? '1') === '1';
      function applyQpBarsState() {
        if (!quranPanel) return;
        quranPanel.classList.toggle('qp-bars-collapsed', qpBarsCollapsed);
        document.body.classList.toggle('qp-immersive-clean', textPanelOpen && qpBarsCollapsed);
        if (qpCornerToggleBtn) {
          qpCornerToggleBtn.classList.toggle('bars-open', !qpBarsCollapsed);
          qpCornerToggleBtn.textContent = qpBarsCollapsed ? '☰' : '▴';
          qpCornerToggleBtn.setAttribute('aria-expanded', String(!qpBarsCollapsed));
        }
        requestAnimationFrame(calibrateMushafLines);
      }
      if (qpCornerToggleBtn) {
        qpCornerToggleBtn.onclick = () => {
          qpBarsCollapsed = !qpBarsCollapsed;
          lsSave('qpBarsCollapsed', qpBarsCollapsed ? '1' : '0');
          applyQpBarsState();
        };
      }

      /* دالة موحّدة لتكبير وتصغير الخط في الحاسوب والجوال */
      function changeQpFontSize(delta) {
        qpFontSize = Math.max(16, Math.min(38, qpFontSize + delta));
        lsSave('qpFontSizeV2', qpFontSize);
        applyFontSize();
        const pct = Math.round((qpFontSize / 24) * 100);
        showToast(lang === 'ar' ? `🔠 حجم الخط: ${pct}%` : `🔠 Font size: ${pct}%`, 'info', 1400);
      }
      if (qpMobFontPlus) qpMobFontPlus.onclick = () => changeQpFontSize(2);
      if (qpMobFontMinus) qpMobFontMinus.onclick = () => changeQpFontSize(-2);

      function openTextPanel() {
        textPanelOpen = true;
        appLayout.classList.remove('text-closed');
        appLayout.classList.add('text-open');
        textViewBtn.classList.add('active');
        if (window.innerWidth <= 767) document.body.classList.add('text-open-mobile');
        lastHighlightTime = 0;
        if (mobileTabBar) { $('mtabText')?.classList.add('active'); $('mtabPlayer')?.classList.remove('active'); }
        applyQpBarsState();
        switchQpTab('text');
        if (currentScript === 'tajweed') scheduleTajweedLegendAutoHide();
        else { const leg = $('tajweedLegend'); if (leg) leg.style.display = 'none'; }
        if (sIdx !== null) loadQuranText(surahs[sIdx].n);
      }

      function closeTextPanel() {
        textPanelOpen = false;
        appLayout.classList.remove('text-open');
        appLayout.classList.add('text-closed');
        textViewBtn.classList.remove('active');
        document.body.classList.remove('text-open-mobile', 'qp-immersive-clean');
        if (mobileTabBar) { $('mtabPlayer')?.classList.add('active'); $('mtabText')?.classList.remove('active'); }
      }

      function toggleTextPanel() {
        textPanelOpen ? closeTextPanel() : openTextPanel();
      }

      /* ── تحميل رئيسي ── */
      async function loadQuranText(surahNum) {
        if (!surahNum) return;
        const s = surahs.find(x => x.n === surahNum);
        const si = s ? surahs.indexOf(s) : 0;
        const smeta = (lang === 'ar' ? SMETA_AR : SMETA_EN)[si];

        // ── إظهار اسم السورة والقارئ فوراً ──
        if (qpTitle) qpTitle.textContent = s ? s.name : '—';
        if (qpMeta) {
          const recName = rIdx !== null && reciters[rIdx] ? reciters[rIdx].name : '';
          const typeLabel = smeta ? smeta[1] : '';
          const ayahCount = smeta ? smeta[0] : '';
          qpMeta.textContent = [recName, typeLabel, ayahCount ? (ayahCount + ' ' + T[lang].ayahsLbl) : ''].filter(Boolean).join(' • ');
        }
        qpSearchBar.style.display = 'block';

        // skeleton خفيف أثناء التحميل
        const bodyEl = $('qpBody');
        if (bodyEl) bodyEl.innerHTML = `
    <div style="padding:20px;text-align:center;color:var(--text-soft)">
      <div class="qp-spinner" style="margin:0 auto 14px"></div>
      <div style="font-size:13px;font-weight:600">${lang === 'ar' ? 'جاري تحميل النص...' : 'Loading text...'}</div>
      <div style="font-size:12px;opacity:0.6;margin-top:6px">${s ? s.name : ''}</div>
    </div>`;

        loadedSurahNum = surahNum;

        // إذا كان تبويب المصحف نشطاً، حمّل الصور فوراً
        if (currentQpTab === 'mushaf') loadMushafView(surahNum);

        // تحميل النص أولاً
        const [ayahs] = await Promise.all([fetchSurahText(surahNum).catch(() => []), ensureSharedPageSurahsText(surahNum)]);
        // حارس السباق: إن غيّر المستخدم السورة أثناء التحميل نتجاهل النتيجة المتأخرة
        if (loadedSurahNum !== surahNum) return;
        ayahsData = ayahs;
        if (ayahs.length) surahCache[surahNum] = ayahs;

        syncAutoScrollBanner();

        // رسم النص فوراً
        renderTextPane(surahNum, ayahs);

        // خطوط المصحف (QCF) أو خط التجويد الملوّن: تُحمّل خطوط الصفحات ثم يُعاد الرسم
        if (currentScript === 'qcf') prepareQcf(surahNum);
        else if (currentScript === 'tajweed') prepareTajweed(surahNum);

        // ثم المعلومات بشكل غير متزامن
        fetchSurahInfo(surahNum).then(info => {
          if (loadedSurahNum !== surahNum) return;
          if (info) infoCache[surahNum] = info;
          renderInfoPane(surahNum, info);
        }).catch(() => { if (loadedSurahNum === surahNum) renderInfoPane(surahNum, null); });

        // الانتقال السريع: جلب نص السورة التالية مسبقاً بعد لحظة هدوء
        schedulePrefetchNextSurah(surahNum);
      }

      /* ── جلب مسبق لنص السورة التالية (يجعل الانتقال شبه فوري) ── */
      let prefetchTimer = null;
      function schedulePrefetchNextSurah(surahNum) {
        clearTimeout(prefetchTimer);
        prefetchTimer = setTimeout(() => {
          const nx = surahNum + 1;
          if (nx <= 114 && !surahCache[nx]) fetchSurahText(nx).catch(() => { });
        }, 1500);
      }

      /* ── جلب النص ── */
      // جلب مع مهلة زمنية — طلب معلّق كان يجمّد تحميل النص بلا حد
      async function fetchJSON(url, timeoutMs) {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), timeoutMs || 8000);
        try {
          const r = await fetch(url, { signal: ctrl.signal });
          if (r.ok) return await r.json();
        } catch (e) { } finally { clearTimeout(t); }
        return null;
      }
      async function fetchWithProxy(url) {
        const direct = await fetchJSON(url, 8000);
        if (direct) return direct;
        const w = await fetchJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, 10000);
        if (w) { try { return JSON.parse(w.contents || 'null'); } catch (e) { } }
        return null;
      }

      async function fetchSurahText(n) {
        if (surahCache[n]) return surahCache[n];

        // المصادر الثلاثة بالتوازي بدل التسلسل — يقلّص زمن التحميل إلى الثلث
        const [uthmaniData, printD, simpleD] = await Promise.all([
          fetchWithProxy(`https://api.alquran.cloud/v1/surah/${n}/quran-uthmani`),          // 1. العثماني
          fetchWithProxy(`https://api.alquran.cloud/v1/surah/${n}`),                        // 2. المطبوع
          fetchWithProxy(`https://api.quran.com/api/v4/verses/by_chapter/${n}?words=false&per_page=300&fields=text_imlaei_simple`) // 3. الإملائي البسيط
        ]);
        const uthmaniAyahs = uthmaniData?.data?.ayahs || [];
        const printAyahs = printD?.data?.ayahs || [];
        const simpleAyahs = simpleD?.verses || [];

        if (uthmaniAyahs.length) {
          const mapped = uthmaniAyahs.map((ay, i) => ({
            numberInSurah: ay.numberInSurah,
            text:       ay.text,
            textPrint:  printAyahs[i]?.text || ay.text,
            textSimple: simpleAyahs[i]?.text_imlaei_simple || ay.text.replace(/[ؐ-ًؚ-ٟۖ-ۜ۟-۪ۤۧۨ-ۭ_ـ]/g, '')
          }));
          surahCache[n] = mapped;
          return mapped;
        }
        return [];
      }

      async function fetchSurahInfo(n) {
        if (infoCache[n]) return infoCache[n];
        const d = await fetchWithProxy(`https://api.quranpedia.net/api/v1/surah/information/${n}`);
        if (d) { infoCache[n] = d; return d; }
        return null;
      }

      /* مواضع آيات السجدة الـ 15 في القرآن الكريم */
      const SAJDAH_MAP = {
        7: [206], 13: [15], 16: [50], 17: [109], 19: [58],
        22: [18, 77], 25: [60], 27: [26], 32: [15], 38: [24],
        41: [38], 53: [62], 84: [21], 96: [19]
      };

      /* ── رسم تبويب النص ── */
      function renderTextPane(surahNum, ayahs) {
        const bodyEl = $('qpBody'); if (!bodyEl) return;
        let html = ayahs.length ? renderAyahsHTML(surahNum, ayahs) : `<div style="text-align:center;padding:32px">⚠️ ${lang === 'ar' ? 'تعذّر تحميل النص' : 'Error'}</div>`;
        bodyEl.innerHTML = `<div id="qpTextWrap">${html}</div>`;

        if ($('qpFontPlus')) $('qpFontPlus').onclick = () => changeQpFontSize(2);
        if ($('qpFontMinus')) $('qpFontMinus').onclick = () => changeQpFontSize(-2);

        textCurrentPageIdx = 0;
        wireAyahClicks(surahNum, ayahs);
        showTextPage(0);
        requestAnimationFrame(calibrateMushafLines);
        if (ayahs.length) setTimeout(() => highlightCurrentPosition(), 400);
      }

      /* ── رسم تبويب المعلومات ── */
      const SURAH_LOCAL = [['Al-Fatihah', 'The Opening', 5, 1], ['Al-Baqarah', 'The Cow', 87, 1], ['Ali \'Imran', 'Family of Imran', 89, 3], ['An-Nisa', 'The Women', 92, 4], ['Al-Ma\'idah', 'The Table Spread', 112, 6], ['Al-An\'am', 'The Cattle', 55, 7], ['Al-A\'raf', 'The Heights', 39, 8], ['Al-Anfal', 'The Spoils of War', 88, 10], ['At-Tawbah', 'The Repentance', 113, 10], ['Yunus', 'Jonah', 51, 11], ['Hud', 'Hud', 52, 11], ['Yusuf', 'Joseph', 53, 12], ['Ar-Ra\'d', 'The Thunder', 96, 13], ['Ibrahim', 'Abraham', 72, 13], ['Al-Hijr', 'The Rocky Tract', 54, 14], ['An-Nahl', 'The Bee', 70, 14], ['Al-Isra\'', 'The Night Journey', 50, 15], ['Al-Kahf', 'The Cave', 69, 15], ['Maryam', 'Mary', 44, 16], ['Ta-Ha', 'Ta-Ha', 45, 16], ['Al-Anbya\'', 'The Prophets', 73, 17], ['Al-Hajj', 'The Pilgrimage', 103, 17], ['Al-Mu\'minun', 'The Believers', 74, 18], ['An-Nur', 'The Light', 102, 18], ['Al-Furqan', 'The Criterion', 42, 18], ['Ash-Shu\'ara\'', 'The Poets', 47, 19], ['An-Naml', 'The Ant', 48, 19], ['Al-Qasas', 'The Stories', 49, 20], ['Al-\'Ankabut', 'The Spider', 85, 20], ['Ar-Rum', 'The Romans', 84, 21], ['Luqman', 'Luqman', 57, 21], ['As-Sajdah', 'The Prostration', 75, 21], ['Al-Ahzab', 'The Combined Forces', 90, 21], ['Saba\'', 'Sheba', 58, 22], ['Fatir', 'Originator', 43, 22], ['Ya-Sin', 'Ya-Sin', 41, 22], ['As-Saffat', 'Those Ranged in Ranks', 56, 23], ['Sad', 'The Letter Sad', 38, 23], ['Az-Zumar', 'The Troops', 59, 23], ['Ghafir', 'The Forgiver', 60, 24], ['Fussilat', 'Explained in Detail', 61, 24], ['Ash-Shura', 'The Consultation', 62, 25], ['Az-Zukhruf', 'The Ornaments of Gold', 63, 25], ['Ad-Dukhan', 'The Smoke', 64, 25], ['Al-Jathiyah', 'The Kneeling', 65, 25], ['Al-Ahqaf', 'The Wind-Curved Sandhills', 66, 26], ['Muhammad', 'Muhammad', 95, 26], ['Al-Fath', 'The Victory', 111, 26], ['Al-Hujurat', 'The Rooms', 106, 26], ['Qaf', 'The Letter Qaf', 34, 26], ['Adh-Dhariyat', 'The Winnowing Winds', 67, 26], ['At-Tur', 'The Mount', 76, 27], ['An-Najm', 'The Star', 23, 27], ['Al-Qamar', 'The Moon', 37, 27], ['Ar-Rahman', 'The Beneficent', 97, 27], ['Al-Waqi\'ah', 'The Inevitable', 46, 27], ['Al-Hadid', 'The Iron', 94, 27], ['Al-Mujadila', 'The Pleading Woman', 105, 28], ['Al-Hashr', 'The Exile', 101, 28], ['Al-Mumtahanah', 'She that is to be Examined', 91, 28], ['As-Saf', 'The Ranks', 109, 28], ['Al-Jumu\'ah', 'The Congregation', 110, 28], ['Al-Munafiqun', 'The Hypocrites', 104, 28], ['At-Taghabun', 'The Mutual Disillusion', 108, 28], ['At-Talaq', 'The Divorce', 99, 28], ['At-Tahrim', 'The Prohibition', 107, 28], ['Al-Mulk', 'The Sovereignty', 77, 29], ['Al-Qalam', 'The Pen', 2, 29], ['Al-Haqqah', 'The Reality', 78, 29], ['Al-Ma\'arij', 'The Ascending Stairways', 79, 29], ['Nuh', 'Noah', 71, 29], ['Al-Jinn', 'The Jinn', 40, 29], ['Al-Muzzammil', 'The Enshrouded One', 3, 29], ['Al-Muddaththir', 'The Cloaked One', 4, 29], ['Al-Qiyamah', 'The Resurrection', 31, 29], ['Al-Insan', 'The Human', 98, 29], ['Al-Mursalat', 'The Emissaries', 33, 29], ['An-Naba\'', 'The Tidings', 80, 30], ['An-Nazi\'at', 'Those who Drag Forth', 81, 30], ['\'Abasa', 'He Frowned', 24, 30], ['At-Takwir', 'The Overthrowing', 7, 30], ['Al-Infitar', 'The Cleaving', 82, 30], ['Al-Mutaffifin', 'The Defrauding', 86, 30], ['Al-Inshiqaq', 'The Sundering', 83, 30], ['Al-Buruj', 'The Mansions of the Stars', 27, 30], ['At-Tariq', 'The Nightcomer', 36, 30], ['Al-A\'la', 'The Most High', 8, 30], ['Al-Ghashiyah', 'The Overwhelming', 68, 30], ['Al-Fajr', 'The Dawn', 10, 30], ['Al-Balad', 'The City', 35, 30], ['Ash-Shams', 'The Sun', 26, 30], ['Al-Layl', 'The Night', 9, 30], ['Ad-Duhaa', 'The Morning Hours', 11, 30], ['Ash-Sharh', 'The Relief', 12, 30], ['At-Tin', 'The Fig', 28, 30], ['Al-\'Alaq', 'The Clot', 1, 30], ['Al-Qadr', 'The Power', 25, 30], ['Al-Bayyinah', 'The Clear Proof', 100, 30], ['Az-Zalzalah', 'The Earthquake', 93, 30], ['Al-\'Adiyat', 'The Courser', 14, 30], ['Al-Qari\'ah', 'The Calamity', 30, 30], ['At-Takathur', 'Rivalry in World Increase', 16, 30], ['Al-\'Asr', 'The Declining Day', 13, 30], ['Al-Humazah', 'The Traducer', 32, 30], ['Al-Fil', 'The Elephant', 19, 30], ['Quraysh', 'Quraysh', 29, 30], ['Al-Ma\'un', 'The Small Kindnesses', 17, 30], ['Al-Kawthar', 'The Abundance', 15, 30], ['Al-Kafirun', 'The Disbelievers', 18, 30], ['An-Nasr', 'The Divine Support', 114, 30], ['Al-Masad', 'The Palm Fibre', 6, 30], ['Al-Ikhlas', 'The Sincerity', 22, 30], ['Al-Falaq', 'The Daybreak', 20, 30], ['An-Nas', 'The Mankind', 21, 30]];

      function renderInfoPane(surahNum, info) {
        const el = $('qpInfoBody'); if (!el) return;

        const si = surahNum - 1;
        const s = surahs[si] || surahs.find(x => x.n === surahNum);
        const smeta = (lang === 'ar' ? SMETA_AR : SMETA_EN)[si] || [];
        const localData = SURAH_LOCAL[si] || [];
        const translitName = localData[0] || '';
        const meaning = localData[1] || '';
        const revOrder = localData[2] || '';
        const juzNum = localData[3] || '';
        const ayahCount = smeta[0] || '';
        const surahType = smeta[1] || '';
        const wordsCount = info?.words_count?.value ? String(info.words_count.value).trim() : '';

        const heroHTML = `
          <div class="si-hero">
            <div class="si-arabic">${s ? escHTML(s.name) : '—'}</div>
            <div class="si-latin">${escHTML(translitName)}</div>
            <div class="si-meaning">${meaning ? (lang === 'ar' ? 'المعنى: ' : 'Meaning: ') + escHTML(meaning) : ''}</div>
            <div class="si-pills">
              <span class="si-pill">${lang === 'ar' ? 'سورة رقم' : 'Surah'} ${surahNum}</span>
              ${ayahCount ? `<span class="si-pill">${ayahCount} ${T[lang].ayahsLbl}</span>` : ''}
              ${surahType ? `<span class="si-pill ${surahType.includes('مكية') || surahType.includes('Meccan') ? 'meccan' : 'medinan'}">${surahType}</span>` : ''}
              ${juzNum ? `<span class="si-pill">${lang === 'ar' ? 'الجزء' : 'Juz'} ${juzNum}</span>` : ''}
              ${revOrder ? `<span class="si-pill">${lang === 'ar' ? 'ترتيب النزول' : 'Rev. order'}: ${revOrder}</span>` : ''}
            </div>
          </div>
          <div class="si-stats">
            <div class="si-stat"><div class="si-stat-n">${surahNum}</div><div class="si-stat-l">${lang === 'ar' ? 'ترتيبها' : 'Order'}</div></div>
            <div class="si-stat"><div class="si-stat-n">${ayahCount || '—'}</div><div class="si-stat-l">${lang === 'ar' ? 'آياتها' : 'Verses'}</div></div>
            <div class="si-stat"><div class="si-stat-n">${juzNum || '—'}</div><div class="si-stat-l">${lang === 'ar' ? 'جزؤها' : 'Juz'}</div></div>
          </div>`;

        const ALL_TABS = [
          { id: 'introduction', ar: '📖 نبذة', en: '📖 Intro', keys: ['introduction'] },
          { id: 'topics', ar: '📌 الموضوعات', en: '📌 Topics', keys: ['topics', 'purposes'] },
          { id: 'revelation', ar: '🌙 النزول', en: '🌙 Revelation', keys: ['revelation', 'descent', 'asmaoha'] },
          { id: 'grace', ar: '✨ الفضل', en: '✨ Grace', keys: ['grace'] },
          { id: 'prophet', ar: '🕌 القصص', en: '🕌 Stories', keys: ['prophet'] }
        ];

        const visibleTabs = info
          ? ALL_TABS.filter(t => t.keys.some(k => info[k] && String(info[k].value || '').trim()))
          : [];

        const basicsPane = `
          <div class="info-section" style="padding:12px 16px">
            ${infoRowHTML('🕌', lang === 'ar' ? 'اسمها' : 'Name', s ? s.name : '—')}
            ${translitName ? infoRowHTML('🔤', lang === 'ar' ? 'الاسم بالإنجليزية' : 'English Name', translitName) : ''}
            ${meaning ? infoRowHTML('💡', lang === 'ar' ? 'المعنى' : 'Meaning', meaning) : ''}
            ${infoRowHTML('🔢', lang === 'ar' ? 'ترتيبها المصحفي' : 'Order in Mushaf', String(surahNum))}
            ${ayahCount ? infoRowHTML('📜', lang === 'ar' ? 'عدد آياتها' : 'Number of Verses', String(ayahCount)) : ''}
            ${wordsCount ? infoRowHTML('💬', lang === 'ar' ? 'عدد كلماتها' : 'Word Count', wordsCount) : ''}
            ${surahType ? infoRowHTML('📍', lang === 'ar' ? 'نوعها' : 'Type', surahType) : ''}
            ${juzNum ? infoRowHTML('📚', lang === 'ar' ? 'جزؤها' : 'Juz', String(juzNum)) : ''}
            ${revOrder ? infoRowHTML('🕰️', lang === 'ar' ? 'ترتيب نزولها' : 'Revelation Order', String(revOrder)) : ''}
          </div>`;

        let tabBar = `<div class="info-tabs" id="infoSubTabs" style="padding:0 6px;flex-shrink:0">
          <button class="info-tab-btn active" onclick="switchIT('basics')">${lang === 'ar' ? '📋 أساسيات' : '📋 Basics'}</button>`;

        visibleTabs.forEach(t => {
          tabBar += `<button class="info-tab-btn" onclick="switchIT('${t.id}')">${lang === 'ar' ? t.ar : t.en}</button>`;
        });
        tabBar += '</div>';

        let panes = `<div class="info-pane active" id="ipt_basics" style="flex:1;overflow-y:auto">${basicsPane}`;
        if (!info) {
          panes += `<div style="padding:10px 16px;font-size:12px;color:var(--text-soft);text-align:center;opacity:0.75">
      ${lang === 'ar' ? 'ℹ️ المعلومات التفصيلية تتطلب اتصالاً بالإنترنت' : 'ℹ️ Detailed info requires internet'}
      &nbsp;<a href="https://quranpedia.net/surah/${surahNum}" target="_blank" rel="noopener"
        style="color:var(--acc1);font-weight:700">quranpedia.net ↗</a></div>`;
        }
        panes += '</div>';

        visibleTabs.forEach(t => {
          let rows = '';
          t.keys.forEach(k => {
            const f = info?.[k]; if (!f || !String(f.value || '').trim()) return;
            rows += infoRowHTML(f.icon || infoIcon(k), f.title || (lang === 'ar' ? infoTitleAr(k) : k), f.value);
          });
          panes += `<div class="info-pane" id="ipt_${t.id}" style="flex:1;overflow-y:auto;display:none"><div class="info-section">${rows}</div></div>`;
        });

        el.innerHTML = heroHTML + tabBar + panes;
      }

      /* تبديل تبويبات المعلومات */
      function switchIT(id) {
        const ib = $('qpInfoBody'); if (!ib) return;
        ib.querySelectorAll('#infoSubTabs .info-tab-btn').forEach(b => {
          b.classList.toggle('active', !!b.getAttribute('onclick')?.includes(`'${id}'`));
        });
        ib.querySelectorAll('[id^="ipt_"]').forEach(p => {
          const on = p.id === `ipt_${id}`;
          p.classList.toggle('active', on);
          p.style.display = on ? 'flex' : 'none';
        });
      }

      /* ترجمة مفاتيح API للعربية */
      function infoTitleAr(key) {
        const m = {
          introduction: 'نبذة عن السورة', asmaoha: 'أسماؤها', topics: 'موضوعاتها',
          purposes: 'مقاصدها', revelation: 'أسباب النزول', grace: 'فضلها', prophet: 'القصص النبوية',
          surah_number: 'ترتيبها المصحفي', surah_type: 'نوعها', ayahs_count: 'آياتها',
          words_count: 'عدد الكلمات', descent: 'ترتيب نزولها'
        };
        return m[key] || key;
      }

      /* مساعد: HTML لصف معلومة */
      function infoRowHTML(icon, title, value) {
        const val = String(value || '').trim();
        const isLong = val.length > 80;
        const hasAr = /[\\u0600-\\u06ff]/.test(val);
        return `<div class="info-row">
    <div class="info-row-title">${icon} ${escHTML(title)}</div>
    <div class="info-row-val${isLong && hasAr ? ' arabic' : ''}">${escHTML(val)}</div>
  </div>`;
      }
      function infoIcon(key) {
        const m = {
          introduction: '📖', surah_number: '🔢', surah_type: '📍', words_count: '💬',
          descent: '🕰️', ayahs_count: '📜', asmaoha: '🏷️', topics: '📌', purposes: '🎯',
          grace: '✨', prophet: '🕌', revelation: '🌙'
        };
        return m[key] || '📄';
      }

      /* ── بناء HTML للآيات ── */
      const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      function toArDigits(n) {
        return String(n ?? '').replace(/[0-9]/g, d => AR_DIGITS[+d]);
      }

      const JUZ_STARTS = [
        [1, 1], [2, 142], [2, 253], [3, 93], [4, 24], [4, 148], [5, 82], [6, 111], [7, 88], [8, 41],
        [9, 93], [10, 110], [11, 6], [11, 97], [12, 52], [13, 18], [14, 53], [15, 92], [17, 1], [18, 75],
        [19, 97], [21, 1], [22, 56], [23, 106], [25, 21], [26, 111], [27, 56], [28, 51], [29, 46], [30, 1]
      ];

      function renderAyahsHTML(surahNum, ayahs) {
        const isInline  = currentLineMode === 'inline';
        const isUthmani = currentScript === 'uthmani';
        const isSimple  = currentScript === 'simple';
        const isQcf     = currentScript === 'qcf';
        const isTajweed = currentScript === 'tajweed';
        const isQcfLike = isQcf || isTajweed;

        const qcfReady = isTajweed ? (tajweedReadySurah === surahNum) : (qcfReadySurah === surahNum);
        const qcfEntryMain = (isQcfLike && qcfReady && qcfData) ? qcfData[String(surahNum)] : null;
        const qcfWrapCls = qcfEntryMain ? (' qcf-mode' + (isTajweed ? ' tajweed-mode' : '')) : '';
        const pagesFailed = isTajweed ? tajweedPagesFailed : qcfPagesFailed;

        function stripBasmalahPrefix(txt) {
          if (!txt) return '';
          const words = txt.trim().split(/\s+/);
          if (words.length >= 5) {
            const first4 = normalizeAr(words.slice(0, 4).join(' '));
            if (first4.startsWith(normalizeAr('بسم الله الرحمن الرحيم')) || first4.startsWith(normalizeAr('بسم'))) {
              return words.slice(4).join(' ');
            }
          }
          return txt;
        }

        const pickTxtFor = (sNum, ay) => {
          if (!ay) return '';
          let t = isUthmani ? ay.text : (isSimple ? (ay.textSimple || ay.textPrint) : ay.textPrint);
          if (sNum !== 1 && sNum !== 9 && ay.numberInSurah === 1) {
            t = stripBasmalahPrefix(t);
          }
          return t;
        };

        const attrEsc = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const QSP = '<span class="qsp"> </span>';
        const plainCell = plain => ({ txt: plain, style: `font-size:${qpFontSize}px`, cls: '', data: '', marker: true });

        const cellFor = (sNum, ayNum, ayObj) => {
          const plain = ayObj ? pickTxtFor(sNum, ayObj) : `${lang === 'ar' ? 'آية' : 'Verse'} ${ayNum}`;
          const sEntry = (isQcfLike && qcfReady && qcfData) ? qcfData[String(sNum)] : null;
          if (!sEntry) return plainCell(plain);
          const raw = (sEntry.g[ayNum - 1] || '').replace(/\r/g, '');
          if (!raw.replace(/\s+/g, '')) return plainCell(plain);
          const pg = qcfPageFor(sNum, ayNum);
          if (pagesFailed.has(pg)) return plainCell(plain);
          const fam = isTajweed ? tajweedFontName(pg) : qcfFontName(pg);
          const pgStr = String(pg).padStart(3, '0');
          const palStyle = isTajweed ? `--page-pal:--tajweed-dark-${pgStr};--tj-light-fam:'${fam}';--tj-dark-fam:'${fam}_Dark';` : '';
          const lines = raw.split('\n').map(s => Array.from(s).filter(ch => !/\s/.test(ch)));
          const parts = lines.map(arr => arr.join(QSP));
          const txt = parts.filter(p => p.length).join(QSP);
          return {
            txt,
            style: `font-family:'${fam}';${palStyle}`,
            cls: ' qcf-ayah' + (isTajweed ? ' tajweed-ayah' : ''),
            data: ` data-text="${attrEsc(plain)}"`,
            marker: false
          };
        };

        function buildBannerFor(sNum, isNeighbor = false) {
          const sObj = surahs.find(x => x.n === sNum);
          const si = sObj ? surahs.indexOf(sObj) : (sNum - 1);
          const smeta = (lang === 'ar' ? SMETA_AR : SMETA_EN)[si] || [];
          const aCount = smeta[0] || (qcfData?.[String(sNum)]?.g?.length || '');
          const sType = smeta[1] || '';
          const rName = sObj ? sObj.name.replace(/^سورة\s+/, '') : String(sNum);
          const cName = rName || (sObj ? sObj.name : String(sNum));
          return `
          <div class="mushaf-surah-banner${isNeighbor ? ' mushaf-neighbor-surah' : ''}" role="region" aria-label="سورة ${cName}">
            <div class="ms-inner">
              <div class="ms-meta ms-meta-right">
                <span class="ms-badge">${sType || (lang === 'ar' ? 'مكية' : 'Meccan')}</span>
              </div>
              <div class="ms-title-block">
                <span class="ms-ornament">❖</span>
                <span class="ms-name">سُورَةُ ${cName}</span>
                <span class="ms-ornament">❖</span>
              </div>
              <div class="ms-meta ms-meta-left">
                <span class="ms-badge">${toArDigits(aCount)} ${T[lang].ayahsLbl}</span>
              </div>
            </div>
          </div>` + ((sNum !== 9 && sNum !== 1) ? `
          <div class="si-basmalah${isNeighbor ? ' mushaf-neighbor-surah' : ''}">
            <span class="basmalah-decor">۞</span>
            <span class="basmalah-text">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</span>
            <span class="basmalah-decor">۞</span>
          </div>` : '');
        }

        function buildFooterFor(sNum) {
          const sObj = surahs.find(x => x.n === sNum);
          const cName = sObj ? (sObj.name.replace(/^سورة\s+/, '') || sObj.name) : String(sNum);
          return `
          <div class="mushaf-surah-footer">
            <span class="ms-footer-deco">❖ ❖ ❖</span>
            <span class="ms-footer-txt">${lang === 'ar' ? `نهاية سورة ${cName}` : `End of Surah ${cName}`}</span>
            <span class="ms-footer-deco">❖ ❖ ❖</span>
          </div>`;
        }

        const rawPages = (qcfData && qcfData[String(surahNum)] && qcfData[String(surahNum)].p)
          ? qcfData[String(surahNum)].p
          : [[1, ayahs.length, SURAH_PAGES[surahNum - 1] || 1]];
        textSurahPages = rawPages.map(r => r[2]);
        const isPagesMode = (textPageMode === 'pages');
        const isMushafDist = (mushafPageDist === 'mushaf' && !!qcfData);

        const pageSepHTML = pageNum => `
        <div class="mushaf-page-sep" data-page="${pageNum}">
          <span class="mps-line"></span>
          <span class="mps-pill"><span class="mps-deco">۞</span> ${lang === 'ar' ? 'صفحة' : 'Page'} ${toArDigits(pageNum)} <span class="mps-deco">۞</span></span>
          <span class="mps-line"></span>
        </div>`;

        let html = '';
        // في وضع السورة المستقلة مع التمرير لأسفل: نعرض البسملة والبرواز مرة واحدة في الأعلى
        if (!isPagesMode && !isMushafDist) {
          html += buildBannerFor(surahNum, false);
        }

        const wrapModeCls = isInline
          ? (`inline-mode${qcfWrapCls}${isQcfLike && qcfEntryMain && mushafLines ? ' qlines' : ''}`)
          : (`block-mode${qcfWrapCls}`);

        html += `<div class="qp-text-wrap ${wrapModeCls}${isPagesMode ? ' pages-mode' : ''}" id="qpInlineWrap" style="--qcf-fs:${Math.round(qpFontSize * QCF_SCALE)}px">`;

        rawPages.forEach((pRange, pIdx) => {
          const [, , pageNum] = pRange;
          let pageInner = '';

          if (!isPagesMode && pIdx > 0) {
            pageInner += pageSepHTML(pageNum);
          }

          // تحديد مقاطع السور في هذه الصفحة: إما جميع السور المشتركة بالصفحة (توزيع المصحف) أو السورة الحالية فقط
          const pageSegments = isMushafDist
            ? getSurahSegmentsOnPage(pageNum)
            : [{ surahNum, startAy: pRange[0], endAy: pRange[1], pageNum }];

          // في وضع السورة المستقلة مع الصفحات المستقلة: نضع البرواز في الصفحة الأولى فقط
          if (isPagesMode && !isMushafDist && pIdx === 0) {
            pageInner += buildBannerFor(surahNum, false);
          }

          // حساب متوسط الرموز الإجمالي للصفحة كاملة (عبر كل المقاطع المشتركة في الصفحة) لضبط حجم خط موحّد للصفحة
          let pageTotalGlyphs = 0;
          let pageTotalLines = 0;
          if (isInline && isQcfLike && qcfEntryMain && mushafLines) {
            pageSegments.forEach(seg => {
              const sEnt = qcfData?.[String(seg.surahNum)];
              if (!sEnt) return;
              let lCount = 1;
              for (let an = seg.startAy; an <= seg.endAy; an++) {
                const rawG = (sEnt.g[an - 1] || '').replace(/\r/g, '');
                const sp = rawG.split('\n');
                lCount += (sp.length - 1);
                pageTotalGlyphs += Array.from(rawG).filter(ch => !/\s/.test(ch)).length;
              }
              pageTotalLines += Math.max(1, lCount);
            });
          }
          const pageAvgGlyphs = pageTotalLines > 0 ? (pageTotalGlyphs / pageTotalLines) : 11.5;
          const EffectivePageLines = isMushafDist && pageSegments.length > 1 ? 15 : pageTotalLines;

          pageSegments.forEach(seg => {
            const segSurah = seg.surahNum;
            const isNeighbor = (segSurah !== surahNum);
            const segAyahsList = (segSurah === surahNum) ? ayahs : (surahCache[segSurah] || []);
            const segQcfEntry = (isQcfLike && qcfReady && qcfData) ? qcfData[String(segSurah)] : null;
            const segTotalAyahs = (SMETA_AR[segSurah - 1]?.[0]) || (segQcfEntry?.g?.length) || segAyahsList.length || seg.endAy;
            const segSajdahs = new Set((SAJDAH_MAP[segSurah] || []).map(Number));
            const segJuzInSurah = JUZ_STARTS.filter(([sn]) => sn === segSurah);

            // في وضع توزيع المصحف: نعرض برواز السورة والبسملة لكل سورة تبدأ عند الآية 1 في هذه الصفحة (أو بأول صفحة إن لم تبدأ من 1 في وضع التمرير للسورة المختارة)
            if (isMushafDist) {
              if (seg.startAy === 1) {
                pageInner += buildBannerFor(segSurah, isNeighbor);
              }
            }

            if (isInline && isQcfLike && segQcfEntry && mushafLines) {
              const fam = isTajweed ? tajweedFontName(pageNum) : qcfFontName(pageNum);
              const pgStr = String(pageNum).padStart(3, '0');
              const palStyle = isTajweed ? `--page-pal:--tajweed-dark-${pgStr};--tj-light-fam:'${fam}';--tj-dark-fam:'${fam}_Dark';` : '';
              const fontStyle = `font-family:'${fam}';${palStyle}`;

              const lines = [];
              let curLine = [];
              for (let an = seg.startAy; an <= seg.endAy; an++) {
                const ayObj = segAyahsList.find(x => x.numberInSurah === an);
                const plain = ayObj ? pickTxtFor(segSurah, ayObj) : '';
                const raw = (segQcfEntry.g[an - 1] || '').replace(/\r/g, '');
                const splits = raw.split('\n');
                splits.forEach((part, idx) => {
                  const glyphArr = Array.from(part).filter(ch => !/\s/.test(ch));
                  const glyphs = glyphArr.join(QSP);
                  if (idx === 0) {
                    if (glyphs) curLine.push({ sNum: segSurah, an, glyphs, count: glyphArr.length, fontStyle, plain });
                  } else {
                    if (curLine.length) lines.push(curLine);
                    curLine = [];
                    if (glyphs) curLine.push({ sNum: segSurah, an, glyphs, count: glyphArr.length, fontStyle, plain });
                  }
                });
              }
              if (curLine.length) lines.push(curLine);

              const lineCounts = lines.map(l => l.reduce((sum, item) => sum + (item.count || 0), 0));

              pageInner += `<div class="mushaf-page-lines${isNeighbor ? ' mushaf-neighbor-surah' : ''}" data-page="${pageNum}" data-surah="${segSurah}" data-avg-glyphs="${pageAvgGlyphs.toFixed(2)}" data-lines-count="${EffectivePageLines || lines.length}">`;
              lines.forEach((lineSegs, lIdx) => {
                const lineGlyphCount = lineCounts[lIdx] || 0;
                const isSurahEndLine = (seg.endAy >= segTotalAyahs && lIdx === lines.length - 1);
                const shouldCenter = lineGlyphCount <= 5 || (isSurahEndLine && lineGlyphCount <= 8);
                pageInner += `<div class="mushaf-page-line${shouldCenter ? ' is-last-line' : ''}" data-glyphs="${lineGlyphCount}">`;
                lineSegs.forEach((item, sIdx) => {
                  const segSep = sIdx < lineSegs.length - 1 ? QSP : '';
                  pageInner += `<span class="si-ayah qcf-ayah${isTajweed ? ' tajweed-ayah' : ''}" data-surah="${item.sNum}" data-ayah="${item.an}" data-text="${attrEsc(item.plain)}" style="${item.fontStyle}">${item.glyphs}</span>${segSep}`;
                });
                pageInner += `</div>`;
              });
              pageInner += `</div>`;
            } else if (isInline) {
              for (let an = seg.startAy; an <= seg.endAy; an++) {
                const ayObj = segAyahsList.find(x => x.numberInSurah === an);
                const juzEntry = segJuzInSurah.find(([, jAn]) => jAn === an);
                if (juzEntry) {
                  const jNum = JUZ_STARTS.indexOf(juzEntry) + 1;
                  pageInner += `<span class="juz-marker" style="display:inline-block;margin:0 6px">[${lang === 'ar' ? 'الجزء' : 'Juz'} ${toArDigits(jNum)}]</span>`;
                }
                const c = cellFor(segSurah, an, ayObj);
                const hasSajdah = segSajdahs.has(an);
                const tail = c.marker
                  ? `&nbsp;<span class="si-ayah-marker">${toArDigits(an)}</span>${hasSajdah ? ' 🙏' : ''}`
                  : (hasSajdah ? ' 🙏' : '');
                pageInner += `<span class="si-ayah${c.cls}${isNeighbor ? ' mushaf-neighbor-surah' : ''}" data-surah="${segSurah}" data-ayah="${an}"${c.data} style="${c.style}">${c.txt}${tail}</span> `;
              }
            } else {
              for (let an = seg.startAy; an <= seg.endAy; an++) {
                const ayObj = segAyahsList.find(x => x.numberInSurah === an);
                const juzEntry = segJuzInSurah.find(([, jAn]) => jAn === an);
                if (juzEntry) {
                  const jNum = JUZ_STARTS.indexOf(juzEntry) + 1;
                  pageInner += `<div class="juz-marker">${lang === 'ar' ? `— الجزء ${toArDigits(jNum)} —` : `— Juz' ${jNum} —`}</div>`;
                }
                const c = cellFor(segSurah, an, ayObj);
                const hasSajdah = segSajdahs.has(an);
                const tail = c.marker
                  ? `&nbsp;<span class="si-ayah-marker">${toArDigits(an)}</span>${hasSajdah ? '&nbsp;<span title="آية سجدة">🙏</span>' : ''}`
                  : (hasSajdah ? '&nbsp;<span title="آية سجدة">🙏</span>' : '');
                pageInner += `<div class="si-ayah${c.cls}${isNeighbor ? ' mushaf-neighbor-surah' : ''}" data-surah="${segSurah}" data-ayah="${an}"${c.data}><div class="si-ayah-text" dir="rtl" style="${c.style}">${c.txt}${tail}</div></div>`;
              }
            }
          });

          if (isPagesMode) {
            const isLast = (pIdx === rawPages.length - 1);
            html += `<div class="qp-text-page${pIdx === textCurrentPageIdx ? ' active' : ''}" data-page-idx="${pIdx}" data-page="${pageNum}">
              ${pageInner}
              ${isLast && !isMushafDist ? buildFooterFor(surahNum) : ''}
            </div>`;
          } else {
            html += pageInner;
          }
        });

        if (!isPagesMode && !isMushafDist) html += buildFooterFor(surahNum);
        html += `</div>`;
        return html;
      }

      /* ── ربط أحداث النقر على الآيات ── */
      function wireAyahClicks(surahNum, ayahs) {
        const container = $('qpBody');
        if (!container) return;
        container.querySelectorAll('.si-ayah').forEach(row => {
          row.addEventListener('click', () => {
            const ayahN = parseInt(row.dataset.ayah, 10);
            const rowSurahN = parseInt(row.dataset.surah || String(surahNum), 10);
            if (isNaN(ayahN)) return;

            // إذا نقر المستخدم على آية تابعة لسورة مجاورة مشتركة في نفس الصفحة، ننتقل لتلك السورة ونشغل الآية
            if (rowSurahN && rowSurahN !== surahNum) {
              const targetSi = surahs.findIndex(s => s.n === rowSurahN);
              if (targetSi >= 0) {
                pendingResumeAyah = { surahNum: rowSurahN, ayah: ayahN };
                selectReciterMoshafSurah(rIdx, mIdx, targetSi, true);
                return;
              }
            }

            // إذا كانت التوقيتات الدقيقة محمّلة مسبقاً، نقفز فوراً بالمللي ثانية
            if (currentAyahTimestamps && currentAyahTimestamps.length) {
              const vKey = `${surahNum}:${ayahN}`;
              const seg = currentAyahTimestamps.find(t => t.verse_key === vKey);
              if (seg && typeof seg.timestamp_from === 'number') {
                audio.currentTime = seg.timestamp_from / 1000;
                if (!isPlaying) playAudio();
                showToast(lang === 'ar' ? `الانتقال إلى الآية ${ayahN} ⏱️` : `Jumped to verse ${ayahN} ⏱️`, 'info', 2500);
                return;
              }
            }

            // إذا كان القارئ متزامناً (🎯) ولكن الصوت لم يبدأ بعد، نطلبه ونقفز للآية مباشرة
            const r = rIdx !== null ? reciters[rIdx] : null;
            if (r && r.isPrecision && !r.audioServer) {
              pendingResumeAyah = { surahNum, ayah: ayahN };
              playAudio();
              return;
            }

            // في حال القارئ العام بدون توقيتات دقيقة: قفز نسبي تقريبي
            if (audio.duration && ayahs.length) {
              audio.currentTime = (ayahN - 1) / ayahs.length * audio.duration;
              if (!isPlaying) playAudio();
            } else {
              pendingResumeAyah = { surahNum, ayah: ayahN };
              playAudio();
            }
            showToast(
              lang === 'ar' ? '⚠️ المزامنة تقريبية وليست مضبوطة بشكل كامل' : '⚠️ Synchronization is approximate, not fully exact',
              'warn',
              3000
            );
          });
        });
      }

      /* ── تمييز وتمرير الآية الحالية أثناء التلاوة ── */
      function highlightCurrentPosition() {
        if (!audio.duration || !ayahsData.length) return;
        const container = $('qpBody');
        if (!container) return;

        // حالة 1: تلاوة ذات توقيتات قطعية دقيقة بالمللي ثانية (🎯)
        if (currentAyahTimestamps && currentAyahTimestamps.length) {
          const activeAyahNum = findAyahAtMs(Math.floor((audio.currentTime || 0) * 1000));
          const rows = container.querySelectorAll('.si-ayah');
          let targetRow = null;

          rows.forEach(r => {
            const aNum = parseInt(r.dataset.ayah, 10);
            const rSurah = parseInt(r.dataset.surah || String(loadedSurahNum), 10);
            const isTarget = (activeAyahNum !== null) && (aNum === activeAyahNum) && (rSurah === loadedSurahNum);
            r.classList.toggle('sync-active', autoHighlight && isTarget);
            if (isTarget) targetRow = r;
          });

          if (!targetRow || scrollLock || !autoScrollText) return;
          if (textPageMode === 'pages') {
            const pageEl = targetRow.closest('.qp-text-page');
            if (pageEl) {
              const targetPageIdx = parseInt(pageEl.dataset.pageIdx || '0', 10);
              if (targetPageIdx !== textCurrentPageIdx) {
                showTextPage(targetPageIdx, targetPageIdx > textCurrentPageIdx ? 'next' : 'prev');
              }
            }
          }
          scrollLock = true;
          const scrollEl = $('qpBody');
          if (scrollEl) {
            const elRect = targetRow.getBoundingClientRect();
            const cRect = scrollEl.getBoundingClientRect();
            const isVisible = (elRect.top >= cRect.top + 30 && elRect.bottom <= cRect.bottom - 30);
            if (!isVisible) {
              const newTop = scrollEl.scrollTop + (elRect.top - cRect.top)
                - scrollEl.clientHeight / 2 + targetRow.offsetHeight / 2;
              scrollEl.scrollTo({ top: Math.max(0, newTop), behavior: 'smooth' });
            }
          }
          setTimeout(() => { scrollLock = false; }, 400);
          return;
        }

        // حالة 2: تلاوة عامة بدون توقيتات دقيقة
        const rows = container.querySelectorAll('.si-ayah');
        rows.forEach(r => r.classList.remove('sync-active'));

        if (scrollLock || !autoScrollText) return;
        const scrollEl = $('qpBody');
        if (scrollEl && audio.duration) {
          const pct = Math.max(0, Math.min(0.999, audio.currentTime / audio.duration));
          if (textPageMode === 'pages') {
            const pageEls = container.querySelectorAll('.qp-text-page');
            if (pageEls.length > 1) {
              const targetIdx = Math.floor(pct * pageEls.length);
              if (targetIdx !== textCurrentPageIdx) {
                showTextPage(targetIdx, targetIdx > textCurrentPageIdx ? 'next' : 'prev');
              }
            }
            return;
          }
          const targetTop = pct * (scrollEl.scrollHeight - scrollEl.clientHeight);
          if (Math.abs(scrollEl.scrollTop - targetTop) > 35) {
            scrollLock = true;
            scrollEl.scrollTo({ top: targetTop, behavior: 'smooth' });
            setTimeout(() => { scrollLock = false; }, 400);
          }
        }
      }

      /* ── seeked: تمرير فوري ── */
      audio.addEventListener('seeked', () => {
        if (textPanelOpen && ayahsData.length) { lastHighlightTime = audio.currentTime; highlightCurrentPosition(); }
      });

      /* ── معايرة وتوحيد حجم الخط لأسطر صفحات المصحف (احتواء 15 سطراً كاملاً داخل نافذة النص + استجابة التحكم اليدوي A+/A-) ── */
      function calibrateMushafLines() {
        const container = $('qpBody');
        if (!container) return;
        const wrap = container.querySelector('#qpInlineWrap') || container.querySelector('.qp-text-wrap');
        const pageBlocks = Array.from(container.querySelectorAll('.mushaf-page-lines')).filter(b => {
          const pgWrap = b.closest('.qp-text-page');
          return !pgWrap || pgWrap.classList.contains('active');
        });
        if (!wrap || !pageBlocks.length) return;

        // إزالة كلاس التكبير مؤقتاً لقياس العرض الحقيقي للسطر الواحد بدقة (nowrap)
        wrap.classList.remove('user-zoomed-in');

        const availW = Math.max(120, wrap.clientWidth - 6);
        const isMob = window.innerWidth <= 767;
        const availH = container.clientHeight || (window.innerHeight - 160);
        const PROBE_FS = 28;
        const REF_DENSITY = 11.8;
        const zoomRatio = qpFontSize / 24; // 24 = 100% احتواء الـ 15 سطراً داخل نافذة النص

        // ضبط ارتفاع السطر ليسمح باحتواء 15 سطراً كاملاً داخل ارتفاع نافذة النص (#qpBody) على الكمبيوتر والجوال
        const lineHeightRatio = isMob ? 1.56 : 1.58;
        const usableH = Math.max(240, availH - (isMob ? 24 : 18));
        const maxVerticalFs = Math.max(13, Math.floor(usableH / (15 * lineHeightRatio)));

        const pageMeasurements = [];

        pageBlocks.forEach(block => {
          const avgG = parseFloat(block.dataset.avgGlyphs || '11.5');
          const linesCount = parseInt(block.dataset.linesCount || '15', 10);
          block.style.setProperty('--page-fs', PROBE_FS + 'px');
          block.style.setProperty('--page-lh', String(lineHeightRatio));

          const lineEls = Array.from(block.querySelectorAll('.mushaf-page-line'));
          let maxScrollW = 0;
          lineEls.forEach(lineEl => {
            if (lineEl.scrollWidth > maxScrollW) maxScrollW = lineEl.scrollWidth;
          });

          // أقصى حجم خط يسمح ببقاء أطول سطر في الصفحة في سطر واحد كامل دون انكسار أفقي
          const widthFitFs = maxScrollW > 0
            ? Math.floor(PROBE_FS * (availW / maxScrollW) * 0.96)
            : (isMob ? 20 : 26);

          // موازنة الصفحات ذات الرموز القليلة في السطر لئلا تتضخم حروفها مقارنة بالصفحات الكاملة
          const densityScale = Math.max(0.78, Math.min(1.02, avgG / REF_DENSITY));
          // الجمع بين الاحتواء الأفقي والاحتواء الرأسي لـ 15 سطراً بحسب حجم الشاشة الفعلي
          const idealBaseFs = Math.min(
            widthFitFs,
            Math.max(13, Math.round(maxVerticalFs * densityScale))
          );

          pageMeasurements.push({ block, widthFitFs, idealBaseFs, linesCount });
        });

        // توحيد سقف الصفحات الجزئية (أقل من 12 سطراً) مع الصفحات الكاملة في نفس السورة
        const fullPages = pageMeasurements.filter(x => x.linesCount >= 12);
        const avgFullBaseFs = fullPages.length
          ? Math.round(fullPages.reduce((s, x) => s + x.idealBaseFs, 0) / fullPages.length)
          : null;

        let anyOverflowZoom = false;
        pageMeasurements.forEach(pm => {
          let baseFs = pm.idealBaseFs;
          if (avgFullBaseFs !== null && pm.linesCount < 12 && baseFs > avgFullBaseFs) {
            baseFs = avgFullBaseFs;
          }
          // تطبيق نسبة التكبير/التصغير اليدوي التي اختارها المستخدم من أزرار A+ / A- أو شريط الإعدادات
          let finalFs = Math.max(12, Math.round(baseFs * zoomRatio));

          // عند الوضع القياسي (zoomRatio <= 1.0) نضمن عدم تجاوز عرض السطر الواحد إطلاقاً
          if (zoomRatio <= 1.02) {
            finalFs = Math.min(finalFs, pm.widthFitFs);
          } else if (finalFs > pm.widthFitFs) {
            anyOverflowZoom = true;
          }
          pm.block.style.setProperty('--page-fs', finalFs + 'px');
        });

        // إذا كبّر المستخدم الخط يدوياً فوق عرض السطر الواحد، نسمح بالتفاف السطر حتى لا يُقتطع النص
        if (anyOverflowZoom) {
          wrap.classList.add('user-zoomed-in');
        }
      }

      if (typeof ResizeObserver === 'function' && $('qpBody')) {
        const qpRo = new ResizeObserver(() => {
          if (textPanelOpen) requestAnimationFrame(calibrateMushafLines);
        });
        qpRo.observe($('qpBody'));
      }

      window.addEventListener('resize', () => {
        if (textPanelOpen) requestAnimationFrame(calibrateMushafLines);
      });

      /* ── تطبيق حجم الخط ── */
      function applyFontSize() {
        const container = $('qpBody');
        if (!container) return;
        if ($('setFontSize')) { $('setFontSize').value = qpFontSize; $('setFontSizeVal').textContent = qpFontSize; }
        const wrap = container.querySelector('.qp-text-wrap');
        if (wrap) wrap.style.setProperty('--qcf-fs', Math.round(qpFontSize * QCF_SCALE) + 'px');
        container.querySelectorAll('.si-ayah-text,.si-ayah[data-ayah]').forEach(el => {
          const row = el.classList.contains('si-ayah') ? el : (el.parentElement && el.parentElement.classList.contains('si-ayah') ? el.parentElement : null);
          if (row && row.classList.contains('qcf-ayah')) return;
          el.style.fontSize = qpFontSize + 'px';
        });
        requestAnimationFrame(calibrateMushafLines);
      }

      function normalizeAr(txt) {
        return (txt || '')
          .replace(/[ؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ۭـ]/g, '')
          .replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
          .replace(/\\s+/g, ' ').trim();
      }

      if (textViewBtn) textViewBtn.onclick = toggleTextPanel;
      if (qpClose) qpClose.onclick = closeTextPanel;

      function onSurahChangeForText() {
        if (textPanelOpen && sIdx !== null) {
          loadedSurahNum = null;
          ayahsData = [];
          lastHighlightTime = 0;
          loadQuranText(surahs[sIdx].n);
        }
      }

      /* ============ NEXT MENU ============ */
      // 0=السورة التالية, 1=سورة عشوائية(نفس القارئ), 2=قارئ عشوائي(نفس السورة), 3=كل عشوائي
      let nextMode = parseInt(ls('nextMode') || '0');

      const nextMenuBtn = $('nextMenuBtn');
      const nextDropdown = $('nextDropdown');
      const NEXT_IDS = ['nextSameSurah', 'nextRandSurah', 'nextRandReciter', 'nextRandAll'];
      const NEXT_CHECKS = ['nextCheck0', 'nextCheck1', 'nextCheck2', 'nextCheck3'];

      function applyNextModeUI() {
        const ar = lang === 'ar';
        const icons = ['⏭', '🎲', '🎙️', '✨'];
        const txtLbls = ar
          ? ['السورة التالية', 'سورة عشوائية', 'قارئ عشوائي', 'كل عشوائي']
          : ['Next Surah', 'Random Surah', 'Random Reciter', 'Random All'];
        NEXT_IDS.forEach((id, i) => {
          const el = $(id); if (el) el.classList.toggle('next-opt-active', i === nextMode);
          const ck = $(NEXT_CHECKS[i]); if (ck) ck.textContent = i === nextMode ? '✓' : '';
          const fck = document.getElementById('fb_ck' + i); if (fck) fck.textContent = i === nextMode ? '✓' : '';
          const fopt = document.getElementById(['fb_nextSameSurah', 'fb_nextRandSurah', 'fb_nextRandRec', 'fb_nextRandAll'][i]);
          if (fopt) fopt.classList.toggle('next-opt-active', i === nextMode);
          const fnLbl = document.getElementById('fb_n' + i);
          if (fnLbl) fnLbl.textContent = txtLbls[i];
        });
        const lbl = $('nextActionLbl'); if (lbl) lbl.textContent = txtLbls[nextMode];
        if (nextMenuBtn) nextMenuBtn.textContent = '⚙️ ▾';
        if (document.getElementById('fbNext')) document.getElementById('fbNext').textContent = icons[nextMode];
      }

      function selectNextMode(mode) {
        nextMode = mode;
        lsSave('nextMode', String(mode));
        applyNextModeUI();
        nextDropdown?.classList.remove('open');
        document.getElementById('fbNextDropdown')?.classList.remove('open');
      }

      $('nextActionBtn')?.addEventListener('click', () => executeNextMode(true));
      if (nextMenuBtn) nextMenuBtn.onclick = (e) => {
        e.stopPropagation();
        nextDropdown.classList.toggle('open');
      };

      NEXT_IDS.forEach((id, idx) => {
        $(id)?.addEventListener('click', () => selectNextMode(idx));
      });

      applyNextModeUI();

      function executeNextMode(manual = false) {
        switch (nextMode) {
          case 0:
            if (goNext()) { playAudio(); onSurahChangeForText(); saveSettings(); }
            else if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; }
            break;

          case 1:
            if (rIdx === null || mIdx === null) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
            {
              const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
              if (!opts.length) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
              let ro = getRandomSurahInRange(opts);
              if (opts.length > 1) {
                let tries = 0;
                while (parseInt(ro.value) === sIdx && tries < 10) { ro = getRandomSurahInRange(opts); tries++; }
              }
              selectReciterMoshafSurah(rIdx, mIdx, parseInt(ro.value), true);
            }
            break;

          case 2:
            {
              const targetN = surahs[sIdx]?.n;
              if (!targetN) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
              const eligible = [];
              reciters.forEach((r, ri) => {
                r.moshaf.forEach((m, mi) => {
                  if (m.surah_list.split(',').map(Number).includes(targetN)) {
                    if (!(ri === rIdx && mi === mIdx)) eligible.push({ ri, mi });
                  }
                });
              });
              if (!eligible.length) {
                if (goNext()) { playAudio(); onSurahChangeForText(); saveSettings(); }
                else if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; }
                break;
              }
              const pick = eligible[Math.floor(Math.random() * eligible.length)];
              const targetSi = surahs.findIndex(s => s.n === targetN);
              selectReciterMoshafSurah(pick.ri, pick.mi, targetSi >= 0 ? targetSi : sIdx, true);
            }
            break;

          case 3:
            randRecBtn.click();
            break;
        }
      }

      function updateNextMenuLabels() {
        const ar = lang === 'ar';
        if ($('nextSameSurahLbl')) $('nextSameSurahLbl').textContent = ar ? 'السورة التالية (نفس القارئ)' : 'Next Surah (same reciter)';
        if ($('nextRandSurahLbl')) $('nextRandSurahLbl').textContent = ar ? 'سورة عشوائية (نفس القارئ)' : 'Random Surah (same reciter)';
        if ($('nextRandReciterLbl')) $('nextRandReciterLbl').textContent = ar ? 'قارئ عشوائي (نفس السورة)' : 'Random Reciter (same surah)';
        if ($('nextRandAllLbl')) $('nextRandAllLbl').textContent = ar ? 'قارئ وسورة عشوائية' : 'Random Reciter & Surah';
        applyNextModeUI();
      }

      /* ============ SURAH RANGE FOR RANDOM ============ */
      // مدى السور للعشوائي — يُعبأ بعد تحميل السور
      function buildRangeSelects() {
        const fromSel = document.getElementById('rangeFrom');
        const toSel = document.getElementById('rangeTo');
        if (!fromSel || !toSel) return;
        const savedFrom = parseInt(ls('rangeFrom') || '0');
        const savedTo = parseInt(ls('rangeTo') || (surahs.length - 1).toString());
        fromSel.innerHTML = ''; toSel.innerHTML = '';
        surahs.forEach((s, i) => {
          const o1 = document.createElement('option'); o1.value = i; o1.textContent = s.n + '. ' + s.name;
          const o2 = o1.cloneNode(true);
          fromSel.appendChild(o1); toSel.appendChild(o2);
        });
        fromSel.value = savedFrom; toSel.value = savedTo;
        fromSel.onchange = () => lsSave('rangeFrom', fromSel.value);
        toSel.onchange = () => lsSave('rangeTo', toSel.value);
      }

      function getRandomSurahInRange(surahOpts) {
        const fromSel = document.getElementById('rangeFrom');
        const toSel = document.getElementById('rangeTo');
        const from = fromSel ? parseInt(fromSel.value) : 0;
        const to = toSel ? parseInt(toSel.value) : surahOpts.length - 1;
        const lo = Math.min(from, to), hi = Math.max(from, to);
        const inRange = surahOpts.filter(o => {
          const i = parseInt(o.value);
          return i >= lo && i <= hi;
        });
        if (!inRange.length) return surahOpts[Math.floor(Math.random() * surahOpts.length)];
        return inRange[Math.floor(Math.random() * inRange.length)];
      }

      /* ============ MUSHAF IMAGE VIEW ============ */
      // https://quran.yousefheiba.com/api/quranPagesImage
      // API يُعطي صفحات المصحف كصور
      // نستخدم surah->page mapping لمعرفة صفحة بداية السورة
      // صفحات المصحف: 1-604، كل سورة لها range من الصفحات

      const SURAH_PAGES = [ // رقم أول صفحة لكل سورة — مصحف حفص 604 صفحة
        1, 2, 50, 77, 106, 128, 151, 177, 187, 208, 221, 235, 249, 255, 262, 267,
        282, 293, 305, 312, 322, 332, 342, 350, 359, 367, 377, 385, 396, 404, 411, 415,
        418, 428, 434, 440, 446, 453, 458, 467, 477, 483, 489, 496, 499, 502, 507, 511,
        515, 518, 520, 523, 526, 528, 531, 534, 537, 542, 545, 549, 551, 553, 554, 556,
        558, 560, 562, 564, 566, 568, 570, 572, 574, 575, 577, 578, 580, 582, 583, 585,
        586, 587, 587, 589, 590, 591, 591, 592, 593, 594, 595, 595, 596, 596, 597, 597,
        598, 598, 599, 599, 600, 600, 601, 601, 601, 602, 602, 603, 603, 603, 604, 604,
        604, 604
      ];

      /* مصادر صور المصحف — التجويد أولاً وافتراضياً */
      const MUSHAF_SOURCES = [
        {
          id: 'tajweed',
          label: '🎨 تجويد',
          urlFn: p => `https://www.islamicbook.ws/2/${p}.jpg`
        },
        {
          id: 'hefzmoyaser',
          label: '📗 الحفظ الميسر',
          urlFn: p => `https://newapi.hefzmoyaser.net/storage/mushaf_images/hafs/${p}.webp`
        },
        {
          id: 'hefzmoyaser_notes',
          label: '📗 الحفظ الميسر مع الملاحظات',
          urlFn: p => `https://newapi.hefzmoyaser.net/storage/mushaf_images/hafs_with_footnotes/${p}.webp`
        },
        {
          id: 'aayaat',
          label: 'Aayaat',
          urlFn: p => `https://cdn.aayaat.net/storage/outputs/image/HafsK_Page${p}.png`
        },
        {
          id: 'yousefheiba',
          label: 'YH Pages',
          urlFn: p => `https://quran.yousefheiba.com/api/quran-pages/${String(p).padStart(3, '0')}.png`
        },
        {
          id: 'islamdb',
          label: 'Islam-DB',
          urlFn: p => `https://quran.islam-db.com/data/pages/quranpages_1024/images/page${String(p).padStart(3, '0')}.png`
        },
        {
          id: 'surahquran',
          label: 'SurahQ',
          urlFn: p => `https://surahquran.com/img/pages-quran/page${String(p).padStart(3, '0')}.png`
        },
        {
          id: 'maknon_hafs',
          label: 'مكنون حفص',
          urlFn: p => `https://raw.githubusercontent.com/maknon/Quran/refs/heads/main/pages-hafs/${p}.png`
        },
        {
          id: 'maknon_warsh',
          label: 'مكنون ورش',
          urlFn: p => `https://raw.githubusercontent.com/maknon/Quran/refs/heads/main/pages-warsh/${p}.png`
        },
        {
          id: 'govar',
          label: 'Govar',
          urlFn: p => `https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/refs/heads/master/${String(p)}.png`
        }
      ];

      let mushafCurrentPageIdx = 0;  // index within mushafSurahPages array
      let mushafSurahPages = [];     // list of page numbers for current surah
      // المصدر الافتراضي = التجويد (0) ما لم يختر المستخدم غيره
      let mushafSourceIdx = parseInt(localStorage.getItem('mushafSourceV2') ?? '0');
      if (isNaN(mushafSourceIdx) || mushafSourceIdx < 0 || mushafSourceIdx >= MUSHAF_SOURCES.length) mushafSourceIdx = 0;
      let mushafAutoScrollInterval = null;

      function getMushafUrl(pageNum) {
        const src = MUSHAF_SOURCES[mushafSourceIdx] || MUSHAF_SOURCES[0];
        return src.urlFn(pageNum);
      }

      function getMushafFallbackUrl(pageNum, fallbackIdx) {
        const src = MUSHAF_SOURCES[(mushafSourceIdx + fallbackIdx + 1) % MUSHAF_SOURCES.length];
        return src.urlFn(pageNum);
      }

      /* ── بناء تبويبات المصادر ── */
      function buildMushafSourceTabs() {
        const container = document.getElementById('mushafSourceTabs');
        if (!container) return;
        container.innerHTML = '';
        MUSHAF_SOURCES.forEach((src, i) => {
          const btn = document.createElement('button');
          btn.className = 'info-tab-btn' + (i === mushafSourceIdx ? ' active' : '');
          btn.textContent = src.label;
          btn.onclick = () => {
            mushafSourceIdx = i;
            localStorage.setItem('mushafSourceV2', String(i));
            buildMushafSourceTabs();
            // إعادة رسم الصفحة الحالية بالمصدر الجديد
            if (mushafSurahPages.length) showMushafPage(mushafCurrentPageIdx);
          };
          container.appendChild(btn);
        });
      }

      /* ── عرض صفحة ── */
      function showMushafPage(idx) {
        mushafCurrentPageIdx = Math.max(0, Math.min(idx, mushafSurahPages.length - 1));
        const pageNum = mushafSurahPages[mushafCurrentPageIdx];
        const el = document.getElementById('qpMushafBody');
        const label = document.getElementById('mushafPageLabel');
        const prevBtn = document.getElementById('mushafPrev');
        const nextBtn = document.getElementById('mushafNext');
        if (!el) return;

        const primaryUrl = getMushafUrl(pageNum);
        const fb1 = getMushafFallbackUrl(pageNum, 0);
        const fb2 = getMushafFallbackUrl(pageNum, 1);

        el.innerHTML = `<div class="mushaf-view" style="padding:8px">
    <img class="mushaf-page-img" id="mushafImg"
      src="${primaryUrl}"
      onerror="this.src='${fb1}';this.onerror=function(){this.src='${fb2}';this.onerror=null}"
      alt="صفحة ${pageNum}" decoding="async" fetchpriority="high"
      style="min-height:200px;object-fit:contain">
  </div>`;

        if (label) {
          const pane = mushafCurrentPageIdx + 1;
          const total = mushafSurahPages.length;
          label.textContent = `${lang === 'ar' ? 'صفحة' : 'Page'} ${pageNum} (${pane}/${total})`;
        }
        if (prevBtn) prevBtn.disabled = mushafCurrentPageIdx === 0;
        if (nextBtn) nextBtn.disabled = mushafCurrentPageIdx === mushafSurahPages.length - 1;

        // جلب مسبق للصفحة التالية والسابقة — تقليب شبه فوري
        [mushafCurrentPageIdx + 1, mushafCurrentPageIdx - 1].forEach(i => {
          if (i >= 0 && i < mushafSurahPages.length) {
            const im = new Image(); im.src = getMushafUrl(mushafSurahPages[i]);
          }
        });
      }

      /* ── تحميل مصحف السورة (يُستدعى عند فتح التبويب أو تغيير السورة) ── */
      function loadMushafView(surahNum) {
        if (!surahNum) return;
        const si = surahNum - 1;
        const startPage = SURAH_PAGES[si] || 1;
        const endPage = (si + 1 < SURAH_PAGES.length ? SURAH_PAGES[si + 1] - 1 : 604);
        mushafSurahPages = [];
        for (let p = startPage; p <= Math.min(Math.max(endPage, startPage), 604); p++) mushafSurahPages.push(p);
        if (!mushafSurahPages.length) mushafSurahPages = [startPage];
        mushafCurrentPageIdx = 0;
        buildMushafSourceTabs();
        showMushafPage(0);
        // أزرار التنقل
        const p = document.getElementById('mushafPrev');
        const n = document.getElementById('mushafNext');
        if (p) p.onclick = () => showMushafPage(mushafCurrentPageIdx - 1);
        if (n) n.onclick = () => showMushafPage(mushafCurrentPageIdx + 1);
        // بدء التمرير التلقائي
        startMushafAutoScroll();
      }

      /* ── تمرير تلقائي للصفحات بحسب التشغيل ──
         المنطق: نُقسّم مدة الصوت على عدد الصفحات
         كل X ثانية ننتقل لصفحة تالية */
      function startMushafAutoScroll() {
        stopMushafAutoScroll();
        if (!audio.duration || mushafSurahPages.length <= 1) return;
        mushafAutoScrollInterval = setInterval(() => {
          if (!isPlaying || !audio.duration) return;
          const pct = audio.currentTime / audio.duration;
          const targetIdx = Math.min(
            Math.floor(pct * mushafSurahPages.length),
            mushafSurahPages.length - 1
          );
          if (targetIdx !== mushafCurrentPageIdx && currentQpTab === 'mushaf') {
            showMushafPage(targetIdx);
          }
        }, 2000); // فحص كل ثانيتين
      }

      function stopMushafAutoScroll() {
        if (mushafAutoScrollInterval) { clearInterval(mushafAutoScrollInterval); mushafAutoScrollInterval = null; }
      }

      // ربط أحداث الصوت بتمرير المصحف
      audio.addEventListener('play', () => { if (currentQpTab === 'mushaf') startMushafAutoScroll(); });
      audio.addEventListener('pause', stopMushafAutoScroll);
      audio.addEventListener('ended', stopMushafAutoScroll);
      audio.addEventListener('loadeddata', () => {
        if (textPanelOpen && currentQpTab === 'mushaf' && isPlaying) startMushafAutoScroll();
      });
      audio.addEventListener('seeked', () => {
        if (currentQpTab === 'mushaf' && mushafSurahPages.length && audio.duration) {
          const pct = audio.currentTime / audio.duration;
          showMushafPage(Math.min(Math.floor(pct * mushafSurahPages.length), mushafSurahPages.length - 1));
        }
      });

      /* ============ CLEAR BUTTONS ============ */
      document.getElementById('clearStatsBtn')?.addEventListener('click', () => {
        if (!confirm(lang === 'ar' ? 'هل أنت متأكد من مسح جميع الإحصائيات؟' : 'Clear all statistics?')) return;
        stats = { count: 0, times: {}, total: 0, uniq: 0, reciters: {}, lastDate: null, longestSession: 0 };
        saveStats(); updateStats();
      });

      document.getElementById('clearBmBtn')?.addEventListener('click', () => {
        if (!confirm(lang === 'ar' ? 'هل أنت متأكد من مسح جميع الإشارات المرجعية؟' : 'Clear all bookmarks?')) return;
        bookmarks = []; saveBm(); updateBm();
      });

      /* ============ WIRE NEW BUTTONS ============ */
      playBtn.onclick = () => { isPlaying ? audio.pause() : playAudio(); };
      repBtn.onclick = toggleRepeat;
      // prevBtn و nextBtn في player card (c-btn sm)
      prevBtn.onclick = () => { if (goPrev()) { playAudio(); onSurahChangeForText(); } saveSettings(); };
      nextBtn.onclick = () => { if (goNext()) { playAudio(); onSurahChangeForText(); } saveSettings(); };
      muteBtn.onclick = toggleMute;
      bmBtn.onclick = addBm; favBtn.onclick = toggleFav;
      expBtn.onclick = exportStats;
      stopCancelBtn.onclick = cancelStopTimer;

      themeBtn.onclick = toggleDark;
      paletteBtn.onclick = () => palettePanel.classList.toggle('open');
      document.querySelectorAll('.t-dot').forEach(d => d.onclick = () => applyTheme(d.dataset.t, true));
      langBtn.onclick = () => { toggleLang(); updateNextMenuLabels(); };
      shareBtn.onclick = openShare;
      infoBtn.onclick = () => shortcutsPanel.classList.toggle('open');

      if ($('shareDeepLink')) $('shareDeepLink').onclick = () => doShare('deeplink');
      if ($('shareAyah')) $('shareAyah').onclick = () => doShare('ayah');
      $('shareWebsite').onclick = () => doShare('website');
      $('shareSurah').onclick = () => doShare('surah');
      $('shareCancel').onclick = closeShare;
      shareOverlay.onclick = e => { if (e.target === shareOverlay) closeShare(); };

      installBtn.onclick = async () => {
        if (deferredPrompt) { deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice; if (outcome === 'accepted') installBanner.classList.remove('show'); deferredPrompt = null; }
      };
      installClose.onclick = () => installBanner.classList.remove('show');

      dlBtn.onclick = function () {
        const t = T[lang];
        if (dlSection.style.display === 'none') { dlSection.style.display = 'block'; this.textContent = t.hideDl; updateDlLink(); }
        else { dlSection.style.display = 'none'; this.textContent = t.dlSurah; }
      };

      // زر بطاقات السور
      const dlAllBtnCards = $('dlAllBtnCards');
      if (dlAllBtnCards) dlAllBtnCards.onclick = function () {
        const sec = $('allSection');
        if (!sec) return;
        const open = sec.style.display === 'none';
        sec.style.display = open ? 'block' : 'none';
        $('allLinksSection').style.display = 'none';
        if (open) { showAllSurahs(); }
      };

      // زر روابط التحميل
      const dlAllBtnLinks = $('dlAllBtnLinks');
      if (dlAllBtnLinks) dlAllBtnLinks.onclick = function () {
        const sec = $('allLinksSection');
        if (!sec) return;
        const open = sec.style.display === 'none';
        sec.style.display = open ? 'block' : 'none';
        $('allSection').style.display = 'none';
        if (open) { showAllSurahsLinks(); }
      };

      randRecBtn.onclick = () => {
        if (!reciters.length) return;
        const ri = Math.floor(Math.random() * reciters.length);
        recSel.value = ri; rIdx = ri; buildMoshafList();
        if (moshSel.options.length > 1) {
          moshSel.value = moshSel.options[1].value; mIdx = parseInt(moshSel.value); buildSurahList();
          const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
          if (opts.length) {
            const ro = getRandomSurahInRange(opts);
            selectReciterMoshafSurah(ri, mIdx, parseInt(ro.value), true);
          }
        }
      };
      randSurahBtn.onclick = () => {
        if (rIdx === null || mIdx === null) { showToast(T[lang].statusDef, 'warn'); return; }
        const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
        if (opts.length) {
          const ro = getRandomSurahInRange(opts);
          selectReciterMoshafSurah(rIdx, mIdx, parseInt(ro.value), true);
        }
      };


      /* Close overlays on outside click */
      document.addEventListener('click', e => {
        if (!e.target.closest('.info-wrap')) shortcutsPanel.classList.remove('open');
        if (!e.target.closest('#paletteBtn') && !e.target.closest('#palettePanel')) palettePanel.classList.remove('open');
        if (!e.target.closest('.next-menu-wrap')) {
          nextDropdown?.classList.remove('open');
          fbNextDropdown?.classList.remove('open');
        }
      });

      /* ============ KEYBOARD ============ */
      document.addEventListener('keydown', e => {
        // Escape يغلق الحوارات واللوحات المفتوحة — يعمل حتى داخل حقول الإدخال
        if (e.key === 'Escape') {
          const so = $('settingsOverlay'), sho = $('shareOverlay');
          if (so?.classList.contains('open')) { so.classList.remove('open'); return; }
          if (sho?.classList.contains('open')) { sho.classList.remove('open'); return; }
          if (nextDropdown?.classList.contains('open')) { nextDropdown.classList.remove('open'); return; }
          const fbDd = document.getElementById('fbNextDropdown');
          if (fbDd?.classList.contains('open')) { fbDd.classList.remove('open'); return; }
          if (palettePanel.classList.contains('open')) { palettePanel.classList.remove('open'); return; }
          if (shortcutsPanel.classList.contains('open')) { shortcutsPanel.classList.remove('open'); return; }
          if (textPanelOpen) { closeTextPanel(); return; }
          return;
        }
        const tag = e.target.tagName.toLowerCase();
        // لا تعترض الاختصارات إذا كان التركيز على عنصر تفاعلي يحتاج المفاتيح بنفسه
        // (قائمة منسدلة، زر، رابط، أو حقل إدخال) حتى لا يتداخل التشغيل مع التنقّل
        if (['input', 'textarea', 'select', 'button', 'a'].includes(tag) || e.target.isContentEditable) return;
        if (e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.code === 'Space') { e.preventDefault(); isPlaying ? audio.pause() : playAudio(); }
        else if (e.code === 'ArrowRight') { e.preventDefault(); if (goNext()) { playAudio(); onSurahChangeForText(); } }
        else if (e.code === 'ArrowLeft') { e.preventDefault(); if (goPrev()) { playAudio(); onSurahChangeForText(); } }
        else if (e.key === 'r' || e.key === 'R') { e.preventDefault(); toggleRepeat(); }
        else if (e.key === 'm' || e.key === 'M') { e.preventDefault(); toggleMute(); }
        else if (e.key === '+' || e.key === '=') { e.preventDefault(); setVolume(parseInt(volCtrl.value) + 10); }
        else if (e.key === '-' || e.key === '_') { e.preventDefault(); setVolume(parseInt(volCtrl.value) - 10); }
        else if (e.key === 's' || e.key === 'S') { e.preventDefault(); surahSearch.focus(); }
        else if (e.key === 't' || e.key === 'T') { e.preventDefault(); toggleTextPanel(); }
      });

      /* ============ FLOATING BAR ============ */
      const floatingBar = document.getElementById('floatingBar');
      const toggleFloatBtn = document.getElementById('toggleFloatBtn');
      const fbPlay = document.getElementById('fbPlay');
      const fbPrev = document.getElementById('fbPrev');
      const fbNext = document.getElementById('fbNext');
      const fbMute = document.getElementById('fbMute');
      const fbRepeat = document.getElementById('fbRepeat');
      const floatVol = document.getElementById('floatVol');
      const fbSurah = document.getElementById('fbSurah');
      const fbReciter = document.getElementById('fbReciter');
      const fbTimer = document.getElementById('fbTimer');
      const fbProgTrack = document.getElementById('fbProgTrack');
      const fbProgElapsed = document.getElementById('fbProgElapsed');
      const fbProgThumb = document.getElementById('fbProgThumb');
      let barUserHidden = false;

      /* تحديث شريط التقدم العائم */
      function updateFbProgress() {
        if (!fbProgElapsed || !fbProgThumb) return;
        const pct = audio.duration ? Math.max(0, Math.min(1, audio.currentTime / audio.duration)) : 0;
        const p = (pct * 100).toFixed(2) + '%';
        fbProgElapsed.style.width = p;
        fbProgThumb.style.left = p;
        const curEl = $('fbCurTime');
        if (curEl) curEl.textContent = fmtTime(audio.currentTime || 0);
        const totalEl = $('fbTotalTime');
        if (totalEl) totalEl.textContent = audio.duration ? fmtTime(audio.duration) : '--:--';
      }

      /* نقر/سحب على شريط التقدم العائم */
      if (fbProgTrack) {
        const seekFb = e => {
          const r = fbProgTrack.getBoundingClientRect();
          const x = Math.min(Math.max((e.clientX ?? e.touches?.[0]?.clientX ?? 0) - r.left, 0), r.width);
          const pct = x / r.width;
          if (audio.duration) audio.currentTime = pct * audio.duration;
          updateFbProgress();
        };
        let fbDragging = false;
        fbProgTrack.addEventListener('mousedown', e => { fbDragging = true; fbProgTrack.classList.add('dragging'); seekFb(e); });
        document.addEventListener('mousemove', e => { if (fbDragging) seekFb(e); });
        document.addEventListener('mouseup', () => { if (fbDragging) { fbDragging = false; fbProgTrack.classList.remove('dragging'); } });
        fbProgTrack.addEventListener('touchstart', e => { fbDragging = true; seekFb(e); }, { passive: true });
        document.addEventListener('touchmove', e => { if (fbDragging) seekFb(e); }, { passive: true });
        document.addEventListener('touchend', () => { fbDragging = false; });
      }

      function updateFloatingBar() {
        if (!floatingBar) return;
        const hasSelection = rIdx !== null && sIdx !== null;
        if (hasSelection && !barUserHidden) {
          floatingBar.classList.add('visible');
          toggleFloatBtn.classList.add('bar-visible');
          document.body.classList.add('bar-open');
        } else if (!hasSelection) {
          floatingBar.classList.remove('visible');
          document.body.classList.remove('bar-open');
        }

        floatingBar.classList.toggle('playing', isPlaying);

        if (sIdx !== null && surahs[sIdx]) fbSurah.textContent = surahs[sIdx].name;
        if (rIdx !== null && reciters[rIdx]) {
          const r = reciters[rIdx];
          fbReciter.textContent = r.cleanName || r.name;
          const fbBadge = $('fbBadge');
          if (fbBadge) {
            if (r.isPrecision) {
              fbBadge.style.display = 'inline-block';
              fbBadge.textContent = lang === 'ar' ? '🎯 مزامنة دقيقة' : '🎯 Precise Sync';
            } else {
              fbBadge.style.display = 'none';
            }
          }
        }
        if (fbPlay) fbPlay.textContent = isPlaying ? '⏸' : '▶';
        if (fbMute) fbMute.textContent = isMuted ? '🔇' : '🔊';
        syncRepeatUI();
        if (floatVol) floatVol.value = volCtrl.value;

        updateFbProgress();

        if (fbTimer) {
          if (stopEndTime && Date.now() < stopEndTime) {
            const rem = Math.max(0, Math.round((stopEndTime - Date.now()) / 1000));
            fbTimer.textContent = String(Math.floor(rem / 60)).padStart(2, '0') + ':' + String(rem % 60).padStart(2, '0');
            fbTimer.style.display = 'inline-block';
          } else { fbTimer.style.display = 'none'; }
        }
      }

      if (fbPlay) fbPlay.onclick = () => { isPlaying ? audio.pause() : playAudio(); };
      if (fbPrev) fbPrev.onclick = () => { if (goPrev()) { playAudio(); onSurahChangeForText(); } };

      // زر التالي في الشريط العائم — تنفيذ مباشر | زر ▾ — فتح قائمة الخيارات
      const fbNextDropdown = document.getElementById('fbNextDropdown');
      const fbNextWrap = document.getElementById('fbNextWrap');
      const fbNextMenu = document.getElementById('fbNextMenu');
      if (fbNext) fbNext.onclick = (e) => {
        e.stopPropagation();
        fbNextDropdown?.classList.remove('open');
        executeNextMode(true);
      };
      if (fbNextMenu) fbNextMenu.onclick = (e) => {
        e.stopPropagation();
        fbNextDropdown?.classList.toggle('open');
      };
      // خيارات قائمة التالي في الشريط العائم — تستخدم selectNextMode مباشرة
      ['fb_nextSameSurah', 'fb_nextRandSurah', 'fb_nextRandRec', 'fb_nextRandAll'].forEach((id, i) => {
        document.getElementById(id)?.addEventListener('click', () => {
          selectNextMode(i);       // يغلق القائمة ويطبّق الاختيار
          executeNextMode(true);   // ينفّذ فوراً
        });
      });

      // أزرار العشوائي في الشريط العائم
      const fbRandRec = document.getElementById('fbRandRec');
      const fbRandSurah = document.getElementById('fbRandSurah');
      if (fbRandRec) fbRandRec.onclick = () => randRecBtn.click();
      if (fbRandSurah) fbRandSurah.onclick = () => randSurahBtn.click();

      if (fbRepeat) fbRepeat.onclick = () => { toggleRepeat(); updateFloatingBar(); };
      if (fbMute) fbMute.onclick = () => { toggleMute(); updateFloatingBar(); };
      const fbVolIcon = $('fbVolIcon');
      if (fbVolIcon) fbVolIcon.onclick = () => { toggleMute(); updateFloatingBar(); };

      if (floatVol) floatVol.oninput = function () { setVolume(this.value); };

      if (toggleFloatBtn) toggleFloatBtn.onclick = () => {
        barUserHidden = !barUserHidden;
        if (barUserHidden) {
          floatingBar.classList.remove('visible');
          document.body.classList.remove('bar-open');
          toggleFloatBtn.textContent = '▲';
        } else {
          floatingBar.classList.add('visible');
          document.body.classList.add('bar-open');
          toggleFloatBtn.textContent = '▼';
        }
      };

      /* ============ DESKTOP QURAN PANEL RESIZER ============ */
      function initQuranPanelResizer() {
        const qp = $('quranPanel');
        const resizeRight = $('qpResizeRight');
        const resizeDivider = $('layoutResizer');
        if (!qp) return;

        // استعادة العرض المحفوظ من localStorage فقط على أجهزة الكمبيوتر (فوق 767px)
        function applySavedDesktopWidth() {
          if (window.innerWidth <= 767) {
            document.documentElement.style.removeProperty('--qp-width');
            document.documentElement.style.removeProperty('--app-max-width');
            return;
          }
          const savedWidth = localStorage.getItem('quranPanelWidth');
          if (savedWidth) {
            const w = parseInt(savedWidth, 10);
            if (!isNaN(w) && w >= 320) {
              document.documentElement.style.setProperty('--qp-width', `${w}px`);
              document.documentElement.style.setProperty('--app-max-width', `${w + 500}px`);
            }
          }
        }
        applySavedDesktopWidth();
        window.addEventListener('resize', applySavedDesktopWidth);

        let isDragging = false;
        let dragMode = null; // 'right' or 'divider'
        let startX = 0;
        let startWidth = 0;
        let qpRect = null;

        function startDrag(e, mode) {
          if (window.innerWidth <= 767) return;
          isDragging = true;
          dragMode = mode;
          startX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
          qpRect = qp.getBoundingClientRect();
          startWidth = qpRect.width;
          document.body.classList.add('resizing-active');
          if (mode === 'right' && resizeRight) resizeRight.classList.add('active');
          if (mode === 'divider' && resizeDivider) resizeDivider.classList.add('active');
          try { if (e.target && e.target.setPointerCapture && e.pointerId !== undefined) e.target.setPointerCapture(e.pointerId); } catch (err) { }
          window.addEventListener('pointermove', onDrag);
          window.addEventListener('pointerup', endDrag);
          window.addEventListener('pointercancel', endDrag);
        }

        function onDrag(e) {
          if (!isDragging) return;
          const currentX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
          let newWidth = startWidth;

          if (dragMode === 'right') {
            newWidth = currentX - qpRect.left;
          } else if (dragMode === 'divider') {
            newWidth = qpRect.right - currentX;
          }

          const minW = 340;
          const maxW = Math.max(minW, window.innerWidth - 380);
          newWidth = Math.max(minW, Math.min(newWidth, maxW));

          document.documentElement.style.setProperty('--qp-width', `${Math.round(newWidth)}px`);
          document.documentElement.style.setProperty('--app-max-width', `${Math.round(newWidth + 500)}px`);
        }

        function endDrag(e) {
          if (!isDragging) return;
          isDragging = false;
          document.body.classList.remove('resizing-active');
          if (resizeRight) resizeRight.classList.remove('active');
          if (resizeDivider) resizeDivider.classList.remove('active');
          try { if (e && e.target && e.target.releasePointerCapture && e.pointerId !== undefined) e.target.releasePointerCapture(e.pointerId); } catch (err) { }
          window.removeEventListener('pointermove', onDrag);
          window.removeEventListener('pointerup', endDrag);
          window.removeEventListener('pointercancel', endDrag);

          const currentW = qp.getBoundingClientRect().width;
          if (currentW >= 320) {
            localStorage.setItem('quranPanelWidth', Math.round(currentW));
          }
        }

        function resetWidth(e) {
          e.stopPropagation();
          localStorage.removeItem('quranPanelWidth');
          document.documentElement.style.removeProperty('--qp-width');
          document.documentElement.style.removeProperty('--app-max-width');
          showToast(lang === 'ar' ? 'تمت استعادة العرض الافتراضي لإطار المصحف' : 'Quran panel width reset', 'info');
        }

        if (resizeRight) {
          resizeRight.addEventListener('pointerdown', e => startDrag(e, 'right'));
          resizeRight.addEventListener('dblclick', resetWidth);
        }
        if (resizeDivider) {
          resizeDivider.addEventListener('pointerdown', e => startDrag(e, 'divider'));
          resizeDivider.addEventListener('dblclick', resetWidth);
        }
      }
      initQuranPanelResizer();

      audio.addEventListener('play', () => updateFloatingBar());
      audio.addEventListener('pause', () => updateFloatingBar());
      audio.addEventListener('ended', () => updateFloatingBar());

      // ملاحظة: زر nextActionBtn مربوط مرة واحدة في قسم NEXT MENU أعلاه —
      // كان مربوطاً هنا مرة ثانية فيتخطى سورتين عند كل نقرة.

      /* ============ EQUALIZER VISUAL ============ */
      // ملاحظة: أُزيلت مُعالجة Web Audio (createMediaElementSource) لأنها كانت
      // تُعيد توجيه إخراج الصوت عبر AudioContext، ومع ملفات mp3quran العابرة للنطاق
      // (بدون ترويسات CORS) يصبح المصدر "ملوّثاً" فيُكتم الصوت تماماً.
      // المؤشّر البصري متوفّر عبر أشرطة الإكولايزر (eq-wrap) المتحركة بالـCSS.

      /* ============ GESTURE SUPPORT ============ */
      (() => {
        let tx0 = 0, ty0 = 0, tapT = 0;
        const panel = document.getElementById('quranPanel');
        const playerEl = document.querySelector('.player-card');

        // Swipe على لوحة القرآن:
        // 1) سحب لأسفل على الترويسة يغلق اللوحة
        // 2) سحب أفقي (يمين/يسار) داخل النص أو المصحف المصوّر عندما تكون التلاوة متوقفة (!isPlaying) يقلّب الصفحات والسور للقراءة
        if (panel) {
          let startOnHeader = false;
          let ignoreBodySwipe = false;
          panel.addEventListener('touchstart', e => {
            tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY;
            startOnHeader = !!e.target.closest('.qp-header');
            ignoreBodySwipe = !!e.target.closest('select, input, button, a, .qp-opts, .info-tabs, .qp-tabs, .qp-mobile-nav');
          }, { passive: true });

          panel.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - tx0;
            const dy = e.changedTouches[0].clientY - ty0;

            if (startOnHeader) {
              if (Math.abs(dy) > 60 && dy > 0 && Math.abs(dx) < 50) closeTextPanel();
              return;
            }

            // التقليب باللمس يميناً ويساراً (يعمل دائماً في وضع الصفحات المستقلة والمصحف المصوّر، وعند توقف الصوت في وضع التمرير)
            if (ignoreBodySwipe) return;
            if (isPlaying && currentQpTab === 'text' && textPageMode !== 'pages') return;
            if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.35) return;

            // في المصحف العربي (RTL): السحب لليمين (dx > 0) = الصفحة/السورة التالية | السحب لليسار (dx < 0) = الصفحة/السورة السابقة
            const isNext = (lang === 'ar') ? (dx > 0) : (dx < 0);
            const animCls = isNext ? 'page-flip-next' : 'page-flip-prev';
            const triggerFlipAnim = el => {
              if (!el) return;
              el.classList.remove('page-flip-next', 'page-flip-prev');
              void el.offsetWidth;
              el.classList.add(animCls);
            };

            if (currentQpTab === 'mushaf') {
              const mBody = $('qpMushafBody');
              if (isNext) {
                if (mushafCurrentPageIdx < mushafSurahPages.length - 1) {
                  showMushafPage(mushafCurrentPageIdx + 1);
                  triggerFlipAnim(mBody);
                } else if (goNext()) {
                  syncMobileSelectors(); renderNP(); onSurahChangeForText();
                  triggerFlipAnim(mBody);
                  showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                }
              } else {
                if (mushafCurrentPageIdx > 0) {
                  showMushafPage(mushafCurrentPageIdx - 1);
                  triggerFlipAnim(mBody);
                } else if (goPrev()) {
                  syncMobileSelectors(); renderNP(); onSurahChangeForText();
                  triggerFlipAnim(mBody);
                  showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                }
              }
              return;
            }

            if (currentQpTab === 'text' && qpBody) {
              // أولاً: إذا كان وضع الصفحات المستقلة مفعّلاً، نقلّب بين أقسام الصفحات يميناً ويساراً كما في الصور
              if (textPageMode === 'pages') {
                const pageEls = qpBody.querySelectorAll('.qp-text-page');
                if (isNext) {
                  if (textCurrentPageIdx < pageEls.length - 1) {
                    showTextPage(textCurrentPageIdx + 1, 'next');
                  } else if (!isPlaying && goNext()) {
                    syncMobileSelectors(); renderNP(); onSurahChangeForText();
                    triggerFlipAnim(qpBody);
                    showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                  }
                } else {
                  if (textCurrentPageIdx > 0) {
                    showTextPage(textCurrentPageIdx - 1, 'prev');
                  } else if (!isPlaying && goPrev()) {
                    syncMobileSelectors(); renderNP(); onSurahChangeForText();
                    triggerFlipAnim(qpBody);
                    showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                  }
                }
                return;
              }

              const pageBlocks = Array.from(qpBody.querySelectorAll('.mushaf-page-lines'));
              if (pageBlocks.length > 1) {
                const cRect = qpBody.getBoundingClientRect();
                // إيجاد الصفحة المعروضة حالياً في منتصف منطقة القراءة
                let curPageIdx = 0;
                for (let i = 0; i < pageBlocks.length; i++) {
                  const r = pageBlocks[i].getBoundingClientRect();
                  if (r.top <= cRect.top + cRect.height * 0.45) curPageIdx = i;
                }
                if (isNext && curPageIdx < pageBlocks.length - 1) {
                  const targetBlock = pageBlocks[curPageIdx + 1];
                  const sep = qpBody.querySelector(`.mushaf-page-sep[data-page="${targetBlock.dataset.page}"]`) || targetBlock;
                  const topPos = qpBody.scrollTop + (sep.getBoundingClientRect().top - cRect.top) - 6;
                  qpBody.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
                  triggerFlipAnim($('qpTextWrap') || qpBody);
                  showToast(lang === 'ar' ? `📖 صفحة ${toArDigits(targetBlock.dataset.page)}` : `📖 Page ${targetBlock.dataset.page}`, 'info', 1500);
                  return;
                }
                if (!isNext && curPageIdx > 0) {
                  const targetBlock = pageBlocks[curPageIdx - 1];
                  const sep = curPageIdx - 1 === 0
                    ? qpBody.firstElementChild
                    : (qpBody.querySelector(`.mushaf-page-sep[data-page="${targetBlock.dataset.page}"]`) || targetBlock);
                  const topPos = curPageIdx - 1 === 0 ? 0 : (qpBody.scrollTop + (sep.getBoundingClientRect().top - cRect.top) - 6);
                  qpBody.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
                  triggerFlipAnim($('qpTextWrap') || qpBody);
                  showToast(lang === 'ar' ? `📖 صفحة ${toArDigits(targetBlock.dataset.page)}` : `📖 Page ${targetBlock.dataset.page}`, 'info', 1500);
                  return;
                }
              }

              // عند نهاية صفحات السورة الحالية (أو للسور ذات الصفحة الواحدة): الانتقال للسورة التالية/السابقة بهدوء بدون تشغيل الصوت
              if (isNext) {
                if (goNext()) {
                  syncMobileSelectors(); renderNP(); onSurahChangeForText();
                  qpBody.scrollTop = 0;
                  triggerFlipAnim(qpBody);
                  showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                }
              } else {
                if (goPrev()) {
                  syncMobileSelectors(); renderNP(); onSurahChangeForText();
                  qpBody.scrollTop = 0;
                  triggerFlipAnim(qpBody);
                  showToast(lang === 'ar' ? `📖 سورة ${surahs[sIdx]?.name}` : `📖 Surah ${surahs[sIdx]?.name}`, 'info', 1800);
                }
              }
            }
          }, { passive: true });
        }

        // Swipe على المشغل: يسار = تالي، يمين = سابق
        if (playerEl) {
          let px0 = 0, py0 = 0, pSkip = false;
          playerEl.addEventListener('touchstart', e => {
            px0 = e.touches[0].clientX; py0 = e.touches[0].clientY;
            // تجاهل الإيماءات التي تبدأ على شريط التقدم/المنزلقات — السحب هناك = تقديم، لا تنقّل
            pSkip = !!e.target.closest('.prog-track, input[type=range]');
          }, { passive: true });
          playerEl.addEventListener('touchend', e => {
            if (pSkip || dragging) return;
            const dx = e.changedTouches[0].clientX - px0;
            const dy = e.changedTouches[0].clientY - py0;
            if (Math.abs(dx) > 60 && Math.abs(dy) < 40) {
              if (dx < 0) executeNextMode(true);            // swipe يسار = التالي
              else if (goPrev()) { playAudio(); onSurahChangeForText(); saveSettings(); } // swipe يمين = السابق
            }
          }, { passive: true });

          // Double tap = تشغيل/إيقاف (خارج الأزرار والحقول كي لا يتضاعف أثر النقر)
          playerEl.addEventListener('touchend', e => {
            if (pSkip || e.target.closest('button, select, input, a')) { tapT = 0; return; }
            const now = Date.now();
            if (now - tapT < 300) {
              isPlaying ? audio.pause() : playAudio();
              e.preventDefault();
            }
            tapT = now;
          });
        }
      })();

      /* ============ ENHANCED SEARCH ============ */
      (() => {
        const inp = $('qpSearch');
        if (!inp) return;
        // إعادة تعريف البحث بمنطق أذكى
        inp.addEventListener('input', () => {
          const raw = inp.value.trim();
          const container = $('qpBody');
          if (!container) return;
          const rows = container.querySelectorAll('.si-ayah');

          if (!raw) {
            rows.forEach(r => { r.style.display = ''; r.style.outline = ''; });
            highlightCurrentPosition();
            return;
          }

          // إذا كان رقماً: ابحث بالآية
          const num = parseInt(raw);
          if (!isNaN(num)) {
            rows.forEach(r => {
              const match = parseInt(r.dataset.ayah) === num;
              r.style.display = match || isNaN(num) ? '' : 'none';
              r.style.outline = match ? '2px solid var(--acc1)' : '';
              if (match) {
                const pgWrap = r.closest('.qp-text-page');
                if (pgWrap && textPageMode === 'pages') showTextPage(parseInt(pgWrap.dataset.pageIdx || '0', 10));
                r.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            });
            return;
          }

          // بحث نصي بدون تشكيل
          const q = normalizeAr(raw);
          let firstMatchPage = null;
          rows.forEach(r => {
            const txt = normalizeAr(r.dataset.text || r.textContent || '');
            const match = txt.includes(q);
            r.style.display = match ? '' : 'none';
            r.style.outline = '';
            if (match && firstMatchPage === null) {
              const pgWrap = r.closest('.qp-text-page');
              if (pgWrap) firstMatchPage = parseInt(pgWrap.dataset.pageIdx || '0', 10);
            }
          });
          if (firstMatchPage !== null && textPageMode === 'pages') {
            showTextPage(firstMatchPage);
          }
        });
      })();

      /* ============ URL SHORTCUTS & DEEP LINKS ============ */
      let hashHandled = false;
      function parseAndApplyHash(force = false) {
        if (hashHandled && !force) return false;
        const h = location.hash || '';
        const s = location.search || '';
        if ((!h || h === '#') && (!s || s === '?')) return false;
        hashHandled = true;

        if (h === '#random') { setTimeout(() => randRecBtn.click(), 200); return true; }
        if (h === '#resume') { setTimeout(() => resumeLast(), 200); return true; }

        // قراءة معاملات المشاركة العميقة من ?search أو #hash
        const rawQuery = (h.includes('=') ? h.slice(1) : (s.includes('=') ? s.slice(1) : ''));
        if (rawQuery) {
          const sp = new URLSearchParams(rawQuery);
          const recId = sp.get('r');
          const riParam = sp.get('ri');
          const moshId = sp.get('m');
          const miParam = sp.get('mi');
          const surahN = parseInt(sp.get('s') || '0', 10);
          const ayahN = parseInt(sp.get('a') || '0', 10);
          if (recId || riParam !== null || surahN > 0) {
            setTimeout(() => {
              openSharedDeepLink({
                recId,
                riParam: riParam !== null ? parseInt(riParam, 10) : null,
                moshId,
                miParam: miParam !== null ? parseInt(miParam, 10) : null,
                surahNum: surahN || null,
                ayahNum: ayahN || null
              });
            }, 150);
            return true;
          }
        }

        // روابط مشاركة سورة بصيغة #s<رقم>
        const m = /^#s(\d{1,3})$/.exec(h);
        if (m) {
          setTimeout(() => openSharedDeepLink({ surahNum: parseInt(m[1], 10) }), 150);
          return true;
        }
        return false;
      }

      function handleHashShortcuts() {
        return parseAndApplyHash(false);
      }
      window.addEventListener('hashchange', () => parseAndApplyHash(true));

      function openSharedDeepLink({ recId = null, riParam = null, moshId = null, miParam = null, surahNum = null, ayahNum = null }) {
        let { ri, mi, si } = resolveSavedIndices({
          recId,
          rIdx: riParam,
          moshId,
          mIdx: miParam,
          surahNum
        });
        const validSurah = (surahNum && surahNum >= 1 && surahNum <= 114) ? surahNum : null;
        if (si === null && validSurah) {
          si = surahs.findIndex(s => s.n === validSurah);
        }
        if (ri === null) ri = rIdx;
        if (mi === null) mi = mIdx;

        if (ri === null || mi === null) {
          const targetN = validSurah || 1;
          const afasyIdx = reciters.findIndex(r => r.cleanName && (r.cleanName.includes('مشاري') || r.cleanName.includes('Afasy')));
          if (afasyIdx >= 0) {
            ri = afasyIdx; mi = 0;
          } else {
            for (let i = 0; i < reciters.length; i++) {
              const foundM = (reciters[i].moshaf || []).findIndex(mo => mo.surah_list.split(',').map(Number).includes(targetN));
              if (foundM >= 0) { ri = i; mi = foundM; break; }
            }
          }
        }
        if (si === null || si < 0) si = 0;
        if (ayahNum && ayahNum > 0 && surahs[si]) {
          pendingResumeAyah = { surahNum: surahs[si].n, ayah: ayahNum };
        }
        if (ri !== null && mi !== null && si >= 0) {
          selectReciterMoshafSurah(ri, mi, si, false);
          openTextPanel();
          // محاولة بدء التشغيل التلقائي للسورة والشيخ المشاركين (إن سمح المتصفح، وإلا يجهّز الصوت عند نفس الآية بانتظار نقرة التشغيل)
          playAudio();
        }
      }

      /* ============ SETTINGS PANEL ============ */
      const settingsOverlay = $('settingsOverlay');
      const SET_LABELS = {
        ar: {
          title: '⚙️ الإعدادات', appr: '🎨 المظهر واللغة', theme: 'السمة', langL: 'اللغة',
          text: '📜 نص السورة', script: 'الرسم الافتراضي', autoS: 'تمرير النص مع التلاوة',
          autoHi: 'تظليل الآية مع القراءة تلقائياً عند القراء المتزامنة أصواتهم',
          mLines: 'الأسطر كما في المصحف',
          fs: 'حجم خط النص', lm: 'طريقة عرض الآيات',
          lmOpts: ['≡ كل آية بسطر', '⋯ متتاليات'],
          pm: 'طريقة عرض صفحات السورة',
          pmOpts: ['↕ تمرير لأسفل', '↔ صفحات مستقلة'],
          pd: 'توزيع السور في الصفحة',
          pdOpts: ['📖 توزيع المصحف', '📄 سورة مستقلة'],
          tabGen: '⚙️ الإعدادات العامة', tabDl: '📥 التحميلات والتخزين',
          mushaf: '📖 المصحف المصور', mushafSrc: 'المصدر الافتراضي',
          play: '🎵 التشغيل', autoPlayChange: 'تشغيل مباشر عند تغيير القارئ / السورة', speed: 'سرعة التشغيل', vol: 'مستوى الصوت', rep: 'التكرار', stop: 'إيقاف تلقائي بعد',
          misc: '🔔 الإشعارات والبيانات', notif: 'تنبيه عند انتهاء السورة / المؤقت', clear: '🗑️ مسح جميع البيانات',
          credit: '✦ تطوير وبرمجة عامر الحلحلي', creditAria: 'توثيق المطوّر',
          scripts: ['🕌 رسم عثماني', '📝 نص مطبوع', '✏️ نص عادي', '🕋 خط المصحف (QCF)', '🎨 خط التجويد الملوّن'],
          reps: ['بدون تكرار', 'مرة واحدة', 'مرتان', 'ثلاث مرات', '∞ لا نهائي']
        },
        en: {
          title: '⚙️ Settings', appr: '🎨 Appearance & Language', theme: 'Theme', langL: 'Language',
          text: '📜 Surah Text', script: 'Default script', autoS: 'Auto-scroll text with audio',
          autoHi: 'Auto-highlight verse with recitation for synced reciters',
          mLines: 'Lines as in the mushaf',
          fs: 'Text font size', lm: 'Ayah layout',
          lmOpts: ['≡ One ayah per line', '⋯ Flowing text'],
          pm: 'Surah page navigation',
          pmOpts: ['↕ Scroll down', '↔ Independent pages'],
          pd: 'Surah page distribution',
          pdOpts: ['📖 Mushaf layout', '📄 Single surah'],
          tabGen: '⚙️ General Settings', tabDl: '📥 Downloads & Offline',
          mushaf: '📖 Mushaf Images', mushafSrc: 'Default source',
          play: '🎵 Playback', autoPlayChange: 'Direct playback on reciter/surah change', speed: 'Playback speed', vol: 'Volume', rep: 'Repeat', stop: 'Auto-stop after',
          misc: '🔔 Notifications & Data', notif: 'Alert when surah / timer ends', clear: '🗑️ Clear all data',
          credit: '✦ Designed & developed by Amer Al-Halahli', creditAria: 'Developer credit',
          scripts: ['🕌 Uthmani', '📝 Print', '✏️ Plain', '🕋 Mushaf font (QCF)', '🎨 Colored Tajweed font'],
          reps: ['No repeat', 'Once', 'Twice', '3 times', '∞ Infinite']
        }
      };

      /* تلميحات (hints) لكل صف من إعدادات — تُترجم مع تبديل اللغة */
      const SET_TIPS = {
        ar: {
          theme: 'اختر مظهر التطبيق: بنفسجي، داكن، أخضر زمردي، ذهبي (فاتح/غامق) أو بيج هادئ.',
          lang: 'لغة الواجهة: العربية (يمين) أو الإنجليزية (يسار).',
          script: 'الرسم الافتراضي الذي يُعرض به نص السورة عند فتح لوحة النص.',
          autoS: 'يمرّر نص السورة تلقائياً ليتبع موضع التلاوة الحالي.',
          autoHi: 'ظلّل الآية الجارية أثناء التلاوة. اطفئه إن أردت النص ثابتاً بلا تظليل.',
          mLines: 'يبقى النص مقسّماً كما في المصحف مع تبرير كل سطر من الحافتين. أطفئه لدمج النص في فقرة واحدة متّصلة.',
          fs: 'حجم خط نص السورة — يمكنك تغييره أيضاً من أزرار A− / A+ في شريط خيارات النص.',
          lm: 'كل آية في سطر مستقل، أو الآيات متتالية داخل فقرة واحدة.',
          pm: 'التمرير العمودي لأسفل عبر كامل السورة، أو عرض كل صفحة مصحفية في قسم مستقل يتم تقليبه يميناً ويساراً كالصور.',
          pd: 'توزيع المصحف يُظهر السورة السابقة أو التالية إذا كانت مشتركة في نفس الصفحة كما في المصحف الشريف، أو عرض السورة الحالية وحدها.',
          mushafSrc: 'المصدر الافتراضي لصور المصحف المصوّر.',
          speed: 'سرعة التلاوة من 0.5× إلى 2×.',
          vol: 'مستوى صوت التشغيل.',
          rep: 'تكرار الآية أو السورة الحالية أثناء التشغيل.',
          stop: 'أوقف التشغيل تلقائياً بعد مدة محدّدة أو عند نهاية السورة/المصحف. الافتراضي: لا يوجد.',
          notif: 'إظهار إشعار عند انتهاء السورة أو انتهاء المؤقّت.',
          clear: 'يحذف المفضلة والإعدادات والإحصائيات نهائياً من هذا المتصفح.'
        },
        en: {
          theme: 'Choose the app theme: purple, dark, emerald, gold (light/dark) or calm beige.',
          lang: 'Interface language: Arabic (RTL) or English (LTR).',
          script: 'Default script used for the surah text when the text panel opens.',
          autoS: 'Auto-scroll the surah text to follow the current recitation.',
          autoHi: 'Highlight the ayah being recited. Turn it off for a static, unhighlighted text.',
          mLines: 'Keep the text split exactly as in the printed mushaf, each line justified edge to edge. Turn it off to merge everything into one flowing paragraph.',
          fs: 'Font size of the surah text — you can also change it with the A− / A+ buttons in the text options bar.',
          lm: 'One ayah per line, or ayahs flowing inside a single paragraph.',
          pm: 'Scroll vertically down through the surah, or view each Mushaf page independently and flip right/left.',
          pd: 'Show previous/next surahs when they share the same Mushaf page, or show only the selected surah.',
          mushafSrc: 'Default source for the illustrated mushaf pages.',
          speed: 'Recitation speed from 0.5× to 2×.',
          vol: 'Playback volume.',
          rep: 'Repeat the current ayah or surah while playing.',
          stop: 'Stop playback automatically after a set time or at the end of the surah/moshaf. Default: None.',
          notif: 'Show a notification when the surah or the timer ends.',
          clear: 'Permanently deletes favorites, settings and statistics from this browser.'
        }
      };

      function fillSettingsLabels() {
        const L = SET_LABELS[lang];
        $('settingsTitle').textContent = L.title;
        $('setApprTitle').textContent = L.appr; $('setThemeLbl').textContent = L.theme; $('setLangLbl').textContent = L.langL;
        $('setTextTitle').textContent = L.text; $('setScriptLbl').textContent = L.script; $('setAutoScrollLbl').textContent = L.autoS;
        $('setAutoHiLbl').textContent = L.autoHi;
        $('setMushafLinesLbl').textContent = L.mLines;
        $('setFontSizeLbl').textContent = L.fs; $('setLineModeLbl').textContent = L.lm;
        const lmBtns = $('setLineModeSeg');
        if (lmBtns) Array.from(lmBtns.querySelectorAll('button')).forEach((b, i) => { if (L.lmOpts[i]) b.textContent = L.lmOpts[i]; });
        if ($('setPageModeLbl')) $('setPageModeLbl').textContent = L.pm;
        const pmBtns = $('setPageModeSeg');
        if (pmBtns) Array.from(pmBtns.querySelectorAll('button')).forEach((b, i) => { if (L.pmOpts[i]) b.textContent = L.pmOpts[i]; });
        if ($('setPageDistLbl')) $('setPageDistLbl').textContent = L.pd;
        const pdBtns = $('setPageDistSeg');
        if (pdBtns) Array.from(pdBtns.querySelectorAll('button')).forEach((b, i) => { if (L.pdOpts[i]) b.textContent = L.pdOpts[i]; });
        if ($('setTabGeneral')) $('setTabGeneral').textContent = L.tabGen;
        if ($('setTabDownloads')) $('setTabDownloads').textContent = L.tabDl;
        if (typeof fillDownloadsLabels === 'function') fillDownloadsLabels();
        $('setMushafTitle').textContent = L.mushaf; $('setMushafLbl').textContent = L.mushafSrc;
        $('setPlayTitle').textContent = L.play;
        if ($('setAutoPlayChangeLbl')) $('setAutoPlayChangeLbl').textContent = L.autoPlayChange;
        $('setSpeedLbl').textContent = L.speed; $('setVolLbl').textContent = L.vol;
        $('setRepeatLbl').textContent = L.rep; $('setStopLbl').textContent = L.stop;
        $('setMiscTitle').textContent = L.misc; $('setNotifLbl').textContent = L.notif; $('setClearData').textContent = L.clear;
        // خيارات الرسم
        const ss = $('setScriptSel');
        if (ss) Array.from(ss.options).forEach((o, i) => { if (L.scripts[i]) o.textContent = L.scripts[i]; });
        // خيارات التكرار
        const rs = $('setRepeat');
        if (rs) Array.from(rs.options).forEach((o, i) => o.textContent = L.reps[i]);
        // توثيق المطوّر في نهاية الشاشة
        const cr = $('setCredit');
        if (cr) { cr.textContent = L.credit; cr.setAttribute('aria-label', L.creditAria); }
        applySettingsTips();
      }

      /* إرفاق تلميح مترجم بكل صف إعداد */
      function applySettingsTips() {
        const tips = SET_TIPS[lang] || {};
        const map = {
          setThemeLbl: 'theme', setLangLbl: 'lang', setScriptLbl: 'script',
          setAutoScrollLbl: 'autoS', setAutoHiLbl: 'autoHi', setMushafLinesLbl: 'mLines',
          setFontSizeLbl: 'fs', setLineModeLbl: 'lm', setPageModeLbl: 'pm', setPageDistLbl: 'pd', setMushafLbl: 'mushafSrc',
          setSpeedLbl: 'speed', setVolLbl: 'vol', setRepeatLbl: 'rep',
          setStopLbl: 'stop', setNotifLbl: 'notif', setClearData: 'clear'
        };
        Object.keys(map).forEach(id => {
          const el = $(id); if (!el) return;
          const txt = tips[map[id]]; if (!txt) return;
          const target = el.closest('.set-row') || el;
          target.setAttribute('title', txt);
        });
      }

      function fillMushafSourceSelect() {
        const sel = $('setMushafSel');
        if (!sel) return;
        sel.innerHTML = '';
        MUSHAF_SOURCES.forEach((src, i) => {
          const o = document.createElement('option'); o.value = i; o.textContent = src.label; sel.appendChild(o);
        });
        sel.value = mushafSourceIdx;
      }

      function syncSettingsControls() {
        // السمة
        const activeThemeDot = (theme === 'dark') ? 'default' : ((theme === 'gold-dark') ? 'gold' : ((theme === 'emerald-dark') ? 'emerald' : theme));
        document.querySelectorAll('.set-theme-dot').forEach(d => d.classList.toggle('active', d.dataset.t === activeThemeDot));
        // اللغة
        $('setLangSeg').querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        // الرسم
        $('setScriptSel').value = currentScript;
        // التمرير التلقائي
        $('setAutoScroll').checked = autoScrollText;
        // تظليل الآية مع القراءة (نعم / لا)
        $('setAutoHi').checked = autoHighlight;
        // أسطر المصحف (أطفئه لدمج النص)
        $('setMushafLines').checked = mushafLines;
        // حجم خط النص
        if ($('setFontSize')) { $('setFontSize').value = qpFontSize; $('setFontSizeVal').textContent = qpFontSize; }
        // طريقة عرض الآيات
        document.querySelectorAll('#setLineModeSeg button').forEach(b =>
          b.classList.toggle('active', b.dataset.lm === currentLineMode));
        // طريقة عرض صفحات السورة
        document.querySelectorAll('#setPageModeSeg button').forEach(b =>
          b.classList.toggle('active', b.dataset.pm === textPageMode));
        // توزيع السور في الصفحة
        document.querySelectorAll('#setPageDistSeg button').forEach(b =>
          b.classList.toggle('active', b.dataset.pd === mushafPageDist));
        // المصحف
        fillMushafSourceSelect();
        // السرعة
        const spd = parseFloat(speedCtrl.value) || 1;
        $('setSpeed').value = spd; $('setSpeedVal').textContent = spd + '×';
        // الصوت
        const v = parseInt(volCtrl.value) || 0;
        $('setVol').value = v; $('setVolVal').textContent = v;
        // التشغيل المباشر عند تغيير القارئ / السورة
        if ($('setAutoPlayChange')) $('setAutoPlayChange').checked = autoPlayOnChange;
        // التكرار
        $('setRepeat').value = repeatMode;
        // الإيقاف — انسخ خيارات قائمة الإيقاف الرئيسية
        const stopSelEl = $('setStop');
        if (stopSelEl && stopSel) { stopSelEl.innerHTML = stopSel.innerHTML; stopSelEl.value = stopSel.value; }
        // الإشعارات
        $('setNotif').checked = localStorage.getItem('notifEnabled') !== '0';
      }

      function openSettings() {
        fillSettingsLabels();
        syncSettingsControls();
        settingsOverlay.classList.add('open');
      }
      function closeSettings() { settingsOverlay.classList.remove('open'); }

      if ($('settingsBtn')) $('settingsBtn').onclick = openSettings;
      if ($('settingsClose')) $('settingsClose').onclick = closeSettings;
      settingsOverlay.onclick = e => { if (e.target === settingsOverlay) closeSettings(); };

      // السمة
      $('setThemes').querySelectorAll('.set-theme-dot').forEach(d => {
        d.onclick = () => { applyTheme(d.dataset.t, true); syncSettingsControls(); };
      });
      // اللغة
      $('setLangSeg').querySelectorAll('button').forEach(b => {
        b.onclick = async () => {
          if (b.dataset.lang === lang) return;
          await toggleLang(); updateNextMenuLabels();
          fillSettingsLabels(); syncSettingsControls();
        };
      });
      // الرسم الافتراضي
      $('setScriptSel').onchange = function () {
        currentScript = this.value;
        localStorage.setItem('defaultScript', currentScript);
        if (typeof setScript === 'function') setScript(currentScript);
      };
      // تمرير النص مع التلاوة
      $('setAutoScroll').onchange = function () {
        autoScrollText = this.checked;
        localStorage.setItem('autoScrollText', this.checked ? '1' : '0');
      };
      // تظليل الآية مع القراءة تلقائياً عند القراء المتزامنة أصواتهم (نعم / لا)
      $('setAutoHi').onchange = function () {
        autoHighlight = this.checked;
        localStorage.setItem('autoHighlightV2', autoHighlight ? '1' : '0');
        localStorage.setItem('autoHighlight', autoHighlight ? '1' : '0');
        // إلغاء التظليل فوراً عند الإطفاء
        if (!autoHighlight) document.querySelectorAll('.si-ayah.sync-active').forEach(r => r.classList.remove('sync-active'));
        else if (textPanelOpen && ayahsData.length) { lastHighlightTime = audio.currentTime; highlightCurrentPosition(); }
      };
      // أسطر المصحف: إبقاء فواصل الأسطر \n أو دمجها
      $('setMushafLines').onchange = function () {
        mushafLines = this.checked;
        localStorage.setItem('mushafLinesV2', mushafLines ? '1' : '0');
        reRenderText();
      };
      // حجم خط النص (يُحفظ)
      if ($('setFontSize')) $('setFontSize').oninput = function () {
        qpFontSize = parseInt(this.value) || 26;
        $('setFontSizeVal').textContent = qpFontSize;
        lsSave('qpFontSizeV2', qpFontSize);
        applyFontSize();
      };
      // طريقة عرض الآيات: كل آية بسطر / متتاليات (يُحفظ)
      document.querySelectorAll('#setLineModeSeg button').forEach(b => {
        b.onclick = () => { setLineMode(b.dataset.lm); syncSettingsControls(); };
      });
      // طريقة عرض صفحات السورة: تمرير لأسفل / صفحات مستقلة (يُحفظ)
      document.querySelectorAll('#setPageModeSeg button').forEach(b => {
        b.onclick = () => { setPageMode(b.dataset.pm); syncSettingsControls(); };
      });
      // توزيع السور في الصفحة: توزيع المصحف / سورة مستقلة (يُحفظ)
      document.querySelectorAll('#setPageDistSeg button').forEach(b => {
        b.onclick = () => { setPageDist(b.dataset.pd); syncSettingsControls(); };
      });

      /* ══════════════════════════════════════════════════════════════
         مركز التحميلات والتخزين للعمل بدون إنترنت (Downloads & Offline Center)
         - يدعم الحفظ في ذاكرة المتصفح (Cache Storage) أو في مجلد محلي (File System Access API)
         - يدعم تنزيل: الملفات الأساسية ونصوص الـ 114 سورة، الخطوط (QCF والتجويد)، الصور، والتلاوات الصوتية
      ══════════════════════════════════════════════════════════════ */
      let dlTargetMode = ls('dlTargetMode') === 'folder' ? 'folder' : 'browser'; // 'browser' | 'folder'
      let dlDirHandle = null;
      let dlAbortCtrl = null;
      let dlRunning = false;

      const DL_LABELS = {
        ar: {
          targetTitle: '💾 التخزين في ذاكرة المتصفح',
          targetBrowser: '🌐 ذاكرة المتصفح',
          targetFolder: '📁 مجلد على الجهاز',
          pickFolder: '📂 اختيار مجلد الحفظ...',
          noFolder: 'لم يتم اختيار مجلد بعد (سيُحفظ أيضاً في ذاكرة المتصفح)',
          itemsTitle: '📦 اختر ما تريد تنزيله',
          selectAll: '☑️ تحديد الكل',
          unselectAll: '⬜ إلغاء الكل',
          coreLbl: '📦 الملفات الأساسية ونصوص القرآن (114 سورة)',
          coreSub: 'ملفات المشغل + بيانات القراء + النصوص العثمانية والمطبوعة ومعلومات السور',
          fontsLbl: '🔤 خطوط المصحف الشريف والتجويد (604 صفحة)',
          fontsSub: 'لتشغيل رسم مصحف المدينة وخط التجويد الملوّن بدون إنترنت',
          fontType: 'نوع الخط:',
          fontTypes: ['🕋 خطوط المصحف (QCF)', '🎨 خط التجويد الملوّن', '✨ الخطان معاً (QCF + التجويد)'],
          rangeLbl: 'النطاق:',
          rangeOpts: ['كامل المصحف (1 – 604)', 'صفحات محددة...'],
          fromPg: 'من صفحة:', toPg: 'إلى:',
          imagesLbl: '🖼️ صور صفحات المصحف المصوّر (604 صفحة)',
          imagesSub: 'تنزيل صفحات المصحف المصوّرة لتصفحها بدون إنترنت',
          imgSrc: 'المصدر:',
          audioLbl: '🎧 التلاوات الصوتية للقراء (MP3 + التوقيتات)',
          audioSub: 'تنزيل تلاوات أي مقرئ لسور محددة أو كامل المصحف',
          recLbl: 'المقرئ:', moshLbl: 'المصحف:', surahsLbl: 'السور:',
          audRangeOpts: ['من سورة إلى سورة...', 'جميع السور المتاحة (الكل)'],
          fromSurah: 'من:', toSurah: 'إلى:',
          startBtn: '⬇️ بدء التنزيل الآن',
          cancelBtn: '⏹️ إيقاف',
          clearCacheBtn: '🗑️ مسح التنزيلات المخزنة في المتصفح'
        },
        en: {
          targetTitle: '💾 Browser Offline Storage',
          targetBrowser: '🌐 Browser Memory',
          targetFolder: '📁 Device Folder',
          pickFolder: '📂 Choose Save Folder...',
          noFolder: 'No folder selected yet (also cached in browser memory)',
          itemsTitle: '📦 Select Items to Download',
          selectAll: '☑️ Select All',
          unselectAll: '⬜ Unselect All',
          coreLbl: '📦 Core App & All 114 Surahs Text',
          coreSub: 'App files + reciters data + Uthmani/print texts & surah info',
          fontsLbl: '🔤 Mushaf & Tajweed Fonts (604 Pages)',
          fontsSub: 'Run QCF Madinah & Colored Tajweed fonts offline',
          fontType: 'Font Type:',
          fontTypes: ['🕋 Mushaf Fonts (QCF)', '🎨 Colored Tajweed Font', '✨ Both (QCF + Tajweed)'],
          rangeLbl: 'Range:',
          rangeOpts: ['Full Mushaf (1 – 604)', 'Custom page range...'],
          fromPg: 'From page:', toPg: 'To:',
          imagesLbl: '🖼️ Illustrated Mushaf Pages (604 Pages)',
          imagesSub: 'Download Mushaf page images for offline reading',
          imgSrc: 'Source:',
          audioLbl: '🎧 Audio Recitations (MP3 + Sync Timings)',
          audioSub: 'Download recitations for any reciter (surah range or all)',
          recLbl: 'Reciter:', moshLbl: 'Moshaf:', surahsLbl: 'Surahs:',
          audRangeOpts: ['From surah to surah...', 'All available surahs'],
          fromSurah: 'From:', toSurah: 'To:',
          startBtn: '⬇️ Start Download Now',
          cancelBtn: '⏹️ Stop',
          clearCacheBtn: '🗑️ Clear Browser Offline Downloads'
        }
      };

      function fillDownloadsLabels() {
        const L = DL_LABELS[lang] || DL_LABELS.ar;
        const setTxt = (id, v) => { const e = $(id); if (e && v != null) e.textContent = v; };
        setTxt('dlTargetTitle', L.targetTitle);
        setTxt('dlTargetBrowserBtn', L.targetBrowser);
        setTxt('dlTargetFolderBtn', L.targetFolder);
        setTxt('dlPickFolderBtn', L.pickFolder);
        setTxt('dlFolderNameLbl', dlDirHandle ? `✅ ${dlDirHandle.name}` : L.noFolder);
        setTxt('dlItemsTitle', L.itemsTitle);
        setTxt('dlSelectAllBtn', L.selectAll);
        setTxt('dlCoreLbl', L.coreLbl); setTxt('dlCoreSub', L.coreSub);
        setTxt('dlFontsLbl', L.fontsLbl); setTxt('dlFontsSub', L.fontsSub);
        setTxt('dlFontTypeLbl', L.fontType); setTxt('dlFontRangeLbl', L.rangeLbl);
        setTxt('dlFontFromLbl', L.fromPg); setTxt('dlFontToLbl', L.toPg);
        setTxt('dlImagesLbl', L.imagesLbl); setTxt('dlImagesSub', L.imagesSub);
        setTxt('dlImgSrcLbl', L.imgSrc); setTxt('dlImgRangeLbl', L.rangeLbl);
        setTxt('dlImgFromLbl', L.fromPg); setTxt('dlImgToLbl', L.toPg);
        setTxt('dlAudioLbl', L.audioLbl); setTxt('dlAudioSub', L.audioSub);
        setTxt('dlRecLbl', L.recLbl); setTxt('dlMoshLbl', L.moshLbl); setTxt('dlAudRangeLbl', L.surahsLbl);
        setTxt('dlAudFromLbl', L.fromSurah); setTxt('dlAudToLbl', L.toSurah);
        if (!dlRunning) setTxt('dlStartBtn', L.startBtn);
        setTxt('dlCancelBtn', L.cancelBtn);
        setTxt('dlClearCacheBtn', L.clearCacheBtn);

        const ftSel = $('dlFontTypeSel');
        if (ftSel) Array.from(ftSel.options).forEach((o, i) => { if (L.fontTypes[i]) o.textContent = L.fontTypes[i]; });
        ['dlFontRangeMode', 'dlImgRangeMode'].forEach(id => {
          const el = $(id);
          if (el) Array.from(el.options).forEach((o, i) => { if (L.rangeOpts[i]) o.textContent = L.rangeOpts[i]; });
        });
        const arSel = $('dlAudioRangeMode');
        if (arSel) Array.from(arSel.options).forEach((o, i) => { if (L.audRangeOpts[i]) o.textContent = L.audRangeOpts[i]; });
        updateStorageEstimateUI();
      }

      async function updateStorageEstimateUI() {
        const infoEl = $('dlStorageInfo');
        if (!infoEl) return;
        if (navigator.storage && navigator.storage.estimate) {
          try {
            const est = await navigator.storage.estimate();
            const usedMB = ((est.usage || 0) / (1024 * 1024)).toFixed(1);
            const quotaGB = est.quota ? ((est.quota / (1024 * 1024 * 1024)).toFixed(1) + ' GB') : '';
            infoEl.textContent = lang === 'ar'
              ? `📊 المساحة المخزنة في المتصفح: ${usedMB} ميجابايت${quotaGB ? ' (المتاح: ' + quotaGB + ')' : ''}`
              : `📊 Browser offline storage used: ${usedMB} MB${quotaGB ? ' (Quota: ' + quotaGB + ')' : ''}`;
            return;
          } catch (e) {}
        }
        infoEl.textContent = lang === 'ar'
          ? '📊 ذاكرة المتصفح جاهزة للتخزين والعمل دون اتصال'
          : '📊 Browser memory ready for offline storage';
      }

      function populateDownloadControls() {
        // 1. مصادر صور المصحف
        const imgSel = $('dlImgSourceSel');
        if (imgSel) {
          imgSel.innerHTML = '';
          MUSHAF_SOURCES.forEach((src, i) => {
            const o = document.createElement('option'); o.value = i; o.textContent = src.label; imgSel.appendChild(o);
          });
          imgSel.value = mushafSourceIdx;
        }
        // 2. قائمة القراء للتنزيل
        const recDlSel = $('dlReciterSel');
        if (recDlSel && reciters.length) {
          recDlSel.innerHTML = '';
          reciters.forEach((r, i) => {
            if (!r || !r.name) return;
            const o = document.createElement('option'); o.value = i; o.textContent = r.name; recDlSel.appendChild(o);
          });
          recDlSel.value = rIdx !== null ? String(rIdx) : '0';
          populateDlMoshafAndSurahs();
        }
      }

      function populateDlMoshafAndSurahs() {
        const recDlSel = $('dlReciterSel');
        const moshDlSel = $('dlMoshafSel');
        const fromSel = $('dlAudioFromSurah');
        const toSel = $('dlAudioToSurah');
        if (!recDlSel || !moshDlSel || !fromSel || !toSel) return;

        const ri = parseInt(recDlSel.value || '0', 10);
        const r = reciters[ri];
        moshDlSel.innerHTML = '';
        if (r && Array.isArray(r.moshaf)) {
          r.moshaf.forEach((m, mi) => {
            const o = document.createElement('option'); o.value = mi; o.textContent = m.name; moshDlSel.appendChild(o);
          });
        }
        const updateSurahRangeForMoshaf = () => {
          const mi = parseInt(moshDlSel.value || '0', 10);
          const m = r?.moshaf?.[mi];
          const availNums = m ? (m.surah_list || '').split(',').map(Number).filter(Boolean) : surahs.map(s => s.n);
          fromSel.innerHTML = ''; toSel.innerHTML = '';
          availNums.forEach(n => {
            const sObj = surahs.find(x => x.n === n) || { n, name: String(n) };
            const o1 = document.createElement('option'); o1.value = n; o1.textContent = `${n}. ${sObj.name}`;
            const o2 = o1.cloneNode(true);
            fromSel.appendChild(o1); toSel.appendChild(o2);
          });
          if (availNums.length) {
            const curN = (sIdx !== null && surahs[sIdx] && availNums.includes(surahs[sIdx].n)) ? surahs[sIdx].n : availNums[0];
            fromSel.value = String(curN);
            toSel.value = String(availNums[availNums.length - 1]);
          }
        };
        moshDlSel.onchange = updateSurahRangeForMoshaf;
        updateSurahRangeForMoshaf();
      }

      if ($('dlReciterSel')) $('dlReciterSel').onchange = populateDlMoshafAndSurahs;

      // تبديل تبويبات الإعدادات (الإعدادات العامة | التحميلات والتخزين)
      document.querySelectorAll('#settingsTabs .set-tab-btn').forEach(btn => {
        btn.onclick = () => {
          const tab = btn.dataset.stab;
          document.querySelectorAll('#settingsTabs .set-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
          const isDl = (tab === 'downloads');
          if ($('setPaneGeneral')) {
            $('setPaneGeneral').classList.toggle('active', !isDl);
            $('setPaneGeneral').style.display = isDl ? 'none' : 'block';
          }
          if ($('setPaneDownloads')) {
            $('setPaneDownloads').classList.toggle('active', isDl);
            $('setPaneDownloads').style.display = isDl ? 'block' : 'none';
          }
          if (isDl) {
            fillDownloadsLabels();
            populateDownloadControls();
          }
        };
      });

      // إظهار/إخفاء حقول النطاق المخصص للخطوط والصور والصوتيات
      if ($('dlFontRangeMode')) $('dlFontRangeMode').onchange = function () {
        if ($('dlFontRangeCustom')) $('dlFontRangeCustom').style.display = (this.value === 'custom') ? 'flex' : 'none';
      };
      if ($('dlImgRangeMode')) $('dlImgRangeMode').onchange = function () {
        if ($('dlImgRangeCustom')) $('dlImgRangeCustom').style.display = (this.value === 'custom') ? 'flex' : 'none';
      };
      if ($('dlAudioRangeMode')) $('dlAudioRangeMode').onchange = function () {
        if ($('dlAudioRangeCustom')) $('dlAudioRangeCustom').style.display = (this.value === 'custom') ? 'flex' : 'none';
      };

      // زر تحديد / إلغاء تحديد الكل
      if ($('dlSelectAllBtn')) {
        $('dlSelectAllBtn').onclick = () => {
          const chks = ['dlChkCore', 'dlChkFonts', 'dlChkImages', 'dlChkAudio'].map(id => $(id)).filter(Boolean);
          const allChecked = chks.every(c => c.checked);
          chks.forEach(c => { c.checked = !allChecked; });
          const L = DL_LABELS[lang] || DL_LABELS.ar;
          $('dlSelectAllBtn').textContent = !allChecked ? L.unselectAll : L.selectAll;
        };
      }

      // مساعد لجلب رابط وتخزينه في ذاكرة المتصفح (Cache Storage)
      async function fetchAndStoreAsset(url, cacheName, _subPathArr, _fileName, signal) {
        const resp = await fetch(url, { signal });
        if (!resp.ok && resp.type !== 'opaque') throw new Error('HTTP ' + resp.status);
        if ('caches' in window && cacheName) {
          try {
            const cache = await caches.open(cacheName);
            await cache.put(url, resp.clone());
          } catch (e) {}
        }
      }

      // تنفيذ التنزيل الشامل إلى ذاكرة المتصفح
      async function startBatchDownload() {
        if (dlRunning) return;
        const chkCore = $('dlChkCore')?.checked;
        const chkFonts = $('dlChkFonts')?.checked;
        const chkImages = $('dlChkImages')?.checked;
        const chkAudio = $('dlChkAudio')?.checked;

        const L = DL_LABELS[lang] || DL_LABELS.ar;
        if (!chkCore && !chkFonts && !chkImages && !chkAudio) {
          showToast(L.nothingSel, 'warn');
          return;
        }

        const tasks = [];

        // 1. مهام الملفات الأساسية ونصوص الـ 114 سورة
        if (chkCore) {
          const coreAssets = ['./', './index.html', './style.css', './script.js', './qcf-data.js', './manifest.json', './icon.svg', './icon.png'];
          coreAssets.forEach(u => {
            const fn = u === './' ? 'root.html' : u.replace('./', '');
            tasks.push({
              label: lang === 'ar' ? `الملف الأساسي: ${fn}` : `Core file: ${fn}`,
              run: sig => fetchAndStoreAsset(u, 'quran-app-v28', ['core'], fn, sig)
            });
          });
          for (let sn = 1; sn <= 114; sn++) {
            const sName = surahs.find(x => x.n === sn)?.name || String(sn);
            tasks.push({
              label: lang === 'ar' ? `نص ومعلومات سورة ${sName} (${sn}/114)` : `Surah ${sName} text & info (${sn}/114)`,
              run: async sig => {
                await fetchAndStoreAsset(`https://api.alquran.cloud/v1/surah/${sn}/quran-uthmani`, 'quran-text-v28', ['texts'], `surah_${sn}_uthmani.json`, sig);
                try {
                  await fetchAndStoreAsset(`https://api.quranpedia.net/v1/surahs/${sn}`, 'quran-text-v28', ['texts'], `surah_${sn}_info.json`, sig);
                } catch (_) {}
              }
            });
          }
        }

        // 2. مهام الخطوط القرآنية (QCF / Tajweed)
        if (chkFonts) {
          const fType = $('dlFontTypeSel')?.value || 'qcf';
          const isAll = ($('dlFontRangeMode')?.value || 'all') === 'all';
          const pFrom = isAll ? 1 : Math.max(1, Math.min(604, parseInt($('dlFontFromPg')?.value || '1', 10)));
          const pTo = isAll ? 604 : Math.max(1, Math.min(604, parseInt($('dlFontToPg')?.value || '604', 10)));
          const lo = Math.min(pFrom, pTo), hi = Math.max(pFrom, pTo);
          const modes = fType === 'both' ? ['qcf', 'tajweed'] : [fType];

          modes.forEach(m => {
            const cfg = FONT_ENGINES[m];
            if (!cfg) return;
            for (let pg = lo; pg <= hi; pg++) {
              const fn = cfg.fileFn(pg);
              const url = cfg.sources[0] + fn;
              tasks.push({
                label: lang === 'ar' ? `خط ${m === 'tajweed' ? 'التجويد' : 'المصحف'} — صفحة ${pg}` : `${m.toUpperCase()} font — Page ${pg}`,
                run: sig => fetchAndStoreAsset(url, 'quran-qcf-v28', ['fonts', m], fn, sig)
              });
            }
          });
        }

        // 3. مهام صور صفحات المصحف
        if (chkImages) {
          const srcIdx = parseInt($('dlImgSourceSel')?.value || '0', 10);
          const srcObj = MUSHAF_SOURCES[srcIdx] || MUSHAF_SOURCES[0];
          const isAll = ($('dlImgRangeMode')?.value || 'all') === 'all';
          const pFrom = isAll ? 1 : Math.max(1, Math.min(604, parseInt($('dlImgFromPg')?.value || '1', 10)));
          const pTo = isAll ? 604 : Math.max(1, Math.min(604, parseInt($('dlImgToPg')?.value || '604', 10)));
          const lo = Math.min(pFrom, pTo), hi = Math.max(pFrom, pTo);

          for (let pg = lo; pg <= hi; pg++) {
            const url = srcObj.urlFn(pg);
            const ext = (url.split('.').pop() || 'png').split('?')[0];
            const fn = `page_${String(pg).padStart(3, '0')}.${ext}`;
            tasks.push({
              label: lang === 'ar' ? `صورة المصحف (${srcObj.label}) — صفحة ${pg}` : `Mushaf Image — Page ${pg}`,
              run: sig => fetchAndStoreAsset(url, 'quran-img-v28', ['images', srcObj.id], fn, sig)
            });
          }
        }

        // 4. مهام التلاوات الصوتية + التوقيتات الدقيقة
        if (chkAudio) {
          const ri = parseInt($('dlReciterSel')?.value || '0', 10);
          const mi = parseInt($('dlMoshafSel')?.value || '0', 10);
          const r = reciters[ri];
          const m = r?.moshaf?.[mi];
          if (r && m) {
            const availNums = (m.surah_list || '').split(',').map(Number).filter(Boolean);
            const isAll = ($('dlAudioRangeMode')?.value || 'custom') === 'all';
            const sFrom = isAll ? 1 : parseInt($('dlAudioFromSurah')?.value || '1', 10);
            const sTo = isAll ? 114 : parseInt($('dlAudioToSurah')?.value || '114', 10);
            const lo = Math.min(sFrom, sTo), hi = Math.max(sFrom, sTo);
            const targetSurahs = availNums.filter(n => n >= lo && n <= hi);

            targetSurahs.forEach(sn => {
              const sName = surahs.find(x => x.n === sn)?.name || String(sn);
              const pad3 = String(sn).padStart(3, '0');
              tasks.push({
                label: lang === 'ar' ? `تلاوة ${r.name} — سورة ${sName}` : `Audio ${r.name} — Surah ${sName}`,
                run: async sig => {
                  let mp3Url = `${m.server}${pad3}.mp3`;
                  if (r.isPrecision && !r.audioServer) {
                    const syncApiUrl = `https://api.quran.com/api/v4/chapter_recitations/${r.precisionQid}/${sn}?segments=true`;
                    try {
                      await fetchAndStoreAsset(syncApiUrl, 'quran-text-v28', ['audio', r.name, 'timings'], `timings_${pad3}.json`, sig);
                      const pData = await fetchPrecisionAudioData(r.precisionQid, sn);
                      if (pData && pData.audioUrl) mp3Url = pData.audioUrl;
                    } catch (_) {}
                  } else if (r.audioServer) {
                    mp3Url = `${r.audioServer}${pad3}.mp3`;
                  }
                  await fetchAndStoreAsset(mp3Url, 'quran-audio-v28', ['audio', r.name], `${pad3}_${sName}.mp3`, sig);
                }
              });
            });
          }
        }

        if (!tasks.length) {
          showToast(L.nothingSel, 'warn');
          return;
        }

        dlRunning = true;
        dlAbortCtrl = new AbortController();
        const sig = dlAbortCtrl.signal;

        const progWrap = $('dlProgressWrap');
        const progStatus = $('dlProgStatus');
        const progCount = $('dlProgCount');
        const progFill = $('dlProgBarFill');
        const progPct = $('dlProgPct');
        const startBtn = $('dlStartBtn');
        const cancelBtn = $('dlCancelBtn');

        if (progWrap) progWrap.style.display = 'block';
        if (startBtn) startBtn.disabled = true;
        if (cancelBtn) cancelBtn.style.display = 'inline-flex';

        let completed = 0;
        let failed = 0;
        const total = tasks.length;

        const updateProgView = (txt) => {
          const pct = Math.round((completed / total) * 100);
          if (progStatus && txt) progStatus.textContent = txt;
          if (progCount) progCount.textContent = `${completed} / ${total}`;
          if (progFill) progFill.style.width = `${pct}%`;
          if (progPct) progPct.textContent = `${pct}%`;
        };

        updateProgView(tasks[0].label);

        let idx = 0;
        const workers = Array.from({ length: Math.min(3, total) }, async () => {
          while (idx < total && !sig.aborted) {
            const currentTask = tasks[idx++];
            updateProgView(currentTask.label);
            try {
              await currentTask.run(sig);
            } catch (e) {
              if (sig.aborted) break;
              failed++;
            }
            completed++;
            updateProgView(currentTask.label);
          }
        });

        await Promise.all(workers);

        dlRunning = false;
        if (startBtn) startBtn.disabled = false;
        if (cancelBtn) cancelBtn.style.display = 'none';
        await updateStorageEstimateUI();

        if (sig.aborted) {
          updateProgView(lang === 'ar' ? '⏹️ تم إيقاف التنزيل' : '⏹️ Download stopped');
          showToast(lang === 'ar' ? '⏹️ تم إيقاف التنزيل' : '⏹️ Download stopped', 'warn');
        } else {
          const okCount = total - failed;
          updateProgView(lang === 'ar'
            ? `✅ اكتمل التنزيل بنجاح (${okCount} من ${total})`
            : `✅ Download complete (${okCount} of ${total})`);
          showToast(lang === 'ar' ? `✅ تم تنزيل وحفظ ${okCount} ملف في ذاكرة المتصفح` : `✅ Saved ${okCount} files in browser memory`, 'info', 3500);
        }
      }

      if ($('dlStartBtn')) $('dlStartBtn').onclick = startBatchDownload;
      if ($('dlCancelBtn')) $('dlCancelBtn').onclick = () => {
        if (dlAbortCtrl) dlAbortCtrl.abort();
      };
      if ($('dlClearCacheBtn')) $('dlClearCacheBtn').onclick = async () => {
        if (!confirm(lang === 'ar' ? 'هل تريد مسح جميع الملفات والخطوط والتلاوات المنزّلة في ذاكرة المتصفح؟' : 'Clear all offline downloaded files, fonts & audio from browser memory?')) return;
        if ('caches' in window) {
          const keys = await caches.keys();
          await Promise.all(keys.filter(k => !k.startsWith('quran-app-')).map(k => caches.delete(k)));
        }
        await updateStorageEstimateUI();
        showToast(lang === 'ar' ? '🗑️ تم مسح التنزيلات المخزنة في المتصفح' : '🗑️ Cleared offline downloads from browser', 'info');
      };
      // مصدر المصحف الافتراضي
      $('setMushafSel').onchange = function () {
        mushafSourceIdx = parseInt(this.value) || 0;
        localStorage.setItem('mushafSourceV2', String(mushafSourceIdx));
        if (typeof buildMushafSourceTabs === 'function') buildMushafSourceTabs();
        if (mushafSurahPages.length) showMushafPage(mushafCurrentPageIdx);
      };
      // السرعة
      $('setSpeed').oninput = function () { setSpeed(this.value); };
      // الصوت
      $('setVol').oninput = function () { setVolume(this.value); };
      // التشغيل المباشر عند تغيير القارئ / السورة
      if ($('setAutoPlayChange')) $('setAutoPlayChange').onchange = function () {
        autoPlayOnChange = this.checked;
        localStorage.setItem('autoPlayOnChange', this.checked ? '1' : '0');
      };
      // التكرار
      $('setRepeat').onchange = function () {
        repeatMode = parseInt(this.value) || 0; repeatCount = 0;
        const t = T[lang]; syncRepeatUI();
        saveSettings();
      };
      // الإيقاف التلقائي
      $('setStop').onchange = function () {
        if (stopSel) { stopSel.value = this.value; applyStop(); }
      };
      // الإشعارات
      $('setNotif').onchange = function () {
        localStorage.setItem('notifEnabled', this.checked ? '1' : '0');
        if (this.checked && 'Notification' in window && Notification.permission === 'default') Notification.requestPermission();
      };
      // مسح البيانات
      $('setClearData').onclick = () => clearData();

      // مزامنة زر الرسم النشط مع الافتراضي المحفوظ عند الإقلاع
      if (typeof setScript === 'function') setScript(currentScript);

      /* ============ INIT ============ */
      loadReciters();
