<style lang="less" scoped>
	section{
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
				&>div:nth-child(2){
					right:0.4rem;
					img{
						width:0.3rem;
						position: relative;
						top:0.05rem;
					}
					color:#999999;
				}
				span{
					display: block;
					width:5.6rem;
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
    				left: 0.15rem;
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
		.weui-toast.vux-toast-bottom{
			transform:translateX(0);
			-webkit-transform:translateX(0);
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
</style>
<template>
	<div>
		<div ref="comnot">
			<scroller 
		      :on-refresh="refresh"
		      :refreshText="'加载历史记录'"  ref="scroller">
	      		<section v-for="live in datas" ref="sec">
					<div style="overflow:hidden;">
						<img :src="imgip+live.AdvPortrait">
						<p style="font-size:0.24rem;">{{live.AdvName}}</p>
					</div>
					<div>
						<div>{{live.DateTime}}</div>
						<div @click="clickzan(live)">
							{{live.Good}}
							<img :src="live.IsGood==1?'static/images/zan/home_live_icon_praise_red@3x.png':'static/images/zan/home_live_icon_praise@3x.png'">
						</div>
						<span><p style="color:#333333;">{{live.Text}}</p></span>
					</div>
				</section>
		    </scroller>
		</div>
		<toast @click.native="gobottom" v-model="showPositionValue" type="text" :time="3000" :width="'2.5rem'" :text="'新消息+1'" :position="'bottom'"></toast>
		<div v-transfer-dom>
          <popup v-model="showpopup">
            <div class="popup">
                <img src="../../assets/qrcode.jpg">
                <p>长按图片关注公众号<br>体验更多功能</p>
            </div>
          </popup>
        </div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import _Socket from '../../plugins/heartbeat';
	import { Toast } from 'vux';
	import { TransferDomDirective as TransferDom,Popup} from 'vux';
	export default{
		components:{
			Toast,
			Popup
		},
		data(){
			return{
				datas:[],
				zan0:true,
				showPositionValue:false,
				showpopup:false,
				imgip:localStorage.picIP
			}
		},
		directives: {
	        TransferDom
	    },
		created(){
			var _that=this;
			//获取userId
	    	if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
			let livedata={
        		header:'01',
        		id:'1',
        		type:'0',
        		userId:sessionStorage.userId//待定
        	}
			if(!Vue.$livesoket){
				Vue.$livesoket=_Socket.createWebSocket('ws://www.shangjin666.cn:7182/');
				Vue.$livesoket.onopen=function(){
					console.log('已上线')
			        if(!liveinterval){
			            var liveinterval=setInterval(function(){
			                if(Vue.$livesoket.readyState==1)Vue.$livesoket.send('000000');
			                console.log('直播：000000')
			            },30000) 
			        }
					Vue.$livesoket.send(JSON.stringify(livedata));
				}
			}else{
				Vue.$livesoket.send(JSON.stringify(livedata));
			}
			//消息接收
			Vue.$livesoket.onmessage=function(event){
				_that.showPositionValue=false;
				switch(JSON.parse(event.data).Type){
					//首次加载
					case '0':
						JSON.parse(event.data).List.forEach(function(value,index,arr){
							_that.datas.unshift(value);
						})
					break;	
					//推送的消息
					case '1':
						_that.datas.push(JSON.parse(event.data).List[0]);
						if(_that.showPositionValue==false)_that.showPositionValue=true;
					break;
					//历史消息
					case '2':
						// 没有更多数据
						if(JSON.parse(event.data).List.length==0){
		                    _that.$vux.toast.show({
		                        text: '没有更多数据',
		                        type:'success',
		                        width:'2.5rem',
		                        time:2000,
		                        isShowMask:true,
		                    })
						}else{
							JSON.parse(event.data).List.forEach(function(value,index,arr){
								_that.datas.unshift(value);
							})
						}
					break;
					//返回的点赞消息
					case '3':	
						console.log(JSON.parse(event.data))
						if(JSON.parse(event.data).Success=="true"){
							_that.datas.forEach((value,index,arr)=>{
								if(value.AdvId==Number(JSON.parse(event.data).Id)){
									value.IsGood=1;
									value.Good=Number(value.Good)+1;
								}
							})
						}else{
							_that.$vux.toast.show({
		                        text: '点赞失败',
		                        type:'warn',
		                        width:'2.5rem',
		                        time:2000,
		                        isShowMask:true,
		                    })
						}
					break;	
				}
			}
		},
		mounted(){
			this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
			let _height=0;
			setTimeout(()=>{
				if(!this.$refs.sec)return
				this.$refs.sec.forEach((value,index,arr)=>{
	      			_height+=value.clientHeight
	      		})
	      		_height+=60;
	      		var scrollvalue=_height-document.documentElement.clientHeight;
	      		if(scrollvalue>0)this.$refs.scroller.scrollTo(0,scrollvalue,true);
			},50)
		},
		methods: {
			//获取更多数据
	      	refresh (done) {
	      		var _that=this;
		        setTimeout(() => {
		        	let len=_that.datas.length;
		        	let adId=_that.datas[len-1].AdvId
		        	let senddata={
		        		header:'01',
		        		id:adId,
		        		type:'2',
		        		userId:sessionStorage.userId//待定
		        	}
		          	Vue.$livesoket.send(JSON.stringify(senddata));
		          	done()
	        	}, 1500)
	      	},
	      	gobottom(){
	      		this.showPositionValue=false;
	      		//todo:待修改  getposition
	      		let _height=0;
	      		this.$refs.sec.forEach((value,index,arr)=>{
	      			_height+=value.clientHeight
	      		})
	      		this.$refs.scroller.scrollTo(0,_height,true);
	      	},
	      	//点赞
	      	clickzan(val){
	      		if(val.IsGood!=1&&sessionStorage.userId!='undefined'){
	      			let senddata={
		        		header:'01',
		        		id:val.AdvId,
		        		type:'1',
		        		userId:sessionStorage.userId
		        	}
	      			console.log('进入点赞',senddata)
		          	Vue.$livesoket.send(JSON.stringify(senddata));
		        }else if(sessionStorage.userId=='undefined'){
		        	this.showpopup=true;
		        }
	      	}
	    },
	    activated(){
            document.title='投顾直播';
	    },
	}
</script>