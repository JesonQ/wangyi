<template>
  <div>
    <v-userHeader></v-userHeader>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import userHeader from "./userHeader.vue"
import Footer from "components/indexFooter/indexFooter"

export default {
  name:"users",
  components:{
    "v-userHeader":userHeader,
    "v-Footer":Footer,
  }
}
</script>

<style lang="stylus" scoped>
  
</style>