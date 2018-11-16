<template>
    <div class="home">
        <!--头部搜索框-->
        <HomeHeaderView></HomeHeaderView>
        <!--banner轮播-->
        <HomeBannerView></HomeBannerView>
        <!--nav导航-->
        <HomeNavView></HomeNavView>
        <!--商品区-->
        <HomeMainView></HomeMainView>
    </div>

</template>

<script>
    import HomeHeaderView from './HomeHeader.vue'
    import HomeBannerView from './HomeBanner.vue'
    import HomeNavView from './HomeNav.vue'
    import HomeMainView from './HomeMain.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    HomeHeaderView,
    HomeBannerView,
    HomeNavView,
    HomeMainView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
