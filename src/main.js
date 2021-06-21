import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'animate.css'
import Vuelidate from 'vuelidate'

//import fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes, faUser, faLock, faEye, faSpinner, faCheck, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlus, faTimes, faUser, faLock, faEye, faSpinner, faCheck, faAngleDoubleDown, faAngleDoubleUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//use vuelidate globally
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
