<template>
  <div class="app">
    <Dialog>
      <!-- 作用域插槽 -->
      <!-- <template #header>
        头部插槽
      </template>
      <template #default="scoped">
        内容插槽
        <p v-for="item in scoped.data" :key="item.age">
        {{ item.name }}-{{ item.age }}
        </p>
      </template>
      <template #footer>
        底部插槽
      </template> -->

      <!-- 动态插槽 -->
      <template #[name]>
        <div>我在哪儿</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef } from 'vue'
import Dialog from '../components/Dialog/index.vue'
const name = ref('footer')
</script>

<style lang="less">

</style>