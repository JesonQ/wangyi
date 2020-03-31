<template>
  <div class="search">
      <form action="">
        <input type="text" placeholder="搜索商品,共34534件好物">
        <i></i>
      </form>
  </div>
</template>

<script>
export default {
  name:"search"
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 100%
  margin 30px 0
  padding 0 20px
  box-sizing border-box
  form
    width 100%
    font-size 16px
    input   
      margin-left 6px
      margin-right 24px
      width 100%
      height 70px
      line-height 70px
      padding-left 35%
      box-sizing border-box
      background-color #ededed 
      background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
      background-repeat no-repeat
      background-size 30px 30px
      background-position 30% center
      font-size 30px
</style>