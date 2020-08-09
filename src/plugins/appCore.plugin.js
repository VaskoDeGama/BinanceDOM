export default {
  install(Vue) {
    Vue.registerPlugin = function (plugin, options) {
      Vue.use(plugin, options)
    }
  }
}