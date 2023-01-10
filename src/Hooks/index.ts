import { onMounted } from 'vue'

type Options = {
  el: string
}

export function useBase64(options:Options):Promise<{baseUrl:string}> {
  return new Promise((resolve) => {
    onMounted(() => {
      const img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
    const base64 = (el:HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      // drawImage(元素, x坐标, y坐标, 宽度, 高度)
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/png')
    }
  })
}