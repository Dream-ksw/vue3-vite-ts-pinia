<template>
  <div class="dialog">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot :data="data"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
type people = {
  name: string,
  age: number
}
const data = reactive<people[]>(
  [
    {
      name: 'coder',
      age: 18
    },
    {
      name: 'coder',
      age: 19
    },
    {
      name: 'coder',
      age: 20
    }
  ]
)
</script>

<style lang="less" scoped>
.dialog {
  width: 500px;
  margin: 10px auto;
}
.header {
  height: 100px;
  background: #ccc;
  color: #fff;
}
.main {
  height: 300px;
  background: #acabab;
  color: #fff;
}
.footer {
  height: 100px;
  background: #868585;
  color: #fff;
}
</style>