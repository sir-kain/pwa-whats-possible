importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
const { routing, precaching, strategies } = workbox;

routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  new strategies.CacheFirst()
);

precaching.precacheAndRoute(self.__WB_MANIFEST);
