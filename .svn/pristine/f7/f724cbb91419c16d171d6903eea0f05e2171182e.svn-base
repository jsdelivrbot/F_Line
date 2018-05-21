<style lang="less" scoped>
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
		<div class="ana_head">
			<p>股票名称（代码）</p>
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
				<strong>短期趋势：</strong>强势上涨过程中，可逢低买进，暂不考虑暂不考虑
			</p>
			<p>
				<strong>中期趋势：</strong>强势上涨过程中，可逢低买进，暂不考虑暂不考虑
			</p>
			<p>
				<strong>长期趋势：</strong>强势上涨过程中，可逢低买进，暂不考虑暂不考虑
			</p>
		</div>
		<div class="ana_modle">
			<div class="ana_title">
				<img :src="title_img1">
				<p>技术面</p>
				<rater class="main_star" v-model="Star" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
			</div>
			<div class="ana_cont">近期的平均成本为8.04元，股价在成本下方运行。多头行情中，并且有加速上涨趋势。</div>
		</div>
		<div class="ana_modle">
			<div class="ana_title">
				<img :src="title_img2">
				<p>资金面</p>
				<rater class="main_star" v-model="Star" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
			</div>
		</div>
		<div class="ana_modle">
			<div class="ana_title">
				<img :src="title_img3">
				<p>消息面</p>
				<rater class="main_star" v-model="Star" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
			</div>
		</div>
		<div class="ana_modle">
			<div class="ana_title">
				<img :src="title_img4">
				<p>行业面</p>
				<rater class="main_star" v-model="Star" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
			</div>
		</div>
		<div class="ana_modle">
			<div class="ana_title">
				<img :src="title_img5">
				<p>基本面</p>
				<rater class="main_star" v-model="Star" slot="value"  active-color="#FFCE68" :font-size="0.3" disabled></rater>
			</div>
		</div>
	</div>
</template>
<script>
	import { Rater } from 'vux';
	export default {
		components: {
            Rater
        },
	    data () {
		    return {
				clock:require('../../assets/clinic/rating_icon_grade@'+this.$store.state.dpr+'x.png'),
				toggle:require('../../assets/bigdata/bigdate_analysis_icon_dot@'+this.$store.state.dpr+'x.png'),
				title_img1:require('../../assets/clinic/rating_icon_science@'+this.$store.state.dpr+'x.png'),
				title_img2:require('../../assets/clinic/rating_icon_funds@'+this.$store.state.dpr+'x.png'),
				title_img3:require('../../assets/clinic/rating_icon_news@'+this.$store.state.dpr+'x.png'),
				title_img4:require('../../assets/clinic/rating_icon_industry@'+this.$store.state.dpr+'x.png'),
				title_img5:require('../../assets/clinic/rating_icon_basic@'+this.$store.state.dpr+'x.png'),
				seal_img:require('../../assets/clinic/rating_icon_mr.png'),
				toggledata:0,
				datas1:'',
				Star:3.5,
				seal:false,
			}
		},
		mounted(){
			setTimeout(()=>{
				this.seal=true;
			},1000)
			var _that=this;
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
					this.$refs.spancolor.style.color='#FFDD65';
				}else if(parseInt(this.toggledata)>2.5&&parseInt(this.toggledata)<=5){
					this.$refs.spancolor.style.color='#FF863D';
				}else if(parseInt(this.toggledata)>5&&parseInt(this.toggledata)<=7.5){
					this.$refs.spancolor.style.color='#F754CF';
				}else{
					this.$refs.spancolor.style.color='#FC6269';
				}
			}
		}
	}
</script>