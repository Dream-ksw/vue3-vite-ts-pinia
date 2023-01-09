import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.less'
import Card from './components/Card/Card.vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入动画
import 'animate.css'
// 全局引入mitt 兄弟间组件传值
// import mitt from 'mitt'
// const Mit = mitt()
// ts声明文件
// declare module 'vue' {
//   export interface ComponentCustomProperties {
//     $Bus: typeof Mit
//   }
// }

const app = createApp(App)
// 全局组件
app.component('Card', Card)
app.use(ElementPlus)
// app.config.globalProperties.$Bus = Mit
app.mount('#app')
