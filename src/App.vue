<template>
  <div id="app">
    <div class="main-app-layout">
      <AppMainHeader />
      <PlayerAnimation />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script>
// components
import AppMainHeader from "./views/app-view-components/app-header/AppMainHeader.vue";
import PlayerAnimation from "./views/app-view-components/animations-components/PlayerAnimation.vue";
import AppFooter from "./views/app-view-components/app-footer/AppFooter.vue";
//
export default {
  name: "App",
  components: {
    AppMainHeader,
    PlayerAnimation,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
      // color: #555bde;
    }
  }
}
</style>
