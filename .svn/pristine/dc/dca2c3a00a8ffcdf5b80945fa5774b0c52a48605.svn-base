<template>
<div class="hushen">
    <div class="hushen-head">
        <ul class="line">
            <li v-for="(item,index) in indexData" >
               <div class="szzs">{{indexData[index].name}}</div>
               <div class="num1" :class="[Number(indexData[index].nowPrice) < 0 ? 'declearfont':'risefont' ]">{{indexData[index].nowPoints}}</div>
               <div class="num2" :class="[Number(indexData[index].nowPrice) < 0 ? 'declearfont':'risefont' ]">{{indexData[index].nowPrice}}</div>
               <div class="num3" :class="[Number(indexData[index].diff_rate) < 0 ? 'declearfont':'risefont' ]">{{Number(indexData[index].diff_rate)}}%</div>
               <div class="right-line"></div>
            </li>
        </ul>
    </div>
    <div class="ranking">
        <v-list title="涨幅榜" :items="riseLists" @click.native.prevent="loop(0)"></v-list>
        <v-list title="跌幅榜" :items="declearLists"  @click.native.prevent="loop(1)"></v-list>
        <v-turover title="换手率榜" :items="turnoverLists"  @click.native.prevent="loop(3)"></v-turover> 
        <v-trade title="成交额榜" :items="volumeLists"  @click.native.prevent="loop(5)"></v-trade>
    </div>         
</div>  
</template>
<script>
    import Vue from 'vue'; 
    import _Socket from '../../plugins/heartbeat';
    import { mapState } from 'vuex';
    import vList from './list.vue';
    import vTurover from './turover.vue';
    import vTrade from './tradeAmount.vue';
    export default{
        name:'v-hushen',
        components: {
            vList,
            vTrade,
            vTurover
        },
        data(){
            return{
                indexData:'',
                declearfont:'declearfont',
                risefont:'risefont'
            }
        },
        created(){
            //this.$vux.loading.show({text: '正在加载'}); 
            var _that=this;
            //获取大盘指数
            let timestamp=(new Date()).valueOf();
            let signdata=this.$socketsign('601006&2&1&'+timestamp);
            let senddata={
                APPID:this.$store.state.APPID,
                code:'601006',
                type:'2',
                sub:'1',
                timestamp:timestamp,
                signed:signdata
            }
            //socket通讯
            if(!Vue.$socket){
                Vue.$socket=_Socket.createWebSocket('ws://www.shangjin666.cn:7181/');
                Vue.$socket.onopen=function(){
                    console.log('已连接')
                    if(!interval){
                        var interval=setInterval(function(){
                            if(Vue.$socket.readyState==1)Vue.$socket.send('000000');
                            console.log('全局：000000')
                        },30000) 
                    }
                     Vue.$socket.send(JSON.stringify(senddata));
                }
            }else{
                 Vue.$socket.send(JSON.stringify(senddata));
            }
            
            //消息接收
            Vue.$socket.onmessage=function(event){
                 _that.$vux.loading.hide(); 
                var datas=JSON.parse(event.data)
                 _that.indexData=datas;
                 console.log(_that.indexData)
            }   
        },
        mounted(){
            this.getLists();
        },
        computed: {
            ...mapState({
                riseLists: state => state.hushen.riseLists,
                declearLists: state => state.hushen.declearLists,
                turnoverLists: state => state.hushen.turnoverLists,
                volumeLists: state => state.hushen.volumeLists
            })
        },
        methods: {
            getLists: function () {
              this.$store.dispatch('getLists');
             
            },
            loop:function(num){
                this.$router.push({ name: 'index', params: {id:num}});
                this.$store.state.index.Id=num;
            },
            // toIndex:function(index){
            //     var codes=[ "000001","399001","399006","000300","000016","000905"];
            //     this.$router.push({
            //         path:'markettrend',
            //         query:{
            //             code:codes[index],
            //             routefrom:'上证指数'
            //         }
            //     })

            // }
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
body{
    overflow: hidden;
 .declearfont{
        color:@declearColor;
}
}
.risefont{
    color:@riseColor;
}
 .hushen{
    width:100%;
    height:auto;
    .hushen-head{
    width:100%;
    height:auto;
    margin-bottom:0.1rem;
    .line{
        width:100%;
        height:3.6rem;
        background: #FFFFFF;
        li{
            width:33.333%;
            height:1.8rem;
            padding-top: 0.27rem;
            padding-bottom: 0.27rem;
            position: relative;
            float:left;
            overflow: hidden;
            .szzs{
                text-align: center;
                padding-top:0.035rem;
                font-size:0.3rem;
                color: #000000;
                letter-spacing: 2px;
            }
            .num1{
                text-align: center;
                font-size:0.3rem;
                letter-spacing: 2px;
            }
            .num2{
                text-align: left;
                padding-left: 0.24rem;
                font-family: PingFangSC-Medium;
                font-size:0.24rem;
                letter-spacing: 1px;
                float:left;
            }
            .num3{
                text-align: right;
                padding-right: 0.24rem;
                font-family: PingFangSC-Medium;
                font-size:0.24rem;
                letter-spacing: 1px;
            }
            .right-line{
                width:1px;
                height:1.26rem;
                right:0;
                top:50%;
                margin-top:-0.63rem;
                position: absolute;
                background:rgba(153,153,153,0.50);
            }
        }
        li:first-child,li:nth-child(2),li:nth-child(3){
            border-bottom:1px solid rgba(153,153,153,0.50);
        }
        li:nth-child(3n) .right-line{
           display: none;
        }
        
    }
    .line:first-child{
        border-bottom:1px solid #CCCCCC;
    }
 } 
     .ranking{
        width: 100%;
        height:6.6rem;
        overflow: scroll;
     }
 }
</style>