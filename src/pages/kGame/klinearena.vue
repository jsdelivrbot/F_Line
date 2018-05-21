<style scoped lang="less">
// .star_img{
//     width:667px;
//     height:375px;
// }
@font-face {
    font-family: 'FZSKJW--GB1-0';
    src: url('../../assets/fonts/FZSKJW--GB1-0.ttf');

    font-weight: normal;
    font-style: normal;
}
em{
    font-style:normal;
}
.game_wrap {
    background: #081928;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &>div:nth-child(1) {
        height:83.3%;
        #charts {
            width: 96%;
            margin-left: 2%;
            height: 100%;
            border: 1px solid #CCCCCC;
            box-sizing: border-box;
        }
        #main {
            widht: 100%;
            height: 100%;
        }
    }
    &>div:nth-child(2) {
        height: 16.7%;
        display: flex;
        &>div:nth-child(1) {
            flex: 1;
            position: relative;
            img {
                position: absolute;
                width: 1.3rem;
                left: 0.2rem;
                top: 0.1rem;
            }
        }
        &>div:nth-child(2) {
            flex: 3;
            position: relative;
            display:flex;
            &>div{
                position:relative;
            }
            &>div:nth-child(1){
                flex:4;
                img {
                    height: 0.35rem;
                    position: absolute;
                    left: 0.1rem;
                    top: 20%;
                }
                &>p {
                    position: absolute;
                    color:#619FCF;
                    font-size: 0.2rem;
                    left: 0.6rem;
                    top: 25%;
                }
            }
             &>div:nth-child(2){
                flex:4;
                img {
                    height: 0.35rem;
                    position: absolute;
                    right: 0.6rem;      
                    top: 20%;
                }
                &>span {
                    position: absolute;
                    color:#619FCF;
                    font-size: 0.2rem;
                    right: 0;
                    top: 25%;
                }
            }
            &>div:nth-child(3){
                flex:6;
                p{
                    position:absolute;
                    font-family: FZSKJW--GB1-0;
                    font-size:0.2rem;
                    color: #619FCF;
                    letter-spacing: 0;
                    top:25%;
                    right:0;
                    
                }
            }
        }
        &>div:nth-child(3) {
            flex: 1;
            position: relative;
            img {
                position: absolute;
                width: 1.3rem;
                right: 0.2rem;
                top: 0.1rem;
            }
        }
    }
}

.game_mask {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    top: 0;
    left: 0;
    .game_res {
        width: 80%;
        height: auto;
        position: relative;
        left: 10%;
        top: 10%;
        border: 2px solid yellow;
        background: #081928;
        border-radius: 6px;
        z-index: 500;
        p {
            text-align: center;
            font-family: FZSKJW--GB1-0;
            font-size: 0.3rem;
            color: #619FCF;
            letter-spacing: 0;
        }
        table {
            width: 70%;
            margin-left: 20%;
            font-family: FZSKJW--GB1-0;
            font-size: 0.3rem;
            color: #619FCF;
            letter-spacing: 0;
        }
        .game_again {
            width: 1.5rem;
            height: 0.5rem;
            border: 2px solid yellow;
            border-radius: 6px;
            text-align: center;
            font-family: FZSKJW--GB1-0;
            font-size: 0.3rem;
            color: #FFDB7F;
            letter-spacing: 0;
            line-height: 0.5rem;
            margin: 0 auto;
            margin-bottom:20px;
        }
    }
    .game_con {
        width: 80%;
        height: 80%;
        position: relative;
        left: 10%;
        top: 10%;
        border: 2px solid yellow;
        background: #081928;
        border-radius: 6px;
        z-index: 500;
        .game_inhead {
            width: 100%;
            height: 0.5rem;
            text-align: center;
            font-family: FZSKJW--GB1-0;
            font-size: 0.3rem;
            color: #FFCC5A;
            letter-spacing: 0;
            text-shadow: 0 4px 10px #031525;
            p {
                font-family: FZSKJW--GB1-0;
                font-size: 0.3rem;
                color: #FFCC5A;
                letter-spacing: 0;
            }
        }
        .game_tol {
            width: 90%;
            margin-left: 5%;
            height: 0.5rem;
            background: #04111D;
            border-radius: 6px;
            position: relative;
            img {
                position: absolute;
                top: 0.1rem;
                left: 0.1rem;
                width: 0.3rem;
            }
            span {
                font-family: PingFangSC-Medium;
                font-size: 0.25rem;
                color: #CCCCCC;
                letter-spacing: 0;
                position: absolute;
                top: 0.05rem;
            }
            span:nth-child(2) {
                left: 0.6rem;
            }
            span:nth-child(3) {
                right: 0.1rem;
            }
        }
        .game_det {
            margin-top: 0.05rem;
            width: 90%;
            margin-left: 5%;
            height: 60%;
            overflow-y: scroll;
            border-radius: 6px;
            table {
                width: 100%;
                background: #04111D;
                border-radius: 6px;
                padding: 0.1rem;
            }
            td {
                font-family: PingFangSC-Regular;
                font-size: 0.16rem;
                color: #CCCCCC;
                letter-spacing: 0;
            }
            .showmore{
                border:1px solid #FFCC5A ;
                border-radius: 4px;
                text-align: center;
            }
        }
    }
}

