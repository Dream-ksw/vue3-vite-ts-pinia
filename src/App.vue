<template>
  <div class="app">
    <el-input type="primary" v-model="message"></el-input>
    <div ref="div">{{ message }}</div>
    <el-button @click="change">change</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
const message = ref<string>('coder')
const div = ref<HTMLElement>()

const change = async () => {
  message.value = 'coder why'
  console.log(div.value?.innerText)
  await nextTick()
  console.log(div.value?.innerText)
}
</script>

<style lang="less" scoped>

</style>