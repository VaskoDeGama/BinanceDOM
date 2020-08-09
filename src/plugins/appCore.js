export default {
  install(Vue) {
    Vue.registerPlugin = function (plugin) {
      Vue.use(plugin)
    }
  }
}