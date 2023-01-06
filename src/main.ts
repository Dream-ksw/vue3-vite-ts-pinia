import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.less'
import Card from './components/Card/Card.vue'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入动画
import 'animate.css'

const app = createApp(App)
// 全局组件
app.component('Card', Card)
app.use(ElementPlus)
app.mount('#app')
