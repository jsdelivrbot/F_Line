<style lang="less" scoped>
	.dialog-box{
		position: relative;
		padding-top:0.82rem;
		img{
			position: absolute;
			width:1.03rem;
			height:1.03rem;
			left:2.35rem;
			top:-0.3rem;
		}
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0;
			text-align:center;
		}
		div{

		}
		span{
			display: block;
			position: relative;
			top:-0.7rem;
			height:0.45rem;
			p{
				display: inline-block;
				color: #999999;
			}
			p:nth-child(1){
				text-align:left;
			}
			p:nth-child(2){
				text-align:right;
			}
		}
		.last_span{
			position: absolute;
			height:0.4rem;
			top:2.67rem;
			left:1.61rem;
			p{
				font-size: 0.24rem;
				color: #999999;
				letter-spacing: 2px;
			}
		}
	}
	.trend_head{
		width:100%;
		height:1.8rem;
		background: #FFFFFF;
		display:flex;
		&>div{
			
			height:100%;
			position: relative;
		}
		&>div:nth-child(1){
			flex:2;
		}
		&>div:nth-child(2){
			flex:3;
		}
		.showred p{
			color:#FF5E45;
		}
		.showgreen p{
			color:#1CB64A;
		}
		&>div:first-child{
			&>div:nth-child(1){
				font-size: 0.7rem;
				height:0.98rem;
				font-family: PingFangSC-Medium;
				letter-spacing: 2px;
				padding-left:0.3rem;
			}
			&>div:nth-child(2){
				font-size:0.26rem;
				height:0.4rem;
				&>div{
					display: inline-block;
					padding-left:0.3rem; 
				}
			}
		}
		div:last-child{
			table{
				width: 100%;
				height:100%;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #000000;
				letter-spacing: 0;
				tr{
					display: flex;
					td{
						flex:1;
					}
				}
			}
		}
	}
	.showred {
		color:#FF5E45;
	}
	.showgreen {
		color:#1CB64A;
	}
	.trend_nav{
		width:100%;
		height:0.6rem;
		margin:0.1rem 0;
	}
	.trend_wrap{
		width:100%;
		height:5.6rem;
		background: #FFFFFF;
		display: flex;
		.trend_infir{
			width:66%;
			position: relative;
			p{
				position: absolute;
				z-index: 600;
				font-family: PingFangSC-Regular;
				font-size: 0.2rem;
				color: #999999;
				letter-spacing: 0;
				top:4.5rem;
			}
			.p1{
				left:0.5%;
			}
			.p2{
				left:45%;
			}
			.p3{
				right:0.5%;
			}
		}
		.trend_inf{
			width:100%;
			p{
				display: none;
			}
		}
		.trend_insec{
			width:34%;
			display: none;
			word-wrap:break-word;
			.trend_but{
				padding-top: 0.15rem;
			}
			.trend_scroll{
				height:90%;
				overflow-y: scroll;
				table{
					margin-top: 0.2rem;
					width: 100%;
					font-family: PingFangSC-Regular;
					font-size: 0.24rem;
					color: #999999;
					letter-spacing: 0;
					tr{
						height:0.4rem;
						display: flex;
						td:nth-child(1){
							width:20%;
							text-align: left;
						}
						td:nth-child(2){
							width:40%;
							text-align: center;
						}
						td:nth-child(3){
							width:40%;
							text-align: right;
						}
					}
			}
			}
			.tdred tr td:nth-child(2){
				color:#FF5E45;
			}
			.tdgreen tr td:nth-child(2){
				color:#1CB64A;
			}
		}
		#charts{
			padding-top: 0.2rem;
		}
		.evershow{
			display:block;
		}
	}
	#main{
		width:100%;
		height:5.4rem;
		margin: 0 auto;
	}
	
