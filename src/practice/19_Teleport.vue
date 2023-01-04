<template>
  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModal />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyModal from '../components/MyModal/index.vue'
</script>

<style lang="less">
// .outer {
//   transform: translateX(50%);
// }
</style>