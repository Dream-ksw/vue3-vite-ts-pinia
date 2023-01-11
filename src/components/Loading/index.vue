<template>
  <div v-if="isShow" class="loading">
    Loading...
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const isShow = ref<boolean>(false)
const show = () => isShow.value = true
const hide = () => isShow.value = false

defineExpose({
  show,
  hide,
  isShow
})
</script>

<style scoped>
.loading {
  background: #000;
  opacity: 0.2;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
}
</style>