<template>
    <body>
        <div class="body">
            <h1>PR</h1>
            <h3>Public Relation</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="title">
            <h2>Community Engagement</h2>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1CE">
                        <img src="https://drive.google.com/uc?id=1j15QYvjVKS24p2HLVy9Q6pE2jhbPxYSX" alt="">
                        <div class="bottom-center">Adit</div>
                    </div>
                    <div class="image-container" id="myButton2CE">
                        <img src="https://drive.google.com/uc?id=19vGlu97RO3fNKT0hSYEtULESSfZEuMur" alt="">
                        <div class="bottom-center">Aaliyah</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1CE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1CE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1j15QYvjVKS24p2HLVy9Q6pE2jhbPxYSX" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division1 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/eisyenaditya/" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2CE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2CE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=19vGlu97RO3fNKT0hSYEtULESSfZEuMur" alt="">
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
                            <td>Division</td>
                            <td>:</td>
                            <td>{{ Division2 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/aaliyah-noor-thahrina-03136b249/" target="_blank">{{
                                Connection }}</a></td>
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

            fullName1: 'Muhammad Eisyen Falechi Aditya',
            Major1: 'Industrial Chemical Engineering',
            Batch1: '2021',
            Position1: 'Staff',
            Department1: 'Public Relation',
            Division1: 'Community Engagement',
            Connection: 'LinkedIn',

            fullName2: 'Indah Asmaul Chusna',
            Major2: 'Business Management',
            Batch2: '2022',
            Position2: 'Staff',
            Department2: 'Public Relation',
            Division2: 'Community Engagement',
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

        const myButton1CE = document.getElementById("myButton1CE");
        const myPopup1CE = document.getElementById("myPopup1CE");
        const closePopup1CE = document.getElementById("closePopup1CE");

        myButton1CE.addEventListener("click", () => {
            myPopup1CE.classList.add("show");
        });

        closePopup1CE.addEventListener("click", () => {
            myPopup1CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1CE) {
                myPopup1CE.classList.remove("show");
            }
        });

        const myButton2CE = document.getElementById("myButton2CE");
        const myPopup2CE = document.getElementById("myPopup2CE");
        const closePopup2CE = document.getElementById("closePopup2CE");

        myButton2CE.addEventListener("click", () => {
            myPopup2CE.classList.add("show");
        });

        closePopup2CE.addEventListener("click", () => {
            myPopup2CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2CE) {
                myPopup2CE.classList.remove("show");
            }
        });

        const myButton3CE = document.getElementById("myButton3CE");
        const myPopup3CE = document.getElementById("myPopup3CE");
        const closePopup3CE = document.getElementById("closePopup3CE");

        myButton3CE.addEventListener("click", () => {
            myPopup3CE.classList.add("show");
        });

        closePopup3CE.addEventListener("click", () => {
            myPopup3CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3CE) {
                myPopup3CE.classList.remove("show");
            }
        });

        const myButton4CE = document.getElementById("myButton4CE");
        const myPopup4CE = document.getElementById("myPopup4CE");
        const closePopup4CE = document.getElementById("closePopup4CE");

        myButton4CE.addEventListener("click", () => {
            myPopup4CE.classList.add("show");
        });

        closePopup4CE.addEventListener("click", () => {
            myPopup4CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4CE) {
                myPopup4CE.classList.remove("show");
            }
        });

        const myButton5CE = document.getElementById("myButton5CE");
        const myPopup5CE = document.getElementById("myPopup5CE");
        const closePopup5CE = document.getElementById("closePopup5CE");

        myButton5CE.addEventListener("click", () => {
            myPopup5CE.classList.add("show");
        });

        closePopup5CE.addEventListener("click", () => {
            myPopup5CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5CE) {
                myPopup5CE.classList.remove("show");
            }
        });

        const myButton6CE = document.getElementById("myButton6CE");
        const myPopup6CE = document.getElementById("myPopup6CE");
        const closePopup6CE = document.getElementById("closePopup6CE");

        myButton6CE.addEventListener("click", () => {
            myPopup6CE.classList.add("show");
        });

        closePopup6CE.addEventListener("click", () => {
            myPopup6CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup6CE) {
                myPopup6CE.classList.remove("show");
            }
        });

        const myButton7CE = document.getElementById("myButton7CE");
        const myPopup7CE = document.getElementById("myPopup7CE");
        const closePopup7CE = document.getElementById("closePopup7CE");

        myButton7CE.addEventListener("click", () => {
            myPopup7CE.classList.add("show");
        });

        closePopup7CE.addEventListener("click", () => {
            myPopup7CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup7CE) {
                myPopup7CE.classList.remove("show");
            }
        });

        const myButton8CE = document.getElementById("myButton8CE");
        const myPopup8CE = document.getElementById("myPopup8CE");
        const closePopup8CE = document.getElementById("closePopup8CE");

        myButton8CE.addEventListener("click", () => {
            myPopup8CE.classList.add("show");
        });

        closePopup8CE.addEventListener("click", () => {
            myPopup8CE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup8CE) {
                myPopup8CE.classList.remove("show");
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