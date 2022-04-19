self.addEventListener("install", e =>{
        e.waitUntil(
            caches.open("static").then(caches=>{
                return caches.addAll(["./","./style.css", "./icon-color-192.png"])
                
            })
        )

} );

self.addEventListener("fetch", e =>{

    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);

        })
    );


   
});