.showmask {
    display: block;
}

.showit {
    display: block;
}

.hideit {
    display: none;
}
.game_kgds{
    position: absolute;
    font-family: PingFangSC-Regular;
    font-size: 0.16rem;
    color: white;
    letter-spacing: 0;
    z-index:500;
    left:45px;
    top:0.2rem;
    td{
        padding-right:4px;
        color:'#CCCCCC'
    }
}
.fontred{
    color:red!important;
}
.fontgreen{
    color:green!important;
}
.showloadmore{
    display: none;
}
.accounfont{
    font-family:FZSKJW--GB1-0;
    font-size: 0.3rem;
    color: #619FCF;
    letter-spacing: 0;
}

.game_v{
    background: #071929;
    overflow:hidden;
    .v_head{
        width: 100%;
        height:16%;
        position: relative;
        padding:0.2rem;
        .float1{
            float:left;
            position: relative;
            img{
                position: absolute;
                width: 0.8rem;
            }
            .accounfont{
                font-family: FZSKJW--GB1-0;
                font-size: 0.3rem;
                color: #619FCF;
                letter-spacing: 0;
                position: absolute;
                top:0.25rem;
                left:0.85rem;
                width:4rem;
            }
        }
        .float2{
            float:right;
            padding-right:0.4rem;
            p{
                font-family: FZSKJW--GB1-0;
                font-size: 0.36rem;
                color: #619FCF;
                letter-spacing: 0;
            }
        }
        table {
            width: 100%;
            position: relative;
            top:0.4rem;
            font-family: FZSKJW--GB1-0;
            font-size: 0.3rem;
            color: #CCCCCC;
            letter-spacing: 0;
            text-align: left;
        }
       
    }
    .game_cont{
        height:64%;
        #charts {
            width: 96%;
            margin-left: 2%;
            height: 100%;
            border: 1px solid #333333;
            box-sizing: border-box;
        }
        #main {
            widht: 100%;
            height: 100%;
        }
    }
   .v_foot{
        width: 100%;
        height:20%;
        .v_foot1{
            width:100%;
            height:40%;
            &>div{
                position: relative;
                text-align: center;
                width: 92%;
                height: 100%;
                margin-left: 4%;
                img{
                    position: absolute;
                    width: 0.8rem;
                    left:0.4rem;
                    top:0.1rem;
                }
                span{
                    font-size:0.3rem;
                    color: #CCCCCC;
                    position: absolute;
                    left: 1.4rem;
                    top:0.3rem;
                }
                &>section{
                    position: absolute;
                    width:4rem;
                    height: 0.3rem;
                    border:1px solid #FFCC5A;
                    left:2.4rem;
                    top:0.35rem;
                    &>section{
                        height:100%;
                        background-image: linear-gradient(-180deg, #FFCC5A 0%, #FFD66B 49%, #B58F44 100%);
                    }
                }
            }
            
        }
        .v_foot2{
            width:100%;
            height:60%;
            position: relative;
            img{
                height:50%;
                position: absolute;
                top:0.2rem;
            }
            img:nth-child(1){
                left:0.4rem;
            }
            img:nth-child(2){
                right:0.4rem;
            }
        }
   }
}
.v_alert1{
    top:25%!important;
    .game_inhead{
        p{
            font-size: 0.5rem!important;
        }
    }
    .game_again{
        font-size: 0.6rem!important;
        width: 3rem!important;
        height: 0.8rem!important;
        margin-top:0.4rem!important;
        line-height: 0.8rem!important;
    }
    
    table{
        font-size: 0.4rem!important;
    }
}
.v_alert2{
    height: 60%!important;
    width: 90%!important;
    left:5%!important;
    top: 20%!important;
    .game_inhead{
        height: 1rem!important;
        p{
            font-size: 0.5rem!important;
        }
    }
    .game_det{
        height: 70%!important;
    }
}
</style>
<template>
    <div>
        <!-- <img class="star_img" ref="star_img" src="../assets/kgame/kstart.png"> -->
        <div  ref="gamewrap" :class="[screenstate=='horizon'?'game_wrap':'game_v']">
            <div v-if="screenstate=='vertical'" class="v_head">
                <div class="float1" @click="showaccount">
                    <img :src="userdata.Portrait">
                    <p class="accounfont" style="color:#CCCCCC">{{userdata.UserName|interlize}}</p>
                </div>
                <div  class="float2"> 
                    <p style="color:#CCCCCC">收益率:<em :class="[curincomrate-1>=0 ? 'fontred' : 'fontgreen','fontwhite']">{{((curincomrate-1)*100).toFixed(2)}} %</em></p>
                </div>
                <table class="v_kgds" v-if="screenstate=='vertical'">
                    <tr>
                        <td>开：<em :class="[open-lastclose>=0? 'fontred' : 'fontgreen']">{{open}}</em></td>
                        <td>低：<em :class="[min-lastclose>=0? 'fontred' : 'fontgreen']">{{min}}</em></td>
                        <td>涨跌：<em :class="[money>=0 ? 'fontred' : 'fontgreen']">{{money}}</em></td>
                    </tr>
                    <tr>     
                        <td>高：<em :class="[max-lastclose>=0? 'fontred' : 'fontgreen']">{{max}}</em></td>
                        <td>收：<em :class="[max-open>=0 ? 'fontred' : 'fontgreen']">{{close}}</em></td>
                        <td>涨幅：<em :class="[rate>=0 ? 'fontred' : 'fontgreen']">{{rate}}%</em></td>
                    </tr>
                </table>
            </div>
            <div class="game_cont">
                <div id="charts">
                    <table class="game_kgds" v-if="screenstate=='horizon'">
                        <tr>
                            <td>开：<em :class="[open-lastclose>=0? 'fontred' : 'fontgreen']">{{open}}</em></td>
                            <td>高：<em :class="[max-lastclose>=0? 'fontred' : 'fontgreen']">{{max}}</em></td>
                            <td>低：<em :class="[min-lastclose>=0? 'fontred' : 'fontgreen']">{{min}}</em></td>
                            <td>收：<em :class="[max-open>=0 ? 'fontred' : 'fontgreen']">{{close}}</em></td>
                            <td>涨跌：<em :class="[money>=0 ? 'fontred' : 'fontgreen']">{{money}}</em></td>
                            <td>涨幅：<em :class="[rate>=0 ? 'fontred' : 'fontgreen']">{{rate}}%</em></td>
                        </tr>
                    </table>
                    <div id="main"></div>
                </div>
            </div>
            <div class="game_foot"  v-if="screenstate=='horizon'">
                <div>
                    <img @click="leftcilck" :src="leftimg">
                </div>
                <div>
                    <div @click="showaccount">
                        <img :src="userdata.Portrait">
                        <p style="color:#CCCCCC" class="accounfont">{{userdata.UserName|interlize}}</p>
                    </div>
                    <div>
                        <img src="../../assets/game/home_icon_quantity@3x.png">
                        <span style="color:#CCCCCC">{{count}}/20</span>
                    </div>
                    <div>
                        <p style="color:#CCCCCC">收益率:<em :class="[curincomrate-1>=0 ? 'fontred' : 'fontgreen','fontwhite']">{{((curincomrate-1)*100).toFixed(2)}} %</em></p>
                    </div>
                </div>
                <div>
                    <img @click="rightcilck" :src="rightimg">
                </div>
            </div>
            <div v-if="screenstate=='vertical'" class="v_foot">
                <div class="v_foot1">
                     <div>
                        <img src="../../assets/game/home_icon_quantity@3x.png">
                        <span>{{count}}/20</span>
                        <section>
                            <section :style="'width:'+count/20*4+'rem'"></section>
                        </section>
                    </div>
                </div>
                <div class="v_foot2">
                    <img @click="leftcilck" :src="leftimg">
                    <img @click="rightcilck" :src="rightimg">
                </div>
            </div>
        </div>
        <div class="game_mask" @click="hidemask" :class="{'showmask':showmask}">
            <div class="game_con" @click.stop="formask" :class="[showit?'showit':'hideit',screenstate=='horizon'?'':'v_alert2']">
                <div class="game_inhead">
                    <p>K线擂台</p>
                </div>
                <div class="game_tol">
                    <img :src="userdata.Portrait">
                    <span >总收益：<em :class="[Number(curincomrate-1)>=0? 'fontred' : 'fontgreen']">{{(Number(allincome)*(curincomrate-1)).toFixed(2)}}万</em></span>
                    <span >成功率：<em :class="[Number(successrate)>=0? 'fontred' : 'fontgreen']">{{successrate}}%</em></span>
                </div>
                <div class="game_det">
                    <table>
                        <tr>
                            <td>交易时间</td>
                            <td>股票名称</td>
                            <td>图形区间</td>
                            <td>区间涨跌幅</td>
                            <td>收益率</td>
                        </tr>
                        <tr v-for="z in accountdata">
                            <td>{{z.TransactionTime}}</td>
                            <td>{{z.StockName}}</td>
                            <td>{{z.IntervalStart}}<br>{{z.IntervalEnd}}</td>
                            <td :class="[Number(z.Zdf)>=0? 'fontred' : 'fontgreen']">{{z.Zdf}}%</td>
                            <td :class="[Number(z.IncomeRate)>=0? 'fontred' : 'fontgreen']">{{z.IncomeRate}}%</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td @click="loadmore()" class="showmore" :class="{'showloadmore':showloadmore}">加载更多</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="game_res" @click.stop="formask" :class="[showit?'hideit':'showit',screenstate=='horizon'?'':'v_alert1']">
                <div class="game_inhead">
                    <p style="color:#CCCCCC;">{{datas.StockName}}</p>
                    <p style="color:#CCCCCC;font-size:0.24rem!important;letter-spacing: 0;">{{starttime}}~{{endtime}}</p>
                </div>
                <table>
                    <tr>
                        <td style="color:#CCCCCC;">本局收益</td>
                        <td :class="[Number(curincomrate-1)>=0? 'fontred' : 'fontgreen']">{{((curincomrate-1)*100).toFixed(2)}} %</td>
                    </tr>
                    <tr>
                        <td style="color:#CCCCCC;">总收益</td>
                        <td :class="[Number(curincomrate-1)>=0? 'fontred' : 'fontgreen']">{{(Number(allincome)*(curincomrate-1)).toFixed(2)}}万</td>
                    </tr>
                    <tr>
                        <td style="color:#CCCCCC;">成功率</td>
                        <td style="color:#CCCCCC;">{{successrate}}%</td>
                    </tr>
                </table>
                <div class="game_again" @click.stop="gameagain">再来一局</div>
            </div>
        </div>
        <audio preload="auto" id="audioup">
            <source src="../../../static/audio/gameaudio/up.m4a"/>
        </audio>
        <audio preload="auto" id="audiodown">
            <source src="../../../static/audio/gameaudio/down.m4a"/>
        </audio>
        <audio preload="auto" id="audiosalegood">
            <source src="../../../static/audio/gameaudio/salegood.m4a"/>
        </audio>
        <audio preload="auto" id="audiosalebad">
            <source src="../../../static/audio/gameaudio/salebad.m4a"/>
        </audio>
        <audio preload="auto" id="audiolook">
            <source src="../../../static/audio/gameaudio/look.m4a"/>
        </audio>
        <audio preload="auto" id="audiodefeat">
            <source src="../../../static/audio/gameaudio/defeat.m4a"/>
        </audio>
        <audio preload="auto" id="audiowin1">
            <source src="../../../static/audio/gameaudio/win1.m4a"/>
        </audio>
        <audio preload="auto" id="audiowin2">
            <source src="../../../static/audio/gameaudio/win2.m4a"/>
        </audio>
        <audio preload="auto" id="audiowin3">
            <source src="../../../static/audio/gameaudio/win3.m4a"/>
        </audio>
        <audio preload="auto" id="audiodownagain">
            <source src="../../../static/audio/gameaudio/downagain.m4a"/>
        </audio>
        <audio preload="auto" id="audiosalebadagain">
            <source src="../../../static/audio/gameaudio/salebadagain.m4a"/>
        </audio>
    </div>
