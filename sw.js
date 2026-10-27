/* =============================================================
   Service Worker — مشغل القرآن الكريم (الإصدار المحترف v12)
   - ملفات التطبيق: Stale-While-Revalidate (عرض فوري + تحديث بالخلفية)
   - بيانات APIs (mp3quran / quran.com): Network-First مع رجوع للكاش عند انقطاع الإنترنت
   - خطوط المصحف (QCF Fonts) من jsDelivr: Cache-First بسعة تخزين موسعة (300 صفحة)
   - صور المصحف: Cache-First مع حد أقصى للعدد
   - الملفات الصوتية mp3: تمرير مباشر لدعم طلبات التجزئة (HTTP Byte-Range)
============================================================= */
const VERSION = 'v12';
const APP_CACHE = 'quran-app-' + VERSION;
const DATA_CACHE = 'quran-data-' + VERSION;
const IMG_CACHE = 'quran-img-' + VERSION;
const QCF_CACHE = 'quran-qcf-' + VERSION;

const APP_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './qcf-data.js',
  './manifest.json',
  './icon.svg',
  './qcf-text.json'
];

const API_HOSTS = [
  'www.mp3quran.net',
  'api.alquran.cloud',
  'api.quran.com',
  'api.quranpedia.net',
  'api.allorigins.win'
];

const IMG_HOSTS = [
  'www.islamicbook.ws',
  'newapi.hefzmoyaser.net',
  'raw.githubusercontent.com',
  'cdn.aayaat.net',
  'quran.yousefheiba.com',
  'quran.islam-db.com',
  'surahquran.com'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// خطوط المصحف الشريف QCF (604 ملف صفحة): تخزين Cache-First بسعة حتى 300 صفحة
const QCF_HOSTS = ['cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(APP_CACHE)
      .then(c => c.addAll(APP_ASSETS))
      .catch(err => console.warn('PWA Precache fallback:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => ![APP_CACHE, DATA_CACHE, IMG_CACHE, QCF_CACHE].includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const hit = await cache.match(req);
    if (hit) return hit;
    throw err;
  }
}

async function cacheFirst(req, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const fresh = await fetch(req);
    if (fresh && (fresh.ok || fresh.type === 'opaque')) {
      cache.put(req, fresh.clone());
      if (maxEntries) trimCache(cache, maxEntries);
    }
    return fresh;
  } catch (err) {
    if (hit) return hit;
    throw err;
  }
}

async function trimCache(cache, max) {
  try {
    const keys = await cache.keys();
    if (keys.length > max) {
      await cache.delete(keys[0]);
      return trimCache(cache, max);
    }
  } catch (e) {}
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const fetching = fetch(req)
    .then(res => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  return hit || (await fetching) || Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  // الملفات الصوتية: لا تُعترض — المتصفح يدير طلبات HTTP Range والتدفق بنفسه
  if (url.pathname.endsWith('.mp3') || url.hostname === 'download.quranicaudio.com' || url.hostname.includes('cdn.mp3quran.net')) {
    return;
  }

  // ملفات التطبيق الأساسية (نفس النطاق)
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') {
      e.respondWith(networkFirst(req, APP_CACHE).catch(() => caches.match('./index.html')));
    } else {
      e.respondWith(staleWhileRevalidate(req, APP_CACHE));
    }
    return;
  }

  // استدعاءات الـ APIs: Network-First
  if (API_HOSTS.includes(url.hostname)) {
    e.respondWith(networkFirst(req, DATA_CACHE).catch(() => caches.match(req).then(hit => hit || Response.error())));
    return;
  }

  // خطوط المصحف من jsDelivr
  if (QCF_HOSTS.includes(url.hostname) && (/\.(woff2?|otf|ttf)$/i.test(url.pathname) || url.pathname.includes('/fonts/'))) {
    e.respondWith(cacheFirst(req, QCF_CACHE, 300).catch(() => Response.error()));
    return;
  }

  // خطوط جوجل والخطوط الأخرى
  if (FONT_HOSTS.includes(url.hostname) || /\.(woff2?|otf|ttf)$/i.test(url.pathname)) {
    e.respondWith(cacheFirst(req, QCF_CACHE, 100).catch(() => Response.error()));
    return;
  }

  // صور المصحف
  if (IMG_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(req, IMG_CACHE, 150).catch(() => Response.error()));
    return;
  }
});
