<template>
    <div>
        <navBar />
        <headerComp/>
        <BoE />
        <BoD />
        <FnS />
        <TM />
        <ELearning />
        <PRO />
        <CMnD/>
        <footerComp />
    </div>
</template>

<script>
import headerComp from '@/components/committeePage/headerComp.vue'
import BoE from '../components/committeePage/BoE.vue'
import BoD from '../components/committeePage/BoD.vue'
import FnS from '../components/committeePage/FnS.vue'
import TM from '../components/committeePage/Human Resources/TalentManagement.vue'
import ELearning from '../components/committeePage/Competency Development/ELearning.vue'
import PRO from '../components/committeePage/Competency Development/ProfessionalismComp.vue'
import CMnD from '@/components/committeePage/MnB/CMnD.vue';
import navBar from '../components/navBar.vue'
import footerComp from '../components/FooterSection.vue'

export default {
    components: {
        headerComp,
        CMnD,
        navBar,
        footerComp,
        BoE,
        BoD,
        FnS,
        TM,
        ELearning,
        PRO,
    },
}
</script>

<style lang="scss" scoped>

</style>