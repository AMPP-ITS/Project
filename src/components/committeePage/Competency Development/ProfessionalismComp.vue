<template>
    <body>
        <div class="title">
            <h2>Professionalism</h2>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1PRO">
                        <img src="https://drive.google.com/uc?id=1Y6oOhJDlC3MyY84C4A1aJxgFaC6Fm70v" alt="">
                        <div class="bottom-center">Retno</div>
                    </div>
                    <div class="image-container" id="myButton2PRO">
                        <img src="https://drive.google.com/uc?id=1gts56-rWlthscwRL44wL6m2DI1Rr-gga" alt="">
                        <div class="bottom-center">Roger</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1KOb8vKKBje-YsEIu1UIEVfVcG3gZITHG" alt=""
                            id="myButton3PRO">
                        <div class="bottom-center">Nafis</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1XpBy9mbS8wy-xBdukgmcC2cB3P6EPCN4" alt=""
                            id="myButton4PRO">
                        <div class="bottom-center">Azhim</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1JdNnnLcXENjiQSNolS3x02dpk6htp__d" alt=""
                            id="myButton5PRO">
                        <div class="bottom-center">Alliyah</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1PRO" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1PRO" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1Y6oOhJDlC3MyY84C4A1aJxgFaC6Fm70v" alt="">
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
                            <td><a href="https://www.linkedin.com/in/retno-anjarsari-4b8537243/" target="_blank">{{
                                Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2PRO" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2PRO" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1gts56-rWlthscwRL44wL6m2DI1Rr-gga" alt="">
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
                            <td><a href="" target="_blank">{{
                                Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup3PRO" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3PRO" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1KOb8vKKBje-YsEIu1UIEVfVcG3gZITHG" alt="">
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
                            <td><a href="https://www.linkedin.com/in/nafiswildanarrabi/" target="_blank">{{ Connection
                            }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4PRO" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4PRO" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1XpBy9mbS8wy-xBdukgmcC2cB3P6EPCN4" alt="">
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
                            <td><a href="https://www.linkedin.com/in/muhammad-azhim-fajar-sya-ban-a936471ab/"
                                    target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup5PRO" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup5PRO" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1JdNnnLcXENjiQSNolS3x02dpk6htp__d" alt="">
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
                            <td><a href="https://www.linkedin.com/in/aliyyahputri/" target="_blank">{{ Connection }}</a>
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

            fullName1: 'Retno Anjarsari',
            Major1: 'Materials and Metallurgical Engineering',
            Batch1: '2021',
            Position1: 'HoD',
            Department1: 'Competency Developement',
            Division1: 'Professionalism',
            Connection: 'LinkedIn',

            fullName2: 'Roger Permata Putra',
            Major2: 'Materials and Metallurgical Engineering',
            Batch2: '2021',
            Position2: 'Staff',
            Department2: 'Competency Developement',
            Division2: 'Professionalism',

            fullName3: 'Nafis Wildan Arrabi',
            Major3: 'Marine Engineering',
            Batch3: '2021',
            Position3: 'Staff',
            Department3: 'Competency Developement',
            Division3: 'Professionalism',

            fullName4: "Muhammad Azhim Fajar Sya'ban",
            Major4: 'Materials and Metallurgical Engineering',
            Batch4: '2021',
            Position4: 'Staff',
            Department4: 'Competency Developement',
            Division4: 'Professionalism',

            fullName5: 'Aliyyah Putri Ramaditya ',
            Major5: 'Civil Infrastructure Engineering',
            Batch5: '2021',
            Position5: 'Staff',
            Department5: 'Competency Developement',
            Division5: 'Professionalism',
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

        const myButton1PRO = document.getElementById("myButton1PRO");
        const myPopup1PRO = document.getElementById("myPopup1PRO");
        const closePopup1PRO = document.getElementById("closePopup1PRO");

        myButton1PRO.addEventListener("click", () => {
            myPopup1PRO.classList.add("show");
        });

        closePopup1PRO.addEventListener("click", () => {
            myPopup1PRO.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1PRO) {
                myPopup1PRO.classList.remove("show");
            }
        });

        const myButton2PRO = document.getElementById("myButton2PRO");
        const myPopup2PRO = document.getElementById("myPopup2PRO");
        const closePopup2PRO = document.getElementById("closePopup2PRO");

        myButton2PRO.addEventListener("click", () => {
            myPopup2PRO.classList.add("show");
        });

        closePopup2PRO.addEventListener("click", () => {
            myPopup2PRO.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2PRO) {
                myPopup2PRO.classList.remove("show");
            }
        });

        const myButton3PRO = document.getElementById("myButton3PRO");
        const myPopup3PRO = document.getElementById("myPopup3PRO");
        const closePopup3PRO = document.getElementById("closePopup3PRO");

        myButton3PRO.addEventListener("click", () => {
            myPopup3PRO.classList.add("show");
        });

        closePopup3PRO.addEventListener("click", () => {
            myPopup3PRO.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3PRO) {
                myPopup3PRO.classList.remove("show");
            }
        });

        const myButton4PRO = document.getElementById("myButton4PRO");
        const myPopup4PRO = document.getElementById("myPopup4PRO");
        const closePopup4PRO = document.getElementById("closePopup4PRO");

        myButton4PRO.addEventListener("click", () => {
            myPopup4PRO.classList.add("show");
        });

        closePopup4PRO.addEventListener("click", () => {
            myPopup4PRO.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4PRO) {
                myPopup4PRO.classList.remove("show");
            }
        });

        const myButton5PRO = document.getElementById("myButton5PRO");
        const myPopup5PRO = document.getElementById("myPopup5PRO");
        const closePopup5PRO = document.getElementById("closePopup5PRO");

        myButton5PRO.addEventListener("click", () => {
            myPopup5PRO.classList.add("show");
        });

        closePopup5PRO.addEventListener("click", () => {
            myPopup5PRO.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5PRO) {
                myPopup5PRO.classList.remove("show");
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