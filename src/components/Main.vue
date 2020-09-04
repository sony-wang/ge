<template>
  <div>
   <div class="video w-100">
        <video class="w-100" playsinline webkit-playsinline="true" preload="auto" autoplay="true" loop  muted="true">
            <source :src="GE_Video" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="s2">
        <a href="javascript:;">
            <picture class="w-100">
                <source class="w-100" :srcset="cn.s2" media="(min-width: 800px)" v-if="lang=='cn'">
                <source class="w-100" :srcset="vn.s2" media="(min-width: 800px)" v-if="lang=='vn'">
                <img class="w-100" :src="cn.s2m" alt="" v-if="lang=='cn'" />
                <img class="w-100" :src="vn.s2m" alt="" v-if="lang=='vn'" />
            </picture>
        </a>
    </div>
    <div class="s3" id="anchor-product">
        <div class="d-md-flex d-block">
            <a href="javascript:;">
                <picture class="w-100">
                    <source class="w-100" :srcset="cn.s3_01"
                            media="(min-width: 800px)" v-if="lang=='cn'">
                    <source class="w-100" :srcset="vn.s3_01"
                            media="(min-width: 800px)" v-if="lang=='vn'">
                    <img class="w-100" :src="cn.s3m_01" alt="" v-if="lang=='cn'" />
                    <img class="w-100" :src="vn.s3m_01" alt="" v-if="lang=='vn'" />
                </picture>
            </a>
            <a href="javascript:;">
                <picture class="w-100">
                    <source class="w-100" :srcset="cn.s3_02"
                            media="(min-width: 800px)" v-if="lang=='cn'">
                    <source class="w-100" :srcset="vn.s3_02"
                            media="(min-width: 800px)" v-if="lang=='vn'">
                    <img class="w-100" :src="cn.s3m_02" alt="" v-if="lang=='cn'"/>
                    <img class="w-100" :src="vn.s3m_02" alt="" v-if="lang=='vn'"/>
                </picture>
            </a>
        </div>

        <div class="d-md-flex d-block">
            <a href="javascript:;">
                <picture class="w-100">
                    <source class="w-100" :srcset="cn.s3_03"
                            media="(min-width: 800px)" v-if="lang=='cn'">
                    <source class="w-100" :srcset="vn.s3_03"
                            media="(min-width: 800px)" v-if="lang=='vn'">
                    <img class="w-100" :src="cn.s3m_03" alt="" v-if="lang=='cn'"/>
                    <img class="w-100" :src="vn.s3m_03" alt="" v-if="lang=='vn'"/>
                </picture>
            </a>
            <a href="javascript:;">
                <picture class="w-100">
                    <source class="w-100" :srcset="cn.s3_04"
                            media="(min-width: 800px)" v-if="lang=='cn'">
                    <source class="w-100" :srcset="vn.s3_04"
                            media="(min-width: 800px)" v-if="lang=='vn'">
                    <img class="w-100" :src="cn.s3m_04" alt="" v-if="lang=='cn'"/>
                    <img class="w-100" :src="vn.s3m_04" alt="" v-if="lang=='vn'"/>
                </picture>
            </a>
        </div>
        <div class="s4s5" id="a" style="padding:10em 0 0">
        <div class="s4">
            <div class="container d-md-flex justify-content-around d-none">
                <div class="d-flex">
                    <div class="d-flex flex-column">
                        <img class="my-3 w-100 ml-5" :src="cn.ls_brand01" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100" :src="cn.ls_service02" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100 ml-5" :src="cn.ls_cache03" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100 ml-5" :src="vn.ls_brand01" alt="" v-if="lang=='vn'">
                        <img class="my-3 w-100" :src="vn.ls_service02" alt="" v-if="lang=='vn'">
                        <img class="my-3 w-100 ml-5" :src="vn.ls_cache03" alt="" v-if="lang=='vn'">
                    </div>
                </div>
                <div class="d-flex flex-column align-self-center">
                    <h2 class="text-golden text-center mb-5 s-title">{{ $t('MAIN.ABOUT') }}</h2>
                    <img src="../assets/img/logo.png" alt="" class="logo m-auto d-block mp-5">
                </div>
                <div class="d-flex">
                    <div class="d-flex flex-column">
                        <img class="my-3 w-100" :src="cn.ls_idea04" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100 ml-5" :src="cn.ls_safety05" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100" :src="cn.ls_center06" alt="" v-if="lang=='cn'">
                        <img class="my-3 w-100" :src="vn.ls_idea04" alt="" v-if="lang=='vn'">
                        <img class="my-3 w-100 ml-5" :src="vn.ls_safety05" alt="" v-if="lang=='vn'">
                        <img class="my-3 w-100" :src="vn.ls_center06" alt="" v-if="lang=='vn'">
                    </div>
                </div>
            </div>
            <div class="container d-md-none d-flex flex-column">
                <div class="d-flex flex-column align-self-center mb-5">
                    <h2 class="text-golden text-center mb-3 s-title">{{ $t('MAIN.ABOUT') }}</h2>
                    <img src="../assets/img/logo.png" alt="" class="logo m-auto d-block mp-5">
                </div>

                <div class="d-flex">
                    <div class="d-flex flex-column  m-auto">
                        <img class="my-3" :src="cn.ls_brand01" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="cn.ls_service02" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="cn.ls_cache03" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="cn.ls_idea04" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="cn.ls_safety05" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="cn.ls_center06" alt="" v-if="lang=='cn'">
                        <img class="my-3" :src="vn.ls_brand01" alt="" v-if="lang=='vn'">
                        <img class="my-3" :src="vn.ls_service02" alt="" v-if="lang=='vn'">
                        <img class="my-3" :src="vn.ls_cache03" alt="" v-if="lang=='vn'">
                        <img class="my-3" :src="vn.ls_idea04" alt="" v-if="lang=='vn'">
                        <img class="my-3" :src="vn.ls_safety05" alt="" v-if="lang=='vn'">
                        <img class="my-3" :src="vn.ls_center06" alt="" v-if="lang=='vn'">
                    </div>
                </div>
            </div>
        </div>

        <div class="s5" style="padding:10em 0" id="tamplate">

            <h2 class="text-golden text-center mb-3 mx-auto s-title">{{ $t('MAIN.TEMPLATE') }}</h2>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner container">
                  <div class="carousel-item active">
                      <div class="d-flex flex-wrap">
                          <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_01">
                            <img :src="temp.img_01" alt="">
                          </a>
                          <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_02">
                            <img :src="temp.img_02" alt="">
                         </a>
                         <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_03">
                            <img :src="temp.img_03" alt="">
                         </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_04">
                            <img :src="temp.img_04" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_05">
                            <img :src="temp.img_05" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_06">
                            <img :src="temp.img_06" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_07">
                            <img :src="temp.img_07" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_08">
                            <img :src="temp.img_08" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_09">
                            <img :src="temp.img_09" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_10">
                            <img :src="temp.img_10" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_11">
                            <img :src="temp.img_11" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_13">
                            <img :src="temp.img_13" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_14">
                            <img :src="temp.img_14" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_15">
                            <img :src="temp.img_15" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_16">
                            <img :src="temp.img_16" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_17">
                            <img :src="temp.img_17" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_18">
                            <img :src="temp.img_18" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" :href="temp.img_19">
                            <img :src="temp.img_19" alt="">
                        </a>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="d-flex flex-wrap">
                        <a class="d-block mx-auto" data-fancybox="gallery" href="temp.img_20">
                            <img src="temp.img_20" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" href="temp.img_21">
                            <img src="temp.img_21" alt="">
                        </a>
                        <a class="d-block mx-auto" data-fancybox="gallery" href="temp.img_22">
                            <img src="temp.img_22" alt="">
                        </a>
                      </div>
                  </div>
                 
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </div>



        <div class="s6 coopration" id="anchor-coopration">
            <div class="container">
                <h2 class="text-golden text-center mb-3 s-title">{{ $t('MAIN.COOPERATION') }}</h2>
                <div class="d-flex justify-content-around  flex-wrap my-5">
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-og.png" alt=""></div>
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-bb.png" alt=""></div>
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-allbet.png" alt=""></div>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-mg.png" alt=""></div>
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-ag.png" alt=""></div>
                    <div class="d-flex align-items-center"><img class="d-block mx-auto my-3" src="../assets/img/cooperation-wg.png" alt=""></div>
                </div>
            </div>
            
            <div class="footer" style="padding:5rem 0 2rem">
                <p class="text-center">Copyright  2020 GE娛樂城. Designed by HAYDN.technology</p>
            </div>
        </div>
    </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  
  props: {
    lang: String
  },
  data(){
      return{
          GE_Video:require('@/assets/video/GE_Video.mp4'),
          cn:{
              s2:require('@/assets/img/cn/s2.png'),
              s2m:require('@/assets/img/cn/s2m.png'),
              s3_01:require('@/assets/img/cn/s3-01.png'),
              s3m_01:require('@/assets/img/cn/s3m-01.png'),
              s3_02:require('@/assets/img/cn/s3-02.png'),
              s3m_02:require('@/assets/img/cn/s3m-02.png'),
              s3_03:require('@/assets/img/cn/s3-03.png'),
              s3m_03:require('@/assets/img/cn/s3m-03.png'),
              s3_04:require('@/assets/img/cn/s3-04.png'),
              s3m_04:require('@/assets/img/cn/s3m-04.png'),
              ls_brand01:require('@/assets/img/cn/ls-brand01.png'),
              ls_service02:require('@/assets/img/cn/ls-service02.png'),
              ls_cache03:require('@/assets/img/cn/ls-cache03.png'),
              ls_idea04:require('@/assets/img/cn/ls-idea04.png'),
              ls_safety05:require('@/assets/img/cn/ls-safety05.png'),
              ls_center06:require('@/assets/img/cn/ls-center06.png'),
          },
          vn:{
              s2:require('@/assets/img/vn/s2.png'),
              s2m:require('@/assets/img/vn/s2m.png'),
              s3_01:require('@/assets/img/vn/s3-01.png'),
              s3m_01:require('@/assets/img/vn/s3m-01.png'),
              s3_02:require('@/assets/img/vn/s3-02.png'),
              s3m_02:require('@/assets/img/vn/s3m-02.png'),
              s3_03:require('@/assets/img/vn/s3-03.png'),
              s3m_03:require('@/assets/img/vn/s3m-03.png'),
              s3_04:require('@/assets/img/vn/s3-04.png'),
              s3m_04:require('@/assets/img/vn/s3m-04.png'),
              ls_brand01:require('@/assets/img/vn/ls-brand01.png'),
              ls_service02:require('@/assets/img/vn/ls-service02.png'),
              ls_cache03:require('@/assets/img/vn/ls-cache03.png'),
              ls_idea04:require('@/assets/img/vn/ls-idea04.png'),
              ls_safety05:require('@/assets/img/vn/ls-safety05.png'),
              ls_center06:require('@/assets/img/vn/ls-center06.png'),
          },
          temp:{
              img_01:require('@/assets/img/tamplate/img_01.png'),
              img_02:require('@/assets/img/tamplate/img_02.png'),
              img_03:require('@/assets/img/tamplate/img_03.png'),
              img_04:require('@/assets/img/tamplate/img_04.png'),
              img_05:require('@/assets/img/tamplate/img_05.png'),
              img_06:require('@/assets/img/tamplate/img_06.png'),
              img_07:require('@/assets/img/tamplate/img_07.png'),
              img_08:require('@/assets/img/tamplate/img_08.png'),
              img_09:require('@/assets/img/tamplate/img_09.png'),
              img_10:require('@/assets/img/tamplate/img_10.png'),
              img_11:require('@/assets/img/tamplate/img_11.png'),
              img_13:require('@/assets/img/tamplate/img_13.png'),
              img_14:require('@/assets/img/tamplate/img_14.png'),
              img_15:require('@/assets/img/tamplate/img_15.png'),
              img_16:require('@/assets/img/tamplate/img_16.png'),
              img_17:require('@/assets/img/tamplate/img_17.png'),
              img_18:require('@/assets/img/tamplate/img_18.png'),
              img_19:require('@/assets/img/tamplate/img_19.png'),
              img_20:require('@/assets/img/tamplate/img_20.png'),
              img_21:require('@/assets/img/tamplate/img_21.png'),
              img_22:require('@/assets/img/tamplate/img_22.png'),
          }
      }
  },
}
</script>


<style  lang="scss">

</style>