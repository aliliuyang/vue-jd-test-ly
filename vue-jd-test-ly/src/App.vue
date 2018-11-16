<template>
  <div id="app">
      <router-view></router-view>
      <TabBottonView v-show="showTab"></TabBottonView>
  </div>
</template>

<script>
    import TabBottonView from './components/TabBottom'
    import {mapState,mapGetters,mapActions} from 'vuex';
export default {
  name: 'App',
    data(){
      return {

      }
    },
    computed :{
//        ...mapState(['isShowTab']),
        ...mapGetters(['showTab','hideTab'])
    },
    watch:{
        $route(to){
            if(to.path.indexOf('detail') == -1){//返回的结果没有detail
                this.$store.dispatch('showtab')
            }else{
                this.$store.dispatch('hidetab')
            }
        }
    },
    methods:{
        ...mapActions(['hidetab','showtab'])
    },
    components:{
        TabBottonView
    }
}
</script>

<style lang="less">
    @import './assets/css/mixin.less';
    .mint-msgbox-header{
        padding:1rem 0 0;
        .mint-msgbox-title{
            .px2rem(font-size,32);
        }
    }
    .mint-msgbox-message{
        .px2rem(line-height,72);
        .px2rem(font-size,32);
    }
    .mint-msgbox-btns{
        .px2rem(height,80);
        .px2rem(padding-top,8);
        .px2rem(padding-bottom,8);
        .px2rem(font-size,32);
    }
</style>
