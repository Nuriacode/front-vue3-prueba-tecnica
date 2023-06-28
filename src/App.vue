<template>
  <div id="app">
    <HeaderLogin />
    <RouterView />
    <FooterLogin />
  </div>
</template>
<script>
import HeaderLogin from "./components/HeaderLogin.vue";
import LogIn from "./views/LogIn.vue";
import FooterLogin from './components/FooterLogin.vue';
import { RouterLink, RouterView } from 'vue-router'

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
  height: 100vh;
  width: 100%;
}
</style>
