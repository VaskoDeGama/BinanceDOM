import Vue from 'vue'
import App from './App.vue'
import appCore from './plugins/appCore'
import eventBus from './plugins/eventBus'
import API from './plugins/API'
import 'reset-css';
import './assets/scss/styles.scss'
import './assets/js/app.js'

Vue.config.productionTip = false
Vue.use(appCore)
Vue.registerPlugin(API)
Vue.registerPlugin(eventBus)




new Vue({
  render: h => h(App),
}).$mount('#app')
