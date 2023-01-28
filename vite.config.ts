import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 解析jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入vue3 API
import AutoImport from 'unplugin-auto-import/vite'
// 引入unocss
import unoCss from 'unocss/vite'
// 引入unocss预设
import { presetIcons,presetAttributify,presetUno } from 'unocss'

// console.log(loadEnv(process.env));

// https://vitejs.dev/config/
export default ({mode}) => {
  // 获取环境变量
  // console.log(loadEnv(mode,process.cwd()));
  
  return defineConfig({
    plugins: [vue({
      // 使用vue3新特性
      reactivityTransform: true
    }), vueJsx(), unoCss({
      // presetIcons 预设icon 需要去官网先安装对应的图标库 然后使用 https://icones.js.org/collection/ic
      // presetAttributify 美化属性 class="red" 可以直接写成red
      // presetUno 是一系列流行的原子化框架的 通用超集，包括了 Tailwind CSS，Windi CSS，Bootstrap，Tachyons 等
      presets: [presetIcons(), presetAttributify(), presetUno()],
      rules: [
        // 静态类名
        ['red', { color: 'red' }],
        // 动态类名
        [/^m-(\d+)$/, ([, d]) => ({margin: `${Number(d) * 10}px`})]
        // 组合类名
      ]
    }), AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    })],
  })
}
