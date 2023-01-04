<template>
  parent - {{arr}}
  <hr>
  <child ref="childRef" :name="name" :arr="arr" @update-list="updateList"></child>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Child from '../components/ComponentCommunication/Child.vue'
let name = 'coder'
let arr = ref([1, 2, 3])

const updateList = (newArr: number[]) => {
  arr.value = newArr
}

const childRef = ref<InstanceType<typeof Child>>()
onMounted(() => {
  console.log(childRef.value?.name, childRef.value?.run)
})
</script>

<style lang="less">
</style>