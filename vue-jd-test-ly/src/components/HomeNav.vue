<template>
    <div class="nav">
        <nav>
            <ul>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav0.png" alt="">
                        <span>京东超市</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav1.png" alt="">
                        <span>全球购</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav2.png" alt="">
                        <span>服装城</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav3.png" alt="">
                        <span>京东生鲜</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav4.png" alt="">
                        <span>京东到家</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav5.png" alt="">
                        <span>充值中心</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav6.png" alt="">
                        <span>惠赚钱</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav7.png" alt="">
                        <span>领券</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav8.png" alt="">
                        <span>物流查询</span>
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#" class="nav_item_link">
                        <img src="../assets/images/nav9.png" alt="">
                        <span>我的关注</span>
                    </a>
                </li>
            </ul>
        </nav>
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

    nav{
        width:100%;
        ul{
            width:100%;
            display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            li{
                width:20%;

                a{
                    .px2rem(height,140);
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    img{
                        .px2rem(width,60);
                        .px2rem(height,60);
                        display: block;
                        margin: 0 auto;
                        .px2rem(margin-bottom,10);
                    }
                    span{
                        .px2rem(font-size,24);
                        color:#333;
                    }
                }
            }

        }
    }
</style>