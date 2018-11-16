<template>
    <div class="cart clearfix">
        <ul>
            <li>
                <a href="#">
                    <em class="one"></em>
                    <span>卖家</span>
                </a>
                <a href="#">
                    <em class="two"></em>
                    <span>关注</span>
                </a>
                <a href="#">
                    <em class="three"></em>
                    <span>购物车</span>
                </a>
            </li>
        </ul>
        <div class="btn-box">
            <a href="/cart" class="add">加入购物车</a>
            <a href="#" class="pay">立即购买</a>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {}
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .cart{
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        .px2rem(height,120);
        border-top:1px solid #BFBFBF;
        background:#fff;
        ul{
            width:50%;
            height:100%;
            float:left;
            li{
                display: inline-flex;
                height:100%;
                a{
                    width:100%;
                    height:100%;
                    text-align: center;
                    margin: 0 0.3rem;
                    .one{
                        background-position:-0.5333rem 0.2rem;
                    }
                    .two{
                        background-position:-1.2rem 0.2rem;
                    }
                    .three{
                        background-position:0.39rem -0.53333rem;
                        .px2rem(width,80);
                        .px2rem(height,40);
                        .px2rem(margin-top,20);
                        .px2rem(margin-right,23);
                    }
                    em{
                        .px2rem(width,60);
                        .px2rem(height,60);
                        display: block;
                        background-image:url(../assets/images/cart_sprits_all.png);
                        background-repeat: no-repeat;
                        background-size: 2.66rem 2.66rem;
                        margin-bottom:11px;
                    }
                    span{
                        .px2rem(font-size,30);
                        color: #333;
                    }
                }
            }
        }
        .btn-box{
            width:50%;
            height:100%;
            float:right;
            .px2rem(line-height,120);
            .px2rem(font-size,32);

            .add{
                float:left;
                width:50%;
                height:100%;
                background: #FFB03F;
                color: #fff;
                text-align: center;
            }
            .pay{
                float:right;
                width:50%;
                height:100%;
                background: #F23030;
                color: #fff;
                text-align: center;
            }
        }
    }
</style>