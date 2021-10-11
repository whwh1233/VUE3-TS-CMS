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
let BASE_NAME = ''
if (process.env.NODE_ENV === 'develpoment') {
  BASE_URL = 'http://www.coderwhy.org'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.wh.org'
  BASE_NAME = 'wh'
} else {
  BASE_URL = 'http://www.wwj.org'
  BASE_NAME = 'wwj'
}

export { BASE_NAME, BASE_URL }
// 这是直接导出变量的语法
export const name = ''
