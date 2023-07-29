<template>
    <body>
        <div class="body">
            <h1>MnB</h1>
            <h3>Media & Branding</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="title">
            <h2>Creative Media and Design</h2>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1">
                        <img src="../images/HAYKAL.jpg" alt="">
                        <div class="bottom-center">Haykal</div>
                    </div>
                    <div class="image-container" id="myButton2">
                        <img src="../images/MICHAEL.jpg" alt="">
                        <div class="bottom-center">Michael</div>
                    </div>
                    <div class="image-container">
                        <img src="../images/VICKY.jpg" alt="" id="myButton3">
                        <div class="bottom-center">Vicky</div>
                    </div>
                    <div class="image-container">
                        <img src="../images/FUAD.jpg" alt="" id="myButton4">
                        <div class="bottom-center">Fuad</div>
                    </div>
                    <div class="image-container">
                        <img src="../images/FADHILA.jpg" alt="" id="myButton5">
                        <div class="bottom-center">Fadhila</div>
                    </div>
                    <div class="image-container">
                        <img src="../images/ILHAN.jpg" alt="" id="myButton6">
                        <div class="bottom-center">Ilhan</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/HAYKAL.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division1 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/afdhal-haykal-467280227/">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/MICHAEL.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division2 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/iymw/" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup3" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/VICKY.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division3 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/vicky-alexander-brugman-854098264/" target="_blank">{{
                                Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/FUAD.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division4 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup5" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup5" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/FADHILA.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division5 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/fadhila-rachmawati" target="_blank">{{ Connection
                            }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup6" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup6" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="../images/ILHAN.jpg" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division6 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/ilhanahmads/" target="_blank">{{ Connection
                            }}</a></td>
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

            fullName1: 'Afdhal Iftikhar Haykal',
            Major1: 'Architecture',
            Batch1: '2021',
            Position1: 'HoD',
            Department1: 'HoD',
            Division1: 'Media Creative and Design',
            Connection: 'LinkedIn',

            fullName2: 'Michael Wayne',
            Major2: 'Information Technology',
            Batch2: '2022',
            Position2: 'Staff',
            Department2: 'Media and Branding',
            Division2: 'Media Creative and Design',

            fullName3: 'Vicky Alexander Brugman',
            Major3: 'Urban and Regional Planning',
            Batch3: '2021',
            Position3: 'Staff',
            Department3: 'Media and Branding',
            Division3: 'Branding and Marketing',

            fullName4: 'Moh Fuadin Anugrah',
            Major4: 'Bussiness Statistic',
            Batch4: '2021',
            Position4: 'Staff',
            Department4: 'Media and Branding',
            Division4: 'Media Creative and Design',

            fullName5: 'Fadhila Rachmawati',
            Major5: 'Interior Design',
            Batch5: '2021',
            Position5: 'Staff',
            Department5: 'Staff',
            Division5: 'Media Creative and Design',

            fullName6: 'Ilhan Ahmad Syafa',
            Major6: 'Information Technology',
            Batch6: '2022',
            Position6: 'Staff',
            Department6: 'Staff',
            Division6: 'Media Creative and Design',
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

        const myButton1 = document.getElementById("myButton1");
        const myPopup1 = document.getElementById("myPopup1");
        const closePopup = document.getElementById("closePopup1");

        myButton1.addEventListener("click", () => {
            myPopup1.classList.add("show");
        });

        closePopup.addEventListener("click", () => {
            myPopup1.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1) {
                myPopup1.classList.remove("show");
            }
        });

        const myButton2 = document.getElementById("myButton2");
        const myPopup2 = document.getElementById("myPopup2");
        const closePopup2 = document.getElementById("closePopup2");

        myButton2.addEventListener("click", () => {
            myPopup2.classList.add("show");
        });

        closePopup2.addEventListener("click", () => {
            myPopup2.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2) {
                myPopup2.classList.remove("show");
            }
        });

        const myButton3 = document.getElementById("myButton3");
        const myPopup3 = document.getElementById("myPopup3");
        const closePopup3 = document.getElementById("closePopup3");

        myButton3.addEventListener("click", () => {
            myPopup3.classList.add("show");
        });

        closePopup3.addEventListener("click", () => {
            myPopup3.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3) {
                myPopup3.classList.remove("show");
            }
        });

        const myButton4 = document.getElementById("myButton4");
        const myPopup4 = document.getElementById("myPopup4");
        const closePopup4 = document.getElementById("closePopup4");

        myButton4.addEventListener("click", () => {
            myPopup4.classList.add("show");
        });

        closePopup4.addEventListener("click", () => {
            myPopup4.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4) {
                myPopup4.classList.remove("show");
            }
        });

        const myButton5 = document.getElementById("myButton5");
        const myPopup5 = document.getElementById("myPopup5");
        const closePopup5 = document.getElementById("closePopup5");

        myButton5.addEventListener("click", () => {
            myPopup5.classList.add("show");
        });

        closePopup5.addEventListener("click", () => {
            myPopup5.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5) {
                myPopup5.classList.remove("show");
            }
        });

        const myButton6 = document.getElementById("myButton6");
        const myPopup6 = document.getElementById("myPopup6");
        const closePopup6 = document.getElementById("closePopup6");

        myButton6.addEventListener("click", () => {
            myPopup6.classList.add("show");
        });

        closePopup6.addEventListener("click", () => {
            myPopup6.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup6) {
                myPopup6.classList.remove("show");
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
    background-image: url(../images/BACKGROUND.svg);
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
    margin: 2% 0;
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