<template>
  <div class="card">
    <header>
      <div >标题</div>
      <div >副标题</div>
    </header>
    <section>
      内容
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@boderColor: #ccc;
.card {
  width: 400px;
  border: 1px solid @boderColor;
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid @boderColor;
    padding: 5px;
  }
  section {
    padding: 5px;
    min-height: 300px;
  }
}
</style>