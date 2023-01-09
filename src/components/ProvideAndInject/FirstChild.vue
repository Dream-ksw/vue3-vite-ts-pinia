<template>
  <div>
    <h2>FirstChild</h2>
    {{ people }}
    <hr>
    <first-child-child></first-child-child>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import FirstChildChild from './FirstChildChild.vue'

const people = inject('people')
</script>

<style lang="less" scoped>

</style>