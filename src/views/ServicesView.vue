<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Pregledi - Poliklinika Eleos',
});
</script>

<template>
  <div class="min-h-screen px-6 lg:px-10 pt-28 md:pt-40 pb-10">
    <div class="max-w-[1200px] mx-auto">
      <!-- Section Intro -->
      <div class="flex flex-col mb-5">
        <p class="text-gray-800 text-lg md:text-xl mb-6">
          U Poliklinici Eleos pružamo sveobuhvatne specijalističke preglede na jednom mjestu, uz stručno osoblje, savremenu opremu i toplu, profesionalnu atmosferu. Naš tim čine ljekari različitih specijalnosti, posvećeni tome da svaki pacijent dobije pažnju, razumijevanje i najbolju moguću njegu.
        </p>
      </div>

      <div class="flex flex-col md:flex-row md:space-x-12">
        <!-- Left Column -->
        <div class="flex flex-col flex-1 space-y-12">
          <!-- Section image -->
          <img src="/images/lobby5.jpg" alt="Office image 2" class="w-full object-cover object-top rounded-2xl md:rounded-3xl h-[500px] md:h-[720px]">

          <!-- Section Ginekologija i akušerstvo -->
          <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-accent mb-4">Ginekologija i akušerstvo</h2>
            <p class="text-gray-800 text-base">
              Preventivni ginekološki pregledi, ultrazvuk, PAPA test, kolposkopija, brisevi, dijagnostika i liječenje ginekoloških stanja, vođenje trudnoće, savjetovanje za trudnice i priprema za porod. Preglede obavlja dr Jelena Živanović, ginekolog-akušer sa preko 20 godina iskustva u radu sa ženama svih generacija.
            </p>
          </div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col flex-1 space-y-12 mt-12 md:mt-0">
          <!-- Section Pedijatrija -->
          <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-accent mb-4">Pedijatrija</h2>
            <p class="text-gray-800 text-base mb-2">
              Briga o najmlađima u sigurnom i prijatnom okruženju.
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>
                <span class="font-medium">Opšti pedijatar</span> - praćenje rasta i razvoja, savjetovanje roditelja, liječenje akutnih i hroničnih stanja, ultrazvučni pregledi
              </li>
              <li>
                <span class="font-medium">Subspecijalista alergolog-pulmolog-imunolog</span> - dijagnostika i terapija alergija, astme, respiratornih problema i imunoloških poremećaja kod djece
              </li>
            </ul>
          </div>
          <!-- Section Dermatologija -->
          <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-accent mb-4">Dermatologija</h2>
            <p class="text-gray-800 text-base">
              Specijalistički pregledi kože, vlasišta i noktiju. Dijagnostika i liječenje akni, dermatitisa, gljivičnih infekcija, alergija, promjena na koži i mladeža, kao i dermoskopski pregledi i savjetovanje u vezi sa zdravljem kože.
            </p>
          </div>
          <!-- Section Interna medicina -->
          <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-accent mb-4">Interna medicina</h2>
            <p class="text-gray-800 text-base">
              Naš internistički tim obuhvata više oblasti:
            </p>
            <ul class="list-disc pl-6 text-gray-800 space-y-1">
              <li><span class="font-medium">Endokrinolog</span> - dijagnostika i liječenje poremećaja štitne žlijezde, dijabetesa i hormonskog balansa</li>
              <li><span class="font-medium">Hematolog</span> - procjena krvne slike, anemije, koagulopatija i drugih hematoloških poremećaja</li>
              <li><span class="font-medium">Angiolog</span> - dijagnostika i liječenje bolesti krvnih sudova i cirkulacije</li>
              <li><span class="font-medium">Onkolog</span> - savjetovanje i praćenje pacijenata sa malignim bolestima</li>
            </ul>
          </div>
          <!-- Section Psihijatrija -->
          <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-accent mb-4">Psihijatrija</h2>
            <p class="text-gray-800 text-base">
              Stručna podrška u oblasti mentalnog zdravlja, sa posebnim fokusom na bolesti zavisnosti, depresiju, anksiozne poremećaje, stres, poremećaje spavanja i druge psihičke smetnje. Pristup je diskretan, empatičan i usmjeren na dugoročno rješenje.
            </p>
          </div>
          <!-- Section Footer -->
          <div class="flex flex-col">
            <p class="text-gray-800 text-lg md:text-base italic">
              U Eleosu vjerujemo da svaki pacijent zaslužuje pažnju, znanje i posvećenost. Naši pregledi nisu samo medicinska procedura - oni su početak puta ka boljem zdravlju i kvalitetnijem životu
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>