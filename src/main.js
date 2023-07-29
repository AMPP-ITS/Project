import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faArrowRight, faArrowLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faBars, faArrowRight, faArrowLeft, faCircleInfo);
library.add(faFacebook, faInstagram, faLinkedin, faYoutube);


createApp(App).use(router).mount('#app').component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
