<template>
  <div class="wrap" v-if="!mobile">
    <footer class="footer">
        <div class="footer-main">
            <img class="logo" :src="gambar" />
            <div class="useful-links">
              <h2>Useful Links</h2>
                <div class="links-col">
                  <div>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Members</a>
                  </div>
                  <div>
                    <a href="">Articles</a>
                    <a href="">Register</a>
                    <a href="">Privacy Policy</a>
                  </div>
                </div>
            </div>
            <div class="event">
              <h2>Event</h2>
                <div class="event-col">
                  <div>
                    <a href="">Essay Competition</a>
                    <a href="">Talkshow</a>
                    <a href="">Exhibition</a>
                  </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="footer_secondary">
          <p class="copyright">Copyright &copy; AMPP ITS SC 2023 All Rights Reserved</p>
          <p>
            <a href="https://instagram.com/ampp.itssc?igshid=MzRlODBiNWFlZA==" class="fa-instagram" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" size="xl" /></a>
            <a href="https://www.linkedin.com/company/amppitssc/" class="fa-linkedin" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" size="xl" /></a>
            <a href="https://youtube.com/@amppinstitutteknologisepul5302" class="fa-youtube" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" size="xl" /></a>
          </p>
        </div>
    </footer>
  </div>
  <div class="wrap" v-if="mobile">
    <footer class="footer">
        <div class="footer-main">
          <div class="wrap-snd">
            <img class="logo" :src="gambar" />
            <div class="useful-links">
              <h2>Useful Links</h2>
                <div class="links-col">
                  <div>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Members</a>
                  </div>
                  <div class="link2">
                    <a href="">Articles</a>
                    <a href="">Register</a>
                    <a href="">Privacy Policy</a>
                  </div>
                </div>
            </div>
            <div class="event">
              <h2>Event</h2>
                <div class="event-col">
                  <div>
                    <a href="">Essay Competition</a>
                    <a href="">Talkshow</a>
                    <a href="">Exhibition</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="footer_secondary">
          <p class="copyright">Copyright &copy; AMPP ITS SC 2023 All Rights Reserved</p>
          <p>
            <a href="https://instagram.com/ampp.itssc?igshid=MzRlODBiNWFlZA==" class="fa-instagram" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" size="xl" /></a>
            <a href="https://www.linkedin.com/company/amppitssc/" class="fa-linkedin" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" size="xl" /></a>
            <a href="https://youtube.com/@amppinstitutteknologisepul5302" class="fa-youtube" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" size="xl" /></a>
          </p>
        </div>
    </footer>
  </div>
</template>

<script scoped>
import gambar from "@/assets/logo.png";
import gambarRes from "@/assets/logo-short.png";
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "footerComp",
  props: {},

  data() {
    return {
      gambar: gambar,
      mobile: false,
      faInstagram,
      faLinkedin,
      faYoutube
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1000) {
        this.gambar = gambarRes;
        this.mobile = true;
        return;
      } else {
        this.gambar = gambar
        this.mobile = false
        return;
      }
    },
  },

  components: {
    FontAwesomeIcon,
  },

};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Khula:wght@400;700&display=swap');

.wrap{
  display: flex; 
  justify-content: center;
  width: 100%;
}

.logo{
  width: 400px;
  object-fit: scale-down;
  height: fit-content;
}

.footer {
    margin: none;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    padding: auto 24px;
    line-height: 2rem;
    padding: 1rem;
    padding-left: 0;
    max-width: 1280px;
    width: 100%;
}

.footer .footer-main {
    display: flex;
    /*flex-direction: row;*/
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
}

.links-col {
    /*border: 1px solid red;*/
    display: flex;
    justify-content: space-between;
    /*flex-direction:column; */
    padding-top: 1.5rem;
    width: 200px;

}
.useful-links .links-col> div {
    display: grid;
}

.event-col {
    /*border: 1px solid red;*/
    display: flex;
    justify-content: space-between;
    /*flex-direction:column; */
    padding-top: 1.5rem;
}
.event .event-col> div {
    display: grid;
}

.footer_secondary {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.footer_secondary .copyright {
    text-align: center;
    font-size: 24;
    font-family: "Khula";
    font-weight: 400;
    color: black;
}
.footer_secondary p a {
    cursor: pointer;
    margin: 0.5rem;
    color: black;
    transition: 0.5s;
}

.useful-links .links-col a:hover {
  text-decoration: none;
  color: red;
}
.useful-links .links-col a {
  text-decoration: none;
  font-size: 21;
  font-weight: 400;
  font-family: "Khula";
  color: black;
  transition: 0.5s;
}

.event .event-col a:hover {
  text-decoration: none;
  color: red;
}
.event .event-col a {
  text-decoration: none;
  font-size: 21;
  font-weight: 400;
  font-family: "Khula";
  color: black;
  transition: 0.5s;
}
.footer_secondary .fa-instagram:hover {
  color: #c13584;
  text-decoration: none;
  cursor: pointer;
}
.footer_secondary .fa-linkedin:hover {
  color: #0A66C2;
  text-decoration: none;
  cursor: pointer;
}
.footer_secondary .fa-youtube:hover {
  color: #FF0000;
  text-decoration: none;
  cursor: pointer;
}

.footer hr {
  background-color: black;
  border: none;
  height: 1px;
  margin: 5px auto;
  max-width: 95%;
}

.wrap-snd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: 200px;
  }

  .link2{
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 700px){
  .wrap-snd{
    flex-direction: column;
    gap: 48px;
  }

  .footer-main{
    display: flex;
    justify-items: center;

    .wrap-snd{
      align-items: flex-start;
      width: fit-content;
    }
  }

  .footer_secondary{
    display: flex;
    flex-direction: column;

    .copyright{
      width: 100%;
    }
  }
}
</style>
