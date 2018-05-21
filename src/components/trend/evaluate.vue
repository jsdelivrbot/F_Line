<style lang="less" scoped>
	.com_not{
		position: relative;
	}
</style>
<template>
	<div>
		<div class="com_not" ref="comnot">
			<scroller ref="stopscroller" :on-infinite="infinite">
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
	    name: 'v-evaluate',
	    data () {
		    return {
		     	datas:'',
		     	evaluateindex:1,
		     	evaluatepagesize:8,
		     	position:''
			}
		},
		created(){
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios.post('GetImportantNewsList', {
		      nowPage:this.evaluateindex,
		      pageSize:this.evaluatepagesize
		  	})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.List
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
		 mounted(){
		 	this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
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
		 	godetail(val){
		 		this.$emit('getdetail',{
		 			id:val,
		 			type:'evaluate'
		 		})
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.evaluateindex++;
            		this.$axios.post('GetImportantNewsList', {
			      		nowPage:this.evaluateindex,
			      		pageSize:this.evaluatepagesize
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
						;
				    	console.log(error);
				  	});
		        })
	        }
		 }
	}
</script>