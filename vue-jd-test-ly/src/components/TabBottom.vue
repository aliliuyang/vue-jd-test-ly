<template>
    <div class="footer">
        <footer>
            <router-link to="/home">
                <img src="../assets/images/a-home.png" alt="" class="tab-item-icon">
            </router-link>
            <router-link to="/category/3">
                <img src="../assets/images/n-catergry.png" alt="" class="tab-item-icon">
            </router-link>
            <router-link to="/find">
                <img src="../assets/images/n-find.png" alt="" class="tab-item-icon">
            </router-link>
            <router-link to="/cart">
                <img src="../assets/images/n-cart.png" alt="" class="tab-item-icon">
            </router-link>
            <router-link to="/mine">
                <img src="../assets/images/n-me.png" alt="" class="tab-item-icon">
            </router-link>
        </footer>
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
    footer{
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        justify-content: space-around;
        background:#fff;
        z-index: 5;
        box-shadow: 0 -2px 10px #ccc;
        a{
            display: block;
            img{
                width:100%;
            }
        }
    }
</style>