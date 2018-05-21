<template>
    <div class="quomore-box" ref="qop">
        <div class="quomore-body" ref="quomorebody">
                <ul class="body-left" ref="bodyleft">
                    <li id="head-left"></li>
                    <li id="head-left1"></li>
                    <li v-for='(item,index) in items' @click.stop.prevent="toIndividual(item.Code)">
                        <div class="stock-name">{{item.name}}</div>
                        <div class="stock-code">{{item.Code}}</div>
                    </li>
                </ul>
                <div class="body-right">
                    <div class="right-body" ref="rightbody">
                        <ul class="title-list">
                           <li v-for="item in aa"></li>
                        </ul>
                        <div class="fix" ref="fix">
                            <ul class="title-list">
                                <li>最新<div class="line"></div></li>
                                <li  @click.prevent='pass(1)'>涨幅<div class="line"></div>
                                    <img :src="rise"  v-if="now==1&&show1">
                                    <img :src="down" v-if="now==1&&!show1">
                                    <div class="marsk" @click.stop.prevent="changeOders(1,show1)"></div>
                                </li>
                                <li @click.prevent="pass(2)">涨跌<div class="line" ></div>
                                    <img :src="rise" v-if="now==2&&show2">
                                    <img :src="down" v-if="now==2&&!show2">
                                    <div class="marsk" @click.stop.prevent="changeOders(2,show2)"></div>
                                </li>
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
                            <!-- <div class="hengtiao"></div> -->
                        </div>
                        <ul class="item-list" v-for='item in items'>
                            <li class="item" :class="[parseFloat(item.nowPrice).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.nowPrice).toFixed(2)}}</li>
                            <li class="item" :class="[parseFloat(item.diff_rate).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_rate).toFixed(2)}}%</li>
                            <li class="item" :class="[parseFloat(item.diff_money).toFixed(2) < 0 ? 'declearfont':'risefont' ]">{{parseFloat(item.diff_money).toFixed(2)}}</li>
                            <li class="item normal" >{{parseFloat(item.turnover).toFixed(2)}}%</li>
                            <li class="item normal" >{{parseFloat(item.swing).toFixed(2)}}%</li>
                            <li class="item normal">{{parseFloat(item.pe)}}</li>
                            <li class="item normal" >{{parseFloat(item.pb).toFixed(2)}}</li>
                            <li class="item normal" >{{parseFloat(item.circulation_value).toFixed(2)}}</li>
                            <li class="item normal" >{{(parseFloat(item.all_value)/10000).toFixed(2)}}亿</li>
                            <li class="item normal" >{{(parseFloat(item.tradeAmount)/10000).toFixed(0)}}万</li>
                            <li class="item normal" >{{(parseFloat(item.totalcapital)/10000).toFixed(2)}}亿</li>
                            <li class="item normal" >{{(parseFloat(item.tradeNum)/10000).toFixed(2)}}万</li>
                        </ul>
                    </div> 
                </div>
                <div style="clear:both"></div>
         </div>
         
    </div>
