<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'O nama - Poliklinika Eleos',
});
</script>

<template>
  <div class="min-h-screen px-6 lg:px-10 pt-28 md:pt-44 pb-20">
    <div class="max-w-[1200px] mx-auto">

      <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
        <div class="order-2 md:order-1 text-lg md:text-base lg:text-lg text-gray-800">
          <p><span class="font-semibold text-accent">Poliklinika Eleos</span> osnovana je sa idejom da zdravlje pacijenta bude u centru pažnje - ne samo kroz dijagnozu i liječenje, već i kroz razumijevanje, podršku i povjerenje.</p>
          <div class="block md:hidden flex-shrink-0 my-8">
            <img src="/images/dr-jelena.jpg" alt="Dr Jelena Živanović" class="mx-auto rounded-2xl object-cover w-full h-auto sm:w-96" />
          </div>
          <p>Osnivač Poliklinike, dr Jelena Živanović, ginekolog i akušer sa preko 20 godina iskustva, svoj radni vijek posvetila je zdravlju žena, donoseći na svijet hiljade beba i prateći žene kroz sve važne životne faze. Generacije pacijentkinja u Brčkom poznaju je upravo kao „svoju doktoricu“ - onu koja uliva sigurnost, razumije potrebe i uvijek ima vremena da sasluša.</p><br>
          <p>Dr Živanović je diplomirala na Medicinskom fakultetu u Nišu, sa prosječnom ocjenom 9,5, a specijalizaciju iz ginekologije i akušerstva završila je na Univerzitetu u Tuzli. Njena stručnost, predanost i ljudski pristup temelj su na kojima počiva Poliklinika Eleos.</p><br>
          <p>Danas, Eleos okuplja tim ljekara različitih specijalnosti sa jednim zajedničkim ciljem - da svakom pacijentu pružimo najbolju moguću njegu, uz osjećaj sigurnosti i poštovanja.</p><br>

          <i class="text-sm">Dobro došli u Polikliniku Eleos - mjesto gdje se medicina živi sa ljubavlju.</i>
        </div>
        <div class="hidden md:block order-1 md:order-2 flex-shrink-0">
          <img src="/images/dr-jelena.jpg" alt="Dr Jelena Živanović" class="mx-0 rounded-2xl object-cover w-full h-auto sm:w-96" />
        </div>
      </div>
    </div>
  </div>
</template>
