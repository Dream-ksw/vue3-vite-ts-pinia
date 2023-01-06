<template>
  <div class="btn">
    <el-button type="primary" @click="toggleCpn">Toggle Component</el-button>
  </div>
  <div class="app">
    <!-- props  
      include 匹配的组件会被缓存 
      exclude 匹配的组件不会被缓存
      max 最多可以缓存多少组件实例
    -->
    <keep-alive :include="['A']">
      <component :is="currentCpn"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef} from 'vue'
import A from '../components/Keepalive/A.vue'
import B from '../components/Keepalive/B.vue'

const currentCpn = shallowRef(A)

const toggleCpn = () => {
  currentCpn.value.__name === 'A' ? currentCpn.value = B : currentCpn.value = A
}
</script>

<style lang="less">
.btn {
  margin: 20px 0 0 20px;
}
.app {
  padding: 20px 20px;
}
</style>