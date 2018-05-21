<style lang="less" scoped>
.ana_head{
	height:4.3rem;
	width:100%;
	text-align:center;
	background:#FFFFFF;
	&>div:nth-child(1){
		height:2.76rem;
		width:100%;
		border:1px solid #FFFFFF;
		box-sizing:border-box;
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
			margin-left:0.9rem;
			margin-right:0.9rem;
		}
	}
	&>div:nth-child(2){
		width:4rem;
		height:0.26rem;
		border:1px solid #FFFFFF;
		box-sizing:border-box;
		margin:0 auto;
		position:relative;
		span{
			position:absolute;
			width:100%;
			left:0;
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 0;
			line-height: 0.24rem;
		}
		img{
			position:absolute;
			left:0;
			top:0;
			width:0.24rem;
			height:0.24rem;
		}
		
	}
	&>div:nth-child(3){
		width:6.9rem;
		height:1.1rem;
		margin:0 auto;
		background: #F8F8F8;
		font-family: PingFangSC-Medium;
		font-size: 0.3rem;
		color: #000000;
		letter-spacing: 2px;
		line-height: 1.1rem;
		position:relative;
		top:0.12rem;
		font-weight:600;
		#triangle-topleft {
			width: 0;
			height: 0;
			border-top: 0.25rem solid #EAEAEA;
			border-right: 0.25rem solid transparent;
			position:absolute;
			right:0;
			bottom:0;
		}
		#triangle-bottomright {
			width: 0;
			height: 0;
			border-bottom: 0.25rem solid #FFFFFF;
			border-left: 0.25rem solid transparent;
			position:absolute;
			right:0;
			bottom:0;
		}
	}
}
.cd_targt{
	height:1.2rem;
	width:100%;
	position: relative;
	p{
		font-family: PingFangSC-Medium;
		font-size: 0.3rem;
		color: #000000;
		letter-spacing: 2px;
		display: inline-block;
		position: absolute;
		left:0.48rem;
		top:0.03rem;
		font-weight:600;
	}
	span{
		display: inline-block;
		width:0.08rem;
		height:0.36rem;
		background: #378AD6;
		position: absolute;
		left:0.3rem;
		top:0.12rem;
	}
	.subt{
		height:0.6rem;
		width:100%;
		position:relative;
		top:0.6rem;
		&>div{
			height:100%;
			float:left;
			position:relative;
			margin-left:0.2rem;
			&>section:nth-child(1){
				height:0.1rem;
				width:0.1rem;
				display:inline-block;
				border-radius:50%;
				background:red;
				position:absolute;
				left:0;
				top:0.25rem;
			}
			&>section:nth-child(2){
				display:block;
				float:left;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FF5E45;
				letter-spacing: 0;
				line-height:0.6rem;
				padding-left:0.2rem;
			}
		}
	}
}
.table1,.table2,.table3{
	background:#FFFFFF;
	&>div:nth-child(2){
		height:4rem;
		background:#FFFFFF;
	}
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
}
#charts,#main,#trend,#react{
	width:100%;
	height:100%;
}
._suggess{
	width:86%;
	padding:0.2rem 7%;
	background: #FFFFFF;
	p{
		font-family: PingFangSC-Regular;
		font-size: 0.24rem;
		color: #3F3F3F;
		letter-spacing: 0;
	}
}
</style>
<template>
	<div>
		<div class="ana_head">
			<div>
				<div>
					<img class="clock" :src="clock">
					<img class="toggle" ref="toggle" :src="toggle">
					<span>综合强度</span>
					<span ref="spancolor">{{(toggledata).toFixed(1)}}</span>
				</div>
				<div>
					<img class="clock" :src="clock1">
					<img class="toggle" ref="toggle1" :src="toggle">
					<span>建议仓位</span>
					<span ref="spancolor1">{{(toggledata1).toFixed(0)}}%</span>
				</div>
			</div>
			<div>
				<img :src="timeicon">
				<span>
					数据更新时间为 {{curtime}}
				</span>
			</div>
			<div>
				投资建议：{{advise}}
				<div id="triangle-topleft"></div>
				<div id="triangle-bottomright"></div>
			</div>
		</div>
		<div class="_suggess">
			<p>
				<strong>综合强度：</strong>通过大数据技术分析市场内在强弱，分值越高，代表市场越强。
			</p>
			<p>
				<strong>建议仓位：</strong>根据综合强度指标、市场舆情指标计算出合理仓位。
			</p>
		</div>
		<div class="table1">
			<div class="cd_targt">
				<span></span>
				<p>主要指标</p>
				<div class="subt clearfix">
					<div>
						<section>
						</section>
						<section>上涨：{{datas1.Znum}}家</section>
					</div>
					<div>
						<section>
						</section>
						<section>下跌：{{datas1.Dnum}}家</section>
					</div>
				</div>
			</div>
			<div>
				<div id="charts">
					<div id="main"></div>
				</div>
			</div>
		</div>
		<div class="table2">
			<div class="cd_targt">
				<span></span>
				<p>主要指标</p>
				<div class="subt clearfix">
					<div>
						<section>
						</section>
						<section>涨停：{{datas2.Zt}}家</section>
					</div>
					<div>
						<section>
						</section>
						<section>跌停：{{datas2.Dt}}家</section>
					</div>
				</div>
			</div>
			<div>
				<div id="charts">
					<div id="trend"></div>
				</div>
			</div>
		</div>
		<div class="table3">
			<div class="cd_targt">
				<span></span>
				<p>主要指标</p>
				<div class="subt clearfix">
					<div>
						<section>
						</section>
						<section>昨日涨停股今日涨幅：{{datas3.Jsy*100}}%</section>
					</div>
				</div>
			</div>
			<div>
				<div id="charts">
					<div id="react"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'v-analysis',
	    props:[],
	    data () {
		    return {
				clock:require('../../assets/bigdata/bigdate_analysis_icon_dial@'+this.$store.state.dpr+'x.png'),
				clock1:require('../../assets/bigdata/bigdate_analysis_icon_position@'+this.$store.state.dpr+'x.png'),
				toggle:require('../../assets/bigdata/bigdate_analysis_icon_dot@'+this.$store.state.dpr+'x.png'),
				timeicon:require('../../assets/bigdata/bigdate_analysis_icon_time@'+this.$store.state.dpr+'x.png'),
				toggledata:0,
				toggledata1:0,
				datas1:'',
				datas2:'',
				datas3:'',
				curtime:'',
				advise:['大盘风险极大，请勿参与','大盘风险较大，请谨慎参与','大盘震荡，适当参与','大盘走势良好，积极参与','大盘走势极好，积极参与']
			}
		},
		mounted(){
			var _that=this;
			//获取当前时间
			!function getNowFormatDate() {
			    var date = new Date();
			    var seperator1 = "/";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    _that.curtime=month + seperator1 + strDate
			            + " " + date.getHours() + seperator2 + date.getMinutes()
			}();
			this.$axios.post('GetZdfb')
				.then((response)=>{
					if(response.data.Success=="true"){
						_that.datas1=response.data;
						//涨跌统计
						//数字计时器（控制表盘动画）
						var inter=setInterval(()=>{
							_that.toggledata+=0.05;
							if(parseInt(_that.toggledata)>=response.data.Dppj)clearinter()
						},10)
						var inter1=setInterval(()=>{
							_that.toggledata1+=0.5;
							if(parseInt(_that.toggledata1)>=response.data.Steer)clearinter1()
						},10)
						function clearinter(){
							clearInterval(inter)
						}
						function clearinter1(){
							clearInterval(inter1)
						}
						//投资建议
						if(response.data.Dppj< 2.5){
			                _that.advise= '大盘风险极大，请勿参与。';
			            }else if (response.data.Dppj>= 2.5 && response.data.Dppj< 4){
			                _that.advise = '大盘风险较大，请谨慎参与。';
			            }else if (response.data.Dppj >= 4 && response.data.Dppj< 6){
			                _that.advise= '大盘震荡，适当参与。';
			            }else if (response.data.Dppj>= 6 && response.data.Dppj< 8){
			                _that.advise= '大盘走势良好，积极参与。';
			            }else if (response.data.Dppj>= 8){
			                _that.advise= '大盘走势极好，积极参与。';
			            }
						//柱状图绘图
						_that.$bar(response.data.Zdfb,'main');
					}
				})
				.catch((error)=>{
			    	console.log(error);
			  	});
			  	//涨跌停
				this.$axios.post('GetZdt')
					.then((response)=>{
						if(response.data.Success=="true"){
							_that.datas2=response.data;
							_that.$line_k(response.data.Zdt,'trend');
						}
					})
					.catch((error)=>{
				    	console.log(error);
				  	});
				//昨日涨停今日涨幅
				this.$axios.post('GetZdf')
					.then((response)=>{
						if(response.data.Success=="true"){
							_that.datas3=response.data;
							_that.$line_k(response.data.Zdf,'react');
						}
					})
					.catch((error)=>{
				    	console.log(error);
				  	});
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
					this.$refs.spancolor.style.color='#31EEB9';
				}else if(parseInt(this.toggledata)>2.5&&parseInt(this.toggledata)<=5){
					this.$refs.spancolor.style.color='#5492F8';
				}else if(parseInt(this.toggledata)>5&&parseInt(this.toggledata)<=7.5){
					this.$refs.spancolor.style.color='#FF6565';
				}else{
					this.$refs.spancolor.style.color='#DC3FE2';
				}
			},
			toggledata1(){
				var tempangl1=this.toggledata1/100*260;
				var _lef1;
				var _to1;
				if(tempangl1<=40){
					_lef1=1.1*(1-Math.cos((40-tempangl1)*Math.PI/180));
					_to1=1.1*(1+Math.sin((40-tempangl1)*Math.PI/180));
				}else if(tempangl1>40&&tempangl1<=130){
					_lef1=1.1*(1-Math.cos((tempangl1-40)*Math.PI/180));
					_to1=1.1*(1-Math.sin((tempangl1-40)*Math.PI/180));
				}else if(tempangl1>130&&tempangl1<=220){
					_lef1=1.1*(1+Math.sin((tempangl1-130)*Math.PI/180));
					_to1=1.1*(1-Math.cos((tempangl1-130)*Math.PI/180));
				}else{
					_lef1=1.1*(1+Math.cos((tempangl1-220)*Math.PI/180));
					_to1=1.1*(1+Math.sin((tempangl1-220)*Math.PI/180));
				}
				this.$refs.toggle1.style.left=_lef1-0.1+'rem';
				this.$refs.toggle1.style.top=_to1-0.1+'rem';
				if(parseInt(this.toggledata1)<=25){
					this.$refs.spancolor1.style.color='#FC6269';
				}else if(parseInt(this.toggledata1)>25&&parseInt(this.toggledata1)<=50){
					this.$refs.spancolor1.style.color='#F854D0';
				}else if(parseInt(this.toggledata1)>50&&parseInt(this.toggledata1)<=75){
					this.$refs.spancolor1.style.color='#FF863D';
				}else{
					this.$refs.spancolor1.style.color='#FFDD65';
				}
			}
		},
		methods:{		
			
		}
	}
</script>
