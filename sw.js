// Service Worker for Background Earthquake Alerts
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "🚨 CRITICAL EARTHQUAKE ALERT!";
    const options = {
        body: data.body || "Seismic activity detected at Node 1 (VVIET)!",
        icon: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
        vibrate: [1000, 200, 1000, 200, 1000],
        tag: "earthquake-alert",
        renotify: true,
        requireInteraction: true
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
