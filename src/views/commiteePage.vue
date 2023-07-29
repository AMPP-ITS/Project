<template>
    <div>
        <navBar />
        <headerComp/>
        <BoE />
        <BoD />
        <BPI />
        <FnS />
        <MM />
        <TM />
        <ELearning />
        <PRO />
        <CMnD/>
        <BnM />
        <CE />
        <ERComp />
        <footerComp />
    </div>
</template>

<script>
import headerComp from '@/components/committeePage/headerComp.vue'
import BoE from '../components/committeePage/BoE.vue'
import BoD from '../components/committeePage/BoD.vue'
import BPI from '../components/committeePage/BPI.vue'
import FnS from '../components/committeePage/FnS.vue'
import MM from '../components/committeePage/Human Resources/MembershipManagement.vue'
import TM from '../components/committeePage/Human Resources/TalentManagement.vue'
import ELearning from '../components/committeePage/Competency Development/ELearning.vue'
import PRO from '../components/committeePage/Competency Development/ProfessionalismComp.vue'
import CMnD from '@/components/committeePage/MnB/CMnD.vue';
import BnM from '../components/committeePage/MnB/BnM.vue'
import CE from '../components/committeePage/Public Relation/CE.vue'
import ERComp from '../components/committeePage/Public Relation/ERComp.vue'
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
        BPI,
        FnS,
        MM,
        TM,
        ELearning,
        BnM,
        CE,
        ERComp,
        PRO,
    },
}
</script>

<style lang="scss" scoped>

</style>