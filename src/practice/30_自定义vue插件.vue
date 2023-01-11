<template>
  <div class="app">
    <loading></loading>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import Loading from '../components/Loading/index.vue'

const instance = getCurrentInstance()
instance?.proxy?.$Loading.show()
</script>

<style lang="less" scoped>

</style>