</template>
<script>
    import Vue from 'vue';
    import { mapState } from 'vuex';
    export default{
        name:'v-index',
        data(){
            return{
                items:[],
                items1:[],
                items2:[],
                items3:[],
                items4:[],
                rise: require('../../assets/images/quotation/price_btn_up@' + this.$store.state.dpr + 'x.png'),
                down: require('../../assets/images/quotation/price_btn_down1@' + this.$store.state.dpr + 'x.png'),
                show1:false,
                show2:false,
                ranks:'',
                now:1,//默认按涨幅排序
                active1:false,
                active2:false,
                declearfont:'declearfont',
                risefont:'risefont' ,
                contents:'',
                aa:['涨幅','涨速','领涨股','涨家数','跌家数','5日涨幅','10日涨幅','20日涨幅','最新','换手','金额','总手数']  
            }
        },
        created () { 
            if(this.$route.params.id==0){
                this.now=1;
                this.show1=false;
            }else if(this.$route.params.id==1){
                this.now=1;
                this.show1=true;
            }else if(this.$route.params.id==3||this.$route.params.id==5){
                this.now=0;
            } 
        },
        mounted(){
            this.$refs.qop.style.height=document.documentElement.clientHeight+'px';
            console.log(document.documentElement.clientHeight*2/100);
            this.ranks=this.$route.params.id;
            var _that=this;
            var flag;
            var by=document.getElementsByClassName("quomore-box")[0];
            var n=0;
            by.addEventListener("scroll",function(){
                var nScrollHight = by.scrollHeight;
                var  nScrollTop = by.scrollTop;
                var nDivHight=by.offsetHeight;
                if(nScrollTop + nDivHight+300 >= nScrollHight){
                    flag=true;
                     n+=1;
                    if(n==1&&flag){
                    Vue.$startIndex=Vue.$endIndex+1;
                    Vue.$endIndex=Vue.$startIndex+Vue.$interval;
                    if(_that.ranks==0){
                        if(!_that.active1&&!_that.active2){
                           _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC"); 
                        }else if(_that.active1&&!_that.active2){
                            if(!_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC");
                             }else if(_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC");
                             }  
                        }else if(!_that.active1&&_that.active2){
                             if(!_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","DESC");
                             }else if(_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","ASC");
                             }  
                        }
                    }
                    else if(_that.ranks==1){
                         //默认
                        if(!_that.active1&&!_that.active2){
                           _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC"); 
                        }
                        //涨幅
                        else if(_that.active1&&!_that.active2){
                            if(!_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC");
                             }else if(_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC");
                             }  
                        }
                        //涨跌
                        else if(!_that.active1&&_that.active2){
                             if(!_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","DESC");
                             }else if(_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","ASC");
                             }  
                        } 
                    }
                    else if(_that.ranks==3){
                          //默认
                        if(!_that.active1&&!_that.active2){
                           _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"turnover","DESC");
                        }
                        //涨幅
                        else if(_that.active1&&!_that.active2){
                            if(!_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC");
                             }else if(_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC");
                             }  
                        }
                        //涨跌
                        else if(!_that.active1&&_that.active2){
                             if(!_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","DESC");
                             }else if(_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","ASC");
                             }  
                        } 
                     }else if(_that.ranks==5){
                            //默认
                        if(!_that.active1&&!_that.active2){
                            _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"tradeAmount","DESC");
                        }
                        //涨幅
                        else if(_that.active1&&!_that.active2){
                            if(!_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC");
                             }else if(_that.show1){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC");
                             }  
                        }
                        //涨跌
                        else if(!_that.active1&&_that.active2){
                             if(!_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","DESC");
                             }else if(_that.show2){
                                 _that.getRanking(_that.ranks,Vue.$startIndex,Vue.$endIndex,"diff_money","ASC");
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
            //////////////////////////////////////
            var startx, starty;
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
        activated(){
            this.active1=false;this.active2=false;
            this.items1=[];this.items2=[];this.items3=[];this.items4=[];
            this.ranks=this.$route.params.id;
            this.$vux.loading.show({text: '正在加载'}); 
            Vue.$startIndex=1;//起始
            Vue.$interval=30;//间隔数
            Vue.$endIndex=Vue.$startIndex+Vue.$interval;//结束 
            if(this.ranks==0){
                this.now=1;this.show1=false;
                this.getRanking(this.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","DESC"); 
            }else if(this.ranks==1){
                this.now=1;this.show1=true;
                this.getRanking(this.ranks,Vue.$startIndex,Vue.$endIndex,"diff_rate","ASC"); 
            }else if(this.ranks==3){
                this.now=0;
                this.getRanking(this.ranks,Vue.$startIndex,Vue.$endIndex,"turnover","DESC"); 
            }else if(this.ranks==5){
                this.now=0;
                this.getRanking(this.ranks,Vue.$startIndex,Vue.$endIndex,"tradeAmount","DESC");
            }
        },
        methods:{
            getRanking:function(type,start,end,field,oder){
                var _that=this;
                this.$vux.loading.show({text: '正在加载'}); 
                this.$axios.post('GetRanking', {
                    type:type,
                    startIndex:start,
                    endIndex:end,
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
                        }else if(type==3){
                             response.data.List.forEach((v,i)=>{
                            _that.items3.push(v);    
                            })
                            _that.items=_that.items3;   
                        }else if(type==5){
                             response.data.List.forEach((v,i)=>{
                            _that.items4.push(v);    
                            })
                            _that.items=_that.items4;   
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
                    this.$refs.fix.scrollLeft=this.$refs.rightbody.scrollLeft;
                })
            },
            //切换item
            pass(index){
                var by=document.getElementsByClassName("quomore-box")[0];
                by.scrollTop=0;
                this.items=[];
                if(this.$route.params.id==0){
                    this.items1=[];
                    if(index===1){
                        this.now=1;
                        this.show1=false;
                        this.getRanking(0,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.now=2;
                        this.show2=false;
                        this.getRanking(0,1,31,"diff_money","DESC");
                    }
                }else if(this.$route.params.id==1){
                     this.items2=[];
                     if(index===1){
                        this.now=1;
                        this.show1=false;
                        this.getRanking(1,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.now=2;
                        this.show2=false;
                        this.getRanking(1,1,31,"diff_money","DESC");
                    }
                }else if(this.$route.params.id==3){
                     this.items3=[];
                     if(index===1){
                        this.now=1;
                        this.show1=false;
                        this.getRanking(3,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.now=2;
                        this.show2=false;
                        this.getRanking(3,1,31,"diff_rate","DESC");
                    }
                }else if(this.$route.params.id==5){
                     this.items4=[];
                     if(index===1){
                        this.now=1;
                        this.show1=false;
                        this.getRanking(5,1,31,"diff_rate","DESC");
                    }else if(index===2){
                        this.now=2;
                        this.show2=false;
                        this.getRanking(5,1,31,"diff_money","DESC");
                    }
                } 
            },
            //false ASC   true DESC(默认)
            changeOders:function(index,show){
                var by=document.getElementsByClassName("quomore-box")[0];
                by.scrollTop=0;
                var _that=this;
                //涨幅
                if(index==1){
                    this.active1=true;
                    this.active2=false;
                    this.show1=!this.show1;
                    if(this.$route.params.id==0){
                         if(show==false){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_rate","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==1){
                         if(show==false){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_rate","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==3){
                         if(show==false){
                            this.items3=[];
                            _that.getRanking(3,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items3=[];
                            _that.getRanking(3,1,31,"diff_rate","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==5){
                         if(show==false){
                             this.items4=[];
                            _that.getRanking(5,1,31,"diff_rate","ASC"); //升序                                        
                        } else if(show==true){
                            this.items4=[];
                            _that.getRanking(5,1,31,"diff_rate","DESC");  //降序
                        } 
                    }
                   
              }
              //涨幅
               else if(index==2){
                    this.active2=true;
                    this.active1=false;
                    this.show2=!this.show2;
                    if(this.$route.params.id==0){
                         if(show==false){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items1=[];
                            _that.getRanking(0,1,31,"diff_money","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==1){
                         if(show==false){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items2=[];
                            _that.getRanking(1,1,31,"diff_money","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==3){
                         if(show==false){
                            this.items3=[];
                            _that.getRanking(3,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items3=[];
                            _that.getRanking(3,1,31,"diff_money","DESC");  //降序
                        } 
                    }else if(this.$route.params.id==5){
                         if(show==false){
                             this.items4=[];
                            _that.getRanking(5,1,31,"diff_money","ASC"); //升序                                        
                        } else if(show==true){
                            this.items4=[];
                            _that.getRanking(5,1,31,"diff_money","DESC");  //降序
                        } 
                    }
                   
              }    
            },
            toIndividual:function(code){
                 this.$router.push({
                    path:'/markettrend',
                    query:{
                        code:code
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
@riseColor:#FF5E45;
@declearColor:#1CB54A;
@length:12;
   *{
        box-sizing: border-box;
    }
    body{
        height:100%;
    }
    .declearfont{
        color:@declearColor;
    }
    .risefont{
        color:@riseColor;
    }
    .normal{
        font-family: PingFangSC-Medium;
        font-size:0.3rem;
        color: #000000;
        letter-spacing: 0;
        text-align: center;
        line-height: 1rem;
    }
    .quomore-box{
        width:100%;
        height:100%;
        overflow-y: scroll;
        overflow-x: hidden;
        .quomore-body{
            width:100%;
            border-bottom:1px solid rgba(153,153,153,0.50);
            .body-left{
                width:2.6rem;
                height:100%;
                float:left;
                #head-left{
                    width:2.6rem;
                    height:0.6rem;
                    background:#fff;
                    position: fixed;
                    left:0;
                    top:0rem;
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
                            //border-bottom:1px solid rgba(153,153,153,0.50);
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
                top:0rem;
                z-index: 10;
                .hengtiao{
                    position:absolute;
                    width: @length*1.62rem;
                    height:1px;
                    background:red;
                    left:0;
                    top:0.58rem;
                    z-index: 100000;
                }
                .title-list{
                    width:@length*1.62rem;
                    height:0.6rem;
                    background:#fff;
                    border-bottom:1px solid rgba(153,153,153,0.50);
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