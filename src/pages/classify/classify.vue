<template>
  <div>
    <v-classifySearch></v-classifySearch>
    <v-classifyBody></v-classifyBody>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import classifySearch from "./classifySearch"
import classifyBody from "./classifyBody"
import Footer from "components/indexFooter/indexFooter"

export default {
  name:"classify",
  components:{
    "v-classifySearch":classifySearch,
    "v-classifyBody":classifyBody,
    "v-Footer":Footer
  }
}
</script>

<style lang="stylus" scoped>
  
</style>