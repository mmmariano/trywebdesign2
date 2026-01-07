'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "593bb4e8c0c976646c2cc67376686754",
".git/config": "6a6e15b7d42a1a76518f8cef9619ee99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d4a8e0b9ce1a82567d221f6ec07bbbc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77f3a25c6bac991f8bcb3302376bb2b5",
".git/logs/refs/heads/master": "77f3a25c6bac991f8bcb3302376bb2b5",
".git/objects/03/76f276130853a7789e3b0e465fc1a6311f7da8": "4b3f9f6c85a63bd01c17d629472fb26d",
".git/objects/05/faf76a46f8c8e60aaeb88e603d6e5c8f211b87": "864b4822927275604e06150e7bb9f621",
".git/objects/06/219ff311f2811d916526016eb0c1adcf2938c0": "70e70ea951cc1b7526fcad2ed4bb5032",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/14/fb339def9f932c72dd3fa9a3d1423853af6080": "d92351ca69adb2a19362b51f8ce46748",
".git/objects/1f/2f3aec820087582cc0fff38c315ed844719880": "b3f318fd355b6c9c8e4e7746494003bf",
".git/objects/1f/7ec6e3f7a13149daa6d4e8b63603721f6c490d": "d46eeae2218d1905eaf64384dabafda3",
".git/objects/2a/3a541073228e5a8b657d20c391b918b9c980d0": "2b960001e93a40c8e9792d9932860086",
".git/objects/2f/e0302926b697bc2428c306ac37e13397989d15": "6a3726fa2036cffb16cb36b53fdc4477",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/a1e670a451632ad4da682cd40c8c42977e1e9e": "7bd82da184b9714600131dfedc1a9ace",
".git/objects/3d/77d3a183b1190dac5f6254a3d527a1e1e8cb96": "0fbbfa4e05994e814adf14a2c44e8935",
".git/objects/4c/f8d818e645eba0a6f70d77eba0c3234ad71d24": "400aa024121f51a1613eb194bacba283",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/ce675b6ef09a142a1bcf17fb607f568ddfb087": "49ee8c2543650e4f075acdb00b76e100",
".git/objects/59/ba80f0bbad646b832185b691582d072a9586f1": "7584cbd005873b52b418117552721006",
".git/objects/5c/9e32282d6e0b5f47874229a984df85b3a2e282": "623c7a0b39bc63816691510b52a392c7",
".git/objects/5f/a0fb830dc00a6fff840ba573f927717eab9e40": "2e16b94df5045cebd164137e9aef8ac2",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/6f74f9a44012951ef9aba478fee52ddac61562": "3aa112764103a01a28872a6a14660c93",
".git/objects/6e/0d001fdaf91e18542f4fdafab03fc2ddc96fe5": "1b67b89bb9adb19b34e9a59c43ca1e0e",
".git/objects/6f/347905be6cf1617c19fa478c6d72ac919ce940": "463a100024b8d5b16807e56373fa5dad",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/0bcbb7d57459dcdc255b2def32420e9b695bb4": "42e7039168df9eac2449650ecd0b0c89",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/8d81d7d2be0932ad43626c55df838203f51aa6": "3fea7e0287dc5dd2e8553509ce7b4230",
".git/objects/7c/f99b50d9d79e078f8ab66325faf884b98fcfbe": "a43f21db4ad000da7666ee20d9992677",
".git/objects/81/d223a9b75c1a535f1aa1b19d43cfaef360215a": "26b14b889c6ae41860379555744e2b1a",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/83/8f5c90e50d70619fa40e6046b6cd97bd5d8ee7": "d81adc11333e28db156cb806d58d19c3",
".git/objects/84/0b256ba7b960168e79df58cb9b18f7bec67d87": "5ce97a6c944dc794eac23504fd9a7396",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/3579cf1c6c0732877b925ead351f75d0d642f7": "f8481c7e0bd47d2867c78dfd880dcbd7",
".git/objects/89/39926cc5aa3f958df6666ed0678eee2c09d193": "c668e1dd4c216843ded814062b036855",
".git/objects/8a/e04fe0c8b5b7268f67fdace74c007748a4ff2c": "cc0dc3b582c89bce08c265eeb7befce5",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/ba37dc7404b9627fa69c6915d36e2bb94e15cd": "53b751cc588f11663b6b24b401e87248",
".git/objects/9b/3e67b6c53173eb10e78a4d42f6191bf8df97db": "33919d995cc0cde0bf05ff8a5db3bf10",
".git/objects/a7/389237141d12735791d5fc0a904b946bb4d739": "b947cab4219e5f7edcbb06764fc0a58a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/820199d25a14af08550e338c46c56c2a9382cb": "d7f179e6fd3b2542ffed6b90a9fe1baf",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/24336ab6a0728473ae10124fbc8c467235bd26": "ce6d255f4512b1993c1732176e595e75",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/c0cadd8d59cda8b2df174d48f52d16ae07fc0f": "fe4010fb88efa7e9e17d5b2e2059be10",
".git/objects/bd/0081a6bd7063e93e44e1e97e4839b5eeb77d9c": "62fa9899a28a753e301fba697f395443",
".git/objects/be/6ddc3e1827639c5af238f6ce0b499128a20caf": "a2eb19ff1d9db1dd4b1fb0d3bd6d3f79",
".git/objects/c5/d050e11fa1a28eb2fd5e2e2152871595567e27": "b5c2c0ca4b9e629944930250efddc60c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/b5813ebaab96775da58be1ce22e431a91b203d": "b8dabc46f75bdcb67ce542fc2e1878bd",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e4/edad8eb8836d50bbb3af6c6c8ccb34eb3e84c2": "79d178af804a55a289c27f713cde8398",
".git/objects/e6/a4b446d4d667f62452871e282d3c3c498396de": "21181fb767b4da0b6dd0a85cfb650290",
".git/objects/e7/1416323682f2674cfb74fd18a275c59a111544": "d2f723c70626edc1eed9231d1f8838f1",
".git/objects/e8/e5bfb20598195fc4cb104909210cdfde026ed4": "429c89f6fed126e8a789fcb8921234b6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/ee/61e0495be51c8b35951ba882ef0962e6903bfc": "6a4f584b033bca45aa48f77d6bc6f576",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/2567ab4d4feacabb95711ab86367a543294be1": "997a2897bfed65397c8a5393ad40878b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "6b9151cf2af9ea24d4d2f6ee4d7a13d3",
"assets/AssetManifest.bin": "f4d7ae9ea2bcc9f41327a77751a5e61c",
"assets/AssetManifest.bin.json": "6cf81e058829ab23d483fbffba73ad2b",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "cea41fda7063c59f8f29ac3dffb7de5a",
"assets/lib/assets/advogado.webp": "289f4dca200c4da3b84faca2e9b2ccda",
"assets/lib/assets/favicon.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"assets/lib/assets/homem.png": "0d05ffb35b1fc075675c83587540dabc",
"assets/lib/assets/homem.webp": "bc8c3a777d10805c070b6ddd7548d18b",
"assets/lib/assets/ima_portifolio.webp": "9624da144797fd006ce2152a860f03b7",
"assets/lib/assets/lion.webp": "c6a848dd1e13e3b5c7ded571d33b0e75",
"assets/lib/assets/logo.webp": "b6127db88319ac5753bdd394a0283f4a",
"assets/lib/assets/portifolio_psicologia.webp": "34adad6317784938b8a0e902447bf7d0",
"assets/lib/assets/tatuador.webp": "83575168b4064a31f756368010337df7",
"assets/lib/assets/vittal.webp": "c5a2bd9c86774853ec09813a940b7c83",
"assets/lib/assets/vittal_consultorio.jfif": "f1d832cc6a87ae9c683b446422431020",
"assets/lib/assets/vittal_principal.jfif": "0b0704e51b810476488cab80293c62cf",
"assets/lib/assets/wing.webp": "4ffde607fa52934ff8e627624995fa59",
"assets/NOTICES": "c24b9f88c0d91c062552e7165fa83099",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "e694c1bb2d5a59b6a0f3f1d52b28cac5",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "1d349336a39be7484f87ea311ee61e4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c1a5bfcc55a54aec6729e7658bff21b9",
"icons/Icon-192.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"icons/Icon-512.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"icons/Icon-maskable-192.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"icons/Icon-maskable-512.png": "aa243143b5e4c920c4d63d926f0d6ca8",
"index.html": "28565655ffac4bba9bd95ea9b5764859",
"/": "28565655ffac4bba9bd95ea9b5764859",
"main.dart.js": "b9ead71bde192609b1c32dc425a43453",
"manifest.json": "7c18a6b581cb35508ec636601befdf33",
"version.json": "23dd7ede86624ac8fdf885dca0d117c5",
"_headers": "678b109745d204e72cee6f95278d5d6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
