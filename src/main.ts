import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.less'
import Card from './components/Card/Card.vue'

const app = createApp(App)
// 全局组件
app.component('Card', Card)
app.mount('#app')
