<template>
  <div>
    {{ cusRefMsg }}
  </div>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
// isRef 判断是否是ref对象
// shallowRef 浅层更新  只会更新到数据层  不会到达视图层
// triggerRef 强制更新  主动触发更新
// ref = shallowRef + triggerRef

// customRef 用户自己定义ref
// 可以对数据进行劫持
function MyRef<T>(value: T){
  let timer:any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('触发了')
          timer = null
          value = newValue
          trigger()
        }, 500)
      }
    }
  })
}

const cusRefMsg = MyRef<string>('customRef: coder')
const change = () => {
  cusRefMsg.value = 'customRef: 修改了'
}
</script>

<style lang="scss" scoped>

</style>