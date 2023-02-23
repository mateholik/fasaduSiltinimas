<template>
  <section class="select-none">
    <div class="container">
      <div class="flex items-center justify-between md:my-4">
        <img src="/img/logo.png" class="w-20 md:w-24" alt="" />
        <div class="hidden md:flex">
          <a :href="`tel:${$root.phone}`" class="flex mr-14">
            <img class="w-6 h-6 mr-[6px]" src="/img/phone.svg" alt="phone" />
            {{ $root.phone }}
          </a>
          <div class="flex">
            <img class="w-6 h-6 mr-[6px]" src="/img/clock.svg" alt="clock" />
            <div class="flex">
              <span v-html="$root.hours_one" class="block mr-4"></span>
              <span v-html="$root.hours_two"></span>
            </div>
          </div>
        </div>
        <div
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="block outline-none hamburger hamburger--elastic md:hidden"
          :class="{ 'is-active': mobileMenuOpen }"
          tabindex="0"
          aria-label="Menu"
          role="button"
          aria-controls="navigation"
        >
          <div class="-mr-4 hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <nav class="hidden md:block bg-[#3E3E3E] py-4">
      <div class="container">
        <ul class="flex">
          <li
            v-for="item in $root.menuList"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="text-white py-2 px-3 mr-14 hover:bg-[#7A7A7A] duration-200 cursor-pointer last:mr-0"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </nav>

    <div class="">
      <nav
        class="absolute inset-0 z-10 duration-200"
        :class="mobileMenuOpen ? 'bg-black opacity-50' : 'opacity-0 pointer-events-none'"
      ></nav>
      <div
        class="absolute inset-0 z-20 w-4/5 ml-auto duration-200 transform bg-white"
        :class="mobileMenuOpen ? 'opacity-100' : 'translate-x-full pointer-events-none'"
      >
        <div
          class="container flex items-center justify-between md:my-4"
          style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)"
        >
          <img src="/img/logo.png" class="w-20 md:w-24" alt="" />

          <div
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="block outline-none hamburger hamburger--elastic md:hidden"
            :class="{ 'is-active': mobileMenuOpen }"
            tabindex="0"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div class="-mr-4 hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
        <ul class="my-7">
          <li
            v-for="item in $root.menuList"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="py-3 px-6 hover:bg-[#7A7A7A] hover:text-white duration-200 cursor-pointer"
          >
            {{ item.name }}
          </li>
        </ul>
        <div class="h-px bg-[#9A9A9A] w-full mb-10"></div>
        <div class="px-4">
          <div>
            <a
              :href="`tel:${$root.phone}`"
              class="flex items-center px-4 py-3 mb-2 text-white bg-[#3E3E3E]"
            >
              <img class="w-4 h-4 mr-2" src="/img/phone-white.svg" alt="/img/" />
              {{ $root.phone }}
            </a>
            <a
              :href="`mailto:${$root.email}`"
              class="flex items-center px-4 py-3 mb-2 text-white bg-[#3E3E3E]"
            >
              <img class="w-4 h-4 mr-2" src="/img/mail-white.svg" alt="/img/" />
              {{ $root.email }}
            </a>
            <a
              v-if="$root.facebook"
              :href="$root.facebook"
              target="_blank"
              class="flex items-center px-4 py-3 mb-2 text-white bg-[#3E3E3E]"
            >
              <img class="w-4 h-4 mr-2" src="/img/phone-white.svg" alt="/img/" />
              {{ $root.facebook }}
            </a>
            <div class="flex px-4 py-3 mb-2 text-white bg-[#3E3E3E]">
              <img class="w-4 h-4 mr-2" src="/img/clock-white.svg" alt="/img/" />
              <div>
                <span v-html="$root.hours_one"></span> <br />
                <span v-html="$root.hours_two"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  watch: {
    mobileMenuOpen: {
      immediate: true,
      handler(value) {
        value
          ? document.body.classList.add('overflow-hidden')
          : document.body.classList.remove('overflow-hidden')
      },
    },
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    },
  },
}
</script>

<style lang="scss">
.mobile-menu-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
