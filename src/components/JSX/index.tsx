// 写法一 直接返回一个渲染函数
// export default function () {
//   return (<div>认识vue中的tsx</div>)
// }

// 写法二 使用vue提供的定义组件 options方式
// import { defineComponent } from 'vue'
// export default defineComponent({
//   data() {
//     return {
//       name: 'Hello Jsx .tsx'
//     }
//   },

//   render() {
//     return (<div>{this.name}</div>)
//   }
// }) 

// 写法三 setup函数模式
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const name = ref('Hello JSX .tsx')
    let flag = ref(true)
    const fn = () => {
      flag.value = !flag.value
    }
    return () => (
    <>
      <el-button type='primary' onClick={fn}>toggle</el-button>
      <br />
      <span v-show={flag.value}>{name.value}</span>
    </>
    )
  }
}) 