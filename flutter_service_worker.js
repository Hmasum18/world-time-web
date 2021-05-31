'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4c43d9746ccfc6203c9b21f3c1e73651",
".git/config": "32c0d87625da25e8c0b7166b8a5fa1f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e809fd3c9878102329d1575c5b4c9170",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7565b405e1bd8a742daa8b93d4afbb35",
".git/logs/refs/heads/master": "7565b405e1bd8a742daa8b93d4afbb35",
".git/logs/refs/remotes/origin/master": "1c94507d530e06877fd5a12e98138125",
".git/objects/06/cae07e058374cf38b928905e67c17dbe0cc1c6": "f82403b971afe9a649754eeda4587bdf",
".git/objects/08/bc54f6e251f7720aa8b5a5a12b86aebb7a8f4e": "e6223a2944d5bbc30df63b12f04175ee",
".git/objects/0b/b5a508eb0a14f12a63e7ff27ea11ebfb74ff7d": "5b305d5919f9130dc1efaad88911225b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe589f653eb9210a6b6523f0661e011f9864c1": "078ea9cb93c7ac647acc6d486021c375",
".git/objects/13/e7e59bd51435c1216826a48e4e0af026a9a0ca": "388ee133f79bb25f74c017132345a4c0",
".git/objects/14/8314f7b4f1b2e9f3761ac2682bc9afba41f03b": "74288d491011bf12fce95c89c059729e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/3e642fb0326af57da5adb96c36f131621107a3": "2113f4cca8f9a9c43acdfd0d1608d41f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/2b333b53749baa6786df1ba056a2c159ca29ae": "55644f87178c43598b281bbeaaa4fc30",
".git/objects/22/c819ae8586af614cc62ee842d126115f9347f1": "974060d90c6aa2519de526c93404a4bd",
".git/objects/2a/c00c426b65468eb807232adaf134bac8b864dc": "9e1b6815085db2336de6548c7d35c105",
".git/objects/2d/bda37df24be241cb48032747a5eef9f72ffa12": "6200f6e06d4b5ababc09f9089f419468",
".git/objects/35/4be16242fa85aac4dca5d611d5746942a82b8b": "1a10187e93475e061b57b5f57b243a1c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d7d6a87431899a0e85339a20a69d7199beb7ff": "736ac09ab5868caeaed0c5b03c0594f2",
".git/objects/4a/dafb7e43af2775267b8a97b008a8ecf14d017f": "f866bf1e5e296723eaf64d49aba1880d",
".git/objects/67/c1064f5da706614efede0cc3191d071ff5ed6e": "800ac7474fbc3653bc5ad9bc1aa73aab",
".git/objects/75/ee7f96d700b0aa2b3dad1fb28da331b970350a": "dd86f790da57cd361ce9a8e47e4ce3b3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/ed95ab10848c74d799124f458b5fc05e44b42a": "4762996efa2a80aa5161f704e6644448",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/7b310ffd465066cdb22d3250c018b59b4826ea": "c4e4aea4bb7de4a8a7c309fdf5f3984f",
".git/objects/95/5f130cb985d143edf68e2e77b7ee1fe4e0c76a": "2a08d5a90670d3382c5bebeabb2708e4",
".git/objects/96/24a215a684967f1c1867b5ed811ea81069031a": "9fd49aee15ff39e8c4d526a63bb2ea60",
".git/objects/97/71943b03e84b4c5623017793b692aca93d39fb": "ba0941c85f1d4e4ead1260cda4c0093a",
".git/objects/a7/60393bced39689fd51bc1e93860deb18f6257a": "2a9dd66bd195bf9b1c694dadb07bb106",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ad/8322ab193d25004706e53f850d12c7ce68e23f": "89b07d231998f6e19ab4a0b0c5574966",
".git/objects/b5/b096313d85658dd104361e3686f050e6ed9f47": "b9e12e7603c79b6c33c27e1b3b5aa708",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c6/d3a87c1678758fb20237b79699f8db6a4e1ba1": "2cb8bc4b373fe0b06fd53154a84c375e",
".git/objects/d1/39f2e79a7ac1bc8b4cf4235684880f253d490e": "eb7c5690fa1929245c34e52fb9fb3139",
".git/objects/dd/6d3be00c1263cbd830d9b22cd12354d2252ead": "d8e70460d7a38651568d3a710e3e0e7e",
".git/objects/e7/a791180cf1a0d7fe5a6e6bf0db3280e5c9d0fb": "28f709cd074f0b9eea5aef308f804880",
".git/objects/e9/81ef169e272002da4f444540a9b0f2f3b631c6": "f6a2e7d12bde9ddd0120b93075848f51",
".git/objects/eb/14320b2185bf1aa1de6e5cfd93489a80b903db": "d93406e55f7153bdd9888eed0ec7493a",
".git/objects/ed/4fe959338a5959c07d1a913e393934fa5a4870": "053f0cc75e517f0893756e0f14cbc7ce",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "1519bee379612f1ca316052b7f0e9b78",
".git/refs/remotes/origin/master": "1519bee379612f1ca316052b7f0e9b78",
"assets/AssetManifest.json": "12b66d89d0cec3813739966009d50282",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/aus.jpg": "a4504f3a60a972a7f7bf8ed02bb1683c",
"assets/images/ban.png": "56973b8d05c5abe37d08617ed4fb121c",
"assets/images/day.jpg": "e122192dc9d26a5b19b2ad1a7e44b346",
"assets/images/ind.png": "3cfcc73b40b65aa7e49744ccc73790a5",
"assets/images/japan.jpg": "e23d20d64854f34778e1a16676112975",
"assets/images/my_profile_pic.jpg": "498fb3d68993aa01d78ec2cdfe6fb140",
"assets/images/night.jpg": "c73624182ccb78c48f22027db6d345db",
"assets/images/uk.png": "da54396bcf726d2ff2572fb808c8c6cf",
"assets/images/usa.png": "3853d38197387a58cf5fa2f4779d759c",
"assets/NOTICES": "939a0863bacca24842dee450971b52ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b81c3136d81d55d20e7740f5c6810ba1",
"/": "b81c3136d81d55d20e7740f5c6810ba1",
"main.dart.js": "382abaf811d6f322c3a450a40ea03240",
"manifest.json": "0536a2d9623a97ce9525f08e4abd9ed4",
"version.json": "a9851116ebcede990c03f07b539c7ace"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
