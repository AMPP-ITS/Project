<template>
    <div id="#BoE">
        <p class="title">Board Of Executive (BoE)</p>
        <div class="row">
            <div v-for="(filename, index) in filename" :key="index" class="card">
                <img :src="filename" :alt="names[index]">
                <div class="container">
                    <p>{{ names[index] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: [
                'Muhammad Enrico Rafizio',
                'Indah Asmaul Chusna',
                'Nafisa Tahar Vinaya',
                'Della Ardhelya Zahra Putri',
                'Putri Nabila Adekamtari',
                'Jeremia Gedy Julio Wattimena',
                'Nugroho Wisnumurti',
                'William Alexander Garcia Leonarto',
            ],
            filename: [
                'https://drive.google.com/uc?id=1Kg53R0jslzsKo9BLdddNpXsIzQF9Xmhj',
                'https://drive.google.com/uc?id=1YAvr2UwV3BA11RDwvmi5RLPHiLg-nom-',
                'https://drive.google.com/uc?id=18GnuBPnh1Ki5uz8Tfuli62YBhSRtCkPN',
                'https://drive.google.com/uc?id=1QyDx_rs_HiQbmtn6c24BubB7X-0tJbvI',
                'https://drive.google.com/uc?id=15AnPcnLz5SHahpSjWjSeEQuYnB2Gt0Az',
                'https://drive.google.com/uc?id=1X_HNFEiR37qmY05bx9WVw5i1Xn_sQEaw',
                'https://drive.google.com/uc?id=1vuDCROAyS1Kk9ymvMy4tQRBYQi2itfKS',
                'https://drive.google.com/uc?id=1A69OHnPulXxx2pSn-BfJxsKVTBo_tcp6',
            ],
        };
    },
};
</script>

  
<style lang="scss" scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.title {
    padding: 4% 4% 2% 4%;
    font-weight: 400;
    font-size: 25px;
}

.row {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    padding: 0 4%;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    background-color: #EE363A;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
}

.container {
    padding: 4% 5%;
    text-align: center;
    color: #f8f8f8;
    font-weight: 500;
}

@media screen and (max-width: 900px) {
    .row {
        display: grid;
        grid-template-columns: auto auto;
        gap: 2rem;
        padding: 0 4%;
    }
}

@media screen and (max-width: 600px) {
    .row {
        display: grid;
        grid-template-columns: auto;
        gap: 2rem;
        padding: 0 4%;
    }
}
</style>  