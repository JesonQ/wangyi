<template>
  <div class="hotsell">
      <div class="hotsell-title">类目热销榜</div>
      <div class="hotSells">
          <div class="hotSellsTop">
            <div class="hotSellsTopL">
              <span>热销榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png" alt="">
            </div>
            <div class="hotSellsTopR hotSellsTopL">
              <span>好评榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/48da70a44ef09ed4d646287573db2c44.png" alt="">
            </div>
          </div>
          <div class="hotSellsBottom">
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/44c76095543ce335319223d9636e02fc.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/659500940eba07cf9b9940e996d4bc66.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/80a3c89167c2d45a7c2d20ac8cf3b02c.png" alt="">
            </div>
          </div>
          <div class="hotSellsBottom">
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/44c76095543ce335319223d9636e02fc.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/80a3c89167c2d45a7c2d20ac8cf3b02c.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png" alt="">
            </div>
            <div class="hotSellsBottomItem">
              <span>居家生活馆</span>
              <img src="https://yanxuan-item.nosdn.127.net/659500940eba07cf9b9940e996d4bc66.png" alt="">
            </div>
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name:"hotsell"

}
</script>

<style lang="stylus" scoped>
.hotsell
  width 100%
  background-color #fff
  margin-top 20px
  padding 20px
  .hotsell-title
    padding 30px 
    font-size 30px
  .hotSells
    .hotSellsTop
      height 200px
      display flex
      .hotSellsTopL
        height 200px
        width 340px
        background-color #F9F3E4
        display flex
        align-items center
        span 
          font-size 30px
          margin-left 30px
        img 
          width 200px
          height 200px
      .hotSellsTopR
        background-color #EBEFF6 !important
        margin-left 10px
    .hotSellsBottom
      width 100%
      display flex
      .hotSellsBottomItem
        width 165px
        height 180px
        background-color #EBEFF6
        margin-right 10px
        margin-top 10px
        text-align center
        span 
          margin-top 20px
          display inline-block
        img 
          width 120px
          height 120px
          



</style>