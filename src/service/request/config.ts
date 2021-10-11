// 1. 手动修改
// const BASE_URL = 'http://www.coderwhy.org'
// // 其他文件
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://www.wh.org'
// // 其他文件
// const BASE_NAME = 'wh'

//  BASE_URL = 'http://www.wwj.org'
// // 其他文件
// const BASE_NAME = 'wwj'

// 2.根据process.env.NODE_ENV   这种方法用的最多  3，配置不同的环境文件，在 .env.development等文件中
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'develpoment') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.wh.org'
} else {
  BASE_URL = 'http://123.207.32.32:8000'
}

export { BASE_URL, TIME_OUT }
// 这是直接导出变量的语法
// export const name = ''
