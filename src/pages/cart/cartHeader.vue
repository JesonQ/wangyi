<template>
  <div class="cart">
    <div class="cartHeader">
      <span class="cart">购物车</span>
      <a href="" class="ticket">
        领券
      </a>
    </div>
    <div class="cartNav">
      <div class="cartNav">
        <i class="iconfont icon-dian"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="cartNav">
        <i class="iconfont icon-dian"></i>
        <span>48小时快速退款</span>
      </div>
      <div class="cartNav">
        <i class="iconfont icon-dian"></i>
        <span>满99包邮到家</span>
      </div>
    </div>
    <div class="cartBg"></div>
    <button class="login" @click="goto(`/user`)">登录</button>
  </div>
</template>

<script>
export default {
  name:"cartHeader",
  methods:{
    goto(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart
  .cartHeader
    height 100px
    display flex
    align-items center
    text-align center
    padding 0 20px
    display flex
    justify-content space-between
    .cart
      font-size 40px
    .ticket
      color red
      font-size 35px
  .cartNav
    height 80px
    background-color #f8f8f8
    font-size 30px
    line-height 80px
    display flex
    color #666
    justify-content space-around
  .cartBg
    width 340px
    height 340px
    text-align center
    background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp")
    background-size 100%
    background-repeat no-repeat
    position absolute
    left 50%
    top 50%
    margin-left -170px
    margin-top -170px
  .login
    width 440px
    height 120px
    background-color #DD1A21
    border 0 
    position absolute
    left 50%
    top 50%
    margin-left -220px
    margin-top 200px  
    border-radius 20px
    font-size 50px
    color #fff
</style>