<template>
  <el-button type="primary" @click="show = !show">Toggle</el-button>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div v-if="show" class="box"></div>
    <!-- Animate.css -->
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
const show = ref<boolean>(true)
const onBeforeEnter = (el:Element) => {
  gsap.set(el, {
    width: 0,
    height: 0
  })
}
const onEnter = (el:Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}
const onLeave = (el:Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
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
  background-color: skyblue;
}
</style>