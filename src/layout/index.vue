<template>
  <div id="layout">
    <div class="menu">
      <menu-cpn></menu-cpn>
    </div>
    <div class="layout-right">
      <header-cpn></header-cpn>
      <content-cpn></content-cpn>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuCpn from './Menu/index.vue'
import HeaderCpn from './Header/index.vue'
import ContentCpn from './Content/index.vue'
</script>

<style lang="less" scoped>
#layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  .menu {
    width: 200px;
    border: 1px solid #ccc;
  }
  .layout-right {
    width: 100%;
  }
}
</style>