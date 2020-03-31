<template>
  <div class="newProduct">
    <div class="limitBuyTitle">
      <div class="time">
         <span>新品首发</span>
      </div>
      <div class="more">
        更多>
      </div>
    </div> 
    <div class="limitBuyBottom">
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span class="title">发现有问题情非得已</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/ddfc90d04c50e8542f187548284bec60.png" alt="">
        <p>
          <span class="title">话费卡电视剧后方可回复大理石</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span class="title">回复是水电费海口市</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
    </div>
    <div class="limitBuyBottom">
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/bf20ea4e52bcf593a06480bb382ff1d5.png" alt="">
        <p>
          <span class="title">花覅额黑风减肥哦你</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span class="title">法国人是大润发辅导费</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/bf20ea4e52bcf593a06480bb382ff1d5.png" alt="">
        <p>
          <span class="title">kg肉片加底色</span>
          <span class="price">¥49.9</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name:"newProducts"
}
</script>

<style lang="stylus" scoped>
  .newProduct
    width 100%
    background-color #fff
    padding 0 20px
    box-sizing border-box
    margin-top 20px
    .limitBuyTitle
      width 100%
      height 100px
      display flex
      align-items center
      justify-content space-between
      .time
        font-size 30px
    .limitBuyBottom
      display flex
      height 400px
      .limitBuyBItem
        background-color #F5F5F5
        width 216px
        height 216px
        margin-right 25px
        margin-top 10px
        img
          width 216px
          height 216px
          margin-bottom 10px
        p 
          height 60px
          .title 
            font-size 20px
            display block
          .price 
            color red
            font-size 30px
            display block
            margin 10px 0


      

</style>