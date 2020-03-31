<template>
  <div class="classifyBody">
     <div class="classifyBodyL">
       <ul class="leftList">
         <li class="active">411专区</li>
         <li>猫人户</li>
         <li>京SDK</li>
         <li>就度搜</li>
         <li>少客服</li>
         <li>回答</li>
         <li>挖到回家</li>
         <li>美大客车</li>
         <li>如日</li>
         <li>新农村</li>
         <li>谁佛</li>
         <li>仓库大着</li>
         <li>内容</li>
         <li>回答</li>
         <li>挖到回家</li>
         <li>美大客车</li>
         <li>如日</li>
         <li>新农村</li>
         <li>谁佛</li>
         <li>仓库大着</li>
         <li>内容</li>
       </ul>
     </div>
     <div class="classifyBodyR">
      <img src="https://yanxuan.nosdn.127.net/9f4bcf0d57149499584d59478a606e9e.jpg">
      <div class="list">
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
        <div class="listItem">
          <img src="https://yanxuan.nosdn.127.net/d561c1c3c927137fe7d5b1447a7354a3.png" alt="">
          <span>充值特惠</span>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:"classifyBody",
  methods:{
    classLScroll(){
      //左侧
      new BScroll('.classifyBodyL',{
        scrollY: true,
        click: true,
        useTransition:false        
      })
      //右侧
      new BScroll('.classifyBodyR',{
        scrollY: true,
        click: true,
        useTransition:false        
      })
    }
  },
  mounted(){
    this.classLScroll()
  },  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.classifyBody
  display flex
  overflow hidden
  .classifyBodyL
    width 170px
    border-right 2px solid #eee
    height calc(100vh - 134px)
    margin 30px 0
    ul 
      li
        height 50px
        line-height 50px
        margin 20px 0
        text-align left
        padding-left 40px
        font-size 28px
        &.active
          border-left 2px solid red 
  .classifyBodyR
    padding 20px
    img 
      width 528px
      height 192px
    .list
      // display flex
      .listItem
        text-align center
        width 144px
        height 216px
        img 
          width 144px
          height 144px

</style>