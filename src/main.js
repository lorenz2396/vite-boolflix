import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarP } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarV} from '@fortawesome/free-regualar-svg-icons'

/* add icons to the library */
library.add(faStarP , faStarV)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
