<template>
    <body>
        <div class="body">
            <h1>BPI</h1>
            <h3>AMPP Alliance</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1BPI">
                        <img src="" alt="">
                        <div class="bottom-center"></div>
                    </div>
                    <div class="image-container" id="myButton2BPI">
                        <img src="" alt="">
                        <div class="bottom-center"></div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1j1uUFfxI__aQrPIsPNHJVmMLVk1XQXEC" alt=""
                            id="myButton3BPI">
                        <div class="bottom-center">Dewa</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1lj1KMv614DqDzUi07UQrwVReBVqcrFso" alt=""
                            id="myButton4BPI">
                        <div class="bottom-center">Merissa</div>
                    </div>
                    <div class="image-container">
                        <img src="" alt=""
                            id="myButton5BPI">
                        <div class="bottom-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1BPI" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1BPI" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1Kg53R0jslzsKo9BLdddNpXsIzQF9Xmhj" alt="">
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
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department1 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/yudha-satria-aji-pratama-9a370a152/?originalSubdomain=id"
                                    target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2BPI" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2BPI" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1YAvr2UwV3BA11RDwvmi5RLPHiLg-nom-" alt="">
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
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department2 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/natasya-angelia-kristanto-47b7b3219/"
                                    target="_blank">{{
                                        Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup3BPI" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3BPI" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1j1uUFfxI__aQrPIsPNHJVmMLVk1XQXEC" alt="">
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
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department3 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/rangga-gita-833358208/" target="_blank">{{ Connection
                            }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4BPI" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4BPI" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1lj1KMv614DqDzUi07UQrwVReBVqcrFso" alt="">
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
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department4 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/merissanabila/" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup5BPI" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup5BPI" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=15AnPcnLz5SHahpSjWjSeEQuYnB2Gt0Az" alt="">
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
                            <td>Department</td>
                            <td>:</td>
                            <td>{{ Department5 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/rainhardsiagian/" target="_blank">{{ Connection }}</a>
                            </td>
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

            fullName1: 'Yudha Satria Aji Pratama',
            Major1: 'Mechanical Engineering',
            Batch1: '2020',
            Position1: '-',
            Department1: 'BPI',
            Division1: '-',
            Connection: 'LinkedIn',

            fullName2: 'Natasya Angelia Kristanto',
            Major2: 'Actuarial Science',
            Batch2: '2021',
            Position2: '-',
            Department2: 'BPI',
            Division2: '-',

            fullName3: 'Dewa Agung Rangga Gita Bhuwana',
            Major3: 'Mechanical Engoneering',
            Batch3: '2020',
            Position3: '-',
            Department3: 'BPI',
            Division3: '-',

            fullName4: 'Merissa Nabila Zarqa Wirontono',
            Major4: 'Statistics',
            Batch4: '2020',
            Position4: '-',
            Department4: 'BPI',
            Division4: '-',

            fullName5: 'Rainhard Abram Onwardo Siagian',
            Major5: 'Mechanical Engineering',
            Batch5: '2020',
            Position5: '-',
            Department5: 'BPI',
            Division5: '-',
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

        const myButton1BPI = document.getElementById("myButton1BPI");
        const myPopup1BPI = document.getElementById("myPopup1BPI");
        const closePopup1BPI = document.getElementById("closePopup1BPI");

        myButton1BPI.addEventListener("click", () => {
            myPopup1BPI.classList.add("show");
        });

        closePopup1BPI.addEventListener("click", () => {
            myPopup1BPI.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1BPI) {
                myPopup1BPI.classList.remove("show");
            }
        });

        const myButton2BPI = document.getElementById("myButton2BPI");
        const myPopup2BPI = document.getElementById("myPopup2BPI");
        const closePopup2BPI = document.getElementById("closePopup2BPI");

        myButton2BPI.addEventListener("click", () => {
            myPopup2BPI.classList.add("show");
        });

        closePopup2BPI.addEventListener("click", () => {
            myPopup2BPI.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2BPI) {
                myPopup2BPI.classList.remove("show");
            }
        });

        const myButton3BPI = document.getElementById("myButton3BPI");
        const myPopup3BPI = document.getElementById("myPopup3BPI");
        const closePopup3BPI = document.getElementById("closePopup3BPI");

        myButton3BPI.addEventListener("click", () => {
            myPopup3BPI.classList.add("show");
        });

        closePopup3BPI.addEventListener("click", () => {
            myPopup3BPI.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3BPI) {
                myPopup3BPI.classList.remove("show");
            }
        });

        const myButton4BPI = document.getElementById("myButton4BPI");
        const myPopup4BPI = document.getElementById("myPopup4BPI");
        const closePopup4BPI = document.getElementById("closePopup4BPI");

        myButton4BPI.addEventListener("click", () => {
            myPopup4BPI.classList.add("show");
        });

        closePopup4BPI.addEventListener("click", () => {
            myPopup4BPI.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4BPI) {
                myPopup4BPI.classList.remove("show");
            }
        });

        const myButton5BPI = document.getElementById("myButton5BPI");
        const myPopup5BPI = document.getElementById("myPopup5BPI");
        const closePopup5BPI = document.getElementById("closePopup5BPI");

        myButton5BPI.addEventListener("click", () => {
            myPopup5BPI.classList.add("show");
        });

        closePopup5BPI.addEventListener("click", () => {
            myPopup5BPI.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5BPI) {
                myPopup5BPI.classList.remove("show");
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