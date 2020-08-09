export default {
  install(Vue) {
    Vue.prototype.$get = async function (symbol, limit = 500) {
      return await this.$api.get(`/api/v3/depth?symbol=${symbol}&limit=${limit}`,)
    }
    Vue.prototype.$subscribe = function (symbol) {
      return new WebSocket(
          `${process.env.BINANCE_URL || 'wss://stream.binance.com:9443'}/ws/${symbol.toLowerCase()}@depth@1000ms`,
      )
    }
  }

}