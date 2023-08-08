<template>
  <div class="wrap">
    <div class="wrap-main">
      <h1>UPCOMING EVENT</h1>
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
        <Carousel :v-bind="settings" :wrap-around="true" :autoplay="5000" class="caro" ref="myCarousel" v-model="currentSlide" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide" style="height: 700px;">
                <div class="inSlide">
                  <img class="logo-res" src="@/assets/logo-short.png">
                  <h1>COMING SOON</h1>
                </div>
            </Slide>
        </Carousel>
      </div>
      <a class="button" href="event"><font-awesome-icon icon="fa-solid fa-circle-info" />See Details</a>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'WrapAround',
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
            faArrowRight,
            faArrowLeft,
            faCircleInfo,
            settings: {
              itemsToShow: 1,
              snapAlign: 'center',
            },
            breakpoints: {
              // 700px and up
              807: {
                itemsToShow: 2,
                snapAlign: 'start',
              },
              // 1024 and up
              1064: {
                itemsToShow: 3,
                snapAlign: 'center',
              },
            }
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
    }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/bg-event.jpg);
  width: 100%;
  height: 1000px;
}
.wrap-main{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1{
      color: white;
      font-size: 56px;
      display: flex;
      text-align: center;
      padding: 0 16px;
    }
}

.caro{
    width: 1000px;
}

.inSlide{
    width: 312px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    padding: 0 36px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    transition: 0.5s;

    h1{
      color: black;
      font-size: 48px;
    }

    img{
      width: 250px;
    }

    &:hover{
      transform: scale(1.1);
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
    }
}

.wrap-carousel{
  position: relative;
  width: 1050px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.but{
    position: absolute;
    width: 64px;
    height: 64px;
    background-color: grey;
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

.button{
  padding: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #FC6076, #FF9A44);
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  color: white;
  gap: 8px;
  padding: 16px 24px;
  font-size: 24px;
}

a{
  text-decoration: none;
}

@media only screen and (max-width: 1064px){
  .wrap-carousel{
    width: 800px;
    .caro{
      width: 700px;
    }
  }

@media only screen and (max-width: 807px){
  .wrap-carousel{
    width: 400px;
    .caro{
      width: 100%;
    }
  }
}
}
</style>
