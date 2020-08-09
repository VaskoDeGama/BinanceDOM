import Vue from 'vue'
import App from './App.vue'
import appCore from './plugins/appCore.plugin'
import eventBus from './plugins/eventBus.plugin'
import sdk from './plugins/SDK.plugin'
import api from './plugins/axios.plagin'
import 'reset-css';
import './assets/scss/styles.scss'
import './assets/js/app.js'

Vue.config.productionTip = false
Vue.use(appCore)
Vue.registerPlugin(api, {
  baseURL: process.env.BINANCE_URL || 'https://api.binance.com/'
})
Vue.registerPlugin(eventBus)
Vue.registerPlugin(sdk)




new Vue({
  render: h => h(App),
}).$mount('#app')
