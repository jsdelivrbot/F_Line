<template>
<div>
    <div id="quoBox" ref="quobox">
       <div class="header">
            <tab :left="4" :line-width="2"  custom-bar-width="1.4rem" :active-color="activeColor" :bar-active-color='activeColor' :defaultColor="defaultColor">
                <tab-item @on-item-click="onItemClick(2)" :selected="this.$store.state.platedetail.Id==0">行业板块</tab-item>
                <tab-item @on-item-click="onItemClick(3)" :selected="this.$store.state.platedetail.Id==1">概念板块</tab-item>
            </tab>
        </div>
         <div class="quomore-box" ref="child">
            <div class="quomore-body">
                    <ul class="body-left" >
                        <li id="head-left"></li>
                        <li id="head-left1"></li>
                        <li v-for='(item,index) in items' @click.stop.prevent="toIndividual(item.Code)">
                            <div class="stock-name">{{item.Name}}</div>
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
                                    <li @click.prevent="pass(1)">涨幅<div class="line"></div>
                                        <img :src="rise"  v-if="current==1&&show1">
                                        <img :src="down" v-if="current==1&&!show1">
                                        <div class="marsk" @click.stop.prevent="changeOders(1,show1)"></div>
                                    </li>
                                    <li @click.prevent="pass(2)">涨速<div class="line"></div>
                                        <img :src="rise" v-if="current==2&&show2">
                                        <img :src="down" v-if="current==2&&!show2">
                                        <div class="marsk" @click.stop.prevent="changeOders(2,show2)"></div>
                                    </li>
                                    <li>5日涨幅<div class="line"></div></li>
                                    <li>10日涨幅<div class="line"></div></li>
                                    <li>20日涨幅<div class="line"></div></li>
                                    <li>涨家数<div class="line"></div></li>
                                    <li>跌家数<div class="line"></div></li>
                                    <!-- <li>领涨股<div class="line"></div></li> -->
                                    <li>交易金额<div class="line"></div></li>
                                    <li>总手<div class="line"></div></li>
                                    <li>换手率</li>      
                                </ul>
                                <!-- <div class="hengtiao"></div> -->
                            </div>
                            <ul class="item-list" v-for='item in items'>
                                <li class="item" :class="[parseFloat(item.diff_rate).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_rate).toFixed(2)}}%</li>
                                <li class="item" :class="[parseFloat(item.diff_money).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_money).toFixed(2)}}%</li>
                                <li class="item" :class="[parseFloat(item.diff5).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff5).toFixed(2)}}%</li>
                                <li class="item" :class="[parseFloat(item.diff10).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff10).toFixed(2)}}%</li>
                                <li class="item" :class="[parseFloat(item.diff20).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff20)}}%</li>
                                <li class="item risefont">{{item.riseNum}}</li>
                                <li class="item declearfont" >{{item.fallNum}}</li>
                                <!-- <li class="item">{{item.stockname}}</li> -->
                                <li class="item">{{(parseFloat(item.tradeAmount)/100000000).toFixed(2)}}亿</li>
                                <li class="item">{{(parseFloat(item.tradeNum)/10000).toFixed(0)}}万</li>
                                <li class="item">{{parseFloat(item.turnover).toFixed(2)}}%</li>
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
    import { mapState } from 'vuex';
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
                lists:'',
                current:1,
                rise: require('../../assets/images/quotation/price_btn_up@' + this.$store.state.dpr + 'x.png'),
                down: require('../../assets/images/quotation/price_btn_down1@' + this.$store.state.dpr + 'x.png'),
                show1:false,
                show2:false,
                active1:false,
                active2:false,
                declearfont:'declearfont',
                risefont:'risefont' ,
                contents:'',
                aa:['涨幅','涨速','涨家数','跌家数','5日涨幅','10日涨幅','20日涨幅','换手','金额','总手数']  
            }
        },
        created () {
            this.current=1;
            this.items1=[];this.items2=[];
            Vue.$new=1;//起始
            Vue.$interval=30;//间隔数
        },
        mounted(){
            var startx;
            var starty;
            var _that=this;
            this.lists=this.$store.state.platedetail.Id;
            this.$refs.quobox.style.height=document.documentElement.clientHeight+'px';
            this.$refs.child.style.height=document.documentElement.clientHeight*2/100-0.9+'rem';
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
                         Vue.$new=Vue.$new+1;
                        Vue.$interval=30;
                        if(_that.lists==0){
                            if(!_that.active1&&!_that.active2){
                               _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","DESC"); 
                            }else if(_that.active1&&!_that.active2){
                                if(!_that.show1){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","DESC");
                                 }else if(_that.show1){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","ASC");
                                 }  
                            }else if(!_that.active1&&_that.active2){
                                 if(!_that.show2){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_money","DESC");
                                 }else if(_that.show2){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_money","ASC");
                                 }  
                            }
                        }
                        else if(_that.lists==1){
                             //默认
                            if(!_that.active1&&!_that.active2){
                               _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","DESC"); 
                            }
                            //涨幅
                            else if(_that.active1&&!_that.active2){
                                if(!_that.show1){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","DESC");
                                 }else if(_that.show1){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_rate","ASC");
                                 }  
                            }
                            //涨跌
                            else if(!_that.active1&&_that.active2){
                                 if(!_that.show2){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_money","DESC");
                                 }else if(_that.show2){
                                     _that.getRanking(_that.lists,Vue.$new,Vue.$interval,"diff_money","ASC");
                                 }  
                            } 
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
                        console.log("向上！");
                        break;
                    case 2:
                        console.log("向下！");
                        break;
                    case 3:
                        console.log("向左！");
                        _that.get();
                        break;
                    case 4:
                        console.log("向右！");
                        _that.get();
                        break;
                    default:
                }
            }, false);
        },
        methods: {
            onItemClick (index) {
                if(index==2){
                    this.ok2=true;
                    this.ok3=false;
                    this.$store.state.platedetail.Id=0;
                    Vue.$new=1;
                    this.lists=0;
                    this.items1=[];
                    this.items2=[];
                    this.items=[];
                    this.current=1;
                    this.getRanking(0,1,31,"diff_rate","DESC");
                    var by=document.getElementsByClassName("quomore-box")[0];
                    by.scrollTop=0;
                    this.getInit();
                }
                if(index==3){
                    this.ok3=true;
                    this.ok2=false;
                    this.$store.state.platedetail.Id=1;
                    Vue.$new=1;
                    this.lists=1;
                    this.items1=[];
                    this.items2=[];
                    this.items=[];
                    this.current=1;
                    this.getRanking(1,1,31,"diff_rate","DESC");
                    var by=document.getElementsByClassName("quomore-box")[0];
                    by.scrollTop=0;
                    this.getInit();
                }
            }, 
             getRanking:function(type,now,size,field,oder){
                var _that=this;
                this.$vux.loading.show({text: '正在加载'}); 
                this.$axios.post('GetStockBlockList', {
                    type:this.$store.state.platedetail.Id,
                    nowPage:now,
                    pageSize:size,
                    field:field,
                    order:oder
                })
                .then(function(response){
                   if(response.data.Success=='true'){
                        _that.$vux.loading.hide();
                        if(type==0){
                             response.data.List.forEach((v,i)=>{
                            _that.items1.push(v);   
                            })
                            _that.items=_that.items1;
                        }else if(type==1){
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
            pass(index){
                var by=document.getElementsByClassName("quomore-box")[0];
                by.scrollTop=0;
                this.items=[];
                if(this.$store.state.platedetail.Id==0){
                    this.items1=[];
                    if(index===1){
                        this.current=1;
                        this.show1=false;
                        this.getRanking(0,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.current=2;
                        this.show2=false;
                        this.getRanking(0,1,31,"diff_money","DESC")
                    }
                }else if(this.$store.state.platedetail.Id==1){
                     this.items2=[];
                     if(index===1){
                        this.current=1;
                        this.show1=false;
                        this.getRanking(1,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.current=2;
                        this.show2=false;
                        this.getRanking(1,1,31,"diff_money","DESC")
                    }
                }
            },
            changeOders:function(index,show){
                var by=document.getElementsByClassName("quomore-box")[0];
                by.scrollTop=0;
                var _that=this;
                Vue.$new=1;
                //涨幅
                if(index==1){
                    this.active1=true;
                    this.active2=false;
                    this.show1=!this.show1;
                    if(this.$store.state.platedetail.Id==0){
                         if(show==false){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_rate","DESC");  //降序
                        } 
                    }else if(this.$store.state.platedetail.Id==1){
                         if(show==false){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_rate","DESC");  //降序
                        } 
                    }    
              }
              //涨速
               else if(index==2){
                    this.active2=true;
                    this.active1=false;
                    this.show2=!this.show2;
                    if(this.$store.state.platedetail.Id==0){
                         if(show==false){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_money","DESC");  //降序
                        } 
                    }else if(this.$store.state.platedetail.Id==1){
                         if(show==false){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_money","DESC");  //降序
                        } 
                    }   
              }    
            } 
        },
        activated(){
            this.active1=false;this.active2=false;
            this.items1=[];this.items2=[];
            Vue.$new=1;//起始
            Vue.$interval=30;//间隔数
            this.$vux.loading.show({text: '正在加载'}); 
            if(this.$store.state.platedetail.Id==0){
                this.current=1;
                this.getRanking(0,Vue.$new,Vue.$interval,"diff_rate","DESC"); 
            }else if(this.$store.state.platedetail.Id==1){
                this.current=1;
                this.getRanking(1,Vue.$new,Vue.$interval,"diff_rate","DESC"); 
            }
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
    overflow: hidden;
    .header{
        width:100%;
        height:0.8rem;
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
@riseColor:#FF5E45;
@declearColor:#1CB54A;
@length:10;
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
        //height:13.34rem;
    }
    .quomore-box{
        width:100%;
        margin-top:0.1rem;
        height:12.24rem;
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
                    top:0.9rem;
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
                top:0.9rem;
                z-index: 10;
                .hengtiao{
                    width: @length*1.62rem;
                    height:1px;
                    background:red;
                    top:0.58rem;
                    left:0;
                    z-index: 100;
                    position: absolute;
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