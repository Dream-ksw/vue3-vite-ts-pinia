<template>
  <div>
    <!-- <input type="text" v-model="message.foo.bar.name"> -->
    <!-- <input type="text" v-model="message">
    <input type="text" v-model="message2"> -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
// 监听一个简单数据类型
// let message = ref<string>('coder')
// let message2 = ref<string>('nba')
// watch(message, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })

// 监听多个数据 newVal oldVal 是两个数组
// watch([message, message2], (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })

// 监听复杂数据类型, reactive默认开启deep:true  immediate: true 打开页面就执行一次
// 旧值和新值是一样的
// let message = ref({
//   foo: {
//     bar: {
//       name: 'coder',
//       age: 18
//     }
//   }
// })
// watch(message, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// }, {
//   deep: true,
//   immediate: true
// })
// let message = reactive({
//   foo: {
//     bar: {
//       name: 'coder',
//       age: 18
//     }
//   }
// })
// watch(message, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// }, {
//   // deep: true, // 这里可以不用开启
//   immediate: true
// })

// 只监听对象中的一个属性
// let message = ref({
//   foo: {
//     bar: {
//       name: 'coder',
//       age: 18
//     }
//   }
// })
// watch(() => message.value.foo.bar.name, (newVal, oldVal) => {
//   console.log(newVal, oldVal) 
// })

// 第三个参数
// watch('源' ref|function, () => {

// }, {
//   flush: 'pre' // pre 组件更新之前  sync 同步执行  post 组件更新之后
// })
</script>

<style scoped>
</style>