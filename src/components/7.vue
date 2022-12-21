<template>
  <div>
    <form>
      <input v-model="form.name" type="text">
      <br>
      <input v-model="form.age" type="text">
      <br>
      <button @click.prevent="submit">submit</button>
    </form>
  </div>
  <div>
    <button @click="add">add</button>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, readonly, shallowReactive } from 'vue'
// readonly 只读
// shallowReactive 浅层
/**
 * 值类型的不同
 * ref 支持所有类型
 * reactive 支持引用类型 Array Object Map Set
 * 
 * 取值不同
 * ref 通过.value取值
 * reactive 直接取值
 * 
 * reactive 不能直接赋值,否则会破坏响应式对象
 * 解决方法: 可以使用 push(...解构)  还可以写成对象+数组的形式{arr:[]}
 */
const form = reactive({
  name: 'coder',
  age: 18
})
const submit = () => {
  console.log(form)
}

const list = reactive<string[]>([])
const add = () => {
  list.push('coder')
}

</script>

<style lang="scss" scoped>

</style>