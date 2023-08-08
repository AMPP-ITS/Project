<template>
    <div id="#BoD">
        <p class="title">Board Of Directors (BoD)</p>
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
                'Abdur Rauf Arrabbany',
                'Chairevita Novia Mediana',
                'Ida Ayu Gayatri Alycia Vikranta',
                'Nadia Devi Pancaranti',
            ],
            filename: [
                'https://drive.google.com/uc?id=1QDqU_geVOKvUQP_88DPl9FSbiCj6mtfv',
                'https://drive.google.com/uc?id=1OfSIqvLfE_movA2HegnBDoeBqtoV86Q-',
                'https://drive.google.com/uc?id=1eoSQmz0rh90usCQEtSEdTI5XCloYZIH5',
                'https://drive.google.com/uc?id=1l-q8d4-RAl_rIP0F5kY5r046Spz4ICYb',
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