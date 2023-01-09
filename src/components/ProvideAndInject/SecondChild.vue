<template>
  <div>
    <h2>SecondChild</h2>
    {{ people }}
    <hr>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const people = inject('people')
</script>

<style lang="less" scoped>

</style>