var CACHE_NAME = 'hello-push-cache';
var urlsToCache = [
  './',
  './index.html',
  './scripts/app.js',
  './source/style.css',
  './source/pwa-192x192.png',
  './source/favicon-16x16.png',
  './source/favicon-32x32.png',
  './source/newapp-icon.png',
  './BMSPushSDK.js',
  './BMSPushServiceWorker.js',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            //Clone the request.
            var fetchRequest = event.request.clone();
            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // Clone the response.
                    var responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                    .then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                }
            );
        })
    );
});
