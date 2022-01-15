const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    // 本地服务器配置
    port: 9999,
    // proxy: {
    //   '/apiCashier': {
    //      target: '',
    //     // 本地开发
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/apiCashier': '/'
    //     }
    //   }
    // }
  },
  css: {
    // 将项目和插件中的px转成rem
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 3,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: ['.pc-', '.van-'],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/]// 设置忽略文件，用正则做目录名匹配
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./static/css/variable.less")] // 引入全局样式变量
    }
  },
}
