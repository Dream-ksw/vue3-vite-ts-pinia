<template>
  <div class="app">
    <!-- <p>{{ $env }}</p>
    {{ $filters.format('why') }} -->
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
// console.log(instance?.proxy?.$env);
// console.log(instance?.proxy?.$filters.format('why'));

</script>

<style lang="less" scoped>

</style>