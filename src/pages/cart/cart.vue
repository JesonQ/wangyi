<template>
  <div>
    <v-cartHeader></v-cartHeader>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import cartHeader from "./cartHeader.vue"
import Footer from "components/indexFooter/indexFooter"
export default {
  name:"cart",
  components:{
    "v-Footer":Footer,
    "v-cartHeader":cartHeader,
  }
}
</script>

<style lang="stylus" scoped>
  
</style>