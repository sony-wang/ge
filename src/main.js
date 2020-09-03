import Vue from 'vue'
import App from './App.vue'
import i18n from './common/plugins/vue-i18n'
import custom from './assets/js/script'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  i18n,
  custom,
  render: h => h(App),
}).$mount('#app')
