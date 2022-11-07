const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const multipage = ['index','page1','page2'];
module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  pages: {
    'index': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'page1': {
      entry: 'src/page1/main.js',
      filename: 'page1.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'page1' ]
    },
    'page2': {
      entry: 'src/page2/main.js',
      filename: 'page2.html',
      chunks: ['chunk-vendors', 'chunk-common', 'page2'],
    },
  },
  devServer: {
    inline: false,
    disableHostCheck: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module
    .rule("compile")
    .test(/\.mjs$/)
    .use("babel")
    .loader("babel-loader")
    multipage.forEach(page => {
      config.plugin(`html-${page}`).tap(args => {
        args[0].template = 'public/index.html'
        args[0].title = page
        return args
      })
    })
    config.plugin('define').tap(args => {
      args[0]['process.env']['VUE_APP_VERSION'] = JSON.stringify(require('./package.json').version)
      return args
    })
    config.plugins.delete('preload-index')
    config.plugins.delete('prefetch-index')
    config.plugins.delete('preload-page1')
    config.plugins.delete('prefetch-page1')
    config.plugins.delete('preload-page2')
    config.plugins.delete('prefetch-page2')
  },
  configureWebpack:  {
    // externals: {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    // },
    plugins:[
      new CleanWebpackPlugin({
        dry: true
      })
    ],
    output: {
    //   // filename: "[name].[contenthash].bundle.js",
    //   // path: buildPath,
      devtoolModuleFilenameTemplate: "什么意思://[resource-path]"
    },
    devtool: 'source-map'
    //
  }
}
