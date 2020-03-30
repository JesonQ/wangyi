<template>
  <div id="home">
    <v-search></v-search>
    <v-headerNav></v-headerNav>
    <div class="indexScrollWrap">
      <div class="indexScrollInner">
        <v-swiper></v-swiper>
        <v-grow></v-grow>
        <v-kingKongModule></v-kingKongModule>
        <v-indexBigPromotionModule></v-indexBigPromotionModule>
        <v-newShare></v-newShare>
        <v-hotsell></v-hotsell>
        <v-limitBuy></v-limitBuy>
        <v-newProduct></v-newProduct>
        <v-sellershop></v-sellershop>
        <v-indexFooter></v-indexFooter>
      </div>
    </div>
  </div>
</template>

<script>
import search from "./search"
import headerNav from "./headerNav"
import swiper from "./swiper"
import grow from "./grow"
import kingKongModule from "./kingKongModule"
import indexBigPromotionModule from "./indexBigPromotionModule"
import newShare from "./newShare"
import hotsell from "./hotsell"
import limitBuy from "./limitBuy"
import newProduct from "./newProduct"
import sellershop from "./sellershop"
import indexFooter from "./indexFooter"
// 主页滚动
import BScroll from 'better-scroll'
export default {
  name:"home",
  methods:{
    indexScroll(){
      let scroll = new BScroll('.indexScrollWrap',{
        scrollY: true,
        click: true
      })
    }
  },
  mounted(){
    this.indexScroll()
  },
  components:{
    "v-search":search,    // home search
    "v-headerNav":headerNav,
    "v-swiper":swiper,
    "v-grow":grow,
    "v-kingKongModule":kingKongModule,
    "v-indexBigPromotionModule":indexBigPromotionModule,
    "v-newShare":newShare,
    "v-hotsell":hotsell,
    "v-limitBuy":limitBuy,
    "v-newProduct":newProduct,
    "v-sellershop":sellershop,
    "v-indexFooter":indexFooter,
  }
}
</script>

<style lang="stylus">
  .indexScrollWrap
    height calc(100vh - 103px)
    overflow hidden
    background-color #f1f1ff
</style>