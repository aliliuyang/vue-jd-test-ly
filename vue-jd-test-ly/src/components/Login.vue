<template>
    <div class="login-cantainer">
        <DetailHeaderView :title="title"></DetailHeaderView>
        <form action="#">
            <div class="write">
                <input type="text" placeholder="请输入用户名" v-model="username">
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
        </form>
        <div class="btn" @click="goLogin">
            登录
        </div>
    </div>
</template>

<script>
	import qs from 'qs';
    import DetailHeaderView from "./DetailHeader";
    import { MessageBox } from 'mint-ui';
    import {goToLogin} from '../config/api';
    import {setStore,getStore} from '../config/utils';
  import {mapState,mapMutations,mapActions} from 'vuex';
    export default {

        data (){
            return {
                title:'京东登录',
                IsShowIcon:false,
                username:'',
                password:''

            }
        },
        computed:{
          ...mapState(['userInfo'])
        },
        methods:{
//          ...mapMutations(['GETUSER']),
//          ...mapActions(['setUserInfo']),
            goLogin(){
                var that = this;
                if(this.username == ''){
                    MessageBox('提示', '用户名不能为空');
                }else if( this.password == ''){
                    MessageBox('提示', '密码不能为空');
                }else{
                    let params = {
                        loginName:that.username,
                        loginPawd:that.password,
                    }
                    goToLogin({
                        params
                    })
                    .then((res) => {
                        if(res.status == 1){
                            setStore('userInfo',params)//存储在localStorage
                            that.$store.dispatch('setUserInfo',params.loginName)
                            setTimeout(function () {//登录成功跳转首页
                                that.$router.push({
                                    path:'/'
                                })
                            },300)
                        }else{
                            MessageBox('提示', res.msg)
                        }
                    })
                }

            }
        },
        components:{
            DetailHeaderView,
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    form{
        margin-top:88px;
        .write{
            padding-top:1rem;
            input{
                width:90%;
                display: block;
                padding:30px 0;
                padding-left:6px;
                margin:0px auto;
                margin-bottom:1rem;
                border:0;
                border: 1px solid #999;
                font-size:0.4rem;
            }
        }

    }
    .btn{
        width:90%;
        margin:0 auto;
        font-size: 0.48rem;
        text-align: center;
        padding:25px 0;
        padding-left:6px;
        border: 1px solid #f00;
        color:#f00;
    }
</style>