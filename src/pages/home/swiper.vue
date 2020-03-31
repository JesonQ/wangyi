<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="red" indicator-width="20px">
  <van-swipe-item class="item">
    <img src="https://yanxuan.nosdn.127.net/7109e4bc0e762c531cd39b18dda03cd2.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item class="item">
    <img src="https://yanxuan.nosdn.127.net/930433bf437881c8f2560073dac7e6b0.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item class="item">
    <img src="https://yanxuan.nosdn.127.net/c53e8279c43273c4cde5eec5faae018d.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item class="item">
    <img src="https://yanxuan.nosdn.127.net/0e4beaaddf2824ca6c8cdbad8edcf5c7.jpg" alt="">
  </van-swipe-item>
</van-swipe>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name:"swiper"
}
</script>

<style lang="stylus" scoped>
.my-swipe
  width 100%
  height 370px
  background-color #f0f0f0
  overflow hidden
  .item
    width 100%
    height 370px
    img 
      width 100%
      height 370px

</style>