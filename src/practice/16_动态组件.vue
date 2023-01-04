<template>
  <div class="app">
    <div :class="currentIndex === index ? 'active' : ''" class="tab" @click="toggle(item, index)" v-for="(item, index) in data" :key="item.name" >
      {{ item.name }}
    </div>
    <component :is="currentCpn"></component>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef } from 'vue'
import CpnA from '../components/DynamicComponent/CpnA.vue'
import CpnB from '../components/DynamicComponent/CpnB.vue'
import CpnC from '../components/DynamicComponent/CpnC.vue'
// 知识补充
// 可选链操作符 好处:如果对象上第二层没有该属性,不会报错 而是返回undefined
interface people {
  name: string,
  age: number,
  children?: number[]
}
const obj: people = {
  name: 'a',
  age: 10
}
obj.children?.length  
// 双问号操作符
// 类似于 逻辑或
null ?? 123  // 123
undefined ?? 123 // 123
// 跟逻辑或的区别在于 不能处理 false 和 0, 如果左边是false和0会直接返回
0 ?? 123 // 0
false ?? 123 //false


// 对象中的组件使用markRaw 之后 会添加一个 __skip__ 属性跳过代理
// 定义变量可以使用shallowRef 只到value这一层
const currentIndex = ref(0)
const currentCpn = shallowRef(CpnA)
const toggle = (item: any, index: number) => {
  currentIndex.value = index
  currentCpn.value = item.cpn
}
const data = reactive([
  {
    name: 'CpnA',
    cpn: markRaw(CpnA)
  },
  {
    name: 'CpnB',
    cpn: markRaw(CpnB)
  },
  {
    name: 'CpnC',
    cpn: markRaw(CpnC)
  }
])

</script>

<style lang="less">
.app {
  .tab {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 10px;
    margin: 10px;
    cursor: pointer;
  }
  .active {
    background-color: skyblue;
  }
}
</style>