<template>
  <div class="wrap desktop" v-if="!responsive">
    <div class="wrap-main">
      <a href="/"><img class="logo" src="@/assets/logo.png"></a>
      <div class="navbar-konten">
        <div class="submenu"><a href="/">Home</a></div>
        <div class="submenu"><a href="event">Event</a></div>
        <div class="submenu"><a href="commitee">Committee</a></div>
        <div class="submenu"><a href="article">Article</a></div>
        <a href="register" class="button">Register</a>
      </div>
    </div>
  </div>
  <div class="wrap responsive" v-if="responsive">
    <div class="wrap-main">
      <img class="logo-res" src="@/assets/logo-short.png" style="width: 150px">
      <font-awesome-icon icon="fa-solid fa-bars" class="bars" @click="resmenu=!resmenu"/>
      <Transition name="resBGenter">
        <div class="resBG" v-if="resmenu" @click="resmenu=!resmenu"></div>
      </Transition>
    </div>
    <Transition name="slide">
      <div class="navbarRes" v-if="resmenu">
        <img class="logo-res" src="@/assets/logo-short.png" style="width: 150px">
        <div class="konten">
          <div class="submenu"><a href="/">Home</a></div>
          <div class="submenu"><a href="event">Event</a></div>
          <div class="submenu"><a href="commitee">Committee</a></div>
          <div class="submenu"><a href="article">Article</a></div>
          <a href="register" class="button">Register</a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default {
  data() {
    return {
      responsive: false,
      resmenu: false,
      faBars
    }
  },
  components: {
      FontAwesomeIcon,
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.responsive = true;
        return;
      } else {
        this.responsive = false;
        this.resmenu = false;
        return;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  display: flex; 
  justify-content: center;
  background-color: white;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 16px 24px;
  position: fixed;
  width: 100%;
  z-index: 99;

  .wrap-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    width: 100%;

    .logo{
      width: 300px;
    }
  }

  .navbar-konten{
    display: flex;
    padding: 0;
    gap: 24px;
    width:fit-content;
    align-items: center;
  }

.submenu{
  a{
    color: black;
  }

  a:hover{
    color: red;
  }
}

a{
  font-weight: bold;
  font-size: 24;
  text-decoration: none;
  transition: 0.5s;
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
}

.bars{
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.5s;
}

.bars:hover{
  color: red;
}

.responsive{
  img{
    width: 150px;
  }
}
.resBG{
  position: absolute;
  z-index: 2;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 2000px;
  left: 0;
}

.navbarRes{
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  padding: 0 24px;
  height: 100vh;
  box-shadow: 0px 11px 15px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  min-width: fit-content;
  width: 40%;

  .logo-res{
    padding: 16px 0;
  }

  .konten{
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 0;
  }
}

.slide-enter-from,
.slide-leave-to{
  left: -180px;
}

.slide-enter-to,
.slide-leave-from{
  left: 0;
}

.resBGenter-enter-from,
.resBGenter-leave-to{
  opacity: 0;
}

.resBGenter-enter-to,
.resBGenter-leave-from{
  opacity: 100%;
}

.slide-enter-active,
.resBGenter-enter-active {
  transition: all 0.2s ease-in;
}

.slide-leave-active,
.resBGenter-leave-active{
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 600px){
  .wrap,
  .navbarRes{
    padding: 0 16px;
  }
}
}
</style>