<template>
  <div class="app">
    <div>{{ count }}</div>
    <button @click="add">+</button>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// const count = ref(0)
// const add = () => {
//   count.value++
// }

// vue新特性(项目中暂时不使用)
import { $ref } from 'vue/macros'
let count = $ref<number>(0)
const add = () => {
  count++
}
</script>

<style lang="less" scoped>
</style>