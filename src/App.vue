<template>
  <div id="app">
    <span id="position"></span>
    <button id="goTop"></button>
    <Nav v-on:pagename_val="pagename_val" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main v-if="pagename  === 'page_main'" :lang="lang"/>
    <About v-if="pagename  === 'page_about'" :lang="lang"/>
    <h1 style="color:#fff"> {{ pagename }} </h1>
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
            pagename : 'page_main'
        }
    },
    methods:{
      pagename_val(getPage){
        this.pagename = getPage
      }
    }
}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
