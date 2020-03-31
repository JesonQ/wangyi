<template>
  <div class="grow">
    <div class="growItem" v-for="(growItem,index) in growList" :key="index">
      <img :src="growItem.icon" alt="">
      <span>{{growItem.desc}}</span>
    </div>
  </div>
</template>

<script>
import "@/common/fonts/iconfont.css"

export default {
  name:"grow",
  data() {
    return {
      growList:[]
    }
  },
  methods:{
    async getgrowList(){
      let getgrowListData = await this.$http.home.getIndex()
      console.log(getgrowListData.policyDescList)
      this.growList = getgrowListData.policyDescList
    }
  },
  mounted(){
    this.getgrowList()
  }
}
</script>

<style lang="stylus" scoped>
  .grow
    height 72px
    width 100%
    padding 0 20px
    box-sizing border-box
    background-color #fff
    display flex
    align-items center
    justify-content space-around
    .growItem
      img 
        width 32px
        height 32px
        vertical-align middle
      span 
        margin-right 10px
        display inline-block
        vertical-align middle

</style>