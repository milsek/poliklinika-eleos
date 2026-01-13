<script setup>
import { useHead } from '@unhead/vue';
import PriceBoard from '@/components/PriceBoard.vue';

useHead({
  title: 'Cjenovnik - Poliklinika Eleos',
});

const services = [
  {
    categoryName: "Ginekološke usluge",
    examinations: [
      { name: "Ginekološki pregled", price: 30 },
      { name: "Ultrazvučni pregled (prvi)", price: 50 },
      { name: "Ultrazvučni pregled kontrola", price: 40 },
      { name: "PAPA test", price: 30 },
      { name: "Kolposkopija", price: 50 },
      { name: "Toalet pesara", price: 30 },
      { name: "Vaginalno ispiranje", price: 30 },
      { name: "CTG", price: 20 },
      { name: "Uzimanje briseva", price: 30 },
      { name: "Ekstrakcija spirale", price: 30 },
      { name: "Toaleta epiziotomije", price: 30 },
      { name: "Previjanje rane", price: 20 },
      { name: "Previjanje sa vađenjem konaca", price: 30 },
      { name: "Ginekološki pregled i ultrazvuk", price: 70 },
      { name: "Ginekološki pregled, ultrazvuk, PAPA test", price: 100 },
      { name: "Ginekološki pregled, ultrazvuk, PAPA test, kolposkopija", price: 150 },
      { name: "Ginekološki pregled, ultrazvuk, PAPA test, kolposkopija, brisevi", price: 160 },
      { name: "Biopsija grlića sa PH nalazom", price: 150 },
      { name: "Polipektomija sa PH nalazom", price: 80 },
      { name: "Skidanje kondiloma (radiotalas)", price: 100 },
      { name: "Ekscizija sa PH nalazom", price: 100 },
      { name: "Hijaluron intimne regije", price: 400 },
      { name: "PRP tretman", price: 300 },
    ]
  },
  {
    categoryName: "Pedijatrijske usluge",
    examinations: [
      { name: "Pregled subspecijaliste pedijatra", price: 80 },
      { name: "Prvi pregled pedijatra", price: 60 },
      { name: "Kontrolni pregled pedijatra", price: 40 },
      { name: "Ultrazvučni pregled pedijatra", price: 60 },
      { name: "Pregled pedijatra i ultrazvuk kukova", price: 90 },
    ]
  },
  {
    categoryName: "Specijalistički pregledi",
    examinations: [
      { name: "Pregled psihijatra", price: 100 },
      { name: "Pregled interniste", price: 80 },
      { name: "Pregled interniste sa ultrazvukom", price: 100 },
      { name: "Pregled dermatologa", price: 80 },
      { name: "Pregled subspecijaliste, dr sci, prof dr", price: 80 },
      { name: "Ultrazvuk dojke", price: 70 },
    ]
  },
  {
    categoryName: "Terapije i obrade",
    examinations: [
      { name: "Inhalacija", price: 10 },
      { name: "I.M. terapija", price: 20 },
      { name: "I.V. infuzija", price: 40 },
      { name: "Obrada rane", price: 10 },
      { name: "Intervencija radiotalasom", price: 100 },
    ]
  },
];
</script>

<template>
  <div class="min-h-screen pt-28 md:pt-40 pb-6">
    <div class="max-w-[1200px] mx-auto px-6">

      <div class="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-x-10">
        <PriceBoard :services="services.slice(0, 1)" />
        <div class="space-y-10">
          <PriceBoard :services="services.slice(1)" />
        </div>
      </div>

      <p class="mt-2 text-sm text-gray-600">* Sve cijene u cjenovniku su informativnog karaktera.<br>Podaci ažurirani 13. januara 2026.</p>
    </div>
  </div>
</template>
