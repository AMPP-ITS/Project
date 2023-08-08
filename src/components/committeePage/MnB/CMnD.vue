<template>
    <div id="#CMnD">
        <p class="title">Branding and Marketing - Creative Media and Design</p>
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
                'Afdhal Iftikhar Haykal',
                'Michael Wayne',
                'Vicky Alexander Brugman',
                'Moh Fuadin Anugrah',
                'Fadhila Rachmawati',
                'Ilhan Ahmad Syafa',
            ],
            filename: [
                require('@/assets/HAYKAL.jpg'),
                require('@/assets/MICHAEL.jpg'),
                require('@/assets/VICKY.jpg'),
                require('@/assets/FUAD.jpg'),
                require('@/assets/FADHILA.jpg'),
                require('@/assets/ILHAN.jpg'),
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