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
            width="64"
            height="64"
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
          text: 'Fasad?? ??iltinimo srityje esame sukaup?? ilgamet?? <strong>12 met?? patirt??</strong>',
        },
        {
          icon: '/img/whyUs/2.svg',
          text: 'Darbus atliekame <strong>kruop????iai ir kokybi??kai</strong>',
        },
        {
          icon: '/img/whyUs/3.svg',
          text: 'Visuomet stengiam??s <strong>patenkinti</strong> kiekvieno kliento <strong>norus ir l??kes??ius</strong>',
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
          text: 'Grie??tai laikom??s pa??ad??t?? <strong>termin??</strong>',
        },
        {
          icon: '/img/whyUs/7.svg',
          text: 'Naudojame <strong>kokybi??kas med??iagas</strong>',
        },
        {
          icon: '/img/whyUs/8.svg',
          text: 'Grie??tai laikom??s <strong>technologini?? reikalavim??</strong>',
        },
        {
          icon: '/img/whyUs/9.svg',
          text: 'M??s?? klientams visada ie??kome geriausio <strong>kainos ir kokyb??s</strong> santykio',
        },
        {
          icon: '/img/whyUs/10.svg',
          text: 'Auk????iausio lygmens kliento aptarnavimas',
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
