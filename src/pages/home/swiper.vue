<template>
<div class="swiper-container">
  <div class="swiper-wrapper" v-if="">
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
    </div>
  </div>
  <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
</div>
</template>

<script>

import Swiper from "swiper"
export default {
  name:"swiper",
  methods:{
    swiperGo(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          observer:true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.swiperGo()
    })
  }

}
</script>

<style lang="stylus">
.swiper-container
  width 100%
  height 300px
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33;
  .swiper-wrapper
    height 100%
    overflow hidden
    .swiper-slide
      widrh 100%
      height 300px 
      float left
      img 
        width 100%
        height 300px

</style>