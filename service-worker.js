const cacheName = "GuidesV1";
const cacheFiles = [
    "public/images/desktop/desktop-60p-10x.jpg",
    "public/images/desktop/desktop-60p-25x.jpg",
    "public/images/desktop/desktop-60p-50x.jpg",
    "public/images/desktop/desktop-60p-75x.jpg",
    "public/images/desktop/desktop-60p-200x.jpg",
    "public/images/desktop/desktop.jpg",
    "public/images/hero/hero-60q-0,25x.jpg",
    "public/images/hero/hero-60q-0,50x.jpg",
    "public/images/hero/hero-60q-0,75x.jpg",
    "public/images/hero/hero-60q.jpg",
    "public/images/pay/alipay800x1280.jpg",
    "public/images/pay/wechatpay800x1280.jpg",
    "public/javascripts/locales/en/convention/index.js",
    "public/javascripts/locales/en/homepage/index.js",
    "public/javascripts/locales/fr/convention/index.js",
    "public/javascripts/locales/fr/homepage/index.js",
    "public/javascripts/locales/it/convention/index.js",
    "public/javascripts/locales/it/homepage/index.js",
    "public/javascripts/locales/ja/convention/index.js",
    "public/javascripts/locales/ja/homepage/index.js",
    "public/javascripts/locales/ko/convention/index.js",
    "public/javascripts/locales/ko/homepage/index.js",
    "public/javascripts/locales/ru/convention/index.js",
    "public/javascripts/locales/ru/homepage/index.js",
    "public/javascripts/locales/uk/convention/index.js",
    "public/javascripts/locales/uk/homepage/index.js",
    "public/javascripts/locales/zh/convention/index.js",
    "public/javascripts/locales/zh/homepage/index.js",
    "public/javascripts/locales/index.js",
    "views/convention/index.html",
    "views/convention/index.js",
    "views/donate/index.html",
    "favicon.ico",
    "index.html",
    "index.js"
];

self.addEventListener("install", (event) => {
    console.log("[ServiceWorker] install");

    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                console.log("[ServiceWorker] caching app shell");
                return cache.addAll(cacheFiles);
            })
    );
});

self.addEventListener("activate", (event) => {
    console.log("[ServiceWorker] activate");

    event.waitUntil(
        caches
            .keys()
            .then((keyList) => {
                return Promise.all(keyList.map(key => {
                    if (key !== cacheName) {
                        console.log("[ServiceWorker] remove old cache", key);
                        return caches.delete(key);
                    }
                }));
            })
    );

    return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    console.log("[ServiceWorker] fetch", event.request.url);

    const urlFiraCode = "https://cdn.rawgit.com/tonsky/FiraCode/1.205/distr/fira_code.css";

    if (event.request.url.includes(urlFiraCode)) {
        event.respondWith(
            caches
                .open(cacheName)
                .then(cache => fetch(event.request).then((response) => {
                    cache.put(event.request.url, response.clone());
                    return response;
                }))
        );
    } else {
        event.respondWith(
            caches
                .match(event.request)
                .then(response => response || fetch(event.request))
        );
    }


});