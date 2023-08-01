<template>
    <body>
        <div class="body">
            <h1>BoD</h1>
            <h3>Board Of Directors</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1BoD">
                        <img src="https://drive.google.com/uc?id=1QDqU_geVOKvUQP_88DPl9FSbiCj6mtfv" alt="">
                        <div class="bottom-center">Rauf</div>
                    </div>
                    <div class="image-container" id="myButton2BoD">
                        <img src="https://drive.google.com/uc?id=1OfSIqvLfE_movA2HegnBDoeBqtoV86Q-" alt="">
                        <div class="bottom-center">Chairevita</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1eoSQmz0rh90usCQEtSEdTI5XCloYZIH5" alt="" id="myButton3BoD">
                        <div class="bottom-center">Ayu</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1l-q8d4-RAl_rIP0F5kY5r046Spz4ICYb" alt="" id="myButton4BoD">
                        <div class="bottom-center">Nadia</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1BoD" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1BoD" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1QDqU_geVOKvUQP_88DPl9FSbiCj6mtfv" alt="">
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
                            <td><a href="https://www.linkedin.com/in/raufarrabbany/" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2BoD" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2BoD" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1OfSIqvLfE_movA2HegnBDoeBqtoV86Q-" alt="">
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
                            <td><a href="" target="_blank">{{
                                Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup3BoD" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3BoD" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1eoSQmz0rh90usCQEtSEdTI5XCloYZIH5" alt="">
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
                            <td><a href="https://www.linkedin.com/in/idaayugayatriav/" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4BoD" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4BoD" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1l-q8d4-RAl_rIP0F5kY5r046Spz4ICYb" alt="">
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
                            <td><a href="https://www.linkedin.com/in/nadia-devi-pancaranti-359824153/"
                                    target="_blank">{{ Connection }}</a></td>
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

            fullName1: 'Abdur Rauf Arrabbany',
            Major1: 'Material and Metallurgical Engineering',
            Batch1: '2020',
            Position1: 'BoD',
            Department1: 'Competency Developement',
            Division1: '-',
            Connection: 'LinkedIn',

            fullName2: 'Chairevita Novia Mediana',
            Major2: 'Water Construction Engineering',
            Batch2: '2020',
            Position2: 'BoD',
            Department2: 'Human Resources',
            Division2: '-',

            fullName3: 'Ida Ayu Gayatri Alycia Vikranta',
            Major3: 'Material and Metallurgy Engineering',
            Batch3: '2020',
            Position3: 'BoD',
            Department3: 'Public Relation',
            Division3: '-',

            fullName4: 'Nadia Devi Pancaranti',
            Major4: 'Architecture',
            Batch4: '2020',
            Position4: 'BoD',
            Department4: 'Media and Branding',
            Division4: '-',
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

        const myButton1BoD = document.getElementById("myButton1BoD");
        const myPopup1BoD = document.getElementById("myPopup1BoD");
        const closePopup1BoD = document.getElementById("closePopup1BoD");

        myButton1BoD.addEventListener("click", () => {
            myPopup1BoD.classList.add("show");
        });

        closePopup1BoD.addEventListener("click", () => {
            myPopup1BoD.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1BoD) {
                myPopup1BoD.classList.remove("show");
            }
        });

        const myButton2BoD = document.getElementById("myButton2BoD");
        const myPopup2BoD = document.getElementById("myPopup2BoD");
        const closePopup2BoD = document.getElementById("closePopup2BoD");

        myButton2BoD.addEventListener("click", () => {
            myPopup2BoD.classList.add("show");
        });

        closePopup2BoD.addEventListener("click", () => {
            myPopup2BoD.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2BoD) {
                myPopup2BoD.classList.remove("show");
            }
        });

        const myButton3BoD = document.getElementById("myButton3BoD");
        const myPopup3BoD = document.getElementById("myPopup3BoD");
        const closePopup3BoD = document.getElementById("closePopup3BoD");

        myButton3BoD.addEventListener("click", () => {
            myPopup3BoD.classList.add("show");
        });

        closePopup3BoD.addEventListener("click", () => {
            myPopup3BoD.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3BoD) {
                myPopup3BoD.classList.remove("show");
            }
        });

        const myButton4BoD = document.getElementById("myButton4BoD");
        const myPopup4BoD = document.getElementById("myPopup4BoD");
        const closePopup4BoD = document.getElementById("closePopup4BoD");

        myButton4BoD.addEventListener("click", () => {
            myPopup4BoD.classList.add("show");
        });

        closePopup4BoD.addEventListener("click", () => {
            myPopup4BoD.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4BoD) {
                myPopup4BoD.classList.remove("show");
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
    padding: 2% 0;
    justify-content: center;
}

.closePopup{
    position: absolute;
    right: 5%;
    font-size: 30px;
    cursor: pointer;
    transform: translate(-20%);
}

.popupImage img {
    height: 400px;
    border-radius: 7.5px;
    margin: auto 15%;
}

.information {
    margin: auto 0 auto 10%;
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
}</style>