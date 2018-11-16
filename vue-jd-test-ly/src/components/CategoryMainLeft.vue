<template>
    <div class="cate-left">
        <div class="list-left" ref="listBox">
            <ul ref="listUL">
                <li v-for="(list,index) in leftData" :key="index" @click="Arrive($event,index)">
                    <router-link :to="'/category/'+list.category_id">
                        {{list.category_name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getDetailLeftData} from '../config/api'
    export default {
        data (){
            return {
                leftData:[],
                scrollTop:''
            }
        },
        methods:{
            getData(){
//                this.$http.get('/category').then((res) => {
//                    this.leftData = res.data;
//                })
                getDetailLeftData().then((res) =>{
                    this.leftData = res
                })
            },
            handelScroll(){
                this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                this.Move(this.scrollTop)

            },
            Arrive(event,index){
//              var scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                var offsetHeight = event.target.offsetHeight;//列表里面子元素高度
                var listBox = this.$refs.listBox;
                var listUl = this.$refs.listUL;
                var listBoxHeight = listBox.offsetHeight//左侧列表盒子的高度
                var num= Math.ceil(listBoxHeight / offsetHeight);//一屏展示的个数，及外包围盒子能展示的列表个数
                var scrollTop = offsetHeight * index;
                var listTotal = listUl.children.length;//获取数据的总数量，及列表里面总数量
                var Remainder = listTotal % num;//余数，及整屏展示后余下的不够一屏的数量
                var pages = Math.floor(listTotal / num) ; //能展示多少个整屏,向下取整，表示剩余的不够一屏
                var difference = num - Remainder;   // 剩余的差数
                var last = (pages * num -1) * offsetHeight;   // 最后一屏偏移量(前几页偏移量 + 最后一页多出来的偏移量)
                var offsetTop = event.target.offsetTop;
                if(index < pages * num -1 ){//小于最后一页的时候
                    listUl.style.transform = 'translateY(-'+offsetTop+'px)';
                    listUl.style.transition = 'all 0.5s ease 0s';
                }
//                if(index >= pages * num){//最后一页 >=22
//                    listUl.style.transform = 'translateY(-'+last+'px)';
//                    listUl.style.transition = 'all 0.5s ease 0s';
//                }
            },
            Move(scrollTop){
                var that = this;
                var listUl = this.$refs.listUL;
                listUl.addEventListener('touchstart', function (e) {
                     var startX =e.touches[0].pageX;
                     var startY =e.touches[0].pageY;
//                    console.log(startX,startY,'start')
                    listUl.addEventListener('touchmove', function (e) {
                        var moveX =e.touches[0].pageX;
                        var moveY =e.touches[0].pageY;
                        var X = moveX - startX;
                        var Y = moveY - startY;
//                    console.log(moveX,moveY,'move')
//                        console.log(Y,'-----')
                        console.log(this.scrollTop)
                        if( Math.abs(Y)>Math.abs(X)&&Y > 0){ //向下拉
                            listUl.style.transform = 'translateY('+Y+'px)';
                            listUl.style.transition = 'all 0.5s ease 0s';
                            if(Math.abs(Y) >= 100){
                                listUl.style.transform = 'translateY('+100+'px)';
                                listUl.style.transition = 'all 0.5s ease 0s';
                                listUl.addEventListener('touchend',function (e) {
                                    listUl.style.transform = 'translateY('+0+'px)';
                                    listUl.style.transition = 'all 0.5s ease 0s';
                                })
                            }
                        }
                        if( Math.abs(Y)>Math.abs(X)&&Y < 0){ //向上拉
                            listUl.style.transform = 'translateY('+Y+'px)';
                            listUl.style.transition = 'all 0.5s ease 0s';
                            if(Math.abs(Y) >= 0){
                                listUl.style.transform = 'translateY(-'+100+'px)';
                                listUl.style.transition = 'all 0.5s ease 0s';
                                listUl.addEventListener('touchend',function (e) {
                                    listUl.style.transform = 'translateY('+0+'px)';
                                    listUl.style.transition = 'all 0.5s ease 0s';
                                })
                            }


                        }

                    });

                });


            }
        },
        mounted(){
            this.getData()
            this.Move()
            this.handelScroll()
//            document.addEventListener('scroll',this.handelScroll)
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .cate-left{
        .px2rem(width,170);
    }
    .list-left{
        .px2rem(width,170);
        .px2rem(max-height,1000);
        overflow: hidden;
        overflow-y: auto;
        ul{
            background: #f8f8f8;
            transform: translateY(0px);
            li{
                width:100%;
                text-align: center;
                .px2rem(height,92);
                .px2rem(line-height,92);
                .px2rem(font-size,30);
                a{
                    color:#333;
                    display: block;
                    width:100%;
                }
            }
        }
    }
</style>