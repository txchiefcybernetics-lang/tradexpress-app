const CACHE = "tx-cache-v1";


self.addEventListener(
  "install",
  (event) => {

    event.waitUntil(
      caches.open(CACHE)
    );

  }
);



self.addEventListener(
  "fetch",
  (event)=>{

    event.respondWith(

      caches.match(event.request)
      .then(
        response =>
          response ||
          fetch(event.request)
      )

    );

  }
);
