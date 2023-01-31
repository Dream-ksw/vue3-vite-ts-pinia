import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name:string,
  age:number
}

let result:User = {
  name: 'Tom',
  age: 12
}

const login = ():Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Tom',
        age: 12
      })
    }, 2000)
  })
}

export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: '小满',
      user: <User>{}
    }
  },
  // computed 修饰一些值 可以进行相互调用
  getters: {
    newName ():string {
      return `$-${this.name}`
    }
  },
  // 类似于methods 同步异步都可以做 提交state
  // actions中的方法可以使用this相互进行调用
  actions: {
    setCurrent(num:number) {
      this.current = num
    },

    setName() {
      this.name = 'new Coder'
    },

    // 同步方法
    // setUser() {
    //   this.user = result
    // },
    // 异步方法
    async setUser() {
      const res = await login()
      this.user = res
      this.setName()
    }
  }
})


export const useBaseStore = defineStore(Names.BASE, {
  state:() => {
    return {
      name: 'coderwhy',
      age: 18
    }
  },

  getters: {
    
  },

  actions: {
    changeName() {
      this.name = 'hello'
    }
  }
})