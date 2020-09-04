<template>
  <div id="app">
    <span id="position"></span>
    <button id="goTop"></button>
    <Nav />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main :lang="lang"/>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
    Nav
  },
  data(){
        return {
            lang:localStorage.language
        }
    },
}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
