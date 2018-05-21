<style lang="less" scoped>
	.com_not{
			position: relative;
		}
	.res_head{
		width:100%;
		background: #FFFFFF;
		margin-bottom: 0.1rem;
		display: flex;
		&>div{
			height:2.8rem;
			width:100%;
			&>div:nth-child(1){
				height:0.6rem;
				width:100%;
				position:relative;
				span{
					font-family: PingFangSC-Regular;
					font-size: 0.24rem;
					color: #999999;
					letter-spacing: 1.6px;
					float:left;
					line-height:0.6rem;
					padding-left:0.3rem;
				}
				&>span:nth-child(2){
					height:0.24rem;
					width:1px;
					border:none;
					background:#999999;
					padding-left:0;
					margin:0.2rem 0 0 0.3rem;

				}
				.fontred{
					color:#FF5E45;
				}
			}
			&>div:nth-child(2){
				width:96%;
				margin:0 auto;
				margin-top:0.2rem;
				height:1.6rem;
				box-sizing:border-box;
				border-bottom:1px solid #D8D8D8;
				display:flex;
				justify-content:space-around;
				&>div{
					flex:1;
					height:100%;
					box-sizing:border-box;
					position:relative;
					text-align:center;
					div{
						height:1.6rem;
						width:0.4rem;
						margin:0 auto;
						background:#9BCFFF;
						position:relative;
						top: -0.4rem;
						box-sizing: content-box;
					}
					p{
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						letter-spacing: 0;
						white-space: nowrap;
					}
					p:nth-child(1){
						position:relative;
						top:-0.4rem;
						color: #999999;
					}
					p:nth-child(3){
						position:relative;
						color: #378AD6;
						top:-0.4rem;
					}
				}
			}
		}
	}

</style>
<template>
	<div>
		<div class="res_head">
			<div v-if="bardatas">
				<div>
					<span @click="research(1)" :class="{ 'fontred': fontred }">买入家数</span>
					<span></span>
					<span @click="research(0)" :class="{ 'fontred': !fontred }">增持家数</span>
				</div>
				<div>
					<div v-for="(x,index) in bardatas" @click="othercode(index,x.Code)" ref='div'>
						<p :style="'top:'+(1.6*(1-Number(x.Sum)/max)-0.4)+'rem;'">{{x.Sum}}</p>
						<div :style="'height:'+1.6*Number(x.Sum)/max+'rem;top:'+(1.6*(1-Number(x.Sum)/max)-0.4)+'rem;'"></div>
						<p :style="'top:'+(1.6*(1-Number(x.Sum)/max)-0.4)+'rem;'">{{x.Company|capitalize}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="com_not" ref="comnot">
			<scroller ref="stopscroller" :on-infinite="infinite">
				<v-panel v-for="x in datas" @click.native="godetail(x.Id)" :time="x.TimeBefore" :imgsrc="x.Rating" :text='x.Title' :resactive="true" :key="x.id">
				</v-panel>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vPanel from '../panel.vue';
	import Vue from 'vue';
	export default {
	    name: 'v-research',
	    props:['isreload'],
	    components: {
			vPanel
		},
	    data(){
	    	return{
		     	datas:'',
				fontred:true,
				bardatas:'',
				max:'',
				//索引
				resindex:1,
				//間隔
				resnum:8,
				position:'',
				codecode:'',
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
		 //过滤
		filters: {
			capitalize: function (value) {
				if (!value) return ''
				if(value.length>5){
					value=value.substring(0,5)+'...'
				}
				return value
			},
		},
		methods:{
			getdata(){
				this.codecode=this.$route.query.code;
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetReportList', {
					code:this.codecode,
					startIndex:this.resindex,
					endIndex:this.resindex+this.resnum
				})
				.then((response)=>{
					// 隐藏loading
					this.$vux.loading.hide()
					if(response.data.Success=="true"){
						this.datas=response.data.Reportses
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
				//柱状图
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetReportSum', {
					type:1,
					Code:this.codecode
				})
				.then((response)=>{
					// 隐藏loading
					this.$vux.loading.hide()
					if(response.data.Success=="true"){
						if(response.data.List.length!=0){
							this.bardatas=response.data.List;
							this.max=Number(this.bardatas[0].Sum)
							this.bardatas.forEach((value,index,arr)=>{
								if(Number(value.Sum)>this.max)this.max=Number(value.Sum)
							})
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
					;
			    	console.log(error);
			  	});
		   },
			research(val){
				//柱状图
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetReportSum', {
					type:val,
					Code:this.codecode
				})
				.then((response)=>{
					// 隐藏loading
					this.$vux.loading.hide()
					if(response.data.Success=="true"){
						if(response.data.List.length!=0){
							this.bardatas=response.data.List;
							this.max=Number(this.bardatas[0].Sum)
							this.bardatas.forEach((value,index,arr)=>{
								if(Number(value.Sum)>this.max)this.max=Number(value.Sum)
							})
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
					;
			    	console.log(error);
			  	});
				if(val==1){
					this.fontred=true;
				}else{
					this.fontred=false;
				}
				for(var i=0;i<this.$refs.div.length;i++)this.$refs.div[i].children[1].style.background='#9BCFFF';
			},
			//选项卡操作
			othercode(val,code){
				for(var i=0;i<this.$refs.div.length;i++)this.$refs.div[i].children[1].style.background='#9BCFFF';
				this.$refs.div[val].children[1].style.background='#FFCA8A';
				//获取研报
				this.resindex=1;
				//间隔数
				this.resnum=8;
				this.codecode=code;
				//显示loading
				this.$vux.loading.show({text: '正在加载'})
				this.$axios.post('GetReportList', {
					code:this.codecode,
					startIndex:this.resindex,
					endIndex:this.resindex+this.resnum
				})
				.then((response)=>{
				console.log(response.data)
					// 隐藏loading
					this.$vux.loading.hide()
					if(response.data.Success=="true"){
						this.datas=response.data.Reportses
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
			},
		 	godetail(val){
		 		this.$emit('getdetail',{
		 			id:val,
		 			type:'res'
		 		})
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.resindex=this.resindex+this.resnum+1;
            		this.$axios.post('GetReportList', {
			      		code:this.codecode,
			      		startIndex:this.resindex,
			      		endIndex:this.resindex+this.resnum
			  		})
			  		.then((response)=>{
			    		if(response.data.Success=="true"){
			    			if(response.data.Reportses.length){
				    			response.data.Reportses.forEach((value,index,arr)=>{
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
						;
				    	console.log(error);
				  	});
		        })
	        }
		 }
	}
</script>