<template>
  <div class="grow">
    <div class="left">
      <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
      <span>网易自营品牌</span>
    </div>
    <div class="center">
      <i class="iconfont icon-duigou"></i>
      <span>网易自营品牌</span>
    </div>
    <div class="right">
      <i class="iconfont icon-qian"></i>
      <span>网易自营品牌</span>
    </div>
  </div>
</template>

<script>
import "@/common/fonts/iconfont.css"

export default {
  name:"grow"
}
</script>

<style lang="stylus" scoped>
  .grow
    height 72px
    width 100%
    padding 0 20px
    box-sizing border-box
    background-color #fff
    display flex
    align-items center
    justify-content space-around
    i 
      margin-right 10px
      display inline-block
      color red
</style>