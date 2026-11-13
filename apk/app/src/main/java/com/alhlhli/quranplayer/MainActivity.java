package com.alhlhli.quranplayer;

import android.app.AlertDialog;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.Typeface;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.Editable;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextPaint;
import android.text.TextWatcher;
import android.text.method.LinkMovementMethod;
import android.text.style.BackgroundColorSpan;
import android.text.style.ClickableSpan;
import android.text.style.ForegroundColorSpan;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.HorizontalScrollView;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.ScrollView;
import android.widget.SeekBar;
import android.widget.Spinner;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.atomic.AtomicBoolean;

public class MainActivity extends AppCompatActivity {

    private SharedPreferences prefs;
    private boolean isAr = true;
    private String currentTheme = "beige";
    private ThemeManager.Palette pal;

    // Data & State
    private List<QuranData.SurahMeta> allSurahs;
    private List<QuranData.ReciterItem> reciters = new ArrayList<>();
    private List<QuranData.ReciterItem> filteredReciters = new ArrayList<>();
    private List<QuranData.SurahMeta> filteredSurahs = new ArrayList<>();

    private int selectedReciterIdx = 0;
    private int selectedMoshafIdx = 0;
    private int selectedSurahNum = 1; // 1..114

    private String currentScript = "qcf"; // "qcf", "tajweed", "uthmani", "print", "simple"
    private String currentLineMode = "inline"; // "inline" (15-line Mushaf), "block"
    private String textPageMode = "scroll"; // "scroll", "pages"
    private String mushafPageDist = "mushaf"; // "mushaf" (shared page), "surah" (single surah)
    private boolean autoScrollText = true;
    private boolean autoHighlight = true;
    private boolean autoPlayOnChange = true;
    private int qpFontSize = 24;
    private int mushafSourceIdx = 0;
    private int repeatMode = 0; // 0=no, 1=1x, 2=2x, 3=3x, 4=inf
    private int repeatCount = 0;
    private int nextMode = 0; // 0=nextSurah, 1=randSurah, 2=randReciter, 3=randAll
    private float playbackSpeed = 1.0f;
    private int volumePercent = 85;
    private boolean isMuted = false;

    // Audio & Sync Engine
    private MediaPlayer mediaPlayer;
    private boolean isPrepared = false;
    private boolean isPlaying = false;
    private List<QuranData.AyahTiming> currentTimings = new ArrayList<>();
    private int activeHighlightedAyah = -1;
    private final Handler tickHandler = new Handler(Looper.getMainLooper());
    private long stopTimerEndMs = 0;
    private String stopAfterMode = "none";

    // Main Native UI Views
    private FrameLayout rootContainer;
    private LinearLayout mainSplitLayout;
    private LinearLayout mobileTabStrip;
    private Button mtabPlayerBtn, mtabQuranBtn;
    private String activeMobileTab = "player"; // "player" or "quran"

    // Player Column Views
    private ScrollView playerScrollView;
    private LinearLayout playerContentCol;
    private TextView appTitleTv, statusTv, npSurahTv, npReciterTv, npBadgeTv;
    private Spinner reciterSpinner, moshafSpinner, surahSpinner, stopAfterSpinner;
    private EditText reciterSearchEt, surahSearchEt;
    private Button playBtn, prevBtn, nextBtn, repeatBtn, muteBtn, nextModeBtn;
    private SeekBar audioSeekBar, volSeekBar, speedSeekBar;
    private TextView tElapsedTv, tRemainingTv, volValTv, speedValTv, stopClockTv;
    private LinearLayout surahGridContainer, bookmarksContainer, statsContainer;

    // Quran Panel Views
    private LinearLayout quranPanelCol;
    private TextView qpTitleTv, qpMetaTv;
    private Spinner qpMobReciterSpinner, qpMobSurahSpinner;
    private Button qpTabTextBtn, qpTabMushafBtn, qpTabInfoBtn;
    private String currentQpTab = "text"; // "text", "mushaf", "info"
    private LinearLayout qpOptsBar, tajweedLegendBox, qpSearchWrap;
    private EditText qpSearchEt;
    private ScrollView qpTextScrollView;
    private LinearLayout qpTextContainer;
    private LinearLayout qpPageNavBar;
    private TextView qpPageLabelTv;
    private Button qpPrevPageBtn, qpNextPageBtn;
    private List<int[]> currentSurahPageRanges = new ArrayList<>();
    private int currentTextPageIdx = 0;
    private final Map<String, TextView> ayahViewMap = new HashMap<>();

    // Mushaf Image Tab Views
    private LinearLayout qpMushafPane, mushafSourceTabsLayout;
    private ImageView mushafPageImageView;
    private TextView mushafPageLabelTv;
    private List<Integer> mushafPagesList = new ArrayList<>();
    private int currentMushafPageIdx = 0;

    // Info Tab Views
    private ScrollView qpInfoScrollView;
    private LinearLayout qpInfoContainer;

    // Floating Mini Player Bar
    private LinearLayout floatingBar;
    private TextView fbSurahTv, fbReciterTv, fbTimeTv;
    private Button fbPlayBtn, fbPrevBtn, fbNextBtn, fbRepeatBtn;
    private ProgressBar fbProgressBar;
    private boolean toolsCollapsed = false;

