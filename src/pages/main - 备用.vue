<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
	.main_header{
		background: #378AD6;
		position: relative;
		transition: 0.5s;
		z-index: 100;
		top:0;
		width:100%;
		height:2.8rem;
		section{
			position: absolute;
			width: 100%;
			height:100%;
			top:0;
			left:0;
			input{
				width:94%;
				height: 0.88rem;
				position: absolute;
				left:3%;
				border:none;
				font-family: PingFangSC-Light;
				font-size: 0.3rem;
				color: #999999;
				letter-spacing: 2px;
				text-align: center;
				outline: none;
				background-size:100%;
				transition:0.5s;
				border-radius:6px;
			}
			.focus{
				bottom:1rem;
				background-size:100%;
				position: absolute;
			}
			.blur{
				bottom:1rem;
				background-size:100%;
				position: absolute;
			}
			.header_bg{
				position: absolute;
				z-index: -1;
				width:100%;
				height:auto;
				bottom:0;
				transition:0.5s ;
			}
		}
		
	}
	.stateone{
		opacity:1;
	}
	.statetwo{
		opacity:1;
	}
	.main_nt{
		height:0.88rem;
		width: 100%;
		background: #378AD6;
		position: fixed;
		top:0;
		transition: 0.5s;
		input{
			height: 0.6rem;
			width:92%;
			left:4%;
			border-radius: 0.06rem;
			bottom:0.15rem;
			outline: none;
			background:white;
			background-size:100%;
			border:none;
			position: absolute;
			text-align: center;
		}

	}
	.main_list{
		width:100%;
		background: #FFFFFF;
		div{
			width:100%;
			height:1.74rem;
			box-sizing: border-box;
			position: relative;
			top:-0.2rem;
			img:first-child{
				position: absolute;
				height:1rem;
				width:1rem;
				left:0.5rem;
				top:0.5rem;
			}
			img:last-child{
				position: absolute;
				height:0.24rem;
				width:0.24rem;
				right:0.5rem;
				top:0.88rem;
			}
			h5{
				font-family: PingFangSC-Regular;
				font-size: 0.4rem;
				color: #000000;
				letter-spacing: 2.67px;
				position: absolute;
				top:0.55rem;
				left:1.8rem;
				font-weight:500;
			}
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #999999;
				letter-spacing: 0;
				position: absolute;
				top:1.13rem;
				left:1.8rem;
			}
		}
	}
	.header_select{
		width:6.1rem;
		background: #FFFFFF;
		margin:0 auto;
		box-shadow: 0 0.1rem 0.24rem 0 #849EB7;
		transition:0.5s;
		position:fixed;
		left:0.7rem;
		z-index: 500;
		&>span{
			display: block;
			width:100%;
			height:0.7rem;
			position: relative;
			&>p{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #999999;
				letter-spacing: 2px;
				line-height:0.7rem;
				position: absolute;
			}
			&>p:nth-child(1){
				left:0.5rem;
			}
			&>p:nth-child(2){
				right:0.5rem;
			}
		}
		
	}
	.main_nav{
		
		width:100%;
		height:1.6rem;
		margin-top:0.1rem;
		background: #FFFFFF;
		overflow-x: scroll!important;
		overflow-y: hidden;
		.main_forscroll{
			display: flex;
			div{
				flex:1;
				width:1.4rem;
				height:1.4rem;
				margin-top:0.1rem;
				text-align: center;
				img{
					width:0.7rem;
					height:0.7rem;
					position: relative;
					top:-0.4rem;
				}
				p{
					position: relative;
					top:-0.7rem;
					font-family: PingFangSC-Regular;
					font-size: 0.24rem;
					color: #999999;
					letter-spacing: 1.6px;
			}
			}
			
		}

	}
	.mian_assess{
		width:100%;
		height:2.2rem;	
		background: #FFFFFF;
		div:nth-child(1){
			height:0.9rem;
			width:100%;
			box-sizing: border-box;
			position: relative;
			img:nth-child(1){
				width:0.56rem;
				height:0.56rem;
				margin:0.2rem 0 0 0.3rem;
				position: absolute;
			}
			p:nth-child(2){
				font-family: PingFangSC-Medium;
				font-size: 0.3rem;
				color: #000000;
				letter-spacing: 2px;
				position: absolute;
				margin:0.26rem 0 0 1rem;
				font-weight: 600;
			}
			p:nth-child(3){
				font-family: PingFangSC-Regular;
				font-size:0.24rem;
				color: #999999;
				letter-spacing: 2px;
				position: absolute;
				margin:0.3rem 0 0 6.5rem;
			}
			img:nth-child(4){
				width:0.12rem;
				height:0.24rem;
				margin:0.35rem 0 0 7.15rem;
				position: absolute;
			}
		}
		div:nth-child(2),div:nth-child(3){
			height:0.64rem;
			width:100%;
			box-sizing: border-box;
			position: relative;
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #000000;
				letter-spacing: 2px;
				padding-left:0.2rem;
				white-space:nowrap; 
				text-overflow:ellipsis;
				overflow:hidden;
			}
		}
	}
	.main_live{
		width:100%;
		background: #FFFFFF;
		margin-top:0.1rem;
		.mian_assess;
		height: auto;
		section{
			width:100%;
			display: flex;
			&>div:nth-child(1){
				height:100%;
				flex:4;
				box-sizing: border-box;
				display: inline-block;
				position: relative;
				padding-left: 0.3rem;
				&>div{
					background: red;
					border:none;
					border-radius:1rem;
					height:0.4rem;
					width:1.34rem;
					font-family: PingFangSC-Regular;
					font-size: 0.24rem;
					color: #FFFFFF;
					letter-spacing: 1.6px;
					text-align: center;
					margin:0.2rem 0;
					.main_zan{
						width:0.3rem;
						height:0.3rem;
						position: relative;
						left:1.4rem;
						top:-0.35rem;
						img{
							width: 100%;
							height: 100%;
							position: absolute;
							margin:0;
						}
						.img_show{
							display: block;
						}
						.img_hide{
							display: none;
						}
					}
					.p_zan{
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #999999;
						letter-spacing: 0;
						position: relative;
						margin:0;
						left:1.6rem;
						top:-0.68rem;
						font-weight: normal;
					}
				}

				span{
					display: block;
					width:5.6rem;
					background: #EBF3FA;
					border-radius:10px;
					top:0.8rem;
					min-height: 0.6rem;
					p{
						font-family: PingFangSC-Medium;
						font-size: 0.3rem;
						line-height: 0.3rem;
						color: #000000;
						letter-spacing: 0;
						text-align: left;
						margin:0!important;
						padding:0.1rem 0.25rem;
						white-space:normal;
					}
				}
				span:after {  
				    position: absolute;
				    border-top: 0.18rem solid transparent;
				    border-bottom: 0.18rem solid transparent;
				    border-left: 0.18rem solid #EBF3FA;
				    content: " ";
				    display: block;
				    width: 0;
				    height: 0;
				    top: 0.9rem;
    				right:0;
				}  
			}
			div:nth-child(2){
				height:1.62rem;
				flex:1;
				box-sizing:content-box;
				display: inline-block;
				position: relative;
				text-align: center;
				overflow: hidden;
				img{
					border-radius: 50%;
					height:0.7rem;
					width:0.7rem;
					position: relative;
					top:-0.3rem;
				}
				p{
					position: relative;
					top:-0.5rem;
					padding-left:0!important;
				}
			}
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #000000;
				letter-spacing: 2px;
				line-height: 0.42rem;
				white-space:nowrap;
				overflow:hidden;
			}
		}
		section:last-child{
			border-bottom:none;
		}

	}
	.main_star{
		position:relative;
		top:-3px;
	}
	.align-middle {
	    text-align: center;
	}
	.showred{
		color:#FF5E45;
	}
	.showgreen{
		color:#1CB64A;
	}
	.forcenter{
		text-align: center!important;
		padding-left: 0!important;
	}
	.bgstateone{
		opacity: 0;
	}
	.bgstatetwo{
		opacity: 1;
		z-index: 500;
	}
	.selectstateone{
		top: 1.8rem;
	}
	.selectstatetwo{
		top: 0.75rem;
	}
	.accdisnone{
		display: none;
	}
	.accdisblock{
		display: block;
	}
