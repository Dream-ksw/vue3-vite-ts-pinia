<template>
  <div>
    <template v-if="books.length > 0">
      <table>
        <thead>
          <th>序号</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.date }}</td>
            <td>{{ filterPrice(book.price) }}</td>
            <td>
              <button :disabled="book.count < 2" @click="changeCount(index, -1)">-</button>
              <span class="counter">{{ book.count }}</span>
              <button @click="changeCount(index, 1)">+</button>
            </td>
            <td>
              <button @click="deleteBook(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格: {{ filterPrice(totalPrice) }}</h2>
    </template>
    <template v-else>
      <h2>购物车为空</h2>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
type shop = {
  id: number,
  name: string,
  date: string,
  price: number,
  count: number
}
const books = reactive<shop[]>([
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程基础》',
          date: '2006-2',
          price: 59,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128,
          count: 1
        }
      ])

const filterPrice = (price:number) => {
  return '￥' + price
}
const changeCount = (index: number, value: number) => {
  books[index].count += value
}
const deleteBook = (index:number) => {
  books.splice(index, 1)
}
const totalPrice = computed(() => {
  return books.reduce((prev, curr) => {
    return prev + (curr.count * curr.price)
  }, 0)
})
</script>

<style scoped>
table {
  border: 1px solid #e9e9e9;
  /* 边框合并 */
  border-collapse: collapse  
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

.counter {
  margin: 0 6px;
}
</style>