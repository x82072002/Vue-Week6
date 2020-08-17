<template>
  <div>
    <h1>這是商品總覽頁面</h1>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="item in products" :key="item.id">
          <div class="card" style="width: 100%;">
            <img :src="item.imageUrl" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.content}}</p>
              <router-link :to="`/product/${item.id}`" class="btn btn-primary">查看詳情</router-link>
              <!-- <a :href="`#/product/${item.id}`" class="btn btn-primary">查看詳情2</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const apiPath = 'https://course-ec-api.hexschool.io/api/fb51b371-f18c-4c36-bc07-26304c376f66/ec/products';
    this.axios.get(apiPath)
      .then((res) => {
        this.products = res.data.data;
      });
  },
};
</script>
