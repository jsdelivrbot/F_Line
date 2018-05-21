<style lang="less" scoped>
	.audio_top{
		background: #FFFFFF;
		height: 5.6rem;
		width: 100%;
		.at_1{
			width: 100%;
			height:0.75rem;
			position: relative;
			em{
				font-family: PingFangSC-Regular;
				font-size:0.3rem;
				color: #999999;
				letter-spacing: 0;
				position: absolute;
				right:0.15rem;
				top:0.225rem;
				font-style: normal;
			}
			em:nth-child(1){
				color: #000000;
				left:0.15rem;
			}
		}
		.audio_autor{
			width: 2.8rem;
			height:2.8rem;
			border-radius: 0.08rem;
			box-shadow: 0 0 0.4rem gray;
			display: block;
			margin:0.2rem auto;
		}
		.audio_keywords{
			font-family: PingFangSC-Medium;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0;
			text-align: center;
	        line-height: 0.5rem;
		}
		.audio_play{
			width: 6.5rem;
			height:1rem;
			margin: 0 auto;
			position: relative;
			.audio_contr{
				width: 5.3rem;
				margin-left:1rem!important;
				margin-right:0rem!important;
				top:0.3rem;
			}
			em{
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #999999;
				letter-spacing: 0;
				font-style:normal;
				position: absolute;
			}
			.ap_em1{
				left: 1rem;
				top:0.5rem;
			}
			.ap_em2{
				right: 0.2rem;
				top:0.5rem;
			}
			.play_but{
				width: 0.7rem;
				height:0.7rem;
				position: absolute;
				top:0.05rem;
			}
		}
	}
	.com_not{
		position: relative;
		margin-top:10px;
	}
	.list_wrap{
		width: 100%;
		height: 1.4rem;
		background: #FFFFFF;
		border-bottom:1px solid rgba(153,153,153,0.50);
		position: relative;
		.list_autorimg{
			position: absolute;
			width: 1rem;
			height:1rem;
			border-radius: 0.08rem;
			left:0.3rem;
			top:0.2rem;
			
		}
		.list_autor{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0;
			position: absolute;
			top:0.2rem;
			left:1.5rem;
		}
		.list_keywords{
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 0;
			position: absolute;
			top:0.68rem;
			left:1.5rem;
		}
		.list_time{
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #999999;
			letter-spacing: 0;
			position: absolute;
			top:0.2rem;
			right:0.15rem;
		}
		.list_playing{
			width: 0.28rem;
			height:0.28rem;
			position: absolute;
			top:0.28rem;
			left:3.5rem;
			display: none;
		}
		.showit{
			display: block!important;
		}
	}
	.playing{
		color:#FF4343!important;
	}
</style>
<template>
	<div ref="wrap">
		<div class="audio_top">
			<div class="at_1">
				<em>主讲：{{Nickname}}</em>
				<em>{{AddTime}}</em>
			</div>
			<img class="audio_autor" :src="Ip+Portrait">
			<p class="audio_keywords">关键词：{{Tags}}</p>
			<div class="audio_play">
				<audio :src="Ip+Url" preload="true" id="audio"></audio>
				<img @click="play" class="play_but" :src="play_but">
				<range v-model="timechange" :range-bar-height="6" @touchstart.native="tstart($event)" @touchend.native="tend($event)" class="audio_contr" @on-change="onChange"></range>
				<em class="ap_em1">{{cur_time}}</em>
				<em class="ap_em2">{{all_time}}</em>
			</div>
		</div>
		<div class="com_not" ref="comnot">
			<scroller  ref="stopscroller" :on-infinite="infinite" :noDataText="'已全部加载'">
				<div class="list_wrap" v-for="x in datas" @click="switchit(x)">
					<img :src="Ip+x.Portrait" class="list_autorimg">
					<!-- <img :src="playing" class="list_playing" :class="{'showit': x.Id==Id}"> -->
					<p :class="{'playing': x.Id==Id}" class="list_autor">主讲：{{x.Nickname}}</p>
					<p :class="{'playing': x.Id==Id}" class="list_keywords">关键词：{{x.Tags}}</p>
					<p :class="{'playing': x.Id==Id}" class="list_time">{{x.AddTime}}</p>
				</div>
			</scroller>	
		</div>
	</div>
