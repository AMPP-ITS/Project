<template>
    <div class="wrap" id="majalah">
        <div class="wrap-main">
            <div class="judul">
                <div class="block"></div>
                <div class="kata">
                    <h1>Majalah</h1>
                    <p>Cek Majalah kami!!</p>
                </div>
            </div>
            <div @mouseover="overCarousel=true" @mouseout="overCarousel=false" class="wrap-carousel">
                <Transition name="fade" v-if="!mobile">
                    <button 
                    class="but prev" 
                    @click="slideToPrev" 
                    v-if="overCarousel" 
                    @mouseover="overCarousel=true" 
                    @mouseout="overCarousel=false" 
                    :class="{ 'clicked-style': butIsClicked }">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" class="arrow"/>
                    </button>
                </Transition>
                <Transition name="fade" v-if="!mobile">
                    <button 
                    class="but next" 
                    @click="slideToNext" 
                    v-if="overCarousel" 
                    @mouseover="overCarousel=true" 
                    @mouseout="overCarousel=false" 
                    :class="{ 'clicked-style': butIsClicked }">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow"/>
                    </button>
                </Transition>
                <Carousel :v-bind="settings" :wrap-around="true" :autoplay="8000" class="caro" ref="myCarousel" v-model="currentSlide" :breakpoints="breakpoints">
                    <Slide v-for="(link, index) in linkMajalah" :key="index" style="height: 700px">
                        <div class="inSlide" @click="openLink(link)">
                            <img :src="linkCover[index]">
                            <div class="kata">
                                <h1>{{ judulMajalah[index] }}</h1>
                                <p>{{ overMajalah[index] }}</p>
                                <a class="button" @click="openLink(link)">Learn More</a>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
    FontAwesomeIcon,
    },
    setup(){
        const myCarousel = ref(null);

        function slideToNext() {
            myCarousel.value.next();
        }

        function slideToPrev() {
            myCarousel.value.prev();
        }

        return{
            myCarousel,
            slideToNext,
            slideToPrev
        }
    },
    data() {
        return {
            overCarousel: false,
            mobile: false,
            settings: {
              itemsToShow: 1,
              snapAlign: 'center',
            },
            breakpoints: {
              // 700px and up
              808: {
                itemsToShow: 2,
                snapAlign: 'start',
              },
              // 1024 and up
              1200: {
                itemsToShow: 3,
                snapAlign: 'center',
              },
            },
            linkMajalah: [
              'https://drive.google.com/file/d/1o7XWIEqjRfuWx9P2Mt0vgjDKTUbI-gls/view?usp=drive_link',
              'https://drive.google.com/file/d/1M7a2isjUYZFD1kzFRCINWw0I5eADLqIV/view?usp=drive_link',
              'https://drive.google.com/file/d/1VcQPIFNcIspFOyAC8hXosraNdpTd5M54/view?usp=drive_link',
              'https://drive.google.com/file/d/1UaSwqsoOVXjC87Iegw4JfK6_bm5qzJif/view?usp=drive_link',
              'https://drive.google.com/file/d/1WeQbCF_1gBUyQYl1ztyvGe2Q2ZU4IDV4/view?usp=drive_link',
              'https://drive.google.com/file/d/1JI-8aXIHeBD9y2kMvr36mKPOcjuddOW_/view?usp=drive_link',
              'https://drive.google.com/file/d/1n5mrvlE_lsmXsiHqRnEEVWjflgZoCgLZ/view?usp=drive_link',
              'https://drive.google.com/file/d/1c0R60xnnZlNvoN6jSOeV9UItAGzqXXH7/view?usp=drive_link',
              'https://drive.google.com/file/d/1c3rGHjJOJAQkIV8AGzVZj3wSDre3undi/view?usp=drive_link'
            ],
            judulMajalah: [
              'Corrosion and Materials Selection',
              'CORROSION ENGINEERING',
              'Fundamentals of CORROSION',
              'Materials',
              'Mechanical Engineers’ Handbook',
              'Corrosion Engineering',
              'CORROSION AND CORROSION CONTROL',
              'The Science and Engineering of Materials',
              'Principles of Corrosion Engineering and Corrosion Control'
            ],
            linkCover: [
              require('@/assets/cover-1.jpg'),
              require('@/assets/cover-2.jpg'),
              require('@/assets/cover-3.jpg'),
              require('@/assets/cover-4.jpg'),
              require('@/assets/cover-5.jpg'),
              require('@/assets/cover-6.jpg'),
              require('@/assets/cover-7.jpg'),
              require('@/assets/cover-8.jpg'),
              require('@/assets/cover-9.jpg'),
            ],
            overMajalah: [
              'By Alireza Bahadori - A Guide for the Chemical and Petroleum Industries.',
              'By Branko N. Popov - Principles and Solved Problems.',
              'By Philip A. Schweitzer - Mechanisms, Causes, and Preventative Methods.',
              'By Michael Ashby, etc - Engineering, Science, Processing and Design.',
              'By Myer Kutz - Materials and Engineering Mechanics.',
              'By Perre R. Roberge - Principles and Practice.',
              'By R. Winston Revie, etc - An Introduction to Corrosion Scienc and Engineering.',
              'By Donald R. Askeland, etc - Comprehensive overview of materials science and engineering principles.',
              'By Zaki Ahmad - a thorough examination of corrosion principles and techniques for corrosion prevention and control.'
            ]
        }
    },
    created() {
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    },
    methods: {
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 1064 && this.windowWidth > 807) {
          this.mobile = false;
          return;
        } 
        else if (this.windowWidth <= 807) {
          this.mobile = true;
          return;
        } 
        else {
          this.mobile = false;
          return;
        }
      },
      openLink(link) {
        window.open(link, '_blank'); // This will open the link in a new tab
      },
    }
}
</script>

