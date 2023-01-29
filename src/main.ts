import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.less'
import Card from './components/Card/Card.vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入动画
import 'animate.css'
// 引入unocss 设置全局css类名
import 'uno.css'

// 引入pinia
import { createPinia } from 'pinia'

const store = createPinia()

// (1)全局引入mitt 兄弟间组件传值
// import mitt from 'mitt'
// const Mit = mitt()
// ts声明文件
// declare module 'vue' {
//   export interface ComponentCustomProperties {
//     $Bus: typeof Mit
//   }
// }

// 注册loading插件
import Loading from './components/Loading/index'

const app = createApp(App)

// (2)定义全局变量
// type Filters = {
//   format<T>(params:T): string
// }
// 全局变量和函数的声明文件
// declare module 'vue' {
//   export interface ComponentCustomProperties {
//     $env: string,
//     $filters: Filters
//   }
// }
// app.config.globalProperties.$env = 'dev'
// app.config.globalProperties.$filters = {
//   format<T>(params: T): string {
//     return `coder-${params}`
//   }
// }

app.use(Loading)
type Loading = {
  show: () => void,
  hide: () => void
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Loading: Loading
  }
}

// 全局组件
app.component('Card', Card)
app.use(ElementPlus)
app.use(store)
// app.config.globalProperties.$Bus = Mit
app.mount('#app')
