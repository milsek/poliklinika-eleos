<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useHead } from '@unhead/vue';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref(null);
const email = ref(null);
const showLogo = ref(true);

function updateShowLogo() {
  showLogo.value = window.innerHeight >= 775;
}

function handleResize() {
  updateShowLogo();
}

onMounted(async () => {
  const L = await import('leaflet');
  
  // Fix for the marker icon issue in webpack
  delete L.Icon.Default.prototype._getIconUrl;
  
  let icon = L.icon({
    iconUrl: '/icons/marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const map = L.map(mapContainer.value, {
    center: [44.87455296240108, 18.812621073191014],
    zoom: 17,
    zoomControl: false,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  L.marker([44.87455296240108, 18.812621073191014], { icon, clickable: false }).addTo(map);

  updateShowLogo();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

onMounted(() => {
  const user = "poliklinika.eleos";
  const domain = "gmail.com";
  if (email.value) {
    email.value.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
});

useHead({
  title: 'Kontakt - Poliklinika Eleos',
});
</script>

<template>
  <div class="relative shadow-md min-h-screen pt-16 md:pt-0">
    <div class="grid grid-cols-1 md:flex gap-8 mx-auto">

      <div class="h-[45vh] md:h-screen w-full rounded-b-4xl md:rounded-b-none overflow-hidden shadow-md md:shadow-none" ref="mapContainer"></div>

      <div class="md:absolute flex flex-col h-full left-10 -bottom-36 md:z-40 -mt-6 md:mt-0">
        <div class="bg-white md:bg-light/40 md:w-[23rem] md:min-h-[76vh] md:rounded-2xl md:shadow-md">
          
          <div
            class="hidden md:flex w-full bg-white rounded-2xl py-10 shadow-sm"
            v-if="showLogo"
          >
            <img src="/images/logo.png" alt="Poliklinika Eleos Logo" class="w-[20dvh] max:w-60 h-auto mx-auto">
          </div>
          <div class="space-y-4 p-6">
            <h2 class="text-2xl font-semibold text-gray-900">Kako do nas?</h2>
          
            <div class="space-y-4 text-gray-800">
              <div>
                <h3 class="font-medium text-gray-900 text-lg">Adresa</h3>
                <p>Branislava Nušića 9</p>
                <p>Brčko, Bosna i Hercegovina</p>
              </div>

              <div>
                <h3 class="font-medium text-gray-900 text-lg">Kontakt</h3>
                <p>Telefon: +387 65 906-938</p>
                <div>Email: <span ref="email"></span></div>
              </div>
              
              <div class="flex space-x-2">
                <a href="https://www.instagram.com/poliklinika.eleos/" target="_blank" rel="noopener noreferrer"
                class="text-accent font-medium w-10 h-10 bg-light md:bg-white md:hover:bg-light md:border md:border-gray-300 hover:border-black/70
                 rounded-full flex items-center justify-center transition ease-in-out duration-100">
                  <img src="/icons/instagram-slim.png" alt="Instagram" class="w-7 h-7 select-none">
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575910735290" target="_blank" rel="noopener noreferrer"
                class="text-accent font-medium w-10 h-10 bg-light md:bg-white md:hover:bg-light md:border md:border-gray-300 hover:border-black/70
                 rounded-full flex items-center justify-center transition ease-in-out duration-100">
                  <img src="/icons/facebook-slim.png" alt="Facebook" class="w-7 h-7 select-none">
                </a>
              </div>

              <div>
                <h3 class="font-medium text-gray-900 text-lg pb-1">Radno vrijeme</h3>
                <div class="flex flex-col space-y-1">
                  <div>
                    <p class="text-sm">(Pon - Sub)</p>
                    <p class="text-lg"> 9:00 - 13:00 <br> 15:00 - 19:00</p>
                  </div>
                  <p class="text-lg">Nedjelja neradna</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
.leaflet-container {
  z-index: 1;
}
.leaflet-control-attribution {
  right: 30px !important;
  left: auto !important;
  bottom: 0;
}
.leaflet-attribution-flag {
  display: none !important;
}
</style>
