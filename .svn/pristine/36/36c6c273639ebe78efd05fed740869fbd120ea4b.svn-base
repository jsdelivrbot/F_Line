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
	.clinicit{
        display: block;
		position: fixed;
		top:3.4rem;
		left:1.4rem;
		width:1.5rem;
		z-index: 1000;
	}
	.hideclinic{
		display: none;
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
    .rescontent{
        position: fixed;
        width:100%;
        height:100%;
        background: #FFFFFF;
        z-index: 5000;
        top: 0;
        overflow-y: scroll;
    }
</style>
<template>
	<div>
		<img draggable="true" ref="dragimg" @touchstart="tstart($event)" @touchmove="tmove($event)" @touchend="tend($event)" src="../../assets/clinic/clinicit.gif" class="clinicit" @click="goclinic()" :class="[isdapan?'hideclinic':'']">
    	<component :is="nav_components='v-trend'" ref="reloadtrend" :isreload="reloadit"></component>
    	<div class="sub_nav" v-if="codetype=='个股'">
	        <sticky :offset="0" :check-sticky-support="false">
		        <tab :left="4"  v-if="isselfchoose">
		            <tab-item :selected="selected=='forecast'" @on-item-click="onItemClick('forecast')">预测</tab-item>
		            <tab-item :selected="selected=='company'" @on-item-click="onItemClick('company')">公司概况</tab-item>
		            <tab-item :selected="selected=='info'" @on-item-click="onItemClick('info')">资讯</tab-item>
		            <tab-item :selected="selected=='research'" @on-item-click="onItemClick('research')">研报相关</tab-item>
		            <tab-item :selected="selected=='notice'" @on-item-click="onItemClick('notice')">公告</tab-item>
		        </tab>
		        <tab :left="4"  v-else>
		            <tab-item :selected="selected=='company'" @on-item-click="onItemClick('company')">公司概况</tab-item>
		            <tab-item :selected="selected=='info'" @on-item-click="onItemClick('info')">资讯</tab-item>
		            <tab-item :selected="selected=='research'" @on-item-click="onItemClick('research')">研报相关</tab-item>
		            <tab-item :selected="selected=='notice'" @on-item-click="onItemClick('notice')">公告</tab-item>
		        </tab>
	        </sticky>
	    </div>
	    <div class="sub_nav" v-if="codetype=='大盘'">	
			<sticky :offset="0" :check-sticky-support="false">
		        <tab :left="35" >
		            <tab-item selected @on-item-click="onItemClick('evaluate')">要闻点评</tab-item>
		        </tab>
	        </sticky>
	    </div>
	    <div class="sub_nav" v-if="codetype=='板块'">	
			<sticky :offset="0" :check-sticky-support="false">
		        <tab :left="5" >
		            <tab-item selected @on-item-click="onItemClick('up')">涨幅榜</tab-item>
		            <tab-item @on-item-click="onItemClick('down')">跌幅榜</tab-item>
		            <tab-item @on-item-click="onItemClick('news')">行业新闻</tab-item>
		        </tab>
	        </sticky>
	    </div>
	    <div class="nt"></div>
	    <keep-alive>
			<component @getdetail="get_detail" :is="subnav_components" :isreload="reloadit"></component>
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
	</div>
</template>
<script type="text/javascript">
	import { Tab, TabItem, Sticky } from 'vux';
	import vForecast from '../../components/trend/forecast.vue';
	import vCompany from '../../components/clinic/cliniccompanydetail.vue';
	import vInfo from '../../components/clinic/clinicinformation.vue';
	import vResearch from '../../components/clinic/clinicresearch.vue';
	import vNotice from '../../components/clinic/clinicnotice.vue';
	import vTrend from '../../components/trend/trend.vue';
	import vGrail from '../../components/trend/grail.vue';
	import vEvaluate from '../../components/trend/evaluate.vue';
	import vUplist from '../../components/trend/uplist.vue';
	import vDownlist from '../../components/trend/downlist.vue';
	import vNews from '../../components/trend/news.vue';
	export default {
	    components: {
	    	vTrend,
	    	vInfo,
	    	vResearch,
	    	vNotice,
	    	vCompany,
	    	vForecast,
		    Tab,
		    TabItem,
		    Sticky,
		    vGrail,
		    vEvaluate,
		    vUplist,
		    vDownlist,
		    vNews
	    },
	    data(){
	    	return{
	    		subnav_components:'',
	    		//更改codetype来显示 个股 大盘 板块
	    		codetype:'个股',
	    		routefrom:'',
	    		isselfchoose:true,
	    		isdapan:false,
	    		reloadit:false,
	    		selected:'',
	    		head_img:require('../../assets/clinic/news_topbg@'+this.$store.state.dpr+'x.png'),
	    		showthedetail:false,
                datas:'',
	    	}
	    },
	    created(){
	    	this.getdata();
	    },
	    activated(){
	    	if(this.reloadit==true){
	    		this.getdata();
	    	}
	    },
	    deactivated(){
	    	if(this.reloadit==true){
	    		this.codetype='';
	    		this.$refs.reloadtrend.cleardata(); 
	    	}
	    },
	    methods: {
            tstart(e){
                //鼠标按下，计算当前元素距离可视区的距离
                this.disX =e.touches[0].clientX - e.target.offsetLeft;
                this.disY =e.touches[0].clientY - e.target.offsetTop;
            },
            tmove(e){
                e.preventDefault();
              //通过事件委托，计算移动的距离 
                var l = e.touches[0].clientX - this.disX;
                var t = e.touches[0].clientY - this.disY;
                //移动当前元素
                if(e.touches[0].clientX>20&&e.touches[0].clientY>20&&e.touches[0].clientX<document.documentElement.clientWidth-20&&e.touches[0].clientY<document.documentElement.clientHeight-20){
                    this.$refs.dragimg.style.left = l + 'px';
                    this.$refs.dragimg.style.top = t + 'px';
                }  
            },
            tend(e){
            },
	    	get_detail(val){
                //获取新闻详情
                //判断接口地址
                var _api;
                switch(val.type){
                    //公告
                    case 'notice':
                        _api='GeAnnouncement';
                        break;
                    case 'info':
                    //资讯
                        _api='GetNews';
                        break;
                    //研报
                    case 'res':
                        _api='GetReport ';
                        break;
                    //要闻点评
                    case 'evaluate':
                        _api='GetImportantNews';
                        break;
                    //行业新闻
                    case 'news':
                        _api='GetTradeNews';
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
	    	getdata(){
	    		this.selected='company';
	    		//显示loading
		    	if(sessionStorage.userId!='undefined'){
		    		this.$vux.loading.show({text: '正在加载'})
					this.$axios.post('FindStockOption', {
					      	userId:sessionStorage.userId,
					      	code:this.$route.query.code
					  	})
					  	.then((response)=>{
					  		// 隐藏loading
							this.$vux.loading.hide()
					    	if(response.data.Success=="true"){
					    		this.isselfchoose=true;
					    	}else{
					    		this.isselfchoose=false;
					    		console.log(this.selected)
					    	}
					    	if(this.$route.query.routefrom!='上证指数'){
					    		this.codetype='个股';
    							this.subnav_components='v-company';
					    	}else{
					    		this.codetype='大盘';
								this.isdapan=true;
					    		this.subnav_components='v-evaluate';
					    	}
					    	// switch(this.codetype){
					    	// 	case '个股':
				    		// 		if(this.subnav_components=='')this.subnav_components=this.isselfchoose?'v-forecast':'v-company';
					    	// 		break;
				    		// 	case '大盘':
					    	// 		this.subnav_components='v-evaluate';
					    	// 		break;
				    		// 	case '板块':
					    	// 		this.subnav_components='v-uplist';
					    	// 		break;
					    	// }
					  	})
					  	.catch((error)=>{
					  		// 隐藏loading
							this.$vux.loading.hide();
							;
					    	console.log(error);
					  	});
		    	}else{
		    		this.isselfchoose=false;
	    			if(this.$route.query.routefrom!='上证指数'){
						if(this.subnav_components=='')this.subnav_components=this.isselfchoose?'v-forecast':'v-company';
			    	}else{
			    		this.subnav_components='v-evaluate';
			    	}
		    	}
		    	//上证指数  000001//深证成指  399001//创业板指  399006//沪深300   000300//上证50   	000016//中证500   000905
		    	//判断页面跳转来源
	    	},
		    onItemClick (index) {
		    	//选项卡操作组件
		        switch (index){
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
		        	case 'grail':
		        		this.subnav_components='v-grail';
		        	break;
		        	case 'evaluate':
		        		this.subnav_components='v-evaluate';
		        	break;
		        	case 'forecast':
		        		this.subnav_components='v-forecast';
		        	break;
		        	case 'up':
		        		this.subnav_components='v-uplist';
		        	break;
		        	case 'down':
		        		this.subnav_components='v-downlist';
		        	break;
		        	case 'news':
		        		this.subnav_components='v-news';
		        	break;

		        }
		    },
		    goclinic(){
		    	//页面组件
                this.$store.dispatch('CONPAGE', { comp:''});
		    	this.$router.push({
		    		path:'clinicreport',
		    		query:{
		    			code:this.$route.query.code
		    		}
		    	});
		    }
		},
		beforeRouteLeave (to, from, next) {
            console.log(to)
            if(this.showthedetail==true){
                //进入内容页缓存诊股页面
                next(false);
                this.showthedetail=false
            }else{
                //页面组件
                this.$refs.reloadtrend.cleardata(); 
                this.$destroy(true);
                next();
            }
        },
	}
</script>