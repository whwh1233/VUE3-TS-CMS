<template>
  <div class="login-account">
    <el-form>
      <el-form-item label="账号"> <el-input></el-input> </el-form-item>
      <el-form-item label="密码"> <el-input></el-input> </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return { account }
  }
})
</script>
