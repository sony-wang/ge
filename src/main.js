import Vue from 'vue'
import App from './App.vue'
import i18n from './common/plugins/vue-i18n'
import custom from './assets/js/script'
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


Vue.config.productionTip = false

window.jquery = window.jQuery = require('jquery');

new Vue({
  i18n,
  custom,
  render: h => h(App),
}).$mount('#app')
