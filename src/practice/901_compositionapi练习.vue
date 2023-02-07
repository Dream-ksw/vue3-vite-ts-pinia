<template>
  <div>
    <!-- {{ people.name }}
    <button @click="change">修改</button> -->

    <!-- {{ name }} - {{ age }}
    <div>
      <button @click="changeName">修改name</button>
      <button @click="changeAge">修改age</button>
    </div> -->

    <!-- <h2 ref="h2El">123</h2> -->

    <!-- {{ info.name }}
    <button @click="info.name = 'abc'">修改</button> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, toRef, shallowRef, triggerRef, watchEffect, watch, readonly } from 'vue'

// reactive 返回一个对象的响应式代理
// const people = reactive<{name: string, age: number}>({
//   name: 'why',
//   age: 18
// })

// toRefs: 将reactive对象中所有属性全部转换为ref对象
// toRef: 将reactive对象中某个属性转换为ref对象
// let {name, age} = toRefs(people)
// let age = toRef(people, 'age')

// shallowRef 浅层ref 深层的数据不具有响应式  使用triggerRef()触发视图更新
// const people = ref({name: 'k'})
// const people = shallowRef({name: 'k'})
// const change = () => {
//   people.value.name = 'kkk'
//   triggerRef(people)
// }

// const name = ref('coder')
// const age = ref(15)
// const changeName = () => name.value = 'coderwhy'
// const changeAge = () => age.value++

// watchEffect组件创建会立即执行一次 收集函数中用到的可响应式数据 并添加到依赖中  只要依赖发生变化watchEffect就会执行
// watchEffect((onCleanup) => {
//   let timer:any = null
//   timer = setTimeout(() => {
//     console.log('网络请求成功')
//   }, 1000);
//   onCleanup(() => {
//     // 清除上一次的请求
//     clearTimeout(timer)
//   })
//   console.log(age.value);
// })

// const h2El = ref(null)
// onMounted(() => {
//   console.log(h2El.value)
// })
// watchEffect(() => {
//   console.log(h2El.value);
// },{
//   flush: 'post',
//   // pre 元素挂载或者更新之前执行
//   // post 使侦听器延迟到组件渲染之后再执行
//   // sync  强制效果始终同步触发
// }
// )

// const info = reactive({name: 'coder', age: 18})
// watch(info, (newValue, oldValue) => {
//   console.log(newValue, oldValue)  // proxy对象
// })
// watch(() => ({...info}), (newValue, oldValue) => {
//   console.log(newValue, oldValue) // 普通对象
// })
// const name = ref('coder')
// watch(name, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })
// watch(() => {}, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })


</script>

<style scoped>

</style>