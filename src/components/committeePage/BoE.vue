<template>
    <body>
        <div class="body">
            <h1>BoE</h1>
            <h3>Board Of Executive</h3>
            <br>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <div class="gallery-wrap">
            <div class="gallery" ref="scrollContainer" @touchstart="onTouchStart" @touchmove="onTouchMove"
                @touchend="onTouchEnd">
                <div class="image">
                    <div class="image-container" id="myButton1BoE">
                        <img src="https://drive.google.com/uc?id=1Kg53R0jslzsKo9BLdddNpXsIzQF9Xmhj" alt="">
                        <div class="bottom-center">Enrico</div>
                    </div>
                    <div class="image-container" id="myButton2BoE">
                        <img src="https://drive.google.com/uc?id=1YAvr2UwV3BA11RDwvmi5RLPHiLg-nom-" alt="">
                        <div class="bottom-center">Indah</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=18GnuBPnh1Ki5uz8Tfuli62YBhSRtCkPN" alt=""
                            id="myButton3BoE">
                        <div class="bottom-center">Nafisa</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1QyDx_rs_HiQbmtn6c24BubB7X-0tJbvI" alt=""
                            id="myButton4BoE">
                        <div class="bottom-center">Della</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=15AnPcnLz5SHahpSjWjSeEQuYnB2Gt0Az" alt=""
                            id="myButton5BoE">
                        <div class="bottom-center">Putri</div>
                    </div>
                    <div class="image-container" id="myButton6BoE">
                        <img src="https://drive.google.com/uc?id=1X_HNFEiR37qmY05bx9WVw5i1Xn_sQEaw" alt="">
                        <div class="bottom-center">Jeremia</div>
                    </div>
                    <div class="image-container" id="myButton7BoE">
                        <img src="https://drive.google.com/uc?id=1vuDCROAyS1Kk9ymvMy4tQRBYQi2itfKS" alt="">
                        <div class="bottom-center">Nugroho</div>
                    </div>
                    <div class="image-container">
                        <img src="https://drive.google.com/uc?id=1A69OHnPulXxx2pSn-BfJxsKVTBo_tcp6" alt=""
                            id="myButton8BoE">
                        <div class="bottom-center">William</div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <div id="myPopup1BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup1BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
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
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position1 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/enricorafizio/" target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup2BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup2BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
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
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position2 }}</td>
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

    <div id="myPopup3BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup3BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=18GnuBPnh1Ki5uz8Tfuli62YBhSRtCkPN" alt="">
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
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/nvinaya/" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup4BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup4BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1QyDx_rs_HiQbmtn6c24BubB7X-0tJbvI" alt="">
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
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/della-ardhelya-zahra-putri-65a169250"
                                    target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup5BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup5BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
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
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position5 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/putriadekamtari " target="_blank">{{ Connection }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id="myPopup6BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup6BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1X_HNFEiR37qmY05bx9WVw5i1Xn_sQEaw" alt="">
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
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/jeremiaw/" target="_blank">{{ Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id="myPopup7BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup7BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1vuDCROAyS1Kk9ymvMy4tQRBYQi2itfKS" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName7 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major7 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch7 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position7 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/nugroho-wisnumurti-386182208" target="_blank">{{
                                Connection }}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myPopup8BoE" class="popup">
        <div class="popup-content">
            <svg class="closePopup" id="closePopup8BoE" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <div class="elements">
                <div class="popupImage">
                    <img src="https://drive.google.com/uc?id=1A69OHnPulXxx2pSn-BfJxsKVTBo_tcp6" alt="">
                </div>
                <div class="information">
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>{{ fullName8 }}</td>
                        </tr>
                        <tr>
                            <td>Major</td>
                            <td>:</td>
                            <td>{{ Major8 }}</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>:</td>
                            <td>{{ Batch8 }}</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>:</td>
                            <td>{{ Position8 }}</td>
                        </tr>
                        <tr>
                            <td>Connection</td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/thewilliamalexander/" target="_blank">{{ Connection
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

            fullName1: 'Muhammad Enrico Rafizio',
            Major1: 'Mechanical Engineering',
            Batch1: '2020',
            Position1: 'Chairman',
            Department1: '-',
            Division1: '-',
            Connection: 'LinkedIn',

            fullName2: 'Indah Asmaul Chusna',
            Major2: 'Industrial Chemical Engineering',
            Batch2: '2020',
            Position2: 'Vice Chairman',
            Department2: '-',
            Division2: '-',

            fullName3: 'Nafisa Tahar Vinaya',
            Major3: 'Chemical Engineering',
            Batch3: '2020',
            Position3: 'Secretary',
            Department3: '-',
            Division3: '-',

            fullName4: 'Della Ardhelya Zahra Putri',
            Major4: 'Actuarial Science',
            Batch4: '2021',
            Position4: 'Vice Secretary',
            Department4: '-',
            Division4: '-',

            fullName5: 'Putri Nabila Adekamtari',
            Major5: 'Actuarial Science',
            Batch5: '2020',
            Position5: 'Chief Financial Officer',
            Department5: '-',
            Division5: '-',

            fullName6: 'Jeremia Gedy Julio Wattimena',
            Major6: 'Mechanical Engineering',
            Batch6: '2020',
            Position6: 'General Inspector',
            Department6: '-',
            Division6: '-',

            fullName7: 'Nugroho Wisnumurti',
            Major7: 'Mechanical Engineering',
            Batch7: '2020',
            Position7: 'Strategy Advisor',
            Department7: '-',
            Division7: '-',

            fullName8: 'William Alexander Garcia Leonarto',
            Major8: 'Naval Architecture',
            Batch8: '2020',
            Position8: 'Internal Auditor',
            Department8: '-',
            Division8: '-',
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

        const myButton1BoE = document.getElementById("myButton1BoE");
        const myPopup1BoE = document.getElementById("myPopup1BoE");
        const closePopup1BoE = document.getElementById("closePopup1BoE");

        myButton1BoE.addEventListener("click", () => {
            myPopup1BoE.classList.add("show");
        });

        closePopup1BoE.addEventListener("click", () => {
            myPopup1BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup1BoE) {
                myPopup1BoE.classList.remove("show");
            }
        });

        const myButton2BoE = document.getElementById("myButton2BoE");
        const myPopup2BoE = document.getElementById("myPopup2BoE");
        const closePopup2BoE = document.getElementById("closePopup2BoE");

        myButton2BoE.addEventListener("click", () => {
            myPopup2BoE.classList.add("show");
        });

        closePopup2BoE.addEventListener("click", () => {
            myPopup2BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup2BoE) {
                myPopup2BoE.classList.remove("show");
            }
        });

        const myButton3BoE = document.getElementById("myButton3BoE");
        const myPopup3BoE = document.getElementById("myPopup3BoE");
        const closePopup3BoE = document.getElementById("closePopup3BoE");

        myButton3BoE.addEventListener("click", () => {
            myPopup3BoE.classList.add("show");
        });

        closePopup3BoE.addEventListener("click", () => {
            myPopup3BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup3BoE) {
                myPopup3BoE.classList.remove("show");
            }
        });

        const myButton4BoE = document.getElementById("myButton4BoE");
        const myPopup4BoE = document.getElementById("myPopup4BoE");
        const closePopup4BoE = document.getElementById("closePopup4BoE");

        myButton4BoE.addEventListener("click", () => {
            myPopup4BoE.classList.add("show");
        });

        closePopup4BoE.addEventListener("click", () => {
            myPopup4BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup4BoE) {
                myPopup4BoE.classList.remove("show");
            }
        });

        const myButton5BoE = document.getElementById("myButton5BoE");
        const myPopup5BoE = document.getElementById("myPopup5BoE");
        const closePopup5BoE = document.getElementById("closePopup5BoE");

        myButton5BoE.addEventListener("click", () => {
            myPopup5BoE.classList.add("show");
        });

        closePopup5BoE.addEventListener("click", () => {
            myPopup5BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup5BoE) {
                myPopup5BoE.classList.remove("show");
            }
        });

        const myButton6BoE = document.getElementById("myButton6BoE");
        const myPopup6BoE = document.getElementById("myPopup6BoE");
        const closePopup6BoE = document.getElementById("closePopup6BoE");

        myButton6BoE.addEventListener("click", () => {
            myPopup6BoE.classList.add("show");
        });

        closePopup6BoE.addEventListener("click", () => {
            myPopup6BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup6BoE) {
                myPopup6BoE.classList.remove("show");
            }
        });

        const myButton7BoE = document.getElementById("myButton7BoE");
        const myPopup7BoE = document.getElementById("myPopup7BoE");
        const closePopup7BoE = document.getElementById("closePopup7BoE");

        myButton7BoE.addEventListener("click", () => {
            myPopup7BoE.classList.add("show");
        });

        closePopup7BoE.addEventListener("click", () => {
            myPopup7BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup7BoE) {
                myPopup7BoE.classList.remove("show");
            }
        });

        const myButton8BoE = document.getElementById("myButton8BoE");
        const myPopup8BoE = document.getElementById("myPopup8BoE");
        const closePopup8BoE = document.getElementById("closePopup8BoE");

        myButton8BoE.addEventListener("click", () => {
            myPopup8BoE.classList.add("show");
        });

        closePopup8BoE.addEventListener("click", () => {
            myPopup8BoE.classList.remove("show");
        });

        window.addEventListener("click", (event) => {
            if (event.target === myPopup8BoE) {
                myPopup8BoE.classList.remove("show");
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