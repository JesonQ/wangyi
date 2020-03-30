<template>
  <div class="indexFooter">
    <div class="footerTop">
      <button style="margin-right:40px">下载APP</button>
      <button>电脑版</button>
    </div>
    <p>本版权最终归jason科技公司所有</p>
    <p>jason科技公司欢迎有志之士参与合作</p>
  </div>
</template>

<script>


export default {
  name:"indexFooter"

}
</script>

<style lang="stylus">
.indexFooter
  width 100%
  height 280px
  padding 30px 20px 100px 20px
  background-color #414141
  text-align center
  .footerTop
    width 100%
    height 62px
    text-align center
    padding-top 40px
    button 
      background-color rgba(0,0,0,0)
      border 2px solid #ffffff 
      border-radius 2px
      color #fff
      height 60px
      width 220px
      
  p
    color #cccccc
    margin-top 40px
    font-size 14px

</style>