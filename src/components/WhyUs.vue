<template>
  <section style="background: rgba(0, 0, 0, 0.04)">
    <div class="container">
      <h2 class="font-semibold text-2xl md:text-[40px] md:leading-normal mb-10 md:mb-16">
        MUS VERTA RINKTIS, NES:
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div
          v-for="(item, index) in items"
          :key="item.icon"
          class="px-4 lg:px-10 min-h-[200px] md:min-h-0"
          :class="
            !isMobile
              ? [
                  {
                    'bg-white':
                      index === 0 ||
                      index === 2 ||
                      index === 5 ||
                      index === 7 ||
                      index === 8,
                  },
                  {
                    'bg-[#3E3E3E] text-white': index === 3 || index === 4,
                  },
                  {
                    'bg-[#3e3e3e80] text-white': index === 1 || index === 9,
                  },
                  {
                    'bg-[#3e3e3ead] text-white': index === 6,
                  },
                ]
              : [
                  {
                    'bg-white':
                      index === 0 ||
                      index === 3 ||
                      index === 4 ||
                      index === 7 ||
                      index === 8,
                  },
                  {
                    'bg-[#3E3E3E] text-white': index === 2 || index === 9,
                  },
                  {
                    'bg-[#3e3e3e80] text-white': index === 1 || index === 5,
                  },
                  {
                    'bg-[#3e3e3ead] text-white': index === 6,
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyUs',
  data() {
    return {
      items: [
        {
          icon: '/img/whyUs/1.svg',
          text: 'Fasadų šiltinimo srityje esame sukaupę ilgametę <strong>12 metų patirtį</strong>',
        },
        {
          icon: '/img/whyUs/2.svg',
          text: 'Darbus atliekame <strong>kruopščiai ir kokybiškai</strong>',
        },
        {
          icon: '/img/whyUs/3.svg',
          text: 'Visuomet stengiamės <strong>patenkinti</strong> kiekvieno kliento <strong>norus ir lūkesčius</strong>',
        },
        {
          icon: '/img/whyUs/4.svg',
          text: 'Suteikiame <strong>garantijas</strong>',
        },
        {
          icon: '/img/whyUs/5.svg',
          text: 'Konsultuojame',
        },

        {
          icon: '/img/whyUs/6.svg',
          text: 'Griežtai laikomės pažadėtų <strong>terminų</strong>',
        },
        {
          icon: '/img/whyUs/7.svg',
          text: 'Naudojame <strong>kokybiškas medžiagas</strong>',
        },
        {
          icon: '/img/whyUs/8.svg',
          text: 'Griežtai laikomės <strong>technologinių reikalavimų</strong>',
        },
        {
          icon: '/img/whyUs/9.svg',
          text: 'Mūsų klientams visada ieškome geriausio <strong>kainos ir kokybės</strong> santykio',
        },
        {
          icon: '/img/whyUs/10.svg',
          text: 'Aukščiausio lygmens kliento aptarnavimas',
        },
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

<style>
.has-bold strong {
  font-weight: 600;
}
</style>
