export default {
  install(Vue) {
    Vue.prototype.$get = async function (symbol, limit = 500) {
      const data = await this.$api.get(`/api/v3/depth?symbol=${symbol}&limit=${limit}`,)
      console.log(data)
    }
    Vue.prototype.$subscribe = function () {
      console.log('subscribe vue API')
    }
  }

}