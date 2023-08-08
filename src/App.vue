<template class="app">
  <router-view />
</template>

<!-- 
<script>
import navBar from '@/components/navBar.vue';
import footerComp from '@/components/FooterSection.vue'

export default {
  components: {
    navBar,
    footerComp
  },
};
</script>
-->

<style>
* {
  font-family: inter, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.button,
.but {
  transition: 0.5s;
}

.button:hover,
.but:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
}
</style>