</template>

<script>
import time from '../../plugins/timeformat.js';
import Vue from 'vue';
export default {
    data() {
        return {
            audioup:false,
            audiodown:false,
            audiosalegood:false,
            audiosalebad:false,
            audiolook:false,
            audiodefeat:false,
            audiowin1:false,
            audiowin2:false,
            leftimg: require('../../assets/game/btn_buy_nor@' + this.$store.state.dpr + 'x.png'),
            rightimg: require('../../assets/game/btn_lookon_nor@' + this.$store.state.dpr + 'x.png'),
            recored: require('../../assets/game/more_icon_record@' + this.$store.state.dpr + 'x.png'),
            back: require('../../assets/game/more_icon_back@' + this.$store.state.dpr + 'x.png'),
            showmask: false,
            //买入股票的状态
            bought: '未买',
            count: 0,
            showmore: false,
            showit: true,
            screenHeight: document.documentElement.clientHeight,
            datas: 0,
            open:0,
            close:0,
            max:0,
            min:0,
            money:0,
            rate:0,
            lastclose:0,
            curincomrate:1,//本局收益率
            redrawdata:'',//重新绘数据
            accountdata:'',//账户信息
            playtotal:0,//玩的总次数
            successtotal:0,//成功的总次数
            allincome:0,//总金额
            successrate:0,//成功率
            starttime:'',//开始购股时间
            endtime:'',//结束购股时间
            zdf:'',//区间涨跌幅
            showloadmore:false,//显示加载更多
            nowPage:1,//页码
            pageSize:10,//数目
            screenstate:'',
            userdata:{
                Portrait:require('../../assets/game/head_nor@' + this.$store.state.dpr + 'x.png'),
                UserName:'游客',
            },
            downtimecount:0,
            badtimecount:0,
            testtime:0,
        }
    },
    created(){
        if(document.documentElement.clientHeight>document.documentElement.clientWidth){
            this.screenstate='vertical';
        }else{
            this.screenstate='horizon';
        }
    },
    mounted() {
        //获取userId 
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;//游客设置
        if(sessionStorage.userId!='undefined'){
            //获取用户头像信息
            this.$axios.post('GetUserInfo', {
                   userId:sessionStorage.userId
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        console.log(response.data)
                        this.userdata=response.data.result;
                        if(this.userdata.Portrait==null||this.userdata.Portrait==''){
                            this.userdata.Portrait=require('../../assets/game/head_nor@' + this.$store.state.dpr + 'x.png');
                        }else{
                            this.userdata.Portrait=localStorage.picIP+response.data.result.Portrait;
                        }
                        if(this.userdata.UserName==null||this.userdata.UserName==''){
                            this.userdata.UserName='账户';
                        }
                    }else{
                        this.$router.push({
                            path:'fault',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                    ;
                    console.log(error);
                });
        }
        // this.$refs.star_img.style.width=document.documentElement.clientWidth+'px';
        // this.$refs.star_img.style.height=document.documentElement.clientHeight+'px';
        //建立临时存储数组
        let temparr = [];
        //存储游客信息
        if(!sessionStorage.touristinfo){
            sessionStorage.touristinfo=JSON.stringify(temparr);//游客游戏结果存储
            sessionStorage.localplaynum=0;//游客游戏次数
            sessionStorage.localplaysuc=0;//游客胜利次数
            sessionStorage.localamount=10;//游客初始金额
        }
        //存储阴影区域坐标
        sessionStorage.markarea = JSON.stringify(temparr);
        //存储B、S标志
        sessionStorage.markpoint = JSON.stringify(temparr);
        var that = this;
        window.onresize = () => {
            return (() => {
                if(document.documentElement.clientHeight>document.documentElement.clientWidth){
                    that.screenstate='vertical';
                }else{
                    that.screenstate='horizon';
                }
                console.log(this.screenstate)
                that.screenHeight = document.documentElement.clientHeight;
                that.$refs.gamewrap.style.height = that.screenHeight + 'px';
                Vue.nextTick(()=>{
                    var jsondata = JSON.parse(JSON.stringify(that.redrawdata));
                    that.$game(jsondata, 'main', false);
                })
            })()
        }
        this.$refs.gamewrap.style.height = document.documentElement.clientHeight + 'px';
        var tempuid;
        if(sessionStorage.userId=='undefined')
            tempuid='';
        else
            tempuid=sessionStorage.userId;
        this.$axios.post('GetRandomHis',{
            userId:tempuid
        })
            .then((response) => {
                // 隐藏loading
                if (response.data.Success == "true") {
                    this.datas = response.data.Result;
                    //总局数
                    this.playtotal=this.datas.Sum;
                    //成功局数
                    this.successtotal=this.datas.SuccessNum;
                    //总收益
                    this.allincome=this.datas.AllIncome;
                    //格式化数据
                    let temp1 = this.$formatgame(this.datas.Ks1);
                    let temp2 = this.$formatgame(this.datas.Ks2);
                    //游戏开始时间
                    this.starttime=temp2[0][0];
                    //游戏结束时间
                    this.endtime=temp2[temp2.length-1][0];
                    //区间涨跌幅
                    this.zdf=(temp2[temp2.length-1][2]-temp2[0][2])/temp2[0][2];
                    //分别存储数据
                    for (let i = 0; i < this.datas.Ks1.length; i++) this.$store.dispatch('ADDDATA', { type: 'gameb', data: temp1[i] });
                    for (let i = 0; i < this.datas.Ks2.length; i++) this.$store.dispatch('ADDDATA', { type: 'gamea', data: temp2[i] });
                    let jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                    this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                    //绘图操作//数据，id,   动画，日k，5，  30 ,平均，分时   开始% 结束%
                    this.$game(jsondata, 'main', false);
                    this.open=this.$store.state.gbdata[59][1];
                    this.max=this.$store.state.gbdata[59][2];
                    this.min=this.$store.state.gbdata[59][3];
                    this.close=this.$store.state.gbdata[59][4];
                    this.money=this.$store.state.gbdata[59][6];
                    this.rate=this.$store.state.gbdata[59][7];
                    this.lastclose=this.$store.state.gbdata[58][1];
                }else{
                    this.$router.push({
                        path:'fault',
                        query:{
                            msg:response.data.Error_msg
                        }
                    });
                }
            })
            .catch((error)=>{
                ;
                console.log(error);
            });

    },
    computed: {

    },
    //过滤
    filters: {
        interlize: function (value) {
            if (!value) return ''
            value=value.substring(0,3)
            return value
        },
    },
    watch: {

    },
    methods: {
        leftcilck() {
            this.count++;
            if (this.count ==20) {
                this.gamecomplete();
            }else{
                switch (this.bought) {
                    //买入
                    case '未买':
                        this.leftimg = require('../../assets/game/btn_positions_nor@' + this.$store.state.dpr + 'x.png');
                        this.rightimg = require('../../assets/game/btn_sale_nor@' + this.$store.state.dpr + 'x.png');
                        this.bought = '持股';
                        this.$store.dispatch('ADDDATA', { type: 'gameb', data: this.$store.state.gadata[this.count - 1] });
                        var jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.$game(jsondata, 'main', false, 'buy');
                        this.curincomrate*=1+this.$store.state.gadata[this.count - 1][7]/100;
                        break;
                    //持股
                    case '持股':
                        this.$store.dispatch('ADDDATA', { type: 'gameb', data: this.$store.state.gadata[this.count - 1] });
                        var jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.$game(jsondata, 'main', false, 'hold');
                        this.bought = '持股';
                        this.curincomrate*=1+this.$store.state.gadata[this.count - 1][7]/100;
                        break;
                }
                var lenb=this.$store.state.gbdata.length-1;
                this.open=this.$store.state.gbdata[lenb][1];
                this.max=this.$store.state.gbdata[lenb][2];
                this.min=this.$store.state.gbdata[lenb][3];
                this.close=this.$store.state.gbdata[lenb][4];
                this.money=this.$store.state.gbdata[lenb][6];
                this.rate=this.$store.state.gbdata[lenb][7];
                this.lastclose=this.$store.state.gbdata[lenb-1][4];
                if(this.close>this.lastclose){
                    this.audioAutoPlay('audioup')
                    this.downtimecount=0;
                }
                else{
                    if(this.downtimecount==0){
                        this.audioAutoPlay('audiodown')
                        this.downtimecount=1;
                    }else{
                         this.audioAutoPlay('audiodownagain')
                    }
                    
                }
            }
            
        },
        rightcilck() {
            this.count++;
            if (this.count == 20) {
                this.gamecomplete();
            }else{
                 switch (this.bought) {
                    //观望
                    case '未买':
                        this.$store.dispatch('ADDDATA', { type: 'gameb', data: this.$store.state.gadata[this.count - 1] });
                        var jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.$game(jsondata, 'main', false, 'look');
                        this.audioAutoPlay('audiolook');
                        var lenb=this.$store.state.gbdata.length-1;
                        this.open=this.$store.state.gbdata[lenb][1];
                        this.max=this.$store.state.gbdata[lenb][2];
                        this.min=this.$store.state.gbdata[lenb][3];
                        this.close=this.$store.state.gbdata[lenb][4];
                        this.money=this.$store.state.gbdata[lenb][6];
                        this.rate=this.$store.state.gbdata[lenb][7];
                        this.lastclose=this.$store.state.gbdata[lenb-1][4];
                        break;
                    //卖出
                    case '持股':
                        this.leftimg = require('../../assets/game/btn_buy_nor@' + this.$store.state.dpr + 'x.png');
                        this.rightimg = require('../../assets/game/btn_lookon_nor@' + this.$store.state.dpr + 'x.png');
                        //   this.$store.state.gadata[0][0]="S"
                        this.$store.dispatch('ADDDATA', { type: 'gameb', data: this.$store.state.gadata[this.count - 1] });
                        var jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.$game(jsondata, 'main', false, 'sell');
                        this.bought = '未买';
                        var lenb=this.$store.state.gbdata.length-1;
                        this.open=this.$store.state.gbdata[lenb][1];
                        this.max=this.$store.state.gbdata[lenb][2];
                        this.min=this.$store.state.gbdata[lenb][3];
                        this.close=this.$store.state.gbdata[lenb][4];
                        this.money=this.$store.state.gbdata[lenb][6];
                        this.rate=this.$store.state.gbdata[lenb][7];
                        this.lastclose=this.$store.state.gbdata[lenb-1][4];
                        if(this.close>this.lastclose){
                            if(this.badtimecount==0){
                                this.audioAutoPlay('audiosalebad');
                                this.badtimecount=1;
                            }else{
                                this.audioAutoPlay('audiosalebadagain');
                            }
                            
                        }
                        else{
                            this.audioAutoPlay('audiosalegood')
                            this.badtimecount=0;
                        }
                        break;
                }
            }
            
        },
        gamecomplete(){
            //userId
            //交易时间transactionTime:this.$time(0)
            //股票名称stockName:this.datas.StockName
            //股票区间interval:this.starttime  this.endtime
            //区间涨跌幅zdf:this.zdf
            //收益率incomeRate:this.curincomrate
            //收益income:this.allincome*this.curincomrate
            //总收益allIncome:this.allincome+this.allincome*this.curincomrate
            //计算成功率rate
            var ran=Math.random();
            if(Number(this.curincomrate-1)>=0){
                if(ran<0.3){
                    this.audioAutoPlay('audiowin1')
                }else if(ran>=0.3&&ran<0.6){
                    this.audioAutoPlay('audiowin2')
                }else{
                    this.audioAutoPlay('audiowin3')
                }
            }else{
                this.audioAutoPlay('audiodefeat')
            }
            var _that=this;
            if(sessionStorage.userId!='undefined'){
                //用户模式
                if(this.curincomrate-1>0){
                    this.successrate=((this.successtotal+1)/(this.playtotal+1)*100).toFixed(2);
                }else{
                    this.successrate=(this.successtotal/(this.playtotal+1)*100).toFixed(2);
                }
                this.$axios.post('SavePKData',{
                    userId:sessionStorage.userId,
                    transactionTime:_that.$time(0),
                    stockName:_that.datas.StockName,
                    interval:_that.starttime+'-'+_that.endtime,
                    zdf:(_that.zdf*100).toFixed(2),
                    incomeRate:((_that.curincomrate-1)*100).toFixed(2),
                    income:Number(_that.allincome)*Number(_that.curincomrate-1),
                    allIncome:Number(_that.allincome)+Number(_that.allincome)*(_that.curincomrate-1),
                    rate:_that.successrate
                })
                    .then((response) => {
                        console.log(response.data)
                        // 隐藏loading
                        if (response.data.Success == "true") {
                            this.showmask = true;
                            this.showit = false;
                            this.count = 0;
                        }else{
                            this.$router.push({
                                path:'fault',
                                query:{
                                    msg:response.data.Error_msg
                                }
                            });
                        }
                    })
                    .catch((error)=>{
                        ;
                        console.log(error);
                    });
            }else{
                //游客模式 游戏结果本地存储
                sessionStorage.localplaynum=Number(sessionStorage.localplaynum)+1;
                //成功率
                if(this.curincomrate-1>0){
                    sessionStorage.localplaysuc=Number(sessionStorage.localplaysuc)+1;
                    this.successrate=(Number(sessionStorage.localplaysuc)/(Number(sessionStorage.localplaynum))*100).toFixed(2);
                }else{
                    this.successrate=(Number(sessionStorage.localplaysuc)/(Number(sessionStorage.localplaynum))*100).toFixed(2);
                }
                //本局收益金额
                this.monincome=Number(sessionStorage.localamount)*Number(_that.curincomrate-1);
                //总金额
                this.allincome=Number(sessionStorage.localamount)+this.monincome;
                sessionStorage.localamount=this.allincome;
                //创建临时对象
                let temp1 = JSON.parse(sessionStorage.touristinfo);
                let temp2={
                    TransactionTime:_that.$time(0),
                    StockName:_that.datas.StockName,
                    IntervalStart:_that.starttime,
                    IntervalEnd:_that.endtime,
                    Zdf:(_that.zdf*100).toFixed(2),
                    IncomeRate:((_that.curincomrate-1)*100).toFixed(2),
                    income:_that.monincome,
                    allIncome:sessionStorage.localamount,
                    rate:_that.successrate,
                }
                temp1.push(temp2);
                sessionStorage.touristinfo=JSON.stringify(temp1);
                this.accountdata=JSON.parse(sessionStorage.touristinfo);
                this.showmask = true;
                this.showit = false;
                this.count = 0;
            }
        },
        gomore() {
            this.showmore = true;
        },
        go_back() {
            this.showmore = false;
        },
        hidemask() {
            if(this.showit){
                this.showmask = false;
            }
            this.nowPage=1;
            this.pageSize=10;
            this.showloadmore=false;
        },
        formask() { },
        showaccount() {
            //获取账户信息
            if(sessionStorage.userId!='undefined'){
                this.$axios.post('GetPkList',{
                    userId:sessionStorage.userId,
                    nowPage:this.nowPage,
                    pageSize:this.pageSize
                })
                .then((response) => {
                    if (response.data.Success == "true") {
                       this.accountdata=response.data.List;
                       this.showmask = true;
                       if(!response.data.List.length){
                            this.showloadmore=true;
                       }
                    }else{
                        this.$router.push({
                            path:'fault',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                    ;
                    console.log(error);
                });
            }else{
                this.accountdata=JSON.parse(sessionStorage.touristinfo);
                if(sessionStorage.localplaynum==0){
                    this.successrate=0;
                }else{
                    this.successrate=(Number(sessionStorage.localplaysuc)/(Number(sessionStorage.localplaynum))*100).toFixed(2);
                }
                //本局收益金额
                this.allincome=Number(sessionStorage.localamount)+Number(sessionStorage.localamount)*Number(this.curincomrate-1);
                this.$nextTick(()=>{
                    this.showloadmore=true;
                    this.showmask = true;
                    this.showmore = false;
                })
            }
            
            
        },
        loadmore(){
            this.nowPage++;
            //获取账户信息
            this.$axios.post('GetPkList',{
                userId:sessionStorage.userId,
                nowPage:this.nowPage,
                pageSize:this.pageSize
            })
            .then((response) => {
                // 隐藏loading
                if (response.data.Success == "true") {
                    if(!response.data.List.length){
                        this.showloadmore=true;
                    }else{
                        response.data.List.forEach((value,index,arr)=>{
                            this.accountdata.push(value)
                        })
                    }
                }else{
                    this.$router.push({
                        path:'fault',
                        query:{
                            msg:response.data.Error_msg
                        }
                    });
                }
            })
            .catch((error)=>{
                ;
                console.log(error);
            });
        },
        gameagain() {
            //数据初始化
            this.downtimecount=0;
            this.badtimecount=0;
            this.showmask = false;
            this.showit = true;
            this.count=0;
            this.curincomrate=1;
            this.bought = '未买';
            this.leftimg = require('../../assets/game/btn_buy_nor@' + this.$store.state.dpr + 'x.png');
            this.rightimg = require('../../assets/game/btn_lookon_nor@' + this.$store.state.dpr + 'x.png');
            //建立临时存储数组
            var temparr = [];
            //存储阴影区域坐标
            sessionStorage.markarea = JSON.stringify(temparr);
            //存储B、S标志
            sessionStorage.markpoint = JSON.stringify(temparr);
            this.$axios.post('GetRandomHis',{
                userId:sessionStorage.userId
            })
                .then((response) => {
                    // 隐藏loading
                    if (response.data.Success == "true") {
                        this.datas = response.data.Result;
                        //总局数
                        this.playtotal=this.datas.Sum;
                        //成功局数
                        this.successtotal=this.datas.SuccessNum;
                        //总收益
                        this.allincome=this.datas.AllIncome;
                        //格式化数据
                        let temp1 = this.$formatgame(this.datas.Ks1);
                        let temp2 = this.$formatgame(this.datas.Ks2);
                        //游戏开始时间
                        this.starttime=temp2[0][0];
                        //游戏结束时间
                        this.endtime=temp2[temp2.length-1][0];
                        //区间涨跌幅
                        this.zdf=(temp2[temp2.length-1][2]-temp2[0][2])/temp2[0][2];
                        //清空数据
                        this.$store.dispatch('DELDATA');
                        //分别存储数据
                        for (let i = 0; i < this.datas.Ks1.length; i++) this.$store.dispatch('ADDDATA', { type: 'gameb', data: temp1[i] });
                        for (let i = 0; i < this.datas.Ks2.length; i++) this.$store.dispatch('ADDDATA', { type: 'gamea', data: temp2[i] });
                        var jsondata = JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        this.redrawdata=JSON.parse(JSON.stringify(this.$store.state.gbdata));
                        //绘图操作//数据，id,   动画
                        this.$game(jsondata, 'main', false);
                    }else{
                        this.$router.push({
                            path:'fault',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                    ;
                    console.log(error);
                });
        },
        audiocon(val){
            this.audioup=false;
            this.audiodown=false;
            this.audiosalegood=false;
            this.audiosalebad=false;
            this.audiolook=false;
            this.audiodefeat=false;
            this.audiowin1=false;
            this.audiowin2=false;
            this.$nextTick(()=>{
                switch(val){
                    case 'audioup':
                        this.audioup=true;
                        break;
                    case 'audiodown':
                        this.audiodown=true;
                        break;
                    case 'audiosalegood':
                        this.audiosalegood=true;
                        break;
                    case 'audiosalebad':
                        this.audiosalebad=true;
                        break;
                    case 'audiolook':
                        this.audiolook=true;
                        break;
                    case 'audiodefeat':
                        this.audiodefeat=true;
                        break;
                    case 'audiowin1':
                        this.audiowin1=true;
                        break;
                    case 'audiowin2':
                        this.audiowin2=true;
                        break;
                }
            })
        },
        audioAutoPlay(id){
            var audio = document.getElementById(id);
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        }
    },
    activated(){
        document.title='K线闯关';
    },
    deactivated(){
        //清空数据
        this.$store.dispatch('DELDATA');
        this.$destroy()
    },
}
</script>


