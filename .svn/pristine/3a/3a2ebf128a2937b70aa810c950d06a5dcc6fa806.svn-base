<template>
    <div class="swipe-box">
        <div class="graphk-top">
            <div class="left">
                <div>{{text}}</div>
                <div>数据分析量{{num}}</div>
            </div>
            <div class="right">
                <div>{{overall}}</div>
                <div>综合收益率</div>
            </div>
        </div>
        <div class="graphk-center">
            <swiper :options="swiperOption" class="swipe">
               <!--  <swiper-slide>
                    <div class="swiper1-box">
                        <div class="select">
                            <ul>
                                <li @click.prevent="selected(index)" class="li" v-for="(item,index) in lists1">{{item}}</li>
                            </ul>
                        </div>
                        <div class="select-pic">
                            <ul>
                                <li class="pic">
                                    <div id="charts">
                                        <div id="main11"></div>
                                    </div>
                                </li>
                                <li class="pic">
                                    <div id="charts">
                                        <div id="main22"></div>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </swiper-slide> -->
                <swiper-slide>
                     <div class="swiper2">
                        <ul class="swiper2-index">
                            <li><div>{{day}}</div><div></div><div>日收益率</div></li>
                            <li><div class="color">{{success}}</div><div></div><div>操作成功率</div></li>
                            <li><div>{{netprofit}}</div><div></div><div>净值</div></li>
                        </ul>
                        <div class="swiper2-select">
                            <div class="swiper1-box">
                                <div class="select">
                                    <ul id="none">
                                        <li @click.prevent="switcher(index)" class="lii" v-for="(item,index) in lists2">{{item}}</li>
                                        <div></div>
                                    </ul>
                                </div>
                                <div class="select-pic">
                                    <ul>
                                        <li class="picc">
                                            <div id="charts">
                                                <div id="main33"></div>
                                            </div>
                                        </li>
                                        <li class="picc">
                                            <div id="charts">
                                                <div id="main44"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide><div class="img-box"><img :src="example"></div></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="graphk-bottom">
            <div class="text">{{Description}}</div>
            <div class="tonext" @click="tonext()"><img :src="select"><div>选{{text}}股票</div></div>
            <div class="like" @click.prevent="addlike()">
                <img :src="this.IsLike==true ? liked:like">
                <div class="num" :class="this.IsLike==true? 'color':'color1'">{{likenum}}</div>
            </div>
            
        </div>
        <div class="hide">{{items}}</div>
    </div>
