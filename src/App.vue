<template>
  <h2>{{ $store.state.name }}</h2>
  <h2>这是我的第一次构建的过程</h2>
  <h2>看看到底会不会成功</h2>
  <router-link to="./login">登录</router-link>
  <router-link to="./main">首页</router-link>
  <el-button>哈哈哈</el-button>
  <el-button type="primary">哈哈哈</el-button>
  <el-input></el-input>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
