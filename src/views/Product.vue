<template>
  <div>
    <h1>這是單一產品頁面</h1>
    <div class="container">
      <img :src="product.imageUrl[0]" class="img-fluid">
      <div>{{product.title}}</div>
      <div>{{product.description}}</div>
      <div>${{product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const apiPath = `https://course-ec-api.hexschool.io/api/fb51b371-f18c-4c36-bc07-26304c376f66/ec/product/${id}`;
    this.axios.get(apiPath)
      .then((res) => {
        this.product = res.data.data;
      });
  },
};
</script>
