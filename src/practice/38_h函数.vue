<template>
  <div class="app">
    <Btn text="coder why" @on-click="getBtn"></Btn>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

type Props = {
  text:string
}

const Btn = (props: Props, ctx: any) => {
  return h('div', {
    class: ['btn'],
    onClick: () => {
      ctx.emit('on-click', '我是按钮')
    }
  },
  props.text
  )
}

const getBtn = (str: string) => {
  console.log(str)
}

</script>

<style lang="less" scoped>
.btn {
  background-color: green;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  border-radius: 10px;
}
</style>