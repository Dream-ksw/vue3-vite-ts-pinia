<template>
  <div class="app">
    <!-- 
      1.
      直接在A组件中给.a类选择器声明样式是不生效的 因为vue认为div是app组件 
      如果在A组件声明需要使用插槽选择器 
    -->
    <!-- <A>
      <div class="a">
        私人订制DIV
      </div>
    </A> -->

    <!-- 3.在样式中使用v-bind()函数直接绑定响应式变量 样式会根据变量的值的改变而改变 -->
    <!-- <div class="box">
      动态css
    </div> -->

    <!-- 4.css module -->
    <!-- 默认名称 -->
    <!-- <div :class="[$style.div, $style.border]">
      css module
    </div> -->
    <!-- 命名module -->
    <div :class="[zs.div, zs.border]">
      css module
    </div>
  </div>
</template>

<script setup lang="ts">
// 1.
// import A from './components/CSS特性/A.vue'

// 3. (1)可以是一个字符串 (2)也可以写成一个对象
// import { ref } from 'vue'
// const boxColor = ref('green')
// const boxColor = ref({
//   color: 'red'
// })

// 4.使用 vue 提供的 useCssModule 方法可以获取到类名
import { useCssModule } from 'vue'
const css = useCssModule('zs') // 如果样式标签中只写了module 那么可以不传值; 如果有名字需要传值
console.log(css)

</script>

<!-- 2.全局选择器 -->
<!-- (1)写法一 -->
<!-- <style lang="less">
</style> -->

<!-- (2)写法二 相当于没有scoped -->
<!-- <style lang="less" scoped>
:global(div) {
  color: red;
}
</style> -->

<!-- 3.在样式中使用v-bind函数实现 动态css -->
<!-- <style lang="less" scoped>
.box {
  // (1)如果是字符串可以直接使用
  color: v-bind(boxColor);
  // (2)如果响应式数据是一个对象需要加引号
  color: v-bind('boxColor.color');
}
</style> -->

<!-- 4.css module 默认名称  使用: $style -->
<!-- <style module>
.div {
  color: red;
}
.border {
  border: 1px solid #ccc;
}
</style> -->

<!-- 4. css module 使用名称 -->
<style module="zs">
.div {
  color: red;
}
.border {
  border: 1px solid #ccc;
}
</style>