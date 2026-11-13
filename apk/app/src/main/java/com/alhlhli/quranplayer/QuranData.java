package com.alhlhli.quranplayer;

import android.content.Context;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class QuranData {

    public static class SurahMeta {
        public final int number;
        public final String nameAr;
        public final String nameEn;
        public final String meaningEn;
        public final int ayahCount;
        public final boolean isMeccan;
        public final int revOrder;
        public final int juz;
        public final int startPage;

        public SurahMeta(int number, String nameAr, String nameEn, String meaningEn,
                         int ayahCount, boolean isMeccan, int revOrder, int juz, int startPage) {
            this.number = number;
            this.nameAr = nameAr;
            this.nameEn = nameEn;
            this.meaningEn = meaningEn;
            this.ayahCount = ayahCount;
            this.isMeccan = isMeccan;
            this.revOrder = revOrder;
            this.juz = juz;
            this.startPage = startPage;
        }

        public String getTypeLabel(boolean ar) {
            if (ar) return isMeccan ? "🕋 مكية" : "🕌 مدنية";
            return isMeccan ? "🕋 Meccan" : "🕌 Medinan";
        }
    }

    public static class MoshafItem {
        public final String id;
        public final String name;
        public final String server;
        public final String surahList;
        public final boolean isPrecision;
        public final int precisionQid;

        public MoshafItem(String id, String name, String server, String surahList, boolean isPrecision, int precisionQid) {
            this.id = id;
            this.name = name;
            this.server = server;
            this.surahList = surahList;
            this.isPrecision = isPrecision;
            this.precisionQid = precisionQid;
        }

        public List<Integer> getAvailableSurahs() {
            List<Integer> list = new ArrayList<>();
            if (surahList == null || surahList.isEmpty()) return list;
            for (String s : surahList.split(",")) {
                try {
                    int n = Integer.parseInt(s.trim());
                    if (n >= 1 && n <= 114) list.add(n);
                } catch (Exception ignored) {}
            }
            return list;
        }
    }

    public static class ReciterItem {
        public final String id;
        public final String name;
        public final String cleanName;
        public final boolean isPrecision;
        public final int precisionQid;
        public final String audioServer;
        public final List<MoshafItem> moshafs;

        public ReciterItem(String id, String name, String cleanName, boolean isPrecision,
                           int precisionQid, String audioServer, List<MoshafItem> moshafs) {
            this.id = id;
            this.name = name;
            this.cleanName = cleanName;
            this.isPrecision = isPrecision;
            this.precisionQid = precisionQid;
            this.audioServer = audioServer;
            this.moshafs = moshafs;
        }
    }

    public static class AyahTiming {
        public final int surah;
        public final int ayah;
        public final long fromMs;
        public final long toMs;

        public AyahTiming(int surah, int ayah, long fromMs, long toMs) {
            this.surah = surah;
            this.ayah = ayah;
            this.fromMs = fromMs;
            this.toMs = toMs;
        }
    }

    public static class MushafSource {
        public final String id;
        public final String label;
        private final String pattern;
        private final boolean pad3;

        public MushafSource(String id, String label, String pattern, boolean pad3) {
            this.id = id;
            this.label = label;
            this.pattern = pattern;
            this.pad3 = pad3;
        }

        public String getPageUrl(int page) {
            String pStr = pad3 ? String.format(java.util.Locale.US, "%03d", page) : String.valueOf(page);
            return pattern.replace("{p}", pStr);
        }
    }

    public static final MushafSource[] MUSHAF_SOURCES = new MushafSource[]{
        new MushafSource("tajweed", "🎨 تجويد", "https://www.islamicbook.ws/2/{p}.jpg", false),
        new MushafSource("hefzmoyaser", "📗 الحفظ الميسر", "https://newapi.hefzmoyaser.net/storage/mushaf_images/hafs/{p}.webp", false),
        new MushafSource("hefzmoyaser_notes", "📗 الحفظ الميسر مع الملاحظات", "https://newapi.hefzmoyaser.net/storage/mushaf_images/hafs_with_footnotes/{p}.webp", false),
        new MushafSource("aayaat", "Aayaat", "https://cdn.aayaat.net/storage/outputs/image/HafsK_Page{p}.png", false),
        new MushafSource("yousefheiba", "YH Pages", "https://quran.yousefheiba.com/api/quran-pages/{p}.png", true),
        new MushafSource("islamdb", "Islam-DB", "https://quran.islam-db.com/data/pages/quranpages_1024/images/page{p}.png", true),
        new MushafSource("surahquran", "SurahQ", "https://surahquran.com/img/pages-quran/page{p}.png", true),
        new MushafSource("maknon_hafs", "مكنون حفص", "https://raw.githubusercontent.com/maknon/Quran/refs/heads/main/pages-hafs/{p}.png", false),
        new MushafSource("maknon_warsh", "مكنون ورش", "https://raw.githubusercontent.com/maknon/Quran/refs/heads/main/pages-warsh/{p}.png", false),
        new MushafSource("govar", "Govar", "https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/refs/heads/master/{p}.png", false)
    };

    public static final int[] SURAH_START_PAGES = new int[]{
        1, 2, 50, 77, 106, 128, 151, 177, 187, 208, 221, 235, 249, 255, 262, 267,
        282, 293, 305, 312, 322, 332, 342, 350, 359, 367, 377, 385, 396, 404, 411, 415,
        418, 428, 434, 440, 446, 453, 458, 467, 477, 483, 489, 496, 499, 502, 507, 511,
        515, 518, 520, 523, 526, 528, 531, 534, 537, 542, 545, 549, 551, 553, 554, 556,
        558, 560, 562, 564, 566, 568, 570, 572, 574, 575, 577, 578, 580, 582, 583, 585,
        586, 587, 587, 589, 590, 591, 591, 592, 593, 594, 595, 595, 596, 596, 597, 597,
        598, 598, 599, 599, 600, 600, 601, 601, 601, 602, 602, 603, 603, 603, 604, 604,
        604, 604
    };

    public static final String[] NAMES_AR = new String[]{
        "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
        "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
        "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
        "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
        "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
        "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
        "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
        "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
        "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
        "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
        "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
        "المسد", "الإخلاص", "الفلق", "الناس"
    };

    public static final String[] NAMES_EN = new String[]{
        "Al-Fatihah", "Al-Baqarah", "Ali 'Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus",
        "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra'", "Al-Kahf", "Maryam", "Ta-Ha",
        "Al-Anbya'", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara'", "An-Naml", "Al-Qasas", "Al-'Ankabut", "Ar-Rum",
        "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir",
        "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
        "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahanah",
        "As-Saf", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
        "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at", "'Abasa",
        "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad",
        "Ash-Shams", "Al-Layl", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-'Adiyat",
        "Al-Qari'ah", "At-Takathur", "Al-'Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr",
        "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
    };

    public static final String[] MEANINGS_EN = new String[]{
        "The Opening", "The Cow", "Family of Imran", "The Women", "The Table Spread", "The Cattle", "The Heights", "The Spoils of War", "The Repentance", "Jonah",
        "Hud", "Joseph", "The Thunder", "Abraham", "The Rocky Tract", "The Bee", "The Night Journey", "The Cave", "Mary", "Ta-Ha",
        "The Prophets", "The Pilgrimage", "The Believers", "The Light", "The Criterion", "The Poets", "The Ant", "The Stories", "The Spider", "The Romans",
        "Luqman", "The Prostration", "The Combined Forces", "Sheba", "Originator", "Ya-Sin", "Those Ranged in Ranks", "The Letter Sad", "The Troops", "The Forgiver",
        "Explained in Detail", "The Consultation", "The Ornaments of Gold", "The Smoke", "The Kneeling", "The Wind-Curved Sandhills", "Muhammad", "The Victory", "The Rooms", "The Letter Qaf",
        "The Winnowing Winds", "The Mount", "The Star", "The Moon", "The Beneficent", "The Inevitable", "The Iron", "The Pleading Woman", "The Exile", "She that is to be Examined",
        "The Ranks", "The Congregation", "The Hypocrites", "The Mutual Disillusion", "The Divorce", "The Prohibition", "The Sovereignty", "The Pen", "The Reality", "The Ascending Stairways",
        "Noah", "The Jinn", "The Enshrouded One", "The Cloaked One", "The Resurrection", "The Human", "The Emissaries", "The Tidings", "Those who Drag Forth", "He Frowned",
        "The Overthrowing", "The Cleaving", "The Defrauding", "The Sundering", "The Mansions of the Stars", "The Nightcomer", "The Most High", "The Overwhelming", "The Dawn", "The City",
        "The Sun", "The Night", "The Morning Hours", "The Relief", "The Fig", "The Clot", "The Power", "The Clear Proof", "The Earthquake", "The Courser",
        "The Calamity", "Rivalry in World Increase", "The Declining Day", "The Traducer", "The Elephant", "Quraysh", "The Small Kindnesses", "The Abundance", "The Disbelievers", "The Divine Support",
        "The Palm Fibre", "The Sincerity", "The Daybreak", "The Mankind"
    };

    public static final int[] AYAH_COUNTS = new int[]{
        7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
        112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
        54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
        14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
        29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
        11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
    };

    public static final boolean[] IS_MECCAN = new boolean[]{
        true, false, false, false, false, true, true, false, false, true,
        true, true, false, true, true, true, true, true, true, true,
        true, false, true, false, true, true, true, true, true, true,
        true, true, false, true, true, true, true, true, true, true,
        true, true, true, true, true, true, false, false, false, true,
        true, true, true, true, true, true, false, false, false, false,
        false, false, false, false, false, false, true, true, true, true,
        true, true, true, true, true, false, true, true, true, true,
        true, true, true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true, false, false, true,
        true, true, true, true, true, true, true, true, true, false,
        true, true, true, true
    };

    public static final int[] REV_ORDERS = new int[]{
        5, 87, 89, 92, 112, 55, 39, 88, 113, 51, 52, 53, 96, 72, 54, 70, 50, 69, 44, 45,
        73, 103, 74, 102, 42, 47, 48, 49, 85, 84, 57, 75, 90, 58, 43, 41, 56, 38, 59, 60,
        61, 62, 63, 64, 65, 66, 95, 111, 106, 34, 67, 76, 23, 37, 97, 46, 94, 105, 101, 91,
        109, 110, 104, 108, 99, 107, 77, 2, 78, 79, 71, 40, 3, 4, 31, 98, 33, 80, 81, 24,
        7, 82, 86, 83, 27, 36, 8, 68, 10, 35, 26, 9, 11, 12, 28, 1, 25, 100, 93, 14,
        30, 16, 13, 32, 19, 29, 17, 15, 18, 114, 6, 22, 20, 21
    };

    public static final int[] JUZ_NUMS = new int[]{
        1, 1, 3, 4, 6, 7, 8, 10, 10, 11, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16,
        17, 17, 18, 18, 18, 19, 19, 20, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24,
        24, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30
    };

    public static List<SurahMeta> getAllSurahs() {
        List<SurahMeta> list = new ArrayList<>(114);
        for (int i = 0; i < 114; i++) {
            list.add(new SurahMeta(
                i + 1,
                NAMES_AR[i],
                NAMES_EN[i],
                MEANINGS_EN[i],
                AYAH_COUNTS[i],
                IS_MECCAN[i],
                REV_ORDERS[i],
                JUZ_NUMS[i],
                SURAH_START_PAGES[i]
            ));
        }
        return list;
    }

    public static List<ReciterItem> getPrecisionReciters(boolean isAr) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 114; i++) {
            if (i > 1) sb.append(",");
            sb.append(i);
        }
        String allSurahs = sb.toString();

        Object[][] raw = new Object[][]{
            {4, "أبو بكر الشاطري", "Abu Bakr al-Shatri", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {19, "أحمد بن علي العجمي", "Ahmed Al-Ajamy", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {13, "سعد الغامدي", "Saad Al-Ghamdi", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {10, "سعود الشريم", "Sa`ud ash-Shuraym", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {17, "سهل ياسين", "Sahl Yasin", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {43, "صلاح البدير", "Salah Al-Budair", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {18, "صلاح بو خاطر", "Salah Bukhatir", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {2, "عبد الباسط عبد الصمد (مرتل)", "AbdulBaset AbdulSamad (Murattal)", "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", "Murattal (Precise Verse Sync 🎯)", null},
            {1, "عبد الباسط عبد الصمد (مجود)", "AbdulBaset AbdulSamad (Tajweed)", "المصحف المجود (مزامنة دقيقة 🎯)", "Mujawwad (Precise Verse Sync 🎯)", null},
            {3, "عبد الرحمن السديس", "Abdur-Rahman as-Sudais", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {11, "عبد المحسن القاسم", "Abdul Muhsin al-Qasim", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {14, "فارس عباد", "Fares Abbad", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null},
            {9, "محمد صديق المنشاوي (مرتل)", "Mohamed Siddiq al-Minshawi (Murattal)", "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", "Murattal (Precise Verse Sync 🎯)", null},
            {8, "محمد صديق المنشاوي (مجود)", "Mohamed Siddiq al-Minshawi (Tajweed)", "المصحف المجود — تلاوة نقية", "Mujawwad (High Quality)", "https://cdn.mp3quran.net/audio/muhammad-minshawi/r2/"},
            {6, "محمود خليل الحصري (مرتل)", "Mahmoud Khalil Al-Husary (Murattal)", "حفص عن عاصم - مرتل (مزامنة دقيقة 🎯)", "Murattal (Precise Verse Sync 🎯)", null},
            {12, "محمود خليل الحصري (المعلم)", "Mahmoud Khalil Al-Husary (Teacher)", "المصحف المعلم (مزامنة دقيقة 🎯)", "Muallim (Precise Verse Sync 🎯)", null},
            {7, "مشاري راشد العفاسي", "Mishari Rashid al-`Afasy", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Murattal (Precise Verse Sync 🎯)", null},
            {5, "هاني الرفاعي", "Hani ar-Rifai", "حفص عن عاصم (مزامنة دقيقة 🎯)", "Hafs an Asim (Precise Verse Sync 🎯)", null}
        };

        List<ReciterItem> res = new ArrayList<>();
        for (Object[] r : raw) {
            int qid = (Integer) r[0];
            String clean = isAr ? (String) r[1] : (String) r[2];
            String mName = isAr ? (String) r[3] : (String) r[4];
            String srv = (String) r[5];
            List<MoshafItem> mList = new ArrayList<>();
            mList.add(new MoshafItem(
                "m_prec_" + qid,
                mName,
                srv != null ? srv : ("https://api.quran.com/api/v4/chapter_recitations/" + qid + "/"),
                allSurahs,
                true,
                qid
            ));
            res.add(new ReciterItem(
                "precision_" + qid,
                clean + " 🎯",
                clean,
                true,
                qid,
                srv,
                mList
            ));
        }
        return res;
    }

    private static JSONObject qcfRoot = null;

    public static synchronized JSONObject getQcfData(Context ctx) {
        if (qcfRoot != null) return qcfRoot;
        try (InputStream is = ctx.getAssets().open("qcf_data.json");
             ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
            byte[] buf = new byte[16384];
            int n;
            while ((n = is.read(buf)) != -1) bos.write(buf, 0, n);
            qcfRoot = new JSONObject(new String(bos.toByteArray(), StandardCharsets.UTF_8));
        } catch (Exception e) {
            qcfRoot = new JSONObject();
        }
        return qcfRoot;
    }

    public static List<int[]> getSurahPageRanges(Context ctx, int surahNum) {
        List<int[]> list = new ArrayList<>();
        JSONObject root = getQcfData(ctx);
        JSONObject sObj = root.optJSONObject(String.valueOf(surahNum));
        if (sObj != null) {
            JSONArray pArr = sObj.optJSONArray("p");
            if (pArr != null) {
                for (int i = 0; i < pArr.length(); i++) {
                    JSONArray r = pArr.optJSONArray(i);
                    if (r != null && r.length() >= 3) {
                        list.add(new int[]{r.optInt(0), r.optInt(1), r.optInt(2)});
                    }
                }
            }
        }
        if (list.isEmpty()) {
            int idx = Math.max(0, Math.min(113, surahNum - 1));
            list.add(new int[]{1, AYAH_COUNTS[idx], SURAH_START_PAGES[idx]});
        }
        return list;
    }

    public static List<int[]> getAllSegmentsOnPage(Context ctx, int pageNum) {
        List<int[]> segs = new ArrayList<>();
        JSONObject root = getQcfData(ctx);
        for (int sn = 1; sn <= 114; sn++) {
            JSONObject sObj = root.optJSONObject(String.valueOf(sn));
            if (sObj == null) continue;
            JSONArray pArr = sObj.optJSONArray("p");
            if (pArr == null) continue;
            for (int i = 0; i < pArr.length(); i++) {
                JSONArray r = pArr.optJSONArray(i);
                if (r != null && r.length() >= 3 && r.optInt(2) == pageNum) {
                    segs.add(new int[]{sn, r.optInt(0), r.optInt(1), pageNum});
                }
            }
        }
        return segs;
    }

    public static String getQcfAyahGlyphs(Context ctx, int surahNum, int ayahNum) {
        JSONObject root = getQcfData(ctx);
        JSONObject sObj = root.optJSONObject(String.valueOf(surahNum));
        if (sObj == null) return "";
        JSONArray gArr = sObj.optJSONArray("g");
        if (gArr == null || ayahNum < 1 || ayahNum > gArr.length()) return "";
        return gArr.optString(ayahNum - 1, "");
    }

    public static String toArabicDigits(int num) {
        String s = String.valueOf(num);
        char[] ar = {'٠','١','٢','٣','٤','٥','٦','٧','٨','٩'};
        StringBuilder sb = new StringBuilder(s.length());
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= '0' && c <= '9') sb.append(ar[c - '0']);
            else sb.append(c);
        }
        return sb.toString();
    }

    public static String normalizeArabic(String txt) {
        if (txt == null) return "";
        return txt.replaceAll("[\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0640]", "")
                  .replaceAll("[أإآٱ]", "ا")
                  .replace('ة', 'ه')
                  .replace('ى', 'ي')
                  .replaceAll("\\s+", " ")
                  .trim();
    }
}
