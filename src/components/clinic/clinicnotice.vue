<style lang="less" scoped>
	.cd_targt{
		height:0.6rem;
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
		p:nth-child(3){
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 1.6px;
			left:5.9rem;
			top:0.13rem;
		}
		img{
			position: absolute;
			left:7.04rem;
			top:0.2rem;
			width:0.16rem;
			height:0.28rem;
		}
	}
	.imp_notice{
		background: #FFFFFF;
		padding:0.3rem 0.3rem  0.3rem 0.5rem;
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0;
		}
		&>div{
			width:6.74rem;
			border-left:1px solid rgba(153,153,153,0.50);
			position: relative;
			section{
				border:none;
				width:6.4rem;
				height:1px;
				background: #999999;
			    margin: 0.3rem 0 0 0.3rem;
			}
			span{
				height:0.12rem;
				width:0.12rem;
				border-radius:50%;
				background: #CCCCCC;
				display: inline-block;
				position: absolute;
				left:-0.06rem;
				top:-0.06rem;
			}
			p{
				padding-left:0.27rem;
			}
		}
		div:first-child{
			span{
				border-radius:50%;
				background: #FF3434;
				display: inline-block;
				position: absolute;
				box-shadow: 0 0 0.24rem red;
			}
		}
		div:last-child{
			section{
				display: none;
			}
		}
	}
	.com_not{
		position: relative;
	}
	
	.info_list{
		width:100%;
		height:1.4rem;
		background: #FFFFFF;
		position: relative;
		border-bottom:1px solid rgba(153,153,153,0.50) ;
		div{
			width:1.4rem;
			height:1.2rem;
			position: absolute;
			left:0.3rem;
			top:0.1rem;
		}
		span{
			width:5.12rem;
			height:0.86rem;
			position: absolute;
			left:1.3rem;
			top:0.1rem;
			display: inline-block;
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
</style>
<template>
	<div>
		<div class="cd_targt"  v-if="datas1">
			<span></span>
			<p>大事提醒</p>
		</div>
		<div class="imp_notice" v-if="datas1">
			<div @click="godetail(y.Id)" v-for="y in datas1">
				<span></span>
				<p>{{y.TimeBefore}}</p>
				<p>{{y.Title}}</p>
				<section></section>
			</div>
		</div>
		<div class="cd_targt"  v-if="datas">
			<span></span>
			<p>公司公告</p>
		</div>
		<div class="com_not" ref="comnot">
			<scroller  ref="stopscroller" :on-infinite="infinite">
				<v-panel v-for="x in datas" @click.native="godetail(x.Id)" :imgsrc="'notice'" :text='x.Title' :time='x.TimeBefore.replace("公告日期：","")'  :notactive="true" :key="x.id">
				</v-panel>
			</scroller>	
		</div>
	</div>
</template>
<script>
import vPanel from '../panel.vue';
import Vue from 'vue';
	export default {
	    name: 'v-notice',
	    props:['isreload'],
	    components: {
		    vPanel,
		},
	    data(){
	    	return{
		     	datas:'',
		     	datas1:'',
		     	//索引
		     	notindex:1,
		     	//間隔數
		     	notnum:8,
		     	position:''
	    	}
	    },
		created(){
			this.getdata();
		},
		 mounted(){
		 	this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
		 },
		activated(){
 			if(this.position){
				 setTimeout(()=>{
			        this.$refs.stopscroller.scrollTo(0, this.position, false)
			    })
 			}
 			if(this.isreload==true){
	    		this.getdata();
	    	}
		 },
		 deactivated(){
		 	//获取滚动位置
	 		this.position=this.$refs.stopscroller.getPosition().top;
		 	//停止滚动加载
		 	this.$refs.stopscroller.finishInfinite(true)
		 },
		 methods:{
		 	getdata(){
		 		//获取大事件
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
		        this.$axios.post('GetBigEvent', {
			       code:this.$route.query.code
			  	})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		if(response.data.List.length!=0){
			    			this.datas1=response.data.List
			    		}
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
			 	//获取公告
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
		        this.$axios.post('GetAnnouncementList', {
			      code:this.$route.query.code,
			      startIndex:this.notindex,
			      endIndex:this.notindex+this.notnum
			  	})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		if(response.data.List.length!=0){
			    			this.datas=response.data.List
			    		}
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
		 	godetail(val){
		 		this.$emit('getdetail',{
		 			id:val,
		 			type:'notice'
		 		})
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.notindex=this.notindex+this.notnum+1;
            		this.$axios.post('GetAnnouncementList', {
			      		code:this.$route.query.code,
			      		startIndex:this.notindex,
			      		endIndex:this.notindex+this.notnum
			  		})
			  		.then((response)=>{
			    		if(response.data.Success=="true"){
				    		//判断是否有数据
				    		if(response.data.List.length){
				    			response.data.List.forEach((value,index,arr)=>{
					    			this.datas.push(value)
					    		})
			         			//没有更多数据done(true)
			         			done();
				    		}else{
			         			//没有更多数据done(true)
			         			done(true);
				    		}
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
				    	console.log(error);
				  	});
		        })
	        }
		 }
	}
</script>