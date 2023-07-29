<template>
    <body>
        <div class="item">
            <img src="./images/GROUP-ICON.svg" alt="">
            <h1>Meet the Board</h1>
            <div class="department">
                <ul>
                    <li>BoE</li>
                    <li>BPI Alliance</li>
                    <li>Competency Development</li>
                    <li>Fundraising & Sponsorhip</li>
                </ul>
                <ul>
                    <li>Human Resources</li>
                    <li>Media & Branding</li>
                    <li>Public Relation</li>
                </ul>
            </div>
        </div>
    </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-image: url('./images/BACKGROUND.svg');
    color: #f8f8f8;
    text-align: center;
}

body {
    padding: 12% 0 7% 0;
}

h1 {
    padding: 1.4% 0;
    font-weight: 600;
    font-size: 60px;
}

ul {
    margin-bottom: 0.5%;
    display: flex;
    gap: 2rem;
    justify-content: center;
}

@media (max-width: 770px) {
    body {
        padding: 21% 0 7% 0;
    }

    ul {
        display: block;
    }
}
</style>