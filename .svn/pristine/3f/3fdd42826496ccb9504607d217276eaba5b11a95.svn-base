<style lang="less" scoped>
	@font-face {
	    font-family: 'FZSKJW--GB1-0';
	    src: url('../../assets/fonts/FZSKJW--GB1-0.ttf');

	    font-weight: normal;
	    font-style: normal;
	}
	.pray_wrap{
		width: 100%;
		height:100%;
		position: relative;
		overflow: hidden;
		img{
			position: absolute;
			z-index: 1;
		}
		.pray_bg{
			top:0;
			left: 0;
			width: 100%;
			z-index: -100;
		}
		.pray_fo{
			width: 40%;
			left: 30%;
			top:0.6rem;
			z-index: 0;
		}
		.pray_light{
			width: 40%;
			left: 30%;
			top:0;
			z-index: -20;
			transition:.75s ease-in;
		}
		.clickplayer{
			transform:scale(2,2);
		}
		.pray_candleleft{
			width: 10%;
			left:14%;
			top:4.5rem;
		}
		.pray_candleright{
			width: 10%;
			right:14%;
			top:4.5rem;
		}
		.pray_censer{
			width: 20%;
			left:40%;
			top:5.5rem;
		}
		.pray_btn_prayer{
			position: fixed;
			width: 26%;
			height: 2rem;
			left:37%;
			bottom:0.15rem;
			background: url('../../assets/pray/btn_prayer@2x.png') no-repeat;
			background-size: 100% 100%;
		}
		.pray_btn_set{
			position: fixed;
			width: 20%;
			right:3%;
			bottom:0.3rem;
		}
		.pray_incense{
			width: 16%;
			left:42%;
			top:4.8rem;
		}
		.anima_ince{
			width: 26%;
			display:none;
		}
		// .incense-enter{
		//     transform: scale(0.6,0.6);//skew
		//     opacity: 0.8;
		//     position: fixed;
		// 	width: 16%;
		// 	right:3%;
		// 	bottom:0.3rem;
		// }
		.incense-enter-active {
		    animation: bounce-in 1.5s linear;
		    position: fixed;
	    	display:block;
		}
		@keyframes bounce-in {
		    0% {
		        left:78%;
		   		top:10.5rem;
		    }
		    25% {
		        left:66%;
		   		top:9rem;
		    }
		    50% {
		    	left:56%;
		   		top:7rem;
		    }
		    75% {
		        left:46%;
		   		top:5.5rem;
		    }
		    85% {
		    	left:37%;
		   		top:4rem;
			}
		    100% {
		    	left:37%;
		   		top:4.8rem;
			}
        }
        .pray_scroll{
        	position: relative;
        	width: 80%;
			height:3.4rem;
			top:7rem;
			margin:0 auto;
			z-index: 200;
			overflow: hidden;
			.in_scroll{
				position: absolute;
				top:5%;
				width: 100%;
				height:90%;
				background: url('../../assets/pray/scroll@2x.png') no-repeat;
				background-size: 100% 100%;
				.scroll_cont{
					width: 76%;
					height:71%;
					margin:7% auto;
					overflow-y:scroll;
					p{
						text-align: left;
						line-height: 0.6rem;
					}
					p:nth-child(1){
						font-family: PingFangSC-Medium;
						font-size: 0.3rem;
						color: #FF3F3F;
						letter-spacing: 0;
						font-weight: 600;
					}
					p:nth-child(2){
						font-family: PingFangSC-Medium;
						font-size: 0.24rem;
						color: #FF3F3F;
						letter-spacing: 0;
						line-height: 0.4rem;
					}
				}
			}
			.left_shaft{
				height: 100%;
				position: absolute;
				left: 0;
			}
			.right_shaft{
				height: 100%;
				position: absolute;
				right: 0;
			}
        }
        .scrol-enter{
    		transform: scale(0.8);
	    	width: 0;
		}
		.scrol-enter-active {
	   		transition: all 1.5s cubic-bezier(0.68, 0.35, 0.07, 1);
		}
		.marsk{
			width: 100%;
			height:100%;
			position: absolute;
			top:0;
			left: 0;
			z-index:400;
			background: rgba(50,50,50,0.4);
			.conform{
				width: 60%;
				height:2.5rem;
				background: white;
				border-radius: 0.08rem;
				position: relative;
				top:40%;
				left:20%;
				overflow: hidden;
				.con_top{
					height: 1.7rem;
					width: 100%;
					text-align: center;
					p{
						font-size: 0.35rem;
						color:#353535;
						line-height: 1.7rem;
					}
				}
				.con_bot{
					width: 100%;
					height: 0.8rem;
					border-top: 1px solid #d5d5d6;
					display: flex;
					div{
						flex:1;
						text-align: center;
						a{
							display: block;
							width: 100%;
							height: 100%;
							font-size: 0.3rem;
						    color: #353535;
						    line-height: 0.8rem;
						}
						a:active{
						    background-color: #eee;
						}
					}
					&>div:last-child{
						border-left: 1px solid #d5d5d6;
						a{
							color: #f90;
						}
					}
				}
			}
		}
		.conform-enter{
		}
		.conform-enter-active {
		   transition: all .3s ease;
		}
		.count1,.count2{
			position: fixed;
			min-width: 0.36rem;
			height: 0.36rem;
			padding:0.03rem;
			background: #ea0013;
			border:2px solid white;
			color:white;
			font-size: 0.18rem;
			font-weight: 600;
			text-align: center;
			line-height: 0.36rem;
			z-index: 10;
			border-radius: 50%;
		}
		.count1{
			bottom: 1.6rem;
			left:57%;
		}
		.count2{
			min-width: 0.30rem;
			height: 0.30rem;
			line-height: 0.30rem;
			bottom: 1.1rem;
			right:2.5%;
		}
	}
