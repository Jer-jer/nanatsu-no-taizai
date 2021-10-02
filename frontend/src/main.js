import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

//CSS Imports
import 'primevue/resources/themes/md-light-deeppurple/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                          //core css
import 'primeicons/primeicons.css'                                    //icons
import 'primeflex/primeflex.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
