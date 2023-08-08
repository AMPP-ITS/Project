<template>
    <div id="#FnS">
        <p class="title">Fundraising and Sponsorhip</p>
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
                'Niken Ayu Maulidya',
                'Adinda Sholehah Dianto',
                'Desita Fitri Ayu Rias Sari',
                'Ulfia Zahrotun Jannah',
                'Farrah Ayu Divanti',
                'Briliansyah Muhammad Satriya',
            ],
            filename: [
                'https://drive.google.com/uc?id=1pc9b75dbpV3EGNHgeQC5Jm39y0oSZ253',
                'https://drive.google.com/uc?id=1hkrYQUKa7ECStLjaIkUVbUFygtbZ7yB6',
                'https://drive.google.com/uc?id=16sUDltLTjMLhARfzx2tVMAgh_s05EUtW',
                'https://drive.google.com/uc?id=1YIudIMXlBjfuSBgwmD1I0rpEwADPKGaY',
                'https://drive.google.com/uc?id=1CAIZRqVPlhsg1AKZaQCbZcUfhttZYqWT',
                'https://drive.google.com/uc?id=1Uwo1zDbmcWRof5dUZwZfUDLCYEeGxnWS',

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