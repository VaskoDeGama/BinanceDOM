module.exports = {
  publicPath: './',
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
    overlay: {
      warnings: false,
      errors: true
    }
  }
}