import axios from 'axios'

// axios 就是 axios 的实例  即就是一个对象，有方法可以使用
// 1.模拟get 请求
// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res) => console.log(res))

// // 2. get 请求加入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => console.log(res))

// // 3. 模拟 post 请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'why'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// 4. axios 的配置选项
// 4.1全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 6000
// axios.defaults.headers = {}
// 4.2每个请求单独的配置
axios
  .get('/get', {
    params: {
      name: 'why',
      age: 18
    },
    timeout: 2000
  })
  .then((res) => console.log(res))
axios
  .post('/post', {
    data: {
      name: 'why'
    }
  })
  .then((res) => {
    console.log(res)
  })

// 通用方法
// axios.request({
//   method: 'GET'
// })
console.log('----')

// 5. axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'wh',
        age: 18
      }
    }),
    axios.post('./post', {
      data: {
        name: 'wh'
      }
    })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

// 6.请求的拦截器
// 比如 每个请求都需要添加
// 比如 请求时间较长，添加一个 loading 动画
// fn1 请求发送成功会执行， fn2 请求发送失败时会执行
axios.interceptors.request.use(
  (config) => {
    // 在拦截的地方做你想做的操作
    config.url = '/post'
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
// fn1 服务器返回成功 2XX 的状态
// fn2 服务器请求失败的err处理函数
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

// promise 本身也可以有类型
// 这里的泛型，可以决定传入 resolve 的参数的类型，以及 then 后面 res 的类型
// new Promise<string>((resolve, reject) => {
//   resolve('asd')
// }).then((res) => {
//   console.log(res.length)
// })
