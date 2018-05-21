<template>
    <div class="newsBox">
        <div :class="data.Title.length>16? 'title':'title1'">{{data.Title}}</div>
        <div class="date">2014-4-17</div>
        <div class="line"></div>
        <div class="article">{{data.Text}}</div>
    </div>
</template>
<script>
 export default {
    data() {
        return {
            data: {}
        };
    },
    created() {
        this.$vux.loading.show({text: '正在加载'});
        this.fetchData();
    },
    methods: {
        // 获取路由参数上的id新闻具体内容
        fetchData: function() {
            // 获得新闻id
            let id = this.$route.params.id;
            this.$axios.post('GetMessage',{id:id})
            .then(response => {
                if(response.data.Success=="true"){
                    this.$vux.loading.hide();
                    this.data=response.data;
                }
            })
            .catch((error)=>{
                // 隐藏loading
                this.$vux.loading.hide();
                this.$router.push({path:'/fault'});
                console.log(error);
            });
        }
    },
    activated(){
        document.title='消息详情';
    },
};   
</script>
<style lang="less" scoped>
 @import '../../style/base.less';
 *{
      box-sizing: border-box;
 }
 .newsBox{
    width:100%;
    height:auto;
    padding-left:0.3rem;
    padding-right:0.3rem;
    background:#fff;
    .title{
        width:6.9rem;
        height:1.2rem;
        margin:0.1rem  auto;
        margin-top:0.2rem;
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size:0.4rem;
        color: #000000;
        letter-spacing:0.0267rem; 
    }
    .title1{
        width:6.9rem;
        height:1.2rem;
        margin:0.1rem  auto;
        margin-top:0.2rem;
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size:0.4rem;
        color: #000000;
        letter-spacing:0.0267rem; 
        line-height: 1.2rem;
    }
    .date{
        width:100%;
        height:0.33rem;
        text-align: left;
        font-size:0.24rem;
        color: #999999;
        letter-spacing:0.016rem;
    }
    .line{
        width:0.8rem;
        height:0.04rem;
        background:#ccc;
        margin-top:0.1rem;
    }
    // & div:nth-child(4){
    //     width:100%;
    //     height:0.33rem;
    //     margin-top:0.1rem;
    //     .source{
    //         float: left;
    //         text-align: left;
    //         font-size:0.24rem;
    //         color: #999999;
    //         letter-spacing:0.02rem;
    //     }
    //     .grade{
    //         float: right;
    //         text-align: right;
    //         font-size:0.24rem;
    //         color: #999999;
    //         letter-spacing:0.02rem;
    //     }
    // }
    .article{
        width: 100%;
        height:auto;
        margin-top:0.2rem;
        font-size:0.34rem;
        color: #000000;
        letter-spacing:0.027rem;
    }
 }  
</style>