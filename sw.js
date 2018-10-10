//sw.js

//install and cache site
let restaurantCache = 'cache-v1';
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(restaurantCache)
        .then(function(cache) {
          return cache.addAll([
            '/',
            '/index.html',
            '/sw.js',
            '/restaurant.html',
            '/css/styles.css',
            '/jss/main.js',
            '/jss/restaurant_info.js',
            '/jss/dbhelper.js',
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
          ]);
    })
    );
  });

  //fetch - return cached site for offline