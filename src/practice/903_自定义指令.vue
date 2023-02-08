<template>
  <div class="app">
    <!-- <input v-focus.a="123" type="text"> -->
    <div v-format-time="'YYYY/MM/DD'">{{ timeStamp }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue'
// const vFocus: Directive = {
//   mounted: (el: HTMLElement, binding: DirectiveBinding) => {
//     el.focus()
//   }
// }
// 简化方式
// const vFocus:Directive = (el:HTMLElement, binding: DirectiveBinding) => {
//   el.focus()
// }
const timeStamp = ref('1675827143076')
</script>

<style scoped>
.app {
  padding: 10px;
}
</style>