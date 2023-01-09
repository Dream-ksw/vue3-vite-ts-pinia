<template>
  <div class="app">
    <!-- <input v-focus /> -->
    <button v-has-show="'shop:edit'">创建</button>
    <button v-has-show="'shop:create'">编辑</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang="ts">
import { Directive } from 'vue'

// 普通方式 对象
// const vFocus:Directive = {
//   mounted: (el) => {
//     console.log(el.focus);
//     el.focus()
//   }
// }
localStorage.setItem('userID', '000')
const permission = [
  '000:shop:edit',
  '000:shop:create',
  '000:shop:delete',
]
const userId = localStorage.getItem('userID')
// 简写方式 函数 按钮鉴权
const vHasShow:Directive<HTMLElement, string> = (el, binding) => {
  if (!permission.includes(userId + ':' + binding.value)) {
    el.style.display = 'none'
  }
}

</script>

<style lang="less" scoped>
.app {
  padding: 20px;
}
</style>