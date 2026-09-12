var CACHE='fa-v16';
var ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./bait-anim.gif','./fish-anim.gif','./tiao-m1-s1.gif','./tiao-m1-s2.gif','./tiao-m1-s3.gif','./tiao-m1-s4.gif','./tiao-m2-s1.gif','./tiao-m2-s2.gif','./tiao-m2-s3.gif','./tiao-m2-s4.gif','./tiao-m3-s1.gif','./tiao-m3-s2.gif','./tiao-m3-s3.gif','./tiao-m3-s4.gif','./tiao-m4-s1.gif','./tiao-m4-s2.gif','./tiao-m4-s3.gif','./tiao-m4-s4.gif','./tiao-m5-s1.gif','./tiao-m5-s2.gif','./tiao-m5-s3.gif','./tiao-m5-s4.gif','./tiao-m6-s1.gif','./tiao-m6-s2.gif','./tiao-m6-s3.gif','./tiao-m6-s4.gif'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(ca){ca.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}));
});