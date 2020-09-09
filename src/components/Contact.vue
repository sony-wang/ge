<template>
  <div id="contact">
    <main class="d-md-flex align-items-center mt-md-0" style="min-height:85vh">
            <div class="container d-md-flex align-self-center d-block">
                <div class="w-100 my-5">
                    <img class="s-title" :src="cn.img_title" alt="">
                    <p class="text-white my-5" style="max-width:400px;line-height: 200%">如有任何在線娛樂產品相關問題需求 或是其他寶貝建議，請隨時告訴我們</p>
                    <!-- <div class="icon d-flex">
                        <a class="mx-3 p-2" href="javascript:;"><img src="./img/contact/phone.png" alt="" srcset=""></a>
                        <a class="mx-3 p-2" href="javascript:;"><img src="./img/contact/line.png" alt="" srcset=""></a>
                        <a class="mx-3 p-2" href="javascript:;"><img src="./img/contact/wechat.png" alt="" srcset=""></a>
                    </div> -->
                </div>
                <div class="w-100 my-5">
                    <h5 class="text-golden">給我們留言</h5>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="姓名">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="E-mail">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" name="" id="" cols="30" rows="10" placeholder="留下訊息"></textarea>
                    </div>
                    <div class="d-flex my-1 justify-content-center m-auto">
                        <button class="btn contact-btn px-5 text-center " type="submit">確定</button>
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
    //   imgs:{
    //     img_chip: require("@/assets/img/about/chip.png"),
    //     img_01: require("@/assets/img/about/01.png"),
    //     img_02: require("@/assets/img/about/02.png"),
    //     img_03: require("@/assets/img/about/03.png"),
    //     img_04: require("@/assets/img/about/04.png"),
    //     img_05: require("@/assets/img/about/05.png"),
    //     img_06: require("@/assets/img/about/06.png"),
    //   },
      cn: {
        // s2: require("@/assets/img/cn/s2.png"),
        img_title: require("@/assets/img/contact/cn/title.png"),
        
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