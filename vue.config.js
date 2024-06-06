// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


const webpack = require('webpack');

module.exports = {
  // Set the base URL for the application
  publicPath: '/',

  // Specify the output directory for the build
  outputDir: 'docs',

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
        // add other feature flags as needed
      })
    ]
  }
};