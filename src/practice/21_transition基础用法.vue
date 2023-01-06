<template>
  <el-button type="primary" @click="show = !show">Toggle</el-button>
  <transition name="fade">
    <p style="margin: 20px;" v-if="show">Hello World</p>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<style lang="less">
.fade-enter-active {
  transition: all 0.5s ease-out;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>