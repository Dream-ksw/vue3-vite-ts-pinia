<template>
  <div class="app">
    <el-input class="ipt"></el-input>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.app {
  .ipt {
    width: 300px;
    // .el-input__inner 类其实给后面添加了一个 data-v-... 属性 所以不生效
    :deep(.el-input__inner) {
      background-color: purple;
    }
  }
}
</style>