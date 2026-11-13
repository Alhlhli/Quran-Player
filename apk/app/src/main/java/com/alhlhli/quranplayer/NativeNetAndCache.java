package com.alhlhli.quranplayer;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Typeface;
import android.os.Handler;
import android.os.Looper;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class NativeNetAndCache {

    private static final ExecutorService EXECUTOR = Executors.newFixedThreadPool(4);
    private static final Handler MAIN_HANDLER = new Handler(Looper.getMainLooper());
    private static final Map<String, Typeface> TYPEFACE_MEM_CACHE = new HashMap<>();

    public interface Callback<T> {
        void onResult(T result);
    }

    public static void runBg(Runnable r) {
        EXECUTOR.execute(r);
    }

    public static void runUi(Runnable r) {
        MAIN_HANDLER.post(r);
    }

    public static File getCacheSubDir(Context ctx, String sub) {
        File dir = new File(ctx.getFilesDir(), "quran_offline/" + sub);
        if (!dir.exists()) dir.mkdirs();
        return dir;
    }

    public static long getOfflineStorageBytes(Context ctx) {
        File root = new File(ctx.getFilesDir(), "quran_offline");
        return dirSize(root);
    }

    private static long dirSize(File f) {
        if (f == null || !f.exists()) return 0;
        if (f.isFile()) return f.length();
        long total = 0;
        File[] children = f.listFiles();
        if (children != null) {
            for (File c : children) total += dirSize(c);
        }
        return total;
    }

    public static void clearOfflineStorage(Context ctx) {
        TYPEFACE_MEM_CACHE.clear();
        deleteRecursive(new File(ctx.getFilesDir(), "quran_offline"));
    }

    private static void deleteRecursive(File f) {
        if (f == null || !f.exists()) return;
        if (f.isDirectory()) {
            File[] children = f.listFiles();
            if (children != null) {
                for (File c : children) deleteRecursive(c);
            }
        }
        f.delete();
    }

    private static String sha1(String s) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] b = md.digest(s.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte x : b) sb.append(String.format("%02x", x));
            return sb.toString();
        } catch (Exception e) {
            return String.valueOf(s.hashCode());
        }
    }

    public static byte[] fetchBytes(String urlStr, int timeoutMs) throws Exception {
        HttpURLConnection conn = null;
        try {
            URL url = new URL(urlStr);
            conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(timeoutMs);
            conn.setReadTimeout(timeoutMs);
            conn.setInstanceFollowRedirects(true);
            conn.setRequestProperty("User-Agent", "QuranPlayer-Android-Native/3.0");
            int code = conn.getResponseCode();
            if (code < 200 || code >= 300) throw new Exception("HTTP " + code);
            try (InputStream is = conn.getInputStream();
                 ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
                byte[] buf = new byte[16384];
                int n;
                while ((n = is.read(buf)) != -1) bos.write(buf, 0, n);
                return bos.toByteArray();
            }
        } finally {
            if (conn != null) conn.disconnect();
        }
    }

    public static String fetchStringCached(Context ctx, String subDir, String cacheKey, String urlStr, boolean networkFirst) {
        File f = new File(getCacheSubDir(ctx, subDir), cacheKey);
        if (!networkFirst && f.exists() && f.length() > 0) {
            try {
                return readFileString(f);
            } catch (Exception ignored) {}
        }
        try {
            byte[] data = fetchBytes(urlStr, 10000);
            writeFileBytes(f, data);
            return new String(data, StandardCharsets.UTF_8);
        } catch (Exception e) {
            if (f.exists() && f.length() > 0) {
                try { return readFileString(f); } catch (Exception ignored) {}
            }
            return null;
        }
    }

    public static void writeFileBytes(File f, byte[] data) throws Exception {
        File tmp = new File(f.getParentFile(), f.getName() + ".tmp");
        try (FileOutputStream fos = new FileOutputStream(tmp)) {
            fos.write(data);
        }
        if (f.exists()) f.delete();
        tmp.renameTo(f);
    }

    public static byte[] readFileBytes(File f) throws Exception {
        try (FileInputStream fis = new FileInputStream(f);
             ByteArrayOutputStream bos = new ByteArrayOutputStream((int) f.length())) {
            byte[] buf = new byte[16384];
            int n;
            while ((n = fis.read(buf)) != -1) bos.write(buf, 0, n);
            return bos.toByteArray();
        }
    }

    public static String readFileString(File f) throws Exception {
        return new String(readFileBytes(f), StandardCharsets.UTF_8);
    }

    // Fetch Reciters from mp3quran API + merge with Precision Reciters
    public static void loadReciters(Context ctx, boolean isAr, Callback<List<QuranData.ReciterItem>> cb) {
        runBg(() -> {
            List<QuranData.ReciterItem> prec = QuranData.getPrecisionReciters(isAr);
            String langKey = isAr ? "ar" : "en";
            String apiUrl = isAr
                ? "https://www.mp3quran.net/api/v3/reciters?language=ar"
                : "https://www.mp3quran.net/api/v3/reciters?language=eng";
            String jsonStr = fetchStringCached(ctx, "api", "reciters_" + langKey + ".json", apiUrl, false);
            List<QuranData.ReciterItem> combined = new ArrayList<>(prec);
            if (jsonStr != null) {
                try {
                    JSONObject root = new JSONObject(jsonStr);
                    JSONArray arr = root.optJSONArray("reciters");
                    if (arr != null) {
                        for (int i = 0; i < arr.length(); i++) {
                            JSONObject ro = arr.optJSONObject(i);
                            if (ro == null) continue;
                            String id = String.valueOf(ro.opt("id"));
                            String name = ro.optString("name", "");
                            if (name.isEmpty()) continue;
                            JSONArray mArr = ro.optJSONArray("moshaf");
                            List<QuranData.MoshafItem> moshafs = new ArrayList<>();
                            if (mArr != null) {
                                for (int j = 0; j < mArr.length(); j++) {
                                    JSONObject mo = mArr.optJSONObject(j);
                                    if (mo == null) continue;
                                    moshafs.add(new QuranData.MoshafItem(
                                        String.valueOf(mo.opt("id")),
                                        mo.optString("name", ""),
                                        mo.optString("server", ""),
                                        mo.optString("surah_list", ""),
                                        false,
                                        0
                                    ));
                                }
                            }
                            if (!moshafs.isEmpty()) {
                                combined.add(new QuranData.ReciterItem(id, name, name, false, 0, null, moshafs));
                            }
                        }
                    }
                } catch (Exception ignored) {}
            }
            runUi(() -> cb.onResult(combined));
        });
    }

    // Fetch Precision Audio URL & Ayah Timings
    public static class PrecisionAudioResult {
        public final String audioUrl;
        public final List<QuranData.AyahTiming> timings;
        public PrecisionAudioResult(String audioUrl, List<QuranData.AyahTiming> timings) {
            this.audioUrl = audioUrl;
            this.timings = timings;
        }
    }

    public static PrecisionAudioResult fetchPrecisionAudioSync(Context ctx, int qid, int surahNum) {
        if (qid == 8) {
            String pad3 = String.format(java.util.Locale.US, "%03d", surahNum);
            return new PrecisionAudioResult("https://cdn.mp3quran.net/audio/muhammad-minshawi/r2/" + pad3 + ".mp3", new ArrayList<>());
        }
        String key = "timings_" + qid + "_" + surahNum + ".json";
        String url = "https://api.quran.com/api/v4/chapter_recitations/" + qid + "/" + surahNum + "?segments=true";
        String jsonStr = fetchStringCached(ctx, "timings", key, url, false);
        if (jsonStr == null) return null;
        try {
            JSONObject root = new JSONObject(jsonStr);
            JSONObject af = root.optJSONObject("audio_file");
            if (af == null) return null;
            String audioUrl = af.optString("audio_url", "").replaceAll("([^:])//+", "$1/");
            List<QuranData.AyahTiming> timings = new ArrayList<>();
            JSONArray tsArr = af.optJSONArray("timestamps");
            if (tsArr != null) {
                for (int i = 0; i < tsArr.length(); i++) {
                    JSONObject t = tsArr.optJSONObject(i);
                    if (t == null) continue;
                    String vk = t.optString("verse_key", "");
                    String[] parts = vk.split(":");
                    int ay = parts.length > 1 ? Integer.parseInt(parts[1]) : (i + 1);
                    long from = t.optLong("timestamp_from", 0);
                    long to = t.optLong("timestamp_to", 0);
                    timings.add(new QuranData.AyahTiming(surahNum, ay, from, to));
                }
            }
            return new PrecisionAudioResult(audioUrl, timings);
        } catch (Exception e) {
            return null;
        }
    }

    public static File getCachedAudioFileIfPresent(Context ctx, String audioUrl) {
        if (audioUrl == null || audioUrl.isEmpty()) return null;
        File f = new File(getCacheSubDir(ctx, "audio"), sha1(audioUrl) + ".mp3");
        if (f.exists() && f.length() > 1024) return f;
        return null;
    }

    public static File downloadAudioToCacheSync(Context ctx, String audioUrl) throws Exception {
        File f = new File(getCacheSubDir(ctx, "audio"), sha1(audioUrl) + ".mp3");
        if (f.exists() && f.length() > 1024) return f;
        byte[] bytes = fetchBytes(audioUrl, 30000);
        writeFileBytes(f, bytes);
        return f;
    }

    // Fetch Surah Verses (Uthmani, Print, Simple)
    public static class AyahTextItem {
        public final int numberInSurah;
        public final String uthmani;
        public final String print;
        public final String simple;

        public AyahTextItem(int numberInSurah, String uthmani, String print, String simple) {
            this.numberInSurah = numberInSurah;
            this.uthmani = uthmani;
            this.print = print;
            this.simple = simple;
        }
    }

    public static List<AyahTextItem> fetchSurahTextSync(Context ctx, int surahNum) {
        String keyU = "surah_" + surahNum + "_uthmani.json";
        String urlU = "https://api.alquran.cloud/v1/surah/" + surahNum + "/quran-uthmani";
        String jsonU = fetchStringCached(ctx, "texts", keyU, urlU, false);

        List<AyahTextItem> list = new ArrayList<>();
        if (jsonU != null) {
            try {
                JSONObject root = new JSONObject(jsonU);
                JSONObject data = root.optJSONObject("data");
                JSONArray ayahs = data != null ? data.optJSONArray("ayahs") : null;
                if (ayahs != null) {
                    for (int i = 0; i < ayahs.length(); i++) {
                        JSONObject a = ayahs.optJSONObject(i);
                        if (a == null) continue;
                        int num = a.optInt("numberInSurah", i + 1);
                        String txt = a.optString("text", "");
                        if (surahNum != 1 && surahNum != 9 && num == 1) {
                            txt = stripBasmalahPrefix(txt);
                        }
                        String simple = QuranData.normalizeArabic(txt);
                        list.add(new AyahTextItem(num, txt, txt, simple));
                    }
                }
            } catch (Exception ignored) {}
        }
        return list;
    }

    private static String stripBasmalahPrefix(String txt) {
        if (txt == null) return "";
        String[] words = txt.trim().split("\\s+");
        if (words.length >= 5) {
            String first4 = QuranData.normalizeArabic(words[0] + " " + words[1] + " " + words[2] + " " + words[3]);
            if (first4.startsWith(QuranData.normalizeArabic("بسم الله الرحمن الرحيم")) || first4.startsWith("بسم")) {
                StringBuilder sb = new StringBuilder();
                for (int i = 4; i < words.length; i++) {
                    if (i > 4) sb.append(" ");
                    sb.append(words[i]);
                }
                return sb.toString();
            }
        }
        return txt;
    }

    // Fetch Surah Info from Quranpedia API
    public static JSONObject fetchSurahInfoSync(Context ctx, int surahNum) {
        String key = "surah_" + surahNum + "_info.json";
        String url = "https://api.quranpedia.net/v1/surahs/" + surahNum;
        String json = fetchStringCached(ctx, "texts", key, url, false);
        if (json != null) {
            try { return new JSONObject(json); } catch (Exception ignored) {}
        }
        return null;
    }

    // Load or Download Page Font (Tajweed TTF / QCF TTF) + Dark Mode CPAL Binary Patching!
    public static Typeface loadPageFontSync(Context ctx, String mode, int page, boolean isDarkTheme) {
        String cacheId = mode + "_p" + page + (isDarkTheme && "tajweed".equals(mode) ? "_dark" : "_light");
        synchronized (TYPEFACE_MEM_CACHE) {
            if (TYPEFACE_MEM_CACHE.containsKey(cacheId)) {
                return TYPEFACE_MEM_CACHE.get(cacheId);
            }
        }

        try {
            File fontsDir = getCacheSubDir(ctx, "fonts");
            File rawFontFile = new File(fontsDir, "p" + page + ".ttf");
            if (!rawFontFile.exists() || rawFontFile.length() < 1000) {
                String[] urls = new String[]{
                    "https://cdn.jsdelivr.net/gh/YaseenDotDev/quran-qcf-v4@main/p" + page + ".ttf",
                    "https://raw.githubusercontent.com/YaseenDotDev/quran-qcf-v4/main/p" + page + ".ttf"
                };
                byte[] fontBytes = null;
                for (String u : urls) {
                    try {
                        fontBytes = fetchBytes(u, 12000);
                        if (fontBytes != null && fontBytes.length > 1000) break;
                    } catch (Exception ignored) {}
                }
                if (fontBytes != null && fontBytes.length > 1000) {
                    writeFileBytes(rawFontFile, fontBytes);
                }
            }

            if (!rawFontFile.exists() || rawFontFile.length() < 1000) return null;

            File targetFile = rawFontFile;
            if ("tajweed".equals(mode) && isDarkTheme) {
                File darkFontFile = new File(fontsDir, "p" + page + "_dark.ttf");
                if (!darkFontFile.exists() || darkFontFile.length() < 1000) {
                    byte[] srcBytes = readFileBytes(rawFontFile);
                    byte[] darkBytes = patchCpalDarkTable(srcBytes);
                    writeFileBytes(darkFontFile, darkBytes);
                }
                targetFile = darkFontFile;
            }

            Typeface tf = Typeface.createFromFile(targetFile);
            if (tf != null) {
                synchronized (TYPEFACE_MEM_CACHE) {
                    TYPEFACE_MEM_CACHE.put(cacheId, tf);
                }
            }
            return tf;
        } catch (Exception e) {
            return null;
        }
    }

    // Native Java binary CPAL table patcher: converts black base glyphs in Tajweed COLR/CPAL font to pure white (#FFFFFF) for dark themes!
    public static byte[] patchCpalDarkTable(byte[] src) {
        try {
            byte[] buf = src.clone();
            ByteBuffer bb = ByteBuffer.wrap(buf).order(ByteOrder.BIG_ENDIAN);
            int numTables = bb.getShort(4) & 0xFFFF;
            int cpalRecOffset = -1;
            int cpalOffset = 0;
            int cpalLength = 0;
            for (int i = 0; i < numTables; i++) {
                int rec = 12 + i * 16;
                if (rec + 16 > buf.length) break;
                String tag = new String(buf, rec, 4, StandardCharsets.US_ASCII);
                if ("CPAL".equals(tag)) {
                    cpalRecOffset = rec;
                    cpalOffset = bb.getInt(rec + 8);
                    cpalLength = bb.getInt(rec + 12);
                    break;
                }
            }
            if (cpalOffset > 0 && cpalLength >= 12) {
                int numColorRecords = bb.getShort(cpalOffset + 6) & 0xFFFF;
                int colorRecordsOffset = bb.getInt(cpalOffset + 8);
                int absStart = cpalOffset + colorRecordsOffset;
                for (int c = 0; c < numColorRecords; c++) {
                    int pos = absStart + c * 4;
                    if (pos + 3 >= buf.length) break;
                    int b = buf[pos] & 0xFF;
                    int g = buf[pos + 1] & 0xFF;
                    int r = buf[pos + 2] & 0xFF;
                    int a = buf[pos + 3] & 0xFF;
                    if (a > 0 && r < 65 && g < 65 && b < 65) {
                        buf[pos] = (byte) 255;
                        buf[pos + 1] = (byte) 255;
                        buf[pos + 2] = (byte) 255;
                    }
                }
                if (cpalRecOffset >= 0) {
                    long sum = 0;
                    int end = cpalOffset + cpalLength;
                    for (int p = cpalOffset; p + 4 <= end && p + 4 <= buf.length; p += 4) {
                        sum = (sum + (bb.getInt(p) & 0xFFFFFFFFL)) & 0xFFFFFFFFL;
                    }
                    bb.putInt(cpalRecOffset + 4, (int) sum);
                }
            }
            return buf;
        } catch (Exception e) {
            return src;
        }
    }

    // Load Mushaf Page Image with fallback sources & disk caching
    public static Bitmap loadMushafPageBitmapSync(Context ctx, int sourceIdx, int pageNum) {
        QuranData.MushafSource[] sources = QuranData.MUSHAF_SOURCES;
        int count = sources.length;
        for (int attempt = 0; attempt < 3; attempt++) {
            QuranData.MushafSource src = sources[(sourceIdx + attempt) % count];
            File imgDir = getCacheSubDir(ctx, "images_" + src.id);
            File imgFile = new File(imgDir, "page_" + pageNum + ".img");
            if (imgFile.exists() && imgFile.length() > 1000) {
                Bitmap bm = BitmapFactory.decodeFile(imgFile.getAbsolutePath());
                if (bm != null) return bm;
            }
            try {
                byte[] bytes = fetchBytes(src.getPageUrl(pageNum), 12000);
                if (bytes != null && bytes.length > 1000) {
                    writeFileBytes(imgFile, bytes);
                    Bitmap bm = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
                    if (bm != null) return bm;
                }
            } catch (Exception ignored) {}
        }
        return null;
    }
}
