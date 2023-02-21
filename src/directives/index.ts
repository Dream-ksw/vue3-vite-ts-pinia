import registerFormatTime from './format-time'
import { App } from 'vue'
export default function registerDirectives(app: App) {
  registerFormatTime(app)
}