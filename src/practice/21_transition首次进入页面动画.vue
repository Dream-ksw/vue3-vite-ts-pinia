<template>
  <el-button type="primary" @click="show = !show">Toggle</el-button>
  <!-- <transition 
    appear 
    appear-from-class="from"
    appear-to-class="to"
    appear-active-class="active"
  >
    <div v-if="show" class="box"></div>
  </transition> -->
  <transition 
    appear 
    appear-active-class="animate__animated animate__zoomInDown"
  >
    <div v-if="show" class="box">Animate.css</div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref<boolean>(true)
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
  width: 200px;
  height: 200px;
  margin: 200px auto;
  font-size: 40px;
  font-weight: 700;
  color: #351c75;
  // background-color: #351c75;
}
.from {
  width: 0;
  height: 0;
}
.to {
  width: 200px;
  height: 200px;
}
.active {
  transition: all 2s ease;
}
</style>