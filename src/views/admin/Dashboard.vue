<template>
  <div>
    <div id="nav">
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link> |
      <router-link to="/admin/images">圖片儲存列表</router-link> |
      <router-link to="/">返回前台</router-link>
    </div>
    <router-view/>
  </div>
</template>
