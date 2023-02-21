<template>
  <section>
    <div class="container">
      <h2
        class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-6 md:mb-16 uppercase"
      >
        fasado šiltinimas
      </h2>
      <p class="mb-4">
        Lietuvoje šilumos izoliacijai dažniausiai naudojamas polistirenas, neoporas ir
        mineralinė vata. Statant nekilnojamajį turtą susimąstome apie jo estetinį vaizdą,
        ilgaamžiškumą ir eksplotacinius kaštus. Paminėtus dalykus įtakoja kokybiškas
        fasado apšiltinimas.
      </p>
      <p class="mb-16">
        Todėl tai yra labai svarbus statybų etapas. Namų renovacijoje fasado šiltinimas
        yra vienas svarbiausių ir didžiausią paklausą turinčių darbų. Fasado apdailai
        naudojami mineraliniai, silikoniniai, akriliniai dekoratyviniai tinkai. Naudojami
        dviejų struktūrų tinkai: sąmanėlė ir lietutis.
      </p>

      <h3 class="mb-10 text-2xl font-semibold uppercase md:mb-16">
        Fasado šiltinimo nauda
      </h3>
      <div class="grid grid-cols-2 mb-24 md:grid-cols-4">
        <div
          v-for="(item, index) in items"
          :key="item.icon"
          class="px-4 lg:px-10 min-h-[160px] md:min-h-0"
          :class="
            !isMobile
              ? [
                  {
                    'bg-white': index === 0 || index === 2,
                  },
                  {
                    'bg-[#3E3E3E] text-white': index === 1,
                  },
                  {
                    'bg-[#3e3e3e80] text-white': index === 4,
                  },
                  {
                    'bg-[#3e3e3ead] text-white': index === 3,
                  },
                ]
              : [
                  {
                    'bg-white': index === 1 || index === 2,
                  },
                  {
                    'bg-[#3E3E3E] text-white': index === 0 || index === 4,
                  },
                  {
                    'bg-[#3e3e3e80] text-white': index === 3,
                  },
                ]
          "
        >
          <img
            :src="item.icon"
            class="block w-10 h-10 md:w-16 md:h-16 mx-auto mt-6 md:mt-[60px] mb-3 mb:mb-6"
            alt="icon"
          />
          <div
            v-html="item.text"
            class="mb-6 text-sm text-center md:text-xl has-bold md:mb-14"
          ></div>
        </div>
      </div>
      <h3 class="mb-10 text-2xl font-semibold uppercase md:mb-16">
        Fasado šiltinimo schema
      </h3>
      <div class="md:flex md:flex-row-reverse md:items-center">
        <div class="block mb-10 md:mb-0 md:w-1/2 md:py-4 md:bg-[#f1f1f1]">
          <img src="/img/info.png" alt="Fasado šiltinimo schema" class="md:mx-auto" />
        </div>
        <ul class="md:w-1/2">
          <li
            v-for="(item, index) in points"
            :key="item"
            class="flex items-center bg-[#3E3E3E] px-4 py-3 mb-2 last:mb-0 md:max-w-sm"
          >
            <span
              class="w-[18px] h-[18px] bg-white text-[ #3E3E3E] text-sm font-medium flex justify-center items-center mr-2 rounded-full"
              >{{ index + 1 }}</span
            >
            <span class="text-white medium">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      items: [
        {
          icon: '/img/info/1.svg',
          text: 'Šildymo išlaidų sumažinimas - <strong>Ekonomiškumas</strong>',
        },
        {
          icon: '/img/info/2.svg',
          text: '<strong>Palankaus</strong> mikroklimato sukūrimas',
        },
        {
          icon: '/img/info/3.svg',
          text: '<strong>Estetinė</strong> išvaizda',
        },
        {
          icon: '/img/info/4.svg',
          text: '<strong>Apsauga</strong> nuo išorinių aplinkos veiksnių',
        },
        {
          icon: '/img/info/5.svg',
          text: '<strong>Padidėja</strong> nekilnojamo turto <strong>vertė</strong>',
        },
      ],
      points: [
        'Klijai',
        'Fasadinė izoliacinė plokštė',
        'Armavimo tinklelis',
        'Armuojamasis sluoksnis',
        'Fasadinis tinkas',
      ],
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768
    },
  },
}
</script>

<style></style>
