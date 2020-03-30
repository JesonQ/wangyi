<template>
  <div class="limitBuy">
    <div class="limitBuyTitle">
      <div class="time">
         <span>限时购</span>
      </div>
      <div class="more">
        更多>
      </div>
    </div> 
    <div class="limitBuyBottom">
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/cb79f5e708891a5e214cb3c4467b3e67.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
    </div>
    <div class="limitBuyBottom">
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/cb79f5e708891a5e214cb3c4467b3e67.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/b816e66efdb2e42fd0b81322fbf17c46.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
      <div class="limitBuyBItem">
        <img src="https://yanxuan-item.nosdn.127.net/d49af0b8b33b25fd8a41ec960f7f098b.png" alt="">
        <p>
          <span>¥49.9</span>
          <del>¥99.9</del>
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name:"limitBuy"
}
</script>

<style lang="stylus">
  .limitBuy
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
      height 300px
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
          span 
            font-size 20px
            color red
            margin 22px
          del 
            color #666
            font-size 20px

      

</style>