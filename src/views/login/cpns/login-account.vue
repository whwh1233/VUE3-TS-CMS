<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- 创建规则并指定给表单 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/account-config'
import localCache from '../../../utils/catch'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 是否记住密码
          if (isKeepPassword) {
            // 需要记住本地缓存\
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            console.log('不需要进行缓存')
          }
        } else {
          console.log('不符合要求，需要重新输入')
        }
      })
    }
    return { account, rules, loginAction, formRef }
  }
})
</script>
