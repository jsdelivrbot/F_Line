<style lang="less" scoped>
	h6{
		font-family: PingFangSC-Medium;
		font-size: 0.36rem;
		color: #000000;
		letter-spacing: 2.4px;
		padding:0.2rem 0.3rem 0.1rem 0.3rem;
	}
	.textp{
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 1.6px;
			padding-left:0.3rem;
			padding-bottom:0.1rem;
			&+div{
				width:1rem;
				position: absolute;
				left:0.3rem;
				height:3px;
				background: rgba(153,153,153,0.50);
				border:none;
				margin:0 auto;
				&+div{
					width:6.9rem;
					height:0.4rem;
					margin:0 auto;
					margin-top:0.1rem;
					position: relative;
					p{
						display: inline-block;
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #999999;
						letter-spacing: 2px;
						line-height: 0.4rem;
						position: absolute;
					}
					p:first-child{
						left: 0;
					}
					p:last-child{
						right:0;
					}
				}
			}
		}
	content{
		overflow-x: hidden;
		.con_div{
			text-align: center;
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 2px;
			padding:0.3rem;
			text-indent: 2em;
			overflow-x: hidden;
		}
	}
	.header{
		width:92%;
		background: #FFFFFF;
		box-shadow: 0 8px 20px 0 #CCCCCC;	
		position: relative;
		top:-0.8rem;
	}
	.head_img{
		width:100%;
		height:auto;
	}
</style>
<template>
	<div>
		<img :src="head_img" class="head_img">
		<div v-if="datas" class="header">
			<h6 >{{datas.Title}}</h6>
		</div>
		<p v-if="datas" class="textp">{{datas.TimeBefore.replace("公告日期：","")}}</p>
		<div></div>
		<div v-if="datas">
			<p v-if="datas.Company">研报出处：{{datas.Company}}</p>
			<p v-if="datas.Rating">评价：{{datas.Rating}}</p>
		</div>
		<content>
			<div class="con_div" v-if="datas" v-html="datas.HtmlDetail||datas.Text">
			</div>
		</content>
	</div>
</template>
<script>
	
	export default{
		data(){
	    	return{
		     	datas:'',
		     	title:'',
		     	head_img:require('../../assets/clinic/news_topbg@'+this.$store.state.dpr+'x.png'),
	    	}
	    },
		activated(){
			this.datas='';
			var temptitle;
			//判断接口地址
	    	let _api;
	    	switch(this.$route.query.type){
	    		//公告
	    		case 'notice':
	    			_api='GeAnnouncement';
	    			temptitle='公告详情';
	    			break;
	    		case 'info':
	    		//资讯
	    			_api='GetNews';
	    			temptitle='资讯详情';
	    			break;
	    		//研报
	    		case 'res':
	    			_api='GetReport	';
	    			temptitle='研报详情';
	    			break;
	    		//要闻点评
	    		case 'evaluate':
	    			_api='GetImportantNews';
	    			temptitle='点评详情';
	    			break;
	    		//行业新闻
	    		case 'news':
	    			_api='GetTradeNews';
	    			temptitle='新闻详情';
	    			break;	
	    	}
    	   	//获取公告
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
			this.$axios.post(_api, {
			      id:this.$route.query.id
			  	})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.datas=response.data
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
		}
	}
</script>