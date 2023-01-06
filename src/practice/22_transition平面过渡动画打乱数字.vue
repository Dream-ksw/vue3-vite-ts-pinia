<template>
  <div class="app">
    <el-button style="margin-bottom: 20px" @click="random">random</el-button>
    <transition-group move-class="move_class" class="wraps" tag="div">
      <div  v-for="item in list" :key="item.id" class="item">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

interface obj {
  id: number,
  number: number
}

const list = ref<obj[]>([])

for(let i = 0; i <= 80; i++) {
  list.value.push({
    id: i,
    number: (i % 9) + 1
  })
}

const random = () => {
  list.value = _.shuffle(list.value)
}

</script>

<style lang="less" scoped>
body {
  background-color: #fce5cd;
  color: #351c75;
}
.app {
  padding: 20px;
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 - 7px);
  .item {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.move_class {
  transition: all 1s;
}
</style>