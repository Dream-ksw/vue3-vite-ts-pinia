// 引入pinia
import { PiniaPluginContext } from 'pinia'
// pinia持久化
type Options = {
  key?: string
}
const __piniaKey__:string = 'xiaoman'
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })
    // 注意这里先获取data 或者 在监听之后获取data没有影响
    // 因为当修改数据时 store中对页面中的数据进行了修改 此时不会使用这个data  只有当页面刷新的时候才会使用这里data
    return data
  }
}

export { piniaPlugin }