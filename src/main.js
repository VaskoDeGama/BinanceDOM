import Vue from 'vue'
import App from './App.vue'
import 'reset-css';
import './assets/scss/styles.scss'
import './assets/js/app.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
