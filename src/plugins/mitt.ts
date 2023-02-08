// (1)全局引入mitt 兄弟间组件传值
import { App } from 'vue'
import mitt from 'mitt'
const Mit = mitt()

// ts声明文件
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$Bus = Mit
  }
}