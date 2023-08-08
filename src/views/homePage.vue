<template>
  <div>
    <navBar />
    <landingSec />
    <aboutUs />
    <homeEvent />
    <footerComp />
  </div>
</template>

<script>
import landingSec from '@/components/homePage/LandingSection.vue'
import homeEvent from '@/components/homePage/homeEvent.vue';
import aboutUs from '@/components/homePage/AboutUs.vue';
import navBar from '../components/navBar.vue';
import footerComp from '../components/FooterSection.vue'

export default {
  components: {
    homeEvent,
    landingSec,
    aboutUs,
    navBar,
    footerComp,
  },
}
</script>

<style lang="scss" scoped></style>