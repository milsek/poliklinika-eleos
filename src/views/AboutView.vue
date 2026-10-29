<script setup>
import { useHead } from '@unhead/vue';
import PageHeader from '@/components/common/PageHeader.vue';

useHead({
  title: 'O nama - Poliklinika Eleos',
});
</script>

<template>
  <div class="min-h-screen pt-28 md:pt-40 pb-20">
    <div class="max-w-[1200px] mx-auto px-6">
      <PageHeader title="O nama" />

      <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        <div class="order-2 md:order-1 text-base text-gray-700 leading-relaxed">
          <p class="text-lg lg:text-xl text-gray-900 leading-relaxed"><span class="font-semibold text-accent-dark">Poliklinika Eleos</span> osnovana je sa idejom da zdravlje pacijenta bude u centru pažnje - ne samo kroz dijagnozu i liječenje, već i kroz razumijevanje, podršku i povjerenje.</p>
          <div class="block md:hidden flex-shrink-0 my-8">
            <img src="/images/dr-jelena.jpg" alt="Dr Jelena Živanović" class="mx-auto rounded-2xl object-cover w-full h-auto sm:w-96" />
          </div>
          <p class="md:mt-6">Osnivač Poliklinike, dr Jelena Živanović, ginekolog i akušer sa preko 20 godina iskustva, svoj radni vijek posvetila je zdravlju žena, donoseći na svijet hiljade beba i prateći žene kroz sve važne životne faze. Generacije pacijentkinja u Brčkom poznaju je upravo kao „svoju doktoricu“ - onu koja uliva sigurnost, razumije potrebe i uvijek ima vremena da sasluša.</p><br>
          <p>Dr Živanović je diplomirala na Medicinskom fakultetu u Nišu, sa prosječnom ocjenom 9,5, a specijalizaciju iz ginekologije i akušerstva završila je na Univerzitetu u Tuzli. Njena stručnost, predanost i ljudski pristup temelj su na kojima počiva Poliklinika Eleos.</p><br>
          <p>Danas, Eleos okuplja tim ljekara različitih specijalnosti sa jednim zajedničkim ciljem - da svakom pacijentu pružimo najbolju moguću njegu, uz osjećaj sigurnosti i poštovanja.</p>

          <p class="mt-8 border-l-4 border-accent pl-5 py-1 italic text-base text-gray-600">Dobro došli u Polikliniku Eleos - mjesto gdje se medicina živi sa ljubavlju.</p>
        </div>
        <div class="hidden md:block order-1 md:order-2 flex-shrink-0">
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl border border-accent/40 translate-x-4 translate-y-4"></div>
            <img src="/images/dr-jelena.jpg" alt="Dr Jelena Živanović" class="relative mx-0 rounded-3xl object-cover w-full h-auto sm:w-96" />
          </div>
          <div class="mt-8 text-center">
            <p class="font-semibold text-gray-900">Dr Jelena Živanović</p>
            <p class="text-sm text-gray-500">Osnivač, specijalista ginekologije i akušerstva</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
