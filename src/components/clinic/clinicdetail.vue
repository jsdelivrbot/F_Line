<style lang="less" scoped>
	.imaone{
		width:100%;
		height:5.1rem;
		margin-top:0.1rem;
		background: #FFFFFF;
		.for_wrap{
			border: 1px solid #CCCCCC;
			position: relative;
			section{
				position: absolute;
				z-index: 100;
			}
			section:nth-child(1){
				background: #FFFFFF;
			    width: 6.9rem;
			    height: 3.7rem;
			    right: 0;
			    transition-timing-function:linear;
			}
			section:nth-child(2){
				width: 3rem;
				height: 3.8rem;
				right: 0;
				background: #CCCCCC ;
				opacity: 0.3;
				z-index: 600;
				text-align: center;
				
			}
			p{	
				position: absolute;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FF5F45;
				letter-spacing: 0;
				z-index: 600;
				right: 0.45rem;
    			bottom: 0.4rem;
			}
		}
		&>div:nth-child(1){
			height:0.6rem;
			width:100%;
			position: relative;
			span{
				position: absolute;
				font-family: PingFangSC-Regular;
				color:black;
				letter-spacing: 0;
				font-weight: bold;
			}
			span:nth-child(1){
				font-size: 0.3rem;
				left:0.3rem;
				top:0.1rem;
			}
			span:nth-child(2){
				font-size: 0.2rem;
				left:3rem;
				top:0.16rem;
				padding-left:0rem
			}
		}
		&>div:nth-child(2){
			width:6.9rem;
			height:4.2rem;
			margin:0 auto;
		}
	}
	.forcarous{
		position: relative!important;
		width:7.5rem;
	}
	.carous_wrap{
		border: 1px solid #CCCCCC;
		height:4.2rem!important;
		div{
			height:100%!important;
		}
		position: relative;
		&>img{
			width:0.44rem;
			height:0.8rem;
			z-index: 100;
			top:1.6rem;
			position: absolute;
		}
		&>img:nth-child(1){
			left:0.1rem;
		}
		&>img:nth-child(2){
			right:0.1rem;
		}
	}
	#chart,#main1,#main2,#main3,#main4,{
		width:6.9rem;
		height:4.2rem;
		margin: 0 auto;
	}
	.showred {
		color:#FF5E45;
	}
	.showgreen {
		color:#1CB64A;
	}
	#charts{
		width:6.9rem;
		height:4.2rem;
	}
	.wrap_wrap{
		position: relative;
		&>section{
				position: absolute;
				z-index: 100;
			}
		&>section:nth-child(1){
			background: #FFFFFF;
		    width: 6.9rem;
		    height: 3.7rem;
		    right: 0;
			transition-timing-function:linear;
		}
		&>section:nth-child(2){
			width: 3rem;
			height: 3.8rem;
			right: 0;
			background: #CCCCCC ;
			opacity: 0.3;
			z-index: 600;
		}

	}
	.con_stra{
		width:100%;
		height:0.6rem;
		background: #F8F8F8;
		position: relative;
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color:black;
			letter-spacing: 0;
			line-height: 0.7rem;
			font-weight:black;
		}
		p:nth-child(1){
			position: absolute;
			left:0.3rem;
		}
		p:nth-child(2){
			position: absolute;
			right:0.3rem;
			color:#FF5F45;
		}
	}
	.sec_slide{
		width:100%;
		height:100%;
		&>div:nth-child(1){
			height:0.8rem;
			width:100%;
			position: relative;
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #FF5F45;
				letter-spacing: 0;
				line-height:0.8rem;
			}
			text-align: left;
			padding-left: 0.2rem;
		}
		&>div:nth-child(2){
			height:2.9rem;
			display: flex;
			&>div{
				flex:1;
				height:85%;
				top:0.15rem;
				margin:0 0.1rem;
				background: #F8F8F8;
				border-radius: 0.06rem;
				position:relative;
				text-align: center;
				&>div:nth-child(1){
					width:1rem;
					height:0.4rem;
					background: #FFFFFF;
					box-shadow: 0 0 4px 0 #CCCCCC;
					border-radius: 0.06rem;
					text-align: center;
					p{
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #999999;
						line-height: 0.4rem;
					}
					position: relative;
					top:-0.2rem;
					margin:0 auto;
				}
				dl{
					dt{
						padding-top:0.15rem;
					}
					&>dt:nth-child(1),&>dt:nth-child(3){
						font-family: PingFangSC-Medium;
						font-size: 0.36rem;
						color: #FF5F45;
						letter-spacing: 0;
						line-height: 0.36rem;
					}
					&>dt:nth-child(2),&>dt:nth-child(4){
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #999999;
						line-height: 0.24rem;
					}
				}
				
			}
			&>div:first-child{
				margin-left:0.3rem;
			}
			&>div:last-child{
				margin-right:0.3rem;
			}
		}
		&>div:nth-child(3){
			height:0.5rem;
			width:100%;
			position: absolute;
			bottom:0;
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #CCCCCC;
				letter-spacing: 0;
				line-height: 0.5rem;
			}
			text-align: center;
		}
	}
	.inwrap{
		position: absolute;
	    font-family: PingFangSC-Regular;
	    font-size: 0.3rem;
	    color: #FF5F45;
	    letter-spacing: 0;
        bottom: 0.65rem;
		right: 1rem;
	}
	.gifwrap{
		width:100%;
		height:100%;
		position: fixed;
		z-index: 700;
		top:0;
		background: #FFFFFF;
		text-align: center;
		img{
			width:5rem;
			margin-top:50%;
		}
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #999999;
			letter-spacing: 1.67px;
		}
	}
