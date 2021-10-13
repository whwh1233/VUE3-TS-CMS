/* eslint-disable */
// shim 垫片
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 导出的是 实例
declare let $store: any
