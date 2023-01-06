<template>
  <div class="app">
    <el-button type="primary" @click="add">Add</el-button>
    <el-button type="primary" @click="del">Del</el-button>
    <div class="wraps">
      <transition-group
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__hinge"
      >
        <div class="wrap_item" v-for="num in list" :key="num">
          {{ num }}
        </div>
      </transition-group>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const list = reactive<number[]>([1,2,3,4,5])
const add = () => {
  list.push(list.length+1)
}
const del = () => {
  list.pop()
}
</script>

<style lang="less" scoped>
body {
  background-color: #fce5cd;
}
.app {
  padding: 30px;
  font-size: 26px;
  color: #351c75;
  font-weight: 600;
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;
  margin-top: 30px;
  .wrap_item {
    margin: 10px;
  }
}
</style>