<template>
    <div class="headerNav">
      <div class="headerNavL">
        <a href="" @click="goto(`/home`)">
          <i class="iconfont icon-shouye" style="font-size:25px"></i>
        </a>
      </div>
      <div class="headerNavc">值得买</div>
      <div class="headerNavr">
        <div class="search">
          <i class="iconfont icon-search" style="font-size:25px"></i>
        </div>
        <div class="cart">
          <i class="iconfont icon-gouwuche" style="font-size:25px" @click="goto(`/cart`)"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:"buyHeader",
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .headerNav
      height 100px
      display flex
      align-items center
      text-align center
      padding 0 20px
      background #fff
      .headerNavL
        line-height 100px
        width 100px
        height 100%
        color #666
        margin-left 10px
      .headerNavc
        width 100%
        text-align center
        font-size 35px
      .headerNavr
        display flex
        color #666
        .search
          margin-right 40px  
</style>