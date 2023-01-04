<template>
  <div class="tree" @click.stop="clickTap($event, item)" v-for="item in treeList" :key="item.name">
    <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
    <!-- 组件本身可以直接使用组件 -->
    <Tree v-if="item.children?.length" :tree-list="item.children" />
  </div>
</template>

<script setup lang="ts">
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
const props = defineProps<{
  treeList?: Tree[]
}>()

const clickTap = (e: MouseEvent, item:Tree) => {
  console.log(e, item)
}
</script>

<style lang="less" scoped>
.tree {
  margin-left: 10px;
}
</style>