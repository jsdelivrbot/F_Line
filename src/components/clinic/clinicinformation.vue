<style lang="less" scoped>
.com_not{
		position: relative;
	}
</style>
<template>
	<div>
		<div class="com_not" ref="comnot">
			<scroller  ref="stopscroller" :on-infinite="infinite">
				<v-panel v-for="x in datas" @click.native="godetail(x.Id)" :imgsrc="'info'" :time='x.TimeBefore.replace("公告日期：","")' :text='x.Title' :infoactive="true" :key="x.id">
				</v-panel>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vPanel from '../panel.vue';
	import Vue from 'vue';
	export default {
		components: {
			vPanel
		},
	    name: 'v-info',
	    props:['isreload'],
	    data () {
		    return {
		     	datas:'',
		 		//获取公告
		     	infoindex:1,
		     	//间隔数
		     	infonum:8,
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
	 			//显示loading
				this.$vux.loading.show({text: '正在加载'})
		        this.$axios.post('GetNewsList', {
			      code:this.$route.query.code, 
			      startIndex:this.infoindex,
			      endIndex:this.infoindex+this.infonum
			  	})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.datas=response.data.Newses
			    		console.log(this.datas)
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
		 			type:'info'
		 		})
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.infoindex=this.infoindex+this.infonum+1;
            		this.$axios.post('GetNewsList', {
			      		code:this.$route.query.code,// 
			      		startIndex:this.infoindex,
			      		endIndex:this.infoindex+this.nfonum
			  		})
			  		.then((response)=>{
			    		if(response.data.Success=="true"){
			    			//判断是否有数据
				    		if(response.data.Newses.length){
				    			response.data.Newses.forEach((value,index,arr)=>{
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