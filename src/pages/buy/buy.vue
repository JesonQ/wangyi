<template>
  <div>
    <v-buyBody></v-buyBody>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import buyBody from "./buyBody"

import Footer from "components/indexFooter/indexFooter"
export default {
  name:"buy",
  components:{
    "v-Footer":Footer,
    "v-buyBody":buyBody
  }
}
</script>

<style lang="stylus" scoped>
  
</style>