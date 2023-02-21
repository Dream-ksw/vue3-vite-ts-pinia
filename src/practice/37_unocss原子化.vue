<template>
  <!-- <div class="app red m-1"> -->
  <div class="app" red m="1">
    123
  </div>
  <div class="i-ic-baseline-10k"></div>
</template>

<script setup lang="ts">

// 使用方式
// 1.npm i -D unocss 下载安装包

// 2.在main.ts中引入 import 'uno.css'

// 3.配置
// vite.config.ts 
// 引入unocss
// import unoCss from 'unocss/vite'
// 引入unocss预设
// import { presetIcons,presetAttributify,presetUno } from 'unocss'
// 在plugins[]中使用
// unoCss({
//     // presetIcons 预设icon 需要去官网先安装对应的图标库 然后使用 https://icones.js.org/collection/ic
//     // presetAttributify 美化属性 class="red" 可以直接写成red
//     // presetUno 是一系列流行的原子化框架的 通用超集，包括了 Tailwind CSS，Windi CSS，Bootstrap，Tachyons 等
//     presets: [presetIcons(), presetAttributify(), presetUno()],
//     rules: [
//       // 静态类名
//       ['red', { color: 'red' }],
//       // 动态类名
//       [/^m-(\d+)$/, ([, d]) => ({margin: `${Number(d) * 10}px`})]
//       // 组合类名
//     ]
//   })


</script>

<style lang="less" scoped>

</style>