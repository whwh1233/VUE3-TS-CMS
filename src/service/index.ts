// service 的统一出口
import WHRequest from './request/index'
import { TIME_OUT, BASE_URL } from './request/config'
// 每个实例都可以拥有自己的拦截器
const whRequest = new WHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('这是请求的拦截器')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('这是请求失败的拦截器')
      return err
    },
    responseInterceptor: (config) => {
      // console.log('这是响应成功的拦截器')
      return config
    },
    responseInterceptorCatch: (err) => {
      // console.log('这是响应失败的拦截器')
      return err
    }
  }
})
// console.log(BASE_URL)
export default whRequest
