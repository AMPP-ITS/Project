<template>
    <body>
        <div class="body">
            <h1>FnS</h1>
            <h3>Fundraising and Sponsorship</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1FnS">
                        <img src="https://drive.google.com/uc?id=1pc9b75dbpV3EGNHgeQC5Jm39y0oSZ253" alt="">
                        <div class="bottom-center">Niken</div>
                    </div>
                    <div class="image-container" id="myButton2FnS">
                        <img src="https://drive.google.com/uc?id=1hkrYQUKa7ECStLjaIkUVbUFygtbZ7yB6" alt="">
                        <div class="bottom-center">Adinda</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=16sUDltLTjMLhARfzx2tVMAgh_s05EUtW" alt=""
                            id="myButton3FnS">
                        <div class="bottom-center">Desita</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1YIudIMXlBjfuSBgwmD1I0rpEwADPKGaY" alt=""
                            id="myButton4FnS">
                        <div class="bottom-center">Ulfia</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1CAIZRqVPlhsg1AKZaQCbZcUfhttZYqWT" alt=""
                            id="myButton5FnS">
                        <div class="bottom-center">Farrah</div>
                    </div>
                    <div class="image-container" id="myButton6FnS">
                        <img src="https://drive.google.com/uc?id=1Uwo1zDbmcWRof5dUZwZfUDLCYEeGxnWS" alt="">
                        <div class="bottom-center">Briliansyah</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1pc9b75dbpV3EGNHgeQC5Jm39y0oSZ253" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName1 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major1 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch1 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position1 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department1 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/nikenayums/" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1hkrYQUKa7ECStLjaIkUVbUFygtbZ7yB6" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName2 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major2 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch2 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position2 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department2 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/indah-asmaul-chusna-0b391616a" target="_blank">{{
                                Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup3FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=16sUDltLTjMLhARfzx2tVMAgh_s05EUtW" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName3 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major3 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch3 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position3 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department3 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/desitafitriayu/" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1YIudIMXlBjfuSBgwmD1I0rpEwADPKGaY" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName4 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major4 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch4 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position4 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department4 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/ulfia-zahrotun-jannah-07aa73258"
                                    target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup5FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup5FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1CAIZRqVPlhsg1AKZaQCbZcUfhttZYqWT" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName5 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major5 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch5 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position5 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department5 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/farrah-ayu-divanti-522861258" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id="myPopup6FnS" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup6FnS" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1Uwo1zDbmcWRof5dUZwZfUDLCYEeGxnWS" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName6 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major6 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch6 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position6 }}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department6 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/briliansyah-satriya-4a623b193" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isScrolling: false,
            touchStartX: 0,
            touchScrollStartX: 0,

            fullName1: 'Niken Ayu Maulidya',
            Major1: 'Actuarial Science',
            Batch1: '2021',
            Position1: 'HoD',
            Department1: 'Fundraising and Sponsorship',
            Division1: '-',
            Connection: 'LinkedIn',

            fullName2: 'Adinda Sholehah Dianto',
            Major2: 'Material and Metallurgical Engineering',
            Batch2: '2022',
            Position2: 'Staff',
            Department2: 'Fundraising and Sponsorship',
            Division2: '-',

            fullName3: 'Desita Fitri Ayu Rias Sari',
            Major3: 'Material Engineering',
            Batch3: '2022',
            Position3: 'Staff',
            Department3: 'Fundraising and Sponsorship',
            Division3: '-',

            fullName4: 'Ulfia Zahrotun Jannah',
            Major4: 'Geomatics Engineering',
            Batch4: '2022',
            Position4: 'Staff',
            Department4: 'Fundraising and Sponsorship',
            Division4: '-',

            fullName5: 'Farrah Ayu Divanti',
            Major5: 'Actuarial science',
            Batch5: '2022',
            Position5: 'Staff',
            Department5: 'Fundraising and Sponsorship',
            Division5: '-',

            fullName6: 'Briliansyah Muhammad Satriya',
            Major6: 'Ocean Engineering',
            Batch6: '2022',
            Position6: 'Staff',
            Department6: 'Fundraising and Sponsorship',
            Division6: '-',
        };
    },
    mounted() {
        const scrollContainer = this.$refs.scrollContainer;

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            if (!this.isScrolling) {
                requestAnimationFrame(() => {
                    scrollContainer.scrollLeft += evt.deltaY;
                    this.isScrolling = false;
                });
                this.isScrolling = true;
            }
        });

        const myButton1FnS = document.getElementById("myButton1FnS");
        const myPopup1FnS = document.getElementById("myPopup1FnS");
        const closePopup1FnS = document.getElementById("closePopup1FnS");

        myButton1FnS.addEventListener("click", () => {
            myPopup1FnS.classList.add("show");
        });

        closePopup1FnS.addEventListener("click", () => {
            myPopup1FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1FnS) {
                myPopup1FnS.classList.remove("show");
            }
        });

        const myButton2FnS = document.getElementById("myButton2FnS");
        const myPopup2FnS = document.getElementById("myPopup2FnS");
        const closePopup2FnS = document.getElementById("closePopup2FnS");

        myButton2FnS.addEventListener("click", () => {
            myPopup2FnS.classList.add("show");
        });

        closePopup2FnS.addEventListener("click", () => {
            myPopup2FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2FnS) {
                myPopup2FnS.classList.remove("show");
            }
        });

        const myButton3FnS = document.getElementById("myButton3FnS");
        const myPopup3FnS = document.getElementById("myPopup3FnS");
        const closePopup3FnS = document.getElementById("closePopup3FnS");

        myButton3FnS.addEventListener("click", () => {
            myPopup3FnS.classList.add("show");
        });

        closePopup3FnS.addEventListener("click", () => {
            myPopup3FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3FnS) {
                myPopup3FnS.classList.remove("show");
            }
        });

        const myButton4FnS = document.getElementById("myButton4FnS");
        const myPopup4FnS = document.getElementById("myPopup4FnS");
        const closePopup4FnS = document.getElementById("closePopup4FnS");

        myButton4FnS.addEventListener("click", () => {
            myPopup4FnS.classList.add("show");
        });

        closePopup4FnS.addEventListener("click", () => {
            myPopup4FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4FnS) {
                myPopup4FnS.classList.remove("show");
            }
        });

        const myButton5FnS = document.getElementById("myButton5FnS");
        const myPopup5FnS = document.getElementById("myPopup5FnS");
        const closePopup5FnS = document.getElementById("closePopup5FnS");

        myButton5FnS.addEventListener("click", () => {
            myPopup5FnS.classList.add("show");
        });

        closePopup5FnS.addEventListener("click", () => {
            myPopup5FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5FnS) {
                myPopup5FnS.classList.remove("show");
            }
        });

        const myButton6FnS = document.getElementById("myButton6FnS");
        const myPopup6FnS = document.getElementById("myPopup6FnS");
        const closePopup6FnS = document.getElementById("closePopup6FnS");

        myButton6FnS.addEventListener("click", () => {
            myPopup6FnS.classList.add("show");
        });

        closePopup6FnS.addEventListener("click", () => {
            myPopup6FnS.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup6FnS) {
                myPopup6FnS.classList.remove("show");
            }
        });
    },
    methods: {
        onTouchStart(evt) {
            this.isScrolling = true;
            this.touchStartX = evt.touches[0].clientX;
            this.touchScrollStartX = this.$refs.scrollContainer.scrollLeft;
        },
        onTouchMove(evt) {
            if (!this.isScrolling) return;

            const touchX = evt.touches[0].clientX;
            const deltaX = touchX - this.touchStartX;
            this.$refs.scrollContainer.scrollLeft = this.touchScrollStartX - deltaX;
        },
        onTouchEnd() {
            this.isScrolling = false;
        },
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: auto;
}

