//  zai node 环境下运行，所以都是 module.exports = {}
// import path from 'path'
const path = require('path')
module.exports = {
  // 1.配置方式1：CLI 提供的属性
  outputDir: './build',
  // 2.配置方式2：和 webpack 属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },
  // 函数方式，但是需要把所有的属性覆写一遍
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
  // 配置方式3：链式编程
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@',path.resolve(__dirname, 'src')).set('components', '@/components')
  // }
}
