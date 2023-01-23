<template>
  <main class="main">
    <h1 class="main__header">Manage all your tasks here</h1>
    <div class="main__app">
      <side-nav></side-nav>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import SideNav from "./components/SideNav/SideNav.vue";

export default {
  name: "App",
  components: { SideNav },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  box-sizing: inherit;
}

body {
  font-family: "Red Hat Display", sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  background-color: $primary-color;
  height: 100vh;
}

.main {
  background-color: $secondary-color;
  color: $tertiary-color;
  width: 70%;
  margin: 4rem auto 0;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 6px 6px 12px #a8a8a8, -6px -6px 12px #ffffff;
  &__header {
    font-size: 2.4rem;
    text-align: center;
    color: $tertiary-color;
    letter-spacing: 0.1rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid rgba($tertiary-color, 0.5);
  }
  &__app {
    display: flex;
    justify-content: space-between;
  }
}
</style>
