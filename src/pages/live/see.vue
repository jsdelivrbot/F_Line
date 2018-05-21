<style lang="less" scoped>
	.wrap{
		width:100%;
		height:4.2rem;
		background:#FFFFFF;
		video{
			 object-fit:fill;
		}
	}
	.video_title{
		padding-left:0.2rem;
		background:#FFFFFF;
		height:1rem;
		p{
			font-family: PingFangSC-Medium;
			font-size: 0.36rem;
			color: #000000;
			letter-spacing: 0;
			font-weight: 600;
			line-height: 1rem;
		}

	}
	.clearfix { 
		*zoom: 1; 
	} 
	.clearfix:before,.clearfix:after { 
		display: table; 
		line-height: 0; 
		content: ""; 
	} 
	.clearfix:after { 
		clear: both; 
	} 
	.com_not{
		position: relative;
		width: 100%;
		background:#FFFFFF;
		margin-top:10px;
		box-sizing: content-box;
		.in_com{
			float:left;
			width: 49%;
			height:3.4rem;
			box-sizing: border-box;
			position: relative;
			.shutscreen{
				width: 100%;
				height:2.1rem;
			}
			h5{
				font-family: PingFangSC-Regular;
				font-size: 0.3rem;
				color: #000000;
				letter-spacing: 0;
				text-overflow:ellipsis;
				overflow:hidden; 
				white-space: nowrap;
				position: relative;
				top:-0.3rem;
				left: 0.15rem;
			}
			p{
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #999999;
				letter-spacing: 0;
				text-overflow:ellipsis;
				overflow:hidden; 
				white-space: nowrap;
				position: relative;
				top:-0.3rem;
				left: 0.15rem;
			}
			em{
				font-style: normal;
				position: absolute;
				right:0.08rem;
				top:1.7rem;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
				z-index: 100;
				opacity: 0.8;
			}
		}
		.in_com:nth-child(odd){
			margin-right:1%;
		}
		.in_com:nth-child(even){
			margin-left:1%;
		}
		.play_icon{
			position: absolute;
			width: 0.26rem;
			height:0.26rem;
		}
	}
	.playing{
		color:#FF4343!important;
	}
</style>
<template>
	<div ref="video_wrap">
		<div class="wrap">
			<video x5-video-player-type="h5" x5-video-player-fullscreen="true" webkit-playsinline="true" playsinline="true" id="video" :src="Ip+Url" width="100%" height="100%" controls="controls"></video>
		</div>
		<div class="video_title">
			<p>{{Title}}</p>
		</div>
		<div class="com_not" ref="comnot">
			<scroller  ref="stopscroller" :on-infinite="infinite"  :noDataText="''">
				<div class="clearfix">
					<div class="in_com" v-for="x in datas" @click="switchit(x)">
						<img :src="Ip+x.Cover" class="shutscreen">
						<em>{{x.AddTime}}</em>
						<h5 :class="{'playing': x.Id==Id}">{{x.Title}}</h5>
						<p :class="{'playing': x.Id==Id}">{{x.Description}}</p>
					</div>
				</div>
			</scroller>	
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				video:'',
				pageIndex:1,
				pageSize:8,
				datas:'',
				Title:'',
				// AddTime:'',//时间
				// Tags:'',//关键词
				// Cover:'',//缩略图
				Url:'',//地址
				Id:'',
				Ip:localStorage.seelistenIP
			}
		},
		mounted(){
			this.getdata();
			this.video = document.getElementById('video');
			this.$refs.comnot.style.height=document.documentElement.clientHeight-this.$refs.video_wrap.children[0].clientHeight-this.$refs.video_wrap.children[1].clientHeight-10+'px';
		},
		activated(){
	    	document.title="看视频";
	 	},
	 	methods:{
	 		//切换音频
	        switchit(val){
        		this.Title=val.Title;
	    		// this.AddTime=val.AddTime;
	    		// this.Tags=val.Tags;
	    		// this.Cover=val.Cover;
	    		this.Url=val.Url;
	    		this.Id=val.Id;
	    		this.video.autoplay=true;
	        },
	        getdata(){
	 			//显示loading
				this.$vux.loading.show({text: '正在加载'})
		        this.$axios({
				    method:"GET",
				    url:localStorage.core2+'LiveVideos',
				    params:{
		        		type:1,
		        		pageIndex:this.pageIndex,
			      		pageSize:this.pageSize
				  	}
				})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.datas=response.data.Data.Data;
			    		this.Title=this.datas[0].Title;
			    		// this.AddTime=this.datas[0].AddTime;
			    		// this.Tags=this.datas[0].Tags;
			    		// this.Cover=this.datas[0].Cover;
			    		this.Url=this.datas[0].Url;
			    		this.Id=this.datas[0].Id;
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
	        infinite (done) {
		        setTimeout(() => {
		        	this.pageIndex++;
            		this.$axios({
					    method:"GET",
					    url:localStorage.core2+'LiveVideos',
					    params:{
			        		type:1,
			        		pageIndex:this.pageIndex,
				      		pageSize:this.pageSize
					  	}
					})
			  		.then((response)=>{
			    		if(response.data.Success=="true"){
			    			//判断是否有数据
				    		if(response.data.Data.Data.length){
				    			response.data.Data.Data.forEach((value,index,arr)=>{
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