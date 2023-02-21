<template>
  <div class="app">
    <div class="btn">
      <el-button type="primary" @click="random">Random</el-button>
    </div>
    <div class="num"> 
      <transition-group move-class="move_class" class="wraps" tag="div">
        <div v-for="item in list" :key="item.id" class="item">{{ item.number }}</div>
      </transition-group>
    </div>
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
  .btn {
    text-align: right
  }
  .num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10  + 30px);
  .item {
    width: 25px;
    height: 25px;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
  }
}
.move_class {
  transition: all 1s;
}
</style>