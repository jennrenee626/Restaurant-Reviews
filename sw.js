const filesToCache = [
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/sw.js',
]
let restaurantCache = 'cache-v1';

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(restaurantCache).then(function(cache) {
          return cache.addAll(filesToCache);
        })
    );
});

//fetch - return cached site for offline/clone request for cache>browser
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                return response;
            }else {
                return fetch(e.request).then(function(response) {
                    const clonedResponse = response.clone();
                    caches.open(restaurantCache).then(function(cache) {
                    cache.put(e.request, clonedResponse);
                    })
                    return response;
                })
                .catch(function(err) {
                    console.log(err);
                })
            }
        })
    )
})


            // var fetchRequest = e.request.clone();
            // return fetch(fetchRequest).then(function(response) {
            //     if(!response || response.status !== 200 || response.type !== 'basic') {
            //         return response;
            //     }})
