<template>
        <header :style="styleA">
            <a onclick="window.history.go(-1)"></a>
            <h4>{{title}}</h4>
            <div class="Collection">
                <span  v-show="IsShowIcon"></span>
            </div>
        </header>

</template>

<script>
    export default {
        props:['title','styleA','IsShowIcon'],
        data (){
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    header{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 5;
        display: flex;
        justify-content: space-around;
        border-bottom:1px solid #666;
        background:#fff;
        h4{
            text-align: center;
            color:#333;
            .px2rem(width,500);
            .px2rem(height,80);
            .px2rem(line-height,80);
            .px2rem(font-size,36);
        }
        a{
            .px2rem(width,55);
            .px2rem(height,60);
            .px2rem(margin-top,15);
            display: block;
            background-image:url(../assets/images/sprites.png);
            background-repeat: no-repeat;
            background-position:-0.68rem 0.13rem;
            background-size: 6.66rem 6.66rem;
        }
        .Collection{
            span{
                display: block;
                .px2rem(width,65);
                .px2rem(height,80);
                .px2rem(margin-top,15);
                background-image:url(../assets/images/sprites.png);
                background-repeat: no-repeat;
                background-position:-1.92rem 0.2rem;
                background-size: 6.66rem 6.66rem;
            }

        }
    }

</style>