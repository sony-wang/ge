<template>
  <div id="app">
    <span id="position"></span>
    <button id="goTop"></button>
    <Nav />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main :msg="$t('GENERAL.WELCOME_WORD')" />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
    Nav
  }
}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
