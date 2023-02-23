<template>
  <div id="app" class="relative overflow-hidden">
    <Header id="top" />
    <Hero />
    <AboutUs :id="$root.menuList[0].id" class="py-14 md:py-24" />
    <WhyUs class="py-14 md:py-24" />
    <Services :id="$root.menuList[1].id" class="py-14 md:py-24" />
    <Gallery :id="$root.menuList[2].id" class="py-14 md:py-24" />
    <Info :id="$root.menuList[3].id" class="py-14 md:py-24" />
    <Contacts :id="$root.menuList[4].id" class="py-14 md:py-24" />
    <Footer />
  </div>
</template>
