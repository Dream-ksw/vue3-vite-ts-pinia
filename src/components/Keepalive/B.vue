<template>
  <div class="a_cpn">
    <h2>我是B组件</h2>
    <el-transfer v-model="value" :data="data"></el-transfer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Option {
  key: number,
  label: string,
  disabled: boolean
}

const generateData = () => {
  const data:Option[] = []
  for(let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 == 0
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>

<style lang="less" scoped>
.a_cpn {
  box-shadow: 0 0 3px #ccc;
  padding: 20px;
  h2 {
    margin-left: 14px;
    margin-bottom: 30px;
  }
}
</style>