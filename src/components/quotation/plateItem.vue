<template>
    <div class="plate">
        <div class="plate-head">{{title}}
            <div class="left"></div>
            <div class="right"><router-link :to='{path:"/quomore"}'><img :src="dian"></router-link></div>
        </div>
        <div class="plate-body">
            <ul class="plate1" >
                <li class="module" v-for='item in items' @click.stop.prevent="toPlateList(item.Code)">
                    <div class="line"></div>
                    <div class="type">{{item.Name}}</div>
                    <div class="number" :class="[parseFloat(item.diff_rate).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_rate).toFixed(2)}}%</div>
                    <div class="name">{{item.stockName}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'v-plateItem',
        props: ['title', 'items','id'], //title:板块名字 items:板块内容
        data () {
            return {
                dian: require('../../assets/images/quotation/price_btn_more@' + this.$store.state.dpr + 'x.png'),
                declearfont:'declearfont',
                risefont:'risefont'
            }
        },
        methods:{
            toPlateList:function(index){
                 this.$router.push({ name: 'quoindex', params: {id:index}});
            }
        }
    }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
@baseColor:#378AD6;
@riseColor:#FF5E45;
@declearColor:#1CB64A;
 *{
    box-sizing: border-box;
 }
 .declearfont{
        color:@declearColor;
}
.risefont{
    color:@riseColor;
}
 .plate{
    width:100%;
    height:auto;
 }
 .plate-head{
    width:100%;
    height:0.6rem;
    padding-left:0.48rem;
    font-family: PingFangSC-Medium;
    font-size:0.3rem;
    color: #000000;
    letter-spacing: 2px;
    position: relative;
    text-align: left;
    line-height: 0.6rem;
    .left{
        width:0.08rem;
        height:0.36rem;
        background:@baseColor;
        position: absolute;
        left:0.3rem;
        top:50%;
        margin-top:-0.18rem;
    }
    .right{
        width:0.4rem;
        height:0.4rem;
        position: absolute;
        right:0.3rem;
        top:50%;
        margin-top:-0.2rem;
        img{
            display: block;
            width: 100%;
        }

    }
 }
 .plate-body{
    width: 100%;
    height:auto;
    background:#fff;
    .plate1{
        width:100%;
        height:3.6rem;
        .module{
            width:33.3333%;
            height:1.8rem;
            padding-top:0.27rem;
            border-bottom:1px solid rgba(153,153,153,0.50);
            float: left;
            position: relative;
            .line{
                width:1px;
                height:1.26rem;
                background:rgba(153,153,153,0.50);
                position: absolute;
                right:0;
                top:50%;
                margin-top:-0.63rem;
            }
            .type{
                width: 100%;
                padding-left: 0.25rem;
                padding-right: 0.25rem;
                height:0.34rem;
                line-height: 0.34rem;
                text-align: center;
                font-size:0.3rem;
                color: #000000;
                letter-spacing: 2px;
                text-overflow:ellipsis;
                white-space:nowrap; 
                overflow:hidden;
            }
            .number{
                font-family: PingFangSC-Medium;
                font-size:0.3rem;
                letter-spacing: 2px;
                text-align: center;
            }
            .name{
                font-size:0.24rem;
                color: #999999;
                letter-spacing: 2px;
                text-align: center;
            }
        }
        .module:nth-child(3n) .line{
            display:none;
        }
        .module:nth-child(4), .module:nth-child(5),.module:nth-child(6){
            border:none;
        }
    }
 }
</style>