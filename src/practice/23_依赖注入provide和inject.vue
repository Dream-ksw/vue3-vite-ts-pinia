<template>
  <div class="app">
    <first-child></first-child>
    <second-child></second-child>
  </div>
</template>

<script setup lang="ts">
// 依赖注入 provide 和 inject
import { reactive, provide, readonly } from 'vue'
import FirstChild from '../components/ProvideAndInject/FirstChild.vue'
import SecondChild from '../components/ProvideAndInject/SecondChild.vue'

type People = {
  name: string,
  age: number
}

const people = reactive<People>({
  name: 'coder',
  age: 18
})

// 允许子集组件修改数据
// provide('people', people)
// 不允许子集组件修改数据
provide('people', readonly(people))

</script>

<style lang="less" scoped>
body {
  background-color: #fce5cd;
  color: #351c75;
}
.app {
  padding: 20px;
}
</style>