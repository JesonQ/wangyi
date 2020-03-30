<template>
  <div class="search">
      <h1 class="logo">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      </h1>
      <form action="">
        <input type="text" placeholder="点击探索..">
        <i></i>
      </form>
      <button class="loginBtn">登录</button>
  </div>
</template>

<script>
export default {
  name:"search"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  display flex
  padding 15px 30px
  align-items center

  h1 
    img
      width 138px
      height 40px
  form
    font-size 16px
    input   
      margin-left 6px
      margin-right 24px
      width 442px
      height 56px
      line-height 56px
      padding-left 70px
      box-sizing border-box
      background-color #ededed 
      background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
      background-repeat no-repeat
      background-size 30px 30px
      background-position 30px center
  .loginBtn {
    width 74px
    height 39px
    font-size 12px
    border 0
    background rgba(0,0,0,0)
    border 1px solid red
    // border-radius 1px
    color red
}
</style>