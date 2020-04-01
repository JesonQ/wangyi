<template>
  <div class="search">
      <h1 class="logo">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      </h1>
      <form action="" class="homeF">
        <input type="text" placeholder="搜索商品,共23423款好物">
        <i></i>
      </form>
      <button class="loginBtn" @click="goto(`/user`)">登录</button>
  </div>
</template>

<script>
export default {
  name:"search",
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  display flex
  padding 15px 30px
  align-items center
  h1 
    img
      width 138px
      height 40px
  .loginBtn
    width 100px
    height 40px
    font-size 14px
    padding 0px
    background rgba(0,0,0,0)
    border 1px solid red
    // border-radius 3px
    color red
  .homeF
    margin-left 20px
    input   
      font-size 14px
      // margin-left 10px
      margin-right 24px
      width 442px
      height 56px
      line-height 56px
      padding-left 20%
      text-align left
      box-sizing border-box
      background-color #ededed 
      background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
      background-repeat no-repeat
      background-size 30px 30px
      background-position 10% center

</style>