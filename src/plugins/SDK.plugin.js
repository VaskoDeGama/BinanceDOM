export default {
  install(Vue) {
    Vue.prototype.$get = async function (symbol, limit = 500) {
      return await this.$api.get(`/api/v3/depth?symbol=${symbol}&limit=${limit}`,)
    }
    Vue.prototype.$subscribe = function () {
      console.log('subscribe vue API')
    }
  }

}