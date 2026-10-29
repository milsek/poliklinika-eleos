<script setup>
import { useHead } from '@unhead/vue';
import PageHeader from '@/components/common/PageHeader.vue';

useHead({
  title: 'Pregledi - Poliklinika Eleos',
});
</script>

<template>
  <div class="min-h-screen pt-28 md:pt-40 pb-10">
    <div class="max-w-[1200px] mx-auto px-6">
      <PageHeader title="Pregledi" />

      <!-- Section Intro -->
      <div class="flex flex-col mb-10">
        <p class="text-gray-700 text-base md:text-lg leading-relaxed lg:w-5/6">
          U Poliklinici Eleos pružamo sveobuhvatne specijalističke preglede na jednom mjestu, uz stručno osoblje, savremenu opremu i toplu, profesionalnu atmosferu. Naš tim čine ljekari različitih specijalnosti, posvećeni tome da svaki pacijent dobije pažnju, razumijevanje i najbolju moguću njegu.
        </p>
      </div>

      <div class="flex flex-col md:flex-row md:space-x-10">
        <!-- Left Column -->
        <div class="flex flex-col flex-1 space-y-6">
          <!-- Section image -->
          <img src="/images/lobby5.jpg" alt="Office image 2" class="w-full object-cover object-top rounded-2xl md:rounded-3xl h-[500px] md:h-[720px]">

          <!-- Section Ginekologija i akušerstvo -->
          <div class="service-card">
            <h2 class="service-title">Ginekologija i akušerstvo</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              Preventivni ginekološki pregledi, ultrazvuk, PAPA test, kolposkopija, brisevi, dijagnostika i liječenje ginekoloških stanja, vođenje trudnoće, savjetovanje za trudnice i priprema za porod. Preglede obavlja dr Jelena Živanović, ginekolog-akušer sa preko 20 godina iskustva u radu sa ženama svih generacija.
            </p>
          </div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col flex-1 space-y-6 mt-6 md:mt-0">
          <!-- Section Pedijatrija -->
          <div class="service-card">
            <h2 class="service-title">Pedijatrija</h2>
            <p class="text-gray-700 text-base mb-2 leading-relaxed">
              Briga o najmlađima u sigurnom i prijatnom okruženju.
            </p>
            <ul class="service-list">
              <li>
                <span class="font-medium text-gray-900">Opšti pedijatar</span> - praćenje rasta i razvoja, savjetovanje roditelja, liječenje akutnih i hroničnih stanja, ultrazvučni pregledi
              </li>
              <li>
                <span class="font-medium text-gray-900">Subspecijalista alergolog-pulmolog-imunolog</span> - dijagnostika i terapija alergija, astme, respiratornih problema i imunoloških poremećaja kod djece
              </li>
            </ul>
          </div>
          <!-- Section Dermatologija -->
          <div class="service-card">
            <h2 class="service-title">Dermatologija</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              Specijalistički pregledi kože, vlasišta i noktiju. Dijagnostika i liječenje akni, dermatitisa, gljivičnih infekcija, alergija, promjena na koži i mladeža, kao i dermoskopski pregledi i savjetovanje u vezi sa zdravljem kože.
            </p>
          </div>
          <!-- Section Interna medicina -->
          <div class="service-card">
            <h2 class="service-title">Interna medicina</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              Naš internistički tim obuhvata više oblasti:
            </p>
            <ul class="service-list">
              <li><span class="font-medium text-gray-900">Endokrinolog</span> - dijagnostika i liječenje poremećaja štitne žlijezde, dijabetesa i hormonskog balansa</li>
              <li><span class="font-medium text-gray-900">Hematolog</span> - procjena krvne slike, anemije, koagulopatija i drugih hematoloških poremećaja</li>
              <li><span class="font-medium text-gray-900">Angiolog</span> - dijagnostika i liječenje bolesti krvnih sudova i cirkulacije</li>
              <li><span class="font-medium text-gray-900">Onkolog</span> - savjetovanje i praćenje pacijenata sa malignim bolestima</li>
            </ul>
          </div>
          <!-- Section Psihijatrija -->
          <div class="service-card">
            <h2 class="service-title">Psihijatrija</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              Stručna podrška u oblasti mentalnog zdravlja, sa posebnim fokusom na bolesti zavisnosti, depresiju, anksiozne poremećaje, stres, poremećaje spavanja i druge psihičke smetnje. Pristup je diskretan, empatičan i usmjeren na dugoročno rješenje.
            </p>
          </div>
          <!-- Section Footer -->
          <div class="flex flex-col border-l-4 border-accent pl-5 py-1">
            <p class="text-gray-700 text-base italic leading-relaxed">
              U Eleosu vjerujemo da svaki pacijent zaslužuje pažnju, znanje i posvećenost. Naši pregledi nisu samo medicinska procedura - oni su početak puta ka boljem zdravlju i kvalitetnijem životu
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/main.css";

.service-card {
  @apply flex flex-col rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm
    transition-all duration-300 hover:border-accent/50 hover:shadow-md;
}

.service-title {
  @apply text-lg md:text-xl font-semibold text-accent-dark mb-3;
}

.service-list {
  @apply mt-3 space-y-2 text-gray-700;
}

.service-list li {
  @apply relative pl-5;
}

.service-list li::before {
  content: '';
  @apply absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent;
}
</style>
