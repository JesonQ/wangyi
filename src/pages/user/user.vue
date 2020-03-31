<template>
  <div>
    <v-userHeader></v-userHeader>
    <v-loginpage></v-loginpage>
    <v-loginShare></v-loginShare>
  </div>
</template>

<script>
import userHeader from "./userHeader.vue"
import loginpage from "./loginpage.vue"
import loginShare from "./loginShare.vue"

export default {
  name:"users",
  components:{
    "v-userHeader":userHeader,
    "v-loginpage":loginpage,
    "v-loginShare":loginShare,
  }
}
</script>

<style lang="stylus" scoped>
  
</style>