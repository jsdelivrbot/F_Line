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
			    width: 3.8rem;
			    height: 3.7rem;
			    right: 3rem;
			    transition-timing-function:linear;
			}
			section:nth-child(2){
				height:2rem;
				background: #F8F8F8;
			    width: 3rem;
			    height: 3.8rem;
			    right: 0;
			    opacity: 0.8;
			}
		}
		&>div:nth-child(1){
			height:0.6rem;
			width:100%;
			position: relative;
			span{
				position: absolute;
				font-family: PingFangSC-Regular;
				color: #999999;
				letter-spacing: 0;
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
			    width: 3.8rem;
			    height: 3.7rem;
			    right: 3rem;
    			transition-timing-function:linear;
			}
			&>section:nth-child(2){
				height:2rem;
				background: #F8F8F8;
			    width: 3rem;
			    height: 3.8rem;
			    right: 0;
			    opacity: 0.8;
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
			color: #000000;
			letter-spacing: 0;
			line-height: 0.7rem;
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
</style>
<template>
	<div v-title="'诊断报告'">
		<div>
	    	<div class="imaone">
	    		<div v-if="datas1">
					<span>{{datas1.Sections[0].StockName}}({{datas1.Sections[0].Code}})</span>
					<span>分析周期:{{datas1.Sections[0].DateStart}}至{{datas1.Sections[0].DateEnd}}</span>
				</div>
				<div class="for_wrap">
					<swiper dots-position="right" @on-index-change="onSwiper1Change" v-model="swiperItem" :show-desc-mask='true' width="100%" height="4.2rem" >
						<swiper-item>
							<section ref='div0'></section>
							<div id="charts">
								<div id="main1"></div>
							</div>
							<p class="inwrap">智能预测</p>
						</swiper-item>
						<swiper-item>
							<div class="sec_slide">
								<div>
									<p>智能预测</p>
								</div>
								<div>
									<div>
										<div><p>15天</p></div>
										<dl>
										   <dt>123</dt>
										   <dt>计算机</dt>
										   <dt>456</dt>
										   <dt>显示器</dt>
										</dl>
									</div>
									<div>
										<div><p>15天</p></div>
										<dl>
										   <dt>123</dt>
										   <dt>计算机</dt>
										   <dt>456</dt>
										   <dt>显示器</dt>
										</dl>
									</div>
									<div>
										<div><p>15天</p></div>
										<dl>
										   <dt>123</dt>
										   <dt>计算机</dt>
										   <dt>456</dt>
										   <dt>显示器</dt>
										</dl>
									</div>
								</div>
								<div>
									<p>数据信息仅供参考，不构成投资建议！</p>
								</div>
							</div>
						</swiper-item>
					</swiper>
				</div>
	    	</div>
	    	<div class="con_stra">
	    		<p>历史相似走势个股</p>
	    		<p>相似度<countup :end-val="code_score" :duration="9" :decimals="2" class="demo1"></countup>%</p>
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
								<div id="charts">
							        <div :id="main"></div>
							    </div>
							</div>
						</swiper-item>
					</swiper>
	    		</div>
	    	</div>
	    </div>
		<v-clinicfooter :textleft="tleft" :textright="tright" ></v-clinicfooter>
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
	    data(){
	    	return{
	    		datas1:'',
	    		dayrate:"60%",
	    		weekrate:"90%",
	    		monthrate:"30%",
	    		showHideOnBlur: false,
	    		dialogimg:require('../../assets/clinic/diagnose_icon_date@'+this.$store.state.dpr+'x.png'),
	    		swiperItemIndex: 0,
				swiperItem:0,
				firstswiper:1,
	    		maindata:['main2','main3','main4','main5'],
	    		tempdatas:'',
	    		code_name:'',
	    		code_code:'',
	    		code_start:'',
	    		code_end:'',
	    		code_score:90,
	    		img_left:require('../../assets/clinic/diagnose_btn_left@'+this.$store.state.dpr+'x.png'),
	    		img_right:require('../../assets/clinic/diagnose_btn_right@'+this.$store.state.dpr+'x.png'),
				tleft:'继续诊股',
	    		tright:'添加自选',
	    	}
	    },
	    created(){
	    	
	    	var _that=this;
	    	//诊股请求
	    	this.$vux.loading.show({text: '正在诊断'})
	    	let timestamp=(new Date()).valueOf();
			let signdata=this.$socketsign('601006&'+timestamp);
	    	this.$axios.post('ZG', {
		        APPID:this.$store.state.APPID,
				code:'601006',
				timestamp:timestamp,
				signed:signdata
		  	})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		//格式化数据
		    		Vue.$datas=response.data.Result.Sections;
		    		Vue.$data1=this.$formatk(response.data.Result.Sections[0].Ks);
		    		Vue.$line1=this.$formatline(response.data.Result.Sections[0].Ks);
					for(let i=2;i<Vue.$datas.length+1;i++){
						var _data='$data'+i;
						var _line='$line'+i;
						var _vol='$vol'+i;
						Vue._data=this.$formatv(response.data.Result.Sections[i-1].Ks);
						Vue._line=this.$formatcon(response.data.Result.Sections[i-1].Ks);
						Vue._vol=this.$formatdata(response.data.Result.Sections[i-1].Ks);
					}
		    		this.tempdatas=response.data.Result.Sections;
		    		this.code_name=this.tempdatas[1].StockName;
			        this.code_code=this.tempdatas[1].Code;
			        this.code_start=this.tempdatas[1].DateStart;
			        this.code_end=this.tempdatas[1].DateEnd;
			        //this.code_score=this.tempdatas[1].Score;
		    		_that.datas1=response.data.Result;
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
				;
		    	console.log(error);
		  	});
		  	
	    },
	    mounted(){

	    },
	    updated(){
			if(this.firstswiper==1){
				var _that=this;
				this.$refs.div0.style.transitionDuration='0s';
				this.$refs.div0.style.width='3.8rem';
				for(let i=0;i<4;i++){
					this.$refs.div1[i].style.transitionDuration='0s';
					this.$refs.div1[i].style.width='3.8rem';
				}
				for(let j=0;j<Vue.$datas.length-1;j++){
					if(this.swiperItemIndex==j){
						var name1='jsondata'+(j+2);
						var name2='jsondata'+(j+2)+'_1';
						var name3='voldata'+(j+2)+'_1';
						var _data='$data'+(j+2);
						var _line='$line'+(j+2);
						var _vol='$vol'+(j+2);
						var main='main'+(j+2);
						let name1 = JSON.parse(JSON.stringify(Vue._data));
						let name2 = JSON.parse(JSON.stringify(Vue._line));
						let name3 = JSON.parse(JSON.stringify(Vue._vol));
						this.$trastcon(name1,main,name2,name3);
						this.$refs.div1[j].style.transitionDuration='5.5s';
						this.$refs.div1[j].style.width='0';
					}
				}
				var linedata=[18.3,18.5,18.6,19.0,18.6,18.9,18.3,18.5,18.6,19.0,18.6,18.9,19.0,18.6,18.9]
				let jsondata1 = JSON.parse(JSON.stringify(Vue.$data1));
				this.$contrast(jsondata1,'main1',linedata);
				this.$refs.div0.style.transitionDuration='5.5s';
				this.$refs.div0.style.width='0';
			}
	    },
	    methods:{
	    	onSwiperItemIndexChange (index) {
				//重新updata标志
				this.firstswiper=1
		        console.log('demo item change', index);
		        this.$nextTick(function(){
		        	this.code_name=this.tempdatas[index+1].StockName;
			        this.code_code=this.tempdatas[index+1].Code;
			        this.code_start=this.tempdatas[index+1].DateStart;
			        this.code_end=this.tempdatas[index+1].DateEnd;
			        this.code_score=this.tempdatas[index+1].Score;
		        })
		    },
			onSwiper1Change(index){
				//重新updata标志
				this.firstswiper=2;
				console.log('demo1', index);
			},
		    slide_left(){
		    	if(this.swiperItemIndex>0)this.swiperItemIndex--;
		    },
		    slide_right(){
		    	if(this.swiperItemIndex<3)this.swiperItemIndex++;
		    },
	    }
	}
</script>
