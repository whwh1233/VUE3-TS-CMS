import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WHRequestInterceptors, WHRequestConfig } from './type'

// import { ElLoading } from 'element-plus'
class WHRequest {
  instance: AxiosInstance
  interceptors?: WHRequestInterceptors

  constructor(config: WHRequestConfig) {
    this.instance = axios.create(config)
    // 从config 中取出的拦截器是 每一个请求对象都需要自定义的拦截器，
    this.interceptors = config.interceptors
    // 让每个请求单独传入拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有请求中都会有的拦截器
    // 后添加的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 去掉 请求 loading
        // ElLoading.service({
        //   lock: true,
        //   text: '正在请求...',
        //   background: 'rgba(0,0,0,0.5)'
        // })
        console.log('所有实例都会有的拦截器，请求拦截器')
        return config
      },
      (err) => {
        console.log('所有有请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('所有实例都会有的拦截器，响应拦截器')
        return config
      },
      (err) => {
        console.log('所有实例都会有的拦截器，响应失败拦截器')
        return err
      }
    )
  }

  request(config: WHRequestConfig): void {
    // 在这里进行一次 interceptor 的处理
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance
      .request(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptor) {
          // TODO 这里为啥会报错
          // res = config.interceptors.responseInterceptor(res)
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // get(config: AxiosRequestConfig) {}
}
export default WHRequest
