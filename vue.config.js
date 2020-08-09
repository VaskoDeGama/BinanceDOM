module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/BinanceDOM/'
      : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: 'warning',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/scss/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: 'https://api.binance.com/',
    overlay: {
      warnings: false,
      errors: true
    }
  }
}