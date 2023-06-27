<template>
<router-view>
    <div class="">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="">
        <img src="" id="icon" alt="User Icon" />
      </div>

      <!-- Login Form -->
      <form v-on:submit.prevent="login">
        <input
          type="text"
          id="login"
          class="mx-auto"
          name="login"
          placeholder="User"
          v-model="user"
        />
        <input
          type="text"
          id="password"
          class=""
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
    login() {
      let json = {
        usuario: this.user,
        password: this.password,
      };
      axios.post("https://api.solodata.es/auth", json).then((data) => {
        console.log(data);
        if (data.data.status == "ok") {
          localStorage.token = data.data.result.token;
          this.$router.push("/dashboard");
        } else {
          this.error = true;
          this.error_msg = data.data.result.error_msg;
        }
      });
    },
  },
};
</script>