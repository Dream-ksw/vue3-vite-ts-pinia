<template>
  <div class="sync">
    <div class="sync-content">
      <div class="img"><img></div>
      <div class="sync-pop">
        <span></span>
        <span>&nbsp;</span>
      </div>
    </div>
    <hr>
    <div class="desc"></div>
    <div class="desc"></div>
  </div>
</template>

<script setup lang="ts">

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
      background-color: #ccc;
    }
    .sync-pop {
      width: 60px;
      height: 18px; 
      margin: 26px 0 0 10px;
      background-color: #ccc;
    }
  }
  hr {
    border: 0.5px solid rgba(223, 220, 220, 0.3);
  }
  .desc {
    margin: 16px 0 8px 20px;
    height: 10px;
    width: 360px;
    background-color: #ccc;
  }
}
</style>