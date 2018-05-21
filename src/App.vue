<template>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'app',
    data(){
        return{
            logoimg:localStorage.IP+'/static/images/logo.png',
            title:'未来K线：大数据预测K线走势！',
            disc:'运用大数据技术，通过智能诊股及经典形态选股解决股民投资难题。',
            link:localStorage.IP+'/index.html#/main',
            curlink:window.location.href,
        }
    },
    created(){
        var _that=this;
        var instance = _that.$axios.create({
            baseURL:localStorage.IP,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                "Access-Control-Allow-Headers":"Authorization,Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods":"GET,POST"
            },
        });
        instance.get('/WeChat/GetSign?url='+_that.curlink)
        .then((response)=>{
            //微信接口配置
             _that.$wechat.config({
                 debug: false,
                 appId: response.data.Appid,
                 timestamp: response.data.Timestamp,
                 nonceStr: response.data.Noncestr,
                 signature: response.data.SignStr,
                 jsApiList: [
                     'checkJsApi',
                     'onMenuShareTimeline',          //分享到朋友圈
                     'onMenuShareAppMessage',        //分享给朋友
                     'onMenuShareQQ',                //分享到QQ
                     'onMenuShareWeibo',             //分享到腾讯微博
                     'onMenuShareQZone'              //分享到QQ空间
                 ]
             });
             _that.$wechat.ready(function () {
                 //分享到朋友圈
                 _that.$wechat.onMenuShareTimeline({
                     title: _that.title,
                     link: _that.link,
                     imgUrl: _that.logoimg,
                     success: function (res) {
                     },
                     cancel: function (res) {
    
                     },
                     fail: function (res) {
                     }
                 });
                 //分享给朋友
                 _that.$wechat.onMenuShareAppMessage({
                     title:_that.title, // 分享标题
                     desc:_that.disc, // 分享描述
                     link: _that.link, // 分享链接
                     imgUrl: _that.logoimg, // 分享图标
                     type: '', // 分享类型,music、video或link，不填默认为link
                     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                     success: function (res) {
                     },
                     cancel: function (res) {
    
                     },
                     fail: function (res) {
                     }
                 });
                 //分享到QQ
                 _that.$wechat.onMenuShareQQ({
                     title:_that.title,// 分享标题
                     desc:_that.disc, // 分享描述
                     link:_that.link, // 分享链接
                     imgUrl:_that.logoimg,// 分享图标
                     success: function (res) {
                     },
                     cancel: function (res) {
    
                     },
                     fail: function (res) {
                     }
                 });
                 //分享到腾讯微博
                 _that.$wechat.onMenuShareWeibo({
                     title: _that.title,// 分享标题
                     desc: _that.disc, // 分享描述
                     link: _that.link, // 分享链接
                     imgUrl: _that.logoimg,// 分享图标
                     success: function (res) {
                     },
                     cancel: function (res) {
    
                     },
                     fail: function (res) {
                     }
                 });
                 //分享到QQ空间
                 _that.$wechat.onMenuShareQZone({
                     title:_that.title,// 分享标题
                     desc: _that.disc, // 分享描述
                     link: _that.link, // 分享链接
                     imgUrl: _that.logoimg, // 分享图标
                     success: function (res) {
                     },
                     cancel: function (res) {
    
                     },
                     fail: function (res) {
                     }
                 });
                 // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
                 _that.$wechat.checkJsApi({
                     jsApiList: [
                         'onMenuShareTimeline',
                         'onMenuShareAppMessage',
                         'onMenuShareQQ',
                         'onMenuShareWeibo',
                         'onMenuShareQZone',
                     ],
                     success: function (res) {
                         //alert(JSON.stringify(res));
                     },
                     fail: function (res) {
                         //alert("wx.ready err：" + JSON.stringify(res));
                     }
    
                 });
        
             });
             _that.$wechat.error(function (res) {
                console.log(res)
             });
        })
        .catch((error)=>{
            console.log(error);
        });
    },
}
</script>

<style lang="less">
 @import '~vux/src/styles/reset.less';
 // 引入公共样式
 @import 'style/base.less';
html{
    width: 100%;
    height:100%;
}
</style>
