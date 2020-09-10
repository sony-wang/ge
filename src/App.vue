<template>
  <div id="app">
    <span id="position"></span>
    <button id="goTop"></button>
    <Nav v-on:pagename_val="pagename_val" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main v-if="pagename  === 'page_main'" :lang="lang" />
    <About v-if="pagename  === 'page_about'" :lang="lang" />
    <Contact v-if="pagename  === 'page_contact'" :lang="lang" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    About,
    Contact,
  },
  data() {
    return {
      lang: localStorage.language,
      pagename: "page_main",
    };
  },
  methods: {
    pagename_val(getPage) {
      this.pagename = getPage;
    },
  },
  // mounted() {
  //   var basicScrollTop = function () {
  //     // The button
  //     var btnTop = document.querySelector("#goTop");
  //     // Reveal the button
  //     var btnReveal = function () {
  //       var position = document.querySelector("#position");
  //       position.innerHTML = window.scrollY + "px";
  //       if (window.scrollY >= 300) {
  //         btnTop.classList.add("is-visible");
  //       } else {
  //         btnTop.classList.remove("is-visible");
  //       }
  //     };
  //     // Smooth scroll top
  //     var TopscrollTo = function () {
  //       if (window.scrollY != 0) {
  //         setTimeout(function () {
  //           window.scrollTo(0, window.scrollY - 30);
  //           TopscrollTo();
  //         }, 5);
  //       }
  //     };
  //     // Listeners
  //     window.addEventListener("scroll", btnReveal);
  //     btnTop.addEventListener("click", TopscrollTo);
  //   };
  //   basicScrollTop();

  //   //同一頁超連結移動smooth
    
  //     document.querySelectorAll('a[href^="#anchor"]').forEach((anchor) => {
  //       console.log('取得pagename')
  //       console.log(this.pagename)
  //       if (this.pagename == "page_main") {
  //         anchor.addEventListener("click", function (e) {
  //           console.log(this.pagename)
  //           e.preventDefault();
  //           document.querySelector(this.getAttribute("href")).scrollIntoView({
  //             behavior: "smooth",
  //           });
  //         });
  //       }
        
  //     });
    
  // },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
