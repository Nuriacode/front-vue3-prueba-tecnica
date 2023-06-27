<template>
  <div class="app">
    <HeaderLogin />
    <router-view>
    <LogIn />
    </router-view>
    <FooterLogin />
  </div>
</template>
<script>
import HeaderLogin from "./components/HeaderLogin.vue"
import LogIn from "./views/LogIn.vue";
import FooterLogin from './components/FooterLogin.vue';

export default {
  name: "App",
  components: {
    LogIn,
    HeaderLogin,
    FooterLogin
  },
};
</script>
<style>
#app {
  padding: 0px;
  height: 100vh;
}
</style>
