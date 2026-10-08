/* =============================================================
   Service Worker — مشغل القرآن الكريم
   - ملفات التطبيق: stale-while-revalidate (عرض فوري + تحديث بالخلفية)
   - بيانات APIs: network-first مع رجوع للكاش عند انقطاع الإنترنت
   - صور المصحف: cache-first مع حد أقصى للعدد
   - ملفات mp3: تمرير مباشر (لدعم طلبات Range وعدم ملء الكاش)
============================================================= */
const VERSION = 'v4';
const APP_CACHE = 'quran-app-' + VERSION;
const DATA_CACHE = 'quran-data-' + VERSION;
const IMG_CACHE = 'quran-img-' + VERSION;
const QCF_CACHE = 'quran-qcf-' + VERSION;

const APP_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
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
  'raw.githubusercontent.com',
  'cdn.aayaat.net',
  'quran.yousefheiba.com',
  'quran.islam-db.com',
  'surahquran.com'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// خطوط المصحف (QCF): 604 ملف صفحة تُحمَّل عند الحاجة وتُخزَّن محلياً
const QCF_HOSTS = ['cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_ASSETS)).catch(() => {}));
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
  const fresh = await fetch(req);
  if (fresh && (fresh.ok || fresh.type === 'opaque')) {
    cache.put(req, fresh.clone());
    if (maxEntries) trimCache(cache, maxEntries);
  }
  return fresh;
}

async function trimCache(cache, max) {
  const keys = await cache.keys();
  if (keys.length > max) {
    await cache.delete(keys[0]);
    return trimCache(cache, max);
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const fetching = fetch(req)
    .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
    .catch(() => null);
  return hit || (await fetching) || Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  // الملفات الصوتية: لا تُعترض — المتصفح يدير طلبات Range بنفسه
  if (url.pathname.endsWith('.mp3')) return;

  // ملفات التطبيق (نفس النطاق)
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') {
      e.respondWith(networkFirst(req, APP_CACHE).catch(() => caches.match('./index.html')));
    } else {
      e.respondWith(staleWhileRevalidate(req, APP_CACHE));
    }
    return;
  }

  if (API_HOSTS.includes(url.hostname)) {
    e.respondWith(networkFirst(req, DATA_CACHE).catch(() => Response.error()));
    return;
  }

  if (/\.(woff2?|otf|ttf)$/i.test(url.pathname)) {
    // خطوط (QCF / جوجل): كاش أول مع حد أقصى للعدد
    e.respondWith(cacheFirst(req, QCF_CACHE, 64).catch(() => Response.error()));
    return;
  }

  if (IMG_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(req, IMG_CACHE, 120).catch(() => Response.error()));
    return;
  }

  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(req, APP_CACHE).catch(() => Response.error()));
    return;
  }

  if (QCF_HOSTS.includes(url.hostname)) {
    // خطوط الصفحات (≈90 كيلوبايت للصفحة) — كاش أول مع حد أقصى للعدد
    e.respondWith(cacheFirst(req, QCF_CACHE, 48).catch(() => Response.error()));
    return;
  }
});
