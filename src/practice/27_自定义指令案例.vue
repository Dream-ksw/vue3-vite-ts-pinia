<template>
  <div class="app">
    <div v-move ref="dialogEl" class="dialog">
      <!-- @mousedown="mouseDown" -->
      <div class="header">头部</div>
      <div class="content">内容</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 不使用指令
// import { ref } from 'vue'
// const dialogEl = ref()
// const mouseDown = (e:MouseEvent) => {
//   const X = e.clientX - dialogEl.value.offsetLeft
//   const Y = e.clientY - dialogEl.value.offsetTop
//   const move = (e:MouseEvent) => {
//     dialogEl.value.style.left = e.clientX - X + 'px'
//     dialogEl.value.style.top = e.clientY - Y + 'px'
//   }
//   document.addEventListener('mousemove', move)
//   // 鼠标抬起移出事件
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move)
//   })
// }

// 使用指令方式
// import { ref, Directive, DirectiveBinding } from 'vue'
// Directive 指令类型可以传递两个泛型  第一个是el的类型  第二个是binding中value 等值的类型
/**
 * 1.先定义一个指令
 * 2.获取指令所在的DOM
 * 3.给DOM绑定鼠标按下事件 根据事件对象获取当前鼠标在盒子中的距离
 * 4.给document绑定鼠标移动事件, 然后给DOM赋值当前事件对象距离屏幕的距离 注意减去盒子的宽度和高度
 * 5.给document绑定鼠标抬起事件, 移出document的鼠标移动事件
 */
// const vMove:Directive = (el:HTMLElement, binding:DirectiveBinding) => {
//   const moveElement:HTMLDivElement = el.firstElementChild as HTMLDivElement
//   moveElement.addEventListener('mousedown', (e: MouseEvent) => {
//     const X = e.clientX - el.offsetLeft
//     const Y = e.clientY - el.offsetTop
//     const move = (e: MouseEvent) => {
//       el.style.left = e.clientX - X + 'px'
//       el.style.top = e.clientY - Y + 'px'
//     }
//     document.addEventListener('mousemove', move)
//     document.addEventListener('mouseup', (e: MouseEvent) => {
//       document.removeEventListener('mousemove', move)
//     })
//   })
// }


import { Directive, DirectiveBinding } from 'vue'

const vMove:Directive = (el:HTMLElement, binding: DirectiveBinding) => {
  const headerEl:HTMLDivElement = el.firstElementChild as HTMLDivElement
  headerEl.addEventListener('mousedown', (e:MouseEvent) => {
    const X = e.clientX - el.offsetLeft
    const Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  })
}
</script>

<style lang="less" scoped>
.app {
  // padding: 20px;
  .dialog {
    border: 1px solid #ccc;
    width: 280px;
    position: relative;
    top: 0;
    left: 0;
    .header {
      width: 280px;
      height: 50px;
      line-height: 50px;
      color: purple;
      box-sizing: border-box;
      padding-left: 14px;
      border: 1px solid #ccc;
      background-color: #eee;
    }
    .content {
      box-sizing: border-box;
      width: 280px;
      height: 200px;
      color: purple;
      padding: 14px;
      border: 1px solid #ccc;
    }
  }
}
</style>