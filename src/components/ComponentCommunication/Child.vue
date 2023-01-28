<template>
  <div>
    child - {{ props.name}} - {{ props.arr }}
    <hr>
    <button @click="updateList">给父组件传值</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'
// 1.接收父组件传值 defineProps 不使用ts的方式
// (1)defineProps 是一个方法 他返回父组件传递过来的所有值
// (2)defineProps 接收一个对象,对象中可以定义值的类型 默认值以及是否必传
// const props = defineProps({
//   name: {
//     type: String,
//     default: 'null'
//   }
// })
// console.log(props)

// 2.不在defineProps定义类型和默认值
// (1)使用ts的方式定义类型  
// defineProps 接收一个泛型
const props = defineProps<{
  name: string,
  arr: number[]
}>()
// (2)使用ts定义父组件传来的默认值
// 需要借助一个函数withDefaults 这个函数只在ts中可以使用
// withDefaults 第二个参数是给传递过来的数据添加默认值的
// const props = withDefaults(defineProps<{
//   name: string,
//   arr: number[]
// }>(), {
//   arr: () => [123]
// })


// 给父组件传值
const emit = defineEmits(['updateList'])
const updateList = () => {
  emit('updateList', [1, 2, 3, 4, 5, 6])
}

// 暴露给父组件一些变量或者方法
defineExpose({
  name: 'exposeName',
  run: () => {
    console.log('exposeRunning')
  }
})
</script>

<style lang="scss" scoped>

</style>