<template>
    <div class="header">
        <header>
            <router-link class="icon-logo" to="#"></router-link>
            <form action="">
                <label></label>
                <input type="text" placeholder="点击搜索">
            </form>
            <router-link to="" class="login">登录</router-link>
        </header>
    </div>
</template>

<script>
    export default {
        data (){
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    header{
        position: fixed;
        left:0;
        top:0;
        width:100%;
        z-index: 2;
        display: flex;
        justify-content: space-around;
        .icon-logo{
            .px2rem(width,120);
            .px2rem(height,57);
            .px2rem(margin-top,20);
            .px2rem(margin-left,20);
            background:url(../assets/images/sprites.png) no-repeat;
            background-size: 4.66rem 4.66rem;
            background-position: 0.2rem -2.4rem;
            display: inline-block;
        }
        form{
            display: flex;
            justify-content: space-between;
            background:#fff;
            .px2rem(height,60);
            -webkit-border-radius:25px;
            -moz-border-radius:25px;
            border-radius:50px;
            .px2rem(margin-top,16);
            label{
                .px2rem(width,40);
                .px2rem(height,40);
                .px2rem(margin-top,10);
                display:inline-block;
                background:url(../assets/images/sprites.png) no-repeat;
                background-size: 4.66rem 4.66rem;
                background-position: -2.7rem 0.0533rem;

            }
            input{
                .px2rem(width,420);
                .px2rem(height,60);
                .px2rem(padding-left,10);
                outline: none;
                border:0;

                -webkit-border-radius:25px;
                -moz-border-radius:25px;
                border-radius:50px;

            }
        }
        .login{
            .px2rem(font-size,32);
            .px2rem(height,96);
            .px2rem(line-height,96);
            color:#fff;
        }

    }
</style>