</style>
<template>
	<div class="pray_wrap" @click="closescroll">
		<img src="../../assets/pray/bg@2x.jpg" class="pray_bg">
		<img src="../../assets/pray/fo@2x.png" class="pray_fo">
		<img src="../../assets/pray/light@2x.png" class="pray_light" :class="{'clickplayer':clickplayer}">
		<img src="../../assets/pray/candle.gif" class="pray_candleleft">
		<img src="../../assets/pray/candle.gif" class="pray_candleright">
		<img src="../../assets/pray/censer@2x.png" class="pray_censer">
		<div class="pray_btn_prayer"  @touchstart.stop.prevent="tstart()" @touchend="tend()"></div>
		<img @click="addincense" src="../../assets/pray/btn_set@2x.png" class="pray_btn_set">
		<img src="../../assets/pray/incense@2x.png" class="pray_incense" v-if="isvisit">
		<transition name="incense">
			<img v-if="clickstate" src="../../assets/pray/hand@2x.png" class="pray_incense anima_ince">
		</transition>
		<transition name="scrol">
			<div class="pray_scroll" v-if="pray_scroll">
				<img src="../../assets/pray/scroll_shaft@2x.png" class="left_shaft">
				<div class="in_scroll">
					<div class="scroll_cont">
						<p>{{p1}}</p>
						<p>{{p2}}</p>
					</div>
				</div>
				<img src="../../assets/pray/scroll_shaft@2x.png" class="right_shaft">
			</div>
		</transition>

		<transition name="conform">
			<div class="marsk" v-if="conform">
				<div class="conform">
					<div class="con_top">
						<p>{{context}}</p>
					</div>
					<div class="con_bot">
						<div @click="onCancel" v-if="context=='今天的香火已用完'"><a>确定</a></div>
						<!-- <div @click="onConfirm" v-if="context=='是否购买香火？'"><a>确定</a></div> -->
						<div @click="onCancel" v-if="context=='请先集香火'"><a>确定</a></div>
						<div @click="onCancel" v-if="context=='网络出现错误'"><a>确定</a></div>
					</div>
				</div>
			</div>
		</transition>
		<div class="count1">{{count1num}}</div>	
		<div class="count2">{{count2num}}</div>	
	</div>
</template>
<script>
	export default {
		data(){
	    	return{   
				clickplayer:false,//光环
				clickstate:false,//上香
				pray_scroll:false,//卷轴
				conform:false,//弹窗
				context:"",//弹窗
				count1num:'',//剩余参拜次数
				count2num:'',//剩余进香数
				isvisit:false,//是否上过香
				p1:'',//卷轴内容
				p2:'',//卷轴内容
				datas:'',
            }
        },
        created(){
        	//获取userId
    		if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        	this.getdata();
        },
        methods:{
        	getdata(){
	 			//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios({
				    method:"GET",
				    url:localStorage.core2+'Visits/'+sessionStorage.userId,
				})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.count1num=response.data.Data.VisitCount;
			    		this.count2num=response.data.Data.XiangCount;
			    		this.isvisit=response.data.Data.IsVisit;
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
		 	},
        	tstart(){
        		this.pray_scroll=false;
        		// this.pray_scroll=!this.pray_scroll;
        		// this.conform=true;
        		if(this.count1num==0){
        			this.context="请先集香火"
        			this.conform=true;
        		}else if(this.count1num>0){
        			this.$axios({
					    method:"PUT",
					    url:localStorage.core2+'Visits/Visit/'+sessionStorage.userId,
					})
				  	.then((response)=>{
				    	if(response.data.Success=="true"){
		        			this.count1num--;
							this.clickplayer=true;
							this.datas=response.data.Data;
			        		if(this.datas.Saying!=null&&this.conform==false){
								this.pray_scroll=true;
								setTimeout(()=>{
									this.p1='财富指数：'+(Math.random()*19+1).toFixed(0)+'0,000';
									this.p2=this.datas.Saying;
								},1000)
							}
							console.log(this.datas)
				    	}else{
				    		this.context="网络出现错误"
        					this.conform=true;
				    	}
				  	})
				  	.catch((error)=>{
				    	console.log(error);
				  	});
        			
        		}
        	},
        	tend(){
				this.clickplayer=false;
        	},
        	onCancel(){
        		this.conform=false;
        	},
        	onConfirm(){
        		alert('买买买买')
        		this.conform=false;
        	},
        	closescroll(){
        		this.pray_scroll=false;
        		this.p1='';
				this.p2='';
				this.clickplayer=false;
        	},
        	//香火按钮
        	addincense(){
        		this.pray_scroll=false;
        		if(!this.clickstate){//上香火
        			if(this.count2num>0){
        				//显示loading
						this.$vux.loading.show({text: '准备上香'})
        				this.$axios({
						    method:"POST",
						    url:localStorage.core2+'Visits/'+sessionStorage.userId,
						})
					  	.then((response)=>{
					  		// 隐藏loading
							this.$vux.loading.hide()
					    	if(response.data.Success=="true"){
					    		this.clickstate=true;
			        			this.count2num--;
			        			this.count1num+=3;
			        			setTimeout(()=>{
			        				this.clickstate=false;
		        					this.isvisit=true;
			        			},1500)
					    	}else{
					    		this.context="网络出现错误"
        						this.conform=true;
					    	}
					  	})
					  	.catch((error)=>{
					  		// 隐藏loading
							this.$vux.loading.hide()
					    	console.log(error);
					  	});
        			}else{
        				this.context="今天的香火已用完"
        				this.conform=true;
        			}
        		}
        		
        	}
        }
		
	}
</script>