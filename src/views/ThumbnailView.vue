<template>
    <div>
        <navBar />
        <headerComp />
    </div>
</template>
  
<script>
import navBar from '../components/navBar.vue';
import headerComp from '@/components/committeePage/headerComp.vue'
export default {
    components: {
        navBar,
        headerComp,
    },
}
</script>
  
<style lang="scss" scoped></style>