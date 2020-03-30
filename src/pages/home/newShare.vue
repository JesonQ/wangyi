<template>
  <div class="newShare">
    <div class="newShareTitle">
      <span>新人专享</span>
    </div>
    <div class="shareBottom">
      <div class="shareBleft">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
      </div>
      <div class="shareBright">
        <div class="shareBrightOne">
          <span>福利社</span>
          <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png" alt="">
        </div>
        <div class="shareBrightTwo shareBrightOne">
          <span>新人拼团</span>
          <img src="https://yanxuan-item.nosdn.127.net/a14e4a0ef8f4d7193f5329bd3b62577f.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name:"newShare"

}
</script>

<style lang="stylus">
.newShare
  background pink 
  width 100%
  position relative
  background-color #fff
  .newShareTitle
    position relative
    height 90px
    width 100%
    span 
      position absolute
      width 200px
      height 50px
      left 50%
      top 50%
      margin-left -100px
      margin-top -15px
      font-size 30px
      text-align center
    &:before
      content ""
      display inline-block
      width 100px
      height 2px
      background #333
      position absolute
      left 20%
      top 50%
    &:after
      content ""
      display inline-block
      width 100px
      height 2px
      background #333
      position absolute
      right 20%
      top 50%
  .shareBottom
    width 100%
    padding 20px
    display flex
    .shareBleft
      width 342px
      height 434px
      background-color #F9E9CF
      margin-right 20px
      span 
        font-size 30px
        display inline-block
        padding 40px 0 10px 30px
      img 
        width 258px 
        height 257px
        margin 30px 0 0 30px
    .shareBright
      width 342px
      height 434px
      .shareBrightOne
        width 100%
        height 215px
        background-color #FBE2D3
        margin-bottom 4px
        display flex
        span 
          font-size 30px
          display inline-block
          padding 30px 0px 20px 20px
          width 300px
        img
          width 200px
          height 200px
      .shareBrightTwo
        width 100%
        height 215px
        background-color #FFECC2        
</style>