</template>
<script>
import {Range} from 'vux';
	export default {
		data(){
			return{
				timechange:0,
				play_but:require('../../assets/live/listen_btn_play@'+this.$store.state.dpr+'x.png'),
				cur_time:'0:00',
				all_time:'',
				all_time_sec:'',//总秒数
				audio:'',
				control:false,
				playing:require('../../assets/live/listen_icon_playing@'+this.$store.state.dpr+'x.png'),
				pageIndex:1,
				pageSize:8,
				datas:'',
				Nickname:'',//主讲
				AddTime:'',//时间
				Tags:'',//关键词
				Portrait:'',//头像
				Url:'',//地址
				Id:'',
				Ip:localStorage.seelistenIP
			}
		},
		components: {
		    Range,
	  	},
	  	mounted(){
	  		this.getdata();
	  		this.audio = document.getElementById('audio');
  			// this.audioAutoPlay('audio');
  			this.audio.onloadedmetadata=()=>{
  				this.all_time_sec=this.audio.duration;
  				this.all_time=this.$sectomin(this.audio.duration)
  			}
  			this.audio.addEventListener("timeupdate", this.showtime, true);
  			this.audio.addEventListener("ended",()=>{
  				this.play_but=require('../../assets/live/listen_btn_play@'+this.$store.state.dpr+'x.png');
  			}, true);
  			this.$refs.comnot.style.height=document.documentElement.clientHeight-this.$refs.wrap.children[0].clientHeight-20+'px';
	  	},
	  	activated(){
	    	document.title="听早课";
	 	},
	  	methods:{
	  		tstart(){
	  			this.audio.pause();
	  			this.control=true;
	  		},
	  		tend(){
	  			this.control=false;
	  			this.audio.play();
	  		},
	  		play(){
	  			if(this.audio.paused){
	  				this.audio.play();
	  				this.play_but=require('../../assets/live/listen_btn_stop@'+this.$store.state.dpr+'x.png');
	  			}else{
	  				this.audio.pause();
	  				this.play_but=require('../../assets/live/listen_btn_play@'+this.$store.state.dpr+'x.png');
	  			}
	  		},
	  		onChange (val) {
	  			if(this.control){
	  				let cur_change=this.timechange/100*this.all_time_sec;
		  			this.audio.currentTime=cur_change;
		  			this.cur_time=this.$sectomin(cur_change);
		  			this.play_but=require('../../assets/live/listen_btn_stop@'+this.$store.state.dpr+'x.png');
	  			}
		    },
	  		audioAutoPlay(id){
	            this.audio.play();
	            this.play_but=require('../../assets/live/listen_btn_stop@'+this.$store.state.dpr+'x.png');
	            document.addEventListener("WeixinJSBridgeReady", ()=>{
	                this.audio.play();
	            }, false);
	        },
	        showtime(){
	        	if(this.audio.paused)
	        		this.play_but=require('../../assets/live/listen_btn_play@'+this.$store.state.dpr+'x.png');
	        	else
					this.play_but=require('../../assets/live/listen_btn_stop@'+this.$store.state.dpr+'x.png');
	        	this.cur_time=this.$sectomin(this.audio.currentTime);
	        	this.timechange=this.audio.currentTime/this.all_time_sec*100;
	        },
	        //切换音频
	        switchit(val){
        		this.Nickname=val.Nickname;
	    		this.AddTime=val.AddTime;
	    		this.Tags=val.Tags;
	    		this.Portrait=val.Portrait;
	    		this.Url=val.Url;
	    		this.Id=val.Id;
	    		this.cur_time='0:00';
	    		this.audio.onloadedmetadata=()=>{
	  				this.all_time_sec=this.audio.duration;
	  				this.all_time=this.$sectomin(this.audio.duration)
	    			this.audioAutoPlay('audio');
	  			}

	        },
	        getdata(){
	 			//显示loading
				this.$vux.loading.show({text: '正在加载'})
			  	this.$axios({
				    method:"GET",
				    url:localStorage.core2+'LiveVideos',
				    params:{
		        		type:2,
		        		pageIndex:this.pageIndex,
			      		pageSize:this.pageSize
				  	}
				})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.datas=response.data.Data.Data;
			    		this.Nickname=this.datas[0].Nickname;
			    		this.AddTime=this.datas[0].AddTime;
			    		this.Tags=this.datas[0].Tags;
			    		this.Portrait=this.datas[0].Portrait;
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
			        		type:2,
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
	  	},
	}
</script>