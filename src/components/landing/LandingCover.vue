<script setup>
import { ref, onMounted } from 'vue';
import ContactCard from '../common/misc/ContactCard.vue';

const email1 = ref(null);
const email2 = ref(null);

const specialties = [
  'Ginekologija i trudnoća',
  'Estetska medicina i dermatologija',
  'Interna medicina',
  'Pedijatrija',
  'Psihijatrija',
];

const hours = [
  { days: 'Ponedjeljak - Petak', time: '8:00 - 20:00' },
  { days: 'Subota', time: '9:00 - 15:00' },
  { days: 'Nedjelja', time: 'Neradna' },
];

onMounted(() => {
  const user = "poliklinika.eleos";
  const domain = "gmail.com";
  if (email1.value) {
    email1.value.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
  if (email2.value) {
    email2.value.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
  }
});
</script>

<template>
  <div class="relative">
    <div class="absolute inset-x-0 top-0 h-[85vh] -z-10 bg-linear-to-b from-cream via-cream/60 to-white"></div>

    <div class="min-h-screen flex flex-col md:grid md:grid-cols-2 space-y-6 md:space-y-0 md:space-x-12 max-w-[1200px] mx-auto px-6 pt-24 md:pt-40">
      <div class="flex flex-col space-y-4">
        <p class="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-dark">Privatna zdravstvena ustanova · Brčko</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-accent tracking-wider">POLIKLINIKA<br>ELEOS</h1>
        <p class="lg:w-4/5 text-gray-700 leading-relaxed">Savremena privatna zdravstvena ustanova koja objedinjuje stručnost, posvećenost i najviše standarde medicinske zaštite.</p>

        <div class="flex flex-wrap gap-3 pt-2">
          <a href="tel:+38766012021"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold tracking-wide shadow-sm
            hover:bg-accent-dark hover:shadow-md transition-all duration-200">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            +387 66 012 021
          </a>
          <RouterLink to="/pregledi"
            class="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-800 text-sm font-semibold tracking-wide
            hover:border-accent hover:text-accent-dark transition-all duration-200">
            Naši pregledi &rarr;
          </RouterLink>
        </div>

        <div class="hidden md:flex flex-col items-center md:items-start md:space-y-2 text-gray-800 my-8">
          <ContactCard label="Branislava Nušića 9, Brčko" icon="/icons/location.png" icon-alt="Location Icon" href="/kontakt" />
          <ContactCard label="+387 66 012 021" icon="/icons/phone.png" icon-alt="Phone Icon" href="tel:+38766012021" />
          <ContactCard label="+387 65 906 938" icon="/icons/phone.png" icon-alt="Phone Icon" href="tel:+38765906938" />
          <div class="flex space-x-4 items-center rounded-full h-13 w-80 bg-cream border border-accent/40 px-1.5 hover:border-accent transition-colors duration-200">
            <div class="flex flex-col justify-center bg-white rounded-full h-10 w-10 border border-accent/60 shadow-xs select-none">
              <img src="/icons/mail.png" alt="E-mail Icon" class="h-4.5 w-4.5 mx-auto" />
            </div>
            <p><span ref="email1" class="hover:text-black"></span></p>
          </div>
        </div>
        <div class="hidden md:flex md:flex-col mt-2">
          <h2 class="text-3xl lg:text-4xl font-bold text-[#b9c1cf]">Sve <span class="text-gray-700">najvažnije</span><br>na jednom <span class="text-accent">mjestu</span></h2>
          <div class="flex flex-wrap lg:w-5/6 gap-2 mt-5">
            <span v-for="item in specialties" :key="item"
              class="text-xs text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span class="text-accent-dark">&#x2713;</span> {{ item }}
            </span>
          </div>
        </div>
        <div class="hidden md:flex flex-col mt-4 space-y-3 bg-white border border-gray-200 shadow-sm py-4 px-5 w-80 lg:w-92 rounded-2xl">
          <p class="text-xs font-semibold tracking-[0.15em] uppercase text-accent-dark">Radno vrijeme</p>
          <div v-for="row in hours" :key="row.days" class="flex justify-between text-sm space-x-4 text-gray-700">
            <p class="w-full grow h-min">{{ row.days }}</p>
            <p class="font-medium grow-0 w-36 text-right" :class="{ 'text-gray-400': row.time === 'Neradna' }">{{ row.time }}</p>
          </div>
        </div>
      </div>

      <img src="/images/lobby2.jpg" alt="Poliklinika Eleos Lobby" class="rounded-2xl md:rounded-3xl w-full md:h-[76vh] object-cover">


      <div class="flex flex-col md:hidden mt-2">
        <h2 class="text-3xl font-bold text-[#b9c1cf] text-center">Sve <span class="text-gray-700">najvažnije</span><br>na jednom <span class="text-accent">mjestu</span></h2>
        <div class="flex flex-wrap justify-center gap-2 mt-5">
          <span v-for="item in specialties" :key="item"
            class="text-xs text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1.5">
            <span class="text-accent-dark">&#x2713;</span> {{ item }}
          </span>
        </div>
      </div>
      <div class="flex flex-col md:hidden items-center md:items-start space-y-2 text-gray-800 mt-4">
        <ContactCard label="Branislava Nušića 9, Brčko" icon="/icons/location.png" icon-alt="Location Icon" href="/kontakt" />
        <ContactCard label="+387 66 012 021" icon="/icons/phone.png" icon-alt="Phone Icon" href="tel:+38766012021" />
        <ContactCard label="+387 65 906 938" icon="/icons/phone.png" icon-alt="Phone Icon" href="tel:+38765906938" />
        <div class="flex space-x-4 items-center rounded-full h-13 w-80 bg-cream border border-accent/40 px-1.5">
          <div class="flex flex-col justify-center bg-white rounded-full h-10 w-10 border border-accent/60 shadow-xs select-none">
            <img src="/icons/mail.png" alt="E-mail Icon" class="h-4.5 w-4.5 mx-auto" />
          </div>
          <p><span ref="email2" class="hover:text-black"></span></p>
        </div>
      </div>
      <div class="flex flex-col md:hidden space-y-2 mt-2 bg-white border border-gray-200 shadow-sm py-4 px-5 rounded-2xl w-80 mx-auto">
        <p class="text-xs font-semibold tracking-[0.15em] uppercase text-accent-dark">Radno vrijeme</p>
        <div v-for="row in hours" :key="row.days" class="flex justify-between text-sm text-gray-700">
          <p class="text-gray-500">{{ row.days }}</p>
          <p class="font-medium" :class="{ 'text-gray-400': row.time === 'Neradna' }">{{ row.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
