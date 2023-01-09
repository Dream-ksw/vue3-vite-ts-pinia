<template>
  <div>
    组件B
  </div>
</template>

<script setup lang="ts">
// 使用全局mitt
// import { getCurrentInstance } from 'vue'
// const instance = getCurrentInstance()
// const fn = (params:any) => {
//   console.log(params)
// }
// 一次监听一个事件
// instance?.proxy?.$Bus.on('on-click',fn)
// 关闭事件
// instance?.proxy?.$Bus.off('on-click',fn)

// 一次监听多个事件
// instance?.proxy?.$Bus.on('*', (eventName, prams) => {
//   console.log(eventName, prams)
// })
// 关闭所有的事件
// instance?.proxy?.$Bus.all.clear()

// 单独引入使用
import {$Bus} from '../../utils/Mitt'
$Bus.on('on-click', (params:any) => {
  console.log(params)
})
</script>

<style lang="less" scoped>

</style>