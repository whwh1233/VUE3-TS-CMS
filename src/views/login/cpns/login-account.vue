<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- 创建规则并指定给表单 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const loginAction = () => {
      console.log('真正开始登陆')
      formRef.value?.validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log('开始真正执行登陆逻辑')
        } else {
          console.log('不符合要求，需要重新输入')
        }
      })
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    return { account, rules, loginAction, formRef }
  }
})
</script>
