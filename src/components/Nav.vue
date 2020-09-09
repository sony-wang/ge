<template>
  <div>
    <nav class="navbar navbar-expand-lg w-100 fixed-top">
      <div class="container">
        <a class="navbar-brand" href="javascript:;"  @click="Main">
          <img class="logo" src="../assets/img/logo.png" alt />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav ml-auto">
            <!-- <li class="nav-item mx-3 text-center" v-for="(menuItem, index) in $t('GENERAL.NAV_OPTIONS')" :key="index + 1">
                <a class="nav-link text-golden" href="./about.html">
                    {{ menuItem }}
                </a>
            </li> -->
            <li class="nav-item mx-3 text-center">
              <!-- <a class="nav-link text-golden" href="./about.html">{{ $t('GENERAL.NAV_OPTIONS')[0] }}</a> -->
              <a class="nav-link text-golden" href="javascript:;" @click="About">{{ $t('GENERAL.NAV_OPTIONS')[0] }}</a>
            </li>
            <li class="nav-item mx-3 text-center">
              <a v-if="pagename == 'page_main'" class="nav-link text-golden" href="#anchor-product">{{ $t('GENERAL.NAV_OPTIONS')[1] }}</a>
              <a v-if="pagename != 'page_main'" class="nav-link text-golden" href="javascript:;"  @click="Main">{{ $t('GENERAL.NAV_OPTIONS')[1] }}</a>
            </li>
            <li class="nav-item mx-3 text-center">
              <a v-if="pagename == 'page_main'" class="nav-link text-golden" href="#anchor-coopration">{{ $t('GENERAL.NAV_OPTIONS')[2] }}</a>
              <a v-if="pagename != 'page_main'" class="nav-link text-golden" href="javascript:;" @click="Main">{{ $t('GENERAL.NAV_OPTIONS')[2] }}</a>
            </li>
            <li class="nav-item mx-3 text-center">
              <!-- <a class="nav-link text-golden" href="javascript:;" @click="Contact">{{ $t('GENERAL.NAV_OPTIONS')[3] }}</a> -->
            </li>
            
            <li class="nav-item mx-3 dropdown text-center">
              <a
                class="nav-link text-golden dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{ $t('GENERAL.NAV_LANG') }}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item text-golden" href="#" data-lang="cn" @click="setLang">繁體中文</a>
                <a
                  class="dropdown-item text-golden"
                  href="#"
                  data-lang="vn"
                  @click="setLang"
                >Tiếng Việt</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Nav",
    data(){
      return{
        pagename:'page_main'
      }
    },
        
    methods: {
      setActiveLanguage(lang) {
          localStorage.setItem("language", lang);
      },
      setLang(evt) {
          console.log(evt)
          const lang = evt.target.dataset.lang;
          this.setActiveLanguage(lang);
          return history.go(0);
      },
      Main(){
        this.pagename='page_main'
        console.log(this.pagename)
        this.$emit('pagename_val',this.pagename);
      },
      About(){
        this.pagename='page_about'
        console.log(this.pagename)
        this.$emit('pagename_val',this.pagename);
      }
    },
};


</script>

<style lang="scss" scoped>
.navbar {
  background: #1d1717cc;
  z-index: 100;
}

.navbar-toggler-icon {
  background: url(../assets/img/hamburger.png);
  background-size: cover;
}
li.nav-item {
  font-weight: 600;
  font-size: 16px;
}
.text-golden {
  color: #c89f63 !important;
}
nav .text-golden:hover {
  color: #eeba6d !important;
}
.dropdown-menu {
  background: #1d1717;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #16181b;
  background: initial;
  color: #eeba6d !important;
}
img.logo {
  max-height: 60px;
}
</style>