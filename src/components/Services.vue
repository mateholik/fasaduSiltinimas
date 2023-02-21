<template>
  <section>
    <div class="container">
      <h2
        class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-6 md:mb-16 uppercase"
      >
        Teikiamos paslaugos klientams
      </h2>

      <div class="mb-10 md:mb-24 md:items-center md:flex md:space-x-12">
        <div class="mb-10 md:w-1/2 md:mb-0">
          <ul class="md:text-xl">
            <li
              class="flex items-center mb-2 md:mb-6 last:mb-0"
              v-for="(item, index) in itemsOne"
              :key="index"
            >
              <img src="/img/check.svg" alt="check" class="mr-2" />
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div class="-mx-4 md:mx-auto md:w-1/2">
          <img class="w-full" src="/img/services1.jpeg" alt="paslaugos" />
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
        <div class="-mx-4 md:mx-auto md:w-1/2">
          <img class="w-full" src="/img/services2.jpeg" alt="paslaugos" />
        </div>
        <div class="mb-10 md:w-1/2 md:mb-0">
          <ul class="md:text-xl">
            <li
              class="flex items-center mb-2 md:mb-6 last:mb-0"
              v-for="(item, index) in itemsTwo"
              :key="index"
            >
              <img src="/img/check.svg" alt="check" class="mr-2" />
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      itemsOne: [
        'Fasado <strong>šiltinimas</strong>',
        '<strong>Cokolio</strong> (pamato) šiltinimas',
        '<strong>Angokraščių</strong> šiltinimas',
        'Sudarome <strong>sąmatas</strong>',
        'Organizuojame <strong>pastolius</strong>',
        '<strong>Montuojame/demontuojame</strong> fasadinius ir kito tipo pastolius',
        'Lankstome ir montuojame <strong>palanges</strong>',
      ],
      itemsTwo: [
        '<strong>Renovuojame</strong> fasadą',
        'Dedame <strong>dekoratyvinį tinką</strong>',
        'Dekoruojame <strong>mozaikiniu tinku</strong>',
        'Atliekame <strong>vidaus apdailos</strong> darbus',
        'Klinkerinių <strong>plytelių</strong> klijavimas',
        'Fasadinių <strong>karnizų ir langų</strong> apvadų montavimas',
        'Tiekiame medžiagas',
      ],
    }
  },
}
</script>

<style></style>
