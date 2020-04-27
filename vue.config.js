var nodeExternals = require('webpack-node-externals');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
          prependData: `
              @import "@/scss/main.scss";
          `
      }
    }
  },
  configureWebpack: {
    target: 'node',
    externals: [nodeExternals()]
  }
}