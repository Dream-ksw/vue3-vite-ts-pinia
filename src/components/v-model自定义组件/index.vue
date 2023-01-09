<template>
  <div class="mode" v-show="modelValue">
    <div class="closeBtn">
      <el-button type="primary" @click="close">关闭</el-button>
    </div>
    <div>
      dialog内容
      <input :value="textValue" @input="updateText" />
      <!-- 存疑 -->
      <!-- <el-input :value="textValue" @input.capture="updateText" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, nextTick } from 'vue'
defineProps({
  modelValue: {
    type: Boolean
  },
  textValue: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue', 'update:textValue'])
const close = () => {
  emit('update:modelValue', false)
}
const updateText = (e:Event) => {
  
  nextTick(() => {
    const target = e.target as HTMLInputElement
  emit('update:textValue', target.value)
  })
}
</script>

<style lang="less">

</style>
<style scoped lang="less">
.mode {
  width: 600px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  padding: 16px;
  .closeBtn {
    text-align: right;
  }
}
</style>