    private boolean suppressSpinnerEvents = false;
    private final Random random = new Random();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        prefs = getSharedPreferences("QuranPlayerNativePrefs", Context.MODE_PRIVATE);
        loadSavedPreferences();
        allSurahs = QuranData.getAllSurahs();
        filteredSurahs = new ArrayList<>(allSurahs);
        pal = ThemeManager.getPalette(currentTheme);

        Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams lp = window.getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            window.setAttributes(lp);
        }

        try {
            buildNativeUserInterface();
            applyPaletteToViews();
            initMediaPlayer();
        } catch (Throwable t) {
            TextView errTv = new TextView(this);
            errTv.setText("Error: " + t.toString());
            errTv.setPadding(40, 40, 40, 40);
            setContentView(errTv);
            return;
        }

        // Load Reciters (18 Precision Reciters immediately + mp3quran API in background)
        reciters = QuranData.getPrecisionReciters(isAr);
        filteredReciters = new ArrayList<>(reciters);
        populateReciterSpinner();
        populateSurahSpinner();

        NativeNetAndCache.loadReciters(this, isAr, loadedList -> {
            if (loadedList != null && !loadedList.isEmpty()) {
                reciters = loadedList;
                filterReciters(reciterSearchEt != null ? reciterSearchEt.getText().toString() : "");
            }
        });

        loadQuranTextAndRender(selectedSurahNum);
        startUiTickLoop();
    }

    private void loadSavedPreferences() {
        isAr = !"en".equals(prefs.getString("lang", "ar"));
        currentTheme = prefs.getString("theme", "beige");
        currentScript = prefs.getString("script", "qcf");
        currentLineMode = prefs.getString("lineMode", "inline");
        textPageMode = prefs.getString("textPageMode", "scroll");
        mushafPageDist = prefs.getString("mushafPageDist", "mushaf");
        autoScrollText = prefs.getBoolean("autoScrollText", true);
        autoHighlight = prefs.getBoolean("autoHighlight", true);
        autoPlayOnChange = prefs.getBoolean("autoPlayOnChange", true);
        qpFontSize = prefs.getInt("qpFontSize", 24);
        mushafSourceIdx = prefs.getInt("mushafSourceIdx", 0);
        repeatMode = prefs.getInt("repeatMode", 0);
        nextMode = prefs.getInt("nextMode", 0);
        selectedReciterIdx = prefs.getInt("reciterIdx", 16); // Default Mishary Al-Afasy
        selectedSurahNum = prefs.getInt("surahNum", 1);
        volumePercent = prefs.getInt("volume", 85);
        playbackSpeed = prefs.getFloat("speed", 1.0f);
    }

    private void savePreferences() {
        prefs.edit()
            .putString("lang", isAr ? "ar" : "en")
            .putString("theme", currentTheme)
            .putString("script", currentScript)
            .putString("lineMode", currentLineMode)
            .putString("textPageMode", textPageMode)
            .putString("mushafPageDist", mushafPageDist)
            .putBoolean("autoScrollText", autoScrollText)
            .putBoolean("autoHighlight", autoHighlight)
            .putBoolean("autoPlayOnChange", autoPlayOnChange)
            .putInt("qpFontSize", qpFontSize)
            .putInt("mushafSourceIdx", mushafSourceIdx)
            .putInt("repeatMode", repeatMode)
            .putInt("nextMode", nextMode)
            .putInt("reciterIdx", selectedReciterIdx)
            .putInt("surahNum", selectedSurahNum)
            .putInt("volume", volumePercent)
            .putFloat("speed", playbackSpeed)
            .apply();
    }

    private int dp(int v) {
        return Math.round(TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP, v, getResources().getDisplayMetrics()));
    }

    private boolean isTabletOrLandscape() {
        int sw = getResources().getConfiguration().smallestScreenWidthDp;
        int ori = getResources().getConfiguration().orientation;
        return sw >= 600 || ori == Configuration.ORIENTATION_LANDSCAPE;
    }

    private void buildNativeUserInterface() {
        rootContainer = new FrameLayout(this);
        rootContainer.setLayoutDirection(isAr ? View.LAYOUT_DIRECTION_RTL : View.LAYOUT_DIRECTION_LTR);

        LinearLayout masterVertical = new LinearLayout(this);
        masterVertical.setOrientation(LinearLayout.VERTICAL);
        rootContainer.addView(masterVertical, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        // 1. Top Action Bar (Theme Dots, Dark/Light, Settings, Share, Lang, Collapse)
        masterVertical.addView(buildTopHeaderBar(), new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        // 2. Mobile Tab Switcher (🎵 المشغل | 📖 المصحف والنص) - Shown on phones in portrait
        mobileTabStrip = new LinearLayout(this);
        mobileTabStrip.setOrientation(LinearLayout.HORIZONTAL);
        mobileTabStrip.setPadding(dp(10), dp(4), dp(10), dp(4));

        mtabPlayerBtn = makeActionButton(isAr ? "🎵 المشغل الصوتي" : "🎵 Audio Player", () -> switchMobileTab("player"));
        mtabQuranBtn = makeActionButton(isAr ? "📖 المصحف والنص" : "📖 Mushaf & Text", () -> switchMobileTab("quran"));

        LinearLayout.LayoutParams tabLp1 = new LinearLayout.LayoutParams(0, dp(40), 1f);
        tabLp1.setMargins(dp(4), 0, dp(4), 0);
        LinearLayout.LayoutParams tabLp2 = new LinearLayout.LayoutParams(0, dp(40), 1f);
        tabLp2.setMargins(dp(4), 0, dp(4), 0);
        mobileTabStrip.addView(mtabPlayerBtn, tabLp1);
        mobileTabStrip.addView(mtabQuranBtn, tabLp2);
        masterVertical.addView(mobileTabStrip, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        // 3. Main Split Content Area (Side-by-Side on Tablets/TV/Landscape, Tabbed on Portrait Phones)
        mainSplitLayout = new LinearLayout(this);
        mainSplitLayout.setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout.LayoutParams splitLp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f);
        masterVertical.addView(mainSplitLayout, splitLp);

        buildPlayerColumn();
        buildQuranPanelColumn();

        updateResponsiveLayoutMode();

        // 4. Bottom Floating Mini-Player Bar
        floatingBar = buildFloatingMiniPlayer();
        masterVertical.addView(floatingBar, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        wirePlayerControlEvents();
        setContentView(rootContainer);
    }

    private View buildTopHeaderBar() {
        LinearLayout bar = new LinearLayout(this);
        bar.setOrientation(LinearLayout.HORIZONTAL);
        bar.setGravity(Gravity.CENTER_VERTICAL);
        bar.setPadding(dp(10), dp(8), dp(10), dp(6));

        ImageView logo = new ImageView(this);
        logo.setImageResource(R.drawable.app_logo);
        LinearLayout.LayoutParams logoLp = new LinearLayout.LayoutParams(dp(32), dp(32));
        logoLp.setMargins(dp(4), 0, dp(8), 0);
        bar.addView(logo, logoLp);

        appTitleTv = new TextView(this);
        appTitleTv.setText(isAr ? "مشغل القرآن الكريم" : "Quran Player");
        appTitleTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        appTitleTv.setTypeface(Typeface.DEFAULT_BOLD);
        bar.addView(appTitleTv, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));

        // 4 Theme Dots (Beige, Gold Light/Dark, Emerald Light/Dark, Purple Light/Dark)
        bar.addView(makeThemeDot(0xFFCBB89D, "beige"), makeDotLp());
        bar.addView(makeThemeDot(0xFFD97706, "gold"), makeDotLp());
        bar.addView(makeThemeDot(0xFF059669, "emerald"), makeDotLp());
        bar.addView(makeThemeDot(0xFF6366F1, "default"), makeDotLp());

        Button darkBtn = makeIconBtn("🌙", () -> {
            currentTheme = ThemeManager.toggleDarkLight(currentTheme);
            pal = ThemeManager.getPalette(currentTheme);
            savePreferences();
            applyPaletteToViews();
            loadQuranTextAndRender(selectedSurahNum);
        });
        bar.addView(darkBtn, makeSmallBtnLp());

        Button dlCenterBtn = makeIconBtn("📥", this::openOfflineDownloadsDialog);
        bar.addView(dlCenterBtn, makeSmallBtnLp());

        Button settingsBtn = makeIconBtn("⚙️", this::openSettingsDialog);
        bar.addView(settingsBtn, makeSmallBtnLp());

        Button langBtn = makeIconBtn(isAr ? "EN" : "ع", () -> {
            isAr = !isAr;
            savePreferences();
            recreate();
        });
        bar.addView(langBtn, makeSmallBtnLp());

        return bar;
    }

    private LinearLayout.LayoutParams makeDotLp() {
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(dp(22), dp(22));
        lp.setMargins(dp(3), 0, dp(3), 0);
        return lp;
    }

    private LinearLayout.LayoutParams makeSmallBtnLp() {
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(dp(36), dp(34));
        lp.setMargins(dp(2), 0, dp(2), 0);
        return lp;
    }

    private View makeThemeDot(int color, String category) {
        View v = new View(this);
        v.setBackground(ThemeManager.makeCircle(color, 0xFFFFFFFF, dp(2)));
        v.setOnClickListener(view -> {
            currentTheme = ThemeManager.cycleThemeButton(currentTheme, category);
            pal = ThemeManager.getPalette(currentTheme);
            savePreferences();
            applyPaletteToViews();
            loadQuranTextAndRender(selectedSurahNum);
            if ("mushaf".equals(currentQpTab)) renderMushafImagePage();
        });
        return v;
    }

    private Button makeIconBtn(String txt, Runnable action) {
        Button b = new Button(this);
        b.setText(txt);
        b.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        b.setPadding(0, 0, 0, 0);
        b.setAllCaps(false);
        b.setOnClickListener(v -> action.run());
        return b;
    }

    private Button makeActionButton(String txt, Runnable action) {
        Button b = new Button(this);
        b.setText(txt);
        b.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        b.setAllCaps(false);
        b.setPadding(dp(10), dp(4), dp(10), dp(4));
        b.setOnClickListener(v -> action.run());
        return b;
    }

    private void buildPlayerColumn() {
        playerScrollView = new ScrollView(this);
        playerScrollView.setFillViewport(true);

        playerContentCol = new LinearLayout(this);
        playerContentCol.setOrientation(LinearLayout.VERTICAL);
        playerContentCol.setPadding(dp(12), dp(8), dp(12), dp(20));
        playerScrollView.addView(playerContentCol, new ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        // Now Playing Card
        LinearLayout npCard = new LinearLayout(this);
        npCard.setOrientation(LinearLayout.VERTICAL);
        npCard.setPadding(dp(14), dp(12), dp(14), dp(12));
        npCard.setTag("card");

        LinearLayout npTop = new LinearLayout(this);
        npTop.setOrientation(LinearLayout.HORIZONTAL);
        npTop.setGravity(Gravity.CENTER_VERTICAL);

        LinearLayout npTitles = new LinearLayout(this);
        npTitles.setOrientation(LinearLayout.VERTICAL);
        npSurahTv = new TextView(this);
        npSurahTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 18);
        npSurahTv.setTypeface(Typeface.DEFAULT_BOLD);
        npReciterTv = new TextView(this);
        npReciterTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        npBadgeTv = new TextView(this);
        npBadgeTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        npTitles.addView(npSurahTv);
        npTitles.addView(npReciterTv);
        npTitles.addView(npBadgeTv);

        npTop.addView(npTitles, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        Button shareBtn = makeIconBtn("🔗", this::openShareDialog);
        npTop.addView(shareBtn, new LinearLayout.LayoutParams(dp(40), dp(38)));
        npCard.addView(npTop);

        playerContentCol.addView(npCard, makeCardLp());

        // Reciter Selector Row (Compact Single Row: Spinner + Search + Random)
        TextView recLbl = new TextView(this);
        recLbl.setText(isAr ? "🎙️ اختر القارئ:" : "🎙️ Select Reciter:");
        recLbl.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        recLbl.setTypeface(Typeface.DEFAULT_BOLD);
        playerContentCol.addView(recLbl);

        LinearLayout recRow = new LinearLayout(this);
        recRow.setOrientation(LinearLayout.HORIZONTAL);
        recRow.setGravity(Gravity.CENTER_VERTICAL);
        recRow.setPadding(0, dp(4), 0, dp(8));

        reciterSpinner = new Spinner(this);
        recRow.addView(reciterSpinner, new LinearLayout.LayoutParams(0, dp(42), 1.6f));

        reciterSearchEt = new EditText(this);
        reciterSearchEt.setHint(isAr ? "🔍 بحث..." : "🔍 Search...");
        reciterSearchEt.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        reciterSearchEt.setSingleLine(true);
        reciterSearchEt.setPadding(dp(8), dp(4), dp(8), dp(4));
        LinearLayout.LayoutParams searchLp1 = new LinearLayout.LayoutParams(0, dp(38), 0.8f);
        searchLp1.setMargins(dp(4), 0, dp(4), 0);
        recRow.addView(reciterSearchEt, searchLp1);

        Button randRecBtn = makeIconBtn("🎲", this::pickRandomReciter);
        recRow.addView(randRecBtn, new LinearLayout.LayoutParams(dp(40), dp(38)));
        playerContentCol.addView(recRow);

        // Moshaf (Riwayah) Row
        TextView moshLbl = new TextView(this);
        moshLbl.setText(isAr ? "📀 الرواية / المصحف:" : "📀 Riwayah / Moshaf:");
        moshLbl.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        moshLbl.setTypeface(Typeface.DEFAULT_BOLD);
        playerContentCol.addView(moshLbl);

        moshafSpinner = new Spinner(this);
        LinearLayout.LayoutParams moshLp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, dp(42));
        moshLp.setMargins(0, dp(4), 0, dp(8));
        playerContentCol.addView(moshafSpinner, moshLp);

        // Surah Selector Row (Compact Single Row: Spinner + Search + Random)
        TextView surahLbl = new TextView(this);
        surahLbl.setText(isAr ? "📖 اختر السورة:" : "📖 Select Surah:");
        surahLbl.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        surahLbl.setTypeface(Typeface.DEFAULT_BOLD);
        playerContentCol.addView(surahLbl);

        LinearLayout surahRow = new LinearLayout(this);
        surahRow.setOrientation(LinearLayout.HORIZONTAL);
        surahRow.setGravity(Gravity.CENTER_VERTICAL);
        surahRow.setPadding(0, dp(4), 0, dp(8));

        surahSpinner = new Spinner(this);
        surahRow.addView(surahSpinner, new LinearLayout.LayoutParams(0, dp(42), 1.6f));

        surahSearchEt = new EditText(this);
        surahSearchEt.setHint(isAr ? "🔍 سورة..." : "🔍 Surah...");
        surahSearchEt.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        surahSearchEt.setSingleLine(true);
        surahSearchEt.setPadding(dp(8), dp(4), dp(8), dp(4));
        LinearLayout.LayoutParams searchLp2 = new LinearLayout.LayoutParams(0, dp(38), 0.8f);
        searchLp2.setMargins(dp(4), 0, dp(4), 0);
        surahRow.addView(surahSearchEt, searchLp2);

        Button randSurahBtn = makeIconBtn("🎲", this::pickRandomSurah);
        surahRow.addView(randSurahBtn, new LinearLayout.LayoutParams(dp(40), dp(38)));
        playerContentCol.addView(surahRow);

        // Main Audio Player Controls Card
        LinearLayout ctrlCard = new LinearLayout(this);
        ctrlCard.setOrientation(LinearLayout.VERTICAL);
        ctrlCard.setPadding(dp(12), dp(12), dp(12), dp(12));
        ctrlCard.setTag("card");

        statusTv = new TextView(this);
        statusTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        statusTv.setGravity(Gravity.CENTER);
        ctrlCard.addView(statusTv);

        audioSeekBar = new SeekBar(this);
        audioSeekBar.setMax(1000);
        ctrlCard.addView(audioSeekBar, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        LinearLayout timeRow = new LinearLayout(this);
        timeRow.setOrientation(LinearLayout.HORIZONTAL);
        tElapsedTv = new TextView(this);
        tElapsedTv.setText("0:00");
        tElapsedTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        tRemainingTv = new TextView(this);
        tRemainingTv.setText("-0:00");
        tRemainingTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        tRemainingTv.setGravity(Gravity.END);
        timeRow.addView(tElapsedTv, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        timeRow.addView(tRemainingTv, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        ctrlCard.addView(timeRow);

        // Transport Buttons Row
        LinearLayout transportRow = new LinearLayout(this);
        transportRow.setOrientation(LinearLayout.HORIZONTAL);
        transportRow.setGravity(Gravity.CENTER);
        transportRow.setPadding(0, dp(8), 0, dp(8));

        prevBtn = makeActionButton("⏮", this::playPreviousSurah);
        repeatBtn = makeActionButton(getRepeatLabel(), this::cycleRepeatMode);
        playBtn = makeActionButton(isAr ? "▶ تشغيل" : "▶ Play", this::togglePlayPause);
        muteBtn = makeActionButton("🔊", this::toggleMute);
        nextBtn = makeActionButton("⏭", () -> executeNextAction(true));

        transportRow.addView(prevBtn, new LinearLayout.LayoutParams(dp(48), dp(42)));
        transportRow.addView(repeatBtn, makeMarginLp(dp(56), dp(42), 4));
        transportRow.addView(playBtn, makeMarginLp(dp(105), dp(46), 6));
        transportRow.addView(muteBtn, makeMarginLp(dp(48), dp(42), 4));
        transportRow.addView(nextBtn, new LinearLayout.LayoutParams(dp(48), dp(42)));
        ctrlCard.addView(transportRow);

        // Next Mode & Open Mushaf Button Row
        LinearLayout quickRow = new LinearLayout(this);
        quickRow.setOrientation(LinearLayout.HORIZONTAL);
        quickRow.setGravity(Gravity.CENTER_VERTICAL);

        nextModeBtn = makeActionButton(getNextModeLabel(), this::cycleNextMode);
        Button openMushafFullBtn = makeActionButton(isAr ? "📜 فتح شاشة المصحف" : "📜 Open Mushaf", () -> switchMobileTab("quran"));
        quickRow.addView(nextModeBtn, new LinearLayout.LayoutParams(0, dp(38), 1f));
        LinearLayout.LayoutParams omLp = new LinearLayout.LayoutParams(0, dp(38), 1f);
        omLp.setMargins(dp(6), 0, 0, 0);
        quickRow.addView(openMushafFullBtn, omLp);
        ctrlCard.addView(quickRow);

        // Volume & Speed Sliders
        LinearLayout volRow = new LinearLayout(this);
        volRow.setOrientation(LinearLayout.HORIZONTAL);
        volRow.setGravity(Gravity.CENTER_VERTICAL);
        volRow.setPadding(0, dp(8), 0, 0);
        TextView vIcon = new TextView(this);
        vIcon.setText("🔊");
        volSeekBar = new SeekBar(this);
        volSeekBar.setMax(100);
        volSeekBar.setProgress(volumePercent);
        volValTv = new TextView(this);
        volValTv.setText(volumePercent + "%");
        volValTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        volRow.addView(vIcon);
        volRow.addView(volSeekBar, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        volRow.addView(volValTv);
        ctrlCard.addView(volRow);

        LinearLayout spdRow = new LinearLayout(this);
        spdRow.setOrientation(LinearLayout.HORIZONTAL);
        spdRow.setGravity(Gravity.CENTER_VERTICAL);
        spdRow.setPadding(0, dp(4), 0, 0);
        TextView sIcon = new TextView(this);
        sIcon.setText(isAr ? "السرعة:" : "Speed:");
        sIcon.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        speedSeekBar = new SeekBar(this);
        speedSeekBar.setMax(15); // 0.5x to 2.0x in 0.1 steps
        speedSeekBar.setProgress(Math.round((playbackSpeed - 0.5f) * 10f));
        speedValTv = new TextView(this);
        speedValTv.setText(String.format(Locale.US, "%.1fx", playbackSpeed));
        speedValTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        spdRow.addView(sIcon);
        spdRow.addView(speedSeekBar, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        spdRow.addView(speedValTv);
        ctrlCard.addView(spdRow);

        // Sleep / Stop Timer Row
        LinearLayout stopRow = new LinearLayout(this);
        stopRow.setOrientation(LinearLayout.HORIZONTAL);
        stopRow.setGravity(Gravity.CENTER_VERTICAL);
        stopRow.setPadding(0, dp(6), 0, 0);
        TextView stLbl = new TextView(this);
        stLbl.setText(isAr ? "⏱️ إيقاف بعد:" : "⏱️ Stop after:");
        stLbl.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        stopAfterSpinner = new Spinner(this);
        stopClockTv = new TextView(this);
        stopClockTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        stopRow.addView(stLbl);
        stopRow.addView(stopAfterSpinner, new LinearLayout.LayoutParams(0, dp(38), 1f));
        stopRow.addView(stopClockTv);
        ctrlCard.addView(stopRow);

        playerContentCol.addView(ctrlCard, makeCardLp());

        // Quick Actions Row: Download Current Surah MP3 | Bookmark | Offline Center
        LinearLayout actionsRow = new LinearLayout(this);
        actionsRow.setOrientation(LinearLayout.HORIZONTAL);
        Button dlSurahBtn = makeActionButton(isAr ? "📥 حفظ السورة" : "📥 Save MP3", this::downloadCurrentSurahOffline);
        Button addBmBtn = makeActionButton(isAr ? "📑 إشارة مرجعية" : "📑 Bookmark", this::addCurrentBookmark);
        actionsRow.addView(dlSurahBtn, new LinearLayout.LayoutParams(0, dp(40), 1f));
        LinearLayout.LayoutParams bmLp = new LinearLayout.LayoutParams(0, dp(40), 1f);
        bmLp.setMargins(dp(6), 0, 0, 0);
        actionsRow.addView(addBmBtn, bmLp);
        playerContentCol.addView(actionsRow, makeCardLp());

        // Bookmarks & Listening Stats Container
        bookmarksContainer = new LinearLayout(this);
        bookmarksContainer.setOrientation(LinearLayout.VERTICAL);
        playerContentCol.addView(bookmarksContainer);

    }

    private LinearLayout.LayoutParams makeCardLp() {
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        lp.setMargins(0, 0, 0, dp(10));
        return lp;
    }

    private LinearLayout.LayoutParams makeMarginLp(int w, int h, int marginDp) {
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(w, h);
        lp.setMargins(dp(marginDp), 0, dp(marginDp), 0);
        return lp;
    }

    private void buildQuranPanelColumn() {
        quranPanelCol = new LinearLayout(this);
        quranPanelCol.setOrientation(LinearLayout.VERTICAL);
        quranPanelCol.setPadding(dp(8), dp(4), dp(8), dp(8));

        // 1. Quran Panel Header (Title + A-/A+ Font Zoom + Search Toggle + Collapse Tools Button)
        LinearLayout qpHeader = new LinearLayout(this);
        qpHeader.setOrientation(LinearLayout.HORIZONTAL);
        qpHeader.setGravity(Gravity.CENTER_VERTICAL);
        qpHeader.setPadding(dp(6), dp(4), dp(6), dp(4));

        LinearLayout titleWrap = new LinearLayout(this);
        titleWrap.setOrientation(LinearLayout.VERTICAL);
        qpTitleTv = new TextView(this);
        qpTitleTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        qpTitleTv.setTypeface(Typeface.DEFAULT_BOLD);
        qpMetaTv = new TextView(this);
        qpMetaTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        titleWrap.addView(qpTitleTv);
        titleWrap.addView(qpMetaTv);
        qpHeader.addView(titleWrap, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));

        Button fontMinusBtn = makeIconBtn("A−", () -> changeQuranFontSize(-2));
        Button fontPlusBtn = makeIconBtn("A+", () -> changeQuranFontSize(+2));
        Button searchToggleBtn = makeIconBtn("🔍", () -> {
            if (qpSearchWrap.getVisibility() == View.VISIBLE) {
                qpSearchWrap.setVisibility(View.GONE);
                qpSearchEt.setText("");
            } else {
                qpSearchWrap.setVisibility(View.VISIBLE);
                qpSearchEt.requestFocus();
            }
        });
        Button cornerCollapseBtn = makeIconBtn("🔼", this::toggleToolsCollapse);

        qpHeader.addView(fontMinusBtn, makeSmallBtnLp());
        qpHeader.addView(fontPlusBtn, makeSmallBtnLp());
        qpHeader.addView(searchToggleBtn, makeSmallBtnLp());
        qpHeader.addView(cornerCollapseBtn, makeSmallBtnLp());
        quranPanelCol.addView(qpHeader);

        // 2. Quick Mobile Reciter & Surah Selectors inside Quran Screen
        LinearLayout mobSelectorsRow = new LinearLayout(this);
        mobSelectorsRow.setOrientation(LinearLayout.HORIZONTAL);
        mobSelectorsRow.setPadding(dp(4), dp(2), dp(4), dp(4));
        qpMobReciterSpinner = new Spinner(this);
        qpMobSurahSpinner = new Spinner(this);
        mobSelectorsRow.addView(qpMobReciterSpinner, new LinearLayout.LayoutParams(0, dp(38), 1f));
        LinearLayout.LayoutParams msLp = new LinearLayout.LayoutParams(0, dp(38), 1f);
        msLp.setMargins(dp(4), 0, 0, 0);
        mobSelectorsRow.addView(qpMobSurahSpinner, msLp);
        quranPanelCol.addView(mobSelectorsRow);

        // 3. Quran Panel Mode Tabs: 📖 النص | 🖼️ المصحف المصور | ℹ️ معلومات السورة
        LinearLayout qpTabsRow = new LinearLayout(this);
        qpTabsRow.setOrientation(LinearLayout.HORIZONTAL);
        qpTabsRow.setPadding(dp(4), dp(2), dp(4), dp(4));
        qpTabTextBtn = makeActionButton(isAr ? "📖 النص القرآني" : "📖 Quran Text", () -> switchQpTab("text"));
        qpTabMushafBtn = makeActionButton(isAr ? "🖼️ المصحف المصور" : "🖼️ Mushaf Pages", () -> switchQpTab("mushaf"));
        qpTabInfoBtn = makeActionButton(isAr ? "ℹ️ معلومات السورة" : "ℹ️ Surah Info", () -> switchQpTab("info"));
        qpTabsRow.addView(qpTabTextBtn, new LinearLayout.LayoutParams(0, dp(36), 1f));
        qpTabsRow.addView(qpTabMushafBtn, makeMarginLp(0, dp(36), 4));
        ((LinearLayout.LayoutParams) qpTabMushafBtn.getLayoutParams()).weight = 1f;
        qpTabsRow.addView(qpTabInfoBtn, new LinearLayout.LayoutParams(0, dp(36), 1f));
        quranPanelCol.addView(qpTabsRow);

        // 4. Script & Layout Options Bar (Horizontal Scrollable Pill Buttons)
        HorizontalScrollView optsScroll = new HorizontalScrollView(this);
        optsScroll.setHorizontalScrollBarEnabled(false);
        qpOptsBar = new LinearLayout(this);
        qpOptsBar.setOrientation(LinearLayout.HORIZONTAL);
        qpOptsBar.setPadding(dp(4), dp(2), dp(4), dp(4));

        qpOptsBar.addView(makeScriptBtn(isAr ? "🕋 خط المصحف (15 سطراً)" : "🕋 Mushaf QCF", "qcf"), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        qpOptsBar.addView(makeScriptBtn(isAr ? "🎨 خط التجويد الملون" : "🎨 Colored Tajweed", "tajweed"), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        qpOptsBar.addView(makeScriptBtn(isAr ? "🕌 رسم عثماني" : "🕌 Uthmani", "uthmani"), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        qpOptsBar.addView(makeScriptBtn(isAr ? "✏️ نص إملائي" : "✏️ Plain Text", "simple"), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        qpOptsBar.addView(makeActionButton(
            "pages".equals(textPageMode) ? (isAr ? "↔ صفحات مستقلة" : "↔ Pages") : (isAr ? "↕ تمرير متواصل" : "↕ Scroll"),
            () -> {
                textPageMode = "pages".equals(textPageMode) ? "scroll" : "pages";
                savePreferences();
                renderCurrentQuranTextView();
            }), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        qpOptsBar.addView(makeActionButton(
            "mushaf".equals(mushafPageDist) ? (isAr ? "📖 توزيع المصحف" : "📖 Mushaf Dist") : (isAr ? "📄 سورة مستقلة" : "📄 Single Surah"),
            () -> {
                mushafPageDist = "mushaf".equals(mushafPageDist) ? "surah" : "mushaf";
                savePreferences();
                loadQuranTextAndRender(selectedSurahNum);
            }), makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));

        optsScroll.addView(qpOptsBar);
        quranPanelCol.addView(optsScroll);

        // 5. Search inside Surah Bar
        qpSearchWrap = new LinearLayout(this);
        qpSearchWrap.setOrientation(LinearLayout.HORIZONTAL);
        qpSearchWrap.setVisibility(View.GONE);
        qpSearchWrap.setPadding(dp(6), dp(2), dp(6), dp(4));
        qpSearchEt = new EditText(this);
        qpSearchEt.setHint(isAr ? "🔍 ابحث في آيات السورة أو اكتب رقم الآية..." : "🔍 Search verse text or ayah number...");
        qpSearchEt.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        qpSearchEt.setSingleLine(true);
        qpSearchWrap.addView(qpSearchEt, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, dp(38)));
        quranPanelCol.addView(qpSearchWrap);

        qpSearchEt.addTextChangedListener(new TextWatcher() {
            @Override public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override public void onTextChanged(CharSequence s, int start, int before, int count) {}
            @Override public void afterTextChanged(Editable s) {
                renderCurrentQuranTextView();
            }
        });

        // 6. Colored Tajweed Rules Legend (Auto-hides after 3 seconds when Tajweed mode is selected!)
        tajweedLegendBox = buildTajweedLegendBox();
        quranPanelCol.addView(tajweedLegendBox);

        // 7. Main Content Panes (Text Scroll / Mushaf Image / Surah Info)
        FrameLayout panesFrame = new FrameLayout(this);
        quranPanelCol.addView(panesFrame, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f));

        // Pane A: Quran Text ScrollView
        qpTextScrollView = new ScrollView(this);
        qpTextScrollView.setFillViewport(true);
        qpTextContainer = new LinearLayout(this);
        qpTextContainer.setOrientation(LinearLayout.VERTICAL);
        qpTextContainer.setPadding(dp(8), dp(8), dp(8), dp(16));
        qpTextScrollView.addView(qpTextContainer);
        panesFrame.addView(qpTextScrollView, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        // Touch swipe left/right on qpTextScrollView for page/surah turning
        setupSwipeGesture(qpTextScrollView, true);

        // Pane B: Mushaf Image View
        qpMushafPane = new LinearLayout(this);
        qpMushafPane.setOrientation(LinearLayout.VERTICAL);
        qpMushafPane.setVisibility(View.GONE);

        HorizontalScrollView srcTabsScroll = new HorizontalScrollView(this);
        srcTabsScroll.setHorizontalScrollBarEnabled(false);
        mushafSourceTabsLayout = new LinearLayout(this);
        mushafSourceTabsLayout.setOrientation(LinearLayout.HORIZONTAL);
        mushafSourceTabsLayout.setPadding(dp(4), dp(4), dp(4), dp(4));
        srcTabsScroll.addView(mushafSourceTabsLayout);
        qpMushafPane.addView(srcTabsScroll);

        mushafPageImageView = new ImageView(this);
        mushafPageImageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
        mushafPageImageView.setAdjustViewBounds(true);
        LinearLayout.LayoutParams imgLp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f);
        imgLp.setMargins(dp(4), dp(4), dp(4), dp(4));
        qpMushafPane.addView(mushafPageImageView, imgLp);
        setupSwipeGesture(mushafPageImageView, false);

        LinearLayout mushafNavRow = new LinearLayout(this);
        mushafNavRow.setOrientation(LinearLayout.HORIZONTAL);
        mushafNavRow.setGravity(Gravity.CENTER);
        mushafNavRow.setPadding(dp(8), dp(4), dp(8), dp(4));
        Button mPrevBtn = makeActionButton("◀", () -> navigateMushafImagePage(-1));
        mushafPageLabelTv = new TextView(this);
        mushafPageLabelTv.setGravity(Gravity.CENTER);
        mushafPageLabelTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        Button mNextBtn = makeActionButton("▶", () -> navigateMushafImagePage(+1));
        mushafNavRow.addView(mPrevBtn, new LinearLayout.LayoutParams(dp(50), dp(36)));
        mushafNavRow.addView(mushafPageLabelTv, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        mushafNavRow.addView(mNextBtn, new LinearLayout.LayoutParams(dp(50), dp(36)));
        qpMushafPane.addView(mushafNavRow);

        panesFrame.addView(qpMushafPane, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        // Pane C: Surah Information & Encyclopedia
        qpInfoScrollView = new ScrollView(this);
        qpInfoScrollView.setVisibility(View.GONE);
        qpInfoContainer = new LinearLayout(this);
        qpInfoContainer.setOrientation(LinearLayout.VERTICAL);
        qpInfoContainer.setPadding(dp(12), dp(10), dp(12), dp(20));
        qpInfoScrollView.addView(qpInfoContainer);
        panesFrame.addView(qpInfoScrollView, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        // 8. Independent Text Page Navigation Bar (when textPageMode == "pages")
        qpPageNavBar = new LinearLayout(this);
        qpPageNavBar.setOrientation(LinearLayout.HORIZONTAL);
        qpPageNavBar.setGravity(Gravity.CENTER);
        qpPageNavBar.setPadding(dp(8), dp(4), dp(8), dp(4));
        qpPrevPageBtn = makeActionButton("◀", () -> navigateTextPage(-1));
        qpPageLabelTv = new TextView(this);
        qpPageLabelTv.setGravity(Gravity.CENTER);
        qpPageLabelTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        qpNextPageBtn = makeActionButton("▶", () -> navigateTextPage(+1));
        qpPageNavBar.addView(qpPrevPageBtn, new LinearLayout.LayoutParams(dp(50), dp(36)));
        qpPageNavBar.addView(qpPageLabelTv, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        qpPageNavBar.addView(qpNextPageBtn, new LinearLayout.LayoutParams(dp(50), dp(36)));
        quranPanelCol.addView(qpPageNavBar);
    }

    private Button makeScriptBtn(String label, String scriptId) {
        return makeActionButton(label, () -> {
            currentScript = scriptId;
            savePreferences();
            if ("tajweed".equals(scriptId)) {
                showTajweedLegendTemporarily();
            } else {
                tajweedLegendBox.setVisibility(View.GONE);
            }
            loadQuranTextAndRender(selectedSurahNum);
        });
    }

    private LinearLayout buildTajweedLegendBox() {
        LinearLayout box = new LinearLayout(this);
        box.setOrientation(LinearLayout.VERTICAL);
        box.setPadding(dp(10), dp(6), dp(10), dp(6));
        box.setVisibility(View.GONE);
        box.setTag("card");

        String[][] rules = new String[][]{
            {"#A5A5A5", isAr ? "الحرف الساكن" : "Silent"},
            {"#09B000", isAr ? "غنّة / إخفاء" : "Ghunnah"},
            {"#2FADFF", isAr ? "قلقلة" : "Qalqalah"},
            {"#3F48E6", isAr ? "تفخيم" : "Tafkheem"},
            {"#CE9E00", isAr ? "مدّ طبيعي" : "Madd 2"},
            {"#FF7B00", isAr ? "مدّ منفصل" : "Munfasil"},
            {"#F40000", isAr ? "مدّ متّصل" : "Muttasil"},
            {"#B50000", isAr ? "مدّ لازم" : "Lazim 6"}
        };

        LinearLayout row1 = new LinearLayout(this);
        row1.setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout row2 = new LinearLayout(this);
        row2.setOrientation(LinearLayout.HORIZONTAL);

        for (int i = 0; i < rules.length; i++) {
            TextView tv = new TextView(this);
            tv.setText("● " + rules[i][1]);
            tv.setTextColor(Color.parseColor(rules[i][0]));
            tv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
            tv.setTypeface(Typeface.DEFAULT_BOLD);
            LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f);
            if (i < 4) row1.addView(tv, lp);
            else row2.addView(tv, lp);
        }
        box.addView(row1);
        box.addView(row2);
        return box;
    }

    private final Runnable hideTajweedLegendRunnable = () -> {
        if (tajweedLegendBox != null) tajweedLegendBox.setVisibility(View.GONE);
    };

    private void showTajweedLegendTemporarily() {
        if (tajweedLegendBox == null) return;
        tajweedLegendBox.setVisibility(View.VISIBLE);
        tickHandler.removeCallbacks(hideTajweedLegendRunnable);
        tickHandler.postDelayed(hideTajweedLegendRunnable, 3000); // Auto-hide after 3 seconds
    }

    private LinearLayout buildFloatingMiniPlayer() {
        LinearLayout bar = new LinearLayout(this);
        bar.setOrientation(LinearLayout.VERTICAL);
        bar.setPadding(dp(10), dp(6), dp(10), dp(6));

        fbProgressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        fbProgressBar.setMax(1000);
        bar.addView(fbProgressBar, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, dp(4)));

        LinearLayout row = new LinearLayout(this);
        row.setOrientation(LinearLayout.HORIZONTAL);
        row.setGravity(Gravity.CENTER_VERTICAL);

        LinearLayout infoCol = new LinearLayout(this);
        infoCol.setOrientation(LinearLayout.VERTICAL);
        fbSurahTv = new TextView(this);
        fbSurahTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        fbSurahTv.setTypeface(Typeface.DEFAULT_BOLD);
        fbReciterTv = new TextView(this);
        fbReciterTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        infoCol.addView(fbSurahTv);
        infoCol.addView(fbReciterTv);
        row.addView(infoCol, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));

        fbTimeTv = new TextView(this);
        fbTimeTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        fbTimeTv.setPadding(dp(6), 0, dp(6), 0);
        row.addView(fbTimeTv);

        fbPrevBtn = makeIconBtn("⏮", this::playPreviousSurah);
        fbPlayBtn = makeIconBtn("▶", this::togglePlayPause);
        fbNextBtn = makeIconBtn("⏭", () -> executeNextAction(true));
        fbRepeatBtn = makeIconBtn("🔄", this::cycleRepeatMode);

        row.addView(fbPrevBtn, makeSmallBtnLp());
        row.addView(fbPlayBtn, makeSmallBtnLp());
        row.addView(fbNextBtn, makeSmallBtnLp());
        row.addView(fbRepeatBtn, makeSmallBtnLp());
        bar.addView(row);

        return bar;
    }

    private void updateResponsiveLayoutMode() {
        mainSplitLayout.removeAllViews();
        if (isTabletOrLandscape()) {
            mobileTabStrip.setVisibility(View.GONE);
            playerScrollView.setVisibility(View.VISIBLE);
            quranPanelCol.setVisibility(View.VISIBLE);
            mainSplitLayout.addView(quranPanelCol, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.MATCH_PARENT, 1.35f));
            mainSplitLayout.addView(playerScrollView, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.MATCH_PARENT, 1.0f));
        } else {
            mobileTabStrip.setVisibility(toolsCollapsed ? View.GONE : View.VISIBLE);
            mainSplitLayout.addView(playerScrollView, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
            mainSplitLayout.addView(quranPanelCol, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
            playerScrollView.setVisibility("player".equals(activeMobileTab) ? View.VISIBLE : View.GONE);
            quranPanelCol.setVisibility("quran".equals(activeMobileTab) ? View.VISIBLE : View.GONE);
        }
    }

    private void switchMobileTab(String tab) {
        activeMobileTab = tab;
        updateResponsiveLayoutMode();
        applyPaletteToViews();
    }

    private void toggleToolsCollapse() {
        toolsCollapsed = !toolsCollapsed;
        qpOptsBar.setVisibility(toolsCollapsed ? View.GONE : View.VISIBLE);
        floatingBar.setVisibility(toolsCollapsed ? View.GONE : View.VISIBLE);
        if (!isTabletOrLandscape()) {
            mobileTabStrip.setVisibility(toolsCollapsed ? View.GONE : View.VISIBLE);
        }
        renderCurrentQuranTextView();
    }

    private void switchQpTab(String tab) {
        currentQpTab = tab;
        qpTextScrollView.setVisibility("text".equals(tab) ? View.VISIBLE : View.GONE);
        qpOptsBar.setVisibility("text".equals(tab) && !toolsCollapsed ? View.VISIBLE : View.GONE);
        qpPageNavBar.setVisibility("text".equals(tab) && "pages".equals(textPageMode) ? View.VISIBLE : View.GONE);
        qpMushafPane.setVisibility("mushaf".equals(tab) ? View.VISIBLE : View.GONE);
        qpInfoScrollView.setVisibility("info".equals(tab) ? View.VISIBLE : View.GONE);

        if ("mushaf".equals(tab)) {
            initMushafImageTab(selectedSurahNum);
        } else if ("info".equals(tab)) {
            loadAndRenderSurahInfo(selectedSurahNum);
        }
        applyPaletteToViews();
    }

    private void applyPaletteToViews() {
        if (pal == null) pal = ThemeManager.getPalette(currentTheme);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getWindow().setStatusBarColor(pal.bgSecondary);
            getWindow().setNavigationBarColor(pal.bgSecondary);
        }
        rootContainer.setBackgroundColor(pal.bgPrimary);
        quranPanelCol.setBackgroundColor(pal.mushafPageBg);
        floatingBar.setBackground(ThemeManager.makeRoundedRect(pal.bgSecondary, pal.cardBorder, dp(1), 0));
        applyPaletteRecursive(rootContainer);
    }

    private void applyPaletteRecursive(View v) {
        if (v == null) return;
        if ("card".equals(v.getTag())) {
            v.setBackground(ThemeManager.makeRoundedRect(pal.cardBg, pal.cardBorder, dp(1), dp(12)));
        }
        if (v instanceof Button) {
            Button b = (Button) v;
            boolean isPrimary = (b == playBtn || b == fbPlayBtn ||
                ("player".equals(activeMobileTab) && b == mtabPlayerBtn) ||
                ("quran".equals(activeMobileTab) && b == mtabQuranBtn) ||
                ("text".equals(currentQpTab) && b == qpTabTextBtn) ||
                ("mushaf".equals(currentQpTab) && b == qpTabMushafBtn) ||
                ("info".equals(currentQpTab) && b == qpTabInfoBtn));
            b.setBackground(ThemeManager.makeRoundedRect(
                isPrimary ? pal.accent : pal.accentSoft,
                pal.cardBorder, dp(1), dp(8)));
            b.setTextColor(isPrimary ? 0xFFFFFFFF : pal.textMain);
        } else if (v instanceof EditText) {
            EditText et = (EditText) v;
            et.setBackground(ThemeManager.makeRoundedRect(pal.cardBg, pal.cardBorder, dp(1), dp(8)));
            et.setTextColor(pal.textMain);
            et.setHintTextColor(pal.textSoft);
        } else if (v instanceof TextView) {
            TextView tv = (TextView) v;
            if (!"keep_color".equals(tv.getTag())) {
                tv.setTextColor(pal.textMain);
            }
        }
        if (v instanceof ViewGroup) {
            ViewGroup vg = (ViewGroup) v;
            for (int i = 0; i < vg.getChildCount(); i++) {
                applyPaletteRecursive(vg.getChildAt(i));
            }
        }
    }

    // ==================== SPINNERS & FILTERING ====================

    private void populateReciterSpinner() {
        suppressSpinnerEvents = true;
        List<String> names = new ArrayList<>();
        for (QuranData.ReciterItem r : filteredReciters) names.add(r.name);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, names);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        reciterSpinner.setAdapter(adapter);
        qpMobReciterSpinner.setAdapter(adapter);

        int idx = Math.max(0, Math.min(selectedReciterIdx, filteredReciters.size() - 1));
        reciterSpinner.setSelection(idx);
        qpMobReciterSpinner.setSelection(idx);
        populateMoshafSpinner();
        suppressSpinnerEvents = false;
    }

    private void populateMoshafSpinner() {
        if (filteredReciters.isEmpty()) return;
        int rIdx = Math.max(0, Math.min(selectedReciterIdx, filteredReciters.size() - 1));
        QuranData.ReciterItem r = filteredReciters.get(rIdx);
        List<String> mNames = new ArrayList<>();
        for (QuranData.MoshafItem m : r.moshafs) mNames.add(m.name);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, mNames);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        moshafSpinner.setAdapter(adapter);
        selectedMoshafIdx = Math.max(0, Math.min(selectedMoshafIdx, r.moshafs.size() - 1));
        moshafSpinner.setSelection(selectedMoshafIdx);
    }

    private void populateSurahSpinner() {
        suppressSpinnerEvents = true;
        List<String> sNames = new ArrayList<>();
        int selPos = 0;
        for (int i = 0; i < filteredSurahs.size(); i++) {
            QuranData.SurahMeta s = filteredSurahs.get(i);
            sNames.add(s.number + ". " + (isAr ? s.nameAr : s.nameEn) + " (" + s.ayahCount + ")");
            if (s.number == selectedSurahNum) selPos = i;
        }
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, sNames);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        surahSpinner.setAdapter(adapter);
        qpMobSurahSpinner.setAdapter(adapter);
        surahSpinner.setSelection(selPos);
        qpMobSurahSpinner.setSelection(selPos);
        suppressSpinnerEvents = false;
        updateNowPlayingHeader();
    }

    private void filterReciters(String query) {
        String q = QuranData.normalizeArabic(query.toLowerCase(Locale.ROOT));
        filteredReciters.clear();
        for (QuranData.ReciterItem r : reciters) {
            if (q.isEmpty() || QuranData.normalizeArabic(r.name.toLowerCase(Locale.ROOT)).contains(q)) {
                filteredReciters.add(r);
            }
        }
        if (filteredReciters.isEmpty()) filteredReciters.addAll(reciters);
        selectedReciterIdx = 0;
        populateReciterSpinner();
    }

    private void filterSurahs(String query) {
        String q = QuranData.normalizeArabic(query.toLowerCase(Locale.ROOT));
        filteredSurahs.clear();
        for (QuranData.SurahMeta s : allSurahs) {
            String target = s.number + " " + QuranData.normalizeArabic(s.nameAr) + " " + s.nameEn.toLowerCase(Locale.ROOT);
            if (q.isEmpty() || target.contains(q)) {
                filteredSurahs.add(s);
            }
        }
        if (filteredSurahs.isEmpty()) filteredSurahs.addAll(allSurahs);
        populateSurahSpinner();
    }

    private void wirePlayerControlEvents() {
        reciterSearchEt.addTextChangedListener(new TextWatcher() {
            @Override public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override public void onTextChanged(CharSequence s, int start, int before, int count) {}
            @Override public void afterTextChanged(Editable s) { filterReciters(s.toString()); }
        });

        surahSearchEt.addTextChangedListener(new TextWatcher() {
            @Override public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            @Override public void onTextChanged(CharSequence s, int start, int before, int count) {}
            @Override public void afterTextChanged(Editable s) { filterSurahs(s.toString()); }
        });

        AdapterView.OnItemSelectedListener recListener = new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                if (suppressSpinnerEvents || position < 0 || position >= filteredReciters.size()) return;
                if (selectedReciterIdx == position) return;
                selectedReciterIdx = position;
                selectedMoshafIdx = 0;
                suppressSpinnerEvents = true;
                reciterSpinner.setSelection(position);
                qpMobReciterSpinner.setSelection(position);
                populateMoshafSpinner();
                suppressSpinnerEvents = false;
                savePreferences();
                updateNowPlayingHeader();
                if (autoPlayOnChange) startSelectedPlayback(0);
            }
            @Override public void onNothingSelected(AdapterView<?> parent) {}
        };
        reciterSpinner.setOnItemSelectedListener(recListener);
        qpMobReciterSpinner.setOnItemSelectedListener(recListener);

        moshafSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                if (suppressSpinnerEvents) return;
                selectedMoshafIdx = position;
                updateNowPlayingHeader();
            }
            @Override public void onNothingSelected(AdapterView<?> parent) {}
        });

        AdapterView.OnItemSelectedListener surahListener = new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                if (suppressSpinnerEvents || position < 0 || position >= filteredSurahs.size()) return;
                int newNum = filteredSurahs.get(position).number;
                if (selectedSurahNum == newNum) return;
                selectedSurahNum = newNum;
                suppressSpinnerEvents = true;
                surahSpinner.setSelection(position);
                qpMobSurahSpinner.setSelection(position);
                suppressSpinnerEvents = false;
                savePreferences();
                updateNowPlayingHeader();
                loadQuranTextAndRender(selectedSurahNum);
                if ("mushaf".equals(currentQpTab)) initMushafImageTab(selectedSurahNum);
                if ("info".equals(currentQpTab)) loadAndRenderSurahInfo(selectedSurahNum);
                if (autoPlayOnChange) startSelectedPlayback(0);
            }
            @Override public void onNothingSelected(AdapterView<?> parent) {}
        };
        surahSpinner.setOnItemSelectedListener(surahListener);
        qpMobSurahSpinner.setOnItemSelectedListener(surahListener);

        audioSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser && isPrepared && mediaPlayer != null) {
                    int dur = mediaPlayer.getDuration();
                    if (dur > 0) {
                        mediaPlayer.seekTo((int) ((progress / 1000.0) * dur));
                        updateSyncHighlightAndProgress();
                    }
                }
            }
            @Override public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override public void onStopTrackingTouch(SeekBar seekBar) {}
        });

        volSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                volumePercent = progress;
                isMuted = (progress == 0);
                volValTv.setText(progress + "%");
                applyVolumeToPlayer();
                savePreferences();
            }
            @Override public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override public void onStopTrackingTouch(SeekBar seekBar) {}
        });

        speedSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                playbackSpeed = 0.5f + (progress * 0.1f);
                speedValTv.setText(String.format(Locale.US, "%.1fx", playbackSpeed));
                applySpeedToPlayer();
                savePreferences();
            }
            @Override public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override public void onStopTrackingTouch(SeekBar seekBar) {}
        });

        String[] stopLabels = isAr
            ? new String[]{"لا يوجد", "عند انتهاء السورة", "عند انتهاء المصحف", "15 دقيقة", "30 دقيقة", "60 دقيقة"}
            : new String[]{"None", "End of Surah", "End of Mushaf", "15 min", "30 min", "60 min"};
        final String[] stopValues = new String[]{"none", "endSurah", "endMoshaf", "15", "30", "60"};
        ArrayAdapter<String> stopAdapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, stopLabels);
        stopAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        stopAfterSpinner.setAdapter(stopAdapter);
        stopAfterSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                stopAfterMode = stopValues[position];
                if (position >= 3) {
                    int mins = Integer.parseInt(stopAfterMode);
                    stopTimerEndMs = System.currentTimeMillis() + mins * 60_000L;
                } else {
                    stopTimerEndMs = 0;
                    stopClockTv.setText("");
                }
            }
            @Override public void onNothingSelected(AdapterView<?> parent) {}
        });

        refreshBookmarksView();
    }

    // ==================== NATIVE MEDIAPLAYER & PRECISION SYNC ====================

    private void initMediaPlayer() {
        mediaPlayer = new MediaPlayer();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            mediaPlayer.setAudioAttributes(new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_MEDIA)
                .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                .build());
        }
        mediaPlayer.setOnPreparedListener(mp -> {
            isPrepared = true;
            applyVolumeToPlayer();
            applySpeedToPlayer();
            mp.start();
            isPlaying = true;
            updateTransportButtonsUI();
            statusTv.setText(isAr ? "🎧 جاري التلاوة..." : "🎧 Playing...");
            showMediaNotification();
        });
        mediaPlayer.setOnCompletionListener(mp -> onAudioSurahCompleted());
        mediaPlayer.setOnErrorListener((mp, what, extra) -> {
            isPlaying = false;
            updateTransportButtonsUI();
            statusTv.setText(isAr ? "⚠️ تعذر تشغيل الملف الصوتي (تحقق من الاتصال)" : "⚠️ Audio playback error");
            return true;
        });
    }

    private void startSelectedPlayback(final int seekToAyahOnStart) {
        if (filteredReciters.isEmpty()) return;
        final QuranData.ReciterItem r = filteredReciters.get(Math.max(0, Math.min(selectedReciterIdx, filteredReciters.size() - 1)));
        final QuranData.MoshafItem m = r.moshafs.get(Math.max(0, Math.min(selectedMoshafIdx, r.moshafs.size() - 1)));
        final int surahN = selectedSurahNum;

        statusTv.setText(isAr ? "⏳ جاري تحضير التلاوة..." : "⏳ Preparing recitation...");
        isPrepared = false;
        isPlaying = false;
        currentTimings.clear();
        updateTransportButtonsUI();

        NativeNetAndCache.runBg(() -> {
            String playUrl;
            if (r.isPrecision && r.audioServer == null) {
                NativeNetAndCache.PrecisionAudioResult pRes = NativeNetAndCache.fetchPrecisionAudioSync(this, r.precisionQid, surahN);
                if (pRes != null && pRes.audioUrl != null && !pRes.audioUrl.isEmpty()) {
                    playUrl = pRes.audioUrl;
                    currentTimings = pRes.timings;
                } else {
                    playUrl = null;
                }
            } else {
                String base = r.audioServer != null ? r.audioServer : m.server;
                if (!base.endsWith("/")) base += "/";
                playUrl = base + String.format(Locale.US, "%03d.mp3", surahN);
            }

            final String finalUrl = playUrl;
            final File cachedAudio = finalUrl != null ? NativeNetAndCache.getCachedAudioFileIfPresent(this, finalUrl) : null;

            NativeNetAndCache.runUi(() -> {
                if (finalUrl == null) {
                    statusTv.setText(isAr ? "⚠️ تعذر جلب رابط التلاوة" : "⚠️ Failed to fetch audio link");
                    return;
                }
                try {
                    mediaPlayer.reset();
                    if (cachedAudio != null) {
                        mediaPlayer.setDataSource(cachedAudio.getAbsolutePath());
                    } else {
                        mediaPlayer.setDataSource(finalUrl);
                    }
                    mediaPlayer.setOnPreparedListener(mp -> {
                        isPrepared = true;
                        applyVolumeToPlayer();
                        applySpeedToPlayer();
                        if (seekToAyahOnStart > 0) {
                            seekToAyahNumber(seekToAyahOnStart);
                        }
                        mp.start();
                        isPlaying = true;
                        updateTransportButtonsUI();
                        QuranData.SurahMeta sm = allSurahs.get(surahN - 1);
                        statusTv.setText("🎧 " + (isAr ? sm.nameAr : sm.nameEn) + " — " + r.cleanName);
                        showMediaNotification();
                    });
                    mediaPlayer.prepareAsync();
                } catch (Exception e) {
                    statusTv.setText(isAr ? "⚠️ تعذر بدء الصوت" : "⚠️ Audio start failed");
                }
            });
        });
    }

    private void togglePlayPause() {
        if (mediaPlayer == null) return;
        if (isPrepared) {
            if (mediaPlayer.isPlaying()) {
                mediaPlayer.pause();
                isPlaying = false;
            } else {
                mediaPlayer.start();
                isPlaying = true;
            }
            updateTransportButtonsUI();
        } else {
            startSelectedPlayback(0);
        }
    }

    private void seekToAyahNumber(int ayahNum) {
        if (!isPrepared || mediaPlayer == null) {
            startSelectedPlayback(ayahNum);
            return;
        }
        if (!currentTimings.isEmpty()) {
            for (QuranData.AyahTiming t : currentTimings) {
                if (t.ayah == ayahNum) {
                    mediaPlayer.seekTo((int) t.fromMs);
                    if (!mediaPlayer.isPlaying()) {
                        mediaPlayer.start();
                        isPlaying = true;
                        updateTransportButtonsUI();
                    }
                    updateSyncHighlightAndProgress();
                    return;
                }
            }
        }
        int totalAyahs = QuranData.AYAH_COUNTS[selectedSurahNum - 1];
        int dur = mediaPlayer.getDuration();
        if (dur > 0 && totalAyahs > 0) {
            int pos = (int) (((ayahNum - 1.0) / totalAyahs) * dur);
            mediaPlayer.seekTo(pos);
            if (!mediaPlayer.isPlaying()) {
                mediaPlayer.start();
                isPlaying = true;
                updateTransportButtonsUI();
            }
        }
    }

    private void onAudioSurahCompleted() {
        isPlaying = false;
        updateTransportButtonsUI();

        if ("endSurah".equals(stopAfterMode)) {
            Toast.makeText(this, isAr ? "⏹️ تم إيقاف التلاوة عند انتهاء السورة" : "⏹️ Stopped at end of Surah", Toast.LENGTH_SHORT).show();
            return;
        }

        // Handle Repeat Modes (1x, 2x, 3x, Infinite)
        if (repeatMode == 4 || (repeatMode > 0 && repeatCount < repeatMode)) {
            repeatCount++;
            mediaPlayer.seekTo(0);
            mediaPlayer.start();
            isPlaying = true;
            updateTransportButtonsUI();
            return;
        }
        repeatCount = 0;

        // Khatm Al-Quran alert when Surat An-Nas (114) finishes!
        if (selectedSurahNum == 114 && nextMode == 0) {
            new AlertDialog.Builder(this)
                .setTitle(isAr ? "🎉 تقبل الله طاعتكم — ختم المصحف الشريف" : "🎉 Khatm Al-Quran Completed")
                .setMessage(isAr
                    ? "الحمد لله الذي بنعمته تتم الصالحات. أتممت الاستماع إلى سورة الناس وخاتمة المصحف الشريف."
                    : "Praise be to Allah. You have completed listening to Surat An-Nas and the Noble Quran.")
                .setPositiveButton(isAr ? "الحمد لله" : "Alhamdulillah", null)
                .show();
            return;
        }

        executeNextAction(false);
    }

    private void executeNextAction(boolean manual) {
        if (nextMode == 0) {
            playNextSurah();
        } else if (nextMode == 1) {
            pickRandomSurah();
        } else if (nextMode == 2) {
            pickRandomReciter();
        } else {
            pickRandomReciter();
            pickRandomSurah();
        }
    }

    private void playNextSurah() {
        if (selectedSurahNum < 114) {
            selectSurahByNumber(selectedSurahNum + 1, true);
        }
    }

    private void playPreviousSurah() {
        if (selectedSurahNum > 1) {
            selectSurahByNumber(selectedSurahNum - 1, true);
        }
    }

    private void pickRandomReciter() {
        if (filteredReciters.isEmpty()) return;
        selectedReciterIdx = random.nextInt(filteredReciters.size());
        populateReciterSpinner();
        startSelectedPlayback(0);
    }

    private void pickRandomSurah() {
        int nextNum = 1 + random.nextInt(114);
        selectSurahByNumber(nextNum, true);
    }

    private void selectSurahByNumber(int surahNum, boolean autoStart) {
        selectedSurahNum = Math.max(1, Math.min(114, surahNum));
        savePreferences();
        populateSurahSpinner();
        loadQuranTextAndRender(selectedSurahNum);
        if ("mushaf".equals(currentQpTab)) initMushafImageTab(selectedSurahNum);
        if ("info".equals(currentQpTab)) loadAndRenderSurahInfo(selectedSurahNum);
        if (autoStart) startSelectedPlayback(0);
    }

    // ==================== NATIVE 15-LINE MUSHAF & TAJWEED RENDERER ====================

    private final Map<Integer, List<NativeNetAndCache.AyahTextItem>> surahTextMap = new HashMap<>();
    private final Map<String, Typeface> loadedPageTypefaces = new HashMap<>();

    private void loadQuranTextAndRender(final int surahNum) {
        currentSurahPageRanges = QuranData.getSurahPageRanges(this, surahNum);
        currentTextPageIdx = 0;

        QuranData.SurahMeta sm = allSurahs.get(surahNum - 1);
        qpTitleTv.setText((isAr ? "سورة " + sm.nameAr : "Surah " + sm.nameEn));
        qpMetaTv.setText(sm.getTypeLabel(isAr) + " • " + sm.ayahCount + (isAr ? " آية • الجزء " : " verses • Juz ") + sm.juz);

        // Render immediately with QCF glyphs or cached text, then load page fonts & plain text in background
        renderCurrentQuranTextView();

        NativeNetAndCache.runBg(() -> {
            // 1. Load plain/uthmani text for current surah + shared neighbor surahs on the same page
            List<Integer> surahsToFetch = new ArrayList<>();
            surahsToFetch.add(surahNum);
            if ("mushaf".equals(mushafPageDist)) {
                for (int[] r : currentSurahPageRanges) {
                    int pg = r[2];
                    for (int[] seg : QuranData.getAllSegmentsOnPage(this, pg)) {
                        if (!surahsToFetch.contains(seg[0])) surahsToFetch.add(seg[0]);
                    }
                }
            }
            for (int sn : surahsToFetch) {
                if (!surahTextMap.containsKey(sn)) {
                    List<NativeNetAndCache.AyahTextItem> items = NativeNetAndCache.fetchSurahTextSync(this, sn);
                    if (!items.isEmpty()) {
                        synchronized (surahTextMap) {
                            surahTextMap.put(sn, items);
                        }
                    }
                }
            }

            // 2. If QCF or Tajweed script is active, load the per-page TTF fonts (with Dark CPAL inversion when pal.isDark!)
            if ("qcf".equals(currentScript) || "tajweed".equals(currentScript)) {
                for (int[] r : currentSurahPageRanges) {
                    int pg = r[2];
                    Typeface tf = NativeNetAndCache.loadPageFontSync(this, currentScript, pg, pal.isDark);
                    if (tf != null) {
                        synchronized (loadedPageTypefaces) {
                            loadedPageTypefaces.put(currentScript + "_" + pg + "_" + pal.isDark, tf);
                        }
                    }
                }
            }

            NativeNetAndCache.runUi(() -> {
                if (selectedSurahNum == surahNum) {
                    renderCurrentQuranTextView();
                }
            });
        });
    }

    private void renderCurrentQuranTextView() {
        qpTextContainer.removeAllViews();
        ayahViewMap.clear();

        boolean isPages = "pages".equals(textPageMode);
        qpPageNavBar.setVisibility("text".equals(currentQpTab) && isPages ? View.VISIBLE : View.GONE);

        List<int[]> pagesToRender = new ArrayList<>();
        if (isPages && !currentSurahPageRanges.isEmpty()) {
            currentTextPageIdx = Math.max(0, Math.min(currentTextPageIdx, currentSurahPageRanges.size() - 1));
            pagesToRender.add(currentSurahPageRanges.get(currentTextPageIdx));
            int pgNum = currentSurahPageRanges.get(currentTextPageIdx)[2];
            qpPageLabelTv.setText((isAr ? "صفحة " : "Page ") + pgNum + " (" + (currentTextPageIdx + 1) + "/" + currentSurahPageRanges.size() + ")");
        } else {
            pagesToRender.addAll(currentSurahPageRanges);
        }

        String searchQuery = qpSearchEt != null ? QuranData.normalizeArabic(qpSearchEt.getText().toString()) : "";

        // Calculate calibrated font size so 15 Mushaf lines fit cleanly inside screen width & height
        int screenW = getResources().getDisplayMetrics().widthPixels;
        int panelW = isTabletOrLandscape() ? (int) (screenW * 0.56f) : screenW;
        float baseSp = Math.max(15f, Math.min(28f, (panelW / getResources().getDisplayMetrics().density) / 17.5f));
        float zoomFactor = qpFontSize / 24.0f;
        float finalSp = Math.max(14f, Math.min(42f, baseSp * zoomFactor));

        for (int pIdx = 0; pIdx < pagesToRender.size(); pIdx++) {
            int[] pRange = pagesToRender.get(pIdx);
            int pageNum = pRange[2];

            LinearLayout pageCard = new LinearLayout(this);
            pageCard.setOrientation(LinearLayout.VERTICAL);
            pageCard.setPadding(dp(10), dp(10), dp(10), dp(12));
            pageCard.setBackground(ThemeManager.makeRoundedRect(pal.mushafPageBg, pal.cardBorder, dp(1), dp(12)));
            LinearLayout.LayoutParams pageLp = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            pageLp.setMargins(0, 0, 0, dp(10));

            List<int[]> segments = "mushaf".equals(mushafPageDist)
                ? QuranData.getAllSegmentsOnPage(this, pageNum)
                : Collections.singletonList(new int[]{selectedSurahNum, pRange[0], pRange[1], pageNum});

            Typeface pageTf;
            synchronized (loadedPageTypefaces) {
                pageTf = loadedPageTypefaces.get(currentScript + "_" + pageNum + "_" + pal.isDark);
            }

            for (int[] seg : segments) {
                int segSurah = seg[0];
                int startAy = seg[1];
                int endAy = seg[2];
                QuranData.SurahMeta sm = allSurahs.get(segSurah - 1);

                // Ornate Surah Banner + Basmalah at start of Surah
                if (startAy == 1 || (!"mushaf".equals(mushafPageDist) && pIdx == 0)) {
                    pageCard.addView(buildSurahHeaderBanner(sm));
                }

                List<NativeNetAndCache.AyahTextItem> plainList;
                synchronized (surahTextMap) {
                    plainList = surahTextMap.get(segSurah);
                }

                // If QCF or Tajweed font is loaded and no text search filter is active, render exact 15-line Mushaf layout!
                if (("qcf".equals(currentScript) || "tajweed".equals(currentScript)) && pageTf != null && searchQuery.isEmpty()) {
                    render15LineQcfSegment(pageCard, segSurah, startAy, endAy, pageTf, finalSp);
                } else {
                    renderStandardAyahsSegment(pageCard, segSurah, startAy, endAy, plainList, pageTf, finalSp, searchQuery);
                }
            }

            // Page Footer Pill
            TextView footerTv = new TextView(this);
            footerTv.setText("۞ " + (isAr ? "صفحة " : "Page ") + QuranData.toArabicDigits(pageNum) + " ۞");
            footerTv.setGravity(Gravity.CENTER);
            footerTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
            footerTv.setPadding(0, dp(8), 0, dp(2));
            footerTv.setTextColor(pal.textSoft);
            footerTv.setTag("keep_color");
            pageCard.addView(footerTv);

            qpTextContainer.addView(pageCard, pageLp);
        }

        updateSyncHighlightAndProgress();
    }

    private View buildSurahHeaderBanner(QuranData.SurahMeta sm) {
        LinearLayout wrap = new LinearLayout(this);
        wrap.setOrientation(LinearLayout.VERTICAL);
        wrap.setPadding(0, dp(4), 0, dp(6));

        LinearLayout banner = new LinearLayout(this);
        banner.setOrientation(LinearLayout.HORIZONTAL);
        banner.setGravity(Gravity.CENTER_VERTICAL);
        banner.setPadding(dp(12), dp(8), dp(12), dp(8));
        banner.setBackground(ThemeManager.makeRoundedRect(pal.accentSoft, pal.accent, dp(2), dp(10)));

        TextView rightMeta = new TextView(this);
        rightMeta.setText(sm.getTypeLabel(isAr));
        rightMeta.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);

        TextView centerTitle = new TextView(this);
        centerTitle.setText("❖ سُورَةُ " + sm.nameAr + " ❖");
        centerTitle.setTextSize(TypedValue.COMPLEX_UNIT_SP, 17);
        centerTitle.setTypeface(Typeface.DEFAULT_BOLD);
        centerTitle.setGravity(Gravity.CENTER);

        TextView leftMeta = new TextView(this);
        leftMeta.setText(QuranData.toArabicDigits(sm.ayahCount) + (isAr ? " آية" : " v"));
        leftMeta.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);

        banner.addView(rightMeta);
        banner.addView(centerTitle, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f));
        banner.addView(leftMeta);
        wrap.addView(banner);

        if (sm.number != 1 && sm.number != 9) {
            TextView basmalah = new TextView(this);
            basmalah.setText("۞ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ۞");
            basmalah.setGravity(Gravity.CENTER);
            basmalah.setTextSize(TypedValue.COMPLEX_UNIT_SP, 18);
            basmalah.setPadding(0, dp(6), 0, dp(2));
            basmalah.setTextColor(pal.accent);
            basmalah.setTag("keep_color");
            wrap.addView(basmalah);
        }
        return wrap;
    }

    private void render15LineQcfSegment(LinearLayout parent, final int segSurah, int startAy, int endAy, Typeface pageTf, float fontSp) {
        // Group QCF glyphs by exact Mushaf lines (\n splits inside qcf_data.json)
        List<List<int[]>> linesAyahs = new ArrayList<>();
        List<List<String>> linesGlyphs = new ArrayList<>();
        List<int[]> curLineAyahs = new ArrayList<>();
        List<String> curLineGlyphs = new ArrayList<>();

        for (int an = startAy; an <= endAy; an++) {
            String raw = QuranData.getQcfAyahGlyphs(this, segSurah, an).replace("\r", "");
            String[] splits = raw.split("\n", -1);
            for (int idx = 0; idx < splits.length; idx++) {
                String part = splits[idx].replaceAll("\\s+", "");
                if (idx > 0) {
                    if (!curLineGlyphs.isEmpty()) {
                        linesAyahs.add(curLineAyahs);
                        linesGlyphs.add(curLineGlyphs);
                    }
                    curLineAyahs = new ArrayList<>();
                    curLineGlyphs = new ArrayList<>();
                }
                if (!part.isEmpty()) {
                    // Insert thin spaces between QCF glyphs so lines justify smoothly
                    StringBuilder gSb = new StringBuilder();
                    for (int c = 0; c < part.length(); c++) {
                        if (c > 0) gSb.append(" ");
                        gSb.append(part.charAt(c));
                    }
                    curLineAyahs.add(new int[]{segSurah, an});
                    curLineGlyphs.add(gSb.toString());
                }
            }
        }
        if (!curLineGlyphs.isEmpty()) {
            linesAyahs.add(curLineAyahs);
            linesGlyphs.add(curLineGlyphs);
        }

        for (int l = 0; l < linesGlyphs.size(); l++) {
            List<int[]> lineMeta = linesAyahs.get(l);
            List<String> lineStrs = linesGlyphs.get(l);

            TextView lineTv = new TextView(this);
            lineTv.setTypeface(pageTf);
            lineTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, fontSp);
            lineTv.setGravity(Gravity.CENTER);
            lineTv.setPadding(dp(2), dp(2), dp(2), dp(2));
            lineTv.setTextColor(pal.textMain);
            lineTv.setMovementMethod(LinkMovementMethod.getInstance());
            lineTv.setHighlightColor(Color.TRANSPARENT);

            SpannableStringBuilder ssb = new SpannableStringBuilder();
            for (int s = 0; s < lineStrs.size(); s++) {
                if (s > 0) ssb.append(" ");
                final int sNum = lineMeta.get(s)[0];
                final int aNum = lineMeta.get(s)[1];
                int spanStart = ssb.length();
                ssb.append(lineStrs.get(s));
                int spanEnd = ssb.length();

                if (autoHighlight && sNum == selectedSurahNum && aNum == activeHighlightedAyah) {
                    ssb.setSpan(new BackgroundColorSpan(pal.highlightBg), spanStart, spanEnd, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                }

                ssb.setSpan(new ClickableSpan() {
                    @Override
                    public void onClick(@NonNull View widget) {
                        if (sNum != selectedSurahNum) {
                            selectedSurahNum = sNum;
                            populateSurahSpinner();
                            loadQuranTextAndRender(sNum);
                            startSelectedPlayback(aNum);
                        } else {
                            seekToAyahNumber(aNum);
                        }
                    }
                    @Override
                    public void updateDrawState(@NonNull TextPaint ds) {
                        ds.setUnderlineText(false);
                    }
                }, spanStart, spanEnd, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);

                ayahViewMap.put(sNum + ":" + aNum, lineTv);
            }

            lineTv.setText(ssb);
            parent.addView(lineTv, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        }
    }

    private void renderStandardAyahsSegment(LinearLayout parent, final int segSurah, int startAy, int endAy,
                                            List<NativeNetAndCache.AyahTextItem> plainList, Typeface pageTf,
                                            float fontSp, String searchQuery) {
        for (int an = startAy; an <= endAy; an++) {
            final int ayahNum = an;
            String txt = "";
            if (plainList != null) {
                for (NativeNetAndCache.AyahTextItem item : plainList) {
                    if (item.numberInSurah == an) {
                        txt = "simple".equals(currentScript) ? item.simple : item.uthmani;
                        break;
                    }
                }
            }
            if (txt.isEmpty()) {
                txt = (isAr ? "الآية " : "Verse ") + QuranData.toArabicDigits(an);
            }
            if (!searchQuery.isEmpty()) {
                boolean matchNum = String.valueOf(an).equals(searchQuery);
                boolean matchTxt = QuranData.normalizeArabic(txt).contains(searchQuery);
                if (!matchNum && !matchTxt) continue;
            }

            TextView ayahTv = new TextView(this);
            String fullLine = txt + " ﴿" + QuranData.toArabicDigits(an) + "﴾";
            ayahTv.setText(fullLine);
            ayahTv.setTextSize(TypedValue.COMPLEX_UNIT_SP, fontSp);
            ayahTv.setPadding(dp(10), dp(6), dp(10), dp(6));
            ayahTv.setGravity(Gravity.CENTER_HORIZONTAL);
            if (autoHighlight && segSurah == selectedSurahNum && an == activeHighlightedAyah) {
                ayahTv.setBackground(ThemeManager.makeRoundedRect(pal.highlightBg, pal.accent, dp(1), dp(8)));
            }
            ayahTv.setOnClickListener(v -> {
                if (segSurah != selectedSurahNum) {
                    selectedSurahNum = segSurah;
                    populateSurahSpinner();
                    loadQuranTextAndRender(segSurah);
                    startSelectedPlayback(ayahNum);
                } else {
                    seekToAyahNumber(ayahNum);
                }
            });
            ayahViewMap.put(segSurah + ":" + an, ayahTv);
            parent.addView(ayahTv, new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        }
    }

    private void navigateTextPage(int delta) {
        if (currentSurahPageRanges.isEmpty()) return;
        int nextIdx = currentTextPageIdx + delta;
        if (nextIdx >= 0 && nextIdx < currentSurahPageRanges.size()) {
            currentTextPageIdx = nextIdx;
            renderCurrentQuranTextView();
            qpTextScrollView.scrollTo(0, 0);
        } else if (delta > 0 && selectedSurahNum < 114) {
            selectSurahByNumber(selectedSurahNum + 1, isPlaying);
        } else if (delta < 0 && selectedSurahNum > 1) {
            selectSurahByNumber(selectedSurahNum - 1, isPlaying);
        }
    }

    private void changeQuranFontSize(int delta) {
        qpFontSize = Math.max(16, Math.min(40, qpFontSize + delta));
        savePreferences();
        renderCurrentQuranTextView();
    }

    // ==================== MUSHAF IMAGE TAB (WITH DARK MODE SMART FILTER) ====================

    private void initMushafImageTab(int surahNum) {
        mushafSourceTabsLayout.removeAllViews();
        for (int i = 0; i < QuranData.MUSHAF_SOURCES.length; i++) {
            final int idx = i;
            QuranData.MushafSource src = QuranData.MUSHAF_SOURCES[i];
            Button b = makeActionButton(src.label, () -> {
                mushafSourceIdx = idx;
                savePreferences();
                initMushafImageTab(selectedSurahNum);
            });
            if (i == mushafSourceIdx) {
                b.setBackground(ThemeManager.makeRoundedRect(pal.accent, pal.cardBorder, dp(1), dp(8)));
                b.setTextColor(0xFFFFFFFF);
            }
            mushafSourceTabsLayout.addView(b, makeMarginLp(ViewGroup.LayoutParams.WRAP_CONTENT, dp(34), 3));
        }

        mushafPagesList.clear();
        List<int[]> ranges = QuranData.getSurahPageRanges(this, surahNum);
        for (int[] r : ranges) {
            if (!mushafPagesList.contains(r[2])) mushafPagesList.add(r[2]);
        }
        if (mushafPagesList.isEmpty()) {
            mushafPagesList.add(QuranData.SURAH_START_PAGES[surahNum - 1]);
        }
        currentMushafPageIdx = 0;
        renderMushafImagePage();
    }

    private void renderMushafImagePage() {
        if (mushafPagesList.isEmpty()) return;
        currentMushafPageIdx = Math.max(0, Math.min(currentMushafPageIdx, mushafPagesList.size() - 1));
        final int pageNum = mushafPagesList.get(currentMushafPageIdx);
        mushafPageLabelTv.setText((isAr ? "صفحة " : "Page ") + pageNum + " (" + (currentMushafPageIdx + 1) + "/" + mushafPagesList.size() + ")");

        // Apply smart Dark Mode inversion filter on Mushaf page images when dark theme is active
        if (pal.isDark) {
            mushafPageImageView.setBackgroundColor(0xFF141820);
            float[] negMatrix = {
                -0.90f,  0,      0,     0, 240,
                 0,     -0.90f,  0,     0, 240,
                 0,      0,     -0.88f, 0, 235,
                 0,      0,      0,     1,   0
            };
            mushafPageImageView.setColorFilter(new ColorMatrixColorFilter(negMatrix));
        } else {
            mushafPageImageView.setBackgroundColor(0xFFFFFFFF);
            mushafPageImageView.clearColorFilter();
        }

        NativeNetAndCache.runBg(() -> {
            final Bitmap bm = NativeNetAndCache.loadMushafPageBitmapSync(this, mushafSourceIdx, pageNum);
            NativeNetAndCache.runUi(() -> {
                if (bm != null) {
                    mushafPageImageView.setImageBitmap(bm);
                } else {
                    Toast.makeText(this, isAr ? "⏳ جاري تحميل صورة الصفحة..." : "⏳ Loading page image...", Toast.LENGTH_SHORT).show();
                }
            });
        });
    }

    private void navigateMushafImagePage(int delta) {
        if (mushafPagesList.isEmpty()) return;
        int next = currentMushafPageIdx + delta;
        if (next >= 0 && next < mushafPagesList.size()) {
            currentMushafPageIdx = next;
            renderMushafImagePage();
        } else if (delta > 0 && selectedSurahNum < 114) {
            selectSurahByNumber(selectedSurahNum + 1, isPlaying);
        } else if (delta < 0 && selectedSurahNum > 1) {
            selectSurahByNumber(selectedSurahNum - 1, isPlaying);
        }
    }

    // ==================== SURAH INFO & ENCYCLOPEDIA TAB ====================

    private void loadAndRenderSurahInfo(final int surahNum) {
        qpInfoContainer.removeAllViews();
        QuranData.SurahMeta sm = allSurahs.get(surahNum - 1);

        LinearLayout hero = new LinearLayout(this);
        hero.setOrientation(LinearLayout.VERTICAL);
        hero.setPadding(dp(14), dp(14), dp(14), dp(14));
        hero.setTag("card");

        TextView title = new TextView(this);
        title.setText((isAr ? "سورة " : "Surah ") + sm.nameAr + " — " + sm.nameEn);
        title.setTextSize(TypedValue.COMPLEX_UNIT_SP, 18);
        title.setTypeface(Typeface.DEFAULT_BOLD);
        hero.addView(title);

        TextView details = new TextView(this);
        details.setText(
            (isAr ? "• المعنى بالإنجليزية: " : "• Meaning: ") + sm.meaningEn + "\n" +
            (isAr ? "• الترتيب في المصحف: " : "• Mushaf Order: ") + sm.number + "\n" +
            (isAr ? "• عدد الآيات: " : "• Verses Count: ") + sm.ayahCount + "\n" +
            (isAr ? "• النوع: " : "• Type: ") + sm.getTypeLabel(isAr) + "\n" +
            (isAr ? "• الجزء: " : "• Juz: ") + sm.juz + "\n" +
            (isAr ? "• ترتيب النزول: " : "• Revelation Order: ") + sm.revOrder + "\n" +
            (isAr ? "• صفحة البداية: " : "• Start Page: ") + sm.startPage
        );
        details.setTextSize(TypedValue.COMPLEX_UNIT_SP, 14);
        details.setPadding(0, dp(8), 0, 0);
        hero.addView(details);
        qpInfoContainer.addView(hero);

        NativeNetAndCache.runBg(() -> {
            final JSONObject infoJson = NativeNetAndCache.fetchSurahInfoSync(this, surahNum);
            NativeNetAndCache.runUi(() -> {
                if (infoJson == null || selectedSurahNum != surahNum) return;
                String[][] keys = new String[][]{
                    {"introduction", isAr ? "📖 نبذة عن السورة" : "📖 Introduction"},
                    {"topics", isAr ? "📌 موضوعات السورة" : "📌 Topics"},
                    {"purposes", isAr ? "🎯 مقاصد السورة" : "🎯 Purposes"},
                    {"revelation", isAr ? "🌙 أسباب النزول" : "🌙 Revelation"},
                    {"grace", isAr ? "✨ فضل السورة" : "✨ Virtues"}
                };
                for (String[] kv : keys) {
                    JSONObject sec = infoJson.optJSONObject(kv[0]);
                    String val = sec != null ? sec.optString("value", "").trim() : "";
                    if (!val.isEmpty()) {
                        LinearLayout card = new LinearLayout(this);
                        card.setOrientation(LinearLayout.VERTICAL);
                        card.setPadding(dp(12), dp(10), dp(12), dp(10));
                        card.setTag("card");
                        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
                        lp.setMargins(0, dp(8), 0, 0);

                        TextView h = new TextView(this);
                        h.setText(kv[1]);
                        h.setTextSize(TypedValue.COMPLEX_UNIT_SP, 15);
                        h.setTypeface(Typeface.DEFAULT_BOLD);
                        card.addView(h);

                        TextView body = new TextView(this);
                        body.setText(val.replaceAll("<[^>]*>", ""));
                        body.setTextSize(TypedValue.COMPLEX_UNIT_SP, 14);
                        body.setPadding(0, dp(4), 0, 0);
                        card.addView(body);
                        qpInfoContainer.addView(card, lp);
                    }
                }
                applyPaletteToViews();
            });
        });
        applyPaletteToViews();
    }

    // ==================== REAL-TIME SYNC LOOP & TIMERS ====================

    private void startUiTickLoop() {
        tickHandler.postDelayed(new Runnable() {
            @Override
            public void run() {
                updateSyncHighlightAndProgress();
                checkStopTimer();
                tickHandler.postDelayed(this, 250);
            }
        }, 250);
    }

    private void updateSyncHighlightAndProgress() {
        if (mediaPlayer == null || !isPrepared) return;
        try {
            int cur = mediaPlayer.getCurrentPosition();
            int dur = mediaPlayer.getDuration();
            if (dur > 0) {
                int prog = (int) ((cur * 1000L) / dur);
                audioSeekBar.setProgress(prog);
                fbProgressBar.setProgress(prog);
                tElapsedTv.setText(formatTimeMs(cur));
                tRemainingTv.setText("-" + formatTimeMs(Math.max(0, dur - cur)));
                fbTimeTv.setText(formatTimeMs(cur) + " / " + formatTimeMs(dur));
            }

            if (isPlaying && !currentTimings.isEmpty()) {
                int foundAyah = -1;
                for (QuranData.AyahTiming t : currentTimings) {
                    if (cur >= t.fromMs && cur < t.toMs) {
                        foundAyah = t.ayah;
                        break;
                    }
                }
                if (foundAyah != -1 && foundAyah != activeHighlightedAyah) {
                    activeHighlightedAyah = foundAyah;
                    renderCurrentQuranTextView();
                    if (autoScrollText) {
                        final TextView targetView = ayahViewMap.get(selectedSurahNum + ":" + foundAyah);
                        if (targetView != null) {
                            qpTextScrollView.post(() -> qpTextScrollView.smoothScrollTo(0, Math.max(0, targetView.getTop() - dp(90))));
                        }
                    }
                }
            }
        } catch (Exception ignored) {}
    }

    private void checkStopTimer() {
        if (stopTimerEndMs > 0) {
            long rem = stopTimerEndMs - System.currentTimeMillis();
            if (rem <= 0) {
                stopTimerEndMs = 0;
                stopClockTv.setText("");
                if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                    mediaPlayer.pause();
                    isPlaying = false;
                    updateTransportButtonsUI();
                }
                Toast.makeText(this, isAr ? "⏰ انتهى مؤقت النوم وتوقفت التلاوة" : "⏰ Sleep timer finished", Toast.LENGTH_LONG).show();
            } else {
                stopClockTv.setText(formatTimeMs(rem));
            }
        }
    }

    private String formatTimeMs(long ms) {
        long totalSec = Math.max(0, ms / 1000);
        long m = totalSec / 60;
        long s = totalSec % 60;
        return String.format(Locale.US, "%d:%02d", m, s);
    }

    // ==================== DIALOGS: SETTINGS, OFFLINE DOWNLOADS, SHARE ====================

    private void openSettingsDialog() {
        ScrollView sv = new ScrollView(this);
        LinearLayout col = new LinearLayout(this);
        col.setOrientation(LinearLayout.VERTICAL);
        col.setPadding(dp(18), dp(14), dp(18), dp(14));
        sv.addView(col);

        CheckBox chkAutoScroll = new CheckBox(this);
        chkAutoScroll.setText(isAr ? "تمرير النص تلقائياً مع التلاوة" : "Auto-scroll text with audio");
        chkAutoScroll.setChecked(autoScrollText);
        chkAutoScroll.setOnCheckedChangeListener((b, v) -> { autoScrollText = v; savePreferences(); });
        col.addView(chkAutoScroll);

        CheckBox chkAutoHi = new CheckBox(this);
        chkAutoHi.setText(isAr ? "تظليل الآية تلقائياً للقراء المتزامنين" : "Auto-highlight active verse");
        chkAutoHi.setChecked(autoHighlight);
        chkAutoHi.setOnCheckedChangeListener((b, v) -> { autoHighlight = v; savePreferences(); renderCurrentQuranTextView(); });
        col.addView(chkAutoHi);

        CheckBox chkAutoPlay = new CheckBox(this);
        chkAutoPlay.setText(isAr ? "تشغيل مباشر عند تغيير القارئ أو السورة" : "Auto-play on reciter/surah change");
        chkAutoPlay.setChecked(autoPlayOnChange);
        chkAutoPlay.setOnCheckedChangeListener((b, v) -> { autoPlayOnChange = v; savePreferences(); });
        col.addView(chkAutoPlay);

        Button openDlBtn = makeActionButton(isAr ? "📥 فتح مركز التحميلات والتخزين بدون إنترنت" : "📥 Offline Downloads Center", this::openOfflineDownloadsDialog);
        LinearLayout.LayoutParams dlLp = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(42));
        dlLp.setMargins(0, dp(12), 0, dp(8));
        col.addView(openDlBtn, dlLp);

        Button clearBtn = makeActionButton(isAr ? "🗑️ مسح جميع البيانات والتنزيلات" : "🗑️ Clear All Cached Data", () -> {
            NativeNetAndCache.clearOfflineStorage(this);
            prefs.edit().clear().apply();
            Toast.makeText(this, isAr ? "✅ تم مسح البيانات" : "✅ Cleared", Toast.LENGTH_SHORT).show();
        });
        col.addView(clearBtn, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(40)));

        new AlertDialog.Builder(this)
            .setTitle(isAr ? "⚙️ الإعدادات العامة" : "⚙️ Settings")
            .setView(sv)
            .setPositiveButton(isAr ? "إغلاق" : "Close", null)
            .show();
    }

    private void openOfflineDownloadsDialog() {
        ScrollView sv = new ScrollView(this);
        LinearLayout col = new LinearLayout(this);
        col.setOrientation(LinearLayout.VERTICAL);
        col.setPadding(dp(18), dp(14), dp(18), dp(14));
        sv.addView(col);

        long usedBytes = NativeNetAndCache.getOfflineStorageBytes(this);
        final TextView storageTv = new TextView(this);
        storageTv.setText((isAr ? "💾 المساحة المخزنة حالياً: " : "💾 Offline Storage Used: ") +
            String.format(Locale.US, "%.2f MB", usedBytes / (1024.0 * 1024.0)));
        storageTv.setPadding(0, 0, 0, dp(10));
        col.addView(storageTv);

        final CheckBox chkTexts = new CheckBox(this);
        chkTexts.setText(isAr ? "📦 نصوص ومعلومات سور القرآن الكريم" : "📦 Surah Texts & Encyclopedia Info");
        chkTexts.setChecked(true);
        col.addView(chkTexts);

        final CheckBox chkFonts = new CheckBox(this);
        chkFonts.setText(isAr ? "🔤 خطوط صفحات المصحف والتجويد الملون" : "🔤 Mushaf & Colored Tajweed Page Fonts");
        chkFonts.setChecked(true);
        col.addView(chkFonts);

        final CheckBox chkImages = new CheckBox(this);
        chkImages.setText(isAr ? "🖼️ صور صفحات المصحف المصور" : "🖼️ Mushaf Page Images");
        col.addView(chkImages);

        final CheckBox chkAudio = new CheckBox(this);
        chkAudio.setText(isAr ? "🎧 التلاوات الصوتية والتوقيتات للقارئ الحالي" : "🎧 Current Reciter Audio & Sync Timings");
        col.addView(chkAudio);

        LinearLayout rangeRow = new LinearLayout(this);
        rangeRow.setOrientation(LinearLayout.HORIZONTAL);
        rangeRow.setGravity(Gravity.CENTER_VERTICAL);
        rangeRow.setPadding(0, dp(8), 0, dp(8));
        TextView fromLbl = new TextView(this);
        fromLbl.setText(isAr ? "من سورة/صفحة: " : "From: ");
        final EditText fromEt = new EditText(this);
        fromEt.setText(String.valueOf(selectedSurahNum));
        TextView toLbl = new TextView(this);
        toLbl.setText(isAr ? " إلى: " : " To: ");
        final EditText toEt = new EditText(this);
        toEt.setText(String.valueOf(Math.min(114, selectedSurahNum + 4)));
        rangeRow.addView(fromLbl);
        rangeRow.addView(fromEt, new LinearLayout.LayoutParams(dp(60), ViewGroup.LayoutParams.WRAP_CONTENT));
        rangeRow.addView(toLbl);
        rangeRow.addView(toEt, new LinearLayout.LayoutParams(dp(60), ViewGroup.LayoutParams.WRAP_CONTENT));
        col.addView(rangeRow);

        final ProgressBar progBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progBar.setMax(100);
        col.addView(progBar);

        final TextView progStatusTv = new TextView(this);
        progStatusTv.setPadding(0, dp(6), 0, dp(6));
        col.addView(progStatusTv);

        final AtomicBoolean cancelFlag = new AtomicBoolean(false);
        Button startDlBtn = makeActionButton(isAr ? "⬇️ بدء التنزيل للعمل بدون إنترنت" : "⬇️ Start Offline Download", () -> {
            cancelFlag.set(false);
            int sFrom = 1, sTo = 5;
            try {
                sFrom = Math.max(1, Math.min(604, Integer.parseInt(fromEt.getText().toString().trim())));
                sTo = Math.max(sFrom, Math.min(604, Integer.parseInt(toEt.getText().toString().trim())));
            } catch (Exception ignored) {}
            final int lo = sFrom, hi = sTo;
            final boolean doTxt = chkTexts.isChecked();
            final boolean doFnt = chkFonts.isChecked();
            final boolean doImg = chkImages.isChecked();
            final boolean doAud = chkAudio.isChecked();

            NativeNetAndCache.runBg(() -> {
                int total = (hi - lo + 1);
                int done = 0;
                for (int i = lo; i <= hi && !cancelFlag.get(); i++) {
                    final int curItem = i;
                    final int curDone = done;
                    NativeNetAndCache.runUi(() -> {
                        progBar.setProgress((curDone * 100) / Math.max(1, total));
                        progStatusTv.setText((isAr ? "جاري تنزيل العنصر " : "Downloading item ") + curItem + " / " + hi);
                    });
                    if (doTxt && i <= 114) {
                        NativeNetAndCache.fetchSurahTextSync(this, i);
                        NativeNetAndCache.fetchSurahInfoSync(this, i);
                    }
                    if (doFnt) {
                        NativeNetAndCache.loadPageFontSync(this, "tajweed", i, false);
                        NativeNetAndCache.loadPageFontSync(this, "tajweed", i, true);
                    }
                    if (doImg) {
                        NativeNetAndCache.loadMushafPageBitmapSync(this, mushafSourceIdx, i);
                    }
                    if (doAud && i <= 114 && !filteredReciters.isEmpty()) {
                        QuranData.ReciterItem r = filteredReciters.get(selectedReciterIdx);
                        if (r.isPrecision && r.audioServer == null) {
                            NativeNetAndCache.PrecisionAudioResult pr = NativeNetAndCache.fetchPrecisionAudioSync(this, r.precisionQid, i);
                            if (pr != null && pr.audioUrl != null) {
                                try { NativeNetAndCache.downloadAudioToCacheSync(this, pr.audioUrl); } catch (Exception ignored) {}
                            }
                        }
                    }
                    done++;
                }
                final long newSize = NativeNetAndCache.getOfflineStorageBytes(this);
                NativeNetAndCache.runUi(() -> {
                    progBar.setProgress(100);
                    progStatusTv.setText(isAr ? "✅ اكتمل التنزيل والحفظ في ذاكرة التطبيق!" : "✅ Offline download complete!");
                    storageTv.setText((isAr ? "💾 المساحة المخزنة حالياً: " : "💾 Offline Storage Used: ") +
                        String.format(Locale.US, "%.2f MB", newSize / (1024.0 * 1024.0)));
                });
            });
        });
        col.addView(startDlBtn, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(42)));

        new AlertDialog.Builder(this)
            .setTitle(isAr ? "📥 مركز التحميلات والتخزين" : "📥 Offline Downloads")
            .setView(sv)
            .setNegativeButton(isAr ? "إغلاق" : "Close", (d, w) -> cancelFlag.set(true))
            .show();
    }

    private void downloadCurrentSurahOffline() {
        if (filteredReciters.isEmpty()) return;
        final QuranData.ReciterItem r = filteredReciters.get(selectedReciterIdx);
        final QuranData.MoshafItem m = r.moshafs.get(selectedMoshafIdx);
        final int sNum = selectedSurahNum;
        Toast.makeText(this, isAr ? "⏳ جاري حفظ السورة للعمل بدون إنترنت..." : "⏳ Caching surah MP3...", Toast.LENGTH_SHORT).show();
        NativeNetAndCache.runBg(() -> {
            try {
                String url;
                if (r.isPrecision && r.audioServer == null) {
                    NativeNetAndCache.PrecisionAudioResult pr = NativeNetAndCache.fetchPrecisionAudioSync(this, r.precisionQid, sNum);
                    url = pr != null ? pr.audioUrl : null;
                } else {
                    String base = r.audioServer != null ? r.audioServer : m.server;
                    if (!base.endsWith("/")) base += "/";
                    url = base + String.format(Locale.US, "%03d.mp3", sNum);
                }
                if (url != null) {
                    NativeNetAndCache.downloadAudioToCacheSync(this, url);
                    NativeNetAndCache.runUi(() -> Toast.makeText(this, isAr ? "✅ تم حفظ السورة في ذاكرة التطبيق!" : "✅ Surah saved offline!", Toast.LENGTH_SHORT).show());
                }
            } catch (Exception e) {
                NativeNetAndCache.runUi(() -> Toast.makeText(this, isAr ? "⚠️ تعذر تنزيل السورة" : "⚠️ Download failed", Toast.LENGTH_SHORT).show());
            }
        });
    }

    private void openShareDialog() {
        QuranData.SurahMeta sm = allSurahs.get(selectedSurahNum - 1);
        QuranData.ReciterItem r = filteredReciters.isEmpty() ? null : filteredReciters.get(selectedReciterIdx);
        String recName = r != null ? r.cleanName : "";
        String shareText = (isAr ? "🎧 أستمع الآن إلى سورة " : "🎧 Listening to Surah ") +
            (isAr ? sm.nameAr : sm.nameEn) + " — " + recName + "\nhttps://alhlhli.github.io/Quran-Player/?s=" + selectedSurahNum;

        Intent sendIntent = new Intent(Intent.ACTION_SEND);
        sendIntent.setType("text/plain");
        sendIntent.putExtra(Intent.EXTRA_TEXT, shareText);
        startActivity(Intent.createChooser(sendIntent, isAr ? "مشاركة" : "Share"));
    }

    // ==================== BOOKMARKS ====================

    private void addCurrentBookmark() {
        QuranData.SurahMeta sm = allSurahs.get(selectedSurahNum - 1);
        QuranData.ReciterItem r = filteredReciters.isEmpty() ? null : filteredReciters.get(selectedReciterIdx);
        int posSec = (mediaPlayer != null && isPrepared) ? (mediaPlayer.getCurrentPosition() / 1000) : 0;
        String entry = selectedSurahNum + "|" + (isAr ? sm.nameAr : sm.nameEn) + "|" + (r != null ? r.cleanName : "") + "|" + posSec;
        String existing = prefs.getString("bookmarks_list", "");
        prefs.edit().putString("bookmarks_list", entry + (existing.isEmpty() ? "" : (";" + existing))).apply();
        refreshBookmarksView();
        Toast.makeText(this, isAr ? "✅ تمت إضافة الإشارة المرجعية" : "✅ Bookmark added", Toast.LENGTH_SHORT).show();
    }

    private void refreshBookmarksView() {
        bookmarksContainer.removeAllViews();
        String raw = prefs.getString("bookmarks_list", "");
        if (raw == null || raw.isEmpty()) return;

        LinearLayout card = new LinearLayout(this);
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(dp(12), dp(10), dp(12), dp(10));
        card.setTag("card");

        TextView header = new TextView(this);
        header.setText(isAr ? "📌 الإشارات المرجعية المحفوظة:" : "📌 Saved Bookmarks:");
        header.setTypeface(Typeface.DEFAULT_BOLD);
        card.addView(header);

        for (String item : raw.split(";")) {
            String[] p = item.split("\\|");
            if (p.length < 4) continue;
            final int sNum = Integer.parseInt(p[0]);
            String label = "📖 " + p[1] + " — " + p[2] + " (" + formatTimeMs(Integer.parseInt(p[3]) * 1000L) + ")";
            Button b = makeActionButton(label, () -> selectSurahByNumber(sNum, true));
            LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(36));
            lp.setMargins(0, dp(4), 0, 0);
            card.addView(b, lp);
        }
        bookmarksContainer.addView(card);
        applyPaletteToViews();
    }

    // ==================== HELPERS, GESTURES & MEDIA NOTIFICATION ====================

    private void setupSwipeGesture(View target, final boolean isTextTab) {
        target.setOnTouchListener(new View.OnTouchListener() {
            private float x0, y0;
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_DOWN) {
                    x0 = event.getX();
                    y0 = event.getY();
                } else if (event.getAction() == MotionEvent.ACTION_UP) {
                    float dx = event.getX() - x0;
                    float dy = event.getY() - y0;
                    if (Math.abs(dx) > dp(65) && Math.abs(dx) > Math.abs(dy) * 1.4f) {
                        boolean isNext = isAr ? (dx > 0) : (dx < 0);
                        if (isTextTab) {
                            if ("pages".equals(textPageMode)) {
                                navigateTextPage(isNext ? +1 : -1);
                                return true;
                            } else if (!isPlaying) {
                                selectSurahByNumber(selectedSurahNum + (isNext ? 1 : -1), false);
                                return true;
                            }
                        } else {
                            navigateMushafImagePage(isNext ? +1 : -1);
                            return true;
                        }
                    }
                }
                return false;
            }
        });
    }

    private void updateNowPlayingHeader() {
        if (allSurahs == null || allSurahs.isEmpty()) return;
        QuranData.SurahMeta sm = allSurahs.get(Math.max(0, Math.min(113, selectedSurahNum - 1)));
        QuranData.ReciterItem r = filteredReciters.isEmpty() ? null : filteredReciters.get(Math.max(0, Math.min(selectedReciterIdx, filteredReciters.size() - 1)));

        String sTitle = (isAr ? "سورة " + sm.nameAr : "Surah " + sm.nameEn);
        String rTitle = r != null ? r.cleanName : "";
        npSurahTv.setText(sTitle);
        npReciterTv.setText(rTitle);
        npBadgeTv.setText(sm.getTypeLabel(isAr) + " • " + sm.ayahCount + (isAr ? " آية" : " verses") +
            (r != null && r.isPrecision ? (isAr ? " • 🎯 مزامنة دقيقة للآيات" : " • 🎯 Precise Sync") : ""));

        fbSurahTv.setText(sTitle);
        fbReciterTv.setText(rTitle);
    }

    private void updateTransportButtonsUI() {
        playBtn.setText(isPlaying ? (isAr ? "⏸ إيقاف" : "⏸ Pause") : (isAr ? "▶ تشغيل" : "▶ Play"));
        fbPlayBtn.setText(isPlaying ? "⏸" : "▶");
        repeatBtn.setText(getRepeatLabel());
        muteBtn.setText(isMuted ? "🔇" : "🔊");
    }

    private String getRepeatLabel() {
        String[] modes = isAr ? new String[]{"🔄 ٠", "🔄 ١", "🔄 ٢", "🔄 ٣", "🔄 ∞"} : new String[]{"🔄 0", "🔄 1", "🔄 2", "🔄 3", "🔄 ∞"};
        return modes[Math.max(0, Math.min(4, repeatMode))];
    }

    private void cycleRepeatMode() {
        repeatMode = (repeatMode + 1) % 5;
        repeatCount = 0;
        savePreferences();
        updateTransportButtonsUI();
    }

    private String getNextModeLabel() {
        String[] ar = {"⏭ التالي: السورة التالية", "🎲 التالي: سورة عشوائية", "🎙️ التالي: قارئ عشوائي", "✨ التالي: قارئ وسورة عشوائية"};
        String[] en = {"⏭ Next: Next Surah", "🎲 Next: Random Surah", "🎙️ Next: Random Reciter", "✨ Next: Random All"};
        return (isAr ? ar : en)[Math.max(0, Math.min(3, nextMode))];
    }

    private void cycleNextMode() {
        nextMode = (nextMode + 1) % 4;
        nextModeBtn.setText(getNextModeLabel());
        savePreferences();
    }

    private void toggleMute() {
        isMuted = !isMuted;
        applyVolumeToPlayer();
        updateTransportButtonsUI();
    }

    private void applyVolumeToPlayer() {
        if (mediaPlayer == null) return;
        float v = isMuted ? 0f : (volumePercent / 100.0f);
        try { mediaPlayer.setVolume(v, v); } catch (Exception ignored) {}
    }

    private void applySpeedToPlayer() {
        if (mediaPlayer == null || !isPrepared) return;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            try {
                boolean wasPlaying = mediaPlayer.isPlaying();
                PlaybackParams params = new PlaybackParams();
                params.setSpeed(playbackSpeed);
                mediaPlayer.setPlaybackParams(params);
                if (!wasPlaying) mediaPlayer.pause();
            } catch (Exception ignored) {}
        }
    }

    private void showMediaNotification() {
        try {
            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;
            String chId = "quran_native_playback";
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel ch = new NotificationChannel(chId, "Quran Playback", NotificationManager.IMPORTANCE_LOW);
                nm.createNotificationChannel(ch);
            }
            QuranData.SurahMeta sm = allSurahs.get(selectedSurahNum - 1);
            QuranData.ReciterItem r = filteredReciters.isEmpty() ? null : filteredReciters.get(selectedReciterIdx);
            Intent intent = new Intent(this, MainActivity.class);
            int flags = Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0;
            PendingIntent pi = PendingIntent.getActivity(this, 0, intent, flags);

            Notification.Builder nb = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                ? new Notification.Builder(this, chId)
                : new Notification.Builder(this);
            nb.setSmallIcon(android.R.drawable.ic_media_play)
              .setContentTitle((isAr ? "سورة " : "Surah ") + (isAr ? sm.nameAr : sm.nameEn))
              .setContentText(r != null ? r.cleanName : "")
              .setContentIntent(pi)
              .setOngoing(isPlaying);
            nm.notify(1001, nb.build());
        } catch (Exception ignored) {}
    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        updateResponsiveLayoutMode();
        renderCurrentQuranTextView();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE || keyCode == KeyEvent.KEYCODE_MEDIA_PLAY || keyCode == KeyEvent.KEYCODE_MEDIA_PAUSE) {
            togglePlayPause();
            return true;
        } else if (keyCode == KeyEvent.KEYCODE_MEDIA_NEXT) {
            playNextSurah();
            return true;
        } else if (keyCode == KeyEvent.KEYCODE_MEDIA_PREVIOUS) {
            playPreviousSurah();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    public void onBackPressed() {
        if (!isTabletOrLandscape() && "quran".equals(activeMobileTab)) {
            switchMobileTab("player");
            return;
        }
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        tickHandler.removeCallbacksAndMessages(null);
        if (mediaPlayer != null) {
            try { mediaPlayer.release(); } catch (Exception ignored) {}
            mediaPlayer = null;
        }
        super.onDestroy();
    }
}
