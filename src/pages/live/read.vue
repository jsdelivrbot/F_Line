<style lang="less" scoped>
.com_not{
		position: relative;
	}
</style>
<template>
	<div>
		<div class="com_not" ref="comnot">
			<scroller  ref="stopscroller" :on-infinite="infinite"  :noDataText="'已全部加载'">
				<v-panel v-for="x in datas" @click.native="godetail(x.Id)" :imgsrc="'info'" :time='x.AddTime' :text='x.Title' :infoactive="true" :key="x.id">
				</v-panel>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vPanel from '../../components/panel.vue';
	import Vue from 'vue';
	export default {
		components: {
			vPanel
		},
	    data () {
		    return {
		     	datas:'',
		     	nowPage:1,
		     	pageSize:8,
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
	    	document.title="读文章";
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
				this.$axios({
				    method:"GET",
				    url:localStorage.core2+'MornReports',
				    params:{
		        		nowPage:this.nowPage,
			      		pageSize:this.pageSize
				  	}
				})
			  	.then((response)=>{
			  		// 隐藏loading
					this.$vux.loading.hide()
			    	if(response.data.Success=="true"){
			    		this.datas=response.data.Data.Data
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
		 		this.$router.push({
		    		path:'readcontent',
		    		query:{
		    			id:val
		    		} 
		    	});
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	this.nowPage++;
            		this.$axios({
					    method:"GET",
					    url:localStorage.core2+'MornReports',
					    params:{
			        		nowPage:this.nowPage,
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