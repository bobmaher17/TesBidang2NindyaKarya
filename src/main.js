import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

// This imports directive v-b-scrollspy as a plugin:
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

// This imports the dropdown and table plugins
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

// Vue Flash Message Alert
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

// VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)

//import router
import router from './router/index'

//import bootstrap css & js
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import assets
import '@/assets/css/main.css'
import '@/assets/css/util.css'
import '@/assets/css/admin.min.css'
import '@/assets/fonts/poppins/Poppins-Regular.ttf'
import '@/assets/fonts/poppins/Poppins-Medium.ttf'
import '@/assets/fonts/poppins/Poppins-Bold.ttf'
import '@/assets/fonts/poppins/Poppins-SemiBold.ttf'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

//import axios
import axios from 'axios'

//set credential axios with true
axios.defaults.withCredentials = true

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

