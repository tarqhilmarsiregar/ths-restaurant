import 'regenerator-runtime';
import CacheHelper from './cache-helper';

const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  './images/favorite.png',
  './images/favorite2.png',
  './images/heros/hero-image_2-small.webp',
  './images/heros/hero-image_2-large.webp',
  './images/heros/hero-image_2-small.jpg',
  './images/heros/hero-image_2-large.jpg',
];

self.addEventListener('install', async (event) => {
  await event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('active', async (event) => {
  await event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', async (event) => {
  await event.respondWith(CacheHelper.revalidateCache(event.request));
});
