<template>
  <div class="login-phone">
    <el-form label-width="70px" :model="account" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="passKey">
        <div class="get-code">
          <el-input v-model="account.passKey"></el-input>
          <el-button type="primary" class="get-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import rules from '../config/phone-config'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      passKey: ''
    })
    return { account, rules }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-button {
  margin-left: 8px;
}
</style>
