import axios from 'axios'

export default {
  install(Vue, options) {

    Vue.prototype.$api = axios.create({
      baseURL: options['baseURL'],

    })

  }
}