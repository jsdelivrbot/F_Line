<template>
<div>
    <div id="quoBox">
       <div class="header">
            <tab :left="4" :line-width="2"  custom-bar-width="1.4rem" :active-color="activeColor" :bar-active-color='activeColor' :defaultColor="defaultColor">
                <tab-item @on-item-click="onItemClick(2)" :selected="this.lists==0">涨幅榜</tab-item>
                <tab-item @on-item-click="onItemClick(3)" :selected="this.lists==1">跌幅榜</tab-item>
            </tab>
        </div>
        <div class="headers"></div>
        <div class="zhe"></div>
         <div class="quomore-box">
            <div class="quomore-body">
                    <ul class="body-left" >
                        <li id="head-left"></li>
                        <li id="head-left1"></li>
                        <li v-for='(item,index) in items' @click.stop.prevent="toIndividual(item.Code)">
                            <div class="stock-name">{{item.name}}</div>
                            <div class="stock-code">{{item.Code}}</div>
                        </li>
                    </ul>
                    <div class="body-right">
                        <div class="right-body" ref="rightbodys">
                            <ul class="title-list">
                               <li v-for="item in aa"></li>
                            </ul>
                            <div class="fix" ref="fixs">
                                <ul class="title-list">
                                    <li>最新<div class="line"></div></li>
                                    <li>涨幅<div class="line"></div></li>
                                    <li>涨跌<div class="line"></div></li>
                                    <li>换手率<div class="line"></div></li>
                                    <li>振幅<div class="line"></div></li>
                                    <li>市盈率<div class="line"></div></li>
                                    <li>市净率<div class="line"></div></li>
                                    <li>流通市值<div class="line"></div></li>
                                    <li>总市值<div class="line"></div></li>
                                    <li>金额<div class="line"></div></li>
                                    <li>总股本<div class="line"></div></li>
                                    <li>现手</li>        
                                </ul>
                            </div>
                            <ul class="item-list" v-for='item in items'>
                                <li class="item" :class="[parseFloat(item.nowPrice).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.nowPrice).toFixed(2)}}</li>
                                <li class="item" :class="[parseFloat(item.diff_rate).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_rate).toFixed(2)}}%</li>
                                <li class="item" :class="[parseFloat(item.diff_money).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_money).toFixed(2)}}</li>
                                <li class="item normal" >{{parseFloat(item.turnover).toFixed(2)}}%</li>
                                <li class="item normal" >{{parseFloat(item.swing).toFixed(2)}}%</li>
                                <li class="item normal" >{{parseFloat(item.pe)}}</li>
                                <li class="item normal" >{{parseFloat(item.pb).toFixed(2)}}</li>
                                <li class="item normal" >{{parseFloat(item.circulation_value).toFixed(2)}}</li>
                                <li class="item normal" >{{(parseFloat(item.all_value)/10000).toFixed(2)}}亿</li>
                                <li class="item normal" >{{(parseFloat(item.tradeAmount)/10000).toFixed(0)}}万</li>
                                <li class="item normal" >{{(parseFloat(item.totalcapital)/10000).toFixed(2)}}亿</li>
                                <li class="item normal" >{{(parseFloat(item.tradeNum)/10000).toFixed(2)}}万</li>
                            </ul>
                        </div> 
                    </div>
             </div>
        </div>
    </div>
