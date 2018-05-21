<style lang="less" scoped>
	.cc_bg{
		width: 100%;
		background: #FFFFFF;
		.bg_img{
			width: 60%;
			position: fixed;
			bottom:0;
			left:20%;
		}
		.c_wrap{
			height:1.1rem;
			width: 100%;
			top:0;
			left:0;
			position: fixed;
			background: #FFFFFF;
			z-index:200;
			.cc_top{
				height:100%;
				width: 100%;
				position: relative;
				img{
					position: absolute;
					width: 0.5rem;
					height:0.5rem;
					left:0.35rem;
					top:0.3rem;
				}
				h5{
					position: absolute;
					font-family: PingFangSC-Medium;
					font-size: 0.36rem;
					color: #000000;
					letter-spacing: 1.8px;
					left:1.1rem;
					top:0.25rem;
				}
			}
		}
		
		.cc_item{
			width: 92%;
			height:1.4rem;
			margin:0 auto;
			margin-bottom: 0.2rem;
			box-shadow: 0 0.02rem 0.1rem 0 #DDDDDD;
			border-radius: 0.08rem;
			position: relative;
			p{
				position: absolute;
				font-family: PingFangSC-Regular;
				letter-spacing: 2px;
			}
			p:nth-child(1){
				font-size: 0.36rem;
				color: #000000;
				left:0.3rem;
				top:0.25rem;
			}
			p:nth-child(2){
				font-size: 0.3rem;
				color: #666666;
				left:0.3rem;
				top:0.85rem;
			}
			p:nth-child(3){
				font-size: 0.28rem;
				color: #999999;
				right:0.68rem;
				top:0.5rem;
			}
			img{
				position: absolute;
				width: 0.18rem;
				height:0.32rem;
				right:0.3rem;
				top:0.54rem;
			}
		}
	}
	.nt{
		height: 1.12rem;
	}
</style>
<template>
	<div class="cc_bg" ref="cc_bg">
		<img :src="bg_img" class="bg_img">
		<div class="c_wrap">
			<div class="cc_top">
				<img :src="title_img">
				<h5>推荐牛股</h5>
			</div>
		</div>
		<div class="nt"></div>
		<div class="cc_item" @click="gocommont(x.StockCode)" v-for=" x in datas">
			<p>{{x.StockName}}</p>
			<p>{{x.StockCode}}</p>
			<p>查看点评</p>
			<img :src="arrow">
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				title_img:require('../../assets/images/graph/grab_icon_recommend@'+this.$store.state.dpr+'x.png'),
				bg_img:require('../../assets/images/graph/choose_img@'+this.$store.state.dpr+'x.png'),
				arrow:require('../../assets/index/home_btn_more@'+this.$store.state.dpr+'x.png'),
				datas:''
			}
		},
		mounted(){
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios({
			    method:"GET",
			    url:localStorage.core2+'StockEvaluations',
			})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.Data
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
			//获取userId
    		if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
			this.$refs.cc_bg.style.minHeight=document.documentElement.clientHeight+'px';
		},
		activated(){
	    	document.title="抓牛股";
	 	},
	 	methods:{
	 		gocommont(val){
	 			this.$router.push({
		    		path:'comment',
		    		query:{
		    			code:val
		    		}
		    	});
	 		}
	 	}
	}
</script>