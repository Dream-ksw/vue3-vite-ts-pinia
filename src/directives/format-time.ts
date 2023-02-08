import dayjs from 'dayjs'
import { App, DirectiveBinding } from 'vue'
export default function registerFormatTime(app: App) {
  app.directive('format-time', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      if(!el.textContent) return
      
      let format = ''
      format = binding.value ?? 'YYYY-MM-DD HH:mm:ss'
      
      let timeStamp = 0
      if (timeStamp.toString().length === 10) {
        timeStamp = timeStamp * 10
      } else {
        timeStamp = Number(el.textContent)
      }

      el.textContent = dayjs(timeStamp).format(format)
    }
  })
}