<template>
  <div class="classifyBody">
     <div class="classifyBodyL">
       <van-sidebar class="leftList"  v-model="activeKey" v-if="getCateList">
         <van-sidebar-item 
          
          class="listItemLeft"
          v-for="(getCateItem,index) in getCateList"
          :key="index"
          @click="sendId(getCateItem.id)"
          :title="getCateItem.name"
         >{{getCateItem.name}}</van-sidebar-item>
       </van-sidebar>
     </div>
     <div class="classifyBodyR">
      <div 
      class="inner" 
      v-if="getCateListR"
      >
        <img :src="getCateListR.imgUrl">
        <div class="list">
          <div 
          class="listItemRight" v-for="(item,index) in getCateListR.subCateList"
          :key="index"
          >
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
//右侧点击高亮效果
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  name:"classifyBody",
  data() {
    return {
      getCateList:[], //所有数据
      getCateListR:{}, //右侧数据
      navId: 0,
      activeKey: 0, //高亮
    }
  },
  created(){

  },
  methods:{
    classLScroll(){
      //左侧
      new BScroll('.classifyBodyL',{
        scrollY: true,
        click: true,
      })
      //右侧
      new BScroll('.classifyBodyR',{
        scrollY: true,
        click: true,
      })
    },
    async getCateListMeth(){
      let getCateListData = await this.$http.home.getCateList()
      // console.log(getCateListData)
      this.getCateList = getCateListData
      this.getCateListR = getCateListData[0]

      console.log(getCateListData);
      
      // 左侧默认刷新 触发一个点击事件
      // this.navId = this.getCateList[0].id
      // console.log(this.navId)
      
    },
    //左侧向右侧传输id
    sendId(id){
      let rightData = this.getCateList && this.getCateList.find((item)=>{
        if(item.id === id){
          return item
        }
      })
      // 右侧数据
      this.getCateListR = []
      this.getCateListR = rightData

    }
    
  },
  
  mounted(){
    this.$nextTick(()=> {
      this.classLScroll()      //纵向滚动
      this.getCateListMeth()   // 获取左侧数据
      // this.sendId()   
               // 初始化id    
    })
  },
 
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.classifyBody
  display flex
  overflow hidden
  margin-top 20px
  .classifyBodyL
    height calc(100vh - 280px)
    width 170px
    border-right 2px solid #eee
    .leftList 
      clear both
      width 170px
      .listItemLeft
        clear both
        margin 20px 0
        text-align left
        padding-left 40px
        font-size 12px
        width 170px 
  .classifyBodyR
    padding 20px
    height calc(100vh - 280px)
    .inner
      overflow hidden
      img 
        width 528px
        height 192px
        margin-bottom 20px
      .list
        height 100%
        .listItemRight
          text-align center
          width 144px
          height 216px
          padding 15px
          float left
          img 
            width 144px
            height 144px
          span 
            height 30px
            display inline-block
            line-height 30px

</style>