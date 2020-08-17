import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
      // {
      //   path: 'pay',
      //   component: () => import('../views/Pay.vue'),
      // },
      // {
      //   path: 'paid',
      //   component: () => import('../views/Paid.vue'),
      // },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
      {
        path: 'images',
        component: () => import('../views/admin/Images.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