.body {
    text-align: center;
    color: #f8f8f8;
    padding: 3% 0 0 0;
    background-color: #2e2e2e;
}

.body h1 {
    font-size: 75px;
    font-weight: 700;
}

.body h3 {
    font-size: 30px;
}

.dot {
    height: 20px;
    width: 20px;
    background-color: #f8f8f8;
    border-radius: 50%;
    display: inline-block;
    margin: 0 .5%;
}

a {
    text-decoration: none;
    color: #0072b1;
}

body {
    background-color: #2e2e2e;
}

.title {
    text-align: center;
    color: #f8f8f8;
    padding: 3% 0 2% 0;
}

.title h2 {
    background-color: #EE363A;
    padding: 1% 0;
    margin: 0 34.5%;
    border-radius: 100px;
    font-weight: 600;
}

.gallery {
    width: 100%;
    display: flex;
    overflow-x: scroll;
}

.gallery .image {
    width: 100%;
    display: flex;
    grid-gap: 15px;
}

.gallery .image-container {
    position: relative;
    cursor: pointer;
}

.gallery .image img {
    border-radius: 7.5px;
    height: 30rem;
}

.gallery .bottom-center {
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    /* Center the text horizontally */
    background-image: url(./images/BACKGROUND.svg);
    color: #fff;
    padding: 4%;
    border-radius: 0 0 7.5px 7.5px;
}

.gallery::-webkit-scrollbar {
    display: none;
}

.gallery-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2% 5%;
}

::-webkit-scrollbar {
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.popup {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
}

.popup-content {
    background-color: white;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 20px;
    border: 1px solid #888888;
    width: 65%;
    font-weight: bolder;
    border-radius: 10px;
}

.popup-content button {
    display: block;
    margin: 0 auto;
}

.show {
    display: block;
}

.elements {
    display: flex;
    padding: 2% 0%;
    justify-content: center;
}

.closePopup {
    position: absolute;
    right: 5%;
    font-size: 30px;
    cursor: pointer;
    transform: translate(-20%);
}

.popupImage img {
    height: 400px;
    border-radius: 7.5px;
}

.information {
    margin: auto 0 auto 3%;
    font-weight: normal;
}

.information table {
    padding: 2% 0;
    border-spacing: 20px 15px;
}

@media (max-width: 960px) {
    .title h2 {
        margin: 0 27.5%;
    }

    .popup-content {
        width: 90%;
    }
}


@media (max-width: 770px) {
    .title h2 {
        margin: 0 10%;
        font-size: 20px;
    }

    .popup-content {
        width: 90%;
    }

    .elements {
        margin-top: 5%;
    }

    .popupImage img {
        display: none;
    }

    .information {
        font-size: 15px;
    }
}
</style>