<template>
  <div id="app">
    <span id="position"></span>
    <button id="goTop"></button>
    <Nav />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main v-if="page_main" :lang="lang"/>
    <About v-if="page_about" :lang="lang"/>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Main,
    About,
  },
  data(){
        return {
            lang:localStorage.language,
            page_main:false,
            page_about:true
        }
    },
}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
