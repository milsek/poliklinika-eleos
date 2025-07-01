<script setup>
import { ref, onMounted } from 'vue';
import ContactCard from '../common/misc/ContactCard.vue';

const email1 = ref(null);
const email2 = ref(null);

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
  <div class="min-h-screen flex flex-col md:grid md:grid-cols-2 space-y-6 md:space-y-0 md:space-x-12 max-w-[1200px] mx-auto px-6 pt-24 md:pt-40">
    <div class="flex flex-col space-y-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-accent tracking-wider">POLIKLINIKA<br>ELEOS</h1>
      <p class="lg:w-4/5">Savremena privatna zdravstvena ustanova koja objedinjuje stručnost, posvećenost i najviše standarde medicinske zaštite.</p>
      <div class="hidden md:flex flex-col items-center md:items-start md:space-y-2 text-gray-800 my-8">
        <ContactCard label="Branislava Nušića 9, Brčko" icon="/icons/location.png" icon-alt="Location Icon" />
        <ContactCard label="+387 65 906-938" icon="/icons/phone.png" icon-alt="Location Icon" />
        <div class="flex space-x-4 items-center rounded-full h-13 w-80 bg-light border-2 border-accent px-1">
          <div class="flex flex-col justify-center bg-white rounded-full h-10 w-10 border-2 border-accent select-none">
            <img src="/icons/mail.png" alt="E-mail Icon" class="h-4.5 w-4.5 mx-auto" />
          </div>
          <p><span ref="email1" class="hover:text-black"></span></p>
        </div>
      </div>
      <div class="hidden md:flex md:flex-col mt-2">
        <p class="text-4xl font-bold text-[#b9c1cf]">Sve <span class="text-gray-700">najvažnije</span><br>na jednom <span class="text-accent">mjestu</span></p>
        <div class="grid grid-cols-2 lg:grid-cols-3 lg:w-5/6 text-xs text-gray-600 space-y-1 mt-4">
          <p>&#x2713; Ginekologija</p>
          <p>&#x2713; Trudnoća</p>
          <p>&#x2713; Pedijatrija</p>
          <p>&#x2713; Interna medicina</p>
          <p>&#x2713; Dermatologija</p>
          <p>&#x2713; Psihijatrija</p>
        </div>
      </div>
      <div class="hidden md:flex flex-col mt-2 space-y-3 bg-gray-300/30 py-2 px-4 w-80 lg:w-92 rounded-lg">
        <div class="flex justify-between text-sm space-x-4 text-gray-700 ">
          <p class="w-full grow h-min">Ponedjeljak - Subota</p>
          <p class="font-medium grow-0 w-36 text-right">
            9:00 - 13:00<br>
            15:00 - 19:00 
          </p>
        </div>
        <div class="flex justify-between rounded-2xl text-sm space-x-4 text-gray-700 ">
          <p class="w-full grow h-min">Nedjelja</p>
          <p class="font-medium grow-0 w-36 text-right">
            Neradna
          </p>
        </div>
      </div>
    </div>

    <img src="/images/lobby1.jpg" alt="Poliklinika Eleos Lobby" class=" rounded-2xl md:rounded-3xl w-full md:h-[76vh] object-cover">
    
    <div class="flex flex-col md:hidden mt-2">
      <p class="text-4xl font-bold text-[#b9c1cf]">Sve <span class="text-gray-700">najvažnije</span><br>na jednom <span class="text-accent">mjestu</span></p>
      <div class="grid grid-cols-3 text-xs text-gray-600 space-y-1 mt-2">
        <p>&#x2713; Ginekologija</p>
        <p>&#x2713; Trudnoća</p>
        <p>&#x2713; Pedijatrija</p>
        <p>&#x2713; Interna medicina</p>
        <p>&#x2713; Dermatologija</p>
        <p>&#x2713; Psihijatrija</p>
      </div>
    </div>
    <div class="flex flex-col md:hidden items-center md:items-start space-y-2 text-gray-800 mt-4">
      <ContactCard label="Branislava Nušića 9, Brčko" icon="/icons/location.png" icon-alt="Location Icon" />
      <ContactCard label="+387 65 906-938" icon="/icons/phone.png" icon-alt="Location Icon" />
      <div class="flex space-x-4 items-center rounded-full h-13 w-80 bg-light border-2 border-accent px-1">
        <div class="flex flex-col justify-center bg-white rounded-full h-10 w-10 border-2 border-accent select-none">
          <img src="/icons/mail.png" alt="E-mail Icon" class="h-4.5 w-4.5 mx-auto" />
        </div>
        <p><span ref="email2" class="hover:text-black"></span></p>
      </div>
    </div>
    <div class="flex justify-center md:hidden divide-x divide-gray-200 mt-2">
      <div class="pr-10 md:pr-12">
        <p class="text-xs text-gray-500 mb-1">Pon - Sub</p>
        <p class="text-sm">
          9:00 - 13:00<br>
          15:00 - 19:00 
        </p>
      </div>
      <div class="pl-10 md:pl-12 mb-1">
        <p class="text-xs text-gray-500">Nedjelja</p>
        <p class="text-sm h-full">Neradna</p>
      </div>
    </div>
  </div>
</template>
