<template>
  <div :class="cls">{{ message }}</div>
  <div :style="style">{{ message.split('').reverse().join('') }}</div>
  <div>{{ flag ? '我是真的' : '我是假的' }}</div>
  <div>{{ flag + 1 }}</div>
  <div v-html="message2"></div>
  <div v-for="item in Arr">
    {{ item.name }}
  </div>

  <input type="text" v-model="ipt">
  <div>{{ ipt }}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const message:string = 'coder'
  const flag: number = 1
  const message2:string = '<a href="https://www.baidu.com">百度一下<a>' 

  /**
   * v-if  v-else-if v-else
   * v-on @  修饰符 .stop .prevent
   * v-bind :
   */

  type Cls = {
    c: boolean,
    fs: boolean
  }
  const cls:Cls = {
    c: true,
    fs: true
  }

  type Style = {
    height: string,
    color: string
  }
  const style: Style = {
    height: '300px',
    color: 'red'
  }

  type obj = {
    name: number
  }

  const Arr: obj[] = [{name: 1}, {name: 2}, {name: 3}]
  
  
  const ipt = ref('text')
</script>

<style scoped>
.c {
  color: blue;
}
.fs {
  font-size: 20px;
}
</style>
