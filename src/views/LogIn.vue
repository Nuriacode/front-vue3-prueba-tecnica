<template>
  <router-view>
    <div class="container">
      <h3 class="container__tiitle">Login</h3>
      <img src="" />

      <!-- Login Form -->
      <form class="container__form" v-on:submit.prevent="login">
        <input
          type="text"
          id="login"
          class="container__form--email"
          name="login"
          placeholder="User"
        />
        <input
          type="text"
          id="password"
          class="container__form--email"
          name="login"
          placeholder="Password"
        />
        <input type="submit" class="fadeIn fourth" value="Log In" />
      </form>

      <!-- Remind Passowrd -->
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error_msg }}
      </div>
    </div>
  </router-view>
</template>
<script>
import axios from "axios";
export default {
  name: "LogIn",
  components: {},
  data: function () {
    return {
      user: "",
      password: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    async login() {
      let json = {
        usuario: this.user,
        password: this.password,
      };
      const data = await axios.post("https://api.solodata.es/auth", json);
      console.log(data);
      if (data.data.status == "ok") {
        localStorage.token = data.data.result.token;
        this.$router.push("/dashboard");
      } else {
        this.error = true;
        this.error_msg = data.data.result.error_msg;
      }
    },
  },
};
</script>
<style scoped>
.container {
  height: 90vh;
}
</style>
