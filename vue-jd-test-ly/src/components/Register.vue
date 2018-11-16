<template>
    <div class="register-container">
        <DetailHeaderView :title="title"></DetailHeaderView>
        <form action="#">
            <div class="write">
                <input type="text" placeholder="请输入用户名" v-model="regName">
                <input type="text" placeholder="请输入密码" v-model="regPasswd">
                <input type="text" placeholder="请再次输入密码" v-model="regPasswd_again">
            </div>
        </form>
        <div class="btn" @click="goRegister">
            注册
        </div>
    </div>

</template>

<script>
    import DetailHeaderView from './DetailHeader';
    import { MessageBox } from 'mint-ui';
    export default {
        data (){
            return {
                title:'京东注册',
                IsShowIcon:false,
                regName:'',
                regPasswd:'',
                regPasswd_again:''
            }
        },
        methods:{
            goRegister(){
                let that = this;
                if(this.regName == ''){
                    MessageBox('提示', '用户名不能为空');
                }else if(this.regPasswd == '' || this.regPasswd_again == ''){
                    MessageBox('提示', '密码不能为空');
                }else{
                    that.$http.post('/reg',{
                        regName:that.regName,
                        regPasswd:that.regPasswd
                    }).then((res) => {
                        console.log(res)
                        if(res.status == 200){
                            if(res.data.status == 1){
                                MessageBox('提示', res.data.msg);
                                window.history.go(-1)
                            }else{
                                MessageBox('提示', '注册失败');
                            }


                        }else{
                            MessageBox('提示', '出现错误,请重新注册');
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }

            }
        },
        components:{
            DetailHeaderView
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