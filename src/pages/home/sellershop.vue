<template>
  <div class="sellershop">
    <div class="sellershopT">
      <div class="sellershopTItem">
        <span class="sellershopTItemT">严选超市</span>
        <span class="sellershopTItemC">十元凑好货</span>
        <div class="sellershopTItemB">
          <img src="https://yanxuan-item.nosdn.127.net/758b098102d7b82ccabcfd95b25b02c3.png" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/5191271233a26fb5b30708cb27625816.png" alt="">
        </div>
      </div>      
      <div class="sellershopTItem">
        <span class="sellershopTItemT">严选超市</span>
        <span class="sellershopTItemC">十元凑好货</span>
        <div class="sellershopTItemB">
          <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png" alt="">
        </div>
      </div>
    </div>
    <div class="sellershopT">
      <div class="sellershopTItem">
        <span class="sellershopTItemT">严选超市</span>
        <span class="sellershopTItemC">十元凑好货</span>
        <div class="sellershopTItemB">
          <img src="https://yanxuan-item.nosdn.127.net/758b098102d7b82ccabcfd95b25b02c3.png" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png" alt="">
        </div>
      </div>      
      <div class="sellershopTItem">
        <span class="sellershopTItemT">严选超市</span>
        <span class="sellershopTItemC">十元凑好货</span>
        <div class="sellershopTItemB">
          <img src="https://yanxuan-item.nosdn.127.net/a4b147d0b5b2bcfa418d28e8f78900c9.png" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/fde00441f1d0c60c2a06426144de8495.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name:"sellershop"

}
</script>

<style lang="stylus">
  .sellershop
    width 100%
    padding 20px
    margin-top 20px
    background-color #fff
    .sellershopT
      height 264px
      display flex
      margin-top 20px
      .sellershopTItem
        width 342px
        height 264px
        background-color #F6F6F6
        padding-top 10px
        margin-right 10px
        span
          display block
          margin 20px
        .sellershopTItemT
          font-size 32px
        .sellershopTItemC
          font-size 14px
        .sellershopTItemB
          display flex
          img 
            width 150px
            height 150px

</style>