<style lang="scss" scoped>
*{
  font-family: "Montserrat", sans-serif;
}
.wrap{
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 1000px;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 600px){
    .wrap{
        padding: 0 16px;
    }
}

.wrap-main{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    position: relative;
    height: fit-content;

    .judul{
        display: flex;
        width: fit-content;
        height: fit-content;
        gap: 8px;

        .block{
            width: 4px;
            height: 66px;
            background: linear-gradient(90deg, #FC6076, #FF9A44);
        }
        .kata{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: fit-content;
            height: fit-content;

            h1{
                font-size: 36px;
                font-weight: bold;
                width: fit-content;
            }

            p{
                font-size: 12px;
                width: fit-content
            }
        }
    }
}

.caro{
    width: 1125px;
}

.inSlide{
    width: 350px;
    height: 550px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    cursor: pointer;

    h1{
      color: black;
      font-size: 18px;
      text-align: left;
    }

    p{
        color: black;
        font-size: 14px;
        text-align: left;
        font-weight: lighter;
    }

    img{
      width: 100%;
      height: 350px;
      border-radius: 20px;
      object-fit: cover;
    }

    .kata{
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 24px;
    }

    .button{
        padding: 8px;
        border-radius: 20px;
        background: linear-gradient(90deg, #FC6076, #FF9A44);
        display: flex;
        justify-items: center;
        align-items: center;
        cursor: pointer;
        width: fit-content;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
        color: white;
        font-size: 14px;
        transition: 0.5s;
    }

    a{
        text-decoration: none;
    }

    &:hover{
      transform: scale(1.1);
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
    }
}

.wrap-carousel{
  position: relative;
  width: 1125px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.but{
    position: absolute;
    width: 64px;
    height: 64px;
    background-color: rgb(182, 182, 182);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border:none;
    cursor: pointer;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

    .arrow{
      width: 24px;
      height: 24px;
    }
}

.prev{
    left: 0;
}

.next{
    right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1200px){
  .wrap-carousel{
    width: 800px;
    .caro{
      width: 800px;
    }
  }

@media only screen and (max-width: 807px){
  .wrap-carousel{
    width: 350px;
    .caro{
      width: 400px;
    }
  }
}
}
</style>