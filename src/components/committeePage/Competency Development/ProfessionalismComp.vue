<template>
    <div id="#PM">
        <p class="title">Competency Development - Professionalism</p>
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
                'Retno Anjarsari',
                'Roger Permata Putra',
                'Nafis Wildan Arrabi',
                "Muhammad Azhim Fajar Sya'ban",
                'Aliyyah Putri Ramaditya',


            ],
            filename: [
                'https://drive.google.com/uc?id=1Y6oOhJDlC3MyY84C4A1aJxgFaC6Fm70v',
                'https://drive.google.com/uc?id=1gts56-rWlthscwRL44wL6m2DI1Rr-gga',
                'https://drive.google.com/uc?id=1KOb8vKKBje-YsEIu1UIEVfVcG3gZITHG',
                'https://drive.google.com/uc?id=1XpBy9mbS8wy-xBdukgmcC2cB3P6EPCN4',
                'https://drive.google.com/uc?id=1JdNnnLcXENjiQSNolS3x02dpk6htp__d',


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