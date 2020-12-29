const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  //子网站使用
  publicPath: isProd ? '/doc' : '/',
  outputDir: './docs',
  productionSourceMap: isProd,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://api',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     },
  //   }
  // },
  pages: {
    index: {
      // page 的入口
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Docs',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.js',
        config: resolve('src/config'),
        store: resolve('src/store'),
      }
    },
    ...(isProd ? {
      plugins: [
          new CompressionWebpackPlugin({
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: /\.(js|css)(\?.*)?$/i,
              threshold: 2048,
              minRatio: 0.8,
              deleteOriginalAssets: false
          })
      ]
    } : {})
  },
}