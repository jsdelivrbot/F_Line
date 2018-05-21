<style lang="less" scoped>
	.clinic_footer{
		position: fixed!important;
		bottom: 0;
		background: #FFFFFF!important;
	}
	.vux-tab-item{
		font-size:0.3rem!important;
	}
	.trace{
		position: fixed;
		z-index: 1000;
		width:1.2rem;
		height:1.2rem;
		left:3.15rem;
		bottom:0.11rem;
		text-align: center;
		div{
			width:100%;
			height:100%;
			position: relative;
			img{
				width:100%;
				height:100%;
				position: absolute;
				left: 0;
				top:0;
				z-index: -100;
			}
			p{
				white-space: nowrap;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: white;
				letter-spacing: 0px;
				line-height: 0.73rem;
				line-height: 1.2rem;
				z-index: 100;
			}
		}
		
	}
	.vux-tab .vux-tab-item{
		line-height:0.88rem;
	}
	.weui-tabbar__icon{
		width:0.4rem!important;
		height:0.4rem!important;
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
.alertresult{
	width:100%;
	height:100%;
	position: fixed;
	z-index: 700;
	top:0;
	text-align: center;
	.resmask{
		width:100%;
		height:100%;
		position: absolute;
		background: rgba(110,109,110,0.3);
	}
	.reswrap{
		width: 5.8rem;
		margin-left:0.85rem;
		border-radius:0.2rem;
		overflow:hidden;
		margin-top: 2.5rem;
		&>div:nth-child(1){
			width:100%;
			height:1.9rem;
			text-align: center;
			position: relative;
			background: #4797E0;
			img{
				position: absolute;
				width:1rem;
				top:0.2rem;
				right:0.2rem;
			}
			p:nth-child(1){
				font-family: PingFangSC-Medium;
				font-size: 0.48rem;
				color: #FFFFFF;
				letter-spacing: 0;
				position: relative;
				top:0.2rem;
			}
			p:nth-child(2){
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
				position: relative;
				top:0.6rem;
			}
			div{
				width:1.4rem;
				position: absolute;
				top:1rem;
				left:2.2rem;
				height:2px;
				background: #A3CBEF;
				border: none;
			}
		}
		&>div:nth-child(2),&>div:nth-child(3){
			height:2.4rem;
			width:100%;
			display: flex;
			background: #FFFFFF;
			&>div{
				flex:1;
				width:100%;
				height:100%;
				text-align: center;
			    overflow: hidden;
				p{
					font-family: PingFangSC-Medium;
					font-size: 0.3rem;
					color: #000000;
					letter-spacing: 0;
					padding-top: 0.2rem;
					padding-bottom: 0.2rem;
				}
				table{
					width:100%;
					tr:nth-child(1){
						font-family: PingFangSC-Medium;
						font-size: 0.36rem;
						color: #FF5F45;
						letter-spacing: 0;
					}
					tr:nth-child(2){
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #999999;
						letter-spacing: 0;
					}
				}
			}
		}
	}
}
.hideresalert{
	display: none;
}
.showred{
	color:red;
}
.showgreen{
	color:green;
}
</style>
<template>
	<div>
		<div v-transfer-dom>
	      <popup v-model="showpopup">
	        <div class="popup">
	         	<img src="../../assets/qrcode.jpg">
	         	<p>长按图片关注公众号<br>体验更多功能</p>
	        </div>
	      </popup>
	    </div>
	    <div class="alertresult" :class="[showresalert?'':'hideresalert']" v-if="datas">
	    	<div class="resmask" @click.stop.prevent="closealert()">
	    		<div class="reswrap"  @click.stop.prevent="forstop()">
	    			<div>
						<p>诊断结果</p>	    				
						<p>相关数据为大数据预测结果，不构成买卖依据。</p>
						<div></div>	 
						<img :src="closemas" @click.stop.prevent="closealert()">   				
	    			</div>
	    			<div>
	    				<div style="border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;">
	    					<p>明日</p>
	    					<table>
	    						<tr>
	    							<td :class="[Number(datas.DayRiseRate)>=0?'showred':'showgreen']">{{datas.DayRiseRate|nodown}}%</td>
	    							<td :class="[Number(datas.DayRise)>=0?'showred':'showgreen']">{{datas.DayRise|nodown}}%</td>
	    						</tr>
	    						<tr>
	    							<td v-if="Number(datas.DayRiseRate)>=0">上涨概率</td>
	    							<td v-else>下跌概率</td>
	    							<td v-if="Number(datas.DayRise)>=0">涨幅</td>
	    							<td v-else>跌幅</td>
	    						</tr>
	    					</table>
	    				</div>
	    				<div>
	    					<p>下周</p>
	    					<table>
	    						<tr>
	    							<td :class="[Number(datas.WeekRiseRate)>=0?'showred':'showgreen']">{{datas.WeekRiseRate|nodown}}%</td>
	    							<td :class="[Number(datas.WeekRise)>=0?'showred':'showgreen']">{{datas.WeekRise|nodown}}%</td>
	    						</tr>
	    						<tr>
	    							<td v-if="Number(datas.WeekRiseRate)>=0">上涨概率</td>
	    							<td v-else>下跌概率</td>
	    							<td v-if="Number(datas.WeekRise)>=0">涨幅</td>
	    							<td v-else>跌幅</td>
	    						</tr>
	    					</table>
	    				</div>
	    			</div>
	    			<div>
	    				<div>
	    					<p>月线</p>
	    					<table>
	    						<tr>
	    							<td :class="[Number(datas.MonthRiseRate)>=0?'showred':'showgreen']">{{datas.MonthRiseRate|nodown}}%</td>
	    							<td :class="[Number(datas.MonthRise)>=0?'showred':'showgreen']">{{datas.MonthRise|nodown}}%</td>
	    						</tr>
	    						<tr>
	    							<td v-if="Number(datas.MonthRiseRate)>=0">上涨概率</td>
	    							<td v-else>下跌概率</td>
	    							<td v-if="Number(datas.MonthRise)>=0">涨幅</td>
	    							<td v-else>跌幅</td>
	    						</tr>
	    					</table>
	    				</div>
	    				<div style="border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;">
	    					<p>季线</p>
	    					<table>
	    						<tr>
	    							<td :class="[Number(datas.QuarterRiseRate)>=0?'showred':'showgreen']">{{datas.QuarterRiseRate|nodown}}%</td>
	    							<td :class="[Number(datas.QuarterRise)>=0?'showred':'showgreen']">{{datas.QuarterRise|nodown}}%</td>
	    						</tr>
	    						<tr>
	    							<td v-if="Number(datas.QuarterRiseRate)>=0">上涨概率</td>
	    							<td v-else>下跌概率</td>
	    							<td v-if="Number(datas.QuarterRise)>=0">涨幅</td>
	    							<td v-else>跌幅</td>
	    						</tr>
	    					</table>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
		<tabbar class="clinic_footer" style="position:fixed!important;bottom:0;">
	      <tabbar-item @click.native='gocontinue'>
	        <img slot="icon" :src="textleft=='继续诊股'?index:''" >
	        <span slot="label" style="color:#999999!important;">{{textleft}}</span>
	      </tabbar-item>
	      <tabbar-item @click.native="alertresult()">
	        <img slot="icon" :src="textleft=='继续诊股'?result:''">
	        <img slot="icon-active" :src="textleft=='继续诊股'?resultact:''">
	        <span slot="label" style="color:#999999!important;">诊断结果</span>
	      </tabbar-item>
	      <tabbar-item @click.native="gorating()">
	        <img slot="icon" :src="textleft=='继续诊股'?market:''">
	        <span slot="label" style="color:#999999!important;">{{addstate?addstate:textright}}</span>
	      </tabbar-item>
	    </tabbar>
	</div>
</template>
<script>
import Vue from 'vue';
import {TransferDomDirective as TransferDom, Tabbar, TabbarItem,Popup} from 'vux';
export default {
    name: 'v-clinicfooter',
    props:['textleft','textright','alerttheresult'],
    data(){
    	return{
			index:require('../../assets/clinic/diagnose_btn_diagnose_nor@'+this.$store.state.dpr+'x.png'),
			indexact:require('../../assets/clinic/diagnose_btn_diagnose_pre@'+this.$store.state.dpr+'x.png'),
			market:require('../../assets/clinic/diagnose_btn_rating@'+this.$store.state.dpr+'x.png'),
			result:require('../../assets/clinic/diagnose_btn_result@'+this.$store.state.dpr+'x.png'),
			resultact:require('../../assets/clinic/diagnose_btn_result@'+this.$store.state.dpr+'x.png'),
			closemas:require('../../assets/clinic/diagnose_btn_x@'+this.$store.state.dpr+'x.png'),
			showpopup:false,
			showresalert:false,
			datas:'',
			addstate:''
    	}
    },
     directives: {
	    TransferDom
	  },
    components: {
    	Tabbar,
        TabbarItem,
        Popup
    },
    created(){
    },
    watch:{
    	alerttheresult(){
    		console.log(this.$store.state.alertstate,this.$store.state.inpagecom)
			this.datas=Vue.$alldatas;
			if(this.$store.state.alertstate==false&&this.$store.state.inpagecom=='clinic'){
				this.showresalert=true;
			}
    	}
    },
	methods:{
		//查看诊股结果
		alertresult(){
			this.datas=Vue.$alldatas;
			this.showresalert=true;
			this.$store.dispatch('CONALERT',{
				state:true
			});
		},
		closealert(){
			this.showresalert=false;
			this.$store.dispatch('CONALERT',{
				state:false
			});
		},
		forstop(){},
		//综合评级
		gorating(){
			this.$emit('getrating')
		},
		gocontinue(){
			// if(sessionStorage.userId=='undefined'){
			// 	this.showpopup=true;
			// }else{
			// 	switch(this.textleft){
			// 		case '继续诊股':
			// 			this.$router.push({
			// 				path:'cliniccontinue',
			// 			});
			// 	}
			// }
			switch(this.textleft){
				case '继续诊股':
					this.$router.push({
						path:'cliniccontinue',
					});
			}
		},
	},
	//过滤
  	filters: {
    	nodown: function (value) {
        	if (!value) return ''
	      	var temp=value;
	      	temp=Math.abs(temp);
	      	return temp
   		},
  	},
	deactivated(){
		this.$store.dispatch('CONALERT',{
			state:false
		});
	}
}
</script>