</div>
</template>
<script>
    import { Tab, TabItem } from 'vux';
    import Vue from 'vue';
    export default {
        components: {
            Tab,
            TabItem,
        },
        data () {
            return {
                index: 0,
                activeColor:'#378AD6',
                defaultColor:"#999",
                ok2:true,
                ok3:false,
                items:[],
                items1:[],
                items2:[],
                lists:0,
                code:'',
                rise: require('../../assets/images/quotation/price_btn_up@' + this.$store.state.dpr + 'x.png'),
                down: require('../../assets/images/quotation/price_btn_down1@' + this.$store.state.dpr + 'x.png'),
                show1:false,
                show2:false,
                declearfont:'declearfont',
                risefont:'risefont' ,
                contents:'',
                aa:['涨幅','涨速','领涨股','涨家数','跌家数','5日涨幅','10日涨幅','20日涨幅','换手','金额','总手数']  
            }
        },
        created () {
            this.lists=0;
            this.items1=[];this.items2=[];
            Vue.$startIndex=1;//起始
            Vue.$interval=30;//间隔数
            Vue.$endIndex=Vue.$startIndex+Vue.$interval;
            this.code=this.$route.params.id;
        },
        mounted(){
            var startx;
            var starty;
            var _that=this;
            var flag;
            var n=0;
            var by=document.getElementsByClassName("quomore-box")[0];
            by.addEventListener("scroll",function(){
                var nScrollHight = by.scrollHeight;
                var  nScrollTop = by.scrollTop;
                var nDivHight=by.offsetHeight;
                if(nScrollTop + nDivHight+300 >= nScrollHight){
                    flag=true;
                    n+=1;
                    if(flag&&n==1){
                        Vue.$startIndex=Vue.$endIndex+1;
                        Vue.$interval=30;
                        Vue.$endIndex=Vue.$startIndex+Vue.$interval;
                        if(_that.lists==0){
                            _that.getRankings(0,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC",_that.code); 
                        }
                        else if(_that.lists==1){
                             //默认
                             _that.getRankings(0,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC",_that.code); 
                        }   
                    }
                }else{
                    n=0;
                }
                if(flag){
                    flag=false;
                }
               
                   
            });
            //获得角度
            function getAngle(angx, angy) {
                return Math.atan2(angy, angx) * 180 / Math.PI;
            };
         
            //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
            function getDirection(startx, starty, endx, endy) {
                var angx = endx - startx;
                var angy = endy - starty;
                var result = 0;
         
                //如果滑动距离太短
                if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                    return result;
                }
                var angle = getAngle(angx, angy);
                if (angle >= -135 && angle <= -45) {
                    result = 1;
                } else if (angle > 45 && angle < 135) {
                    result = 2;
                } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                    result = 3;
                } else if (angle >= -45 && angle <= 45) {
                    result = 4;
                }
         
                return result;
            }
            //手指接触屏幕
            document.addEventListener("touchstart", function(e) {
                startx = e.touches[0].pageX;
                starty = e.touches[0].pageY;
            }, false);
            document.addEventListener("touchmove",function(e){
                _that.get();
            })
            //手指离开屏幕
            document.addEventListener("touchend", function(e) {
                var endx, endy;
                endx = e.changedTouches[0].pageX;
                endy = e.changedTouches[0].pageY;
                var direction = getDirection(startx, starty, endx, endy);
                switch (direction) {
                    case 0:
                        break;
                    case 1:
                        //console.log("向上！");
                        break;
                    case 2:
                        //console.log("向下！");
                        break;
                    case 3:
                        //console.log("向左！");
                        _that.get();
                        break;
                    case 4:
                        //console.log("向右！");
                        _that.get();
                        break;
                    default:
                }
            }, false);
        },
        methods: {
            //切换选项卡
            onItemClick (index) {
                if(index==2){
                    this.ok2=true;
                    this.ok3=false;
                    this.lists=0;
                    this.items1=[];
                    this.items2=[];
                    Vue.$startIndex=1;
                    Vue.$endIndex=51;
                    this.getRankings(0,1,31,"diff_rate","DESC",this.code);
                    var by=document.getElementsByClassName("quomore-box")[0];
                    by.scrollTop=0;
                    this.getInit();
                }
                if(index==3){
                    this.ok3=true;
                    this.ok2=false;
                    this.lists=1;
                    this.items2=[];
                    this.items1=[];
                    Vue.$startIndex=1;
                    Vue.$endIndex=51;
                    this.getRankings(0,1,31,"diff_rate","ASC",this.code);
                    var by=document.getElementsByClassName("quomore-box")[0];
                    by.scrollTop=0;
                    this.getInit();
                }
            }, 
             getRankings:function(type,start,end,field,oder,code){
                var _that=this;
                this.$vux.loading.show({text: '正在加载'}); 
                this.$axios.post('GetRanking', {
                    type:type,
                    startIndex:start,
                    endIndex:end,
                    field:field,
                    order:oder,
                    code:code
                })
                .then(function(response){
                   if(response.data.Success=='true'){
                        _that.$vux.loading.hide();
                        if(_that.lists==0){
                            response.data.List.forEach((v,i)=>{
                            _that.items1.push(v);    
                            })
                            _that.items=_that.items1; 
                        }else if(_that.lists==1){
                             response.data.List.forEach((v,i)=>{
                            _that.items2.push(v);    
                            })
                            _that.items=_that.items2;   
                        }
                    }
                   
                   
                })  
                .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    ;
                    console.log(error);
                });
            },
            get:function(){
                this.$nextTick(function(){
                    this.$refs.fixs.scrollLeft=this.$refs.rightbodys.scrollLeft;
                })
            },
            getInit:function(){
                this.$nextTick(function(){
                    this.$refs.fixs.scrollLeft=0;
                    this.$refs.rightbodys.scrollLeft=0;

                }) 
            },
            toIndividual:function(code){
                this.$router.push({
                    path:'/markettrend',
                    query:{
                        code:code
                    }
                })
            }
        },
        activated(){
            this.lists=0;
            this.code=this.$route.params.id;
            this.items1=[];this.items2=[];
            Vue.$startIndex=1;//起始
            Vue.$interval=30;//间隔数
            Vue.$endIndex=31;
            this.$vux.loading.show({text: '正在加载'}); 
            this.getRankings(0,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC",this.code); 
            document.title='行情列表';
        }
    }
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
   *{
        box-sizing: border-box;
    }
