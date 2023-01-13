async function Prom() {
  // 同步任务
  console.log('Y')
  await Promise.resolve()
  // 微任务
  console.log('X')
}

// 宏任务
setTimeout(() => {
  console.log(1);
  Promise.resolve().then(() => {
    console.log(2)
  })
}, 0)
setTimeout(() => {
  console.log(3);
  Promise.resolve().then(() => {
    console.log(4);
  })
}, 0);

// 异步任务 微任务
Promise.resolve().then(() => {
  console.log(5)
})
Promise.resolve().then(() => {
  console.log(6)
})
Promise.resolve().then(() => {
  console.log(7)
})
Promise.resolve().then(() => {
  console.log(8)
})

// 异步宏任务
Prom()

// 同步任务
console.log(0)