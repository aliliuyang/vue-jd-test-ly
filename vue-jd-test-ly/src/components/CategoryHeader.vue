<template>
    <div class="cate-header">
        <header>
            <a onclick="window.history.go(-1)"></a>
            <form action="">
                <label></label>
                <input type="text" placeholder="京东旅行品类日 买一赠一">
            </form>
            <div class="Collection">
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data (){
            return {}
        },
        components:{
        }

    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    header{
        width:100%;
        /*position: fixed;*/
        /*top:0;*/
        /*left:0;*/
        z-index: 5;
        display: flex;
        justify-content: space-around;
        border-bottom:1px solid #eee;
        background:#fff;
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
        form{
            background:#f7f7f7;
            border-radius: 100px;
            .px2rem(width,500);
            .px2rem(height,80);
            .px2rem(margin-top,15);
            display: flex;
            justify-content:space-around ;
            label{
                .px2rem(width,40);
                background-image:url(../assets/images/sprites.png);
                background-repeat: no-repeat;
                background-position:-2.72rem 0.3rem;
                background-size: 6.66rem 6.66rem;
                display: inline-block;
            }
            input{
                border:0;
                outline: none;
                .px2rem(width,400);
                background:#f7f7f7;
                display: inline-block;
                border-radius: 100px;
                .px2rem(font-size,28);
                .px2rem(padding-left,8);
            }
        }
        .Collection{
            .px2rem(width,65);
            .px2rem(height,80);
            .px2rem(margin-top,15);
            background-image:url(../assets/images/sprites.png);
            background-repeat: no-repeat;
            background-position:-1.92rem 0.2rem;
            background-size: 6.66rem 6.66rem;
        }
    }
</style>