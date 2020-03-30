<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>

import Swiper from "swiper"
export default {
  name:"swiper",
  methods:{
    // swiperGo(){
    //     var mySwiper = new Swiper ('.swiper-container', {
    //       direction: 'vertical',
    //       loop: true,
    //       // 如果需要分页器
    //       pagination: '.swiper-pagination',
    //     })
    // }
  },
  mounted(){
    // this.swiperGo()
  }

}
</script>

<style lang="stylus">
.swiper-container
  width 100%
  height 300px
  background pink
  .swiper-wrapper
    widrh 100%
    height 100%
    .swiper-slide
      widrh 100%
      height 100% 
      background-color pink



</style>