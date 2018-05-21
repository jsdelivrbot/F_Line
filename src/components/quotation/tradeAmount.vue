<template>
     <div class="list1">
            <div class="list-title">
                <div class="section">{{title}}</div>
                <div class="arrow right" v-if="show"><img :src="arrowRight" v-if="show"></div>
                <div class="arrow down" v-if="!show"><img :src="arrowDown" v-if="!show"></div>
                <div class="button" @click.stop.prevent="show = !show"></div>
                <div><div class="more" ><img :src="more"></div></div>        
            </div>
            <ul class="list-body" v-show="!show">
                <li class="list-detail" v-for="(item,index) in items" @click.stop.prevent="toIndividual(item.Code)">
                        <div>
                            <div :class="[parseFloat(item.num1) < 0 ? 'declearfont':'risefont' ]">{{item.name}}</div>
                            <div :class="[parseFloat(item.num1) < 0 ? 'declearfont':'risefont' ]">{{item.Code}}</div>
                        </div>
                        <div :class="[parseFloat(item.num1) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.nowPrice).toFixed(2)}}</div>
                        <div :class="[parseFloat(item.num1) < 0 ? 'declearfont':'risefont' ]">{{(parseFloat(item.tradeAmount)/100000000).toFixed(2)}}亿</div>
                </li>
            </ul>
        </div>
</template>
<script>
    import { mapState } from 'vuex';
    import vQuoheader from './quoheader.vue';
    export default{
        name:'v-trade',
        components: {
         vQuoheader
        },
        props: ['title', 'items'],
        data(){
            return{
                arrowRight: require('../../assets/images/quotation/price_btn_right@' + this.$store.state.dpr + 'x.png'),
                arrowDown: require('../../assets/images/quotation/price_btn_down@' + this.$store.state.dpr + 'x.png'),
                more: require('../../assets/images/quotation/price_btn_more@' + this.$store.state.dpr + 'x.png'),
                show:true,
                declearfont:'declearfont',
                risefont:'risefont'
            }
        },
        methods:{
            toIndividual:function(code){
                 this.$router.push({
                    path:'markettrend',
                    query:{
                        code:code
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
*{
    box-sizing: border-box;
}
@riseColor:#FF5E45;
@declearColor:#1CB64A;
@num:10;
.declearfont{
    color:@declearColor;
}
.risefont{
    color:@riseColor;
}
    .list1{
        width:100%;
        height:auto;
        background:#fff;
        border-bottom:1px solid #ccc;
        .list-title{
            width:100%;
            height:0.8rem;
            box-shadow: 0 1px 0 0 #CCCCCC;
            padding-left: 0.7rem;
            position: relative;
            background:#fff;
            .section{
            text-align: left;
            line-height: 0.8rem;
            font-size:0.3rem;
            color:@riseColor;
            letter-spacing: 0;
        }
        .arrow{
            width:0.24rem;
            height:0.24rem;
            position: absolute;
            left:0.2rem;
            top:50%;
            margin-top:-0.12rem;
            z-index: 1;
            img{
                display: block;
                width: 100%;
            }
        }
        .button{
            width:6.7rem;
            height:0.8rem;
            position: absolute;
            left:0rem;
            top:0;
            z-index: 100;
            //background:red;
        }
        .more{
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
        .list-body{
              width:100%;
              height:@num*0.8rem;
              overflow: scroll;
            li{
                width:100%;
                height:0.8rem;
                padding-left: 0.3rem;
                padding-right: 0.3rem;
                background: #FFFFFF;
                border-bottom:1px solid #ccc;
                div{
                    width:33.333%;
                    height:100%;
                    font-size:0.3rem;
                    float: left;
                }
                div:first-child{
                    text-align: left;
                    color:#000;
                    div:first-child{
                        width:100%;
                        height:60%;
                        font-family: PingFangSC-Regular;
                        font-size:0.3rem;
                        color: #000000;
                        letter-spacing:0.02rem;
                        line-height: 0.48rem;
                    }
                    div:last-child{
                        width:100%;
                        height:40%;
                        font-family: PingFangSC-Regular;
                        font-size:0.2rem;
                        color: #999999;
                        letter-spacing: 0;
                        text-align: left;
                        line-height: 0.32rem;
                    }
                }
                div:nth-child(2){
                    text-align: center;
                    font-family: PingFangSC-Medium;
                    line-height: 0.8rem;
                }
                 div:last-child{
                    text-align:right;
                    font-family: PingFangSC-Medium;
                    line-height: 0.8rem;
                }
            }
            li:last-child{
                border:none;
            }
        }    
    }
</style>