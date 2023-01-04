<template>
  <div class="sync">
    <div class="sync-content">
      <div class="img"><img :src="data.url"></div>
      <div class="sync-pop">
        <span>{{ data.name }}</span>
        <span>&nbsp;{{ data.age }}</span>
      </div>
    </div>
    <hr>
    <div class="desc">{{ data.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { axios } from '../../server/axios'

// es7之后可以直接使用底层await技术  await之后所有的代码都变成一个异步的
interface Data {
  data: {
    name: string,
    age: number,
    url: string,
    desc: string
  }
}
const { data } = await axios.get<Data>('./data.json')
</script>

<style lang="less" scoped>
.sync {
  margin: 20px;
  width: 400px;
  height: 150px;
  background-color: #eee;
  border-radius: 5px;
  .sync-content {
    display: flex;
    height: 60px;
    border: 1px solid transparent;
    .img {
      margin: 8px 0 0 10px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .sync-pop {
      margin: 24px 0 0 10px;
    }
  }
  hr {
    border: 0.5px solid rgba(223, 220, 220, 0.3);
  }
  .desc {
    padding: 0 20px;
  }
}
</style>