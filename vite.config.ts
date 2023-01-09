import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 解析jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入vue3 API
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), AutoImport({
    imports: ['vue'],
    dts: 'src/auto-import.d.ts'
  })]
})
