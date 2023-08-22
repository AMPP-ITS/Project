<template>
    <navBar/>
    <landingArticle/>
    <!-- <landingArticle :judul="judul" :subjudul="subjudul" :image="test"/> -->
    <bioSec/>
    <FooterSection/>
</template>

<script>
import landingArticle from '@/components/articlePage/landingArticle.vue';
import navBar from '@/components/navBar.vue';
import FooterSection from '@/components/FooterSection.vue';
import bioSec from '@/components/eventPage/bioSec.vue';

export default {
    components: {
        landingArticle,
        navBar,
        FooterSection,
        bioSec
    },
    data() {
        return {
            judul: null,
            subjudul: null,
            test: null
        }
    },
}
</script>

<style lang="scss" scoped>

</style>