<template>
  <div class="app">
    <Suspense>
      <template #default>
        <Sync></Sync>
      </template>
      <template #fallback>
        <skeleton></skeleton>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'
import Skeleton from './Example/skeleton.vue'
const Sync = defineAsyncComponent(() => import('./Example/sync.vue'))

// 使用 defineAsyncComponent () => import() 这种引入方式打包的时候会进行分包处理
</script>

<style lang="less">

</style>