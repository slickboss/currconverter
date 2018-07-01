self.addEventListener('install', function(event){
    
   
    event.waitUntil(
        caches.open('staticcurrency').then(function(cache) {
            return cache.addAll([
                '',
                '/myapp/index.html',
				'css/style.css',
				'/js/app.js',
				'js/script.js'
				
				
            ]);
        })


    );
});

/*
self.addEventListener('install', function(event){
    
   
    event.waitUntil(
        caches.open('staticy').then(function(cache) {
            return cache.addAll([
				'/',
                'index.html',
				'js/app.js',
				'css/style.css',
				'images/dp.jpg',
				'images/background/protfolio_image.jpg',
				'images/background/profile_image.jpg',
				'images/background/resume_image.jpg'
            ]);
        })


    );
}); */





self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});