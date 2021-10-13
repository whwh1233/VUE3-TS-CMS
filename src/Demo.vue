<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 另一个组件使用的时候，是不是使用的就是这个对象
// 其实不是，这跟类十分相近
// 是根据这个对象，创建出的一个组件真正的实例
// 这个 demo 对象只是对于组件的描述
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
