<template>
  <div>
    <component-a></component-a>
    <component-a></component-a>
    <component-a></component-a>
    <div ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
// 不需要注册 引入即可使用
import ComponentA from './cpn/ComponentA.vue'

const divRef = ref<HTMLDivElement>()

// beforeCreate created  setup语法糖模式没有这两个生命周期  setup代替
console.log('setup')

onBeforeMount(() => {
  console.log('DOM创建之前', divRef.value)
})
onMounted(() => {
  console.log('DOM创建完成', divRef.value)
})

onBeforeUpdate(() => {
  console.log('数据更新之前')
})
onUpdated(() => {
  console.log('数据更新完成')
})

onBeforeUnmount(() => {
  console.log('组件销毁之前')
})
onUnmounted(() => {
  console.log('组件销毁完成')
})

</script>

<style scoped>
</style>