<template>
  <div class="limitBuy">
    <div class="limitBuyTitle">
      <div class="time">
        <span>限时购</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item1 item">{{ timeData.hours }}</span>
            <span class="item2 item">{{ timeData.minutes }}</span>
            <span class="item3 item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
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
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
export default {
  name:"limitBuy",
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
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
        position relative
        .item 
          display inline-block
          width 40px
          height 40px
          text-align center
          line-height 40px
          color #fff
          font-size 12px
          text-align center
          background-color #000
          position absolute
          top -5px
          &.item1
            left 120px
          &.item2
            left 170px
          &.item3
            left 220px
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