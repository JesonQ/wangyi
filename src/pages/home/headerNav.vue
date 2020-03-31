<template>
  <div class="headerNav">
      <div class="nav-scroll">
        <span 
          v-for="(CategoryItem,index) in CategoryList" 
          class="navScrollItem"        
          :key="index"
        >{{CategoryItem.name}}</span>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"headerNav",
  data() {
    return {
      CategoryList:[]
    }
  },
  methods:{
    headerScroll(){
      let scroll = new BScroll('.headerNav',{
          scrollX: true,
          click: true
        })
    },
    async getCategoryData(){
      let getCategoryDatas = await this.$http.home.getCategoryDatas()
      // console.log(getCategoryDatas)
      this.CategoryList = getCategoryDatas
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.headerScroll()  //横向滚动
      this.getCategoryData() //nav数据

    })
  }
}
</script>

<style lang="stylus" scoped>
.headerNav
  width 100%
  height 60px
  padding 0 20px
  overflow hidden
  box-sizing border-box
  .nav-scroll
    height 60px
    display flex
    align-items center
    white-space nowrap
    width 2000px
    .navScrollItem
      display inline-block
      margin 0 20px
      padding 10px 0 
      &.active
        border-bottom 1px solid red
        color red
</style>