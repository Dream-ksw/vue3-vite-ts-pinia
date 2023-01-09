<template>
  <div class="app">
    <h3>我是父组件</h3>
    flag: {{ flag }}
    <br>
    inputvalue: {{ value }}
    <br>
    <el-button type="primary" size="small" @click="flag = !flag">开关</el-button>
    <el-divider></el-divider>
    <v-model-vue v-model="flag" v-model:textValue="value"></v-model-vue>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import VModelVue from '../components/v-model自定义组件/index.vue'
const flag = ref(true)
const value = ref('123')
</script>

<style lang="less" scoped>
.app {
  padding: 20px;
}
</style>