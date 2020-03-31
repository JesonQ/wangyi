<template>
  <div class="kingKongModule">
    <div class="kingKongTop">
      <div class="KingItem" v-for="(kingKong,index) in kingKongList" :key="index">
          <img :src="kingKong.picUrl" alt="">
          {{kingKong.text}}
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name:"kingKongModule",
  data() {
    return {
      kingKongList:[]
    }
  },
  methods:{
    async getkingKongList(){
      let kingKongListData = await this.$http.home.getIndex()
      console.log(kingKongListData.kingKongModule.kingKongList)
      this.kingKongList = kingKongListData.kingKongModule.kingKongList
    }
  },
  mounted(){
    this.getkingKongList()
  }

}
</script>

<style lang="stylus" scoped>
.kingKongModule
  width 100%
  height 340px
  padding 0 20px
  box-sizing border-box
  background-color #fff
  .kingKongTop
    .KingItem
      display flex
      flex-direction column
      width 110px
      height 156px
      text-align center
      padding 10px 15px
      float left
      img 
        width 110px
        height 110px
        margin-bottom 10px


</style>