.popup{
    text-align: center;
    img{
        padding-top:1rem;
    }
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.36rem;
        color: black;
        letter-spacing: 2px;
        padding-bottom:0.2rem;
    }
}
</style>
<template>
	<div>
		<header class="main_header" :class="[forheader?'stateone':'statetwo']" ref='header'>
			<section>
				<input  :class="[inputon?'focus':'blur']" v-model="currentValue" placeholder="🔍请输入股票代码/首字母" type="text" ref="search" @focus="focus" @blur="blur">
				<img class="header_bg" :src="header_bg">
			</section>
		</header>
		<div class="main_nt" :class="[forheader?'bgstateone':'bgstatetwo']" ref='header1'>
			<input  :class="[inputon?'focus':'blur']" v-model="currentValue" type="text" ref="search" placeholder="🔍请输入股票代码/首字母" @focus="focus" @blur="blur">
		</div>
		<div class="header_select" :class="[inputon?'accdisblock':'accdisnone',forheader?'selectstateone':'selectstatetwo']">
			<span @click="search(y.Code)" v-for="y in selectdatas">
				<p>{{y.Name}}</p><p>{{y.Code}}</p>
			</span>
		</div>
		<div class="main_list">
			<div @click="gopage('智能诊股')">
				<img :src="list_1">
				<h5>智能诊股</h5>
				<p>海量大数据&nbsp;&nbsp;人工智能预测股票未来</p>
				<img :src="more">
			</div>
			<div @click="gopage('形态选股')">
				<img :src="list_2">
				<h5>形态选股</h5>
				<p>快速匹配经典上涨形态</p>
				<img :src="more">
			</div>
		</div>
		<div class="main_nav">
			<div class="main_forscroll">
				<div @click="gopage('热门消息')">
					<img :src="nav4">
					<p>热门消息</p>

				</div>
				<div @click="gopage('大数据分析')">
					<img :src="nav3">
					<p>大数据分析</p>
				</div>
				<div @click="gopage('诊股排名')">
					<img :src="nav2">
					<p>诊股排名</p>

				</div>
				<div @click="gopage('K线擂台')">
					<img :src="nav1">
					<p>K线闯关</p>

				</div>
			</div>
		</div>	
		<div class="main_live" v-if="livedatas" @click="golivelist()">
			<div>
				<div>
					<img :src="main_live">
					<p>投顾直播</p>
					<p>更多</p>
					<img :src="more">
				</div>
			</div>
			<section style="padding-bottom:0.2rem" v-for='live in livedatas'>
				<div>
					<div>
						直播中
						<div class="main_zan" @click.stop="clickzan(live)">
							<img :src="live.IsGood==1?'static/images/zan/home_live_icon_praise_red@3x.png':'static/images/zan/home_live_icon_praise@3x.png'">
						</div>
						<p class="p_zan" @click.stop="clickzan(live)">{{live.Good}}</p>
					</div>
					<span ><p style="color:#333333;">{{live.Text}}</p></span>
				</div>
				<div>
					<img :src="imgip+live.AdvPortrait">
					<p style="font-size:0.24rem;">{{live.AdvName}}</p>
				</div>
			</section>
		</div>
		<br><br>
		<v-footer :curpage="'/main'"></v-footer>
		 <div v-transfer-dom>
          <popup v-model="showpopup">
            <div class="popup">
                <img src="../assets/qrcode.jpg">
                <p>长按图片关注公众号<br>体验更多功能</p>
            </div>
          </popup>
        </div>
	</div>
