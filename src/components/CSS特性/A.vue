<template>
  <div>
    我是插槽
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 当使用正常的类名添加样式时是不生效的 需要使用插槽选择器 */
/* :slotted(.a) {
  color: red;
} */
</style>