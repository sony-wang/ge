<template>
  <div id="about">
    <main class="d-md-flex align-items-center mt-md-0" style="min-height:85vh">
            <div class="m-auto">
                <div class="w-100 my-5 d-flex justify-content-center">
                    <div class="w-100 d-md-block d-none"></div>
                    <div class="w-100">
                        <img class="s-title my-4 mx-auto d-block" :src="cn.img_title" alt="">
                        <p class="text-white text-center" style="line-height: 200%">
                            {{ $t('ABOUT.TITLE') }}
                        </p>
                    </div>
                    <div class="w-100 d-md-block d-none">
                        <img class="mx-auto d-block" :src="imgs.img_chip" alt="">
                    </div>

                </div>


                <div class="w-100 my-5">
                    <div class="row w-100">
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_01" alt="">
                                        </div>
                                        <div class="card-title-wrap w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_01" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.BRAND') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_02" alt="">
                                        </div>
                                        <div class="card-title-wrap w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_02" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.GAMES') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_03" alt="">
                                        </div>
                                        <div class="card-title-wrap w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_03" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.SAFE') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_04" alt="">
                                        </div>
                                        <div class="card-title-wrap w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_04" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.SERVICE') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_05" alt="">
                                        </div>
                                        <div class="card-title-wrap-s w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_05" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.DEPOSITWITHDRAW') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card m-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="position-relative w-25">
                                            <img class="position-absolute circle-icon" :src="imgs.img_06" alt="">
                                        </div>
                                        <div class="card-title-wrap w-100 ml-5 py-3">
                                            <img class="w-100" :src="cn.img_title_06" alt="">
                                        </div>
                                    </div>
                                    <div class="p-5">
                                        <p class="card-text text-white">{{ $t('ABOUT.STRENGTH') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </main>    
  </div>
</template>

<script>
export default {
  name: "Main",

  props: {
    lang: String,
  },
  data() {
    return {
      imgs:{
        img_chip: require("@/assets/img/about/chip.png"),
        img_01: require("@/assets/img/about/01.png"),
        img_02: require("@/assets/img/about/02.png"),
        img_03: require("@/assets/img/about/03.png"),
        img_04: require("@/assets/img/about/04.png"),
        img_05: require("@/assets/img/about/05.png"),
        img_06: require("@/assets/img/about/06.png"),
      },
      cn: {
        // s2: require("@/assets/img/cn/s2.png"),
        img_title: require("@/assets/img/about/title.png"),
        img_title_01: require("@/assets/img/about/title-01.png"),
        img_title_02: require("@/assets/img/about/title-02.png"),
        img_title_03: require("@/assets/img/about/title-03.png"),
        img_title_04: require("@/assets/img/about/title-04.png"),
        img_title_05: require("@/assets/img/about/title-05.png"),
        img_title_06: require("@/assets/img/about/title-06.png"),
        
      },
    }
  },
  mounted() {
    var basicScrollTop = function () {
      // The button
      var btnTop = document.querySelector("#goTop");
      // Reveal the button
      var btnReveal = function () {
        var position = document.querySelector("#position");
        position.innerHTML = window.scrollY + "px";
        if (window.scrollY >= 300) {
          btnTop.classList.add("is-visible");
        } else {
          btnTop.classList.remove("is-visible");
        }
      };
      // Smooth scroll top
      var TopscrollTo = function () {
        if (window.scrollY != 0) {
          setTimeout(function () {
            window.scrollTo(0, window.scrollY - 30);
            TopscrollTo();
          }, 5);
        }
      };
      // Listeners
      window.addEventListener("scroll", btnReveal);
      btnTop.addEventListener("click", TopscrollTo);
    };
    basicScrollTop();

    document.querySelectorAll('a[href^="#anchor"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  },
};
</script>


<style  lang="scss">
</style>