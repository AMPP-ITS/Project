<template scoped>
    <div class="background">
        <img class="top_left" src="../assets/ruby_atas.svg" alt="">
        <div class="text">
            <h1>COMING SOON</h1>
            <p>We apologize for your inconvenience in accessing our website because our website is in the process of
                being
                developed and perfected. Look forward to other interesting features and content that will be coming soon
                for
                you. Thank you for your willingness and patience.
            </p>
            <a href="/" class="button"><svg class="house-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> Home page</a>
        </div>
        <img class="bottom_right" src="../assets/ruby_bawah.svg" alt="">
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.background {
    background: url('@/assets/Group-640.jpg');
    background-color: #271F1C;
    background-size: cover;
    background-position: top;
    overflow: hidden;
    background-repeat: no-repeat;
    height: 100vh;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #f8f8f8;
    width: 100%;
    padding: 0 22.5%;
}

h1 {
    font-size: 45px;
    padding-bottom: 5%;
}

p {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    padding-bottom: 5%;
}

.button {
    background: #FF5F6D;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF5F6D, #FFC371);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF5F6D, #FFC371);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    color: #f8f8f8;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 3px;
}

.house-icon {
    fill: #f8f8f8;
}

.top_left {
    position: absolute;
    left: 0;
    top: 0;
}

.bottom_right {
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 1;
}


@media screen and (max-width: 770px) {
    .text {
        padding: 0 10%;
    }

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 15px;
    }

    img {
        height: 200px;
    }
}
</style>