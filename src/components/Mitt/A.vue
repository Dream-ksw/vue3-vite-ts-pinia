<template>
  <div>
    组件A
    <el-button @click="clickBtn">点击按钮给组件B传递信息</el-button>
  </div>
</template>

<script setup lang="ts">
// 使用全局mitt
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const clickBtn = () => {
  instance?.proxy?.$Bus.emit('on-click', '=====>a')
  // instance?.proxy?.$Bus.emit('on-click2', '=====>aaa')
}

// 单独引入使用
// import {$Bus} from '../../utils/Mitt'
// const clickBtn = () => {
//   $Bus.emit('on-click', '=====>a')
// }
</script>

<style lang="less" scoped>

</style>