</style>
<template>
	<div v-title="title">
		<div class="trend_head">
			<div :class="[Number(diff_money)>0 ? 'showred' :'showgreen']">
				<div>{{Number(nowPrice).toFixed(2)}}</div>
				<div>
					<div>{{diff_money}}</div>
					<div>{{diff_rate}}%</div>
				</div>
			</div>
			<div>
				<table>
					<tr>
						<td>今开</td>
						<td>成交量</td>
						<td>成交额</td>
					</tr>
					<tr>
						<td :class="[Number(diff_money)>0 ? 'showred' :'showgreen']">{{openPrice}}</td>
						<td>{{(tradeNum/10000).toFixed(1)}}万</td>
						<td>{{(tradeAmount/10000).toFixed(1)}}万</td>
					</tr>
					<tr>
						<td>昨收</td>
						<td>换手率</td>
						<td>市盈率</td>
					</tr>
					<tr>
						<td>{{closePrice}}</td>
						<td>-</td>
						<td>{{fvaluep}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="trend_nav">
			<tab :left="8">
		        <tab-item selected @on-item-click="ondayclick('everyk')">分时</tab-item>
		        <tab-item @on-item-click="ondayclick('dayk')">日K</tab-item>
		        <tab-item @on-item-click="ondayclick('weekk')">周K</tab-item>
		        <tab-item @on-item-click="ondayclick('monthk')">月K</tab-item>
		    </tab>
		</div>
		<div class="trend_wrap">
			<div :class="[evershow?'trend_infir':'trend_inf']">
				<p class="p1">9:30</p>
				<p class="p2">11:30</p>
				<p class="p3">15:00</p>
				<v-touch
				@panleft="onpanleft"
				@swipeleft="onswipeleft"
				@swiperight="onswiperight"
				>
					<div id="charts" >
				        <div id="main"></div>
				    </div>
				</v-touch>    
			</div>
			<div class="trend_insec" :class="{'evershow':evershow}">
				<v-buttab class="trend_but" :lefttext="'五档'" :righttext="'明细'" @on-click="onbutclick"></v-buttab>
				<div class="trend_scroll">
					<table class="trend_tabone" v-if="tableshow" :class="[Number(indata.diff_money)>0 ? 'tdred' :'tdgreen']">
						<tr>
							<td>卖5</td>
							<td>{{Number(indata.sell5_m).toFixed(2)}}</td>
							<td>{{(indata.sell5_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>卖4</td>
							<td>{{Number(indata.sell4_m).toFixed(2)}}</td>
							<td>{{(indata.sell4_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>卖3</td>
							<td>{{Number(indata.sell3_m).toFixed(2)}}</td>
							<td>{{(indata.sell3_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>卖2</td>
							<td>{{Number(indata.sell2_m).toFixed(2)}}</td>
							<td>{{(indata.sell2_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>卖1</td>
							<td>{{Number(indata.sell1_m).toFixed(2)}}</td>
							<td>{{(indata.sell1_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr></tr>
						<tr>
							<td>买1</td>
							<td>{{Number(indata.buy1_m).toFixed(2)}}</td>
							<td>{{(indata.buy1_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>买2</td>
							<td>{{Number(indata.buy2_m).toFixed(2)}}</td>
							<td>{{(indata.buy2_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>买3</td>
							<td>{{Number(indata.buy3_m).toFixed(2)}}</td>
							<td>{{(indata.buy3_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>买4</td>
							<td>{{Number(indata.buy4_m).toFixed(2)}}</td>
							<td>{{(indata.buy4_n/10000).toFixed(1)}}万</td>
						</tr>
						<tr>
							<td>买5</td>
							<td>{{Number(indata.buy5_m).toFixed(2)}}</td>
							<td>{{(indata.buy5_n/10000).toFixed(1)}}万</td>
						</tr>
					</table>
					<table class="trend_tabtwo" v-else :class="[Number(indata.diff_money)>0 ? 'tdred' :'tdgreen']">
						<tr v-for="detail in detaildata">
							<td>{{detail.time}}</td>
							<td>{{detail.nowPrice}}</td>
							<td>{{(detail.volume/10000).toFixed(1)}}万</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import timeformat from '../../plugins/timeformat.js';
	import { XDialog,TransferDomDirective as TransferDom } from 'vux';
	import { Tab, TabItem } from 'vux';
	import vButtab from '../buttab.vue';
	//导入websocket插件
	import _Socket from '../../plugins/heartbeat';
	export default {
		// directives: {
		//     TransferDom,
		// },
		props:['code','isreload'],
		components: {
			Vue,
		    XDialog,
		    Tab, 
		    TabItem,
		    vButtab,
		    _Socket
  		},
	    name: 'v-trend',
	    data(){
	    	return{
	    		evershow:true,
	    		tableshow:true,
	    		indata:'',
	    		detaildata:{
	    			time:'',
	    			nowPrice:'',
	    			volume:''
	    		},
	    		routefrom:'',
	    		daydatas:'',
	    		weekdatas:'',
	    		monthdatas:'',
	    		//间隔30天
				num:100,
				//日周月K起始点
				daytimestart:'',
				weektimestart:'',
				monthtimestart:'',
				//当前选项卡状态
				tabstate:'everyk',
				daystart:80,
				dayend:100,
				weekstart:80,
				weekend:100,
				monthstart:80,
				monthend:100,
				//日周月k有更多数据
				daymore:true,
				weekmore:true,
				monthmore:true,
				title:'行情',
				titletime:1,
				codecode:'',
				diff_money:'',
				nowPrice:'',
				diff_money:'',
				diff_rate:'',
				openPrice:'',
				tradeNum:'',
				tradeAmount:'',
				closePrice:'',
				fvaluep:'',
				templen:'',
	    	}
	    },
	    mounted(){
	    	this.getdata();
	    },
	    activated(){
	    	//页面组件
    		this.$store.dispatch('CONPAGE', { comp:'trend'});
	    },
	    methods:{
	    	//再次进入初始化数据
	    	cleardata(){
	    		//请求分时线数据
		    	var timestamp=(new Date()).valueOf();
				var signdata=this.$socketsign(this.$route.query.code+'&1&0&'+timestamp);
				var sendeverydata={
					APPID:this.$store.state.APPID,
					code:this.codecode,
					type:'1',
					sub:'0',
					timestamp:timestamp,
					signed:signdata
				}
				//请求实时数据
				var signdata=this.$socketsign(this.$route.query.code+'&0&0&'+timestamp);
				var sendinlinedata={
					APPID:this.$store.state.APPID,
					code:this.codecode,
					type:'0',
					sub:'0',
					timestamp:timestamp,
					signed:signdata
				}
    			Vue.$socket.send(JSON.stringify(sendeverydata));
				Vue.$socket.send(JSON.stringify(sendinlinedata));
				//清空数据
				this.$store.dispatch('ADDDATA',{
					type:'deldayk',
				});
				this.$store.dispatch('ADDDATA',{
					type:'delweekk',
				});
				this.$store.dispatch('ADDDATA',{
					type:'delmonthk',
				});
	    	},
	    	getdata(){
	    		this.codecode=this.$route.query.code;
		    	var _that=this;
		    	//显示loading 日K
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetHisQuotation', {
						code:this.$route.query.code,
						startDate:"",
						num:_that.num,
						type:'day'
					})
					.then((response)=>{
						// 隐藏loading
						this.$vux.loading.hide()
						if(response.data.Success=="true"){
							if(response.data.List.length!=0){
								this.daytimestart=response.data.List[response.data.List.length-1].date;
							}else{
								// 没有更多数据
								this.daymore=false;
							}
							//格式化数据
							let _daykdata=this.$formatcli(response.data.List);
							//数据存储
							for(let i=0;i<_daykdata.length;i++)this.$store.dispatch('ADDDATA',{
								type:'dayk',
								data:_daykdata[i],
							});
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
				//显示loading 周K
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetHisQuotation', {
				      	code:this.$route.query.code,
						startDate:"",
						num:_that.num,
						type:'week'
				  	})
				  	.then((response)=>{
				  		// 隐藏loading
						this.$vux.loading.hide()
				    	if(response.data.Success=="true"){
				    		if(response.data.List.length!=0){
				    			this.weektimestart=response.data.List[response.data.List.length-1].date;
				    		}else{
				    			// 没有更多数据
	                            this.weekmore=false;
				    		}
							//格式化数据
					    	let _weekkdata=this.$formatcli(response.data.List);
							//数据存储
							for(let i=0;i<_weekkdata.length;i++)this.$store.dispatch('ADDDATA',{
								type:'weekk',
								data:_weekkdata[i]
							});
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
				//显示loading 月K
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetHisQuotation', {
				      	code:this.$route.query.code,
						startDate:"",
						num:_that.num,
						type:'month'
				  	})
				  	.then((response)=>{
				  		// 隐藏loading
						this.$vux.loading.hide()
				    	if(response.data.Success=="true"){
				    		if(response.data.List.length!=0){
				    			this.monthtimestart=response.data.List[response.data.List.length-1].date;
				    		}else{
				    			// 没有更多数据
	                            this.monthmore=false;
				    		}
							//格式化数据
					    	let _monthkdata=this.$formatcli(response.data.List);
							//数据存储
							for(let i=0;i<_monthkdata.length;i++)this.$store.dispatch('ADDDATA',{
								type:'monthk',
								data:_monthkdata[i]
							});
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
		    	//判断页面跳转来源
		    	this.routefrom=this.$route.query.routefrom;
		    	if(this.routefrom!='上证指数'){
					this.evershow=true;
				}else{
					this.evershow=false;
				}
		    	//控件注入id
		    	Vue.$id='main';
		    	//请求分时线数据
		    	var timestamp=(new Date()).valueOf();
				var signdata=this.$socketsign(this.$route.query.code+'&1&1&'+timestamp);
				var sendeverydata={
					APPID:this.$store.state.APPID,
					code:this.$route.query.code,
					type:'1',
					sub:'1',
					timestamp:timestamp,
					signed:signdata
				}
				//请求实时数据
				var signdata=this.$socketsign(this.$route.query.code+'&0&1&'+timestamp);
				var sendinlinedata={
					APPID:this.$store.state.APPID,
					code:this.$route.query.code,
					type:'0',
					sub:'1',
					timestamp:timestamp,
					signed:signdata
				}
				//socket通讯
				if(!Vue.$socket){
					Vue.$socket=_Socket.createWebSocket('ws://www.shangjin666.cn:7181/');
					Vue.$socket.onopen=function(){
						console.log('已连接')
				        if(!interval){
				            var interval=setInterval(function(){
				                if(Vue.$socket.readyState==1)Vue.$socket.send('000000');
				                console.log('全局：000000')
				            },30000) 
				        }
				        Vue.$socket.send(JSON.stringify(sendeverydata));
						Vue.$socket.send(JSON.stringify(sendinlinedata));
				    }
				}else{
					Vue.$socket.send(JSON.stringify(sendinlinedata));
					Vue.$socket.send(JSON.stringify(sendeverydata));
				}
	    		//消息接收
	    		Vue.$socket.onmessage=function(event){
	    			var datas=JSON.parse(event.data)
	    			if(datas.showapi_res_body){
	    				if(_that.templen==''){
	    					_that.templen=datas.showapi_res_body.dataList[0].minuteList.length;
	    					Vue.$everydata=datas.showapi_res_body.dataList[0].minuteList;
		    				_that.detaildata=datas.showapi_res_body.dataList[0].minuteList;
							_that.$minute(Vue.$id,Vue.$everydata);
	    				}else if(_that.templen!=datas.showapi_res_body.dataList[0].minuteList.length){
	    					Vue.$everydata=datas.showapi_res_body.dataList[0].minuteList;
		    				_that.detaildata=datas.showapi_res_body.dataList[0].minuteList;
							_that.$minute(Vue.$id,Vue.$everydata);
	    				}
	    			}
					console.log(datas.nowPrice)
					if(datas.name){
	    				_that.indata=datas;
	    				if(_that.diff_money!=datas.diff_money){
	    					_that.diff_money=datas.diff_money
	    				}
	    				if(_that.nowPrice!=datas.nowPrice){
	    					_that.nowPrice=datas.nowPrice
	    				}
	    				if(_that.diff_rate!=datas.diff_rate){
	    					_that.diff_rate=datas.diff_rate
	    				}
	    				if(_that.openPrice!=datas.openPrice){
	    					_that.openPrice=datas.openPrice
	    				}
	    				if(_that.tradeNum!=datas.tradeNum){
	    					_that.tradeNum=datas.tradeNum
	    				}
	    				if(_that.tradeAmount!=datas.tradeAmount){
	    					_that.tradeAmount=datas.tradeAmount
	    				}
	    				if(_that.closePrice!=datas.closePrice){
	    					_that.closePrice=datas.closePrice
	    				}
	    				if(_that.fvaluep!=datas.fvaluep){
	    					_that.fvaluep=datas.fvaluep
	    				}
					}
					if(datas.name!='undefined'&&datas.name!=undefined&&_that.$route.query.routefrom!='上证指数'&&_that.titletime==1){
						document.title=datas.name;
						_that.titletime++;
					}
	    		}
	    	},
	    	//五档明细组件操作
	    	onbutclick(val){
	    		switch(val){
	    			case 'fir':
	    				this.tableshow=true;
	    				break;
	    			case 'sec':
	    				this.tableshow=false;
	    				break;
	    		}
	    	},
	    	ondayclick (index) {
	    		console.log(index);
				this.tabstate=index;
				var _that=this;
		    	//选项卡操作组件
		        switch (index){
		        	case 'everyk':
		        		if(this.routefrom!='上证指数'){
		        			this.evershow=true;
		        		}else{
		        			this.evershow=false;
		        		}
		        		Vue.$id='main';
		        		this.$nextTick(function () {
						    //绘图操作
							_that.$minute(Vue.$id,Vue.$everydata);
				      	})
		        	break;
		        	case 'dayk':
		        		this.evershow=false;
		        		Vue.$id='';
		        		this.$nextTick(function () {
		        			let jsonday = JSON.parse(JSON.stringify(this.$store.state.dayk));
			        		this.$draw(jsonday,'main',false,true,true,true,true,'',this.daystart,this.dayend);
		        		})
			        	
		        	break;
		        	case 'weekk':
	        			this.evershow=false;
	        			Vue.$id='';
		        		this.$nextTick(function () {
			        		let jsonday = JSON.parse(JSON.stringify(this.$store.state.weekk));
			        		this.$draw(jsonday,'main',false,true,true,true,true,'',this.weekstart,this.weekend);
		        		})
		        	break;
		        	case 'monthk':
		        		this.evershow=false;
		        		Vue.$id='';
		        		this.$nextTick(function () {
		        			let jsonday = JSON.parse(JSON.stringify(this.$store.state.monthk));
			        		this.$draw(jsonday,'main',false,true,true,true,true,'',this.monthstart,this.monthend);
		        		})
		        	break;
		        }
		    },
		    onpanleft(){},
	    	onswipeleft(){
	    		if(this.$end()==100&&!Vue.$id){
		     		// var _before=this.$store.state.kdata.length;
	    			// for(let i=0;i<this.$store.state.spare.length;i++)this.$store.dispatch('ADDDATA',this.$store.state.spare[i]);
	    			// var _after=this.$store.state.kdata.length;
	    			// var _mul=_before/_after;
	    			// var temp1=new Array();
			        // for(let i=0;i<this.$store.state.kdata.length;i++){
			      	//     temp1[i]=new Array();
			        //    	for(let j=0;j<this.$store.state.kdata[i].length;j++){
			        //   		temp1[i].push(this.$store.state.kdata[i][j])
			        // 	}	
			     	// }
    				// this.$draw(temp1,'main',false,true,false,false,true,'',this.$start()*_mul,this.$end()*_mul);
					//alert('预测操作')
	    		}
	    	},
	    	onswiperight(){
				var _that=this;
	    		if(this.$start()==0&&!Vue.$id){
					switch(this.tabstate){
						case 'dayk':
							if(!this.daymore)return;
							//显示loading 日K
							this.$vux.loading.show({text: '正在加载'})
							this.$axios.post('GetHisQuotation', {
									code:this.$route.query.code,
									startDate:_that.daytimestart,
									num:_that.num,
									type:'day'
								})
								.then((response)=>{
									console.log(response.data)
									// 隐藏loading
									this.$vux.loading.hide()
									if(response.data.Success=="true"){
										if(response.data.List.length!=0){
											this.daytimestart=response.data.List[response.data.List.length-1].date;
										}else{
											// 没有更多数据
                            				this.daymore=false;
										}
										//格式化数据
										let _daykdata=this.$formatcli(response.data.List);
										//绘图操作
										let _before=this.$store.state.dayk.length;
										//数据存储
										for(let i=0;i<_daykdata.length;i++)this.$store.dispatch('UNSDATA',{
											type:'dayk',
											data:_daykdata[i]
										});
										let _after=this.$store.state.dayk.length;
										let jsonday = JSON.parse(JSON.stringify(this.$store.state.dayk));
										this.daystart=(1-_before/_after)*100;
										this.dayend=((this.$end()-100)*_before+100*_after)/_after
										this.$draw(jsonday,'main',false,true,true,true,true,'',this.daystart,this.dayend);
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
						break;
						case 'weekk':
							if(!this.weekmore)return;
							//显示loading 日K
							this.$vux.loading.show({text: '正在加载'})
							this.$axios.post('GetHisQuotation', {
									code:this.$route.query.code,
									startDate:_that.weektimestart,
									num:_that.num,
									type:'week'
								})
								.then((response)=>{
									// 隐藏loading
									this.$vux.loading.hide()
									if(response.data.Success=="true"){
										if(response.data.List.length!=0){
							    			this.weektimestart=response.data.List[response.data.List.length-1].date;
							    		}else{
							    			// 没有更多数据
                            				this.weekmore=false;
							    		}
										//格式化数据
										let _weekdata=this.$formatcli(response.data.List);
										//绘图操作
										let _before=this.$store.state.weekk.length;
										//数据存储
										for(let i=0;i<_weekdata.length;i++)this.$store.dispatch('UNSDATA',{
											type:'weekk',
											data:_weekdata[i]
										});
										let _after=this.$store.state.weekk.length;
										let jsonday = JSON.parse(JSON.stringify(this.$store.state.weekk));
										this.weekstart=(1-_before/_after)*100;
										this.weekend=((this.$end()-100)*_before+100*_after)/_after
										this.$draw(jsonday,'main',false,true,true,true,true,'',this.weekstart,this.weekend);
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
						break;
						case 'monthk':
							if(!this.monthmore)return;
							//显示loading 日K
							this.$vux.loading.show({text: '正在加载'})
							this.$axios.post('GetHisQuotation', {
									code:this.$route.query.code,
									startDate:_that.monthtimestart,
									num:_that.num,
									type:'month'
								})
								.then((response)=>{
									// 隐藏loading
									this.$vux.loading.hide()
									if(response.data.Success=="true"){
										if(response.data.List.length!=0){
							    			this.monthtimestart=response.data.List[response.data.List.length-1].date;
							    		}else{
							    			// 没有更多数据
                            				this.monthmore=false;
							    		}
										//格式化数据
										let _monthdata=this.$formatcli(response.data.List);
										//绘图操作
										let _before=this.$store.state.monthk.length;
										//数据存储
										for(let i=0;i<_monthdata.length;i++)this.$store.dispatch('UNSDATA',{
											type:'monthk',
											data:_monthdata[i]
										});
										let _after=this.$store.state.monthk.length;
										let jsonday = JSON.parse(JSON.stringify(this.$store.state.monthk));
										this.monthstart=(1-_before/_after)*100;
										this.monthend=((this.$end()-100)*_before+100*_after)/_after
										this.$draw(jsonday,'main',false,true,true,true,true,'',this.monthstart,this.monthend);
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
						break;
					}
	    			
	    		}
	    	}
	    },

	}
</script>
