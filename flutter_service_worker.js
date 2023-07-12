'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1f7065851338a42570e722af0b885b59",
"assets/AssetManifest.json": "18a51dcd76441f3c6755481bc18e96a3",
"assets/assets/fonts/RedHatDisplay-Bold.ttf": "8b5f3b56df62b8b8e571f35b118abf6d",
"assets/assets/fonts/RedHatDisplay-ExtraBold.ttf": "34c75b8ef96b5ee5b8a7161b8504cf19",
"assets/assets/fonts/redhatdisplay.ttf": "94f0ad55035ce9652969e5c6b379f06c",
"assets/assets/fonts/redhatdisplayitalic.ttf": "b4b58f60640b8802d42e82a16c4fd8bc",
"assets/assets/images/png/englishhome.png": "dc93c4bee215963c1a375c787261a435",
"assets/assets/images/png/homepage_slide.png": "b2540540e4cd7aaf792fbf26c38b9793",
"assets/assets/images/png/image-details.png": "3a785b3b0e583f4e86cdc9558d5bc105",
"assets/assets/images/png/isariyorumcalltoaction.png": "e691e0b032470ed5bc2c470d16b7535a",
"assets/assets/images/png/isverenimcalltoaction.png": "857ea9184c4fe33b12682f570b0438a2",
"assets/assets/images/png/logo.png": "cbd50971bb5f6470b8ba9019ca38b7b8",
"assets/assets/images/png/lufthansa.png": "6a5525a759204609ea9a2e6a1056816e",
"assets/assets/images/png/medipol.png": "57748dcdd76e99f936eed2767a00deb7",
"assets/assets/images/png/mercedes.png": "ef7665d1326b68898d9f794700fbf04e",
"assets/assets/images/png/radisson.png": "78991d75edb29adf2e54df73723198d0",
"assets/assets/images/png/swis.png": "e5d5ba007946258cf36412fc068378a8",
"assets/assets/images/png/thy.png": "32a2bc5466b3adf0057f59436e4a4212",
"assets/assets/images/png/turkcell.png": "732ee987be475ee6cdbec07cca6d5ca7",
"assets/assets/images/png/user.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"assets/assets/images/png/yenibirislogo.png": "db427a6aeb616a5963f599ba011a8cc4",
"assets/assets/images/svg/addcv.svg": "af11b44a507d995e7ad84267e3d23af8",
"assets/assets/images/svg/briefcase.svg": "473563b1e16c62f518577401f1bea608",
"assets/assets/images/svg/calendar.svg": "965c942b538170594740ee6673caf708",
"assets/assets/images/svg/edit.svg": "8aeadd6497a521cfe6c26e89d36dedfd",
"assets/assets/images/svg/filter-bars.svg": "0f338ccc55f506d9442508ab153d6305",
"assets/assets/images/svg/istihdam.svg": "07e22dbb1d838c96ce31e3508bad2505",
"assets/assets/images/svg/isveren.svg": "f69aacf9d53c8b53dd34d224309cfa17",
"assets/assets/images/svg/is_ilani.svg": "88c6943142b8f4de8e3b314982adc78d",
"assets/assets/images/svg/line.svg": "377ef0ec676349c66f3b1224686eabcf",
"assets/assets/images/svg/location.svg": "aa4c4f24d59962fde44d06b9cd16fedd",
"assets/assets/images/svg/mail.svg": "231c2bcca38feb066bf0338a1508af80",
"assets/assets/images/svg/map-pin.svg": "e0154b23344a29d13d95e671e6f84ef5",
"assets/assets/images/svg/ozgecmis.svg": "a2bf17e7f6d62c3752d9163d88356fdc",
"assets/assets/images/svg/personaldetails.svg": "affa78b45b3b10c027048f85d8865fa0",
"assets/assets/images/svg/phone.svg": "913a443afc99ba7067e839031d0bfe99",
"assets/assets/images/svg/poweredby.svg": "41506d63992a888b5515d450ce59b6bd",
"assets/assets/images/svg/report.svg": "f63b2e2cddcce583924ab12e5d5fcd81",
"assets/assets/images/svg/right-angle.svg": "361ba8512da74e7e9075bf1860f9e5b4",
"assets/assets/images/svg/search.svg": "98af5e4565d417df30d955840da2f3ce",
"assets/assets/images/svg/selectimage.svg": "e73c7055e5544dcd714e8873c304ea52",
"assets/assets/images/svg/user.svg": "29be6ad4e752f8ad1b15e12fe75b8bf9",
"assets/assets/images/svg/yenibirislogo.svg": "91b1f8bcc98d15a3e60e8305ca330868",
"assets/assets/placeholder.jpg": "c91163805026924c82593ebea2f5d064",
"assets/FontManifest.json": "8028b20321014e5defbf74e0c82e8c33",
"assets/fonts/MaterialIcons-Regular.otf": "d005e5c04ddf04b20ba3a51ec42d2452",
"assets/fonts/RedHatDisplay-Bold.ttf": "8b5f3b56df62b8b8e571f35b118abf6d",
"assets/fonts/RedHatDisplay-ExtraBold.ttf": "34c75b8ef96b5ee5b8a7161b8504cf19",
"assets/fonts/redhatdisplay.ttf": "94f0ad55035ce9652969e5c6b379f06c",
"assets/fonts/redhatdisplayitalic.ttf": "b4b58f60640b8802d42e82a16c4fd8bc",
"assets/images/jpg/noLogo.jpg": "6c1fa6f7c06102bd1496656afc16bb32",
"assets/images/png/englishhome.png": "dc93c4bee215963c1a375c787261a435",
"assets/images/png/homepage_slide.png": "b2540540e4cd7aaf792fbf26c38b9793",
"assets/images/png/image-details.png": "3a785b3b0e583f4e86cdc9558d5bc105",
"assets/images/png/isariyorumcalltoaction.png": "e691e0b032470ed5bc2c470d16b7535a",
"assets/images/png/isverenimcalltoaction.png": "857ea9184c4fe33b12682f570b0438a2",
"assets/images/png/logo.png": "cbd50971bb5f6470b8ba9019ca38b7b8",
"assets/images/png/lufthansa.png": "6a5525a759204609ea9a2e6a1056816e",
"assets/images/png/medipol.png": "57748dcdd76e99f936eed2767a00deb7",
"assets/images/png/mercedes.png": "ef7665d1326b68898d9f794700fbf04e",
"assets/images/png/radisson.png": "78991d75edb29adf2e54df73723198d0",
"assets/images/png/swis.png": "e5d5ba007946258cf36412fc068378a8",
"assets/images/png/thy.png": "32a2bc5466b3adf0057f59436e4a4212",
"assets/images/png/turkcell.png": "732ee987be475ee6cdbec07cca6d5ca7",
"assets/images/png/user.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"assets/images/png/yenibirislogo.png": "db427a6aeb616a5963f599ba011a8cc4",
"assets/images/svg/addcv.svg": "af11b44a507d995e7ad84267e3d23af8",
"assets/images/svg/briefcase.svg": "473563b1e16c62f518577401f1bea608",
"assets/images/svg/calendar.svg": "965c942b538170594740ee6673caf708",
"assets/images/svg/edit.svg": "8aeadd6497a521cfe6c26e89d36dedfd",
"assets/images/svg/filter-bars.svg": "0f338ccc55f506d9442508ab153d6305",
"assets/images/svg/istihdam.svg": "07e22dbb1d838c96ce31e3508bad2505",
"assets/images/svg/isveren.svg": "f69aacf9d53c8b53dd34d224309cfa17",
"assets/images/svg/is_ilani.svg": "88c6943142b8f4de8e3b314982adc78d",
"assets/images/svg/line.svg": "377ef0ec676349c66f3b1224686eabcf",
"assets/images/svg/location.svg": "aa4c4f24d59962fde44d06b9cd16fedd",
"assets/images/svg/mail.svg": "231c2bcca38feb066bf0338a1508af80",
"assets/images/svg/map-pin.svg": "e0154b23344a29d13d95e671e6f84ef5",
"assets/images/svg/ozgecmis.svg": "a2bf17e7f6d62c3752d9163d88356fdc",
"assets/images/svg/personaldetails.svg": "affa78b45b3b10c027048f85d8865fa0",
"assets/images/svg/phone.svg": "913a443afc99ba7067e839031d0bfe99",
"assets/images/svg/poweredby.svg": "41506d63992a888b5515d450ce59b6bd",
"assets/images/svg/report.svg": "f63b2e2cddcce583924ab12e5d5fcd81",
"assets/images/svg/right-angle.svg": "361ba8512da74e7e9075bf1860f9e5b4",
"assets/images/svg/search.svg": "98af5e4565d417df30d955840da2f3ce",
"assets/images/svg/selectimage.svg": "e73c7055e5544dcd714e8873c304ea52",
"assets/images/svg/user.svg": "29be6ad4e752f8ad1b15e12fe75b8bf9",
"assets/images/svg/yenibirislogo.svg": "91b1f8bcc98d15a3e60e8305ca330868",
"assets/NOTICES": "90a172840541dcd91903312cdc30898c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/placeholder.jpg": "c91163805026924c82593ebea2f5d064",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f56d7ea5a94a183aa4a59e6a72887543",
"/": "f56d7ea5a94a183aa4a59e6a72887543",
"main.dart.js": "d96e5b29e71901e770abacc42d1634cb",
"manifest.json": "3ddfb52073f2bdcdabc88d3ff1d0cca7",
"splash/img/branding-1x.png": "232acbbea5e1955cac055ba610a89814",
"splash/img/branding-2x.png": "cf13af564954cd5cb4c5ceea1171666c",
"splash/img/branding-3x.png": "8d3c1deb5ed60b395c12bc63a839d5b1",
"splash/img/branding-4x.png": "0b87dd85c6bebeaeece5052338b56b67",
"splash/img/branding-dark-1x.png": "232acbbea5e1955cac055ba610a89814",
"splash/img/branding-dark-2x.png": "cf13af564954cd5cb4c5ceea1171666c",
"splash/img/branding-dark-3x.png": "8d3c1deb5ed60b395c12bc63a839d5b1",
"splash/img/branding-dark-4x.png": "0b87dd85c6bebeaeece5052338b56b67",
"splash/img/dark-1x.png": "21e987325c193113657ecc17a56385a0",
"splash/img/dark-2x.png": "eebbeedaf1ebe377f16eec5cba568d29",
"splash/img/dark-3x.png": "f69c86ec0b71dbe4a1a932e10e503c8e",
"splash/img/dark-4x.png": "f336c37fbb266271b6f51f2980cb8bbe",
"splash/img/light-1x.png": "21e987325c193113657ecc17a56385a0",
"splash/img/light-2x.png": "eebbeedaf1ebe377f16eec5cba568d29",
"splash/img/light-3x.png": "f69c86ec0b71dbe4a1a932e10e503c8e",
"splash/img/light-4x.png": "f336c37fbb266271b6f51f2980cb8bbe",
"version.json": "98d0366a633c10191c3b725c2b60d538"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
