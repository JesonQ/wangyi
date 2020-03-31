<template>
    <footer class="footer_guide border-1px">
        <a @click="goto(`/home`)"  :class="{on:$route.path === `/home`}"  href="javascript:;" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-shouye"></i>
            </span>
            <span>主页</span>
        </a>
        <a @click="goto(`/classify`)" :class="{on:$route.path === `/classify`}" href="javascript:;" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-fenlei"></i>
            </span>
            <span>分类</span>
        </a>
        <a @click="goto(`/buy`)"  :class="{on:$route.path === `/buy`}" href="javascript:;" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-mai"></i>
            </span>
            <span>值得买</span>
        </a>
        <a @click="goto(`/cart`)" :class="{on:$route.path === `/cart`}" href="javascript:;" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
        </a>
        <a @click="goto(`/user`)" :class="{on:$route.path === `/user`}" href="javascript:;" class="guide_item">
            <span class="item_icon">
              <i class="iconfont icon-geren"></i>
            </span>
            <span>个人</span>
        </a>
    </footer>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            //编程式导航
            goto(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .footer_guide
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 100px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            &.on
                color red !important
            span
                font-size 30px
                margin-top 2px
                .iconfont
                    font-size 50px
</style>