<style lang="less" scoped>
    .gocontrima{
        position: fixed;
        height:2rem;
        width:0.4rem;
        left:7.1rem;
        top:8.75rem;
        z-index: 1;
    }
    .contr_tip{
        width:100%;
        height:0.88rem;
        background: #FFFFFF;
        display: block; 
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 1px;
        text-align: center;
        margin-top: 0.2rem;
    }
    .sub_nav{
        height:0.44rem;
        margin-top:0.1rem;
    }
    .nt{
        height:0.4rem;
    }
    .clinicrating{
        position: fixed;
        width:100%;
        height:100%;
        background: #FFFFFF;
        z-index: 5000;
        top: 0;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .rescontent{
        position: fixed;
        width:100%;
        height:100%;
        background: #FFFFFF;
        z-index: 5000;
        top: 0;
        overflow-y: scroll;
    }
        h6{
        font-family: PingFangSC-Medium;
        font-size: 0.36rem;
        color: #000000;
        letter-spacing: 2.4px;
        padding:0.2rem 0.3rem 0.1rem 0.3rem;
    }
    .textp{
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #999999;
            letter-spacing: 1.6px;
            padding-left:0.3rem;
            padding-bottom:0.1rem;
            &+div{
                width:1rem;
                position: absolute;
                left:0.3rem;
                height:3px;
                background: rgba(153,153,153,0.50);
                border:none;
                margin:0 auto;
                &+div{
                    width:6.9rem;
                    height:0.4rem;
                    margin:0 auto;
                    margin-top:0.1rem;
                    position: relative;
                    p{
                        display: inline-block;
                        font-family: PingFangSC-Regular;
                        font-size: 0.24rem;
                        color: #999999;
                        letter-spacing: 2px;
                        line-height: 0.4rem;
                        position: absolute;
                    }
                    p:first-child{
                        left: 0;
                    }
                    p:last-child{
                        right:0;
                    }
                }
            }
        }
    content{
        overflow-x: hidden;
        .con_div{
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #000000;
            letter-spacing: 2px;
            padding:0.3rem;
            text-indent: 2em;
            overflow-x: hidden;
        }
    }
    .header{
        width:92%;
        background: #FFFFFF;
        box-shadow: 0 8px 20px 0 #CCCCCC;   
        position: relative;
        top:-0.8rem;
    }
    .head_img{
        width:100%;
        height:auto;
    }
    /*综合评级*/
.ana_head{
    width:100%;
    background:#FFFFFF;
    &>p{
        font-family: PingFangSC-Medium;
        font-size: 0.36rem;
        color: #000000;
        letter-spacing: 0.024rem;
        font-weight:600;
        text-align: left;
        padding-left:0.2rem;
    }
    &>div{
        height:2.76rem;
        width:100%;
        border:1px solid #FFFFFF;
        box-sizing:border-box;
        text-align:center;
        &>div{
            width:2.4rem;
            height:2.4rem;
            box-sizing:border-box;
            float:left;
            margin-top:0.36rem;
            position:relative;
            .clock{
                position:absolute;
                left:0;
                top:0;
                width:100%;
            }
            .toggle{
                position:absolute;
                width:0.42rem;
                left:0.2rem;
                top:1.7rem;
            }
            &>span:nth-child(3){
                font-family: PingFangSC-Regular;
                font-size: 0.24rem;
                color: black;
                letter-spacing: 0;
                display:block;
                padding-top:0.5rem;
            }
            &>span:nth-child(4){
                font-family: PingFangSC-Regular;
                font-size: 0.6rem;
                color: #999999;
                letter-spacing: 0;
                display:block;
                font-weight:bold;
            }
        }
        &>div:nth-child(1){
            margin-left:2.35rem;
        }
    }
}
.ana_suggess{
    width:94%;
    padding:0.15rem 3%;
    background: #FFFFFF;
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #3F3F3F;
        letter-spacing: 0;
    }
}
.ana_modle{
    width:100%;
    margin-top:0.2rem;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 #DDDDDD;
    min-height:0.8rem;
    .ana_title{
        height:0.8rem;
        position: relative;
        img{
            position: absolute;
            width:0.4rem;
            height:0.4rem;
            top:0.2rem;
            left:0.3rem;
        }
        p{
            position: absolute;
            font-family: PingFangSC-Medium;
            font-size: 0.3rem;
            color: #000000;
            letter-spacing: 0.02rem;
            top:0.16rem;
            left: 0.8rem;
        }
        .main_star{
            position: absolute;
            right:0.2rem;
            height:0.4rem;
            top:-0.55rem;
        }
    }
    .ana_cont{
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #000000;
        letter-spacing: 0;
        padding:0.2rem 0.4rem 0.4rem 0.4rem;
    }
}
.ana_seal{
    position: absolute;
    right:0.4rem;
    top:0.4rem;
    z-index: 6000;
}
.seal-enter{
    transform: scale(2,2) rotate(-720deg);
    opacity: 0.6;
}
.seal-enter-active {
   transition: all 0.5s cubic-bezier(0.68, 0.35, 0.07, 1);
}
</style>
<template>
    <div>
        <!--  <tab :left="15">
          <tab-item selected @on-item-click="onItemClick('detail')">诊断详情</tab-item>
          <tab-item @on-item-click="onItemClick('trend')">实时详情</tab-item>
        </tab> -->
        <keep-alive>
            <component :is="nav_components" ref="reloadtrend"></component>
        </keep-alive>
        <!-- <router-link to="/cliniccontrast">
            <img class="gocontrima" :src="gocontr">
        </router-link> -->
        <div class="sub_nav">
          <sticky :offset="0" :check-sticky-support="false">
            <tab :left="4" >
              <tab-item selected @on-item-click="onItemClick('company')">公司概况</tab-item>
              <tab-item @on-item-click="onItemClick('info')">资讯</tab-item>
              <tab-item @on-item-click="onItemClick('research')">研报相关</tab-item>
              <tab-item @on-item-click="onItemClick('notice')">公告</tab-item>
            </tab>
          </sticky>
        </div>
        <div class="nt"></div>
        <keep-alive>
            <component @getdetail="get_detail" :is="subnav_components"></component>
        </keep-alive>
        <div class="rescontent" v-if="showthedetail">
            <img :src="head_img" class="head_img">
            <div v-if="datas" class="header">
                <h6 >{{datas.Title}}</h6>
            </div>
            <p v-if="datas" class="textp">{{datas.TimeBefore.replace("公告日期：","")}}</p>
            <div></div>
            <div v-if="datas">
                <p v-if="datas.Company">研报出处：{{datas.Company}}</p>
                <p v-if="datas.Rating">评价：{{datas.Rating}}</p>
            </div>
            <content>
                <div class="con_div" v-if="datas" v-html="datas.HtmlDetail||datas.Text">
                </div>
            </content>
        </div>
        <div class="clinicrating" v-if="showrating">
            <div class="ana_head">
                <p>{{datas1.StockName}}({{datas1.StockCode}})</p>
                <transition name="seal">
                    <img class="ana_seal" :src="seal_img" v-if="seal">
                </transition>
                <div>
                    <div>
                        <img class="clock" :src="clock">
                        <img class="toggle" ref="toggle" :src="toggle">
                        <span>综合强度</span>
                        <span ref="spancolor">{{(toggledata).toFixed(1)}}</span>
                    </div>
                </div>
            </div>
            <div class="ana_suggess">
                <p>
                    <strong>短期趋势：</strong>{{datas1.Short}}
                </p>
                <p>
                    <strong>中期趋势：</strong>{{datas1.Mid}}
                </p>
                <p>
                    <strong>长期趋势：</strong>{{datas1.Long}}
                </p>
            </div>
            <div class="ana_modle">
                <div class="ana_title">
                    <img :src="title_img1">
                    <p>技术面</p>
                    <rater class="main_star" v-model="TechnicalTitle" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
                </div>
                <div class="ana_cont">{{datas1.TechnicalContent}}</div>
            </div>
            <div class="ana_modle">
                <div class="ana_title">
                    <img :src="title_img2">
                    <p>资金面</p>
                    <rater class="main_star" v-model="FundsTitle" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
                </div>
                <div class="ana_cont">{{datas1.FundsContent}}</div>
            </div>
            <div class="ana_modle">
                <div class="ana_title">
                    <img :src="title_img3">
                    <p>消息面</p>
                    <rater class="main_star" v-model="MessageTitle" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
                </div>
                <div class="ana_cont">{{datas1.MessageContent}}</div>
            </div>
            <div class="ana_modle">
                <div class="ana_title">
                    <img :src="title_img4">
                    <p>行业面</p>
                    <rater class="main_star" v-model="TradeTitle" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
                </div>
                <div class="ana_cont">{{datas1.TradeContent}}</div>
            </div>
            <div class="ana_modle">
                <div class="ana_title">
                    <img :src="title_img5">
                    <p>基本面</p>
                    <rater class="main_star" v-model="BasicTitle" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
                </div>
                <div class="ana_cont">{{datas1.BasicContent}}</div>
            </div>
        </div>
        <v-clinicfooter @getrating="get_rating" :textleft="tleft" :textright="tright"></v-clinicfooter>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue';
    import { Tab, TabItem, Sticky ,Rater} from 'vux';
    import vClinicfooter from '../../components/clinic/clinicfooter.vue';
    import vDetail from '../../components/clinic/clinicdetail.vue';
    import vCompany from '../../components/clinic/cliniccompanydetail.vue';
    import vInfo from '../../components/clinic/clinicinformation.vue';
    import vResearch from '../../components/clinic/clinicresearch.vue';
    import vNotice from '../../components/clinic/clinicnotice.vue';
    import vTrend from '../../components/trend/trend.vue';

    export default {
        components: {
            vTrend,
            vInfo,
            vResearch,
            vNotice,
            vCompany,
            vClinicfooter,
            vDetail,
            Tab,
            TabItem,
            Sticky,
            Rater
        },
        data(){
            return{
                tleft:'继续诊股',
                tright:'综合评级',
                //gocontr:require('../../assets/clinic/diagnose_btn_red@'+this.$store.state.dpr+'x.png'),
                nav_components:'v-detail',
                subnav_components:'v-company',
                logoimg:localStorage.IP+'/static/images/logo.png',
                disc:'运用大数据技术，通过智能诊股及经典形态选股解决股民投资难题。',
                title:'未来K线：大数据诊断K线走势！',
                link:localStorage.IP+'/index.html#/clinicreport?share=1&code='+this.$route.query.code,
                curlink:window.location.href,
                head_img:require('../../assets/clinic/news_topbg@'+this.$store.state.dpr+'x.png'),
                showthedetail:false,
                showrating:false,
                datas:'',
                clock:require('../../assets/clinic/rating_icon_grade@'+this.$store.state.dpr+'x.png'),
                toggle:require('../../assets/bigdata/bigdate_analysis_icon_dot@'+this.$store.state.dpr+'x.png'),
                title_img1:require('../../assets/clinic/rating_icon_science@'+this.$store.state.dpr+'x.png'),
                title_img2:require('../../assets/clinic/rating_icon_funds@'+this.$store.state.dpr+'x.png'),
                title_img3:require('../../assets/clinic/rating_icon_news@'+this.$store.state.dpr+'x.png'),
                title_img4:require('../../assets/clinic/rating_icon_industry@'+this.$store.state.dpr+'x.png'),
                title_img5:require('../../assets/clinic/rating_icon_basic@'+this.$store.state.dpr+'x.png'),
                seal_img:'',
                toggledata:0,
                datas1:'',
                seal:false,
                TechnicalTitle:'',//技术面
                FundsTitle:'',//资金面
                MessageTitle:'',//消息面
                TradeTitle:'',//行业面
                BasicTitle:'',//基本面
            }
        },
        created(){
            //获取userId
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        },
        //组件激活状态分享诊股页面
        activated(){
            document.title='诊断报告';
            var _that=this;
            var instance = _that.$axios.create({
                baseURL:localStorage.IP,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    "Access-Control-Allow-Headers":"Authorization,Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods":"GET,POST"
                },
            });
            instance.get('/WeChat/GetSign?url='+_that.curlink)
            .then((response)=>{
                //微信接口配置
                 _that.$wechat.config({
                     debug: false,
                     appId: response.data.Appid,
                     timestamp: response.data.Timestamp,
                     nonceStr: response.data.Noncestr,
                     signature: response.data.SignStr,
                     jsApiList: [
                         'checkJsApi',
                         'onMenuShareTimeline',          //分享到朋友圈
                         'onMenuShareAppMessage',        //分享给朋友
                         'onMenuShareQQ',                //分享到QQ
                         'onMenuShareWeibo',             //分享到腾讯微博
                         'onMenuShareQZone'              //分享到QQ空间
                     ]
                 });
                 _that.$wechat.ready(function () {
                     //分享到朋友圈
                     _that.$wechat.onMenuShareTimeline({
                         title: _that.title,
                         link: _that.link,
                         imgUrl: _that.logoimg,
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享给朋友
                     _that.$wechat.onMenuShareAppMessage({
                         title:_that.title, // 分享标题
                         desc: _that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg, // 分享图标
                         type: '', // 分享类型,music、video或link，不填默认为link
                         dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到QQ
                     _that.$wechat.onMenuShareQQ({
                         title:_that.title,// 分享标题
                         desc: _that.disc,// 分享描述
                         link:_that.link, // 分享链接
                         imgUrl:_that.logoimg,// 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到腾讯微博
                     _that.$wechat.onMenuShareWeibo({
                         title: _that.title,// 分享标题
                         desc: _that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg,// 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到QQ空间
                     _that.$wechat.onMenuShareQZone({
                         title:_that.title,// 分享标题
                         desc: _that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg, // 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
                     _that.$wechat.checkJsApi({
                         jsApiList: [
                             'onMenuShareTimeline',
                             'onMenuShareAppMessage',
                             'onMenuShareQQ',
                             'onMenuShareWeibo',
                             'onMenuShareQZone',
                         ],
                         success: function (res) {
                             //alert(JSON.stringify(res));
                         },
                         fail: function (res) {
                             //alert("wx.ready err：" + JSON.stringify(res));
                         }
        
                     });
            
                 });
                 _that.$wechat.error(function (res) {
                    console.log(res)
                 });
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        //组件非激活状态分享主页
        deactivated(){
            var _that=this;
            _that.link=localStorage.IP+'/index.html#/?state=main';
            var instance = _that.$axios.create({
                baseURL:localStorage.IP,
            });
            instance.get('/WeChat/GetSign?url='+_that.curlink)
            .then((response)=>{
                //微信接口配置
                 _that.$wechat.config({
                     debug: false,
                     appId: response.data.Appid,
                     timestamp: response.data.Timestamp,
                     nonceStr: response.data.Noncestr,
                     signature: response.data.SignStr,
                     jsApiList: [
                         'checkJsApi',
                         'onMenuShareTimeline',          //分享到朋友圈
                         'onMenuShareAppMessage',        //分享给朋友
                         'onMenuShareQQ',                //分享到QQ
                         'onMenuShareWeibo',             //分享到腾讯微博
                         'onMenuShareQZone'              //分享到QQ空间
                     ]
                 });
                 _that.$wechat.ready(function () {
                     //分享到朋友圈
                     _that.$wechat.onMenuShareTimeline({
                         title: _that.title,
                         link: _that.link,
                         imgUrl: _that.logoimg,
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享给朋友
                     _that.$wechat.onMenuShareAppMessage({
                         title:_that.title, // 分享标题
                         desc: _that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg, // 分享图标
                         type: '', // 分享类型,music、video或link，不填默认为link
                         dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到QQ
                     _that.$wechat.onMenuShareQQ({
                         title:_that.title,// 分享标题
                         desc:_that.disc,// 分享描述
                         link:_that.link, // 分享链接
                         imgUrl:_that.logoimg,// 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到腾讯微博
                     _that.$wechat.onMenuShareWeibo({
                         title: _that.title,// 分享标题
                         desc:_that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg,// 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     //分享到QQ空间
                     _that.$wechat.onMenuShareQZone({
                         title:_that.title,// 分享标题
                         desc: _that.disc, // 分享描述
                         link: _that.link, // 分享链接
                         imgUrl: _that.logoimg, // 分享图标
                         success: function (res) {
                         },
                         cancel: function (res) {
        
                         },
                         fail: function (res) {
                         }
                     });
                     // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
                     _that.$wechat.checkJsApi({
                         jsApiList: [
                             'onMenuShareTimeline',
                             'onMenuShareAppMessage',
                             'onMenuShareQQ',
                             'onMenuShareWeibo',
                             'onMenuShareQZone',
                         ],
                         success: function (res) {
                             //alert(JSON.stringify(res));
                         },
                         fail: function (res) {
                             //alert("wx.ready err：" + JSON.stringify(res));
                         }
        
                     });
            
                 });
                 _that.$wechat.error(function (res) {
                    console.log(res)
                 });
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        methods: {
            get_detail(val){
                //获取新闻详情
                //判断接口地址
                var _api;
                switch(val.type){
                    //公告
                    case 'notice':
                        _api='GeAnnouncement';
                        document.title='公告详情';
                        break;
                    case 'info':
                    //资讯
                        _api='GetNews';
                        document.title='资讯详情';
                        break;
                    //研报
                    case 'res':
                        _api='GetReport ';
                        document.title='研报详情';
                        break;
                    //要闻点评
                    case 'evaluate':
                        _api='GetImportantNews';
                        document.title='点评详情';
                        break;
                    //行业新闻
                    case 'news':
                        _api='GetTradeNews';
                        document.title='新闻详情';
                        break;  
                }
                //获取公告
                //显示loading
                this.$vux.loading.show({text: '正在加载'})
                this.$axios.post(_api, {
                      id:val.id
                    })
                    .then((response)=>{
                        // 隐藏loading
                        this.$vux.loading.hide()
                        if(response.data.Success=="true"){
                            this.datas=response.data
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
                        // 隐藏loading
                        this.$vux.loading.hide();
                        console.log(error);
                    });
                    this.showthedetail=true;
            },
            //综合评级
            get_rating(){
                this.showrating=true;
                document.title='详情';
                var _that=this;
                this.$axios.post('GetZgInfo',{
                    code:this.$route.query.code
                })
                    .then((response)=>{
                        if(response.data.Success=="true"){
                            setTimeout(()=>{
                                this.seal=true;
                            },1000)
                            this.datas1=response.data.Data;
                            this.TechnicalTitle=(this.datas1.TechnicalTitle/2).toFixed(1);
                            this.FundsTitle=(this.datas1.FundsTitle/2).toFixed(1);
                            this.MessageTitle=(this.datas1.MessageTitle/2).toFixed(1);
                            this.TradeTitle=(this.datas1.TradeTitle/2).toFixed(1);
                            this.BasicTitle=(this.datas1.BasicTitle/2).toFixed(1);
                            switch(this.datas1.ValueBar){
                                case "增持":
                                    this.seal_img=require('../../assets/clinic/rating_icon_zc.png');
                                    break;
                                case "减持":
                                    this.seal_img=require('../../assets/clinic/rating_icon_jc.png');
                                    break;
                                case "买入":
                                    this.seal_img=require('../../assets/clinic/rating_icon_mr.png');
                                    break;
                                case "卖出":
                                    this.seal_img=require('../../assets/clinic/rating_icon_mc.png');
                                    break;
                                case "中性":
                                    this.seal_img=require('../../assets/clinic/rating_icon_zx.png');
                                    break;        
                            }
                            //数字计时器（控制表盘动画）
                            var inter=setInterval(()=>{
                                _that.toggledata+=0.05;
                                if(parseInt(_that.toggledata)>=_that.datas1.StockValue)clearinter()
                            },10)
                            function clearinter(){
                                clearInterval(inter)
                            }
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
            },
            onItemClick (index) {
                //选项卡操作组件
                switch (index){
                    case 'detail':
                        this.nav_components='v-detail';
                        Vue.$id='';
                    break;
                    case 'trend':
                        this.nav_components='v-trend';
                    break;
                    case 'company':
                        this.subnav_components='v-company';
                    break;
                    case 'info':
                        this.subnav_components='v-info';
                    break;
                    case 'research':
                        this.subnav_components='v-research';
                    break;
                    case 'notice':
                        this.subnav_components='v-notice';
                    break;
                }
            }
        },
        watch:{
            toggledata(){
                var tempangle=this.toggledata/10*260;
                var _left;
                var _top;
                if(tempangle<=40){
                    _left=1.1*(1-Math.cos((40-tempangle)*Math.PI/180));
                    _top=1.1*(1+Math.sin((40-tempangle)*Math.PI/180));
                }else if(tempangle>40&&tempangle<=130){
                    _left=1.1*(1-Math.cos((tempangle-40)*Math.PI/180));
                    _top=1.1*(1-Math.sin((tempangle-40)*Math.PI/180));
                }else if(tempangle>130&&tempangle<=220){
                    _left=1.1*(1+Math.sin((tempangle-130)*Math.PI/180));
                    _top=1.1*(1-Math.cos((tempangle-130)*Math.PI/180));
                }else{
                    _left=1.1*(1+Math.cos((tempangle-220)*Math.PI/180));
                    _top=1.1*(1+Math.sin((tempangle-220)*Math.PI/180));
                }
                this.$refs.toggle.style.left=_left-0.1+'rem';
                this.$refs.toggle.style.top=_top-0.1+'rem';
                if(parseInt(this.toggledata)<=2.5){
                    this.$refs.spancolor.style.color='#FFDD65';
                }else if(parseInt(this.toggledata)>2.5&&parseInt(this.toggledata)<=5){
                    this.$refs.spancolor.style.color='#FF863D';
                }else if(parseInt(this.toggledata)>5&&parseInt(this.toggledata)<=7.5){
                    this.$refs.spancolor.style.color='#F754CF';
                }else{
                    this.$refs.spancolor.style.color='#FC6269';
                }
            }
        },
        beforeRouteLeave (to, from, next) {
            if(this.showthedetail==true||this.showrating==true){
                //进入内容页缓存诊股页面
                next(false);
                this.showthedetail=false;
                this.showrating=false;
                document.title='诊断报告';
            }else{
                //页面组件
                this.$refs.reloadtrend.cleardata(); 
                this.$destroy(true);
                next();
            }
        },
    }
</script>