<style lang="less" scoped>
	div{
		box-sizing: border-box;
	}
	.vl_video{
		width: 100%;
		height:35%;
		border: 1px solid blue;
		background: #FFFFFF;
	}
	.comment{
		height:65%;
		width: 100%;
		border:1px solid red;
		overflow-y:scroll;
		position: relative;
	}
	.sec1{
		width:100%;
		display: flex;
		&>div:nth-child(2){
			height:100%;
			flex:5;
			box-sizing: border-box;
			display: inline-block;
			position: relative;
			padding-left: 0.3rem;
			&>div{
				border:none;
				height:0.4rem;
				position: absolute;
				top:0.2rem;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				letter-spacing: 1.6px;
			}
			&>div:nth-child(1){
				text-align: left;
			}
			span{
				display: inline-block;
				max-width:5.6rem;
				min-height: 0.8rem;
				background: #EBF3FA;
				border-radius:10px;
				margin-top:0.8rem;
				p{
					font-family: PingFangSC-Medium;
					font-size: 0.3rem;
					color: #000000;
					letter-spacing: 0;
					text-align: left;
					margin:0!important;
					padding:0.1rem 0.25rem;
					white-space:normal;
					word-wrap:break-word; 
					word-break:normal; 
				}
			}
			span:after {  
			    position: absolute;
			    border-top: 0.18rem solid transparent;
			    border-bottom: 0.18rem solid transparent;
			    border-right: 0.18rem solid #EBF3FA;
			    content: " ";
			    display: block;
			    width: 0;
			    height: 0;
			    top: 0.9rem;
				left: 0.18rem;
			}  
		}
		div:nth-child(1){
			flex:1;
			box-sizing:content-box;
			display: inline-block;
			position: relative;
			text-align: center;
			img{
				border-radius: 50%;
				height:0.7rem;
				width:0.7rem;
				position: relative;
				top:-0.3rem;
			}
			p{
				position: relative;
				top:-0.5rem;
				padding-left:0!important;
			}
		}
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.25rem;
			color: #000000;
			letter-spacing: 2px;
			line-height: 0.42rem;
			white-space:nowrap;
			overflow:hidden;
		}
	}
	.sec2{
		width:100%;
		display: flex;
		&>div:nth-child(1){
			height:100%;
			flex:5;
			box-sizing: border-box;
			display: inline-block;
			position: relative;
			padding-left: 0.3rem;
			text-align: right;
			&>div{
				border:none;
				height:0.4rem;
				position: absolute;
				top:0.2rem;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				letter-spacing: 1.6px;
			}
			&>div:nth-child(1){
				width: 5.6rem;
				text-align: right;
			}
			span{
				display: inline-block;
				max-width:5.6rem;
				min-height: 0.8rem;
				background: #EBF3FA;
				border-radius:10px;
				margin-top:0.8rem;
				margin-right: 0.3rem;
				p{
					font-family: PingFangSC-Medium;
					font-size: 0.3rem;
					color: #000000;
					letter-spacing: 0;
					text-align: left;
					margin:0!important;
					padding:0.1rem 0.25rem;
					white-space:normal;
					word-wrap:break-word; 
					word-break:normal; 
				}
			}
			span:after {  
			    position: absolute;
			    border-top: 0.18rem solid transparent;
			    border-bottom: 0.18rem solid transparent;
			    border-left: 0.18rem solid #EBF3FA;
			    content: " ";
			    display: block;
			    width: 0;
			    height: 0;
			    top: 0.9rem;
				right: 0.18rem;
			}  
		}
		div:nth-child(2){
			flex:1;
			box-sizing:content-box;
			display: inline-block;
			position: relative;
			text-align: center;
			img{
				border-radius: 50%;
				height:0.7rem;
				width:0.7rem;
				position: relative;
				top:-0.3rem;
			}
			p{
				position: relative;
				top:-0.5rem;
				padding-left:0!important;
			}
		}
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.25rem;
			color: #000000;
			letter-spacing: 2px;
			line-height: 0.42rem;
			white-space:nowrap;
			overflow:hidden;
		}
	}
	.weui-toast.vux-toast-bottom{
		transform:translateX(0);
		-webkit-transform:translateX(0);
	}

.comment::-webkit-scrollbar{
	display: none;
}
</style>
<template>
	<div ref="wrap">
		<div class="vl_video" ref="video">
			<video id="html5player-video" src="http://58.52.135.218:474/54880976_54880976_22902_0_0_15013.m3u8?uuid=89b23ef478434603a2b958001e5b2e8d&org=yyweb&m=5594a89202dd31431bb7ae6a74f0f918&r=2123714090&v=1&t=1503452282&uid=0&ex_audio=0&ex_coderate=700&ex_spkuid=0" data-setup="{}" x5-video-player-type="h5" x5-video-player-fullscreen="true" webkit-playsinline="true" playsinline="true" preload="auto" width="100%" height="100%" style="transform: scale(1);" controls="controls">
   			</video>
		</div>
		<div class="comment" ref="comment">
			<section v-for="x in datas" class="sec1" ref="sec">
				<div style="overflow:hidden;">
					<img src="">
				</div>
				<div>
					<div>名字</div>
					<span><p style="color:#333333;">{{x}}</p></span>
				</div>
			</section>
			<!-- <section class="sec2">
				<div>
					<div>时间</div>
					<span><p style="color:#333333;">测试</p></span>
				</div>
				<div style="overflow:hidden;">
					<img src="">
					<p style="font-size:0.24rem;">名字名字名字</p>
				</div>
			</section> -->
		</div>
		<toast @click.native="gobottom" v-model="showPositionValue" :time="500000" type="text" :width="'2.5rem'" :text="'新消息+'+count" :position="'bottom'"></toast>
	</div>
</template>
<script>
	import { Toast } from 'vux';
	export default {
		data(){
			return{
				datas:[1,2,3,4,5,6,7],
				showPositionValue:false,
				count:0,
			}
		},
		components:{
			Toast,
		},
		created(){
			//获取userId
	    	if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
		},
		mounted(){
			//todo:在条目超过2000条的时候，删除超出的队列
			document.querySelector('.comment').onscroll =()=>{
				if(document.querySelector('.comment').scrollTop==this.$refs.wrap.children[1].scrollHeight-this.$refs.wrap.children[1].clientHeight){
	      			this.showPositionValue=false;
					this.count=0;
				}
			}
			this.$refs.wrap.style.height=document.documentElement.clientHeight+'px';
			let i=0;
			// setInterval(()=>{
			// 	this.datas.push(i++);
			// 	if(this.isscroll()){
			// 		setTimeout(()=>{
			// 			this.gobottom();
			// 		})
			// 	}else{
			// 		this.count++;
			// 		this.showPositionValue=true;
			// 	}
			// },1000)
			// const vm = this.$refs.iframe.contentDocument
			
		},
		activated(){
            document.title='视频直播';
	    },
	    methods:{
	    	gobottom(){
	      		this.showPositionValue=false;
				this.count=0;
	      		document.querySelector('.comment').scrollTop=this.$refs.wrap.children[1].scrollHeight;
	      	},
	      	//判断是否要滚动到底部
	      	isscroll(){
	      		if(document.querySelector('.comment').scrollTop<this.$refs.wrap.children[1].scrollHeight-this.$refs.wrap.children[1].clientHeight)
	      			return false
	      		else
	      			return true
	      	}
	    }
	}
</script>