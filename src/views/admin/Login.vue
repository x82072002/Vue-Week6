<template>
  <div id="app">
    <div class="container col-2">
      <form class="form-signin"  @submit.prevent="signIn">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input id="inputEmail" v-model="user.email" type="email" class="form-control"
            placeholder="Email address" required>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input id="inputPassword" v-model="user.password" type="password" class="form-control"
            placeholder="Password" required>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="button" @click="signIn()">登入</button>
        <br>
        <p class="mt-5 mb-3 text-muted">
          © 2020~∞ - 六角學院
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
      api: 'https://course-ec-api.hexschool.io/api/auth/login',
    };
  },
  methods: {
    signIn() {
      const vm = this;
      const apiUrl = this.api;
      this.axios.post(apiUrl, this.user)
        .then((res) => {
          vm.token = res.data.token;
          const { expired } = res.data;
          document.cookie = `hexToken = ${vm.token};expires = ${new Date(expired * 1000)}; path=/`;
          window.location = '#/admin';
        });
    },
  },
};

</script>
