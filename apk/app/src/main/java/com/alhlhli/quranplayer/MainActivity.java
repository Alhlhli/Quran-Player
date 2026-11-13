package com.alhlhli.quranplayer;

import android.annotation.SuppressLint;
import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.util.Base64;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.URLUtil;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import java.io.File;
import java.io.FileOutputStream;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private WebViewAssetLoader assetLoader;
    private static final String APP_ORIGIN = "https://appassets.androidplatform.net/assets/index.html";

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            window.setStatusBarColor(Color.parseColor("#0c1f17"));
            window.setNavigationBarColor(Color.parseColor("#0c1f17"));
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams lp = window.getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            window.setAttributes(lp);
        }

        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.webview);
        webView.setBackgroundColor(Color.parseColor("#f3ead8"));

        // Serve local assets over https://appassets.androidplatform.net/assets/
        // Guarantees Service Worker (sw.js), Cache Storage API, FontFace API, and Fetch API
        // work identically to a secure HTTPS origin across all Android versions (API 21 to 35+).
        assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        }
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setTextZoom(100);

        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            cookieManager.setAcceptThirdPartyCookies(webView, true);
        }

        // Native JavaScript Bridge for Android integration (Share, Print, Save Offline Files, Toast)
        webView.addJavascriptInterface(new AndroidBridge(this, webView), "AndroidBridge");

        webView.setWebViewClient(new WebViewClient() {
            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                WebResourceResponse response = assetLoader.shouldInterceptRequest(request.getUrl());
                if (response != null) {
                    return response;
                }
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String host = uri.getHost() != null ? uri.getHost() : "";
                if (host.equals("appassets.androidplatform.net")) {
                    return false;
                }
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                    startActivity(intent);
                } catch (Exception ignored) {}
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                injectNativeBridgeEnhancements();
            }
        });

        webView.setWebChromeClient(new WebChromeClient());

        // Download listener for direct file downloads
        webView.setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) -> {
            try {
                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                request.setMimeType(mimeType);
                String fileName = URLUtil.guessFileName(url, contentDisposition, mimeType);
                request.setTitle(fileName);
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, "QuranPlayer/" + fileName);
                DownloadManager dm = (DownloadManager) getSystemService(DOWNLOAD_SERVICE);
                if (dm != null) {
                    dm.enqueue(request);
                    Toast.makeText(getApplicationContext(), "جاري التنزيل: " + fileName, Toast.LENGTH_SHORT).show();
                }
            } catch (Exception e) {
                Toast.makeText(getApplicationContext(), "تعذر بدء التنزيل", Toast.LENGTH_SHORT).show();
            }
        });

        loadInitialUrl(getIntent());
    }

    private void loadInitialUrl(Intent intent) {
        String targetUrl = APP_ORIGIN;
        if (intent != null && Intent.ACTION_VIEW.equals(intent.getAction()) && intent.getData() != null) {
            String query = intent.getData().getEncodedQuery();
            if (query != null && !query.isEmpty()) {
                targetUrl = APP_ORIGIN + "?" + query;
            }
        }
        webView.loadUrl(targetUrl);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        loadInitialUrl(intent);
    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        if (webView != null) {
            webView.evaluateJavascript("window.dispatchEvent(new Event('resize'));", null);
        }
    }

    private void injectNativeBridgeEnhancements() {
        String js = "(function(){" +
                "if(window.AndroidBridge){" +
                "  if(!navigator.share){" +
                "    navigator.share = function(data){" +
                "      return new Promise(function(resolve){" +
                "        var text = (data.title ? data.title + '\n' : '') + (data.text ? data.text + '\n' : '') + (data.url || '');" +
                "        window.AndroidBridge.shareText(data.title || 'المصحف المرتل', text.trim());" +
                "        resolve();" +
                "      });" +
                "    };" +
                "  }" +
                "  window.print = function(){" +
                "    window.AndroidBridge.printPage(document.title || 'المصحف المرتل');" +
                "  };" +
                "}" +
                "})();";
        webView.evaluateJavascript(js, null);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // Support Android TV D-Pad & Media keys seamlessly
        if (webView != null) {
            if (keyCode == KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE || keyCode == KeyEvent.KEYCODE_MEDIA_PLAY || keyCode == KeyEvent.KEYCODE_MEDIA_PAUSE) {
                webView.evaluateJavascript("(function(){ var b = document.getElementById('playBtn'); if(b) b.click(); })();", null);
                return true;
            } else if (keyCode == KeyEvent.KEYCODE_MEDIA_NEXT) {
                webView.evaluateJavascript("(function(){ var b = document.getElementById('nextBtn'); if(b) b.click(); })();", null);
                return true;
            } else if (keyCode == KeyEvent.KEYCODE_MEDIA_PREVIOUS) {
                webView.evaluateJavascript("(function(){ var b = document.getElementById('prevBtn'); if(b) b.click(); })();", null);
                return true;
            }
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    public void onBackPressed() {
        if (webView != null) {
            webView.evaluateJavascript(
                "(function(){" +
                "  var s = document.getElementById('settingsOverlay');" +
                "  if(s && s.classList.contains('open')){ if(typeof closeSettings==='function') closeSettings(); else s.classList.remove('open'); return 'handled'; }" +
                "  var b = document.getElementById('bookmarksOverlay');" +
                "  if(b && b.classList.contains('open')){ if(typeof toggleBookmarksModal==='function') toggleBookmarksModal(); else b.classList.remove('open'); return 'handled'; }" +
                "  var t = document.getElementById('surahTextSection');" +
                "  if(t && t.style.display !== 'none'){ if(typeof closeTextPanel==='function') closeTextPanel(); else t.style.display='none'; return 'handled'; }" +
                "  return 'exit';" +
                "})();",
                result -> {
                    if (result == null || result.contains("exit")) {
                        if (webView.canGoBack()) {
                            webView.goBack();
                        } else {
                            MainActivity.super.onBackPressed();
                        }
                    }
                }
            );
        } else {
            super.onBackPressed();
        }
    }

    public static class AndroidBridge {
        private final MainActivity activity;
        private final WebView webView;

        public AndroidBridge(MainActivity activity, WebView webView) {
            this.activity = activity;
            this.webView = webView;
        }

        @JavascriptInterface
        public void shareText(String title, String text) {
            Intent sendIntent = new Intent(Intent.ACTION_SEND);
            sendIntent.setType("text/plain");
            sendIntent.putExtra(Intent.EXTRA_SUBJECT, title);
            sendIntent.putExtra(Intent.EXTRA_TEXT, text);
            Intent shareIntent = Intent.createChooser(sendIntent, title);
            shareIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(shareIntent);
        }

        @JavascriptInterface
        public void printPage(String jobName) {
            activity.runOnUiThread(() -> {
                try {
                    PrintManager printManager = (PrintManager) activity.getSystemService(Context.PRINT_SERVICE);
                    if (printManager != null) {
                        PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter(jobName != null ? jobName : "QuranPlayer");
                        printManager.print(jobName != null ? jobName : "QuranPlayer", adapter, new PrintAttributes.Builder().build());
                    }
                } catch (Exception e) {
                    Toast.makeText(activity, "تعذر فتح شاشة الطباعة", Toast.LENGTH_SHORT).show();
                }
            });
        }

        @JavascriptInterface
        public boolean saveBase64File(String subFolder, String fileName, String base64Data) {
            try {
                File baseDir = new File(activity.getExternalFilesDir(null), "QuranPlayer/" + subFolder);
                if (!baseDir.exists()) {
                    baseDir.mkdirs();
                }
                File outFile = new File(baseDir, fileName);
                byte[] bytes = Base64.decode(base64Data, Base64.DEFAULT);
                try (FileOutputStream fos = new FileOutputStream(outFile)) {
                    fos.write(bytes);
                }
                return true;
            } catch (Exception e) {
                return false;
            }
        }

        @JavascriptInterface
        public String getDeviceDownloadPath() {
            File baseDir = new File(activity.getExternalFilesDir(null), "QuranPlayer");
            return baseDir.getAbsolutePath();
        }
    }
}
