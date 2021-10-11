import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface WHRequestConfig extends AxiosRequestConfig {
  interceptors?: WHRequestInterceptors
}