#quoBox{
    width:100%;
    height:13.34rem;
    overflow: hidden;
    .headers{
        width: 100%;
        height:0.9rem;
        background:#f8f8f8;
    }
    .zhe{
        position: fixed;
        z-index: 1000;
        width: 100%;
        height:1.0rem;
        background:#f8f8f8;
        top:0;
        left:0;
    }
    .header{
        width:100%;
        height:0.8rem;
        position: fixed;
        left:0;
        top:0;
        z-index: 10000;
        // margin-bottom: 0.1rem;
        .vux-tab{
            width:100%;
            height:100%;
        }
    }
}
.active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
}
.active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
    background-color: #fff;
    height: 100px;
}
.normal{
    font-family: PingFangSC-Medium;
    font-size:0.3rem;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 1rem;
}
@riseColor:#FF5E45;
@declearColor:#1CB54A;
@length:12;
   *{
        box-sizing: border-box;
    }
    .declearfont{
        color:@declearColor !important;
    }
    .risefont{
        color:@riseColor !important;
    }
    body{
        width:100%;
        height:13.34rem;
    }
    .quomore-box{
        width:100%;
        //margin-top:0.1rem;
        height:11.6rem;
        overflow: scroll;
        .quomore-body{
            width:100%;
            height:auto;
            overflow: hidden;
            border-bottom:1px solid rgba(153,153,153,0.50);
            .body-left{
                width:2.6rem;
                height:100%;
                float:left;
                clear: both;
                #head-left{
                    width:2.6rem;
                    height:0.6rem;
                    background:#fff;
                    position: fixed;
                    left:0;
                    top:1.0rem;
                    z-index: 10;
                }
                #head-left1{
                    width:2.6rem;
                    height:0.6rem;
                    background:#fff;
                }
                li{
                    width:100%;
                    height:1rem;
                    background:#fff;
                    border-bottom:1px solid rgba(153,153,153,0.50);
                    padding-left:0.3rem;
                    .stock-name{
                        text-align: left;
                        font-size:0.3rem;
                        color: #000000;
                        letter-spacing:0.02rem;
                        padding-top:0.12rem;
                        overflow: hidden;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                         
                    }
                    .stock-code{
                        text-align: left;
                        font-size:0.2rem;
                        color: #999999;
                        letter-spacing: 0;
                    }
                }
                li:nth-child(2n){
                    background:#f8f8f8;
                }
                li:last-child{
                    border-bottom: none;
                }
            }
            .body-right{
                width:4.9rem;
                height:100%;
                float:left;
                .right-body{
                    width:4.9rem;
                    height:100%;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    position: relative;
                        .title-list1{
                            width:@length*1.62rem;
                            height:0.6rem;
                            background:#fff;
                            position: fixed;
                            right:0;
                            top:1rem;
                            z-index: 10;
                        }
                        .title-list{
                            width:@length*1.62rem;
                            height:0.6rem;
                            background:#fff;
                            li{
                            width:1.62rem;
                            height:100%;
                            text-align: center;
                            line-height: 0.6rem;
                            font-size:0.24rem;
                            color: #999999;
                            letter-spacing: 0;
                            float: left;
                            position: relative;
                            border-bottom:1px solid rgba(153,153,153,0.50);
                                .line{
                                    position: absolute;
                                    width:1px;
                                    height:0.4rem;
                                    background:#d8d8d8;
                                    right:0;
                                    top:50%;
                                    margin-top:-0.2rem;
                                }
                                img{
                                    width:0.14rem;
                                    height:0.24rem;
                                    position: absolute;
                                    right:0.1rem;
                                    top:50%;
                                    margin-top:-0.12rem;
                                }
                            }
                            li:last-child .box{
                                display: none;
                            }
                        }
                            
                        
                    .item-list{
                        width:@length*1.62rem;
                        height:1rem;
                        background:#fff;
                        border-bottom:1px solid rgba(153,153,153,0.50);
                        .item{
                            width:1.62rem;
                            height:1rem;
                            float:left;
                            text-align: center;
                            line-height: 1rem;
                            font-size:0.3rem;
                            font-family: PingFangSC-Medium;
                        }
                        .item:nth-child(4),.item:nth-child(10),.item:nth-child(11),.item:nth-child(5),.item:nth-child(6),.item:nth-child(7),.item:nth-child(8),.item:nth-child(9){
                                color:#000;
                        }
                    }
                    .item-list:nth-child(2n){
                        background:#f8f8f8;
                    }
                    .item-list:last-child{
                        border-bottom:none;
                    }
                }
                
            }
            .fix{
                width: 4.9rem;
                height: 0.6rem;
                overflow-x: scroll;
                position:fixed;
                right:0;
                top:1rem;
                //background:red;
                z-index: 10;
                .title-list{
                    width:@length*1.62rem;
                    height:0.6rem;
                    background:#fff;
                    li{
                    width:1.62rem;
                    height:100%;
                    text-align: center;
                    line-height: 0.6rem;
                    font-size:0.24rem;
                    color: #999999;
                    letter-spacing: 0;
                    float: left;
                    position: relative;
                    border-bottom:1px solid rgba(153,153,153,0.50);
                        .line{
                            position: absolute;
                            width:1px;
                            height:0.4rem;
                            background:#d8d8d8;
                            right:0;
                            top:50%;
                            margin-top:-0.2rem;
                        }
                        img{
                            width:0.14rem;
                            height:0.24rem;
                            position: absolute;
                            right:0.1rem;
                            top:50%;
                            margin-top:-0.12rem;
                        }
                        .marsk{
                            width:0.14rem;
                            height:0.24rem;
                            position: absolute;
                            right:0.1rem;
                            top:50%;
                            margin-top:-0.12rem; 
                            //background:red;
                             opacity: 0;
                        }
                           
                    }

                }
            }
        }
    }  
</style>