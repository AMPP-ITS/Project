<template>
    <div class="hero">
        <div class="position">
            <h1>Meet The Board</h1>
            <ul>
                <div class="top">
                    <a href="">
                        <li>BoE</li>
                    </a>
                    <a href="">
                        <li>BoD</li>
                    </a>
                    <a href="">
                        <li>BPI Alliance</li>
                    </a>
                    <a href="">
                        <li>Competency Development</li>
                    </a>
                </div>

                <br>

                <div class="bottom">
                    <a href="">
                        <li>Fundraising and Sponsorship</li>
                    </a>
                    <a href="">
                        <li>Human Resources</li>
                    </a>
                    <a href="">
                        <li>Media and Branding</li>
                    </a>
                    <a href="">
                        <li>Public Relation</li>
                    </a>
                </div>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.hero {
    background-image: url(./images/bg-TheBoard.png);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.position {
    display: block;
    text-align: center;
}

h1 {
    color: #f8f8f8;
    font-size: 90px;
    font-weight: 600;
}

ul a {
    margin: 1% 0;
    text-decoration: none;
    color: #f8f8f8;
    font-size: 17.5px;
    font-weight: 400;
}

a:link {
    text-decoration: none;
}

a:hover {
    color: #f8f8f8;
}

ul .top {
    display: inline-flex;
    gap: 2rem;
}

ul .bottom {
    display: inline-flex;
    gap: 2rem;
}

@media screen and (max-width: 900px) {
    .hero {
        background-position: 20% 0;
    }

    .position {
        text-align: left;
    }

    h1 {
        font-size: 60px;
    }

    ul {
        padding: 1.5rem 0;
    }

    ul a li {
        padding: 0.5rem 0;
        font-size: 20px;
    }

    ul .top {
        display: block;
    }

    ul .bottom {
        display: block;
    }

    br:nth-child(2) {
        display: none;
    }
}


@media screen and (max-width: 600px) {
    .hero {
        background-position: 27.5% 0;
    }

    .position {
        width: 75%;
        text-align: left;
    }

    h1 {
        font-size: 45px;
    }

    ul {
        padding: 1.5rem 0;
    }

    ul a li {
        padding: 0.5rem 0;
        font-size: 17.5px;
    }

    ul .top {
        display: block;
    }

    ul .bottom {
        display: block;
    }

    br:nth-child(2) {
        display: none;
    }
}
</style>