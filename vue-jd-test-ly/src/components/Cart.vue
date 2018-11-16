<template>
    <div class="cart">
        <DetailHeaderView :title="title" :style="styleA"></DetailHeaderView>
        <div class="cart-login">
            <span>登录后可同步电脑与手机购物车中的商品</span>
            <a href="#">登录</a>
        </div>

     </div>
</template>

<script>
    import DetailHeaderView from "./DetailHeader";
    export default {
        data (){
            return {
                title:'购物车',
                styleA:{
                    background:'#F3F5F7'
                }
            }
        },
        components:{
            DetailHeaderView
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';

    .cart-login{
        text-align: center;
        margin-top:88px;
        width:100%;
       .px2rem(height,84);
       .px2rem(line-height,84);
        background:#F3F5F7;
        a{
            background: #f15353;
            padding:10px 12px;
            color:#fff;
        }
    }
</style>