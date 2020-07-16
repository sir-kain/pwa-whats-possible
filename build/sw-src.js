importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
const { routing, precaching, strategies } = workbox;
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;

routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  new strategies.CacheFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
routing.registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

precaching.precacheAndRoute(self.__WB_MANIFEST);
