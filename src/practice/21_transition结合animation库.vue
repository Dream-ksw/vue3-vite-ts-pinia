<template>
  <el-button type="primary" @click="show = !show">Toggle</el-button>
  <!-- duration 约束动画时长 -->
  <transition
    :duration="{enter: 1000, leave: 1000}" 
    leave-active-class="animate__animated animate__backOutDown" 
    enter-active-class="animate__animated animate__backInDown"
  >
    <div class="box" v-if="show">Animate.css</div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<style lang="less">
body {
  background-color: #fce5cd;
}
.el-button {
  position: fixed;
  top: 0;
  right: 0;
}
.box {
  width: 100px;
  height: 100px;
  margin: 200px auto;
  font-size: 40px;
  font-weight: 700;
  color: #351c75;
}
</style>