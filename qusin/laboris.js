sw.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return the cached response if found, or fetch from the network otherwise
        return response || fetch(event.request);
      })
  );
});
