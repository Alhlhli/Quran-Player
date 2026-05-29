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
          statTopLbl: 'أكثر استماعاً: ', cdHeader: '⏲️ مؤقّت عدّ تنازلي',
          cdMin: 'دق', cdSec: 'ثا', cdStart: 'ابدأ',
          notifFin: (n) => `انتهت تلاوة سورة ${n}`, notifTimer: 'انتهى المؤقّت.',
          bmPrompt: 'ملاحظة / رقم آية (اختياري):', bmAdded: '✅ إشارة مرجعية مضافة.',
          favSet: '⭐ تم تعيين المفضل.', favUnset: 'تم إزالة المفضل.',
          prevSurah: '⏮', nextSurah: '⏭',
          dlSurah: '📥 تحميل السورة', allSurahs: '📚 جميع السور',
          hideDl: '🔼 إخفاء', hideAll: '🔼 إخفاء',
          recentHeader: '⏱️ آخر ما استمعت إليه',
          ayahsLbl: 'آية', appTitle: '📖 مشغل القرآن الكريم',
          expLbl: '📤 تصدير', stopTimerLbl: 'ينتهي بعد:',
          shareDlgTitle: 'مشاركة', shareWebLbl: 'مشاركة رابط التطبيق',
          shareWebSub: 'يفتح مشغل القرآن', shareSurahLbl: 'مشاركة رابط السورة',
          shareSurahSub: 'رابط استماع / تحميل مباشر', shareCancelLbl: 'إلغاء',
          installTitle: 'ثبّت التطبيق', installSub: 'استمع من شاشتك الرئيسية',
          installBtn: 'تثبيت',
          recSearchPh: '🔍 بحث...'
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
          statTopLbl: 'Most listened: ', cdHeader: '⏲️ Countdown timer',
          cdMin: 'Min', cdSec: 'Sec', cdStart: 'Start',
          notifFin: (n) => `Finished playing ${n}`, notifTimer: 'Timer finished.',
          bmPrompt: 'Note / verse number (optional):', bmAdded: '✅ Bookmark added.',
          favSet: '⭐ Added to favorites.', favUnset: 'Removed from favorites.',
          prevSurah: '⏮', nextSurah: '⏭',
          dlSurah: '📥 Download', allSurahs: '📚 All Surahs',
          hideDl: '🔼 Hide', hideAll: '🔼 Hide',
          recentHeader: '⏱️ Recently played',
          ayahsLbl: 'verses', appTitle: '📖 Quran Player',
          expLbl: '📤 Export', stopTimerLbl: 'Stops in:',
          shareDlgTitle: 'Share', shareWebLbl: 'Share app link',
          shareWebSub: 'Opens Quran Player', shareSurahLbl: 'Share surah link',
          shareSurahSub: 'Direct listen / download', shareCancelLbl: 'Cancel',
          installTitle: 'Install App', installSub: 'Listen from your home screen',
          installBtn: 'Install',
          recSearchPh: '🔍 Search...'
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
      let cdInterval = null, cdRemain = 0, cdTotal = 0;
      let dragging = false;
      let lastPos = {}; // {rIdx,mIdx,sIdx,time} — استكمال من آخر موضع
      let deferredPrompt = null;

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
      const progTrack = $('progTrack'), progThumb = $('progThumb'); // progFill unused
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
      const cdSection = $('cdSection'), cdMin = $('cdMin'), cdSec = $('cdSec');
      const cdStartBtn = $('cdStartBtn'), cdRingWrap = $('cdRingWrap');
      const cdDisplay = $('cdDisplay'), cdRing = $('cdRing');
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
      const qpAutoScroll = $('qpAutoScroll');
      // حالة لوحة النص — تُعلَن هنا، تُعرَّف في قسم QURAN PANEL
      let textPanelOpen = false;
      // Desktop install bar
      const desktopInstallBar = $('desktopInstallBar');
      const dInstallBtn = $('dInstallBtn');
      const dInstallClose = $('dInstallClose');

      /* ============ PWA: MANIFEST ============ */
      (function setupPWA() {
        // Generate SVG icon as dataURL
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#667eea"/>
        <stop offset="100%" style="stop-color:#764ba2"/>
      </linearGradient>
      <linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(255,255,255,0.3)"/>
        <stop offset="100%" style="stop-color:rgba(255,255,255,0)"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="110" fill="url(#g)"/>
    <rect width="512" height="256" rx="0" fill="url(#g2)"/>
    <rect x="100" y="80" width="312" height="352" rx="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="4"/>
    <rect x="116" y="96" width="280" height="320" rx="14" fill="rgba(255,255,255,0.12)"/>
    <rect x="140" y="150" width="232" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
    <rect x="140" y="178" width="200" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
    <rect x="140" y="202" width="220" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
    <rect x="140" y="226" width="190" height="10" rx="5" fill="rgba(255,255,255,0.6)"/>
    <rect x="140" y="260" width="232" height="12" rx="6" fill="rgba(255,255,255,0.9)"/>
    <rect x="140" y="288" width="210" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
    <rect x="140" y="312" width="195" height="10" rx="5" fill="rgba(255,255,255,0.6)"/>
    <circle cx="256" cy="410" r="38" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.4)" stroke-width="3"/>
    <text x="256" y="428" font-size="42" text-anchor="middle" fill="white" font-family="serif">▶</text>
  </svg>`;
        const iconUrl = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
        $('appleIcon').href = iconUrl;
        // Favicon
        const faviconEl = $('faviconLink');
        if (faviconEl) faviconEl.href = iconUrl;

        // Manifest
        const manifest = {
          name: 'مشغل القرآن الكريم',
          short_name: 'القرآن',
          description: 'استمع للقرآن الكريم بأصوات أجمل القراء',
          start_url: '.',
          display: 'standalone',
          background_color: '#667eea',
          theme_color: '#667eea',
          orientation: 'portrait-primary',
          lang: 'ar',
          dir: 'rtl',
          icons: [
            { src: iconUrl, sizes: '192x192', type: 'image/svg+xml' },
            { src: iconUrl, sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' }
          ],
          shortcuts: [
            { name: 'تشغيل عشوائي', short_name: 'عشوائي', description: 'قارئ وسورة عشوائية', url: '.#random', icons: [{ src: iconUrl, sizes: '96x96' }] },
            { name: 'آخر سورة', short_name: 'آخر سورة', description: 'استكمال آخر جلسة', url: '.#resume', icons: [{ src: iconUrl, sizes: '96x96' }] }
          ]
        };
        const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
        $('pwaManifest').href = URL.createObjectURL(blob);

        // Service Worker (offline cache)
        if ('serviceWorker' in navigator) {
          const swCode = `
const CACHE='quran-pwa-v1';
const ASSETS=['./'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('mp3quran.net/api')){
    e.respondWith(fetch(e.request).catch(()=>new Response('[]',{headers:{'Content-Type':'application/json'}})));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});`;
          const swBlob = new Blob([swCode], { type: 'application/javascript' });
          const swUrl = URL.createObjectURL(swBlob);
          navigator.serviceWorker.register(swUrl).catch(e => console.warn('SW:', e));
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
          setTimeout(() => $('splash').remove(), 800);
        }, 1900);
      });

      /* ============ LOAD RECITERS ============ */
      async function loadReciters() {
        try {
          const saved = ls('language'); if (saved === 'en' || saved === 'ar') lang = saved;
          const resp = await fetch(API[lang].r);
          const data = await resp.json();
          reciters = Array.isArray(data.reciters) ? data.reciters : (Array.isArray(data) ? data : (data.data || []));
          buildReciterList();
          loadSettings();
          loadBookmarks(); loadStats(); loadRecent();
          updateFavIcon();
          if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission();
          updateUI();
          await loadSurahNames();
          // استعادة مؤقت الإيقاف إن كان لا يزال سارياً
          restoreStopTimer();
        } catch (e) { statusDiv.textContent = 'خطأ في التحميل. يرجى إعادة المحاولة.'; console.error(e); }
      }

      function buildReciterList(filterQ = '') {
        const t = T[lang];
        recSel.innerHTML = '';
        const ph = document.createElement('option'); ph.value = ''; ph.textContent = t.recLbl.replace(/[:：]$/, '');
        recSel.appendChild(ph);
        reciters.forEach((r, i) => {
          if (filterQ && !r.name.toLowerCase().includes(filterQ.toLowerCase())) return;
          const opt = document.createElement('option'); opt.value = i;
          opt.textContent = (favR === i ? '⭐ ' : '') + r.name;
          recSel.appendChild(opt);
        });
        if (rIdx !== null) recSel.value = rIdx;
      }

      async function loadSurahNames() {
        try {
          const resp = await fetch(API[lang].s);
          const data = await resp.json();
          const list = data.suwar || data.data || (Array.isArray(data) ? data : null);
          if (list && Array.isArray(list)) {
            surahs = list.map(it => ({ n: parseInt(it.id || it.number || it.index), name: it.name || it.english_name || it.surah_name || it.native }));
            buildSurahList();
            buildRangeSelects(); // مدى السور
          }
        } catch (e) { console.warn('surah names fallback'); }
      }

      /* ============ BUILD LISTS ============ */
      function buildMoshafList() {
        const t = T[lang];
        moshSel.innerHTML = `<option value="">${t.moshLbl.replace(/[:：]$/, '')}</option>`;
        surahSel.innerHTML = `<option value="">${t.surahLbl.replace(/[:：]$/, '')}</option>`;
        if (rIdx !== null) reciters[rIdx].moshaf.forEach((m, i) => {
          const o = document.createElement('option'); o.value = i; o.textContent = m.name; moshSel.appendChild(o);
        });
        mIdx = null; sIdx = null; updateStatus();
      }

      function buildSurahList(filterQ = '') {
        const t = T[lang];
        surahSel.innerHTML = `<option value="">${t.surahLbl.replace(/[:：]$/, '')}</option>`;
        if (rIdx !== null && mIdx !== null) {
          const m = reciters[rIdx].moshaf[mIdx];
          const avail = m.surah_list.split(',').map(Number);
          avail.forEach(num => {
            const s = surahs.find(x => x.n === num); if (!s) return;
            if (filterQ && !s.name.toLowerCase().includes(filterQ.toLowerCase()) && !String(num).includes(filterQ)) return;
            const o = document.createElement('option'); o.value = surahs.indexOf(s);
            o.textContent = `${s.n}. ${s.name}`; surahSel.appendChild(o);
          });
        }
        if (sIdx !== null) surahSel.value = sIdx;
        updateStatus();
      }

      /* ============ AUDIO URL ============ */
      function audioUrl() {
        if (rIdx === null || mIdx === null || sIdx === null) return '';
        const m = reciters[rIdx].moshaf[mIdx];
        return m.server + String(surahs[sIdx].n).padStart(3, '0') + '.mp3';
      }

      /* ============ PLAY ============ */
      function playAudio() {
        const url = audioUrl();
        if (!url) { statusDiv.textContent = T[lang].statusDef; return; }
        if (audio.src !== url) { audio.src = url; audio.load(); }
        // استعادة سرعة التشغيل المحفوظة — تُعاد بعد تغيير المصدر
        const savedSpeed = parseFloat(speedCtrl.value) || 1;
        audio.playbackRate = savedSpeed;
        audio.play().catch(e => console.warn(e));
        updateDlLink();
        updateNP();
        setupMediaSession();
      }

      /* استكمال من آخر موضع */
      function resumeLast() {
        const saved = ls('lastPos');
        if (!saved) return;
        const p = JSON.parse(saved);
        if (p.rIdx !== null && p.sIdx !== null) {
          recSel.value = p.rIdx; rIdx = p.rIdx; buildMoshafList();
          moshSel.value = p.mIdx; mIdx = p.mIdx; buildSurahList();
          surahSel.value = p.sIdx; sIdx = p.sIdx;
          updateStatus(); updateDlLink();
          playAudio();
          audio.addEventListener('loadeddata', function h() {
            audio.currentTime = p.time || 0;
            audio.removeEventListener('loadeddata', h);
          });
        }
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
          const b1 = document.createElement('span'); b1.className = 'badge'; b1.textContent = meta[0] + ' ' + (lang === 'ar' ? 'آية' : 'verses'); npBadges.appendChild(b1);
          const b2 = document.createElement('span'); b2.className = 'badge'; b2.textContent = meta[1]; npBadges.appendChild(b2);
        }
        updateFloatingBar(); // تحديث الشريط العائم
      }

      function updateNP() {
        renderNP();
        if (rIdx !== null && sIdx !== null) addRecent(rIdx, mIdx, sIdx);
      }

      /* ============ PROGRESS BAR ============ */
      // شريط التقدم: الجزء المُشغَّل يمتد من اليسار (LTR ثابت داخل prog-ltr-wrap)
      const progElapsed = document.getElementById('progElapsed');
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
        if (rIdx !== null && sIdx !== null) {
          lsSave('lastPos', JSON.stringify({ rIdx, mIdx, sIdx, time: cur }));
        }
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
      progTrack.addEventListener('keydown', e => {
        if (!audio.duration) return;
        let handled = true;
        if (e.key === 'ArrowRight') audio.currentTime = Math.max(0, audio.currentTime - 5);
        else if (e.key === 'ArrowLeft') audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        else if (e.key === 'Home') audio.currentTime = 0;
        else if (e.key === 'End') audio.currentTime = audio.duration;
        else handled = false;
        if (handled) { e.preventDefault(); e.stopPropagation(); updateProg(); }
      });

      /* ============ FORMAT TIME ============ */
      function fmtTime(s) { if (!s || isNaN(s)) return '0:00'; const m = Math.floor(s / 60); return m + ':' + String(Math.floor(s % 60)).padStart(2, '0'); }

      /* ============ MUTE ============ */
      function toggleMute() {
        isMuted = !isMuted;
        if (isMuted) { volBefore = audio.volume * 100; audio.volume = 0; volCtrl.value = 0; volVal.textContent = '0'; muteBtn.textContent = '🔇'; }
        else { audio.volume = volBefore / 100; volCtrl.value = volBefore; volVal.textContent = Math.round(volBefore); muteBtn.textContent = '🔊'; }
        saveSettings();
        updateFloatingBar();
      }

      /* ============ REPEAT ============ */
      function toggleRepeat() {
        repeatMode = (repeatMode + 1) % 5; repeatCount = 0;
        const t = T[lang]; repBtn.textContent = t.repLabel + t.repModes[repeatMode];
        saveSettings();
      }

      /* ============ NAVIGATION ============ */
      function availSurahs() { if (rIdx === null || mIdx === null) return []; return reciters[rIdx].moshaf[mIdx].surah_list.split(',').map(Number); }
      function hasNext() { const av = availSurahs(); const cur = surahs[sIdx]?.n || 0; return av.some(n => n > cur); }
      function hasPrev() { const av = availSurahs(); const cur = surahs[sIdx]?.n || 115; return av.some(n => n < cur); }
      function hasNextRec() { return rIdx !== null && rIdx < reciters.length - 1; }

      function goNext() {
        const av = availSurahs(), cur = surahs[sIdx]?.n || 0;
        const nx = av.filter(n => n > cur).sort((a, b) => a - b)[0];
        if (!nx) return false;
        const i = surahs.findIndex(s => s.n === nx);
        if (i < 0) return false;
        sIdx = i; surahSel.value = i; updateStatus(); updateDlLink(); saveSettings(); return true;
      }
      function goPrev() {
        const av = availSurahs(), cur = surahs[sIdx]?.n || 115;
        const nxArr = av.filter(n => n < cur).sort((a, b) => b - a);
        const px = nxArr[0]; if (!px) return false;
        const i = surahs.findIndex(s => s.n === px);
        if (i < 0) return false;
        sIdx = i; surahSel.value = i; updateStatus(); updateDlLink(); saveSettings(); return true;
      }
      function nextReciter() {
        if (!hasNextRec()) return false;
        rIdx++; recSel.value = rIdx; buildMoshafList();
        if (moshSel.options.length > 1) { moshSel.value = moshSel.options[1].value; mIdx = parseInt(moshSel.value); buildSurahList(); }
        const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
        if (opts.length) { surahSel.value = opts[0].value; sIdx = parseInt(opts[0].value); updateStatus(); updateDlLink(); saveSettings(); return true; }
        return false;
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
        if (!stopEndTime) { stopTimerDisplay.classList.remove('show'); return; }
        const rem = Math.max(0, Math.round((stopEndTime - Date.now()) / 1000));
        const m = Math.floor(rem / 60).toString().padStart(2, '0');
        const s = String(rem % 60).padStart(2, '0');
        stopTimerClock.textContent = m + ':' + s;
        if (stopTimerLabel) stopTimerLabel.textContent = T[lang].stopTimerLbl;
      }
      function cancelStopTimer() {
        if (stopTimer) { clearTimeout(stopTimer); stopTimer = null; }
        if (stopTimerTick) { clearInterval(stopTimerTick); stopTimerTick = null; }
        stopTimerDisplay.classList.remove('show'); stopEndTime = null;
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
        recent = recent.filter(e => e.si !== si); recent.unshift({ ri, mi, si });
        if (recent.length > 5) recent.length = 5;
        lsSave('recent', JSON.stringify(recent)); updateRecent();
      }
      function loadRecent() { try { recent = JSON.parse(ls('recent') || '[]'); } catch (e) { recent = []; } updateRecent(); }
      function updateRecent() {
        const t = T[lang]; $('recentHeader').textContent = t.recentHeader;
        if (!recent.length) { recentSection.style.display = 'none'; return; }
        recentSection.style.display = 'block'; recentList.innerHTML = '';
        recent.forEach(e => {
          if (e.si === null || !surahs[e.si]) return;
          const recName = reciters[e.ri]?.name || '';
          const d = document.createElement('div'); d.className = 'recent-item';
          d.innerHTML = `<span class="rec-icon">🎵</span>
      <div style="min-width:0;flex:1">
        <div style="font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${surahs[e.si].name}</div>
        <div style="font-size:11px;color:var(--text-soft);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${recName}</div>
      </div>`;
          d.onclick = () => {
            recSel.value = e.ri; rIdx = e.ri; buildMoshafList();
            moshSel.value = e.mi; mIdx = e.mi; buildSurahList();
            surahSel.value = e.si; sIdx = e.si;
            updateStatus(); updateDlLink(); saveSettings(); playAudio();
            onSurahChangeForText(); // تحديث نص السورة في اللوحة
          };
          recentList.appendChild(d);
        });
      }

      /* ============ BOOKMARKS ============ */
      function addBm() {
        if (rIdx === null || mIdx === null || sIdx === null) return;
        const note = prompt(T[lang].bmPrompt, '') || '';
        bookmarks.push({ ri: rIdx, mi: mIdx, si: sIdx, time: audio.currentTime || 0, note: note.trim() });
        saveBm(); updateBm(); statusDiv.textContent = T[lang].bmAdded;
      }
      function saveBm() { lsSave('bm', JSON.stringify(bookmarks)); }
      function loadBookmarks() { try { bookmarks = JSON.parse(ls('bm') || '[]'); } catch (e) { bookmarks = []; } updateBm(); }
      function updateBm() {
        $('bmHeader').textContent = T[lang].bmHeader;
        bmSection.style.display = bookmarks.length ? 'block' : 'none'; bmList.innerHTML = '';
        bookmarks.forEach((bm, idx) => {
          const si = bm.si ?? bm.surahIndex;
          const ri = bm.ri ?? bm.reciterIndex;
          const s = surahs[si]; let surahName = s ? s.name : '?';
          const recName = reciters[ri]?.name || '';
          let subTxt = recName;
          if (bm.note) subTxt += bm.note ? ' — ' + bm.note : '';
          else if (bm.time) {
            const m = Math.floor(bm.time / 60).toString().padStart(2, '0');
            subTxt += ` (${m}:${String(Math.floor(bm.time % 60)).padStart(2, '0')})`;
          }
          const item = document.createElement('div'); item.className = 'bm-item';
          item.innerHTML = `<div style="flex:1;min-width:0">
      <div style="font-weight:700;font-size:13px">${surahName}</div>
      <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${subTxt}</div>
    </div>`;
          item.style.cursor = 'pointer';
          item.onclick = () => {
            const mi = bm.mi ?? bm.moshafIndex;
            recSel.value = ri; rIdx = ri; buildMoshafList();
            moshSel.value = mi; mIdx = mi; buildSurahList();
            surahSel.value = si; sIdx = si;
            updateStatus(); updateDlLink(); saveSettings(); playAudio();
            onSurahChangeForText();
            audio.addEventListener('loadeddata', function h() { audio.currentTime = bm.time || 0; audio.removeEventListener('loadeddata', h); });
          };
          const del = document.createElement('button'); del.className = 'bm-del'; del.textContent = '❌';
          del.onclick = e => { e.stopPropagation(); bookmarks.splice(idx, 1); saveBm(); updateBm(); };
          item.appendChild(del); bmList.appendChild(item);
        });
      }

      /* ============ COUNTDOWN ============ */
      function startCd() {
        if (cdInterval) { clearInterval(cdInterval); cdInterval = null; }
        cdTotal = (parseInt(cdMin.value) || 0) * 60 + (parseInt(cdSec.value) || 0);
        if (cdTotal <= 0) return;
        cdRemain = cdTotal; cdSection.style.display = 'block';
        cdDisplay.style.display = 'block'; cdRingWrap.style.display = 'flex';
        updateCdUI();
        cdInterval = setInterval(() => {
          cdRemain--; updateCdUI();
          if (cdRemain <= 0) { clearInterval(cdInterval); cdInterval = null; audio.pause(); isPlaying = false; playBtn.textContent = T[lang].play; notify(T[lang].notifTimer, ''); }
        }, 1000);
      }
      function updateCdUI() {
        const m = Math.floor(cdRemain / 60).toString().padStart(2, '0'), s = String(cdRemain % 60).padStart(2, '0');
        cdDisplay.textContent = `${m}:${s}`; cdDisplay.className = 'cd-label' + (cdRemain <= 60 ? ' urgent' : '');
        cdRing.style.strokeDashoffset = 213.6 * (1 - cdRemain / cdTotal);
      }

      /* ============ NOTIFICATIONS ============ */
      function notify(title, body) { if (localStorage.getItem('notifEnabled') === '0') return; if ('Notification' in window && Notification.permission === 'granted') { try { new Notification(title, { body, icon: '' }); } catch (e) { } } }

      /* ============ DOWNLOAD LINK ============ */
      function updateDlLink() {
        const url = audioUrl(); if (!url) { return; }
        const t = T[lang];
        if (rIdx !== null && sIdx !== null) {
          const s = surahs[sIdx], r = reciters[rIdx];
          dlLink.href = url; dlLink.textContent = t.dlPfx + s.name + ' — ' + r.name;
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
          // البطاقة
          const card = document.createElement('div');
          card.className = 'surah-card' + (isActive ? ' active-surah' : '');
          card.title = `${s.name} — ${meta ? meta[0] : ''} — ${meta ? meta[1] : ''}`;
          card.innerHTML = `<span class="sc-num">${s.n}</span><span class="sc-name">${s.name}</span><span class="sc-dl">▶</span>`;
          card.addEventListener('click', () => {
            surahSel.value = si; sIdx = si;
            updateStatus(); updateDlLink(); saveSettings();
            playAudio();
            // تحديث الحالة النشطة
            document.querySelectorAll('.surah-card').forEach(c => c.classList.remove('active-surah'));
            card.classList.add('active-surah');
          });
          allList.appendChild(card);
        });
      }

      /* روابط تحميل جميع السور */
      function showAllSurahsLinks() {
        if (rIdx === null || mIdx === null) return;
        const m = reciters[rIdx].moshaf[mIdx];
        const nums = m.surah_list.split(',').map(Number);
        const listEl = $('allLinksList'); if (!listEl) return;
        listEl.innerHTML = '';
        nums.forEach(num => {
          const s = surahs.find(x => x.n === num); if (!s) return;
          const url = m.server + String(num).padStart(3, '0') + '.mp3';
          const a = document.createElement('a'); a.href = url; a.target = '_blank';
          a.download = `${num}_${s.name}.mp3`;
          a.style.cssText = `display:flex;align-items:center;gap:8px;padding:9px 12px;
      border-radius:9px;background:var(--badge-bg);border:1.5px solid var(--input-border);
      color:var(--text);text-decoration:none;font-size:13px;font-weight:600;
      transition:border-color 0.15s,background 0.15s;margin-bottom:4px`;
          a.innerHTML = `<span style="font-size:15px;color:var(--acc1)">📥</span>
      <span style="flex:1">${num}. ${s.name}</span>
      <span style="font-size:10px;color:var(--text-soft);background:var(--input-bg);
        padding:2px 6px;border-radius:6px;border:1px solid var(--input-border)">MP3</span>`;
          a.addEventListener('mouseover', () => { a.style.borderColor = 'var(--acc1)'; });
          a.addEventListener('mouseout', () => { a.style.borderColor = 'var(--input-border)'; });
          listEl.appendChild(a);
        });
      }
      function updateFavIcon() { const on = rIdx !== null && favR === rIdx && favM === mIdx; favBtn.classList.toggle('fav-on', on); }
      function updateRecOpts() { Array.from(recSel.options).forEach((o, i) => { if (i === 0) return; const idx = parseInt(o.value); o.textContent = (favR === idx ? '⭐ ' : '') + (reciters[idx]?.name || ''); }); }
      function toggleFav() {
        if (rIdx === null || mIdx === null) return;
        const t = T[lang];
        if (favR === rIdx && favM === mIdx) { favR = null; favM = null; statusDiv.textContent = t.favUnset; }
        else { favR = rIdx; favM = mIdx; statusDiv.textContent = t.favSet; }
        updateFavIcon(); updateRecOpts();
        lsSave('favR', JSON.stringify(favR)); lsSave('favM', JSON.stringify(favM));
      }

      /* ============ SHARE ============ */
      function openShare() { shareOverlay.classList.add('open'); updateShareDlg(); }
      function closeShare() { shareOverlay.classList.remove('open'); }
      function updateShareDlg() {
        const t = T[lang];
        $('shareDlgTitle').textContent = t.shareDlgTitle;
        $('shareWebLbl').textContent = t.shareWebLbl; $('shareWebSub').textContent = t.shareWebSub;
        $('shareSurahLbl').textContent = t.shareSurahLbl; $('shareSurahSub').textContent = t.shareSurahSub;
        $('shareCancel').textContent = t.shareCancelLbl;
      }
      function doShare(type) {
        closeShare();
        const url = type === 'website' ? location.href : audioUrl();
        const text = type === 'website'
          ? `📖 مشغل القرآن الكريم\n${location.href}`
          : (rIdx !== null && sIdx !== null ? `🎧 ${surahs[sIdx]?.name} — ${reciters[rIdx]?.name}\n${url}` : url);
        if (navigator.share) { navigator.share({ title: 'مشغل القرآن الكريم', text, url }).catch(() => { }); }
        else {
          navigator.clipboard?.writeText(text + '\n' + url).catch(() => { });
          const tmp = document.createElement('textarea'); tmp.value = text; document.body.appendChild(tmp); tmp.select(); document.execCommand('copy'); document.body.removeChild(tmp);
          statusDiv.textContent = lang === 'ar' ? '✅ تم النسخ' : '✅ Copied!';
        }
      }

      /* ============ MEDIA SESSION ============ */
      function setupMediaSession() {
        if (!('mediaSession' in navigator) || rIdx === null || sIdx === null) return;
        const s = surahs[sIdx], r = reciters[rIdx];
        navigator.mediaSession.metadata = new MediaMetadata({
          title: s.name, artist: r.name, album: 'القرآن الكريم',
          artwork: [{ src: '', sizes: '512x512', type: 'image/svg+xml' }]
        });
        navigator.mediaSession.setActionHandler('play', () => audio.play());
        navigator.mediaSession.setActionHandler('pause', () => audio.pause());
        navigator.mediaSession.setActionHandler('previoustrack', () => { if (goPrev()) playAudio(); });
        navigator.mediaSession.setActionHandler('nexttrack', () => { if (goNext()) playAudio(); });
      }

      /* ============ STATUS ============ */
      function updateStatus() {
        const t = T[lang];
        statusDiv.textContent = (rIdx !== null && mIdx !== null && sIdx !== null)
          ? t.readySt(surahs[sIdx].name, reciters[rIdx].name, reciters[rIdx].moshaf[mIdx].name)
          : t.statusDef;
      }

      /* ============ THEME ============ */
      function applyTheme(t) {
        ['default', 'dark', 'emerald', 'gold'].forEach(x => document.body.classList.remove(x));
        if (t !== 'default') document.body.classList.add(t);
        document.querySelectorAll('.t-dot').forEach(d => d.classList.toggle('active', d.dataset.t === t));
        themeBtn.textContent = (t === 'dark') ? '☀️' : '🌙';
        theme = t; lsSave('theme', t);
        // update theme-color meta
        const col = { default: '#667eea', dark: '#1a1a2e', emerald: '#059669', gold: '#d97706' }[t] || '#667eea';
        document.querySelector('meta[name=theme-color]').content = col;
      }
      function toggleDark() { applyTheme(theme === 'dark' ? 'default' : 'dark'); }

      /* ============ LANGUAGE ============ */
      function updateUI() {
        const t = T[lang];
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir); document.body.setAttribute('dir', dir);
        $('appTitle').textContent = t.appTitle;
        $('reciterLbl').textContent = t.recLbl; $('moshafLbl').textContent = t.moshLbl; $('surahLbl').textContent = t.surahLbl;
        $('volLbl').textContent = t.volLbl; $('speedLbl').textContent = t.spdLbl; $('stopLbl').textContent = t.stopLbl;
        surahSearch.placeholder = t.srchPh; recSearch.placeholder = t.recSearchPh;
        $('searchNote').textContent = t.srchNote;
        randRecBtn.title = t.randRec; randSurahBtn.title = t.randSurah; favBtn.title = t.favTitle;
        bmBtn.title = t.bmTitle; cdStartBtn.title = t.cdStart;
        langBtn.textContent = lang === 'ar' ? 'EN' : 'ع';
        repBtn.textContent = t.repLabel + t.repModes[repeatMode];
        playBtn.textContent = isPlaying ? t.pause : t.play;
        updateStopOpts();
        updateStatus(); updateDlLink(); updateBm(); updateStats(); updateRecent(); updateNP();
        if (dlBtn) dlBtn.textContent = dlSection.style.display === 'block' ? t.hideDl : t.dlSurah;
        // dlAllBtn split into dlAllBtnCards + dlAllBtnLinks (no text update needed)
        if ($('cdHeader')) $('cdHeader').textContent = t.cdHeader;
        if (cdMin) cdMin.placeholder = t.cdMin; if (cdSec) cdSec.placeholder = t.cdSec;
        updateShareDlg();
        $('installTitle').textContent = t.installTitle; $('installSub').textContent = t.installSub;
        $('installBtn').textContent = t.installBtn;
        document.querySelectorAll('.sc-content').forEach(el => { el.style.display = el.dataset.lang === lang ? 'block' : 'none'; });
        if (recSel.options[0]) recSel.options[0].textContent = t.recLbl.replace(/[:：]$/, '');
        if (moshSel.options[0]) moshSel.options[0].textContent = t.moshLbl.replace(/[:：]$/, '');
        if (surahSel.options[0]) surahSel.options[0].textContent = t.surahLbl.replace(/[:：]$/, '');
        speedVal.textContent = parseFloat(speedCtrl.value) + '×';
        // تحديث عداد الوقت المتبقي في الإيقاف
        if (stopTimerLabel) stopTimerLabel.textContent = t.stopTimerLbl;
        // تحديث تسميات قائمة التنويع
        updateNextMenuLabels();
      }
      function updateStopOpts() {
        const t = T[lang]; if (!stopSel) return;
        const prev = stopSel.value; stopSel.innerHTML = '';
        for (const k in t.stopOpts) { const o = document.createElement('option'); o.value = k; o.textContent = t.stopOpts[k]; stopSel.appendChild(o); }
        if (prev && t.stopOpts[prev]) stopSel.value = prev;
      }
      async function toggleLang() {
        lang = lang === 'ar' ? 'en' : 'ar'; lsSave('language', lang); updateUI(); await loadReciters(); updateRecOpts(); updateUI();
      }

      /* ============ SETTINGS ============ */
      function saveSettings() {
        lsSave('settings', JSON.stringify({ rIdx, mIdx, sIdx, vol: volCtrl.value, speed: speedCtrl.value, repeatMode, stopAfter: stopSel?.value }));
      }
      function loadSettings() {
        try {
          const s = JSON.parse(ls('settings') || 'null'); if (!s) return;
          if (s.vol) { volCtrl.value = s.vol; audio.volume = s.vol / 100; volVal.textContent = Math.round(s.vol); }
          if (s.speed) { speedCtrl.value = s.speed; audio.playbackRate = parseFloat(s.speed); speedVal.textContent = parseFloat(s.speed) + '×'; }
          if (s.repeatMode !== undefined) { repeatMode = s.repeatMode; }
          if (s.stopAfter && stopSel) stopSel.value = s.stopAfter;
          if (s.rIdx !== null && s.rIdx !== undefined) {
            recSel.value = s.rIdx; rIdx = parseInt(s.rIdx); buildMoshafList();
            if (s.mIdx !== null && s.mIdx !== undefined) {
              moshSel.value = s.mIdx; mIdx = parseInt(s.mIdx); buildSurahList();
              if (s.sIdx !== null && s.sIdx !== undefined) { surahSel.value = s.sIdx; sIdx = parseInt(s.sIdx); updateStatus(); updateDlLink(); }
            }
          }
          favR = JSON.parse(ls('favR') || 'null'); favM = JSON.parse(ls('favM') || 'null');
          const savedTheme = ls('theme') || 'default'; applyTheme(savedTheme);
        } catch (e) { }
        const t = T[lang]; repBtn.textContent = t.repLabel + t.repModes[repeatMode];
      }

      /* ============ LOCAL STORAGE HELPERS ============ */
      function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
      function lsSave(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
      function clearData() {
        if (confirm(lang === 'ar' ? 'هل تريد مسح جميع بيانات التطبيق؟\n(المفضلة، الإعدادات، الإحصائيات)' : 'Clear all app data? (favorites, settings, stats)')) {
          localStorage.clear(); location.reload();
        }
      }
      function shareApp() {
        const s = sIdx !== null ? surahs[sIdx] : null;
        const rec = rIdx !== null && reciters[rIdx] ? reciters[rIdx].name : '';
        const title = s ? `${s.name} — ${rec}` : (lang === 'ar' ? 'مشغّل القرآن الكريم' : 'Quran Player');
        const url = location.href.split('#')[0] + (s ? `#s${s.n}` : '');
        const text = s ? (lang === 'ar' ? `استمع إلى سورة ${s.name} بصوت ${rec}` : `Listen to Surah ${s.name} by ${rec}`) : '';
        if (navigator.share) {
          navigator.share({ title, text, url }).catch(() => {});
        } else {
          navigator.clipboard?.writeText(url).then(() => {
            alert(lang === 'ar' ? '✅ تم نسخ الرابط!' : '✅ Link copied!');
          });
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
        if (audio.currentTime < (audio.duration || 0) - 0.2) {
          isPlaying = false; playBtn.textContent = T[lang].play;
          npCard.classList.remove('playing'); document.title = 'مشغل القرآن الكريم';
          if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
        }
      });
      audio.addEventListener('ended', () => {
        npCard.classList.remove('playing'); document.title = 'مشغل القرآن الكريم';
        try { recStat(sIdx, audio.duration || 0); } catch (e) { }
        try { if (surahs[sIdx]) notify(T[lang].notifFin(surahs[sIdx].name), ''); } catch (e) { }
        if (repeatMode === 4) { playAudio(); return; }
        if (repeatMode > 0 && repeatCount < repeatMode) { repeatCount++; playAudio(); return; }
        repeatCount = 0;
        const sv = stopSel?.value || 'none';
        if (sv === 'endSurah') { isPlaying = false; playBtn.textContent = T[lang].play; return; }
        // تنفيذ الخيار المحدد في قائمة "التالي"
        if (autoNext) {
          // إذا وصلنا لآخر سورة (114) ولا يوجد إيقاف مطلوب → القارئ التالي
          const isLastSurah = sIdx !== null && surahs[sIdx]?.n === 114;
          if (isLastSurah && nextMode === 0 && hasNextRec()) {
            setTimeout(() => {
              if (nextReciter()) { playAudio(); onSurahChangeForText(); }
              else { isPlaying = false; playBtn.textContent = T[lang].play; }
            }, 400);
          } else {
            setTimeout(() => { executeNextMode(); }, 400);
          }
        } else { isPlaying = false; playBtn.textContent = T[lang].play; }
      });
      audio.addEventListener('error', () => { statusDiv.textContent = lang === 'ar' ? '⚠️ خطأ في تحميل الملف الصوتي.' : '⚠️ Audio load error.'; isPlaying = false; playBtn.textContent = T[lang].play; });
      // مؤشر التحميل: يظهر عند انتظار البيانات، ويُخفى عند بدء التشغيل أو التوقف
      audio.addEventListener('waiting', () => { if (isPlaying) playBtn.classList.add('buffering'); });
      ['playing', 'canplay', 'pause', 'ended', 'error'].forEach(ev =>
        audio.addEventListener(ev, () => playBtn.classList.remove('buffering')));

      /* ============ SELECT EVENTS ============ */
      recSel.onchange = function () { rIdx = this.value === '' ? null : parseInt(this.value); buildMoshafList(); saveSettings(); updateFavIcon(); renderNP(); onSurahChangeForText(); };
      moshSel.onchange = function () { mIdx = this.value === '' ? null : parseInt(this.value); buildSurahList(); saveSettings(); updateFavIcon(); renderNP(); onSurahChangeForText(); };
      surahSel.onchange = function () { sIdx = this.value === '' ? null : parseInt(this.value); updateStatus(); updateDlLink(); saveSettings(); renderNP(); onSurahChangeForText(); };
      surahSearch.oninput = () => buildSurahList(surahSearch.value);
      recSearch.oninput = () => buildReciterList(recSearch.value);
      volCtrl.oninput = function () { audio.volume = this.value / 100; volVal.textContent = Math.round(this.value); isMuted = this.value == 0; muteBtn.textContent = isMuted ? '🔇' : '🔊'; saveSettings(); };
      speedCtrl.oninput = function () {
        const spd = parseFloat(this.value);
        audio.playbackRate = spd;
        speedVal.textContent = spd + '×';
        saveSettings(); // حفظ فوري في localStorage
      };
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

      // auto-scroll indicator visibility
      audio.addEventListener('play', () => { if (qpAutoScroll && ayahsData.length) qpAutoScroll.style.display = 'flex'; });
      audio.addEventListener('pause', () => { /* keep visible */ });

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
      const surahCache = {};      // cache النص العثماني
      const surahPrintCache = {}; // cache النص المطبوع
      const infoCache = {};       // cache المعلومات
      let ayahsData = [];
      let loadedSurahNum = null;
      let qpFontSize = 26;
      let scrollLock = false;
      let lastHighlightTime = 0;
      // إعداد: تمرير النص تلقائياً مع التلاوة (يمكن تغييره من الإعدادات)
      let autoScrollText = (localStorage.getItem('autoScrollText') ?? '1') === '1';
      let currentScript = localStorage.getItem('defaultScript') || 'uthmani'; // 'uthmani' | 'print' | 'simple'
      let currentLineMode = 'inline';  // 'block' | 'inline'
      let currentQpTab = 'text';    // 'text' | 'info' | 'mushaf'

      /* ── تبويبات اللوحة ── */
      function switchQpTab(tab) {
        currentQpTab = tab;
        document.querySelectorAll('.qp-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.qp-pane').forEach(p => p.classList.remove('active'));
        const tabEl = $('qpTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
        const paneEl = $('qpPane' + tab.charAt(0).toUpperCase() + tab.slice(1));
        if (tabEl) tabEl.classList.add('active');
        if (paneEl) paneEl.classList.add('active');
        // تحميل صور المصحف عند فتح تبويب المصحف
        if (tab === 'mushaf' && loadedSurahNum) loadMushafView(loadedSurahNum);
      }

      /* ── خيارات النص ── */
      function setScript(mode) {
        currentScript = mode;
        document.querySelectorAll('#optUthmani,#optPrint,#optSimple').forEach(b => b.classList.remove('active'));
        const ids = { uthmani: 'optUthmani', print: 'optPrint', simple: 'optSimple' };
        $(ids[mode])?.classList.add('active');
        if (loadedSurahNum) reRenderText();
      }
      function setLineMode(mode) {
        currentLineMode = mode;
        document.querySelectorAll('#optBlock,#optInline').forEach(b => b.classList.remove('active'));
        $(mode === 'block' ? 'optBlock' : 'optInline')?.classList.add('active');
        if (loadedSurahNum) reRenderText();
      }
      function reRenderText() {
        if (!ayahsData.length) return;
        const bodyEl = $('qpBody'); if (!bodyEl) return;
        const wrap = bodyEl.querySelector('#qpTextWrap');
        if (wrap) wrap.remove();
        const div = document.createElement('div');
        div.id = 'qpTextWrap';
        div.innerHTML = renderAyahsHTML(loadedSurahNum, ayahsData, null, []);
        bodyEl.prepend(div);
        wireAyahClicks(loadedSurahNum, ayahsData);
        setTimeout(() => highlightCurrentPosition(), 200);
      }

      /* ── تبويب الجوال ── */
      const mobileTabBar = document.getElementById('mobileTabBar');
      function setMobileTab(tab) {
        const isMobile = window.innerWidth <= 767;
        if (!isMobile) return;
        if (tab === 'text') {
          appLayout.classList.remove('text-closed');
          appLayout.classList.add('text-open');
          textViewBtn.classList.add('active');
          if (sIdx !== null) loadQuranText(surahs[sIdx].n);
          $('mtabPlayer')?.classList.remove('active');
          $('mtabText')?.classList.add('active');
        } else {
          appLayout.classList.remove('text-open');
          appLayout.classList.add('text-closed');
          textViewBtn.classList.remove('active');
          $('mtabPlayer')?.classList.add('active');
          $('mtabText')?.classList.remove('active');
        }
      }
      function checkMobileTabBar() {
        if (!mobileTabBar) return;
        mobileTabBar.style.display = window.innerWidth <= 767 ? 'flex' : 'none';
      }
      window.addEventListener('resize', checkMobileTabBar);
      checkMobileTabBar();

      function openTextPanel() {
        textPanelOpen = true;
        appLayout.classList.remove('text-closed');
        appLayout.classList.add('text-open');
        textViewBtn.classList.add('active');
        lastHighlightTime = 0;
        if (mobileTabBar) { $('mtabText')?.classList.add('active'); $('mtabPlayer')?.classList.remove('active'); }
        // افتح على تبويب النص افتراضياً
        switchQpTab('text');
        if (sIdx !== null) loadQuranText(surahs[sIdx].n);
      }

      function closeTextPanel() {
        textPanelOpen = false;
        appLayout.classList.remove('text-open');
        appLayout.classList.add('text-closed');
        textViewBtn.classList.remove('active');
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
          qpMeta.textContent = [recName, typeLabel, ayahCount ? (ayahCount + (lang === 'ar' ? ' آية' : ' verses')) : ''].filter(Boolean).join(' • ');
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
        const ayahs = await fetchSurahText(surahNum).catch(() => []);
        if (ayahs.length) { surahCache[surahNum] = ayahs; ayahsData = ayahs; }

        qpAutoScroll.style.display = ayahs.length ? 'flex' : 'none';

        // رسم النص فوراً
        renderTextPane(surahNum, null, ayahs);

        // ثم المعلومات بشكل غير متزامن
        fetchSurahInfo(surahNum).then(info => {
          if (info) infoCache[surahNum] = info;
          renderInfoPane(surahNum, info);
        }).catch(() => renderInfoPane(surahNum, null));
      }

      /* ── جلب النص ── */
      async function fetchWithProxy(url) {
        try {
          const r = await fetch(url);
          if (r.ok) return await r.json();
        } catch (e) { }
        try {
          const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
          const r2 = await fetch(proxy);
          if (r2.ok) {
            const w = await r2.json();
            return JSON.parse(w.contents || 'null');
          }
        } catch (e2) { }
        return null;
      }

      async function fetchSurahText(n) {
        if (surahCache[n]) return surahCache[n];

        // 1. العثماني من alquran.cloud
        const uthmaniData = await fetchWithProxy(`https://api.alquran.cloud/v1/surah/${n}/quran-uthmani`);
        const uthmaniAyahs = uthmaniData?.data?.ayahs || [];

        // 2. المطبوع (ترجمة/إملائي)
        const printD = await fetchWithProxy(`https://api.alquran.cloud/v1/surah/${n}`);
        const printAyahs = printD?.data?.ayahs || [];

        // 3. إملائي بسيط من quran.com
        const simpleD = await fetchWithProxy(`https://api.quran.com/api/v4/verses/by_chapter/${n}?words=false&per_page=300&fields=text_imlaei_simple`);
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

      /* ── رسم تبويب النص ── */
      function renderTextPane(surahNum, info, ayahs) {
        const bodyEl = $('qpBody'); if (!bodyEl) return;
        let html = ayahs.length ? renderAyahsHTML(surahNum, ayahs, null, []) : `<div style="text-align:center;padding:32px">⚠️ ${lang === 'ar' ? 'تعذّر تحميل النص' : 'Error'}</div>`;
        bodyEl.innerHTML = `<div id="qpTextWrap">${html}</div>`;

        // أزرار حجم الخط
        $('qpFontPlus').onclick = () => { qpFontSize = Math.min(40, qpFontSize + 2); applyFontSize(); };
        $('qpFontMinus').onclick = () => { qpFontSize = Math.max(18, qpFontSize - 2); applyFontSize(); };

        wireAyahClicks(surahNum, ayahs);
        if (ayahs.length) setTimeout(() => highlightCurrentPosition(), 400);
      }

      /* ── رسم تبويب المعلومات ── */
      const SURAH_LOCAL = [['Al-Fatihah', 'The Opening', 5, 1], ['Al-Baqarah', 'The Cow', 87, 1], ['Ali \'Imran', 'Family of Imran', 89, 3], ['An-Nisa', 'The Women', 92, 4], ['Al-Ma\'idah', 'The Table Spread', 112, 6], ['Al-An\'am', 'The Cattle', 55, 7], ['Al-A\'raf', 'The Heights', 39, 8], ['Al-Anfal', 'The Spoils of War', 88, 10], ['At-Tawbah', 'The Repentance', 113, 10], ['Yunus', 'Jonah', 51, 11], ['Hud', 'Hud', 52, 11], ['Yusuf', 'Joseph', 53, 12], ['Ar-Ra\'d', 'The Thunder', 96, 13], ['Ibrahim', 'Abraham', 72, 13], ['Al-Hijr', 'The Rocky Tract', 54, 14], ['An-Nahl', 'The Bee', 70, 14], ['Al-Isra\'', 'The Night Journey', 50, 15], ['Al-Kahf', 'The Cave', 69, 15], ['Maryam', 'Mary', 44, 16], ['Ta-Ha', 'Ta-Ha', 45, 16], ['Al-Anbya\'', 'The Prophets', 73, 17], ['Al-Hajj', 'The Pilgrimage', 103, 17], ['Al-Mu\'minun', 'The Believers', 74, 18], ['An-Nur', 'The Light', 102, 18], ['Al-Furqan', 'The Criterion', 42, 18], ['Ash-Shu\'ara\'', 'The Poets', 47, 19], ['An-Naml', 'The Ant', 48, 19], ['Al-Qasas', 'The Stories', 49, 20], ['Al-\'Ankabut', 'The Spider', 85, 20], ['Ar-Rum', 'The Romans', 84, 21], ['Luqman', 'Luqman', 57, 21], ['As-Sajdah', 'The Prostration', 75, 21], ['Al-Ahzab', 'The Combined Forces', 90, 21], ['Saba\'', 'Sheba', 58, 22], ['Fatir', 'Originator', 43, 22], ['Ya-Sin', 'Ya-Sin', 41, 22], ['As-Saffat', 'Those Ranged in Ranks', 56, 23], ['Sad', 'The Letter Sad', 38, 23], ['Az-Zumar', 'The Troops', 59, 23], ['Ghafir', 'The Forgiver', 60, 24], ['Fussilat', 'Explained in Detail', 61, 24], ['Ash-Shura', 'The Consultation', 62, 25], ['Az-Zukhruf', 'The Ornaments of Gold', 63, 25], ['Ad-Dukhan', 'The Smoke', 64, 25], ['Al-Jathiyah', 'The Kneeling', 65, 25], ['Al-Ahqaf', 'The Wind-Curved Sandhills', 66, 26], ['Muhammad', 'Muhammad', 95, 26], ['Al-Fath', 'The Victory', 111, 26], ['Al-Hujurat', 'The Rooms', 106, 26], ['Qaf', 'The Letter Qaf', 34, 26], ['Adh-Dhariyat', 'The Winnowing Winds', 67, 26], ['At-Tur', 'The Mount', 76, 27], ['An-Najm', 'The Star', 23, 27], ['Al-Qamar', 'The Moon', 37, 27], ['Ar-Rahman', 'The Beneficent', 97, 27], ['Al-Waqi\'ah', 'The Inevitable', 46, 27], ['Al-Hadid', 'The Iron', 94, 27], ['Al-Mujadila', 'The Pleading Woman', 105, 28], ['Al-Hashr', 'The Exile', 101, 28], ['Al-Mumtahanah', 'She that is to be Examined', 91, 28], ['As-Saf', 'The Ranks', 109, 28], ['Al-Jumu\'ah', 'The Congregation', 110, 28], ['Al-Munafiqun', 'The Hypocrites', 104, 28], ['At-Taghabun', 'The Mutual Disillusion', 108, 28], ['At-Talaq', 'The Divorce', 99, 28], ['At-Tahrim', 'The Prohibition', 107, 28], ['Al-Mulk', 'The Sovereignty', 77, 29], ['Al-Qalam', 'The Pen', 2, 29], ['Al-Haqqah', 'The Reality', 78, 29], ['Al-Ma\'arij', 'The Ascending Stairways', 79, 29], ['Nuh', 'Noah', 71, 29], ['Al-Jinn', 'The Jinn', 40, 29], ['Al-Muzzammil', 'The Enshrouded One', 3, 29], ['Al-Muddaththir', 'The Cloaked One', 4, 29], ['Al-Qiyamah', 'The Resurrection', 31, 29], ['Al-Insan', 'The Human', 98, 29], ['Al-Mursalat', 'The Emissaries', 33, 29], ['An-Naba\'', 'The Tidings', 80, 30], ['An-Nazi\'at', 'Those who Drag Forth', 81, 30], ['\'Abasa', 'He Frowned', 24, 30], ['At-Takwir', 'The Overthrowing', 7, 30], ['Al-Infitar', 'The Cleaving', 82, 30], ['Al-Mutaffifin', 'The Defrauding', 86, 30], ['Al-Inshiqaq', 'The Sundering', 83, 30], ['Al-Buruj', 'The Mansions of the Stars', 27, 30], ['At-Tariq', 'The Nightcomer', 36, 30], ['Al-A\'la', 'The Most High', 8, 30], ['Al-Ghashiyah', 'The Overwhelming', 68, 30], ['Al-Fajr', 'The Dawn', 10, 30], ['Al-Balad', 'The City', 35, 30], ['Ash-Shams', 'The Sun', 26, 30], ['Al-Layl', 'The Night', 9, 30], ['Ad-Duhaa', 'The Morning Hours', 11, 30], ['Ash-Sharh', 'The Relief', 12, 30], ['At-Tin', 'The Fig', 28, 30], ['Al-\'Alaq', 'The Clot', 1, 30], ['Al-Qadr', 'The Power', 25, 30], ['Al-Bayyinah', 'The Clear Proof', 100, 30], ['Az-Zalzalah', 'The Earthquake', 93, 30], ['Al-\'Adiyat', 'The Courser', 14, 30], ['Al-Qari\'ah', 'The Calamity', 30, 30], ['At-Takathur', 'Rivalry in World Increase', 16, 30], ['Al-\'Asr', 'The Declining Day', 13, 30], ['Al-Humazah', 'The Traducer', 32, 30], ['Al-Fil', 'The Elephant', 19, 30], ['Quraysh', 'Quraysh', 29, 30], ['Al-Ma\'un', 'The Small Kindnesses', 17, 30], ['Al-Kawthar', 'The Abundance', 15, 30], ['Al-Kafirun', 'The Disbelievers', 18, 30], ['An-Nasr', 'The Divine Support', 114, 30], ['Al-Masad', 'The Palm Fibre', 6, 30], ['Al-Ikhlas', 'The Sincerity', 22, 30], ['Al-Falaq', 'The Daybreak', 20, 30], ['An-Nas', 'The Mankind', 21, 30]];

      function renderInfoPane(surahNum, info) {
        const el = $('qpInfoBody'); if (!el) return;

        // ── البيانات الأساسية للسورة ──
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

        // ── بطاقة المعلومات الرئيسية ──
        const heroHTML = `
          <div class="si-hero">
            <div class="si-arabic">${s ? s.name : '—'}</div>
            <div class="si-latin">${translitName}</div>
            <div class="si-meaning">${meaning ? (lang === 'ar' ? 'المعنى: ' : 'Meaning: ') + meaning : ''}</div>
            <div class="si-pills">
              <span class="si-pill">${lang === 'ar' ? 'سورة رقم' : 'Surah'} ${surahNum}</span>
              ${ayahCount ? `<span class="si-pill">${ayahCount} ${lang === 'ar' ? 'آية' : 'verses'}</span>` : ''}
              ${surahType ? `<span class="si-pill ${surahType.includes('مكية') || surahType.includes('Meccan') ? 'meccan' : 'medinan'}">${surahType}</span>` : ''}
              ${juzNum ? `<span class="si-pill">${lang === 'ar' ? 'الجزء' : 'Juz'} ${juzNum}</span>` : ''}
              ${revOrder ? `<span class="si-pill">${lang === 'ar' ? 'ترتيب النزول' : 'Rev. order'}: ${revOrder}</span>` : ''}
            </div>
          </div>
          <div class="si-stats">
            <div class="si-stat"><div class="si-stat-n">${surahNum}</div><div class="si-stat-l">${lang === 'ar' ? 'ترتيبها' : 'Order'}</div></div>
            <div class="si-stat"><div class="si-stat-n">${ayahCount || '—'}</div><div class="si-stat-l">${lang === 'ar' ? 'آياتها' : 'Verses'}</div></div>
            <div class="si-stat"><div class="si-stat-n">${juzNum || '—'}</div><div class="si-stat-l">${lang === 'ar' ? 'جزءها' : 'Juz'}</div></div>
          </div>`;

        // ── تبويبات المعلومات التفصيلية ──
        const ALL_TABS = [
          { id: 'introduction', ar: '📖 نبذة', en: '📖 Intro', keys: ['introduction'] },
          { id: 'topics', ar: '📌 الموضوعات', en: '📌 Topics', keys: ['topics', 'purposes'] },
          { id: 'revelation', ar: '🌙 النزول', en: '🌙 Revelation', keys: ['revelation', 'descent', 'asmaoha'] },
          { id: 'grace', ar: '✨ الفضل', en: '✨ Grace', keys: ['grace'] },
          { id: 'prophet', ar: '🕌 القصص', en: '🕌 Stories', keys: ['prophet'] },
          { id: 'extra', ar: '📊 معلومات', en: '📊 Info', keys: [] }
        ];

        const extraEntries = Object.entries({
          surah_number: { icon: '🔢', title: lang === 'ar' ? 'ترتيبها المصحفي' : 'Mushaf Order', value: surahNum },
          surah_type: { icon: '📍', title: lang === 'ar' ? 'نوعها' : 'Type', value: surahType },
          ayahs_count: { icon: '📜', title: lang === 'ar' ? 'عدد الآياتها' : 'Verses', value: ayahCount },
          descent: { icon: '🕰️', title: lang === 'ar' ? 'ترتيب نزولها' : 'Revelation Order', value: revOrder },
          words_count: { icon: '💬', title: lang === 'ar' ? 'الكلمات (تقريبي)' : 'Words (approx)', value: info?.words_count?.value || '—' }
        });

        const visibleTabs = info
          ? ALL_TABS.filter(t => t.id === 'extra' || t.keys.some(k => info[k] && String(info[k].value || '').trim()))
          : [ALL_TABS[ALL_TABS.length - 1]]; // فقط تبويب المعلومات الأساسية إذا لم يتوفر إنترنت

        // ── قسم المعلومات الأساسية (يظهر دائماً) ──
        const basicsPane = `
          <div class="info-section" style="padding:12px 16px">
            ${infoRowHTML('🕌', lang === 'ar' ? 'اسمها' : 'Name', s ? s.name : '—')}
            ${translitName ? infoRowHTML('🔤', lang === 'ar' ? 'الاسم بالإنجليزية' : 'English Name', translitName) : ''}
            ${meaning ? infoRowHTML('💡', lang === 'ar' ? 'المعنى' : 'Meaning', meaning) : ''}
            ${infoRowHTML('🔢', lang === 'ar' ? 'ترتيبها المصحفي' : 'Order in Mushaf', String(surahNum))}
            ${ayahCount ? infoRowHTML('📜', lang === 'ar' ? 'عدد آياتها' : 'Number of Verses', String(ayahCount)) : ''}
            ${surahType ? infoRowHTML('📍', lang === 'ar' ? 'نوعها' : 'Type', surahType) : ''}
            ${juzNum ? infoRowHTML('📚', lang === 'ar' ? 'جزءها' : 'Juz', String(juzNum)) : ''}
            ${revOrder ? infoRowHTML('🕰️', lang === 'ar' ? 'ترتيب نزولها' : 'Revelation Order', String(revOrder)) : ''}
          </div>`;

        // ── شريط التبويبات ──
        let tabBar = `<div class="info-tabs" id="infoSubTabs" style="padding:0 6px;flex-shrink:0">
          <button class="info-tab-btn active" onclick="switchIT('basics')">${lang === 'ar' ? '📋 أساسيات' : '📋 Basics'}</button>`;

        visibleTabs.forEach(t => {
          tabBar += `<button class="info-tab-btn" onclick="switchIT('${t.id}')">${lang === 'ar' ? t.ar : t.en}</button>`;
        });
        tabBar += '</div>';

        // ── رسم الصفحات ──
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
          if (t.id === 'extra') {
            extraEntries.forEach(([k, v]) => { rows += infoRowHTML(v.icon || '📄', v.title || k, v.value); });
          } else {
            t.keys.forEach(k => {
              const f = info?.[k]; if (!f || !String(f.value || '').trim()) return;
              rows += infoRowHTML(f.icon || infoIcon(k), f.title || (lang === 'ar' ? infoTitleAr(k) : k), f.value);
            });
          }
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
        const hasAr = /[\u0600-\u06ff]/.test(val);
        return `<div class="info-row">
    <div class="info-row-title">${icon} ${title}</div>
    <div class="info-row-val${isLong && hasAr ? ' arabic' : ''}">${val}</div>
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
      /* للتوافق مع الكود القديم */
      function switchInfoTab(id) { switchIT(id); }
      function switchInfoTab2(id) { switchIT(id); }






      /* ── بناء HTML للآيات ── */
      const JUZ_STARTS = [
        [1, 1], [2, 142], [2, 253], [3, 93], [4, 24], [4, 148], [5, 82], [6, 111], [7, 88], [8, 41],
        [9, 93], [10, 110], [11, 6], [11, 97], [12, 52], [13, 18], [14, 53], [15, 92], [17, 1], [18, 75],
        [19, 97], [21, 1], [22, 56], [23, 106], [25, 21], [26, 111], [27, 56], [28, 51], [29, 46], [30, 1]
      ];

      function renderAyahsHTML(surahNum, ayahs, juz_n, sajdahs) {
        const juzInSurah = JUZ_STARTS.filter(([sn]) => sn === surahNum);
        const sajdahNums = new Set((sajdahs || []).map(sj =>
          sj?.verse_key ? parseInt(sj.verse_key.split(':')[1]) : (typeof sj === 'number' ? sj : null)
        ).filter(Boolean));
        const isInline  = currentLineMode === 'inline';
        const isUthmani = currentScript === 'uthmani';
        const isSimple  = currentScript === 'simple';
        // دالة اختيار النص
        const pickTxt = ay => isUthmani ? ay.text : (isSimple ? (ay.textSimple || ay.textPrint) : ay.textPrint);

        // بسملة
        let html = '';
        if (surahNum !== 9) {
          const firstText = ayahs[0]?.text || '';
          if (!normalizeAr(firstText).startsWith(normalizeAr('بسم')))
            html += `<div class="si-basmalah">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>`;
        }

        if (isInline) {
          // وضع التدفق: كل الآيات في فقرة واحدة
          html += `<div class="qp-text-wrap inline-mode" id="qpInlineWrap">`;
          ayahs.forEach(ay => {
            const juzEntry = juzInSurah.find(([, an]) => an === ay.numberInSurah);
            if (juzEntry) {
              const jNum = JUZ_STARTS.indexOf(juzEntry) + 1;
              html += `<span class="juz-marker" style="display:inline-block;margin:0 4px">[${lang === 'ar' ? 'الجزء' : 'Juz'} ${jNum}]</span>`;
            }
            const txt = pickTxt(ay);
            const hasSajdah = sajdahNums.has(ay.numberInSurah);
            html += `<span class="si-ayah" data-ayah="${ay.numberInSurah}"
        style="font-size:${qpFontSize}px">${txt}&nbsp;<span class="si-ayah-marker">${ay.numberInSurah}</span>${hasSajdah ? '🙏' : ''}</span> `;
          });
          html += `</div>`;
        } else {
          // وضع الكتلة: كل آية بسطر مستقل
          html += `<div class="qp-text-wrap block-mode">`;
          ayahs.forEach(ay => {
            const juzEntry = juzInSurah.find(([, an]) => an === ay.numberInSurah);
            if (juzEntry) {
              const jNum = JUZ_STARTS.indexOf(juzEntry) + 1;
              html += `<div class="juz-marker">${lang === 'ar' ? `— الجزء ${jNum} —` : `— Juz' ${jNum} —`}</div>`;
            }
            const txt = pickTxt(ay);
            const hasSajdah = sajdahNums.has(ay.numberInSurah);
            html += `<div class="si-ayah" data-ayah="${ay.numberInSurah}">
        <div class="si-ayah-text" dir="rtl" style="font-size:${qpFontSize}px">
          ${txt}&nbsp;<span class="si-ayah-marker">${ay.numberInSurah}</span>${hasSajdah ? '&nbsp;<span title="آية سجدة">🙏</span>' : ''}
        </div>
      </div>`;
          });
          html += `</div>`;
        }
        return html;
      }

      /* ── ربط أحداث النقر على الآيات ── */
      function wireAyahClicks(surahNum, ayahs) {
        const container = $('qpBody');
        if (!container) return;
        container.querySelectorAll('.si-ayah').forEach(row => {
          row.addEventListener('click', () => {
            const ayahN = parseInt(row.dataset.ayah);
            if (audio.duration && ayahs.length) {
              audio.currentTime = (ayahN - 1) / ayahs.length * audio.duration;
              if (!isPlaying) playAudio();
            }
          });
        });
      }

      /* ── تمييز وتمرير الآية الحالية أثناء التلاوة ── */
      function highlightCurrentPosition() {
        if (!audio.duration || !ayahsData.length) return;
        const pct = audio.currentTime / audio.duration;
        const approxAyah = Math.min(Math.floor(pct * ayahsData.length) + 1, ayahsData.length);
        const container = $('qpBody');
        if (!container) return;
        const rows = container.querySelectorAll('.si-ayah');
        let targetRow = null;
        rows.forEach(r => {
          const isTarget = parseInt(r.dataset.ayah) === approxAyah;
          r.classList.toggle('sync-active', isTarget);
          if (isTarget) targetRow = r;
        });
        if (!targetRow || scrollLock || !autoScrollText) return;
        scrollLock = true;
        // عنصر التمرير الفعلي هو qpBody (flex:1; overflow-y:auto) وليس اللوحة
        const scrollEl = $('qpBody');
        if (scrollEl) {
          const elRect = targetRow.getBoundingClientRect();
          const cRect = scrollEl.getBoundingClientRect();
          const newTop = scrollEl.scrollTop + (elRect.top - cRect.top)
            - scrollEl.clientHeight / 2 + targetRow.offsetHeight / 2;
          scrollEl.scrollTo({ top: Math.max(0, newTop), behavior: 'smooth' });
        }
        setTimeout(() => { scrollLock = false; }, 900);
      }

      /* ── seeked: تمرير فوري ── */
      audio.addEventListener('seeked', () => {
        if (textPanelOpen && ayahsData.length) { lastHighlightTime = audio.currentTime; highlightCurrentPosition(); }
      });

      /* ── تطبيق حجم الخط ── */
      function applyFontSize() {
        const container = $('qpBody');
        if (!container) return;
        container.querySelectorAll('.si-ayah-text,.si-ayah[data-ayah]').forEach(el => {
          el.style.fontSize = qpFontSize + 'px';
        });
      }

      /* ── هيكل تحميل skeleton ── */
      function renderSkeleton() {
        return `<div class="si-skeleton">
    ${[1, 2, 3, 4, 5].map(i => `<div class="sk-line" style="width:${95 - i * 8}%;height:${i === 1 ? 20 : 12}px"></div>`).join('')}
  </div>`;
      }

      /* ── بحث بدون حركات ── */
      const qpSearchEl = $('qpSearch');
      if (qpSearchEl) qpSearchEl.addEventListener('input', function () {
        const q = normalizeAr(this.value.trim());
        const container = $('qpBody');
        if (!container) return;
        container.querySelectorAll('.si-ayah').forEach(row => {
          const txt = normalizeAr(row.textContent || '');
          row.style.display = (!q || txt.includes(q)) ? '' : 'none';
        });
        if (!q) highlightCurrentPosition();
      });

      function normalizeAr(txt) {
        return (txt || '')
          .replace(/[ؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ۭـ]/g, '')
          .replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
          .replace(/\s+/g, ' ').trim();
      }

      // أحداث لوحة القرآن
      if (textViewBtn) textViewBtn.onclick = toggleTextPanel;
      if (qpClose) qpClose.onclick = closeTextPanel;

      // عند تغيير السورة، تحديث اللوحة
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
        const icons   = ['⏭', '🎲', '🎙️', '✨'];
        const txtLbls = ['السورة التالية', 'سورة عشوائية', 'قارئ عشوائي', 'كل عشوائي'];
        NEXT_IDS.forEach((id, i) => {
          const el = $(id); if (el) el.classList.toggle('next-opt-active', i === nextMode);
          const ck = $(NEXT_CHECKS[i]); if (ck) ck.textContent = i === nextMode ? '✓' : '';
          const fck = document.getElementById('fb_ck' + i); if (fck) fck.textContent = i === nextMode ? '✓' : '';
          const fopt = document.getElementById(['fb_nextSameSurah', 'fb_nextRandSurah', 'fb_nextRandRec', 'fb_nextRandAll'][i]);
          if (fopt) fopt.classList.toggle('next-opt-active', i === nextMode);
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

      // زر التنفيذ: يشغّل الخيار الحاليمباشرة
      $('nextActionBtn')?.addEventListener('click', () => executeNextMode(true));
      // زر الإعداد: يفتح القائمة
      if (nextMenuBtn) nextMenuBtn.onclick = (e) => {
        e.stopPropagation();
        nextDropdown.classList.toggle('open');
      };

      // خيار 0: السورة التالية
      $('nextSameSurah')?.addEventListener('click', () => selectNextMode(0));
      // خيار 1: سورة عشوائية (نفس القارئ)
      $('nextRandSurah')?.addEventListener('click', () => selectNextMode(1));
      // خيار 2: قارئ عشوائي (نفس السورة)
      $('nextRandReciter')?.addEventListener('click', () => selectNextMode(2));
      // خيار 3: قارئ وسورة عشوائية
      $('nextRandAll')?.addEventListener('click', () => selectNextMode(3));

      // تطبيق الخيار المحفوظ عند التحميل
      applyNextModeUI();

      /* دالة تنفيذ الخيار المحدد — تُستدعى من زر التالي اليدوي ومن ended */
      function executeNextMode(manual = false) {
        switch (nextMode) {
          case 0: // السورة التالية (نفس القارئ)
            if (goNext()) { playAudio(); onSurahChangeForText(); saveSettings(); }
            else if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; }
            break;

          case 1: // سورة عشوائية (نفس القارئ) — مع مراعاة المدى
            if (rIdx === null || mIdx === null) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
            {
              const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
              if (!opts.length) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
              let ro = getRandomSurahInRange(opts);
              if (opts.length > 1) {
                let tries = 0;
                while (parseInt(ro.value) === sIdx && tries < 10) { ro = getRandomSurahInRange(opts); tries++; }
              }
              surahSel.value = ro.value; sIdx = parseInt(ro.value);
              updateStatus(); updateDlLink(); saveSettings(); playAudio(); onSurahChangeForText();
            }
            break;

          case 2: // قارئ عشوائي (نفس السورة)
            {
              const targetN = surahs[sIdx]?.n;
              if (!targetN) { if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; } break; }
              const eligible = [];
              reciters.forEach((r, ri) => {
                r.moshaf.forEach((m, mi) => {
                  if (m.surah_list.split(',').map(Number).includes(targetN)) {
                    // تجنب نفس القارئ/المصحف الحالي
                    if (!(ri === rIdx && mi === mIdx)) eligible.push({ ri, mi });
                  }
                });
              });
              if (!eligible.length) {
                // لا يوجد قارئ آخر — انتقل للسورة التالية كبديل
                if (goNext()) { playAudio(); onSurahChangeForText(); saveSettings(); }
                else if (!manual) { isPlaying = false; playBtn.textContent = T[lang].play; }
                break;
              }
              const pick = eligible[Math.floor(Math.random() * eligible.length)];
              recSel.value = pick.ri; rIdx = pick.ri; buildMoshafList();
              moshSel.value = pick.mi; mIdx = pick.mi; buildSurahList();
              // إيجاد index السورة في القائمة الجديدة
              const newSurahOpt = Array.from(surahSel.options).find(o => {
                const idx = parseInt(o.value); return idx >= 0 && surahs[idx]?.n === targetN;
              });
              if (newSurahOpt) { surahSel.value = newSurahOpt.value; sIdx = parseInt(newSurahOpt.value); }
              updateStatus(); updateDlLink(); saveSettings(); updateFavIcon(); playAudio(); onSurahChangeForText();
            }
            break;

          case 3: // قارئ وسورة عشوائية
            randRecBtn.click();
            break;
        }
      }

      // تحديث تسميات القائمة عند تغيير اللغة
      function updateNextMenuLabels() {
        const ar = lang === 'ar';
        if ($('nextSameSurahLbl')) $('nextSameSurahLbl').textContent = ar ? 'السورة التالية (نفس القارئ)' : 'Next Surah (same reciter)';
        if ($('nextRandSurahLbl')) $('nextRandSurahLbl').textContent = ar ? 'سورة عشوائية (نفس القارئ)' : 'Random Surah (same reciter)';
        if ($('nextRandReciterLbl')) $('nextRandReciterLbl').textContent = ar ? 'قارئ عشوائي (نفس السورة)' : 'Random Reciter (same surah)';
        if ($('nextRandAllLbl')) $('nextRandAllLbl').textContent = ar ? 'قارئ وسورة عشوائية' : 'Random Reciter & Surah';
        const labels = ar ? ['⏭ التالي ▾', '🎲 التالي ▾', '🎙️ التالي ▾', '✨ التالي ▾'] :
          ['⏭ Next ▾', '🎲 Next ▾', '🎙️ Next ▾', '✨ Next ▾'];
        if (nextMenuBtn) nextMenuBtn.textContent = labels[nextMode];
      }

      // إضافة سور اللوحة بعد تحميل القرآن
      function renderPanelAllSurahs(surahNum) {
        if (rIdx === null || mIdx === null) return '';
        const m = reciters[rIdx].moshaf[mIdx];
        const nums = m.surah_list.split(',').map(Number);
        let html = `<div style="padding:10px 16px 4px;font-size:12px;font-weight:800;color:var(--section-h)">
    📚 ${lang === 'ar' ? `جميع سور ${reciters[rIdx].name} (${nums.length})` : `All surahs by ${reciters[rIdx].name} (${nums.length})`}
  </div>
  <div class="all-dl-grid">`;
        nums.forEach(n => {
          const s = surahs.find(x => x.n === n); if (!s) return;
          const si2 = surahs.indexOf(s);
          const url = m.server + String(n).padStart(3, '0') + '.mp3';
          const isActive = n === surahNum;
          html += `<div class="all-dl-card${isActive ? ' active-s' : ''}"
      data-si="${si2}" title="${s.name}">
      <div class="all-dl-num">${n}</div>
      <div class="all-dl-name">${s.name}</div>
    </div>`;
        });
        html += '</div>';
        return html;
      }

      // ربط نقر بطاقات السور في اللوحة
      function wireAllSurahCards() {
        qpBody.querySelectorAll('.all-dl-card').forEach(card => {
          card.addEventListener('click', () => {
            const si2 = parseInt(card.dataset.si);
            if (isNaN(si2)) return;
            surahSel.value = si2; sIdx = si2;
            updateStatus(); updateDlLink(); saveSettings(); playAudio();
            onSurahChangeForText();
          });
        });
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
          urlFn: p => `https://raw.githubusercontent.com/QuranHub/quran-pages-images/refs/heads/main/easyquran.com/hafs-tajweed/${p}.jpg`
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
      alt="صفحة ${pageNum}"
      style="min-height:200px;object-fit:contain">
  </div>`;

        if (label) {
          const pane = mushafCurrentPageIdx + 1;
          const total = mushafSurahPages.length;
          const surahN = loadedSurahNum || '?';
          label.textContent = `${lang === 'ar' ? 'صفحة' : 'Page'} ${pageNum} (${pane}/${total})`;
        }
        if (prevBtn) prevBtn.disabled = mushafCurrentPageIdx === 0;
        if (nextBtn) nextBtn.disabled = mushafCurrentPageIdx === mushafSurahPages.length - 1;
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
        const secPerPage = audio.duration / mushafSurahPages.length;
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
      cdStartBtn.onclick = startCd; expBtn.onclick = exportStats;
      stopCancelBtn.onclick = cancelStopTimer;

      themeBtn.onclick = toggleDark;
      paletteBtn.onclick = () => palettePanel.classList.toggle('open');
      document.querySelectorAll('.t-dot').forEach(d => d.onclick = () => applyTheme(d.dataset.t));
      langBtn.onclick = () => { toggleLang(); updateNextMenuLabels(); };
      shareBtn.onclick = openShare;
      infoBtn.onclick = () => shortcutsPanel.classList.toggle('open');

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
            surahSel.value = ro.value; sIdx = parseInt(ro.value);
            updateStatus(); updateDlLink(); saveSettings(); updateFavIcon(); playAudio(); onSurahChangeForText();
          }
        }
      };
      randSurahBtn.onclick = () => {
        if (rIdx === null || mIdx === null) { alert(T[lang].statusDef); return; }
        const opts = Array.from(surahSel.options).filter((_, i) => i > 0);
        if (opts.length) {
          const ro = getRandomSurahInRange(opts);
          surahSel.value = ro.value; sIdx = parseInt(ro.value);
          updateStatus(); updateDlLink(); saveSettings(); playAudio(); onSurahChangeForText();
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
        else if (e.key === '+' || e.key === '=') { e.preventDefault(); let v = Math.min(100, parseInt(volCtrl.value) + 10); volCtrl.value = v; audio.volume = v / 100; volVal.textContent = v; saveSettings(); }
        else if (e.key === '-' || e.key === '_') { e.preventDefault(); let v = Math.max(0, parseInt(volCtrl.value) - 10); volCtrl.value = v; audio.volume = v / 100; volVal.textContent = v; saveSettings(); }
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
        if (sIdx !== null && surahs[sIdx]) fbSurah.textContent = surahs[sIdx].name;
        if (rIdx !== null && reciters[rIdx]) fbReciter.textContent = reciters[rIdx].name;
        if (fbPlay) fbPlay.textContent = isPlaying ? '⏸' : '▶';
        if (fbMute) fbMute.textContent = isMuted ? '🔇' : '🔊';
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

      setInterval(() => { if (stopEndTime) updateFloatingBar(); }, 1000);

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
      // applyNextModeUI already defined and called above

      // أزرار العشوائي في الشريط العائم
      const fbRandRec = document.getElementById('fbRandRec');
      const fbRandSurah = document.getElementById('fbRandSurah');
      if (fbRandRec) fbRandRec.onclick = () => randRecBtn.click();
      if (fbRandSurah) fbRandSurah.onclick = () => randSurahBtn.click();

      if (fbMute) fbMute.onclick = () => { toggleMute(); updateFloatingBar(); };
      if (floatVol) floatVol.oninput = function () {
        audio.volume = this.value / 100;
        volCtrl.value = this.value;
        volVal.textContent = Math.round(this.value);
        isMuted = this.value == 0;
        muteBtn.textContent = isMuted ? '🔇' : '🔊';
        if (fbMute) fbMute.textContent = isMuted ? '🔇' : '🔊';
        saveSettings();
      };
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

      audio.addEventListener('play', () => updateFloatingBar());
      audio.addEventListener('pause', () => updateFloatingBar());
      audio.addEventListener('ended', () => updateFloatingBar());

      /* ============ NEXT ACTION BTN ============ */
      $('nextActionBtn')?.addEventListener('click', () => executeNextMode(true));

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

        // Swipe على لوحة القرآن: swipe لأسفل يغلق اللوحة
        if (panel) {
          panel.addEventListener('touchstart', e => {
            tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY;
          }, { passive: true });
          panel.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - tx0;
            const dy = e.changedTouches[0].clientY - ty0;
            if (Math.abs(dy) > 60 && dy > 0 && Math.abs(dx) < 50) closeTextPanel();
          }, { passive: true });
        }

        // Swipe على المشغل: يسار = تالي، يمين = سابق
        if (playerEl) {
          let px0 = 0, py0 = 0;
          playerEl.addEventListener('touchstart', e => {
            px0 = e.touches[0].clientX; py0 = e.touches[0].clientY;
          }, { passive: true });
          playerEl.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - px0;
            const dy = e.changedTouches[0].clientY - py0;
            if (Math.abs(dx) > 60 && Math.abs(dy) < 40) {
              if (dx < 0) executeNextMode(true);            // swipe يسار = التالي
              else if (goPrev()) { playAudio(); onSurahChangeForText(); saveSettings(); } // swipe يمين = السابق
            }
          }, { passive: true });

          // Double tap = تشغيل/إيقاف
          playerEl.addEventListener('touchend', e => {
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
              if (match) r.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            return;
          }

          // بحث نصي بدون تشكيل
          const q = normalizeAr(raw);
          rows.forEach(r => {
            const txt = normalizeAr(r.textContent || '');
            const match = txt.includes(q);
            r.style.display = match ? '' : 'none';
            r.style.outline = '';
          });
        });
      })();

      /* ============ URL SHORTCUTS ============ */
      if (location.hash === '#random') setTimeout(() => randRecBtn.click(), 2500);
      if (location.hash === '#resume') setTimeout(() => resumeLast(), 2500);

      /* ============ SETTINGS PANEL ============ */
      const settingsOverlay = $('settingsOverlay');
      const SET_LABELS = {
        ar: {
          title: '⚙️ الإعدادات', appr: '🎨 المظهر واللغة', theme: 'السمة', langL: 'اللغة',
          text: '📜 نص السورة', script: 'الرسم الافتراضي', autoS: 'تمرير النص مع التلاوة',
          mushaf: '📖 المصحف المصور', mushafSrc: 'المصدر الافتراضي',
          play: '🎵 التشغيل', speed: 'سرعة التشغيل', vol: 'مستوى الصوت', rep: 'التكرار', stop: 'إيقاف تلقائي بعد',
          misc: '🔔 الإشعارات والبيانات', notif: 'تنبيه عند انتهاء السورة / المؤقت', clear: '🗑️ مسح جميع البيانات',
          scripts: ['🕌 رسم عثماني', '📝 نص مطبوع', '✏️ نص عادي'],
          reps: ['بدون تكرار', 'مرة واحدة', 'مرتان', 'ثلاث مرات', '∞ لا نهائي']
        },
        en: {
          title: '⚙️ Settings', appr: '🎨 Appearance & Language', theme: 'Theme', langL: 'Language',
          text: '📜 Surah Text', script: 'Default script', autoS: 'Auto-scroll text with audio',
          mushaf: '📖 Mushaf Images', mushafSrc: 'Default source',
          play: '🎵 Playback', speed: 'Playback speed', vol: 'Volume', rep: 'Repeat', stop: 'Auto-stop after',
          misc: '🔔 Notifications & Data', notif: 'Alert when surah / timer ends', clear: '🗑️ Clear all data',
          scripts: ['🕌 Uthmani', '📝 Print', '✏️ Plain'],
          reps: ['No repeat', 'Once', 'Twice', '3 times', '∞ Infinite']
        }
      };

      function fillSettingsLabels() {
        const L = SET_LABELS[lang];
        $('settingsTitle').textContent = L.title;
        $('setApprTitle').textContent = L.appr; $('setThemeLbl').textContent = L.theme; $('setLangLbl').textContent = L.langL;
        $('setTextTitle').textContent = L.text; $('setScriptLbl').textContent = L.script; $('setAutoScrollLbl').textContent = L.autoS;
        $('setMushafTitle').textContent = L.mushaf; $('setMushafLbl').textContent = L.mushafSrc;
        $('setPlayTitle').textContent = L.play; $('setSpeedLbl').textContent = L.speed; $('setVolLbl').textContent = L.vol;
        $('setRepeatLbl').textContent = L.rep; $('setStopLbl').textContent = L.stop;
        $('setMiscTitle').textContent = L.misc; $('setNotifLbl').textContent = L.notif; $('setClearData').textContent = L.clear;
        // خيارات الرسم
        const ss = $('setScriptSel');
        if (ss) Array.from(ss.options).forEach((o, i) => o.textContent = L.scripts[i]);
        // خيارات التكرار
        const rs = $('setRepeat');
        if (rs) Array.from(rs.options).forEach((o, i) => o.textContent = L.reps[i]);
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
        document.querySelectorAll('.set-theme-dot').forEach(d => d.classList.toggle('active', d.dataset.t === theme));
        // اللغة
        $('setLangSeg').querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        // الرسم
        $('setScriptSel').value = currentScript;
        // التمرير التلقائي
        $('setAutoScroll').checked = autoScrollText;
        // المصحف
        fillMushafSourceSelect();
        // السرعة
        const spd = parseFloat(speedCtrl.value) || 1;
        $('setSpeed').value = spd; $('setSpeedVal').textContent = spd + '×';
        // الصوت
        const v = parseInt(volCtrl.value) || 0;
        $('setVol').value = v; $('setVolVal').textContent = v;
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
        d.onclick = () => { applyTheme(d.dataset.t); syncSettingsControls(); };
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
      // مصدر المصحف الافتراضي
      $('setMushafSel').onchange = function () {
        mushafSourceIdx = parseInt(this.value) || 0;
        localStorage.setItem('mushafSourceV2', String(mushafSourceIdx));
        if (typeof buildMushafSourceTabs === 'function') buildMushafSourceTabs();
        if (mushafSurahPages.length) showMushafPage(mushafCurrentPageIdx);
      };
      // السرعة
      $('setSpeed').oninput = function () {
        const spd = parseFloat(this.value);
        speedCtrl.value = spd; audio.playbackRate = spd; speedVal.textContent = spd + '×';
        $('setSpeedVal').textContent = spd + '×'; saveSettings();
      };
      // الصوت
      $('setVol').oninput = function () {
        const v = parseInt(this.value);
        volCtrl.value = v; audio.volume = v / 100; volVal.textContent = v;
        if (typeof floatVol !== 'undefined' && floatVol) floatVol.value = v;
        isMuted = v === 0; muteBtn.textContent = isMuted ? '🔇' : '🔊';
        $('setVolVal').textContent = v; saveSettings();
      };
      // التكرار
      $('setRepeat').onchange = function () {
        repeatMode = parseInt(this.value) || 0; repeatCount = 0;
        const t = T[lang]; repBtn.textContent = t.repLabel + t.repModes[repeatMode];
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
