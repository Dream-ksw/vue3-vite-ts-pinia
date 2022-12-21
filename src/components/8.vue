<template>
  <div>
    <button @click="see">使用toRefs解构</button>
    <button @click="toggleOrigin">使用toRaw转换为原始对象</button>
  </div>
</template>

<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue'
// toRefs 解构响应式对象的使用 解构之后仍然是响应式
// 将响应式对象变成原始对象
const people = reactive({ name: 'coder', age: 18, like: '星际穿越' })
const see =() => {
  const { name, age, like } = people
  // const { name, age, like } = toRefs(people)
  console.log(name, age, like)
}

const toggleOrigin = () => {
  console.log(toRaw(people))
}

</script>

<style lang="scss" scoped>

</style>