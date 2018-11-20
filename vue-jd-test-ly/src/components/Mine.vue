<template>
    <div class="mine">
        <DetailHeaderView :title="title"></DetailHeaderView>
        <div class="top">
            <div class="news">
                <div class="info">
                    <div class="pic">
                        <img src="../assets/images/my_icon.jpg" ref="pic">
                    </div>
                    <input type="file" accept="image/*" @change="compress($event)">

                </div>
                <div class="Member">
                    <a href="#">注册会员</a>
                    <div class="vip">
                        <span><img src="../assets/images/vip.png" alt=""></span>
                        <a href="#">
                            立享PLUS特权 >
                        </a>
                    </div>
                </div>
                <div class="Administration">
                    <span>
                        账户管理 >
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DetailHeaderView from './DetailHeader'
    import {uploadImg} from '../config/api';
    export default {

        data (){
            return {
                title:'我的京东'
            }
        },
        methods:{
            //压缩
            compress(event){
                var that = this;
                //选择的文件对象(file里只包含图片的体积，不包含图片的尺寸)
                var file  = event.target.files[0];
                //选择的文件是图片
                if(file.type.indexOf('image') === 0){
                    //压缩图片需要一些元素和对象
                    var reader = new FileReader();
                    //创建一个img
                    var img = new Image();
                    reader.readAsDataURL(file);
                    //文件base64化，以便获知图片原始尺寸
                    reader.onload = function (event) {
                        img.src = event.target.result;
                    }
                    //base64地址图片加载完毕后执行
                    img.onload = function () {
                        //缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
                        var canvas = document.createElement('canvas');
                        var context = canvas.getContext('2d');
                        //图片原尺寸
                        var originWidth = this.width;
                        var originHeight = this.height;
                        //最大尺寸限制，可通过设置宽高来实现图片压缩程度
                        var maxWidth = 100,maxHeight = 100;
                        //目标尺寸
                        var targetWidth = originWidth;
                        var targetHeight = originHeight;
                        //如果上传图片大于设置的最大尺寸
                        if(originWidth > maxWidth || originHeight > maxHeight){
                            if(originWidth / originHeight > maxWidth / maxHeight ){
                                //更宽，按照宽度限定尺寸
                                targetWidth = maxWidth;
                                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                            }else{
                                targetHeight = maxHeight;
                                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                            }
                        }
                        //canvas 对图片进行缩放
                        canvas.width = targetWidth;
                        canvas.height = targetHeight;
                        //清除画布
                        context.clearRect(0, 0, targetWidth, targetHeight);
                        //图片压缩
                        //第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高
                        context.drawImage(img, 0 ,0 ,targetWidth, targetHeight);
                        //压缩后的图片转base64 url
                        //canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
                        //qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92
                        var newUrl = canvas.toDataURL('image/jpeg', 0.92);//base64格式
                        that.$refs.pic.setAttribute('src',newUrl);
                        //也可以把压缩后的图片转blob格式用于上传
                        // canvas.toBlob((blob)=>{
                        //     console.log(blob)
                        //     //把blob作为参数传给后端
                        // }, 'image/jpeg', 0.92)
                        that.uploadImage(newUrl)
                    }
                }else{
                    alert('请上传图片格式');
                }
            },
            //上传图片
            uploadImage(newUrl){
                let params = {
                    userUrl:newUrl
                }
                uploadImg({
                    params
                }).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        components:{
            DetailHeaderView
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/mixin.less';
    .top{
        margin-top:1.07rem;
        .news{
            background: #F11938;
            height:200px;
            padding:20px;
            display: flex;
            justify-content: space-around;
            .info{
                position: relative;
                .pic{
                    .px2rem(width,100);
                    .px2rem(height,100);
                    border-radius:50%;
                    display: block;
                    img{
                        width:100%;
                        height:100%;
                        border-radius: 50%;
                    }
                }

                input{
                    border:0;
                    outline: none;
                    .px2rem(width,100);
                    .px2rem(height,100);
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    top:0;
                    left:0;
                    opacity: 0;
                }
            }
            .Member{
                .vip{
                    display: inline-block;
                    span{
                        display: inline-block;
                        .px2rem(width,36);
                        .px2rem(height,36);
                        background:#4c4a48;
                        border-radius: 50%;

                    }
                }
            }
        }
    }
</style>