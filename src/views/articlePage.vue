<template>
    <div>
        <navBar />
        <Landing/>
        <Majalah/>
        <footerComp />
    </div>
</template>

<script>
import Landing from '@/components/articlePage/landingArticle.vue';
import Majalah from '@/components/articlePage/majalahComp.vue'
import navBar from '../components/navBar.vue';
import footerComp from '../components/FooterSection.vue'

export default {
    components: {
        Landing,
        Majalah,
        navBar,
        footerComp,
    },
};
</script>

<style lang="scss" scoped>

</style>