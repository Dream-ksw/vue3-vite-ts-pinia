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
// 引入分析打包后的代码体积
import { visualizer } from 'rollup-plugin-visualizer'
// pwa技术
import { VitePWA } from 'vite-plugin-pwa'

// console.log(loadEnv(process.env));

// https://vitejs.dev/config/
export default ({mode}) => {
  // 获取环境变量
  // console.log(loadEnv(mode,process.cwd()));
  
  return defineConfig({
    plugins: [
      vue({
        // 使用vue3新特性
        reactivityTransform: true
      }), 
      vueJsx(), 
      unoCss({
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
      }), 
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-import.d.ts'
      }),
      visualizer({
        open: true
      }),
      VitePWA({
        workbox:{
            cacheId:"XIaoman",//缓存名称
            runtimeCaching:[
              {
                urlPattern:/.*\.js.*/, //缓存文件
                handler:"StaleWhileRevalidate", //重新验证时失效
                options:{
                  cacheName:"XiaoMan-js", //缓存js，名称
                  expiration:{
                    maxEntries:30, //缓存文件数量 LRU算法
                    maxAgeSeconds:30 * 24 * 60 * 60 //缓存有效期
   
                  }
                }
              }
            ]
        },
      })
    ],
    // vite性能优化
    build: {
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      sourcemap: false,
      minify: false,
      assetsInlineLimit: 5000
    }
  })
}
