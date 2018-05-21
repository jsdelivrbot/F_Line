<template>
    <div class="aboutBox">
        <div class="top">
            <div class="icon"><img :src="icon"></div>
            <div class="name">{{name}}</div>
            <div class="version">{{version}}</div>
        </div>
        <div class="bottom">
           <group class="setting-box">
                <cell title="产品说明" is-link  @click.native="toNext(0)" class="line1"></cell>
                <cell title="免责声明" is-link  @click.native="toNext(1)" class="line1"></cell>
            </group>
        </div>
    </div>
</template>
<script>
    import { Cell,Group} from 'vux';
    export default{
        components: {
            Cell,
            Group
        },
        methods:{
            toNext:function(index){
                if(index==0){
                    this.$router.push({path:'/products'})
                }else if(index==1){
                    this.$router.push({path:'/statement'})
                }
            }
        },
         data(){
            return {
                icon: require('../../assets/images/my/logo@' + this.$store.state.dpr + 'x.png'),
                name:'未来K线',
                version:"1.1.0"
            }
        },
        activated(){
            document.title='关于我们';
        },
    }
</script>
<style lang="less" scoped>
 @import '../../style/base.less';
*{
    box-sizing: border-box;
}   
    .top{
        width: 100%;
        height:auto;
        .icon{
            width: 2rem;
            height:2rem;
            margin:0 auto;
            margin-top:1.07rem;
            img{
                width: 100%;
                height:100%;
                display: block;
            }
        }
        .name{
            text-align: center;
            line-height: 0.5rem;
            font-family: PingFangSC-Medium;
            font-size:0.36rem;
            color: #000000;
            letter-spacing:0.04rem;
            margin:0 auto;
            margin-top:0.2rem;
            font-weight: bold;
        }
        .version{
            font-family: PingFangSC-Medium;
            font-size:0.3rem;
            color: #000000;
            letter-spacing:0.0333rem;
            text-align: center;
            line-height: 0.42rem;
            font-weight: bold;
        }
    }
    .aboutBox{
        width:100%;
        height:auto;
        margin-top:0;
        .bottom{
            width:100%;
            height:100%;
            margin-top:0.4rem;
            .setting-box{
                width:100%; 
                height:auto;
                .weui-cell:before {
                    border-top:none
                }
                .line1{
                    width:100%;
                    height:1rem;
                    padding: 0 0.3rem !important;
                    background:#fff;
                    font-size:0.3rem;
                    color: #000000;
                    letter-spacing: 2px;
                    font-family: PingFangSC-Regular;
                    border-bottom:1px solid rgba(153,153,153,0.50);
                }
            }
        }
    }
</style>