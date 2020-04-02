<template>
  <div class="headerNav">
      <div class="navleft">
        <div class="nav-scroll">
          <router-link 
            v-for="(CategoryItem,index) in CategoryList" 
            class="navScrollItem"        
            :key="index"
            to="home/"
          >{{CategoryItem.name}}</router-link>>
        </div>
      </div>
      <div 
        class="toggle iconfont icon-jiantouxiangxia"
        @click="toggle"
      ></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:"headerNav",
  data() {
    return {
      CategoryList:[],
      up:true
    }
  },
  methods:{
    headerScroll(){
      let scroll = new BScroll('.navleft',{
          scrollX: true,
          click: true
        })
    },
    async getCategoryData(){
      let getCategoryDatas = await this.$http.home.getCategoryDatas()
      // console.log(getCategoryDatas)
      this.CategoryList = getCategoryDatas
    },
    // home toggle
    toggle(){
      this.up = !this.up
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
  position relative
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
  .toggle
    width 100px
    height 60px
    background-color #fff
    position absolute
    right 0
    top 0
    z-index 99
    text-align center
    line-height 60px
</style>