export default {
  install(Vue) {
    Vue.prototype.$get = function () {
      console.log('get vue API')
    }
    Vue.prototype.$subscribe = function () {
      console.log('subscribe vue API')
    }
  }

}