</template>
<script>
import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name:'v-swipe',
    props:['items'],
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            ChooseStocks:[],
            ok:true,
            items:'',
            graphLists:['main1','main2','main3','main4','main5','main6'],
            like: require('../../assets/images/graph/imgchoose_btn_moods_nor@' + this.$store.state.dpr + 'x.png'),
            liked:require('../../assets/images/graph/imgchoose_btn_moods_pre@' + this.$store.state.dpr + 'x.png'),
            select:require('../../assets/images/graph/imgchoose_btn_choose_nor@' + this.$store.state.dpr + 'x.png'),
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true
            },
            text:'',//类型
            num:'',//分析数据量
            overall:'',//综合收益率
            example:'',//示例图片
            day:'',//日收益率
            success:'',//操作成功率
            netprofit:'',//净值
            Description:'',
            //lists1:['3个月','全部'],
            lists2:['周收益率','月收益率'],
            can:false,//是否可以点赞
            likenum:'',//点赞数,
            IsLike:'',
            n:0,


        }
    },
    created(){
    },
    mounted(){
        this.$vux.loading.show({text: '正在加载'}); 
        var _that=this;
        var id=this.items;
        //三个月
        var s1x=[];
        var s1y1=[];// hs300
        var s1y2=[];//  收益
        //all
        var s2x=[];
        var s2y1=[];
        var s2y2=[];
         //week
        var s3x=[];
        var s3y=[];
        //mouth
        var s4x=[];
        var s4y=[];
        //获取图形选股首页结果
        this.$axios.post('ChooseStockForId', {
            id:id
        })
        .then((response)=>{
            if(response.data.Success=="true"){
                this.$vux.loading.hide(); 
                this.text=response.data.RefText;
                this.num=response.data.Analyze;
                this.overall=response.data.Overall;
                this.example=this.getImgUrl(response.data.Example);
                this.day=response.data.Day;
                this.success=response.data.SuccessRate;
                this.netprofit=response.data.NetProfit;
                s1x=response.data.Hs300[0];
                s1y1=response.data.Hs300[1];
                s1y2=response.data.Income[1];
                s2x=response.data.Hs300All[0];
                s2y1=response.data.Hs300All[1];
                s2y2=response.data.IncomeAll[1];
                s3x=response.data.WeekIncome[0];
                s3y=response.data.WeekIncome[1];
                s4x=response.data.MonthIncome[0];
                s4y=response.data.MonthIncome[1];

           }
        }) 
        // setTimeout(function(){
        //             _that.$line('main11',s1x,s1y1,s1y2);//三个月
        //             _that.$line('main22',s2x,s2y1,s2y2);//全部
        // },200)
        // var canvas1=document.getElementById('main11');
        // var canvas2=document.getElementById('main22');
        //     canvas1.style.width=7.1+"rem";
        //     canvas1.style.height=4.8+'rem';
        //     canvas2.style.width=7.1+"rem";
        //     canvas2.style.height=4.8+'rem';
        var canvas3=document.getElementById('main33');
        var canvas4=document.getElementById('main44');
            canvas3.style.width=7.1+"rem";
            canvas3.style.height=4+'rem';
            canvas4.style.width=7.1+"rem";
            canvas4.style.height=4+'rem';
            setTimeout(function(){
                    _that.$columnar('main33',s3x,s3y);
                    _that.$columnar('main44',s4x,s4y);
        },20)
        //点赞
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        this.$axios.post('GetChooseStockLike',{
            userId:JSON.parse(sessionStorage.userId),
            csId:id
        })
        .then((response)=>{
            if(response.data.Success=="true"){
                this.IsLike=response.data.Data.IsLike;
                if(response.data.Data.IsLike==false){
                    this.can=true;
                }else{
                    this.can=false;
                }
                this.likenum=response.data.Data.LikeCount;
            }
        })
        
    },
     updated(){
        var _that=this;
        //Vue.$id='';
        var id=this.items;
        //3
        var s1x=[];
        var s1y1=[];// hs300
        var s1y2=[];//  收益
        //all
        var s2x=[];
        var s2y1=[];
        var s2y2=[];
        //week
        var s3x=[];
        var s3y=[];
        //mouth
        var s4x=[];
        var s4y=[];

        //获取图形选股首页结果
        this.$axios.post('ChooseStockForId', {
            id:id
        })
        .then((response)=>{
            if(response.data.Success=="true"){
                this.text=response.data.RefText;
                this.num=response.data.Analyze;
                this.overall=response.data.Overall;
                this.example=this.getImgUrl(response.data.Example);
                this.day=response.data.Day;
                this.success=response.data.SuccessRate;
                this.netprofit=response.data.NetProfit;
                this.Description=response.data.Description;
                s1x=response.data.Hs300[0];
                s1y1=response.data.Hs300[1];
                s1y2=response.data.Income[1];
                s2x=response.data.Hs300All[0];
                s2y1=response.data.Hs300All[1];
                s2y2=response.data.IncomeAll[1];
                s3x=response.data.WeekIncome[0];
                s3y=response.data.WeekIncome[1];
                s4x=response.data.MonthIncome[0];
                s4y=response.data.MonthIncome[1];
           }
        })
        // setTimeout(function(){
        //             _that.$line('main11',s1x,s1y1,s1y2);//三个月
        //             _that.$line('main22',s2x,s2y1,s2y2);//全部
        //     },50)
        // var canvas1=document.getElementById('main11');
        // var canvas2=document.getElementById('main22');
        //     canvas1.style.width=7.1+"rem";
        //     canvas1.style.height=4.8+'rem';
        //     canvas2.style.width=7.1+"rem";
        //     canvas2.style.height=4.8+'rem';
            setTimeout(function(){
                    _that.$columnar('main33',s3x,s3y);
                    _that.$columnar('main44',s4x,s4y);
        },200)
        var canvas3=document.getElementById('main33');
        var canvas4=document.getElementById('main44');
            canvas3.style.width=7.1+"rem";
            canvas3.style.height=4+'rem';
            canvas4.style.width=7.1+"rem";
            canvas4.style.height=4+'rem';
        //点赞
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        this.$axios.post('GetChooseStockLike',{
            userId:JSON.parse(sessionStorage.userId),
            csId:id
        })
        .then((response)=>{
            if(response.data.Success=="true"){
                this.IsLike=response.data.Data.IsLike;
                if(response.data.Data.IsLike==false){
                    this.can=true;
                }else{
                    this.can=false;
                }
                this.likenum=response.data.Data.LikeCount;
            }
        })
        
    },
    methods:{
        //修改图片路径
        getImgUrl:function(srcUrl){
              return 'http://www.shangjin666.cn:9988'+srcUrl;
        },
        // //切换选项卡状态
        // selected:function(index){
        //     for(var i=0;i<2;i++){
        //         document.getElementsByClassName("li")[i].style.background="#fff";
        //         document.getElementsByClassName("li")[i].style.color="#378AD6";
        //         document.getElementsByClassName("pic")[i].style.opacity=0;
        //     }
        //     document.getElementsByClassName("li")[index].style.background="#378AD6";
        //     document.getElementsByClassName("li")[index].style.color="#fff";
        //     document.getElementsByClassName("pic")[index].style.opacity=1;
            
        // },
         switcher:function(index){
            for(var i=0;i<2;i++){
                document.getElementsByClassName("lii")[i].style.color="#999";
                document.getElementsByClassName("picc")[i].style.opacity=0;
            }
            document.getElementsByClassName("lii")[index].style.color="#FF5E45";
            document.getElementsByClassName("picc")[index].style.opacity=1;
            
        },
        //添加喜欢
        addlike:function(){
            if(this.can==true){
                this.$axios.post('SetChooseStockLike',{
                    userId:JSON.parse(sessionStorage.userId),
                    csId:this.items
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.can=false;
                        this.likenum=this.likenum+1;
                    }
                })
            }
        },
        //形态选股结果页
        tonext(){
            var id=this.items;
            this.$router.push({
                name:'GraphResult',
                params:{
                    id:id,
                    type:this.text

                }
            })

        }
    }
}
</script>
<style lang="less" scoped>
body{
    background:#f8f8f8;
}
*{
  box-sizing:border-box;
}
ul,li{
  list-style: none;
}
.hide{
    display: none;
}
.color{
    color:#999;
}
.color1{
    color: #FF6A6A;

}
.swipe-box{
    width: 100%;
    height:100%;
    overflow-y: scroll;
    background:#fff;
    .graphk-top{
        width:100%;
        height:1.36rem;
        background:#fff;
        .left, .right{
            width:50%;
            height:100%;
            float:left;
            padding-left:0.2rem;
            padding-right:0.2rem;
        }
        .left{
            div:first-child{
                text-align: left;
                font-family: PingFangSC-Medium;
                font-size:0.36rem;
                color: #000000;
                letter-spacing: 0;
                line-height:0.36rem;
                padding-top:0.3rem;
            }
            div:last-child{
                font-family: PingFangSC-Regular;
                font-size: 0.24rem;
                color: #000000;
                letter-spacing: 0;
                line-height: 0.24rem;
                margin-top:0.14rem;
            }
        }
        .right{
            div:first-child{
                font-family: PingFangSC-Medium;
                font-size:0.48rem;
                color: #FF5E45;
                letter-spacing: 0;
                line-height:0.36rem;
                text-align: right;
                padding-top:0.3rem;
            }
            div:last-child{
                font-family: PingFangSC-Regular;
                font-size: 0.24rem;
                color: #FF5E45;
                letter-spacing: 0;
                margin-top:0.12rem;
                text-align: right;
            }
        }
    }
    .graphk-center{
        width:100%;
        height:5.68rem;
        position: relative;
        .swipe{
           width:100%;
           height:5.68rem;
           .swiper1-box{
                width:100%;
                height:5.28rem;
                .select{
                    width:100%;
                    height:0.48rem;
                    padding-left: 0.2rem;
                    ul{
                        width:2rem;
                        height:100%;
                        background: #FFFFFF;
                        border: 0.01rem solid #378AD6;
                        border-radius:0.06rem;
                        overflow: hidden;
                        li{
                            float: left;
                            width: 50%;
                            font-family: PingFangSC-Regular;
                            font-size:0.24rem;
                            color: #378AD6;
                            letter-spacing: 0;
                            text-align: center;
                            height:100%;
                            cursor: pointer;
                        }
                        li:last-child{
                            background:#378AD6;
                            color:#fff;
                        }
                    }
                }
                .select-pic{
                    width:100%;
                    height:4.8rem;
                    ul{
                        width:100%;
                        height:100%;
                        position: relative;
                        background:#fff;
                        li{
                            width: 100%;
                            height:100%;
                            position: absolute;
                            left:0;
                            top:0;
                            background:#fff;
                        }
                        li:first-child{
                            opacity: 1;
                            #charts{
                                width:100%;
                                height:100%;
                                #main1{
                                    width: 100%;
                                    height:100%;
                                }
                            }
                        }
                        li:last-child{
                            #charts{
                                width:100%;
                                height:100%;
                                #main2{
                                    width:100%;
                                    height:100%;
                                }
                            }
                        }
                    }
                }
            }
           .graphs{
            width: 6.7rem;
            height:4.46rem;
            margin:0 auto;
            margin-top:0.2rem;
            background:red;
            overflow: hidden;
            li{
                width: 6.7rem;
                height:4.46rem;
                position: absolute;
                left:0.2rem;
                top:0.2rem;
                .sha{
                    width: 100%;
                    height:100%;
                    display: block;
                    img{
                        width: 100%;
                        height:100%;
                        display: block;
                
                    }
                }   

            }
           }
           img{
            width: 100%;
            height:100%;
            display: block;
           }
        }
        .swiper-pagination{
            position: absolute;
            bottom:-0.2rem;
            left:0;
            
        }
    }
    .graphk-bottom{
        width:100%;
        height:2.63rem;
        .text{
            width:6.7rem;
            height:auto;
            margin:0 auto;
            font-family: PingFangSC-Regular;
            font-size:0.24rem;
            color: #CCCCCC;
            letter-spacing:0.02rem;
        }
        .like{
            width:0.8rem;
            height:0.8rem;
            margin:0 auto;
            padding-top: 0.2rem;
            img{
                width:100%;
                display: block;
            }
            .num{
                font-family: PingFangSC-Regular;
                font-size:0.24rem;
                letter-spacing:0.02rem;
                margin:0 auto;
                text-align: center;
            }
        }
        .tonext{
            width:6.7rem;
            height:auto;
            margin:0 auto;
            padding-top:0.2rem;
            padding-bottom: 0.2rem;
            position: relative;
            div{
                font-family: PingFangSC-Regular;
                font-size:0.36rem;
                color: #FFFFFF;
                letter-spacing:0.02rem;
                line-height:1.2rem;
                text-align: center;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height:100%;
            }
            img{
                width: 100%;
                display: block;
            }
        }

    }
 }
 .swipe-box{
   .swiper2{
    width: 100%;
    height:100%;
    .swiper2-index{
        width: 100%;
        height:1.16rem;
        margin-top:0.2rem;
        li{
            width: 33.333%;
            height:100%;
            float: left;
            position: relative;
            div:first-child{
                font-family: PingFangSC-Medium;
                font-size:0.36rem;
                text-align: center;
                color: #FF5E45;
                letter-spacing: 0;
            }
            div.color{
                color:#000;
            }
            div:nth-child(2){
                width: 0.02rem;
                height:0.8rem;
                background:#D8D8D8;
                position: absolute;
                right: 0;
                top:50%;
                margin-top:-0.4rem;
            }
            div:last-child{
                font-family: PingFangSC-Regular;
                font-size:0.24rem;
                color: #000000;
                letter-spacing: 0;
                line-height:0.32rem;
                text-align: center;
            }
        }
        li:last-child div:nth-child(2){
            display: none;
        }

    }
    .swiper2-select{
        width: 100%;
        height:4.32rem;
            .swiper1-box{
            width:100%;
            height:100%;
             .select{
                width:100%;
                height:0.48rem;
                padding-left: 0.2rem;
                ul{
                    width:2.4rem;
                    height:100%;
                    background: #FFFFFF;
                    overflow: hidden;
                    position: relative;
                    border:none;
                    #none{
                        border:none;
                    }
                    li{
                        float: left;
                        width: 50%;
                        font-family: PingFangSC-Regular;
                        font-size:0.24rem;
                        color: #999;
                        letter-spacing: 0;
                        text-align: center;
                        height:100%;
                    }
                    li:first-child{
                        color:#FF5E45;
                    }
                    div{
                        position: absolute;
                        left:50%;
                        top:50%;
                        margin-top:-0.14rem;
                        width:0.02rem;
                        height:0.2rem;
                        background:#999;
                    }
                }
            }
            .select-pic{
                width:100%;
                height:3.84rem;
                ul{
                    width:100%;
                    height:100%;
                    position: relative;
                    background:#fff;
                    li{
                        width: 100%;
                        height:100%;
                        position: absolute;
                        left:0;
                        top:0;
                        background:#fff;
                        overflow: hidden;
                    }
                    li:last-child{
                        opacity: 0;
                        #charts{
                            width:100%;
                            height:100%;
                            overflow: hidden;
                            #main3{
                                width: 100%;
                                height:100%;
                            }
                        }
                    }
                    li:first-child{
                        #charts{
                            width:100%;
                            height:100%;
                            overflow: hidden;
                            #main4{
                                width:100%;
                                height:100%;
                            }
                        }
                    }
                }
            }
        }
    }
} 
 }
.img-box{
    width:6.7rem;
    height:4.46rem;
    margin:0 auto;
    img{
        display: block;
        width: 100%;
        border-radius: 0.06rem;
        border:1px solid rgba(153,153,153,0.50);
    }
}
</style> 