</template>

<script>
import Vue from 'vue'
import _Socket from '../plugins/heartbeat';
import { Rater,Marquee, MarqueeItem} from 'vux';
import { debounce } from 'vux';
import { Loading } from 'vux';
import { Toast } from 'vux';
import vFooter from '../components/index';
import { TransferDomDirective as TransferDom,Popup} from 'vux';
export default {
	components: {
		debounce,
		Rater,
	    Marquee,
	    MarqueeItem,
	    Toast,
	    vFooter,
	    Popup
	},
	directives: {
        TransferDom
    },
    data(){
    	return{
    		//大盘指数数据
    		datas1:'',
	        //热点布局数据
			datas2:'',
			livedatas:[],	
			showpopup:false,      
    		mainslide:false,
    		currentValue:'',
    		inputon:false,
    		selectdatas:'',
    		showzan:false,
    		//设备分辨率比率
    		main_search:require('../assets/index/home_icon_search@'+this.$store.state.dpr+'x.png'),
    		mian_chotit:require('../assets/index/home_icon_harden@'+this.$store.state.dpr+'x.png'),
    		mian_info:require('../assets/index/home_icon_message@'+this.$store.state.dpr+'x.png'),
    		mian_assess:require('../assets/index/home_icon_comment@'+this.$store.state.dpr+'x.png'),
    		main_live:require('../assets/index/home_icon_live@'+this.$store.state.dpr+'x.png'),
    		more:require('../assets/index/home_btn_more@'+this.$store.state.dpr+'x.png'),
    		nav1:require('../assets/index/home_icon_Kline@'+this.$store.state.dpr+'x.png'),
    		nav2:require('../assets/index/home_icon_ranking@'+this.$store.state.dpr+'x.png'),
    		nav3:require('../assets/index/home_icon_strategy@'+this.$store.state.dpr+'x.png'),
    		nav4:require('../assets/index/home_icon_hot@'+this.$store.state.dpr+'x.png'),
    		header_bg:require('../assets/index/home_top_bgimg@'+this.$store.state.dpr+'x.png'),
    		forheader:true,
    		list_1:require('../assets/index/home_btn_diagnose@'+this.$store.state.dpr+'x.png'),
    		list_2:require('../assets/index/home_btn_choose@'+this.$store.state.dpr+'x.png'),
    		imgip:localStorage.picIP
    	}
    },
    created(){
    	var _that=this;
    	//获取userId
    	if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
    	let livedata={
    		header:'01',
    		id:'1',
    		type:'0',
    		userId:sessionStorage.userId
    	}
		if(!Vue.$livesoket){
			Vue.$livesoket=_Socket.createWebSocket('ws://www.shangjin666.cn:7182/');
			Vue.$livesoket.onopen=function(){
				console.log('已上线')
		        if(!liveinterval){
		            var liveinterval=setInterval(function(){
		                if(Vue.$livesoket.readyState==1)Vue.$livesoket.send('000000');
		                console.log('直播：000000')
		            },30000) 
		        }
				Vue.$livesoket.send(JSON.stringify(livedata));
			}
		}else{
			Vue.$livesoket.send(JSON.stringify(livedata));
		}
    	//消息接收
		Vue.$livesoket.onmessage=function(event){
			switch(JSON.parse(event.data).Type){
				//首次加载
				case '0':	
					JSON.parse(event.data).List.forEach(function(value,index,arr){
						if(index<=1)_that.livedatas.push(value);
					})
				break;	
				//推送的消息
				case '1':
					_that.livedatas.pop();
					_that.livedatas.unshift(JSON.parse(event.data).List[0]);
				break;
				//返回的点赞消息
				case '3':	
					if(JSON.parse(event.data).Success=="true"){
						_that.livedatas.forEach((value,index,arr)=>{
							if(value.AdvId==Number(JSON.parse(event.data).Id)){
								value.IsGood=1;
								value.Good=Number(value.Good)+1;
							}
						})
					}else{
						_that.$vux.toast.show({
	                        text: '点赞失败',
	                        type:'warn',
	                        width:'2.5rem',
	                        time:2000,
	                        isShowMask:true,
	                    })
					}
				break;	
			}
		}
    },
    activated(){
    	this.forheader=true;
		document.title='未来K线';
    },
    //一般用来接口调用请求数据
    mounted(){
    	//获取header的高度
    	this.headerheight=this.$refs.header.clientHeight;
    	window.addEventListener('scroll', this.handleScroll);
    	var _that=this;
    	this._debounce = debounce((val) => {
	        this.searching(val)
	    }, 0)
	    //获取大盘指数
	    let timestamp=(new Date()).valueOf();
		let signdata=this.$socketsign('601006&2&1&'+timestamp);
    },
  	methods: {
  		gopage(val){
  			switch(val){
  				case '智能诊股':
	  				if(sessionStorage.userId!='undefined'){
	  					this.$router.push({
							path:'search',
						});
	  				}else{
	  					this.showpopup=true;
	  				}
  					
			    	break;
			    case '形态选股':
			    	if(sessionStorage.userId!='undefined'){
			    		this.$router.push({
				    		path:'GraphStocks',
				    	});
			    	}else{
			    		this.showpopup=true;
			    	}
			    	break;
			    case '热门消息':
  					this.$router.push({
			    		path:'message',
			    	});
			    	break;
			    case '大数据分析':
  					this.$router.push({
			    		path:'bigdata',
			    	});
			    	break;
			    case '诊股排名':
  					this.$router.push({
			    		path:'quotation',
			    		query:{
			    			home:1
			    		}
			    	});
			    	break;
			    case 'K线擂台':
  					this.$router.push({
			    		path:'klinearena',
			    	});
			    	break;					
  			}
  		},
	    onClick (i) {
	        console.log(i)
	    },
	    focus(){
	    	this.inputon=true;
	    },
	    blur(){
			var _that=this;
			setTimeout(function(){
				_that.inputon=false;
			})
	    },
	    //搜索
	    search(value){
	    	this.$router.push({
	    		path:'marketTrend',
	    		query:{
	    			code:value
	    		}
	    	});
	    },
	    //点赞
      	clickzan(val){
      		if(val.IsGood!=1&&sessionStorage.userId!='undefined'){
      			let senddata={
	        		header:'01',
	        		id:val.AdvId,
	        		type:'1',
	        		userId:sessionStorage.userId
	        	}
	        	console.log(JSON.stringify(senddata))
	          	Vue.$livesoket.send(JSON.stringify(senddata));
	        }else if(sessionStorage.userId=='undefined'){
	        	this.showpopup=true;
	        }
      	},
	    //进入直播
	    golivelist(){
	    	this.$router.push({
	    		path:'livelist'
	    	});
	    },
	    //搜索框动效
	    handleScroll () {
	    	var heightvalue=this.$refs.header.clientHeight-this.$refs.header1.clientHeight;
	    	this.forheader=(window.scrollY<heightvalue)?true:false;
		},
		//搜素业务
		searching(val){
			if(!val){
				this.selectdatas='';
			}else{
				this.$axios.get('SearchStock/'+val)
			  	.then((response)=>{
			    	if(response.data.Success=="true"){
			    		this.selectdatas=response.data.Result
			    		if(val.length==6&&response.data.Result.length==1){
			    			this.$router.push({
					    		path:'marketTrend',
					    		query:{
					    			code:val
					    		}
					    	});
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
		}
  	},
  	//过滤
  	filters: {
    	capitalize: function (value) {
        	if (!value) return ''
	      	if(value.length>4){
	      		value=value.substring(0,4)+'...'
	      	}
	      	return value
   		},
  	},
  	watch:{
  		currentValue:function(newval){
  			this._debounce(newval);
  		},
  	},
  
}
</script>
