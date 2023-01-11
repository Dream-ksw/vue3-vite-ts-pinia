import { render, createVNode } from 'vue'
import type {App, VNode} from 'vue'
import Loading from './index.vue'
export default {
  install(app: App) {
    // 先将组件转换为虚拟节点
    const vnode:VNode = createVNode(Loading)
    // 使用render函数渲染节点
    render(vnode, document.body)
    // 全局挂载
    app.config.globalProperties.$Loading = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,
    }
  }
}