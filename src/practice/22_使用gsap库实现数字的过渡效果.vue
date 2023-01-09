<template>
  <div class="app">
    <el-input-number controls-position="right" v-model="obj.num"></el-input-number>
    <div>{{ obj.tweenedNumber.toFixed(0) }}</div>
  </div>
</template>

<script setup lang="ts">
// 状态过渡
import { reactive, watch } from 'vue'
import gsap from 'gsap'

const obj = reactive({
  num: 0,
  tweenedNumber: 0
})

watch(() => obj.num, (newValue, oldValue) => {
  gsap.to(obj, {
    duration: 2,
    tweenedNumber: newValue
  })
})

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