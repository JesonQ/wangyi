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
              <div class="top">
                <img :src="item.picUrl" alt="">
                <p class="Tbook">{{item.mainTitle}}</p>
                <p class="Tphone">{{item.viceTitle}}</p>
              </div>
            </div>            
          </div>                
        </div>                                     
        <div class="buy-looks">
          <div class="buyLeft">
            <div class="looksItem">
              <img src="https://yanxuan.nosdn.127.net/17b1f75f167c06763a550486f197d852.jpg?imageView&thumbnail=345y345&quality=95" alt="">
              <span>周年品牌价值</span>
              <div  class="m-userInfo">
                <img src="http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48" alt="">
                <div class="m-userName">好物大赏</div>
                <div class="m-upText">82K</div>
              </div>
            </div>
          </div>
          <div class="buyRight buyLeft">
            <div class="looksItem">
              <img src="https://yanxuan.nosdn.127.net/17b1f75f167c06763a550486f197d852.jpg?imageView&thumbnail=345y345&quality=95" alt="">
              <span>周年品牌价值</span>
              <div  class="m-userInfo">
                <img src="http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48" alt="">
                <div class="m-userName">好物大赏</div>
                <div class="m-upText">82K</div>
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
      test:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    }
  },
  methods:{
    buyScroll(){
      new BScroll('.header-bottomScroll', {
        scrollY: true,
        click:true,
      })
    },
    swiperPlay(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        slidesPerView:4,  //每页显示张数
        // slidesPerColumnFill:"column",
        slidesPerColumn:2,
        // centeredSlidesBounds:true
      })
    },
    async getBuyNav(){
      let getBuyNavData = await this.$http.home.getBuyNav()
      console.log(getBuyNavData)
      this.buyNav = getBuyNavData.data.navList
    },
    async getBuyList(){
      let getBuyListData = await this.$http.home.getBuyList()
      // console.log(getBuyListData)
      this.buyList = getBuyListData   
    }
  },
  mounted(){
    this.swiperPlay()
    this.buyScroll()
    this.getBuyNav()  //获取轮播图信息
    this.getBuyList()  //获取瀑布流信息
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
      height calc(100vh - 120px)
      overflow hidden
      .header-swiper
        width 100%
        height 10000px
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
          .swiper-slide
            width 170px !important
            height 220px  !important
            .top
              width 170px
              height 200px
              text-align center
              color #666
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
          .buyLeft
            width 380px
            height 1000px
            margin-right 20px
            .looksItem
              background #fff
              padding-bottom 20px
              border-radius 20px
              margin-bottom 20px
              img 
                width 100%
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
                  margin 0 30px

 </style>