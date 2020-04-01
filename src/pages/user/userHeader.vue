<template>
    <div class="headerNav">
      <div class="headerNavL">
        <a href="" @click="goto(`/home`)">
          <i class="iconfont icon-shouye" style="font-size:25px"></i>
        </a>
      </div>
      <div class="headerNavc">

      </div>
      <div class="headerNavr">
        <div class="search">
          <i class="iconfont icon-search" style="font-size:25px"   @click="goto(`/maskSearch`)"></i>
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
      this.$router.push(path)
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
      justify-content space-between
      padding 0 20px
      background #fff
      .headerNavL
        line-height 100px
        width 100px
        height 100%
        color #666
        margin-left 10px
      .headerNavc
        width 200px
        height 60px
        text-align center
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp')
        background-size cover
      .headerNavr
        display flex
        color #666
        margin-left 20px
        .search
          margin-right 40px  
</style>