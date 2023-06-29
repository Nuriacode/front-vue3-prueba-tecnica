<template>
  <router-view>
    <div class="container">
      <h3 >Login</h3>
      <!-- Login Form -->
      <form class="container__form" v-on:submit.prevent="login">
        <input
          type="text"
          id="login"
          class="container__form--email"
          name="login"
          placeholder="User"
          v-model="user"
        />
        <input
          type="text"
          id="password"
          class="container__form--email"
          name="login"
          placeholder="Password"
          v-model="password"
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
<style lang="scss" scoped>
.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h3 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    align-self: center;
    margin-bottom: 75px;
    font-size: 35px;
    color: rgb(217, 164, 233);
  }

  form{
    display: flex;
    flex-direction: column;
    width: 200px;
    align-self: center;
    gap: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    input{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      height: 25px;
      border-radius: 7px;
      padding-left: 10px;
      padding-right: 10px;
      box-shadow: 0 0 0 transparent;
      background-color: rgb(236, 241, 200);
    }
  }

}
</style>
