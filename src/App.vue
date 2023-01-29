<template>
  <div>
    <div>
      <!-- pinia: {{ Test.current }}---{{ Test.name }} -->
      <!-- <hr> -->
      <!-- pinia解构: {{ current }}---{{ name }} -->
      <!-- <hr> -->
      actions-user: {{ Test.user }}
      <hr>
      <!-- getters: {{ Test.newName }} -->
      <!-- <hr> -->
      stateName: {{ Test.name }}
      <hr>
    </div>
    <div>
      change: <el-button @click="change">change</el-button>
      <br>
      reset: <el-button @click="reset">reset</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from './store'
import { storeToRefs } from 'pinia'

const Test = useTestStore()
// 修改store中的state数据 方式
// 1. 直接进行修改 Test.current++
// 2. 通过$patch()对象方式进行单个属性或者批量修改 Test.$patch({ current: 1000,name: 'coder' })
// 3. 通过$patch()函数方式进行单个属性或者批量修改 Test.$patch((state) => { state.current = 60 state.name = 'nba })
// 4. 通过实例上的$state修改整个(必须修改全部属性)state Test.$state = { current: 123, name: 'cba' }
// 5. 通过在action中定义方法 调用去修改 Test.setCurrent(789)

// 解构store 解构不具有响应式 需要借助storeToRefs
// const { current,name } = storeToRefs(Test)
// const change = () => {
//   // Test.current++
//   // current.value++
// }

// actions 
const change = () => {
  Test.setUser()
}

// pinia中的 API
const reset = () => {
  // 重置state中的值
  Test.$reset()
}

</script>

<style scoped>

</style>