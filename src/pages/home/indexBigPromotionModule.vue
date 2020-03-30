<template>
  <div class="indexBigPromotionModule">
    <div class="PromotionTop"></div>
    <div class="PromotionCenter"></div>
    <div class="PromotionBottom">
      <a href="">
        <img src="https://yanxuan-item.nosdn.127.net/aca387b99f8ec15f9f4baff73ee510b5.png" alt="">
      </a>
      <a href="">
        <img src="https://yanxuan-item.nosdn.127.net/78a1f661665eb3e9257a947d4cd8ac83.png" alt="">
      </a>
      <a href="">
        <img src="https://yanxuan-item.nosdn.127.net/d417f385d2e0cc81a3c6681e503823a8.png" alt="">
      </a>
    </div>

  </div>
</template>

<script>


export default {
  name:"indexBigPromotionModule"
}
</script>

<style lang="stylus">
  .indexBigPromotionModule
    background-color #117E85
    height 600px
    .PromotionTop
      margin-top 20px
      width 100%
      height 240px
      background: url("https://yanxuan.nosdn.127.net/89cc40593f5537f4035df89d7336b7cc.gif") no-repeat
      background-size 100%
    .PromotionCenter
      padding 20px
      height 80px
      background: url("https://yanxuan.nosdn.127.net/c12048a0d85ea67718322341983b964a.png") no-repeat
      background-size 100%
    .PromotionBottom
      display flex
      justify-content space-around
      a 
        width 231px
        height 220px
        display inline-block
        background-image url("https://yanxuan.nosdn.127.net/55987e8ad3b299a925ddcd646e930c71.png")
        background-size 100%
        position relative
        img 
          width 140px
          height 140px
          position absolute
          left 50%
          margin-left -70px
          top 70px



</style>