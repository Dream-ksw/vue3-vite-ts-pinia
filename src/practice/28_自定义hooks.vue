<template>
  <div class="app">
    <img id="img" width="300" height="300" src="./assets/img/test.png">
  </div>
</template>

<script setup lang="ts">
import { useBase64 } from '../Hooks/index'
useBase64({el: '#img'}).then(res => {
  console.log(res.baseUrl)
})

</script>

<style lang="less" scoped>

</style>