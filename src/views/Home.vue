<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <!-- <router-link to="/pay">結帳</router-link> | -->
      <!-- <router-link to="/paid">結帳完成</router-link> | -->
      <router-link to="/login">後台管理</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  // components: {
  //   HelloWorld,
  // },
  created() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
};
</script>
