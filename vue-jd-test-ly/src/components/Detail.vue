<template>
    <div class="detail">
        <DetailHeaderView :title="title"></DetailHeaderView>
        <div class="container">
            <div class="banner-container">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in bannerArr">
                            <img v-lazy="item.image_url" :key="item.image_url">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>

            <div class="main">
                <p>{{news.product_name}}</p>
                <div class="price-box clearfix">
                    <div class="price">
                        <em>￥</em><span>{{news.product_price}}.00</span>
                    </div>
                    <div class="Price-reduction">降价通知</div>
                </div>
            </div>
            <p class="introduce">
                {{news.product_detail}}
            </p>
        </div>
        <!--购物车-->
        <DetailCartView></DetailCartView>
    </div>
</template>

<script>
    import DetailHeaderView from './DetailHeader'
    import DetailCartView from './DetailCart'
    import {getDetailData} from '../config/api'
    export default {
        data (){
            return {
                title:'商品详情',

                bannerArr:[],
                news:{}
            }
        },
        methods:{

            getDetailData(id){
//                this.$http.get('/detail',{
//                    params:{
//                        mId:id
//                    }
//                }).then((res) => {
//                    this.bannerArr = res.data[0];
//                    this.news = res.data[1][0]
//                },(err) => {
//                    console.log(err)
//                })
                getDetailData({
                        mId:id
                }).then((res) => {
                    this.bannerArr = res[0]
                    this.news = res[1][0]
                })
            },
            bannerPlay(){
                var swiper = new Swiper('.swiper-container', {
                    pagination : '.swiper-pagination',
                    paginationType : 'fraction',
                    observer:true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            },

        },
        mounted(){
            this.getDetailData(this.$route.params.id)
            this.bannerPlay()


        },
        components:{
            DetailHeaderView,
            DetailCartView
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';

    .container{
        .px2rem(margin-bottom,120);
    }
    .banner-container{
        width:100%;
        margin-top:88px;

        .swiper-container{
            position: relative;
            .swiper-slide{
                width:100%;
                img{
                    width:100%;
                }
            }
            .swiper-pagination-fraction{
                position:absolute;
                .px2rem(bottom,40);
                left:85%;
                .px2rem(width,80);
                .px2rem(height,80);
                .px2rem(line-height,80);
                .px2rem(font-size,32);
                border-radius:50%;
                background:#eee;
                opacity: 0.5;
                color:#333;
                text-align: center;

            }
        }
    }
    .main{
        width:100%;
        p{
            width:96%;
            margin:0 auto;
            text-align: left;
            .px2rem(font-size,32);
            .px2rem(line-height,50);
            color:#333;
        }
        .price-box{
            width:100%;
            padding-top:4%;
            .price{
                float:left;
                margin-left:2%;
                em{
                    .px2rem(font-size,32);
                    color:#F23434;
                }
                span{
                    .px2rem(font-size,36);
                    color:#F23434;
                }
            }
            .Price-reduction{
                float:right;
                padding:20px 30px;
                text-align: center;
                color:#333;
                border:1px solid #eee;
                background:#f7f7f7;
                margin-right:2%;
            }
        }
    }
    .introduce{
        padding:20px;
        text-align: justify;
        color:#333;
        .px2rem(font-size,28);
        .px2rem(line-height,40);
        overflow-y: scroll;
    }
</style>