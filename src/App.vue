<template>
  <div id="app">
    <div id="box">
      <span class="title">12.12买买买</span>
      <div class="nav">
        <router-link to="/login">商品列表</router-link>
        <router-link to="/car">购物车
          <template v-if="$store.state.shops">({{$store.state.shops | totalNums}})</template>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    filters: {
      totalNums(shops) {
        let nums = null;
        shops.forEach(item => {
          nums += item.counts
        })
        return nums
      }
    }
  }
</script>

<style lang="less">
  #box {
    width: 100%;
    height: 200px;
    background-color: yellowgreen;
    position: relative;
    text-align: center;

    .title {
      font-size: 100px;
      line-height: 200px;
    }
  }

  .nav {
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -50px;

    a {
      margin-right: 30px;
    }
  }
</style>