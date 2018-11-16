<template>
    <div class="cate-right">
        <div class="container">
            <div class="banner">
                <img src="../assets/images/banner_1.png" alt="">
            </div>
            <div class="list">
                <ul>
                    <li v-for="item in listArr">
                        <router-link :to="'/detail/'+item.product_id">
                            <img v-lazy="item.product_img_url" :key="item.product_img_url">
                            <p>{{item.product_name}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data (){
            return {
                listArr:[],
            }
        },
        created(){

        },
        watch:{
            $route(to){
                var reg = /category\/\d+/;
                if(reg.test(to.path)){
                    var categoryId = this.$route.params.id || 0;
                }
                this.getListData(categoryId)
            }
        },
        methods:{
            getListData(id){
                var that = this;
                this.$http.get('/categorygoods',{
                    params:{
                        mId: id
                    }
                }).then((res) => {
                    this.listArr = res.data;
                },(err) => {
                    console.log(err)
                })
            }

        },
        mounted(){
            this.getListData(this.$route.params.id)
        },
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .cate-right{
        .px2rem(width,580);
    }
    .container{

        .banner{
            .px2rem(padding,10);
            img{
                width:100%;
            }
        }
        .list{

            ul{
                display: flex;
                justify-content:space-between;
                flex-direction: row;
                flex-wrap: wrap;
                height: 800px;
                overflow: hidden;
                overflow-y: scroll;
                li{
                    width:45%;
                    .px2rem(margin,10);
                    a{
                        display: block;
                        width:100%;
                        text-align: center;
                        img{
                            width:100%;
                        }
                        p{
                            width:100%;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            padding:10px 0;
                            .px2rem(font-size,28);
                            color:#333;
                        }
                    }
                }
            }
        }

    }
</style>