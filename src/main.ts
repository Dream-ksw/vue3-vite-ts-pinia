import { createApp, toRaw, DirectiveBinding } from 'vue'
import App from './App.vue'
import './assets/base.less'
// 注册loading插件
// import Loading from './components/Loading/index'
import Card from './components/Card/Card.vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入动画
import 'animate.css'
// 引入unocss 设置全局css类名
import 'uno.css'
// 注册自定义指令
import registerDirectives from './directives/index'
// 注册全局插件mitt
import mitt from './plugins/mitt'
// 引入pinia
import { createPinia } from 'pinia'
import { piniaPlugin } from './store/persistence'

const store = createPinia()
// pinia持久化
store.use(piniaPlugin({
  key: 'pinia'
}))

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


// type Loading = {
//   show: () => void,
//   hide: () => void
// }
// declare module 'vue' {
//   export interface ComponentCustomProperties {
//     $Loading: Loading
//   }
// }
// app.use(Loading)

registerDirectives(app)

// 全局组件
app.component('Card', Card)
app.use(ElementPlus)
app.use(store)
app.use(mitt)
app.mount('#app')
