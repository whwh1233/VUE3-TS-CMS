import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'

import { registerApp } from './global/index'
// import './service/axios_demo'
import whRequest from './service'
import './assets/css/index.less'
const app = createApp(App)

// registerApp 是一个函数，可以 app.use 直接使用
// 注册 element-plus/其他
registerApp(app)
// app.use(registerApp)
// use 传入一个函数 ，自动调用这个函数
// use 传入一个对象， 自动执行函数内部的 install 方法

app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
whRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单次请求的拦截器')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单次响应的拦截器')
      return res
    }
  }
})
whRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