.hidegif{
	display: none;
}
.alert_tip{
	position: absolute;
	top:40%;
	width: 4.5rem;
	margin-left:1.5rem;
	background: rgba(39,40,34,0.6);
	text-align: center;
	height:1.2rem;
	transition:1s;
	opacity: 1;
	z-index: 1000;
	border-radius: 0.06rem;
	p{
		font-family: PingFangSC-Medium;
		font-size: 0.3rem;
		color: white;
		letter-spacing: 2px;
		line-height: 1.2rem;
	}
}
.show_tip{
	display: block;
	opacity: 1;
}
.hide_tip{
	display: none;
	opacity: 0;
}
.texttip{
	width:100%;
    background: #FFFFFF;
	text-align: left;
	p{
		font-family: PingFangSC-Regular;
		font-size: 0.24rem;
		color: #999999;
		letter-spacing: 0;
		padding:0.2rem;
		padding-top:0;
	}
}
.fade-enter-active {
  transition: all .6s easeing-out;
}
.fade-leave-active{
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter,.fade-leave-to{
	transform: scale(1.2,1.2);
  	opacity: 0;
}
strong{
	font-weight: normal;
}
.showcurnum{
	position: relative;
	background: #FFFFFF;
	text-align: right;
	p{
		font-size:0.3rem;
		padding-right:0.3rem;
		position: relative;
		top:-0.15rem;
	}
	strong{
		color:red;
	}
}

</style>
<template>
	<div>
		<div>
	    	<div class="imaone">
	    		<div v-if="datas1">
					<span>{{datas1.StockName}}({{datas1.Code}})</span>
				</div>
				<div class="for_wrap">
					<section ref='div0'></section>
					<section></section>
					<div id="charts">
						<div id="main1"></div>
					</div>
					<p>未来15日走势模拟</p>
				</div>
	    	</div>
	    	<div class="con_stra">
	    		<p>历史相似形态</p>
	    		<p>相似度<countup :start-val="0" :end-val="code_score" :duration="countime" :decimals="2" class="demo1"></countup>%</p>
	    	</div>
	    	<div class="imaone forcarous">
    			<div>
					<span>{{code_name}}({{code_code}})</span>
					<span>分析周期:{{code_start}}至{{code_end}}</span>
				</div>
	    		<div class="carous_wrap">
	    			<img @click="slide_left()" :src="img_left">
    				<img @click="slide_right()" :src="img_right">
					<swiper dots-position="center" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex" :show-desc-mask='true' width="100%" height="4.2rem" :show-dots='false'>
						<swiper-item v-for="main in maindata" :key="main.id">
							<div class="wrap_wrap">
								<section ref="div1"></section>
								<section></section>
								<div id="charts">
							        <div :id="main"></div>
							    </div>
							</div>
						</swiper-item>
					</swiper>
	    		</div>
	    	</div>
	    </div>
	    <div class="showcurnum">
			<p>数据量：<strong>{{curnum}}</strong>/{{allnum}}</p>
	    </div>
		<div class="texttip">
			<p>
				通过模式识别技术，快速匹配大量K线形态高度相似的个股，并运用大数据运算，模拟出未来15个交易日走势。
			</p>
		</div>
	    <div class="gifwrap" :class="[showgif?'':'hidegif']" >
	    	<img src="../../assets/clinic/loading.gif">
	    	<p>智能诊股中...</p>
	    </div>
	    <transition name="fade">
		    <div class="alert_tip" v-if="showtip">
		    	<p>匹配完成、开始对比</p>
		    </div>
	    </transition>
		<v-clinicfooter :textleft="tleft" :textright="tright" :alerttheresult="alertit"></v-clinicfooter>
		<audio id="palyaudio">
		  	<source src="../../static/audio/getresult.mp3"/>
		</audio>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Countup,Swiper,SwiperItem} from 'vux';
	import vClinicfooter from '../../components/clinic/clinicfooter.vue';
	export default {
		components: {
		    Swiper,
		    SwiperItem,
		    Countup,
			vClinicfooter
  		},
	    name: 'v-detail',
	    props:['redraw'],
	    data(){
	    	return{
	    		datas1:'',
	    		showHideOnBlur: false,
	    		dialogimg:require('../../assets/clinic/diagnose_icon_date@'+this.$store.state.dpr+'x.png'),
	    		swiperItemIndex: 0,
				swiperItem:0,
	    		maindata:[],
	    		code_name:'',
	    		code_code:'',
	    		code_start:'',
	    		code_end:'',
	    		code_score:0,
	    		img_left:require('../../assets/clinic/diagnose_btn_left@'+this.$store.state.dpr+'x.png'),
	    		img_right:require('../../assets/clinic/diagnose_btn_right@'+this.$store.state.dpr+'x.png'),
				tleft:'继续诊股',
	    		tright:'添加自选',
	    		showgif:true,
	    		alertit:false,
	    		countime:10,
	    		showtip:false,
	    		allnum:'',
	    		curnum:1,
	    		fromparents:false,
	    		alerttime:0,
	    	}
	    },
	    mounted(){
	    	this.getdata();
	    	//页面组件
    		this.$store.dispatch('CONPAGE', { comp:'clinic'});
	    },
	    activated(){
	    	if(this.$store.state.inpagecom=='trend'){
	    		//重绘无动画
	    		let jsondata1 = JSON.parse(JSON.stringify(Vue.$data1));
				this.$contrast(jsondata1,'main1',Vue.$line1,false);
				var main='main'+(this.curnum+1);
				let name1 = JSON.parse(JSON.stringify(Vue.$dataarr[this.curnum]));
				this.$trastcon(name1,main,false);
				if(this.alerttime==0){
					this.alertit=!this.alertit;
					this.alerttime++;
				}
	    	}
	    	//页面组件
    		this.$store.dispatch('CONPAGE', { comp:'clinic'});
	    },
	    methods:{
	    	cleardata(){
            	this.$destroy();
	    	},
	    	audioAutoPlay(id){
	            var audio = document.getElementById(id);
	            audio.play();
	            document.addEventListener("WeixinJSBridgeReady", function () {
	                audio.play();
	            }, false);
	        },
	    	getdata(){
	    		//诊股请求
		    	let timestamp=(new Date()).valueOf();
				let signdata=this.$socketsign(this.$route.query.code+'&'+timestamp);
		    	this.$axios.post('ZG', {
			        APPID:this.$store.state.APPID,
					code:this.$route.query.code,
					timestamp:timestamp,
					signed:signdata
			  	})
			  	.then((response)=>{
			    	if(response.data.Success=="true"){
			    		//处理异步请求的结果与当前code对比
			    		if(this.$route.query.code==response.data.Result.Self.Code){
			    			//格式化数据
				    		Vue.$alldatas=response.data.Result;
				    		Vue.$datas=response.data.Result.Sections;
				    		Vue.$data1=this.$formatk(response.data.Result.Self.Ks);
				    		Vue.$line1=response.data.Result.Self.FutureDatas;
				    		Vue.$dataarr=new Array();
				    		//创建main id
				    		for(let k=2;k<Vue.$datas.length+2;k++){
				    			this.maindata.push('main'+k)
				    		}
				    		this.allnum=Vue.$datas.length;
							for(let i=0;i<Vue.$datas.length;i++){
								Vue.$dataarr[i]=this.$formatv(response.data.Result.Sections[i].Ks);
							}
				    		this.code_name=Vue.$datas[0].StockName;
					        this.code_code=Vue.$datas[0].Code;
					        this.code_start=Vue.$datas[0].DateStart;
					        this.code_end=Vue.$datas[0].DateEnd;
				    		this.datas1=response.data.Result.Self;
			    			this.showtip=true;
							this.showgif=false;
				    		this.audioAutoPlay('palyaudio');
				    		//弹出框
				    		this.$store.dispatch('CONALERT',{
								state:false
							});
							setTimeout(()=>{
								this.alertit=!this.alertit;
							},12500)
				    		setTimeout(()=>{
				    			this.showtip=false;
				    			this.$refs.div0.style.transitionDuration='0s';
								this.$refs.div0.style.width='6.9rem';
								for(let i=0;i<Vue.$datas.length;i++){
									this.$refs.div1[i].style.transitionDuration='0s';
									this.$refs.div1[i].style.width='6.9rem';
								}
								for(let j=0;j<Vue.$datas.length;j++){
									if(this.swiperItemIndex==j){
										var name1='jsondata'+(j+2);
										var main='main'+(j+2);
										let name1 = JSON.parse(JSON.stringify(Vue.$dataarr[j]));
										this.$trastcon(name1,main,true);
										this.$refs.div1[j].style.transitionDuration='10s';
										this.$refs.div1[j].style.width='0';
										this.code_score=Vue.$datas[j].Score;
									}
								}
								let jsondata1 = JSON.parse(JSON.stringify(Vue.$data1));
								this.$contrast(jsondata1,'main1',Vue.$line1,true);
								this.$refs.div0.style.transitionDuration='10s';
								this.$refs.div0.style.width='0';
				    		},1500)
			    		}
			    	}else{
			    		console.log('错误',response.data.Error_msg)
			    		this.$router.push({
				    		path:'fault',
				    		query:{
				    			msg:response.data.Error_msg
				    		}
				    	});
			    	}
			  	})
			  	.catch((error)=>{
			    	console.log(error);
			  	});
	    	},
	    	onSwiperItemIndexChange (index) {
	    		this.curnum=Number(index)+1;
	    		var _that=this;
	    		this.countime=0;
				for(let i=0;i<Vue.$datas.length;i++){
					this.$refs.div1[i].style.transitionDuration='0s';
					this.$refs.div1[i].style.width='0rem';
				}
				//重新updata标志
		        console.log('demo item change', index);
		        this.$nextTick(function(){
		        	this.code_name=Vue.$datas[index].StockName;
			        this.code_code=Vue.$datas[index].Code;
			        this.code_start=Vue.$datas[index].DateStart;
			        this.code_end=Vue.$datas[index].DateEnd;
			        this.code_score=Vue.$datas[index].Score;
			        
					for(let j=0;j<Vue.$datas.length;j++){
						if(this.swiperItemIndex==j){
							var main='main'+(j+2);
							let name1 = JSON.parse(JSON.stringify(Vue.$dataarr[j]));
							this.$trastcon(name1,main,false);
							this.code_score=Vue.$datas[j].Score;
						}
					}
		        })
		    },
		    slide_left(){
		    	if(this.swiperItemIndex>0)this.swiperItemIndex--;
		    },
		    slide_right(){
		    	if(this.swiperItemIndex<Vue.$datas.length)this.swiperItemIndex++;
		    },
	    },
	}
</script>
