<template>
  <div class="app">
    <!-- <router-link to="./login">登录</router-link>
    <router-link to="./main">首页</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// defineComponent 对我们的对象做了一个包裹
// 可以进行一个默认的类型推导
export default defineComponent({
  name: 'App',
  components: {}
  // props: {
  //   name: {
  //     type: String
  //   }
  // },
  // setup(props) {
  //   console.log(props.name)
  // }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
