<template>
  <div class="maskSearch">
    <form action="">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="百万好物,搜索便知..." class="search">
      <span class="cancle" @click="cancle">取消</span>
    </form>
    <div class="hotSearch">
      <div class="hotTitle">热门搜索</div>
      <ul class="hotList">
        <li>精辟偶家</li>
        <li>精辟偶家</li>
        <li>精辟偶家精辟偶家</li>
        <li>水电</li>
        <li>精辟偶家</li>
        <li>他人员</li>
        <li>精辟偶家</li>
        <li>精辟偶家</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"maskSearch",
  methods:{
    cancle(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
body
  background-color #999
  .maskSearch
    width 100%
    height 100%
    // background-color pink
    padding 20px 20px
    form 
      position relative
      .icon-search
        position absolute
        left 40px
        top 18px
        font-size 30px
      .search
        width 500px
        height 60px
        background-color #F4F4F4
        padding-left 80px
        font-size 30px
        color #999
      .cancle
        margin-left 30px
        font-size 30px
        color #666
    .hotSearch
      margin 30px 0
      color #999
      font-size 30px
      .hotList
        margin-top 30px
        overflow hidden
        color #666
        li 
          float left
          padding 10px
          border 1px solid #999
          margin 10px 30px 10px 0
          color #666

</style>