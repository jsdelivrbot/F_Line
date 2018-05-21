<style lang="less" scoped>
	.info_list{
		width:100%;
		max-height:1.8rem;
		min-height:1rem;
		background: #FFFFFF;
		position: relative;
		border-bottom: 1px rgba(153,153,153,0.50) solid;
		div{
			width:1.4rem;
			height:1.2rem;
			position: absolute;
			left:0.3rem;
			top:0.1rem;
		}
		.infohide{
			display:none;
			&+span{
				left:0.2rem!important;
				width:7.1rem!important;
			}
		}
		span{
			width:6.1rem;
			max-height:0.86rem;
			min-height:0.43rem;
			position: relative;
			left:1.3rem;
			top:0.2rem;
			margin-bottom:0.7rem;
			display: block;
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 2px;
			overflow:hidden;
		}
		p{
			position: absolute;
			bottom:0.05rem;
			right:0.3rem;
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 0;
		}
	}
	.infoclass{
		width:100%;
		height:100%;	
	}
	.resclass{
		width:0.6rem;
		height:0.34rem;
		position: absolute;
		left:0.1rem;
		top:0.43rem;	
	}
	.notclass{
		width:0.4rem!important;
		height:0.3rem!important;
		position: absolute;
		top:0.4rem;
		left:0.1rem;
	}
	.spanclass{
		width:5.12rem!important;
		left:1.9rem!important;
		// top:0.2rem!important;
	}
</style>
<template>
	<div>
		<div class="info_list">
			<div :class="{'infohide':infoactive}">
				<img :src="img" :class="{ 'infoclass':infoactive, 'resclass': resactive,'notclass':notactive}"> 
			</div>
			<span :class="{'spanclass':infoactive}">
				{{text}}
			</span>
			<p>
				{{time}}
			</p>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'v-panel',
	    props:['imgsrc','text','time','infoactive','resactive','notactive'],
	    data () {
		    return {
		    	img:'',
			}
		},
		mounted(){
			switch(this.imgsrc){
	    		case 'notice':
	    		this.img=require('../assets/clinic/diagnose_notice_icon_notice@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case 'info':
	    		this.img=require('../assets/clinic/diagnose_message_img_default@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case '买入':
	    		this.img=require('../assets/clinic/diagnose_report_icon_buy@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case '增持':
	    		this.img=require('../assets/clinic/diagnose_report_icon_add@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case '减持':
	    		this.img=require('../assets/clinic/diagnose_report_icon_reduce@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case '卖出':
	    		this.img=require('../assets/clinic/diagnose_report_icon_sale@'+this.$store.state.dpr+'x.png');
	    		break;
	    		case '持有':
	    		this.img=require('../assets/clinic/diagnose_report_icon_possess@'+this.$store.state.dpr+'x.png');
	    		break;
	    	}
		}
	}
</script>
