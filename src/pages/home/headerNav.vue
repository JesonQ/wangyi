<template>
  <div class="headerNav">
      <div class="nav-scroll">
        <span class="navScrollItem underLine">推荐</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">商贸商贸</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">作品</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">工人工人工人</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">商贸</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">作品</span>
        <span class="navScrollItem">流行</span>
        <span class="navScrollItem">工人</span>
        <span class="navScrollItem">流行</span>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"headerNav",
  methods:{
    headerScroll(){
      let scroll = new BScroll('.headerNav',{
          scrollX: true,
          click: true
        })
    }
  },
  mounted(){
    this.headerScroll()
  }
}
</script>

<style lang="stylus" scoped>
.headerNav
  width 100%
  height 60px
  background-color skyblue 
  padding 0 20px
</style>