<template>
    <div class="banner">
        <mt-swipe :auto="5000">
            <mt-swipe-item><img src="../assets/images/l1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l2.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l3.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l4.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l5.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l6.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l7.jpg" alt="" /></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/l8.jpg" alt="" /></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    data (){
      return {}
    },
    components:{
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
    }
  }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .home{
        width:100%;
        .mint-swipe{
            width:100%;
            .px2rem(height,364);
            img{
                width:100%;
                display: block;
            }
            .mint-swipe-indicator{
                .px2rem(width,14);
                .px2rem(height,14);
            }

        }

    }
</style>