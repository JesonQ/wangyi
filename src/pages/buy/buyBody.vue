<template>
  <div class="headerBuy">
    <v-buyHeader></v-buyHeader>
    <div class="header-bottomScroll">
      <div class="header-swiper">
        <div class="youbuy">
          <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
          <div class="u-text">严选好物&nbsp;用心生活</div>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="buyNav">
            <div class="swiper-slide" v-for="item in buyNav" :key="item.id">
                <img :src="item.picUrl" alt="">
                <p class="Tbook">{{item.mainTitle}}</p>
                <p class="Tphone">{{item.viceTitle}}</p>
            </div>            
          </div>  
          <div class="swiper-pagination"></div>              
        </div>                                     
        <div class="buy-looks" v-if="buyList[0]">
          <div class="buyLeft">
            <div class="looksItem"  v-for="(buyItem,index) in buyList[0].topics">
              <img :src="buyItem.picUrl" alt="">
              <span>{{buyItem.title}}</span>
              <div  class="m-userInfo">
                <img :src="buyItem.avatar" alt="">
                <div class="m-userName">{{buyItem.nickname}}</div>
                <div class="m-upText">{{buyItem.readCount}}</div>
              </div>
            </div>
          </div>
          <div class="buyRight buyLeft">
              <div class="looksItem" v-for="(buyItem,index) in buyList[1].topics">
                <img :src="buyItem.picUrl" alt="">
                <span>{{buyItem.title}}</span>
                <div  class="m-userInfo">
                  <img :src="buyItem.avatar" alt="">
                  <div class="m-userName">{{buyItem.nickname}}</div>
                  <div class="m-upText">{{buyItem.readCount}}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import BScroll from 'better-scroll'
import buyHeader from "./buyHeader"
import axios from "axios"
export default {
  name:"headerBuy",
  data() {
    return {
      buyNav:[],
      buyList:[],
    }
  },
  methods:{
    buyScroll(){
      new BScroll('.header-bottomScroll', {
        scrollY: true,
        click:true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
          }
      })
    },
    async getBuyNav(){
      let getBuyNavData = await this.$http.home.getBuyNav()
      // console.log(getBuyNavData)
      this.buyNav = getBuyNavData.data.navList
    },
    async getBuyList(){
      let getBuyListData = await this.$http.home.getBuyList({page:5,size:1})
      if(getBuyListData.code === "200"){
        console.log(getBuyListData.data.result)
        this.buyList = getBuyListData.data.result
      }
         
    },
    swiperPlay(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        slidesPerView:4,  //每页显示张数
        slidesPerColumn:2,   //几行
        pagination:'.swiper-pagination',
      })
    }
  },
  mounted(){
    this.$nextTick(async()=>{
      await this.getBuyNav()  //获取轮播图信息
      await this.getBuyList()  //获取瀑布流信息
      this.swiperPlay()
      this.buyScroll()
    })
  },
  components:{
    "v-buyHeader":buyHeader
  }
}
</script>

<style lang="stylus" scoped>
  .headerBuy
    width 100%
    height 100%
    border-bottom 1px solid #666
    box-sizing border-box
    background #eee
    .header-bottomScroll
      height calc(100vh - 200px)
      overflow hidden
      box-sizing border-box
      .header-swiper
        width 100%
        box-sizing border-box
        background-image url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png")
        background-size 100% 500px
        background-repeat no-repeat
        padding 0 20px
        box-sizing border-box
        .youbuy
            padding-top 70px
            display flex
            align-items start
            height 60px
            margin-bottom 20px
            img 
              width 140px
              heiht 78px
              vertical-align bottom
              margin-left 20px
              margin-right 10px
            .u-text
              width 400px
              display inline-block
              font-size 40px
              color #fff
              margin-top 20px 
        .swiper-container
          width 100%
          height 500px
          background-color #fff
          border-radius 30px
          margin-bottom 30px
          .swiper-wrapper
            height 100%
            .swiper-slide
              width 180px
              height 220px
              text-align center
              color #666
              float left
              // margin-top 20px
              img 
                width 120px
                height 120px
                margin-top 15px
              .Tbook
                font-size 30px
                font-weight 700
                margin 10px 0
                color #333
        .buy-looks
          padding  0 20px 
          display flex
          flex-direction row
          .buyLeft
            height 100%
            width 350px
            margin-right 20px
            display flex
            flex-direction column
            .looksItem
              background #fff
              padding 13px
              border-radius 20px
              margin-bottom 20px
              box-sizing border-box
              img 
                width 100%
                height 100%
                border-radius 15px
              span
                font-size 30px
                display inline-block
                padding 20px 0 20px 20px
              .m-userInfo
                display flex
                align-items center
                img 
                  width 52px
                  height 52px
                  border-radius 50%
                  margin 0 20px
                .m-userName
                  margin 0 10px

 </style>