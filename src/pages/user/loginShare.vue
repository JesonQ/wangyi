<template>
  <div class="loginShare">
    <div class="wechat">
      <i class="iconfont icon-weixin"></i>
      <span>微信</span>
    </div>
    <div class="QQ">
      <i class="iconfont icon-qq"></i>
      <span>QQ</span>
    </div>
    <div class="weibo" style="border:0">
      <i class="iconfont icon-weibo"></i>
      <span>微博</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"loginShare"
}
</script>

<style lang="stylus" scoped>
  .loginShare
    padding 0 100px
    box-sizing border-box
    width 100%
    height 30px
    display flex
    justify-content space-around
    position fixed
    bottom 50px
    left 0
    font-size 30px
    div
      padding-right 50px
      border-right 1px solid #666 
      color #999
      i 
        margin-right 20px
        

</style>