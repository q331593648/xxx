const path = require('path') //引入路径
function resolve(dir) {
  //获取相对路径
  return path.join(__dirname, dir)
}
module.exports = {
  //具体配置

  assetsDir: '', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录

  lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用 eslint-loader

  css: {
    sourceMap: false //是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
  },

  productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。

  chainWebpack: config => {
    config.resolve.alias //配置快捷访问路径
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
  },

  devServer: {
    //配置跨域代理
    port: 8000,
    disableHostCheck: true,
    overlay: {
      //设置让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
