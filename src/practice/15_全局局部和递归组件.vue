<template>
  <!-- <card></card> -->
  <tree :treeList="treeList"></tree>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
// 局部组件
// import Card from './components/cpn/Card.vue'
// 递归组件
import Tree from '../components/Tree/Tree.vue'
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

const treeList: Tree[] = [
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false
      },
      {
        name: '1-2',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: false
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: true
          }
        ]
      },
      {
        name: '3-2',
        checked: false
      }
    ]
  },
]
</script>

<style lang="less">
</style>