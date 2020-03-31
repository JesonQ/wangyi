<template>
  <div class="loginpage">
    <div class="loginTop">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      <button class="login iconfont icon-shouji">手机号快捷登录</button>
      <button class="email iconfont icon-mail">邮箱账号登录</button>
    </div>

  </div>
</template>

<script>
export default {
  name:"loginpage"
}
</script>

<style lang="stylus" scoped>
  .loginpage
    text-align center
    .loginTop
      position relative 
      img 
        width 266px
        height 90px
        padding-top 160px
        padding-bottom 320px
        display block
        margin 0 auto
      .login
        width 680px
        height 100px
        background-color #DD1A21
        display block
        border 0 
        position relative
        left 50%
        top 40%
        margin-left -340px
        margin-top -50px
        font-size 20px
        color #fff
        &.icon-shouji:before
          font-size 40px
          position absolute
          left 210px
          top 30px
      .email
        width 680px
        height 100px
        background-color #fff
        display block
        border #DD1A21 1px solid  
        position relative
        left 50%
        top 80%
        margin-left -340px
        margin-top 50px
        font-size 20px
        color #DD1A21
        &.icon-mail:before
          font-size 40px
          position absolute
          left 210px
          top 30px

</style>