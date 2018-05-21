<style lang="less" scoped>
.com_not{
		position: relative;
		top:-0.4rem;
	}
.mes_bar{
    width:100%;
    height:0.6rem;
    opacity: 0.9;
    background: #378AD6;
    position:absolute;
    top:3.9rem;
    z-index:100;
    font-family: PingFangSC-Regular;
    font-size: 0.3rem;
    color: #FFFFFF;
    letter-spacing: 3.33px;
    text-align:center;
    line-height:0.6rem;
    transition:0.75s;
}
.hidebar{
    opacity:0;
}
.forwrap{
	width:100%;
	height:1.8rem;
}
.main_power{
	width:100%;
	height:100%;
	margin-top:0.1rem;
	background: #FFFFFF;
	.showred span{
		color:#FF5E45;
	}
	.showgreen span{
		color:#1CB64A;
	}
	.power_name1{
		font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		letter-spacing: 2px;
		color:black!important;
		font-weight:500;
	}
	.power_name2{
		font-family: PingFangSC-Medium;
		font-size: 0.3rem;
		letter-spacing: 2px;
		font-weight:500;
	}
	.power_name3{
		font-family: PingFangSC-Medium;
		font-size:0.24rem;
		letter-spacing: 2px;
		font-weight:500;
	}
	.forcenter{
		text-align: center!important;
		padding-left:0!important;
	}
}
.card-demo-flex {
 	 display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: left;
  padding-left:0.6rem;
  font-size: 12px;
}
.lastm:after{
	border-right:none;
}
.firstm:before{
	border-left:none;
}
.showred{
	color:#FF5E45;
}
.showgreen{
	color:#1CB64A;
}
.forcenter{
	text-align: center!important;
	padding-left: 0!important;
}
.headimg{
	width:100%;
	height:1.8rem;
}
</style>
<template>
	<div>
		<div class="forwrap">
			<div class='main_power'v-if="datas1">
			    <div slot="content" class="card-demo-flex card-demo-content01" >
			        <div class="vux-1px-l vux-1px-r firstm forcenter" @click="gotrend('000001')" :class="[Number(datas1[0].nowPrice)>0 ? 'showred' :'showgreen']"> 
			          <span class="power_name1">{{datas1[0].name}}</span><br>
			          <span class="power_name2">{{datas1[0].nowPoints}}</span><br>
			          <span class="power_name3">{{datas1[0].nowPrice}} {{datas1[0].diff_rate}}%</span>
			        </div>
			        <div class="vux-1px-r forcenter" @click="gotrend('399001')" :class="[Number(datas1[1].nowPrice)>0 ? 'showred' :'showgreen']" >
			          <span class="power_name1">{{datas1[1].name}}</span><br>
			          <span class="power_name2">{{datas1[1].nowPoints}}</span><br>
			          <span class="power_name3">{{datas1[1].nowPrice}} {{datas1[1].diff_rate}}%</span>
			        </div>
			        <div class="vux-1px-r lastm forcenter" @click="gotrend('399006')" :class="[Number(datas1[2].nowPrice)>0 ? 'showred' :'showgreen']" >
			          <span class="power_name1">{{datas1[2].name}}</span><br>
			          <span class="power_name2">{{datas1[2].nowPoints}}</span><br>
			          <span class="power_name3">{{datas1[2].nowPrice}} {{datas1[2].diff_rate}}%</span>
			        </div>
			    </div>
			</div>
		</div>
		<img :src="headimg" class="headimg">
        <div class="mes_bar" :class="{'hidebar':hidebar}">{{mes_num}}条信息更新</div>
		<div class="com_not" ref="comnot">
			<scroller ref="stopscroller"  :on-infinite="infinite">
				<v-mes v-for="x in datas" :time='x.TimeBefore.replace("公告日期：","")' :text='x.Text' :name="x.ScreenName" :key="x.id">
				</v-mes>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vMes from '../../components/mes.vue';
	import Vue from 'vue'
	import _Socket from '../../plugins/heartbeat';
	export default {
		components: {
			vMes
		},
	    data () {
		    return {
                datas:'',
                hidebar:false,
                //大盘指数数据
    			datas1:'',
    			mes_num:'',
    			mesindex:1,
    			mesnum:8,
    			position:'',
    			headimg:require('../../assets/index/news_img@' + this.$store.state.dpr + 'x.png'),
			}
		},
		mounted(){
			var _that=this;
			//获取大盘指数
		    let timestamp=(new Date()).valueOf();
			let signdata=this.$socketsign('601006&2&1&'+timestamp);
			let senddata={
				APPID:this.$store.state.APPID,
				code:'601006',
				type:'2',
				sub:'1',
				timestamp:timestamp,
				signed:signdata
			}
			//socket通讯
			if(!Vue.$socket){
				Vue.$socket=_Socket.createWebSocket('ws://www.shangjin666.cn:7181/');
				Vue.$socket.onopen=function(){
					console.log('已连接')
			        if(!interval){
			            var interval=setInterval(function(){
			                if(Vue.$socket.readyState==1)Vue.$socket.send('000000');
			                console.log('全局：000000')
			            },30000) 
			        }
			        Vue.$socket.send(JSON.stringify(senddata));
			    }
			}else{
				Vue.$socket.send(JSON.stringify(senddata));
			}
			//消息接收
			Vue.$socket.onmessage=function(event){
				_that.datas1=JSON.parse(event.data);
			}
            //隐藏消息栏
            setTimeout(()=>{
                this.hidebar=true;
            },2000)
			this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios.post('GetDiscussList', {
		      nowPage:this.mesindex,
		      num:this.mesnum
		  	})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.List;
		    		this.mes_num=response.data.newSum;
		    		if(!localStorage.messagesum){
		    			localStorage.messagesum=response.data.Sum;
		    			this.mes_num=localStorage.messagesum;
		    		}else{
		    			this.mes_num=Number(response.data.Sum)-Number(localStorage.messagesum);
		    			localStorage.messagesum=response.data.Sum;
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
	  	activated(){
 			if(this.position){
				 setTimeout(()=>{
			        this.$refs.stopscroller.scrollTo(0, this.position, false)
			    })
 			}
		 },
		 deactivated(){
		 	//获取滚动位置
	 		this.position=this.$refs.stopscroller.getPosition().top;
		 	//停止滚动加载
		 	this.$refs.stopscroller.finishInfinite(true)
		 },
		 methods:{
		 	gotrend(val){
		 		// this.$router.push({
		   //  		path:'marketTrend',
		   //  		query:{
		   //  			routefrom:'上证指数',
		   //  			code:val
		   //  		}
		   //  	});
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.mesindex++;
            		this.$axios.post('GetDiscussList', {
			      		nowPage:this.mesindex,
			      		num:this.mesnum
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
		 },
		activated(){
            document.title='消息';
	    },
	}
</script>