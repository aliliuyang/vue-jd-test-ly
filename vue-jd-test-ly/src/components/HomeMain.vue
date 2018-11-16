<template>
    <div class="main">
        <div class="list">
            <div class="Second-kill">
                <img src="../assets/images/jd_skill.png" alt="">
                <strong>六点场</strong>
                <span>00:21:43</span>
            </div>
            <div class="Second-kill-commodity">
                <ul>
                    <li v-for="item in hotData">
                        <router-link :to="'/detail/'+item.product_id">
                            <img v-lazy="item.product_img_url">
                            <p>
                                <i class="new-money-icon">¥</i>
                                <span class="new-price">{{item.product_price}}</span>
                            </p>
                            <p>
                                <i class="old-money-icon">¥</i>
                                <del class="old-price">{{item.product_uprice}}</del>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="Recommend">
                <p>为你推荐</p>
                <div class="Recommend-main">
                    <router-link :to="'/detail/'+itemData.product_id"  v-for="(itemData,key) in mainData" :key="key">
                        <div class="Recommend-main-left">
                            <img v-lazy="itemData.product_img_url">
                            <p class="commodity-news">{{itemData.product_name}}</p>
                            <p class="commodity-price">¥{{itemData.product_price}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getHomeMainData} from '../config/api';
    export default {
        data (){
            return {
                hotData:[],
                mainData:[]
            }
        },
        mounted(){
            this.getData()
        },
        methods:{
            getData(){
                  let that = this;
//                this.$http.get('/home').then((res) => {
//
//                    this.hotData.push(res.data[0])
//                    this.hotData.push(res.data[1])
//                    this.hotData.push(res.data[2])
//                    this.hotData.push(res.data[3])
//                    this.mainData=res.data
//
//                },(err) => {
//                    console.log(err)
//                })
                getHomeMainData().then((res) =>{
//                    console.log(res[0])
                    this.hotData.push(res[0])
                    this.hotData.push(res[1])
                    this.hotData.push(res[2])
                    this.hotData.push(res[3])
                    this.mainData=res
                })
            }
        },


    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .main{
        width:100%;
        .px2rem(margin-top,20);
        .list{
            margin:0 0.066rem;
            .Second-kill{
                .px2rem(height,60);
                box-shadow: 0 0 1px 1px #e0e0e0;
                border-bottom:1px solid #e0e0e0;
                img{
                    .px2rem(width,120);
                    .px2rem(height,60);
                    vertical-align: middle;
                }
            }
            .Second-kill-commodity{
                width:100%;
                .px2rem(padding-top,20);
                ul{
                    display: flex;
                    justify-content: space-around;
                    li{
                        a{
                            display: block;
                            .px2rem(width,160);
                            .px2rem(height,160);
                            text-align: center;
                            img{
                                width:100%;
                            }
                            .new-money-icon{
                                color:#F11938;
                                .px2rem(font-size,24);
                            }
                            .new-price{
                                color:#F11938;
                                .px2rem(font-size,32);
                            }
                            .old-money-icon{
                                color:#aaa;
                                .px2rem(font-size,24);
                            }
                            .old-price{
                                color:#aaa;
                                .px2rem(font-size,32);
                            }
                        }
                    }
                }
            }
        }

    }
    .Recommend{
        width:100%;
        .px2rem(padding-top,100);
        p{
            .px2rem(padding-bottom,30);
        }
        .Recommend-main{
            width:95%;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            flex-wrap: wrap;
            a{
                display: block;
                width:44%;
                padding:0 3%;
            }
            .Recommend-main-left{
                img{
                    display: block;
                    width:100%;
                }
                .commodity-news{
                    width:100%;
                    text-align: justify;
                    .px2rem(font-size,28);
                    .px2rem(line-height,40);
                    color:#333;
                }
                .commodity-price{
                    width:100%;
                    text-align: left;
                    color:#F11938;
                    font-weight:bold;
                }

            }
        }
    }
</style>