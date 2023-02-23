<template>
  <section>
    <div class="bg-[#3E3E3E]">
      <div class="container">
        <div class="pb-10 pt-14 md:pt-16">
          <img
            src="/img/logo-white.png"
            alt="logo"
            @click="scrollToSection('top')"
            class="cursor-pointer"
          />
        </div>
        <div
          class="grid grid-cols-1 pb-10 text-sm md:gap-4 md:pb-16 md:grid-cols-3 md:text-lg"
        >
          <div class="mb-9 md:mb-0">
            <ul class="text-white">
              <li
                v-for="item in $root.menuList"
                :key="item.id"
                @click="scrollToSection(item.id)"
                class="mb-5 font-medium duration-200 transform cursor-pointer md:mb-6 last:mb-0 hover:translate-x-1"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="flex text-white md:justify-center mb-9 md:mb-0">
            <div>
              <a
                :href="`tel:${$root.phone}`"
                class="flex items-center mb-5 duration-200 transform md:mb-6 hover:translate-x-1"
              >
                <img
                  class="w-4 h-4 mr-2 md:w-6 md:h-6"
                  src="/img/phone-white.svg"
                  alt="phone"
                />
                {{ $root.phone }}
              </a>
              <a
                :href="`mailto:${$root.email}`"
                class="flex items-center duration-200 transform md:mb-6 hover:translate-x-1"
              >
                <img
                  class="w-4 h-4 mr-2 md:w-6 md:h-6"
                  src="/img/mail-white.svg"
                  alt="mail"
                />
                {{ $root.email }}
              </a>
              <a
                v-if="$root.facebook"
                :href="$root.facebook"
                target="_blank"
                class="flex items-center mb-5 md:mb-6"
              >
                <img
                  class="w-4 h-4 mr-2 md:w-6 md:h-6"
                  src="/img/fb-white.svg"
                  alt="facebook"
                />
                {{ $root.facebook }}
              </a>
            </div>
          </div>
          <div class="text-white">
            <div class="flex mb-5 md:mb-6 md:justify-end">
              <img
                class="w-4 h-4 mr-2 md:w-6 md:h-6"
                src="/img/clock-white.svg"
                alt="clock"
              />
              <div class="text-right">
                <div v-html="$root.hours_one"></div>
                <div v-html="$root.hours_two"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#2E2E2E] py-6">
      <div class="container">
        <p class="font-medium text-center text-white">
          Visos teisės yra saugomos © {{ currentYear }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
