import { createApp, toRaw } from 'vue'
// toRaw 转为原始对象
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
import { createPinia, PiniaPluginContext } from 'pinia'
// pinia持久化
type Options = {
  key?: string
}

const __piniaKey__:string = 'xiaoman'

const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })
    // 注意这里先获取data 或者 在监听之后获取data没有影响
    // 因为当修改数据时 store中对页面中的数据进行了修改 此时不会使用这个data  只有当页面刷新的时候才会使用这里data
    return data
  }
}

const store = createPinia()
store.use(piniaPlugin({
  key: 'pinia'
}))

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
