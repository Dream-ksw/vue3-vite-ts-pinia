<template>
  <div>
    <input id="ipt" type="text" v-model="message">
    <input type="text" v-model="message2">
    <button @click="stop">Stop Watch</button>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
let message = ref<string>('nba')
let message2 = ref<string>('cba')
const stop = watchEffect((oninvalidate) => {
  // oninvalidate 监听之前的回调函数
  // oninvalidate(() => {
  //   console.log('before')
  // })
  console.log('message==>', message.value)
  // console.log('message==>', message2.value)
  // let ipt:HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
  // console.log('el:', ipt)
},
{
  flush: 'post',
  // 调试
  // onTrigger(e) {
  //   debugger
  // }
})
</script>

<style scoped>
</style>